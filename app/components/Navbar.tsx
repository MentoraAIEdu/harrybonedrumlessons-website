"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Kept short on purpose. The blog stays live at /blog (its posts are indexed),
// it just isn't in the navigation. Student Portal lives in the footer.
const navLinks = [
  { href: "/about", label: "About" },
  { href: "/lessons", label: "Lessons & Pricing" },
  { href: "/reviews", label: "Reviews" },
];

const bookButton =
  "text-sm bg-[var(--color-green)] text-white px-5 py-2.5 rounded-lg hover:bg-[var(--color-green-dark)] transition-colors font-semibold";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--color-background)]/90 backdrop-blur-sm border-b border-[var(--color-card-border)]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-[var(--color-foreground)]">
          <Image
            src="/favicon.png"
            alt="Harry Bone Drums logo"
            width={32}
            height={32}
            className="rounded-md"
          />
          Harry Bone <span className="text-[var(--color-muted)] font-medium">Drums</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className={bookButton}>
            Book
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[var(--color-foreground)] transition-transform duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[var(--color-foreground)] transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[var(--color-foreground)] transition-transform duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[var(--color-background)] border-t border-[var(--color-card-border)] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-base text-[var(--color-foreground)] transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={`inline-block mt-2 ${bookButton}`}
          >
            Book a &pound;10 trial
          </Link>
        </div>
      )}
    </nav>
  );
}
