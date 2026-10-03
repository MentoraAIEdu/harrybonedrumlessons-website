import Link from "next/link";
import type { ReactNode } from "react";

/** A section heading with its rehearsal mark (A, B, C…), like a drum chart. */
export function SecHead({
  mark,
  label,
  title,
  children,
}: {
  mark: string;
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="sec-head">
      <div className="row">
        <span className="rm">{mark}</span>
        <span className="t-mono">{label}</span>
      </div>
      <h2 className="t-h2">{title}</h2>
      {children}
    </div>
  );
}

/** The double barline that ends a page, like the end of a piece. */
export function FinalBarline() {
  return (
    <div className="wrap">
      <div className="final" aria-hidden="true">
        <i />
        <i />
      </div>
    </div>
  );
}

export function ArrowIcon() {
  return (
    <svg className="ic" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
    </svg>
  );
}

/** The one primary action on the site. Always goes to /contact. */
export function BookButton({ arrow = false }: { arrow?: boolean }) {
  return (
    <Link className={arrow ? "btn btn-primary btn-go" : "btn btn-primary"} href="/contact">
      Book a £10 trial
      {arrow && <ArrowIcon />}
    </Link>
  );
}

export function PriceList({ shareNote, note }: { shareNote?: string; note: string }) {
  const rows = [
    { name: "Trial", length: "30 min", price: "£10", start: true },
    { name: "Standard", length: "30 min", price: "£20" },
    { name: "Extended", length: "45 min", price: "£30" },
    { name: "Full", length: "1 hour", price: "£40" },
    { name: "Parent and child, shared", length: shareNote ?? "1 hour", price: "£35" },
  ];
  return (
    <div>
      <ul className="prices">
        {rows.map((r) => (
          <li key={r.name} className={r.start ? "start" : undefined}>
            <span className="nm">
              <b>{r.name}</b>
              <span>{r.length}</span>
            </span>
            <span className="pr">{r.price}</span>
          </li>
        ))}
      </ul>
      <p className="prices-note">{note}</p>
    </div>
  );
}
