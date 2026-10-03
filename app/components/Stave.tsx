"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Drum notation, drawn as SVG from a groove pattern. Ported from Design's
 * hb.js renderer: same grid, same note shapes, same beaming.
 *
 * Pattern strings are 16 sixteenth-note steps. hh "x" = hi-hat, sn "o" =
 * snare ("O" = accented), bd "o" = bass drum. stick adds R/L labels.
 *
 * `fill` repeats bars to fit the width it is given, so it has to measure on
 * the client. Until then it reserves the height of one bar.
 */
type Groove = { hh?: string; sn?: string; bd?: string; stick?: string; count?: 8 | 16 };

const GROOVES: Record<string, Groove> = {
  rock: { hh: "x.x.x.x.x.x.x.x.", sn: "....o.......o...", bd: "o.......o.o.....", count: 8 },
  basic: { hh: "x.x.x.x.x.x.x.x.", sn: "....o.......o...", bd: "o.......o.......", count: 8 },
  double: { hh: "x...x...x...x...", sn: "....O.......O...", bd: "oooooooooooooooo", count: 16 },
  paradiddle: { sn: "OoooOoooOoooOooo", stick: "RLRRLRLLRLRRLRLL" },
  samba: { hh: "x.xxx.xxx.xxx.xx", bd: "o..oo..oo..oo..o", count: 16 },
};

export type GrooveName = keyof typeof GROOVES;

const S = 8;
const TOP = 46;
const SW = 16;
const BAR = 14 + 16 * SW + 8;
const CLEF = 44;
const Y = { hh: TOP - S / 2, sn: TOP + 1.5 * S, bd: TOP + 3.5 * S };

function Head({ x, y, kind }: { x: number; y: number; kind: "x" | "o" }) {
  if (kind === "x") {
    return (
      <>
        <line x1={x - 3.6} y1={y - 3.6} x2={x + 3.6} y2={y + 3.6} stroke="currentColor" strokeWidth={1.7} />
        <line x1={x - 3.6} y1={y + 3.6} x2={x + 3.6} y2={y - 3.6} stroke="currentColor" strokeWidth={1.7} />
      </>
    );
  }
  return <ellipse cx={x} cy={y} rx={4.7} ry={3.5} transform={`rotate(-20 ${x} ${y})`} fill="currentColor" />;
}

