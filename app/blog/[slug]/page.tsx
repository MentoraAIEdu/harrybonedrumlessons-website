import type { Metadata } from "next";
import Link from "next/link";

/* ── Typedream content types ──────────────────────────── */
interface TDTextNode {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  styled?: boolean;
}

interface TDBlock {
  type: string;
  id?: string;
  children?: (TDBlock | TDTextNode)[];
  align?: string;
  height?: number;
  url?: string;
  src?: string;
  level?: number;
}

function isTextNode(node: TDBlock | TDTextNode): node is TDTextNode {
  return "text" in node;
}

/* ── Render Typedream blocks ──────────────────────────── */
function renderTextChildren(children?: (TDBlock | TDTextNode)[]): React.ReactNode {
  if (!children) return null;
  return children.filter(isTextNode).map((child, i) => {
    let el: React.ReactNode = child.text;
    if (child.bold) el = <strong key={i}>{el}</strong>;
    if (child.italic) el = <em key={i}>{el}</em>;
    if (child.underline) el = <u key={i}>{el}</u>;
    if (!child.bold && !child.italic && !child.underline) return <span key={i}>{el}</span>;
    return el;
  });
}

function renderTDBlock(block: TDBlock, index: number): React.ReactNode {
  switch (block.type) {
    case "p": {
      const text = renderTextChildren(block.children);
      // Skip empty paragraphs but add spacing
      const plainText = block.children?.filter(isTextNode).map(c => c.text).join("") || "";
      if (!plainText.trim()) return <div key={index} className="h-3" />;
      return (
        <p key={index} className="text-[var(--color-muted)] leading-relaxed mb-4">
          {text}
        </p>
      );
    }
    case "h1":
      return (
        <h2 key={index} className="text-2xl font-bold text-[var(--color-foreground)] mt-8 mb-4">
          {renderTextChildren(block.children)}
        </h2>
      );
    case "h2":
      return (
        <h3 key={index} className="text-xl font-bold text-[var(--color-foreground)] mt-6 mb-3">
          {renderTextChildren(block.children)}
        </h3>
      );
    case "h3":
      return (
        <h4 key={index} className="text-lg font-semibold text-[var(--color-foreground)] mt-4 mb-2">
          {renderTextChildren(block.children)}
        </h4>
      );
    case "ul":
      return (
        <ul key={index} className="list-disc ml-6 mb-4 space-y-1">
          {block.children?.filter((c): c is TDBlock => !isTextNode(c)).map((li, i) => (
            <li key={i} className="text-[var(--color-muted)]">
              {renderTextChildren(li.children)}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={index} className="list-decimal ml-6 mb-4 space-y-1">
          {block.children?.filter((c): c is TDBlock => !isTextNode(c)).map((li, i) => (
            <li key={i} className="text-[var(--color-muted)]">
              {renderTextChildren(li.children)}
            </li>
          ))}
        </ol>
      );
    case "blockquote":
      return (
        <blockquote
          key={index}
          className="border-l-4 border-[var(--color-green)] pl-4 my-4 text-[var(--color-muted)] italic"
        >
          {block.children?.filter((c): c is TDBlock => !isTextNode(c)).map((child, i) =>
            renderTDBlock(child, i)
          )}
        </blockquote>
      );
    case "img":
    case "image": {
      const url = block.url || block.src;
      if (!url) return null;
      return (
        <figure key={index} className="my-6">
          <img src={url} alt="" className="rounded-xl w-full" />
        </figure>
      );
    }
    case "spacer":
      return <div key={index} style={{ height: Math.min(block.height || 20, 40) }} />;
    case "root":
      return (
        <div key={index}>
          {block.children?.filter((c): c is TDBlock => !isTextNode(c)).map((child, i) =>
            renderTDBlock(child, i)
          )}
        </div>
      );
    case "li":
      return (
        <li key={index} className="text-[var(--color-muted)]">
          {renderTextChildren(block.children)}
        </li>
      );
    default:
      // Try to render children if they exist
      if (block.children) {
        const textContent = block.children.filter(isTextNode).map(c => c.text).join("");
        if (textContent.trim()) {
          return (
            <p key={index} className="text-[var(--color-muted)] leading-relaxed mb-4">
              {renderTextChildren(block.children)}
            </p>
          );
        }
      }
      return null;
  }
}

/* ── Data fetching ────────────────────────────────────── */
async function getPostBySlug(slug: string) {
  const notionKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;

  if (!notionKey || !databaseId) return null;

  // Try finding by TD:slug first
  let page = null;

  const searchRes = await fetch(
    `https://api.notion.com/v1/databases/${databaseId}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${notionKey}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: {
          property: "TD:slug",
          rich_text: { equals: slug },
        },
      }),
      next: { revalidate: 3600 },
    }
  );

  if (searchRes.ok) {
    const searchData = await searchRes.json();
    page = searchData.results?.[0] || null;
  }

  // Fall back to page ID lookup
  if (!page) {
    const pageRes = await fetch(
      `https://api.notion.com/v1/pages/${slug}`,
      {
        headers: {
          Authorization: `Bearer ${notionKey}`,
          "Notion-Version": "2022-06-28",
        },
        next: { revalidate: 3600 },
      }
    );
    if (pageRes.ok) {
      page = await pageRes.json();
    }
  }

  if (!page) return null;

  const props = page.properties as Record<string, Record<string, unknown>>;
  const titleProp = props.Name || props.Title;
  const titleArr = titleProp?.title as Array<{ plain_text: string }> | undefined;
  const dateProp = props.Date?.date as { start: string } | undefined;

  // Get content from TD:page_content (Typedream stores content as a JSON URL)
  const contentProp = props["TD:page_content"]?.rich_text as Array<{ plain_text: string }> | undefined;
  const contentUrl = contentProp?.[0]?.plain_text;

  let tdBlocks: TDBlock[] = [];

  if (contentUrl && contentUrl.startsWith("http")) {
    try {
      const contentRes = await fetch(contentUrl, { next: { revalidate: 3600 } });
      if (contentRes.ok) {
        const rawContent = await contentRes.json();
        // Content is a JSON string that needs to be parsed
        const parsed = typeof rawContent === "string" ? JSON.parse(rawContent) : rawContent;
        tdBlocks = Array.isArray(parsed) ? parsed : [parsed];
      }
    } catch {
      // Content fetch failed, will show empty
    }
  }

  // Extract snippet from Notion or first paragraph of content
  const snippetProp = props.Snippet || props.Description;
  const snippetArr = snippetProp?.rich_text as Array<{ plain_text: string }> | undefined;
  let snippet = snippetArr?.[0]?.plain_text || "";

  // Fallback: extract first paragraph text from content
  if (!snippet && tdBlocks.length > 0) {
    const findFirstText = (blocks: (TDBlock | TDTextNode)[]): string => {
      for (const b of blocks) {
        if (isTextNode(b) && b.text.trim()) return b.text.trim();
        if (!isTextNode(b) && b.children) {
          const found = findFirstText(b.children);
          if (found) return found;
        }
      }
      return "";
    };
    snippet = findFirstText(tdBlocks).slice(0, 160);
  }

  // Get cover image
  const coverProp = props.Cover?.files as Array<{ file?: { url: string }; external?: { url: string } }> | undefined;
  const pageCover = page.cover as { file?: { url: string }; external?: { url: string } } | null;
  const coverUrl = coverProp?.[0]?.file?.url || coverProp?.[0]?.external?.url || pageCover?.file?.url || pageCover?.external?.url || null;

  // Get slug for canonical URL
  const slugProp = props["TD:slug"] || props.Slug;
  const slugArr = slugProp?.rich_text as Array<{ plain_text: string }> | undefined;
  const postSlug = slugArr?.[0]?.plain_text || (page.id as string);

  return {
    title: titleArr?.[0]?.plain_text || "Untitled",
    date: dateProp?.start || "",
    snippet,
    coverUrl,
    slug: postSlug,
    blocks: tdBlocks,
  };
}

/* ── Static params for pre-rendering ─────────────────── */
export async function generateStaticParams() {
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
    return (data.results || []).map((page: Record<string, unknown>) => {
      const props = (page as { properties: Record<string, Record<string, unknown>> }).properties;
      const slugArr = props["TD:slug"]?.rich_text as Array<{ plain_text: string }> | undefined;
      return { slug: slugArr?.[0]?.plain_text || (page as { id: string }).id };
    });
  } catch {
    return [];
  }
}

/* ── Metadata ─────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Blog Post" };

  const description = post.snippet || `${post.title} — drum learning insights from Harry Bone.`;
  const ogImage = post.coverUrl || "https://harrybonedrumlessons.com/harry-hero.jpg";

  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      url: `https://harrybonedrumlessons.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date || undefined,
      authors: ["Harry Bone"],
      images: [{ url: ogImage, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [ogImage],
    },
  };
}

/* ── Page ─────────────────────────────────────────────── */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return (
      <main className="min-h-screen pt-24 px-6">
        <div className="max-w-3xl mx-auto py-20 text-center">
          <h1 className="text-3xl font-bold mb-4 text-[var(--color-foreground)]">
            Post not found
          </h1>
          <Link href="/blog" className="text-[var(--color-green)] hover:underline">
            Back to blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24">
      <article className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-sm text-[var(--color-green)] hover:underline mb-8 inline-block"
          >
            &larr; Back to blog
          </Link>

          {post.date && (
            <p className="text-sm text-[var(--color-muted)] mb-4">
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}

          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-[var(--color-foreground)] leading-tight">
            {post.title}
          </h1>

          <div>
            {post.blocks.map((block, i) => renderTDBlock(block, i))}
          </div>
        </div>
      </article>
    </main>
  );
}
