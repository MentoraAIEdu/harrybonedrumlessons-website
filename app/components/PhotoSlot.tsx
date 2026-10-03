import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Stave, type GrooveName } from "./Stave";

/**
 * An optional photo.
 *
 * If the file exists under /public when the site is built, it shows. If it
 * doesn't, the frame is filled with drum notation and a small label instead,
 * so the page looks finished either way (Design's "empty" photo block).
 *
 * To add a photo later, drop the file at the path the slot names and push.
 * Nothing else needs changing. Slots in use:
 *   photos/playing.jpg      About, top
 *   photos/teaching.jpg     Lessons, top
 *   photos/studio.jpg       Lessons, "Studio or your home"
 *
 * The check runs at build time, which is when these pages are generated.
 */
export function PhotoSlot({
  src,
  alt,
  ar = "4/3",
  label,
  groove,
  fill = false,
  count = false,
}: {
  src: string;
  alt: string;
  ar?: string;
  /** Shown above the notation when there is no photo. */
  label: string;
  groove: GrooveName;
  fill?: boolean;
  count?: boolean;
}) {
  let present = false;
  try {
    present = fs.existsSync(path.join(process.cwd(), "public", src));
  } catch {
    present = false;
  }

  const style = { "--ar": ar } as React.CSSProperties;

  if (present) {
    return (
      <figure className="photo" style={style}>
        <div className="frame">
          <Image src={`/${src}`} alt={alt} width={1200} height={900} sizes="(max-width: 900px) 100vw, 560px" />
        </div>
      </figure>
    );
  }

  return (
    <figure className="photo empty" style={style}>
      <div className="frame">
        <span className="t-mono">{label}</span>
        <Stave groove={groove} fill={fill} count={count} label={label} />
      </div>
    </figure>
  );
}
