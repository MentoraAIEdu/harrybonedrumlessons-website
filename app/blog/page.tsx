import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical drum learning insights for parents and students. Tips on practice, technique, and progress from Harry Bone.",
};

interface NotionPost {
  id: string;
  title: string;
  snippet: string;
  slug: string;
  cover: string | null;
  date: string;
}

async function getBlogPosts(): Promise<NotionPost[]> {
  const notionKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;

  if (!notionKey || !databaseId) {
    console.error("Blog: Missing env vars", {
      hasNotionKey: !!notionKey,
      hasDatabaseId: !!databaseId,
    });
    return [];
  }

  const res = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${notionKey}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sorts: [{ property: "Date", direction: "descending" }],
      page_size: 100,
    }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    console.error("Blog: Notion API error", res.status, await res.text().catch(() => ""));
    return [];
  }

  const data = await res.json();

  return data.results.map((page: Record<string, unknown>) => {
    const props = page.properties as Record<string, Record<string, unknown>>;
    const titleProp = props.Name || props.Title;
    const titleArr = titleProp?.title as Array<{ plain_text: string }> | undefined;
    const snippetProp = props.Snippet || props.Description;
    const snippetArr = snippetProp?.rich_text as Array<{ plain_text: string }> | undefined;
    const dateProp = props.Date?.date as { start: string } | undefined;
    const slugProp = props["TD:slug"] || props.Slug;
    const slugArr = slugProp?.rich_text as Array<{ plain_text: string }> | undefined;
    const coverProp = props.Cover?.files as Array<{ file?: { url: string }; external?: { url: string } }> | undefined;
    const pageCover = page.cover as { file?: { url: string }; external?: { url: string } } | null;

    return {
      id: page.id as string,
      title: titleArr?.[0]?.plain_text || "Untitled",
      snippet: snippetArr?.[0]?.plain_text || "",
      slug: slugArr?.[0]?.plain_text || (page.id as string),
      cover: coverProp?.[0]?.file?.url || coverProp?.[0]?.external?.url || pageCover?.file?.url || pageCover?.external?.url || null,
      date: dateProp?.start || "",
    };
  });
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen pt-24">
      <section className="hero-gradient py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[var(--color-foreground)]">
            Blog
          </h1>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-4">
            Practical insights on learning drums, written for parents of young
            drummers and students looking to improve. I share what I&apos;ve learned
            from teaching hundreds of lessons in Bristol — no perfectionism, no
            unrealistic promises, just honest advice that actually helps you (or
            your child) make real progress.
          </p>
          <p className="text-sm text-[var(--color-muted)]">
            Quick tip! Tap &quot;Show Reader&quot; by the URL for a cleaner reading experience.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-center text-[var(--color-muted)]">
              No posts yet. Check back soon!
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-[var(--color-card)] border border-[var(--color-card-border)] rounded-xl overflow-hidden hover:border-[var(--color-green)] transition-all duration-300"
                >
                  <div className="aspect-[16/10] bg-[var(--color-warm-bg)] flex items-center justify-center">
                    {post.cover ? (
                      <img
                        src={post.cover}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-4xl opacity-30">🥁</span>
                    )}
                  </div>

                  <div className="p-5">
                    {post.date && (
                      <p className="text-xs text-[var(--color-muted)] mb-2">
                        {new Date(post.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    )}
                    <h2 className="font-semibold text-[var(--color-foreground)] mb-2 group-hover:text-[var(--color-green)] transition-colors leading-snug">
                      {post.title}
                    </h2>
                    {post.snippet && (
                      <p className="text-sm text-[var(--color-muted)] line-clamp-3">
                        {post.snippet}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
