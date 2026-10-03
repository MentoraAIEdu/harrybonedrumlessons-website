import Image from "next/image";
import Link from "next/link";
import { EmbedPoster } from "./components/EmbedPoster";
import { BookButton, FinalBarline, PriceList, SecHead } from "./components/Section";
import { Stave } from "./components/Stave";
import { PLAYLIST_ID, PLAYLIST_URL, REVIEWS, SITE_URL, WHATSAPP_URL, pageMetadata } from "./lib/site";

const DESCRIPTION =
  "Drum lessons in Brislington, Bristol for ages 7 and up. BMus (Hons) RWCMD, Enhanced DBS. At my studio or your home. Book a £10 trial lesson.";

export const metadata = pageMetadata({
  path: "/",
  title: "Harry Bone Drum Lessons | Drum teacher in Brislington, Bristol",
  description: DESCRIPTION,
});

/*
 * Structured data for search. Area only, deliberately: no street, postcode or
 * coordinates (the studio is at home). No opening hours either: they change
 * too often to list, and people ask when they book. No review or rating
 * markup: Google ignores ratings a business publishes about itself.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "EducationalOrganization"],
      "@id": `${SITE_URL}/#business`,
      name: "Harry Bone Drum Lessons",
      description: DESCRIPTION,
      url: SITE_URL,
      telephone: "+447984263112",
      email: "harrybonedrumlessons@gmail.com",
      image: `${SITE_URL}/harry-hero-1600.jpg`,
      logo: `${SITE_URL}/favicon.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brislington",
        addressRegion: "Bristol",
        addressCountry: "GB",
      },
      areaServed: [
        { "@type": "City", name: "Bristol" },
        { "@type": "Place", name: "Brislington" },
      ],
      priceRange: "£10-£40",
      founder: { "@id": `${SITE_URL}/#harry` },
      sameAs: [PLAYLIST_URL],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Drum lessons",
        itemListElement: [
          { "@type": "Offer", name: "Trial lesson", price: "10", priceCurrency: "GBP", description: "30-minute trial drum lesson" },
          { "@type": "Offer", name: "Standard lesson", price: "20", priceCurrency: "GBP", description: "30-minute drum lesson" },
          { "@type": "Offer", name: "Extended lesson", price: "30", priceCurrency: "GBP", description: "45-minute drum lesson" },
          { "@type": "Offer", name: "Full lesson", price: "40", priceCurrency: "GBP", description: "1-hour drum lesson" },
          { "@type": "Offer", name: "Parent and child shared lesson", price: "35", priceCurrency: "GBP", description: "1-hour shared drum lesson" },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#harry`,
      name: "Harry Bone",
      jobTitle: "Drum teacher",
      alumniOf: { "@type": "CollegeOrUniversity", name: "Royal Welsh College of Music & Drama" },
      worksFor: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#site`,
      url: SITE_URL,
      name: "Harry Bone Drum Lessons",
      inLanguage: "en-GB",
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Who are you? */}
      <section>
        <div className="wrap hero">
          <div className="hero-photo">
            <Image
              src="/harry-hero-1600.jpg"
              alt="Harry Bone sitting at his electronic drum kit, holding sticks"
              width={1600}
              height={1067}
              sizes="(max-width: 900px) 100vw, 440px"
              priority
            />
          </div>
          <div className="hero-body stack g5">
            <span className="t-mono muted">Drum lessons in Brislington, Bristol</span>
            <h1 className="t-display">
              Hey, I’m Harry.
              <br />
              I teach drums.
            </h1>
            <div className="btn-row">
              <BookButton arrow />
            </div>
            <div className="trust t-small">
              <span>Ages 7 and up</span>
              <span>Enhanced DBS</span>
              <span>Lessons from £20</span>
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="stave-strip">
            <Stave groove="rock" fill count label="A basic rock beat, written in drum notation" />
          </div>
        </div>
      </section>

      {/* What are lessons like? */}
      <section className="sec flush">
        <div className="wrap score">
          <SecHead mark="A" label="Lessons" title="What lessons are like" />
          <div className="stack g5">
            <div className="lines3">
              {[
                ["Songs you love", "Learn the tracks you actually want to play."],
                ["A clear plan", "Clear goals, visible progress, real results."],
                ["All ages from 7", "Beginners to advanced. Rockschool grades if you want them."],
              ].map(([title, text], i) => (
                <div key={title}>
                  <span className="n">{i + 1}</span>
                  <div className="stack g1">
                    <h3 className="t-h3">{title}</h3>
                    <p className="muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="where">
              <p className="fact">At my studio or your home. No travel fee.</p>
              <p className="fact">Electronic kit, so no noise worries.</p>
            </div>
            <Link className="link" href="/lessons">
              More about lessons
            </Link>
          </div>
        </div>
      </section>

      {/* Is he any good? */}
      <section className="sec on-ink">
        <div className="wrap score">
          <SecHead mark="B" label="Playing" title="My playing" />
          <div className="stack">
            <div className="creds">
              <div>
                <b>BMus (Hons)</b>
                <span>Royal Welsh College of Music &amp; Drama</span>
              </div>
              <div>
                <b>20+ years</b>
                <span>playing</span>
              </div>
              <div>
                <b>Since 2018</b>
                <span>teaching</span>
              </div>
              <div>
                <b>Enhanced DBS</b>
                <span>on the update service</span>
              </div>
            </div>
            <EmbedPoster
              src={`https://www.youtube-nocookie.com/embed/videoseries?list=${PLAYLIST_ID}&autoplay=1&rel=0`}
              title="Harry Bone Drums, practice showcase playlist"
              ariaLabel="Play playlist: Grade 3 to Grade 8, plus double kick"
              caption="Grade 3 to Grade 8, plus double kick."
              sub="YouTube playlist · plays when you tap"
              groove="double"
            />
            <div className="vid-links">
              <a className="link" href={PLAYLIST_URL} target="_blank" rel="noopener noreferrer">
                All my drum covers on YouTube
              </a>
            </div>
            <Link className="link" href="/about">
              More about me
            </Link>
          </div>
        </div>
      </section>

      {/* What do others say? Plain text, so search engines can read it. */}
      <section className="sec flush">
        <div className="wrap score">
          <SecHead mark="C" label="Reviews" title="What students and parents say" />
          <div className="stack g5">
            <div className="reviews">
              {REVIEWS.map((r) => (
                <figure key={r.name} className="review">
                  <blockquote>{r.quote}</blockquote>
                  <figcaption>
                    <b>{r.name}</b>
                    <span>{r.who}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <Link className="link" href="/reviews">
              Read all reviews
            </Link>
          </div>
        </div>
      </section>

      {/* How much? */}
      <section className="sec alt">
        <div className="wrap score">
          <SecHead mark="D" label="Prices" title="Prices" />
          <PriceList note="No sign-up fees, no contracts. Lessons roll on, usually 4 a month." />
        </div>
      </section>

      {/* How do I start? */}
      <section className="sec" id="start">
        <div className="wrap score">
          <SecHead mark="E" label="Start" title="Fancy giving it a go?" />
          <div className="cta">
            <p className="t-lead">
              Book a trial lesson for £10. 30 minutes, no commitment. If my teaching style clicks, we’ll take it
              from there.
            </p>
            <div className="btn-row">
              <BookButton arrow />
            </div>
            <p className="muted">
              Based in Brislington. I’ll send directions when we book. I reply within 24 hours. Rather message?{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                WhatsApp me
              </a>
              .
            </p>
          </div>
        </div>
        <FinalBarline />
      </section>
    </main>
  );
}
