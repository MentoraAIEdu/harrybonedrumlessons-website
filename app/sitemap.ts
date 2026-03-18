import type { MetadataRoute } from "next";

async function getBlogSlugs(): Promise<
  { slug: string; lastModified: string }[]
> {
  const notionKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;
  if (!notionKey || !databaseId) return [];

  try {
    const res = await fetch(
      `https://api.notion.com/v1/databases/${databaseId}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${notionKey}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ page_size: 100 }),
      }
    );
    if (!res.ok) return [];
    const data = await res.json();

    return (data.results || []).map(
      (page: Record<string, unknown>) => {
        const props = (page as { properties: Record<string, Record<string, unknown>> }).properties;
        const slugArr = props["TD:slug"]?.rich_text as
          | Array<{ plain_text: string }>
          | undefined;
        const dateProp = props.Date?.date as
          | { start: string }
          | undefined;
        const slug =
          slugArr?.[0]?.plain_text || (page as { id: string }).id;
        return {
          slug,
          lastModified: dateProp?.start || new Date().toISOString(),
        };
      }
    );
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getBlogSlugs();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: "https://harrybonedrumlessons.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://harrybonedrumlessons.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://harrybonedrumlessons.com/lessons",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://harrybonedrumlessons.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://harrybonedrumlessons.com/reviews",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://harrybonedrumlessons.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `https://harrybonedrumlessons.com/blog/${post.slug}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
