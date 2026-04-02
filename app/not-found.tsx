import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen pt-24 px-6">
      <div className="max-w-3xl mx-auto py-20 text-center">
        <h1 className="text-5xl font-bold mb-4 text-[var(--color-foreground)]">
          404
        </h1>
        <p className="text-lg text-[var(--color-muted)] mb-8">
          This page doesn&apos;t exist. Maybe you were looking for one of these?
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="bg-[var(--color-green)] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[var(--color-green-light)] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/lessons"
            className="bg-[var(--color-card)] border border-[var(--color-card-border)] text-[var(--color-foreground)] px-5 py-2.5 rounded-lg font-medium hover:border-[var(--color-green)] transition-colors"
          >
            Lessons & Pricing
          </Link>
          <Link
            href="/blog"
            className="bg-[var(--color-card)] border border-[var(--color-card-border)] text-[var(--color-foreground)] px-5 py-2.5 rounded-lg font-medium hover:border-[var(--color-green)] transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="bg-[var(--color-card)] border border-[var(--color-card-border)] text-[var(--color-foreground)] px-5 py-2.5 rounded-lg font-medium hover:border-[var(--color-green)] transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
