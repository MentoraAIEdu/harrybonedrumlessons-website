import Link from "next/link";
import { EMAIL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "../lib/site";

export function Footer() {
  return (
    <footer className="foot on-ink">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col">
            <Link className="wm lg" href="/">
              <b>Harry Bone</b>
              <i>•</i>
              <span>Drum Lessons</span>
            </Link>
            <p className="t-small muted" style={{ marginTop: 8, maxWidth: 340 }}>
              Drum lessons in Brislington, Bristol. BMus (Hons) RWCMD. Enhanced DBS checked.
            </p>
          </div>
          <div className="foot-col">
            <span className="t-mono">Pages</span>
            <Link href="/about">About</Link>
            <Link href="/lessons">Lessons &amp; Pricing</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="foot-col">
            <span className="t-mono">Get in touch</span>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} style={{ fontSize: 15 }}>
              {EMAIL}
            </a>
            <span className="muted place">Brislington, Bristol</span>
          </div>
        </div>
        <div className="foot-base">
          <span>© {new Date().getFullYear()} Harry Bone Drum Lessons</span>
          <Link href="/studentportallogin">Student Portal</Link>
        </div>
      </div>
    </footer>
  );
}
