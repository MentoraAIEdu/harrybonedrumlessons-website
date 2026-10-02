"use client";

import { useState } from "react";

/**
 * A video that loads only when tapped. Until then it is a plain block with a
 * play button, so the page doesn't pull in a whole video player on a phone
 * before anyone has asked for it.
 */
export function VideoFacade({
  embedUrl,
  title,
  label,
}: {
  /** The embed URL; autoplay is added on tap. */
  embedUrl: string;
  title: string;
  label: string;
}) {
  const [playing, setPlaying] = useState(false);
  const src = embedUrl + (embedUrl.includes("?") ? "&" : "?") + "autoplay=1";

  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden bg-[var(--color-foreground)]">
      {playing ? (
        <iframe
          src={src}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-4 text-white group"
        >
          <span className="w-16 h-16 rounded-full bg-white flex items-center justify-center transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" className="w-6 h-6 ml-1" aria-hidden="true">
              <path d="M8 5v14l11-7z" fill="#1A1A1A" />
            </svg>
          </span>
          <span className="text-sm text-white/80 px-6 text-center">{label}</span>
        </button>
      )}
    </div>
  );
}
