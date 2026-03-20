import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--color-warm-bg)] border-t border-[var(--color-card-border)] py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-lg font-bold text-[var(--color-foreground)] mb-2">
              Harry Bone <span className="text-[var(--color-green)]">Drums</span>
            </p>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              Professional drum lessons in Bristol.
              <br />
              BMus (Hons) RWCMD. Enhanced DBS checked.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-[var(--color-foreground)] mb-3">Pages</p>
            <div className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/lessons", label: "Lessons & Pricing" },
                { href: "/blog", label: "Blog" },
                { href: "/reviews", label: "Reviews" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <p className="text-sm font-semibold text-[var(--color-foreground)] mb-3">Get in Touch</p>
            <div className="space-y-2 text-sm text-[var(--color-muted)]">
              <a
                href="https://wa.me/447984263112"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[var(--color-foreground)] transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="mailto:harrybonedrumlessons@gmail.com"
                className="block hover:text-[var(--color-foreground)] transition-colors break-all"
              >
                harrybonedrumlessons@gmail.com
              </a>
              <p>Bristol, UK</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--color-card-border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-muted)]">
            &copy; {new Date().getFullYear()} Harry Bone Drum Lessons
          </p>
          <div className="flex items-center gap-4 text-xs text-[var(--color-muted)]">
            <a
              href="https://mentoraai.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-foreground)] transition-colors"
            >
              PracticAI
            </a>
            <a
              href="https://www.harrybonedrumlessons.com/studentportallogin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-foreground)] transition-colors"
            >
              Student Portal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
