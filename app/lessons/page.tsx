import type { Metadata } from "next";
import { TypeformEmbed } from "../components/TypeformEmbed";

export const metadata: Metadata = {
  title: "Lessons & Pricing",
  description:
    "Drum lessons in Bristol — studio or mobile. From £20/session. Trial lesson £10. Rockschool prep, song-based learning, all ages welcome.",
};

export default function LessonsPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* ─── Intro ───────────────────────────────────────── */}
      <section className="hero-gradient py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[var(--color-foreground)]">
            Lessons &amp; Pricing
          </h1>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            I&apos;ll help you learn the songs you want to play while building the
            technical foundation to support your growth. Every lesson is tailored
            to you.
          </p>
        </div>
      </section>

      {/* ─── What we cover ───────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[var(--color-foreground)]">
            What we&apos;ll work on
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-8">
            It depends on you. But here are the areas I typically cover:
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Song mastery",
                desc: "Learn the tracks you love with proper technique and musicality. This is what most students come for.",
              },
              {
                title: "Technical foundation",
                desc: "Coordination, timing, stick control, independence — the building blocks that make everything else possible.",
              },
              {
                title: "Custom exercises",
                desc: "When something's not clicking, I'll write exercises specifically for that challenge. No generic worksheets.",
              },
              {
                title: "Musical understanding",
                desc: "Reading notation, basic theory, understanding how drums fit into music. Not dry — always connected to real playing.",
              },
              {
                title: "Performance skills",
                desc: "Playing with others, managing nerves, thinking like a band member rather than a soloist.",
              },
              {
                title: "Rockschool grade prep",
                desc: "If exams are your thing, I'll get you ready. Structured prep, mock tests, and clear targets.",
              },
            ].map((area) => (
              <div
                key={area.title}
                className="bg-[var(--color-card)] border border-[var(--color-card-border)] rounded-xl p-5"
              >
                <p className="font-semibold text-[var(--color-foreground)] mb-1">
                  {area.title}
                </p>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Studio vs Mobile ────────────────────────────── */}
      <section className="py-16 px-6 bg-[var(--color-warm-bg)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[var(--color-foreground)]">
            Studio or your home — your choice
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-card-border)] rounded-xl p-6">
              <h3 className="font-semibold text-[var(--color-foreground)] mb-3">
                My home studio
              </h3>
              <ul className="space-y-2 text-sm text-[var(--color-muted)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-green)] mt-0.5">&#10003;</span>
                  Professional electronic drum setup
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-green)] mt-0.5">&#10003;</span>
                  No noise concerns
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-green)] mt-0.5">&#10003;</span>
                  Full technology integration
                </li>
              </ul>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-card-border)] rounded-xl p-6">
              <h3 className="font-semibold text-[var(--color-foreground)] mb-3">
                Your home (mobile)
              </h3>
              <ul className="space-y-2 text-sm text-[var(--color-muted)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-green)] mt-0.5">&#10003;</span>
                  Learn in your own space
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-green)] mt-0.5">&#10003;</span>
                  No travel fees
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-green)] mt-0.5">&#10003;</span>
                  Great for younger students
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How it works ────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[var(--color-foreground)]">
            How lessons work
          </h2>

          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>
              Lessons run on a rolling basis — typically 4 per month, but you can
              adjust the schedule to suit you. Everything is managed through the
              Student Portal where you (or your parents) can book, cancel, and
              reschedule easily.
            </p>
            <p>
              Auto-pay is available if you prefer hassle-free payments, and I can
              set up SMS reminders so you never forget a lesson.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Pricing ─────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[var(--color-warm-bg)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[var(--color-foreground)]">
            Pricing
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Trial", price: "£10", duration: "30 min", highlight: true },
              { label: "Standard", price: "£20", duration: "30 min", highlight: false },
              { label: "Extended", price: "£30", duration: "45 min", highlight: false },
              { label: "Full", price: "£40", duration: "1 hour", highlight: false },
            ].map((tier) => (
              <div
                key={tier.label}
                className={`rounded-xl p-5 text-center ${
                  tier.highlight
                    ? "bg-[var(--color-green)] text-white"
                    : "bg-[var(--color-card)] border border-[var(--color-card-border)]"
                }`}
              >
                <p className={`text-xs mb-1 ${tier.highlight ? "text-white/80" : "text-[var(--color-muted)]"}`}>
                  {tier.label}
                </p>
                <p className="text-2xl font-bold">{tier.price}</p>
                <p className={`text-xs mt-1 ${tier.highlight ? "text-white/80" : "text-[var(--color-muted)]"}`}>
                  {tier.duration}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-card-border)] rounded-xl p-5 text-center">
            <p className="text-sm text-[var(--color-muted)]">
              <span className="font-semibold text-[var(--color-foreground)]">Family discount:</span>{" "}
              Parent &amp; child shared lesson — &pound;35/hour (save &pound;5)
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA — Typeform ──────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--color-foreground)] text-center">
            Ready to start?
          </h2>
          <p className="text-[var(--color-muted)] mb-8 text-center">
            Fill in the form and I&apos;ll get back to you within 24 hours.
          </p>
          <TypeformEmbed formId="01K4CGSQ9CF6DD3G70W3ZKCN6D" />
        </div>
      </section>
    </main>
  );
}
