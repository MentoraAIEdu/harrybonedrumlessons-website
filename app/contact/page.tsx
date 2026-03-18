import type { Metadata } from "next";
import { TypeformEmbed } from "../components/TypeformEmbed";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Harry Bone for drum lessons in Bristol. WhatsApp, email, or fill in the contact form.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="hero-gradient py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[var(--color-foreground)]">
            Get in touch
          </h1>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            Drop me a message below and I&apos;ll get back to you within 24 hours.
            Or WhatsApp me for a quicker response — I usually reply within the hour.
          </p>
        </div>
      </section>

      {/* ─── Contact options ─────────────────────────────── */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-4 mb-12">
          <a
            href="https://wa.me/447984263112"
            target="_blank"
            rel="noopener noreferrer"
            className="card-glow bg-[var(--color-card)] border border-[var(--color-card-border)] rounded-xl p-5 text-center transition-all duration-300 hover:border-[var(--color-green)]"
          >
            <p className="font-semibold text-[var(--color-foreground)] mb-1">WhatsApp</p>
            <p className="text-sm text-[var(--color-muted)]">Quickest way to reach me</p>
          </a>

          <a
            href="mailto:harrybonedrumlessons@gmail.com"
            className="card-glow bg-[var(--color-card)] border border-[var(--color-card-border)] rounded-xl p-5 text-center transition-all duration-300 hover:border-[var(--color-green)]"
          >
            <p className="font-semibold text-[var(--color-foreground)] mb-1">Email</p>
            <p className="text-sm text-[var(--color-muted)] break-all">harrybonedrumlessons@gmail.com</p>
          </a>

          <div className="bg-[var(--color-card)] border border-[var(--color-card-border)] rounded-xl p-5 text-center">
            <p className="font-semibold text-[var(--color-foreground)] mb-1">Location</p>
            <p className="text-sm text-[var(--color-muted)]">Bristol, UK</p>
          </div>
        </div>
      </section>

      {/* ─── Typeform ────────────────────────────────────── */}
      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <TypeformEmbed formId="MV64VUh7" />
        </div>
      </section>
    </main>
  );
}
