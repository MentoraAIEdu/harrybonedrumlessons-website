"use client";

import { useState, type CSSProperties } from "react";
import { Stave, type GrooveName } from "./Stave";

/**
 * A video (or Soundslice) block that loads nothing until it is tapped. Until
 * then it is a dark poster with a stave and a play button, so a phone never
 * downloads a player nobody asked for.
 *
 * referrerPolicy is required: without a referrer YouTube refuses to play
 * (its "Error 153").
 */
export function EmbedPoster({
  src,
  title,
  ariaLabel,
  caption,
  sub,
  groove,
  count = false,
  style,
}: {
  /** Embed URL, with autoplay already in it where the player supports it. */
  src: string;
  title: string;
  ariaLabel: string;
  caption: string;
  sub: string;
  groove: GrooveName;
  count?: boolean;
  style?: CSSProperties;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="video is-playing" style={style}>
        <iframe
          src={src}
          title={title}
          referrerPolicy="strict-origin-when-cross-origin"
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media; clipboard-write"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button type="button" className="video" style={style} aria-label={ariaLabel} onClick={() => setPlaying(true)}>
      <span className="poster">
        <Stave groove={groove} fill count={count} label="Drum notation" />
        <span className="play">
          <i />
          <span className="meta">
            <b>{caption}</b>
            <span>{sub}</span>
          </span>
        </span>
      </span>
    </button>
  );
}
