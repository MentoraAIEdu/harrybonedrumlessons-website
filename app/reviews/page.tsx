import { BookButton, FinalBarline, SecHead } from "../components/Section";
import { SenjaOnTap } from "../components/SenjaOnTap";
import { REVIEWS, WHATSAPP_URL, pageMetadata } from "../lib/site";

export const metadata = pageMetadata({
  path: "/reviews",
  title: "Reviews | Harry Bone Drum Lessons, Bristol",
  description: "What students and parents say about drum lessons with Harry Bone in Brislington, Bristol.",
});

export default function ReviewsPage() {
  return (
    <main>
      <section className="page-head">
        <div className="wrap stack g5">
          <span className="t-mono muted">Reviews</span>
          <h1 className="t-display">Reviews</h1>
          <p className="t-lead" style={{ maxWidth: 640 }}>
            What my students and their parents say.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="reviews cols">
            {REVIEWS.map((r) => (
              <figure key={r.name} className="review lg">
                <blockquote>{r.quote}</blockquote>
                <figcaption>
                  <b>{r.name}</b>
                  <span>{r.who}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap score">
          <SecHead mark="A" label="More" title="More reviews" />
          <div className="card stack g4">
            <SenjaOnTap widgetId="b45b3c37-6cad-4e77-a177-7e106905c7dc" />
          </div>
        </div>
      </section>

      <section className="sec flush">
        <div className="wrap score">
          <SecHead mark="B" label="Start" title="Want to be next?" />
          <div className="cta">
            <p className="t-lead">Book a trial lesson for £10 and see for yourself.</p>
            <div className="btn-row">
              <BookButton />
              <a className="btn btn-secondary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Message me on WhatsApp
              </a>
            </div>
          </div>
        </div>
        <FinalBarline />
      </section>
    </main>
  );
}
