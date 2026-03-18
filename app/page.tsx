import Image from "next/image";
import { SenjaEmbed } from "./components/SenjaEmbed";
import { TypeformEmbed } from "./components/TypeformEmbed";
import { SoundsliceEmbed } from "./components/SoundsliceEmbed";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Harry Bone Drum Lessons",
    description:
      "Professional drum lessons in Bristol with Harry Bone. BMus (Hons) from RWCMD, 6+ years teaching experience. In-person at home studio or mobile lessons.",
    url: "https://harrybonedrumlessons.com",
    telephone: "+447984263112",
    email: "harrybonedrumlessons@gmail.com",
    image: "https://harrybonedrumlessons.com/harry-hero.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2a Gillebank Close",
      addressLocality: "Bristol",
      postalCode: "BS14 8HT",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.41094,
      longitude: -2.55072,
    },
    priceRange: "£10–£40",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
    sameAs: [
      "https://wa.me/447984263112",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Drum Lesson Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Trial Lesson",
          price: "10",
          priceCurrency: "GBP",
          description: "30-minute trial drum lesson",
        },
        {
          "@type": "Offer",
          name: "Standard Lesson",
          price: "20",
          priceCurrency: "GBP",
          description: "30-minute drum lesson",
        },
        {
          "@type": "Offer",
          name: "Extended Lesson",
          price: "30",
          priceCurrency: "GBP",
          description: "45-minute drum lesson",
        },
        {
          "@type": "Offer",
          name: "Full Lesson",
          price: "40",
          priceCurrency: "GBP",
          description: "1-hour drum lesson",
        },
      ],
    },
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ─── Hero ────────────────────────────────────────── */}
      <section className="hero-gradient pt-28 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[var(--color-green)] font-medium mb-4">
            Drum lessons in Bristol
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-[var(--color-foreground)]">
            Hey, I&apos;m Harry.
            <br />
            I teach drums.
          </h1>

          <p className="text-lg text-[var(--color-muted)] max-w-xl mb-4 leading-relaxed">
            I&apos;m a professional drum teacher based in Bristol with a BMus from
            the Royal Welsh College of Music &amp; Drama, 20+ years behind the kit,
            and over 6 years of teaching experience.
          </p>

          <p className="text-lg text-[var(--color-muted)] max-w-xl mb-8 leading-relaxed">
            I teach from my home studio or come to yours — whichever works best.
            Lessons are structured around what <em>you</em> want to play, with
            clear progress every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <a
              href="/contact"
              className="bg-[var(--color-green)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-green-light)] transition-colors text-center"
            >
              Book a Trial Lesson — &pound;10
            </a>
            <a
              href="https://wa.me/447984263112"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--color-card-border)] text-[var(--color-foreground)] px-6 py-3 rounded-lg font-medium hover:border-[var(--color-green)] transition-colors text-center"
            >
              Message me on WhatsApp
            </a>
          </div>

          {/* Hero photo */}
          <div className="rounded-2xl overflow-hidden border border-[var(--color-card-border)]">
            <Image
              src="/harry-hero.jpg"
              alt="Harry Bone at the electronic drum kit in his home studio"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ─── What to expect ──────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[var(--color-foreground)]">
            What to expect
          </h2>

          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>
              Every student is different, so every lesson is different. Whether
              you&apos;re 7 or 70, a complete beginner or prepping for a Rockschool
              exam, I tailor each session to where you are and where you want to go.
            </p>
            <p>
              Most of my students learn songs they love while building technique
              alongside. I use electronic drums (no noise complaints), digital
              resources, and a structured approach — but it never feels like school.
              It should feel like fun, because that&apos;s when you learn best.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { label: "Song-based learning", desc: "Learn the tracks you actually want to play" },
              { label: "Structured progression", desc: "Clear goals, visible progress, real results" },
              { label: "Grade prep available", desc: "Rockschool exams — if that's your thing" },
              { label: "All ages, all levels", desc: "From age 7 upwards, beginners to advanced" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[var(--color-card)] border border-[var(--color-card-border)] rounded-xl p-5"
              >
                <p className="font-semibold text-[var(--color-foreground)] text-sm mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-[var(--color-muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── YouTube ─────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--color-foreground)]">
            See what structured practice looks like
          </h2>
          <p className="text-[var(--color-muted)] mb-8 leading-relaxed">
            Here&apos;s my playing across different levels — beginner-friendly
            Grade 3 through to advanced Grade 8, plus my double-kick progression.
            This is the kind of progress you can expect with focused work.
          </p>

          <div className="aspect-video rounded-xl overflow-hidden border border-[var(--color-card-border)]">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLnW7DBoH5op8JxS3NwyhbSF51bxWpDvY5"
              title="Harry Bone Drums — Practice Showcase"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ─── Soundslice Interactive ──────────────────────── */}
      <section className="py-16 px-6 bg-[var(--color-warm-bg)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--color-foreground)]">
            Interactive learning with Soundslice
          </h2>
          <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
            I use Soundslice for interactive sheet music — both in lessons and for
            practice between sessions. You can slow down, loop sections, and play
            along with backing tracks. Here&apos;s a free example to try:
          </p>
          <p className="text-sm text-[var(--color-muted)] mb-8">
            Hit play below and follow along with the notation. You can adjust the
            tempo using the controls.
          </p>

          <SoundsliceEmbed sliceUrl="https://www.soundslice.com/slices/TBWbc/embed/" />
          <p className="text-xs text-[var(--color-muted)] mt-3 text-center italic">
            *Best viewed on tablet or computer
          </p>
        </div>
      </section>

      {/* ─── Teaching Resources ──────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--color-foreground)]">
            Professional teaching resources
          </h2>
          <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
            Every student gets access to an exclusive online library. You&apos;ll
            receive a personal access code when lessons begin.
          </p>
          <ul className="space-y-3">
            {[
              "100+ songs organised from beginner to advanced",
              "Step-by-step technique courses",
              "Personalised homework assignments",
              "Professional backing tracks to play along with",
              "Interactive Soundslice exercises for practice between lessons",
              "Available 24/7 from any device",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[var(--color-muted)]">
                <span className="text-[var(--color-green)] mt-0.5 flex-shrink-0">&#10003;</span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Pricing preview ─────────────────────────────── */}
      <section className="py-16 px-6 bg-[var(--color-warm-bg)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--color-foreground)]">
            Simple pricing
          </h2>
          <p className="text-[var(--color-muted)] mb-8 leading-relaxed">
            No sign-up fees, no contracts. Pay per lesson or set up auto-pay if
            you prefer.
          </p>

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

          <p className="text-sm text-[var(--color-muted)] text-center">
            Family discount: parent &amp; child shared lesson — &pound;35/hour (save &pound;5).{" "}
            <a href="/lessons" className="text-[var(--color-green)] hover:underline">
              See full details &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* ─── PracticAI ───────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-card)] border border-[var(--color-card-border)] rounded-xl p-6 sm:p-8">
            <p className="text-xs font-semibold text-[var(--color-green)] uppercase tracking-wider mb-3">
              Something I built
            </p>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 text-[var(--color-foreground)]">
              PracticAI — your AI drum coach between lessons
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-5">
              I built an app that gives you a personalised practice routine every
              day, based on what you actually played. It remembers your sessions,
              tracks your progress, and gives smart coaching notes — like having a
              teacher between lessons.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://mentoraai.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-green)] font-medium hover:underline"
              >
                Learn more about PracticAI &rarr;
              </a>
              <a
                href="https://apps.apple.com/app/practicai/id6753584431"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
              >
                Download on the App Store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Reviews ─────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[var(--color-warm-bg)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[var(--color-foreground)] text-center">
            What students &amp; parents say
          </h2>
          <SenjaEmbed widgetId="4366888f-0471-4ab2-b948-188f2988a964" />
          <div className="text-center mt-8">
            <a
              href="/reviews"
              className="text-sm text-[var(--color-green)] font-medium hover:underline"
            >
              Read all reviews &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ─── Contact CTA ─────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--color-foreground)]">
            Fancy giving it a go?
          </h2>
          <p className="text-[var(--color-muted)] mb-8 leading-relaxed max-w-lg mx-auto">
            Book a trial lesson for &pound;10 — 30 minutes, no commitment. If my
            teaching style clicks, we&apos;ll take it from there.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/contact"
              className="bg-[var(--color-green)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-green-light)] transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="https://wa.me/447984263112"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-green)] font-medium hover:underline transition-colors"
            >
              or WhatsApp me directly &rarr;
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
