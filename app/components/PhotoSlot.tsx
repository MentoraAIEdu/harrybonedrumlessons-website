import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

/**
 * An optional photo.
 *
 * If the file exists under /public when the site is built, it shows. If it
 * doesn't, nothing renders at all: no grey box, no placeholder. The text around
 * it carries the space, so every page looks finished with or without photos.
 *
 * To add a photo later, drop the file at the path the slot names and push.
 * Nothing else needs changing. Slots in use:
 *   harry-hero.jpg          homepage, top
 *   photos/teaching.jpg     homepage, "What lessons are like"
 *   photos/playing.jpg      About, top
 *   photos/studio.jpg       Lessons, "Studio or your home"
 *
 * The check runs at build time, which is when these pages are generated.
 */
export function PhotoSlot({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  let present = false;
  try {
    present = fs.existsSync(path.join(process.cwd(), "public", src));
  } catch {
    present = false;
  }
  if (!present) return null;

  return (
    <div className="rounded-2xl overflow-hidden">
      <Image
        src={`/${src}`}
        alt={alt}
        width={1200}
        height={800}
        sizes="(max-width: 768px) 100vw, 672px"
        className="w-full h-auto object-cover"
        priority={priority}
      />
    </div>
  );
}
