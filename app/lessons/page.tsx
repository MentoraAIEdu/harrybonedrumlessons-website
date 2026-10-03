import { Embed } from "../components/Embed";
import { PhotoSlot } from "../components/PhotoSlot";
import { BookButton, FinalBarline, PriceList, SecHead } from "../components/Section";
import { WHATSAPP_URL, pageMetadata } from "../lib/site";

export const metadata = pageMetadata({
  path: "/lessons",
  title: "Drum Lessons & Prices in Bristol | Harry Bone",
  description:
    "Drum lessons in Brislington, Bristol from £20. Trial lesson £10. Ages 7 and up, beginners to Rockschool grades. Studio or home lessons, no travel fee.",
});

const WORK_ON = [
  ["Song mastery", "Learn the tracks you love with proper technique and musicality. This is what most students come for."],
  ["Technical foundation", "Coordination, timing, stick control, independence. The building blocks that make everything else possible."],
  ["Custom exercises", "A range of ready-made exercises I’ve built over the years. If something new comes up, I’ll write something specifically for you."],
  ["Musical understanding", "Reading notation, basic theory, how drums fit into music. Always connected to real playing."],
  ["Performance skills", "Playing with others, managing nerves, thinking like a band member rather than a soloist."],
  ["Rockschool grade prep", "If exams are your thing, I’ll get you ready. Structured prep, mock tests and clear targets."],
];

export default function LessonsPage() {
  return (
    <main>
      <section className="page-head">
        <div className="wrap two" style={{ alignItems: "center" }}>
          <div className="stack g5">
            <span className="t-mono muted">Lessons &amp; Pricing</span>
            <h1 className="t-display">Lessons &amp; Pricing</h1>
            <p className="t-lead">
              I’ll help you learn the songs you want to play while building the technique to back them up. Every lesson
              is tailored to you.
            </p>
            <div className="btn-row">
              <BookButton />
            </div>
          </div>
          <PhotoSlot
            src="photos/teaching.jpg"
            alt="Harry teaching a drum lesson"
            label="Paradiddle · R L R R L R L L"
            groove="paradiddle"
          />
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap score">
          <SecHead mark="A" label="Prices" title="Prices" />
          <PriceList
            shareNote="1 hour · save £5"
            note="No sign-up fees, no contracts. Pay monthly, or set up auto-pay if you prefer."
          />
        </div>
      </section>

      <section className="sec flush">
        <div className="wrap score">
          <SecHead mark="B" label="How it works" title="How lessons work" />
          <ul className="list ticks">
            <li><span>Rolling, usually 4 a month. Change the schedule to suit you.</span></li>
            <li><span>Book, cancel and reschedule in the Student Portal, for you or your parents.</span></li>
            <li><span>Auto-pay and SMS reminders if you want them.</span></li>
            <li><span>I reply within 24 hours.</span></li>
          </ul>
        </div>
      </section>

      <section className="sec">
        <div className="wrap score">
          <SecHead mark="C" label="Where" title="Studio or your home: your choice" />
          <div className="stack g5">
            <div className="two" style={{ gap: "var(--s4)" }}>
              <div className="card stack g3">
                <h3 className="t-h3">My home studio</h3>
                <p className="t-mono muted">Brislington, Bristol</p>
                <ul className="list ticks">
                  <li><span>Professional electronic drum setup</span></li>
                  <li><span>No noise concerns</span></li>
                  <li><span>Full technology integration</span></li>
                </ul>
              </div>
              <div className="card stack g3">
                <h3 className="t-h3">Your home</h3>
                <p className="t-mono muted">Anywhere in Bristol</p>
                <ul className="list ticks">
                  <li><span>Learn in your own space</span></li>
                  <li><span>No travel fees</span></li>
                  <li><span>Great for younger students</span></li>
                </ul>
              </div>
            </div>
            <PhotoSlot
              src="photos/studio.jpg"
              alt="Harry's home studio in Brislington"
              ar="16/7"
              label="Basic beat · 1 + 2 + 3 + 4 +"
              groove="basic"
              fill
              count
            />
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap score">
          <SecHead mark="D" label="Expect" title="What to expect" />
          <div className="prose">
            <p>
              Every student is different, so every lesson is different. Whether you’re 7 or 70, a complete beginner or
              prepping for a Rockschool exam, I tailor each session to where you are and where you want to go.
            </p>
            <p>
              Most of my students learn songs they love while building technique alongside. I use electronic drums (no
              noise complaints), digital resources, and a structured approach, but it never feels like school. It
              should feel like fun, because that’s when you learn best.
            </p>
          </div>
        </div>
      </section>

      <section className="sec flush">
        <div className="wrap score">
          <SecHead mark="E" label="Content" title="What we’ll work on">
            <p className="muted">It depends on you. These are the areas I usually cover.</p>
          </SecHead>
          <ul className="list">
            {WORK_ON.map(([title, text]) => (
              <li key={title}>
                <b>{title}</b>
                <span className="muted">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec">
        <div className="wrap score">
          <SecHead mark="F" label="Resources" title="Teaching resources">
            <p className="muted">Every student gets a personal access code to my online library when lessons begin.</p>
          </SecHead>
          <ul className="list ticks">
            <li><span>100+ songs organised from beginner to advanced</span></li>
            <li><span>Step-by-step technique courses</span></li>
            <li><span>Personalised homework assignments</span></li>
            <li><span>Professional backing tracks to play along with</span></li>
            <li><span>Interactive Soundslice exercises for practice between lessons</span></li>
            <li><span>Available 24/7 from any device</span></li>
          </ul>
        </div>
      </section>

      <section className="sec on-ink">
        <div className="wrap score">
          <SecHead mark="G" label="Try it" title="Interactive sheet music" />
          <div className="stack g5">
            <p className="muted">
              I use Soundslice in lessons and for practice between them. You can slow it down, loop sections and play
              along with backing tracks. Here’s a free example to try.
            </p>
            <Embed
              src="https://www.soundslice.com/slices/TBWbc/embed/"
              title="Soundslice example"
              caption="Play along with the notation. Best on a tablet or computer."
              style={{ aspectRatio: "4/3" }}
            />
            <div className="vid-links">
              <a className="link" href="https://www.soundslice.com/slices/TBWbc/" target="_blank" rel="noopener noreferrer">
                Open in Soundslice
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec flush">
        <div className="wrap score">
          <SecHead mark="H" label="Start" title="Ready to start?" />
          <div className="cta">
            <p className="t-lead">Book a £10 trial and I’ll get back to you within 24 hours.</p>
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
