import { BookingForm } from "../components/BookingForm";
import { EMAIL, WHATSAPP_URL, pageMetadata } from "../lib/site";

export const metadata = pageMetadata({
  path: "/contact",
  title: "Book a £10 Trial Drum Lesson in Bristol | Harry Bone",
  description: "Book a 30-minute trial drum lesson in Brislington, Bristol for £10. No commitment. I reply within 24 hours.",
});

export default function ContactPage() {
  return (
    <main>
      <section className="page-head">
        <div className="wrap bk">
          <div className="bk-side stack g5">
            <span className="t-mono muted">Book a trial</span>
            <h1 className="t-display">Book a £10 trial lesson</h1>
            <p className="t-lead">
              30 minutes, no commitment. Tell me a bit about who’s learning and I’ll get back to you within 24 hours.
            </p>
            <ul className="list ticks">
              <li><span>At my studio in Brislington or your home</span></li>
              <li><span>Electronic kit, so no noise worries</span></li>
              <li><span>Ages 7 and up, complete beginners welcome</span></li>
            </ul>
            <div className="stack g2">
              <span className="t-mono muted">Rather message?</span>
              <div className="btn-row">
                <a className="btn btn-secondary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Message me on WhatsApp
                </a>
              </div>
              <a href={`mailto:${EMAIL}`} className="t-small">
                {EMAIL}
              </a>
            </div>
          </div>
          <div>
            <BookingForm />
          </div>
        </div>
      </section>
    </main>
  );
}