function draw(G: Groove, bars: number, showCount: boolean) {
  const hasFeet = !!G.bd;
  const H = TOP + (hasFeet ? 62 : 40) + (showCount || G.stick ? 20 : 0);
  const W = CLEF + bars * BAR + 4;
  const out: ReactNode[] = [];
  let k = 0;
  const add = (n: ReactNode) => out.push(<g key={k++}>{n}</g>);

  // Percussion clef and 4/4.
  add(
    <>
      <rect x={8} y={TOP + S} width={3.5} height={2 * S} fill="currentColor" />
      <rect x={14.5} y={TOP + S} width={3.5} height={2 * S} fill="currentColor" />
      {[TOP + 15, TOP + 31].map((y) => (
        <text key={y} x={32} y={y} textAnchor="middle" fontWeight={800} fontSize={19} fill="currentColor" style={{ fontFamily: "var(--f-display)" }}>
          4
        </text>
      ))}
    </>,
  );

  for (let b = 0; b < bars; b++) {
    const bx = CLEF + b * BAR;
    const X = (step: number) => bx + 14 + step * SW;
    add(<line x1={bx + BAR} x2={bx + BAR} y1={TOP} y2={TOP + 4 * S} stroke="currentColor" strokeWidth={1.4} />);

    for (let q = 0; q < 4; q++) {
      const hands: { k: number; i: number; h: ["hh" | "sn", "x" | "o", boolean][] }[] = [];
      const feet: { k: number; i: number }[] = [];
      for (let i = 0; i < 4; i++) {
        const step = q * 4 + i;
        const h: ["hh" | "sn", "x" | "o", boolean][] = [];
        if (G.hh && G.hh[step] === "x") h.push(["hh", "x", false]);
        if (G.sn && /[oO]/.test(G.sn[step])) h.push(["sn", "o", G.sn[step] === "O"]);
        if (h.length) hands.push({ k: step, i, h });
        if (G.bd && G.bd[step] === "o") feet.push({ k: step, i });
      }
      const beamU = TOP - 28;
      const beamD = TOP + 3.5 * S + 28;

      hands.forEach((n) => {
        const x = X(n.k);
        let low = -1e9;
        n.h.forEach(([v, kind, acc]) => {
          add(<Head x={x} y={Y[v]} kind={kind} />);
          low = Math.max(low, Y[v]);
          if (acc) {
            add(
              <path
                d={`M${x - 4} ${beamU - 12} L${x + 4} ${beamU - 9} L${x - 4} ${beamU - 6}`}
                strokeWidth={1.6}
                fill="none"
                style={{ stroke: "var(--red)" }}
              />,
            );
          }
        });
        add(<line x1={x + 4.2} x2={x + 4.2} y1={low - 1} y2={beamU} stroke="currentColor" strokeWidth={1.3} />);
      });
      feet.forEach((n) => {
        const x = X(n.k);
        add(
          <>
            <Head x={x} y={Y.bd} kind="o" />
            <line x1={x - 4.2} x2={x - 4.2} y1={Y.bd + 1} y2={beamD} stroke="currentColor" strokeWidth={1.3} />
          </>,
        );
      });

      const beam = (arr: { k: number; i: number }[], y: number, dx: number, dir: 1 | -1) => {
        if (arr.length < 2) return;
        const x1 = X(arr[0].k) + dx;
        const x2 = X(arr[arr.length - 1].k) + dx;
        const sixteen = arr.some((n) => n.i % 2);
        add(<rect x={x1 - 0.6} y={dir > 0 ? y : y - 4} width={x2 - x1 + 1.2} height={4} fill="currentColor" />);
        if (sixteen) add(<rect x={x1 - 0.6} y={dir > 0 ? y + 6 : y - 10} width={x2 - x1 + 1.2} height={4} fill="currentColor" />);
      };
      beam(hands, beamU, 4.2, 1);
      beam(feet, beamD, -4.2, -1);

      const label = (i: number, t: string) =>
        add(
          <text x={X(q * 4 + i)} y={H - 4} textAnchor="middle" fontSize={10.5} fill="currentColor" opacity={0.7} style={{ fontFamily: "var(--f-mono)" }}>
            {t}
          </text>,
        );
      if (G.stick) {
        for (let i = 0; i < 4; i++) label(i, G.stick[q * 4 + i]);
      } else if (showCount) {
        const c = G.count === 16 ? [String(q + 1), "e", "+", "a"] : [String(q + 1), null, "+", null];
        c.forEach((t, i) => t !== null && label(i, t));
      }
    }
  }
  return { W, H, out };
}

export function Stave({
  groove = "rock",
  bars = 1,
  fill = false,
  count = false,
  label = "Drum notation",
}: {
  groove?: GrooveName;
  bars?: number;
  fill?: boolean;
  count?: boolean;
  label?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    if (!fill || !ref.current) return;
    const el = ref.current;
    const ro = new ResizeObserver(([entry]) => setWidth(Math.round(entry.contentRect.width)));
    ro.observe(el);
    return () => ro.disconnect();
  }, [fill]);

  const G = GROOVES[groove];
  const hasFeet = !!G.bd;
  const reserve = TOP + (hasFeet ? 62 : 40) + (count || G.stick ? 20 : 0);
  const n = fill ? (width === null ? null : Math.max(1, Math.floor((width - CLEF) / BAR))) : bars;

  if (n === null) {
    return <span ref={ref} className="stave" style={{ minHeight: reserve }} aria-hidden="true" />;
  }
  const { W, H, out } = draw(G, n, count);
  return (
    <span ref={ref} className="stave">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label}>
        <g className="lines">
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={i} x1={0} x2={W - 2} y1={TOP + i * S} y2={TOP + i * S} />
          ))}
        </g>
        {out}
      </svg>
    </span>
  );
}
