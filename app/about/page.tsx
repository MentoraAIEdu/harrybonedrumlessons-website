import { Embed } from "../components/Embed";
import { PhotoSlot } from "../components/PhotoSlot";
import { BookButton, FinalBarline, SecHead } from "../components/Section";
import { PARTNER_APP_URL, PLAYLIST_ID, PLAYLIST_URL, WHATSAPP_URL, pageMetadata } from "../lib/site";

export const metadata = pageMetadata({
  path: "/about",
  title: "About Harry Bone | Drum teacher in Bristol",
  description:
    "Harry Bone: BMus (Hons) from the Royal Welsh College of Music & Drama, 20+ years playing, teaching drums in Bristol since 2018. Enhanced DBS.",
});

export default function AboutPage() {
  return (
    <main>
      <section className="page-head">
        <div className="wrap two" style={{ alignItems: "center" }}>
          <div className="stack g5">
            <span className="t-mono muted">About</span>
            <h1 className="t-display">About me</h1>
            <p className="t-lead">
              I’m Harry, a professional drum teacher based in Bristol with over 20 years behind the kit and 6+ years of
              dedicated teaching experience.
            </p>
          </div>
          <PhotoSlot
            src="photos/playing.jpg"
            alt="Harry Bone playing drums"
            label="Double kick · 16ths"
            groove="double"
            count
          />
        </div>
      </section>

      <section className="sec">
        <div className="wrap score">
          <SecHead mark="A" label="Training" title="Where I learned" />
          <div className="stack g5">
            <div className="range">
              <div>
                <b>BMus (Hons)</b>
                <span>Royal Welsh College of Music &amp; Drama. Scholarship 2014, graduated 2018.</span>
              </div>
              <div>
                <b>Cuba</b>
                <span>Latin percussion</span>
              </div>
              <div>
                <b>Rio de Janeiro</b>
                <span>Samba</span>
              </div>
              <div>
                <b>Bristol Beacon</b>
                <span>Freelance music practitioner in Bristol schools</span>
              </div>
              <div>
                <b>Jazz to metal</b>
                <span>Orchestral percussion, rock, pop, double kick</span>
              </div>
              <div>
                <b>Enhanced DBS</b>
                <span>On the update service, so always current</span>
              </div>
            </div>
            <div className="prose muted">
              <p>
                At the Royal Welsh College I developed expertise across jazz, orchestral percussion, rock, pop, and
                everything in between.
              </p>
              <p>
                Cuba and Rio gave me a rhythmic vocabulary that feeds directly into my teaching. There’s a world of
                rhythm beyond standard 4/4, and I love sharing that with students.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap score">
          <SecHead mark="B" label="Story" title="How I got here" />
          <div className="stack g6">
            <ol className="timeline">
              <li>
                <span className="yr">2014</span>
                <span>Scholarship to the Royal Welsh College of Music &amp; Drama</span>
              </li>
              <li>
                <span className="yr">2018</span>
                <span>Graduated BMus (Hons). Started teaching.</span>
              </li>
              <li>
                <span className="yr">2022</span>
                <span>Went full-time</span>
              </li>
              <li>
                <span className="yr">Now</span>
                <span>Lessons in Brislington, and 1-on-1 teaching in Bristol schools with Bristol Beacon</span>
              </li>
            </ol>
            <div className="prose">
              <p>
                Teaching turned out to be what I’m best at: helping other people unlock what’s inside them. Working
                with Bristol Beacon, across schools and ensembles through the year, keeps me sharp and connected to how
                different people learn.
              </p>
              <p>
                I’m fully Enhanced DBS checked, and I take safeguarding seriously. It matters when you’re inviting
                someone into your home or trusting them with your child.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec flush">
        <div className="wrap score">
          <SecHead mark="C" label="Teaching" title="My teaching philosophy" />
          <div className="prose">
            <p>
              Every student learns differently. Some want to play their favourite songs, some want to work through
              grades, some just want to have fun and see where it goes. All of that is fine. My job is to meet you
              where you are and help you get where you want to go.
            </p>
            <p>
              I believe in clear structure and visible progress. You should be able to look back after a month and see
              how far you’ve come. But structure doesn’t mean boring. I keep lessons engaging, musical, and always
              connected to real songs and real playing.
            </p>
            <p>
              For older students and adults (13 and over), I’ve also built{" "}
              <a href={PARTNER_APP_URL} target="_blank" rel="noopener noreferrer">
                Partner
              </a>
              , a practice app that remembers each session and plans the next one around it.
            </p>
          </div>
        </div>
      </section>

      <section className="sec on-ink">
        <div className="wrap score">
          <SecHead mark="D" label="Playing" title="My playing" />
          <div className="stack g5">
            <p className="muted">
              Here’s my playing across different levels, from beginner-friendly Grade 3 through to advanced Grade 8,
              plus my double-kick progression. This is the kind of progress you can expect with focused work.
            </p>
            <Embed
              src={`https://www.youtube-nocookie.com/embed/2aPfRyOoMQI?rel=0&list=${PLAYLIST_ID}`}
              title="Rockschool Grade 3 drum piece played by Harry Bone"
              caption="Rockschool Grade 3, played by me."
            />
            <div className="vid-links">
              <a className="link" href={PLAYLIST_URL} target="_blank" rel="noopener noreferrer">
                Full playlist on YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec flush">
        <div className="wrap score">
          <SecHead mark="E" label="Where" title="Where to find me" />
          <div className="cta">
            <p className="t-lead">
              I’m based in the Brislington area of Bristol. I teach from my home studio, or I can come to you. Get in
              touch and I’ll send directions when we book your first lesson.
            </p>
            <div className="card stack g4" style={{ marginTop: "var(--s3)" }}>
              <h3 className="t-h3">Want to give it a try?</h3>
              <p className="muted">Trial lesson: £10 for 30 minutes. No commitment.</p>
              <div className="btn-row">
                <BookButton />
                <a className="btn btn-secondary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Message me on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
        <FinalBarline />
      </section>
    </main>
  );
}
