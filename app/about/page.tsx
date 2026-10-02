import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Harry Bone — drum teacher in Bristol with a BMus from RWCMD, 20+ years drumming, and specialist training in Latin percussion from Cuba and Brazil.",
  openGraph: {
    title: "About Harry Bone | Drum Teacher in Bristol",
    description:
      "BMus (Hons) RWCMD, 20+ years drumming, Enhanced DBS checked. Latin percussion training in Cuba and Brazil.",
    url: "https://harrybonedrumlessons.com/about",
    images: [{ url: "https://harrybonedrumlessons.com/harry-hero.jpg", alt: "Harry Bone" }],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* ─── Intro ───────────────────────────────────────── */}
      <section className="hero-gradient py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[var(--color-foreground)]">
            About me
          </h1>

          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed text-lg">
            <p>
              I&apos;m Harry — a professional drum teacher based in Bristol with
              over 20 years behind the kit and 6+ years of dedicated teaching
              experience.
            </p>
            <p>
              I earned a scholarship to the Royal Welsh College of Music and Drama
              in 2014, where I graduated with a BMus (Hons) in 2018. During that
              time I developed expertise across jazz, orchestral percussion, rock,
              pop, and everything in between.
            </p>
            <p>
              I&apos;ve also studied Latin percussion in Cuba and Samba in Rio de
              Janeiro — experiences that gave me a rhythmic vocabulary that feeds
              directly into my teaching. There&apos;s a world of rhythm beyond
              standard 4/4, and I love sharing that with students.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Teaching journey ────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[var(--color-foreground)]">
            How I got here
          </h2>

          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>
              I started teaching in 2018, went full-time in 2022, and haven&apos;t
              looked back. Teaching turned out to be what I&apos;m best at — not
              just playing, but helping other people unlock what&apos;s inside them.
            </p>
            <p>
              I also work as a Freelance Music Practitioner with Bristol Beacon,
              providing 1-on-1 instruction across Bristol schools and supporting
              ensemble activities throughout the year. It keeps me sharp and
              connected to how different people learn.
            </p>
            <p>
              I&apos;m fully Enhanced DBS checked (on the update service, so always
              current), and I take safeguarding seriously — it matters when
              you&apos;re inviting someone into your home or trusting them with your child.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Philosophy ──────────────────────────────────── */}
      <section className="py-16 px-6 bg-[var(--color-warm-bg)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[var(--color-foreground)]">
            My teaching philosophy
          </h2>

          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>
              Every student learns differently. Some want to play their favourite
              songs, some want to work through grades, some just want to have fun
              and see where it goes. All of that is fine — my job is to meet you
              where you are and help you get where you want to go.
            </p>
            <p>
              I believe in clear structure and visible progress. You should be able
              to look back after a month and see how far you&apos;ve come. But
              structure doesn&apos;t mean boring — I keep lessons engaging, musical,
              and always connected to real songs and real playing.
            </p>
            <p>
              I&apos;ve built{" "}
              <a
                href="https://mentoraai.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-green)] hover:underline"
              >
                PracticAI
              </a>
              , an AI practice app designed to help students keep progressing
              between lessons. It&apos;s the coaching model I&apos;ve had in my
              head for years, now powered by technology.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Location ────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--color-foreground)]">
            Where to find me
          </h2>
          <p className="text-[var(--color-muted)]">
            I&apos;m based in the Brislington area of Bristol. I teach from my
            home studio, or I can come to you. Get in touch and I&apos;ll send
            directions when we book your first lesson.
          </p>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[var(--color-warm-bg)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--color-foreground)]">
            Want to give it a try?
          </h2>
          <p className="text-[var(--color-muted)] mb-8">
            Trial lesson: &pound;10 for 30 minutes. No commitment.
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
