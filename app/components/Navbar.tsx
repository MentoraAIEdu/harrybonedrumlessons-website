"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { WHATSAPP_DISPLAY } from "../lib/site";

const LINKS = [
  { label: "About", href: "/about" },
  { label: "Lessons & Pricing", href: "/lessons" },
  { label: "Reviews", href: "/reviews" },
];

/**
 * Sticky header. Desktop: three links and the Book button. Phone: a small
 * Book button and a menu with large links. No Blog, no Home link, no Student
 * Portal (that lives in the footer).
 */
export function Navbar() {
  const pathname = usePathname();
  // The menu remembers which page it was opened on, so it is closed again
  // the moment the page changes (including the browser's back button).
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (next: boolean) => setOpenOn(next ? pathname : null);

  return (
    <header className={open ? "nav open" : "nav"}>
      <div className="wrap nav-in">
        <Link className="wm" href="/" aria-label="Harry Bone, Drum Lessons, home">
          <b>Harry Bone</b>
          <i>•</i>
          <span>Drum Lessons</span>
        </Link>
        <nav className="nav-links" aria-label="Main">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} aria-current={pathname === l.href ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
          <Link className="btn btn-primary btn-sm" href="/contact">
            Book a £10 trial
          </Link>
        </nav>
        <div className="nav-right">
          <Link className="btn btn-primary btn-sm" href="/contact">
            Book
          </Link>
          <button
            type="button"
            className="nav-menu"
            aria-expanded={open}
            aria-controls="drawer"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span className="bars" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>
      <div className="nav-drawer" id="drawer">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link href="/contact" onClick={() => setOpen(false)}>
          Book a trial
        </Link>
        <span className="t-mono">WhatsApp {WHATSAPP_DISPLAY}</span>
      </div>
    </header>
  );
}
