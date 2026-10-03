import type { CSSProperties } from "react";

/**
 * A YouTube or Soundslice player, shown as itself.
 *
 * This replaced a drawn poster that swapped in the player on tap. Phones
 * block players from starting themselves, so the poster cost a second tap:
 * tap the poster, then tap the real play button. Now the first thing anyone
 * sees is the real player, and one tap plays it.
 *
 * loading="lazy" keeps the page fast: the browser only fetches the player
 * as it scrolls near, so nothing from YouTube or Soundslice loads with the
 * top of the page. referrerPolicy is required: without a referrer YouTube
 * refuses to play (its "Error 153").
 */
export function Embed({
  src,
  title,
  caption,
  style,
}: {
  src: string;
  title: string;
  caption: string;
  style?: CSSProperties;
}) {
  return (
    <figure className="embed">
      <div className="video is-playing" style={style}>
        <iframe
          src={src}
          title={title}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media; clipboard-write"
          allowFullScreen
        />
      </div>
      <figcaption className="t-small muted">{caption}</figcaption>
    </figure>
  );
}
