import type { Metadata } from "next";
import { SenjaEmbed } from "../components/SenjaEmbed";

export const metadata: Metadata = {
  title: "Student Reviews",
  description:
    "What students and parents say about drum lessons with Harry Bone in Bristol.",
};

export default function ReviewsPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="hero-gradient py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[var(--color-foreground)]">
            Student Reviews
          </h1>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            Don&apos;t just take my word for it — here&apos;s what my students
            and their parents have to say.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <SenjaEmbed widgetId="b45b3c37-6cad-4e77-a177-7e106905c7dc" />
        </div>
      </section>

      <section className="py-16 px-6 bg-[var(--color-warm-bg)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--color-foreground)]">
            Want to be next?
          </h2>
          <p className="text-[var(--color-muted)] mb-8">
            Book a trial lesson for &pound;10 and see for yourself.
          </p>
          <a
            href="/contact"
            className="bg-[var(--color-green)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-green-light)] transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
