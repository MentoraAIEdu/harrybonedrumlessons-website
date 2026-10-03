"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { EMAIL, WHATSAPP_URL } from "../lib/site";

/*
 * The booking form. Replaces the Typeform.
 *
 * Requests go to Harry's inbox through FormSubmit (formsubmit.co): nothing
 * runs on our server and no API key is involved. ⚠️ The FIRST request ever
 * sent makes FormSubmit email Harry an "Activate Form" link, and nothing is
 * delivered until he clicks it once. Until then FormSubmit answers
 * success:false, which this form treats as "not sent" and offers a
 * pre-filled email instead, so no request is lost either way.
 */
const ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

const WHO = [
  { value: "child", label: "My child" },
  { value: "me", label: "Me" },
];
const LEVEL = [
  { value: "never", label: "Never" },
  { value: "a-bit", label: "A little" },
  { value: "lots", label: "Quite a lot" },
];
const WHERE = [
  { value: "studio", label: "My studio", sub: "Brislington. Directions when we book." },
  { value: "home", label: "Your home", sub: "No travel fee." },
];

type Q = "who" | "student" | "level" | "where" | "contact";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const labelOf = (opts: { value: string; label: string }[], v: string) => opts.find((o) => o.value === v)?.label ?? "";

export function BookingForm() {
  const [who, setWho] = useState("");
  const [student, setStudent] = useState("");
  const [age, setAge] = useState("");
  const [level, setLevel] = useState("");
  const [where, setWhere] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [honey, setHoney] = useState("");
  const [bad, setBad] = useState<Set<Q>>(new Set());
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<null | { sent: boolean; rows: [string, string][]; mailto: string }>(null);

  const refs = {
    who: useRef<HTMLFieldSetElement>(null),
    student: useRef<HTMLFieldSetElement>(null),
    level: useRef<HTMLFieldSetElement>(null),
    where: useRef<HTMLFieldSetElement>(null),
    contact: useRef<HTMLFieldSetElement>(null),
  };
  const doneRef = useRef<HTMLDivElement>(null);

  const child = who === "child";
  const clear = (q: Q) => bad.has(q) && setBad((b) => new Set([...b].filter((x) => x !== q)));
  const scrollTo = (el: HTMLElement | null, offset: number) =>
    el && window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (sending) return;

    const ok: Record<Q, boolean> = {
      who: !!who,
      student: who === "me" || (!!student.trim() && !!age.trim()),
      level: !!level,
      where: !!where,
      contact: !!name.trim() && !!phone.trim() && EMAIL_RE.test(email.trim()),
    };
    const order: Q[] = ["who", "student", "level", "where", "contact"];
    const failed = order.filter((q) => !ok[q]);
    setBad(new Set(failed));
    if (failed.length) {
      scrollTo(refs[failed[0]].current, 90);
      return;
    }

    const rows: [string, string][] = [["Lessons for", labelOf(WHO, who)]];
    if (child) rows.push(["Student", student.trim()], ["Age", age.trim()]);
    rows.push(
      ["Played before?", labelOf(LEVEL, level)],
      ["Where", labelOf(WHERE, where)],
      [child ? "Parent or guardian" : "Name", name.trim()],
      ["Phone", phone.trim()],
      ["Email", email.trim()],
    );
    if (note.trim()) rows.push(["Anything else", note.trim()]);

    const subject = `Trial lesson request: ${name.trim()}${child ? ` (for ${student.trim()}, ${age.trim()})` : ""}`;
    const body = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSending(true);
    let sent = false;
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...Object.fromEntries(rows),
          _subject: subject,
          _replyto: email.trim(),
          _template: "table",
          _captcha: "false",
          _honey: honey,
        }),
      });
      const json = await res.json();
      sent = json.success === true || json.success === "true";
    } catch {
      sent = false;
    }
    setSending(false);
    setResult({ sent, rows, mailto });
    requestAnimationFrame(() => {
      scrollTo(doneRef.current, 110);
      doneRef.current?.focus({ preventScroll: true });
    });
  }

  if (result) {
    const first = name.trim().split(" ")[0];
    return (
      <div className="done" ref={doneRef} role="status" tabIndex={-1}>
        <span className="t-mono muted">{result.sent ? "Request sent" : "Not sent yet"}</span>
        <h2 className="t-h2">{result.sent ? `Thanks, ${first}. Speak soon.` : `Nearly there, ${first}.`}</h2>
        <p className="t-lead">
          {result.sent
            ? "I’ll be in touch within 24 hours to find a time for the trial. If it’s urgent, message me on WhatsApp."
            : "Your request didn’t send. Tap below to email it to me, or message me on WhatsApp."}
        </p>
        {!result.sent && (
          <div className="sendfail">
            <p>Your answers are saved below. Tap to send them in an email.</p>
            <a className="btn btn-primary" href={result.mailto}>
              Send by email
            </a>
          </div>
        )}
        <div className="recap">
          <span className="t-mono muted">What you sent</span>
          <dl>
            {result.rows.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="btn-row">
          <a className="btn btn-secondary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Message me on WhatsApp
          </a>
          <Link className="btn btn-secondary" href="/">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const radio = (
    q: Q,
    group: string,
    value: string,
    set: (v: string) => void,
    opts: { value: string; label: string; sub?: string }[],
  ) =>
    opts.map((o) => (
      <label key={o.value} className="opt">
        <input
          type="radio"
          name={group}
          value={o.value}
          checked={value === o.value}
          onChange={() => {
            set(o.value);
            clear(q);
          }}
        />
        {o.sub ? (
          <span>
            <span className="ol">
              {o.label}
              <small>{o.sub}</small>
            </span>
          </span>
        ) : (
          <span>{o.label}</span>
        )}
      </label>
    ));

  const q = (id: Q) => (bad.has(id) ? "q bad" : "q");

  return (
    <form className="form" noValidate onSubmit={submit}>
      <fieldset className={q("who")} ref={refs.who}>
        <legend>
          <span className="n">01</span>Who are the lessons for?
        </legend>
        <div className="opts c2">{radio("who", "who", who, setWho, WHO)}</div>
        <p className="err">Pick one to carry on.</p>
      </fieldset>

      <fieldset className={q("student")} ref={refs.student}>
        <legend>
          <span className="n">02</span>
          <span>{who === "child" ? "About your child" : who === "me" ? "About you" : "About the student"}</span>
        </legend>
        {who !== "me" && (
          <div className="pair">
            <label className="fld">
              <span>First name</span>
              <input
                className="in"
                name="student"
                autoComplete="off"
                required
                value={student}
                onChange={(e) => {
                  setStudent(e.target.value);
                  clear("student");
                }}
              />
            </label>
            <label className="fld">
              <span>Age</span>
              <input
                className="in"
                name="age"
                inputMode="numeric"
                required
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                  clear("student");
                }}
              />
            </label>
          </div>
        )}
        <p className="err">Add a name and age.</p>
      </fieldset>

      <fieldset className={q("level")} ref={refs.level}>
        <legend>
          <span className="n">03</span>Played drums before?
        </legend>
        <div className="opts c3">{radio("level", "level", level, setLevel, LEVEL)}</div>
        <p className="err">Pick one to carry on.</p>
      </fieldset>

      <fieldset className={q("where")} ref={refs.where}>
        <legend>
          <span className="n">04</span>Where would suit you?
        </legend>
        <div className="opts c2">{radio("where", "where", where, setWhere, WHERE)}</div>
        <p className="err">Pick one to carry on.</p>
      </fieldset>

      <fieldset className={q("contact")} ref={refs.contact}>
        <legend>
          <span className="n">05</span>How do I reach you?
        </legend>
        <div className="stack g3">
          <label className="fld">
            <span>{child ? "Your name (parent or guardian)" : "Your name"}</span>
            <input
              className="in"
              name="name"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                clear("contact");
              }}
            />
          </label>
          <div className="pair">
            <label className="fld">
              <span>Phone</span>
              <input
                className="in"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  clear("contact");
                }}
              />
            </label>
            <label className="fld">
              <span>Email</span>
              <input
                className="in"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  clear("contact");
                }}
              />
            </label>
          </div>
        </div>
        <p className="err">Add your name, phone number and email.</p>
      </fieldset>

      <fieldset className="q">
        <legend>
          <span className="n">06</span>Anything else? <em>(optional)</em>
        </legend>
        <textarea
          className="in"
          name="note"
          placeholder="Favourite bands, best days and times, questions…"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </fieldset>

      {/* Spam trap: hidden from people, filled in by bots. FormSubmit drops
          any request where it isn't empty. */}
      <label className="honey" aria-hidden="true">
        Leave this empty
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" value={honey} onChange={(e) => setHoney(e.target.value)} />
      </label>

      <div className="stack g3">
        <button className="btn btn-primary btn-block" type="submit" disabled={sending}>
          {sending ? "Sending…" : "Send booking request"}
        </button>
        <p className="t-small muted">No payment now. I’ll reply within 24 hours to find a time.</p>
      </div>
    </form>
  );
}
