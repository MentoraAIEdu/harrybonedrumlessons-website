import { PhotoSlot } from "./components/PhotoSlot";
import { VideoFacade } from "./components/VideoFacade";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Harry Bone Drum Lessons",
    description:
      "Professional drum lessons in Brislington, Bristol with Harry Bone. BMus (Hons) from RWCMD, 6+ years teaching experience. In-person at home studio or mobile lessons.",
    url: "https://harrybonedrumlessons.com",
    telephone: "+447984263112",
    email: "harrybonedrumlessons@gmail.com",
    image: "https://harrybonedrumlessons.com/harry-hero.jpg",
    // Area only, deliberately: no street, postcode or coordinates. The studio
    // is at home, and its exact location isn't shown on maps (Oct 2026).
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brislington, Bristol",
      addressCountry: "GB",
    },
    areaServed: "Bristol",
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

  // Three reviews, copied word for word from Senja. Never rewrite or tidy a
  // quote. Labels ("student"/"parent") are taken from each quote's own words.
  const reviews = [
    {
      quote:
        "Brilliant teacher, tailored lessons to my musical interests overall and on a week-to-week basis. Always able to help me get unstuck. Great drum kit and teaching resources. Harry has taken me from complete beginner to playing through my favourite songs.",
      name: "Max",
      who: "student",
    },
    {
      quote:
        "Harry is an excellent and encouraging teacher. Our son has progressed massively and is really enjoying the breadth of content to learn. Always timely, polite, clearly very knowledgeable and communicates really clearly. Would recommend Harry to anyone!",
      name: "Richard",
      who: "parent",
    },
    {
      quote:
        "Harry Bone is an experienced, meticulous, and encouraging drum instructor. I am very grateful for his encouragement and guidance, which has greatly improved my son's skills. He also helped him take the exam and obtain certification.",
      name: "Vicky",
      who: "parent",
    },
  ];

  const prices = [
    { label: "Trial", length: "30 min", price: "£10" },
    { label: "Standard", length: "30 min", price: "£20" },
    { label: "Extended", length: "45 min", price: "£30" },
    { label: "Full", length: "1 hour", price: "£40" },
    { label: "Parent and child, shared", length: "1 hour", price: "£35" },
  ];

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Who are you? */}
      <section className="hero-gradient pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-[var(--color-muted)] mb-5">
            Drum lessons in Brislington, Bristol
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-10 text-[var(--color-foreground)]">
            Hey, I&apos;m Harry.
            <br />
            I teach drums.
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 mb-14">
            <a href="/contact" className={primaryButton}>
              Book a &pound;10 trial
            </a>
            <a
              href="https://wa.me/447984263112"
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryButton}
            >
              Message me on WhatsApp
            </a>
          </div>
          <PhotoSlot
            src="harry-hero.jpg"
            alt="Harry Bone at the electronic drum kit in his home studio"
            priority
          />
        </div>
      </section>

      {/* 2. What are lessons like? */}
      <section className={sectionClass}>
        <div className="max-w-2xl mx-auto">
          <h2 className={headingClass}>What lessons are like</h2>
          <dl className="space-y-7 mb-10">
            {[
              { term: "Songs you love", desc: "Learn the tracks you actually want to play." },
              { term: "A clear plan", desc: "Clear goals, visible progress, real results." },
              { term: "All ages from 7", desc: "From age 7 upwards, beginners to advanced." },
            ].map((line) => (
              <div key={line.term}>
                <dt className="text-lg font-semibold text-[var(--color-foreground)]">{line.term}</dt>
                <dd className="text-lg text-[var(--color-muted)] leading-relaxed">{line.desc}</dd>
              </div>
            ))}
          </dl>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-10">
            I teach from my home studio or come to yours, whichever works best.
          </p>
          <PhotoSlot src="photos/teaching.jpg" alt="Harry teaching a drum lesson" />
          <p className="mt-10">
            <a href="/lessons" className={textLink}>
              More about lessons
            </a>
          </p>
        </div>
      </section>

      {/* 3. Is he any good? */}
      <section className={sectionClass}>
        <div className="max-w-2xl mx-auto">
          <h2 className={headingClass}>My playing</h2>
          <VideoFacade
            embedUrl="https://player.vimeo.com/video/1208131131?badge=0&autopause=0&player_id=0&app_id=58479"
            title="Laid to Rest - Lamb of God | HarryDrums Cover"
            label="Laid to Rest, Lamb of God. My drum cover."
          />
          <p className="mt-8 text-lg text-[var(--color-foreground)] leading-relaxed">
            BMus RWCMD &middot; 20+ years playing &middot; teaching since 2018 &middot; enhanced DBS
          </p>
          <p className="mt-10">
            <a href="/about" className={textLink}>
              More about me
            </a>
          </p>
        </div>
      </section>

      {/* 4. What do others say? Written into the page so search engines can read it. */}
      <section className={sectionClass}>
        <div className="max-w-2xl mx-auto">
          <h2 className={headingClass}>What students and parents say</h2>
          <div className="space-y-12">
            {reviews.map((r) => (
              <figure key={r.name}>
                <blockquote className="text-lg text-[var(--color-foreground)] leading-relaxed">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-sm text-[var(--color-muted)]">
                  {r.name}, {r.who}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-12">
            <a href="/reviews" className={textLink}>
              Read all reviews
            </a>
          </p>
        </div>
      </section>

      {/* 5. How much? */}
      <section className={sectionClass}>
        <div className="max-w-2xl mx-auto">
          <h2 className={headingClass}>Prices</h2>
          <dl className="divide-y divide-[var(--color-card-border)] border-y border-[var(--color-card-border)]">
            {prices.map((p) => (
              <div key={p.label} className="flex items-baseline justify-between gap-4 py-5">
                <dt className="text-lg text-[var(--color-foreground)]">
                  {p.label}
                  <span className="block text-sm text-[var(--color-muted)]">{p.length}</span>
                </dt>
                <dd className="text-2xl font-bold text-[var(--color-foreground)]">{p.price}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-lg text-[var(--color-muted)]">No sign-up fees, no contracts.</p>
        </div>
      </section>

      {/* 6. How do I start? */}
      <section className={`${sectionClass} pb-28`}>
        <div className="max-w-2xl mx-auto">
          <h2 className={headingClass}>Fancy giving it a go?</h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-10">
            Book a trial lesson for &pound;10. 30 minutes, no commitment. If my
            teaching style clicks, we&apos;ll take it from there.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href="/contact" className={primaryButton}>
              Book a &pound;10 trial
            </a>
            <a
              href="https://wa.me/447984263112"
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryButton}
            >
              Message me on WhatsApp
            </a>
          </div>
          <p className="text-lg text-[var(--color-foreground)]">
            Based in Brislington. I&apos;ll send directions when we book.
          </p>
        </div>
      </section>
    </main>
  );
}

// Green is for the primary button only. Everything else is ink and space.
const primaryButton =
  "block sm:inline-block text-center bg-[var(--color-green)] text-white px-7 py-4 rounded-lg text-lg font-semibold hover:bg-[var(--color-green-dark)] transition-colors";
const secondaryButton =
  "block sm:inline-block text-center border border-[var(--color-card-border)] text-[var(--color-foreground)] px-7 py-4 rounded-lg text-lg font-medium hover:border-[var(--color-foreground)] transition-colors";
const textLink =
  "text-lg text-[var(--color-foreground)] underline underline-offset-4 decoration-[var(--color-card-border)] hover:decoration-[var(--color-foreground)]";
const sectionClass = "px-6 py-20 sm:py-24 border-t border-[var(--color-card-border)]";
const headingClass = "text-3xl font-bold mb-10 text-[var(--color-foreground)]";
