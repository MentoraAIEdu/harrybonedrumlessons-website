import type { Metadata } from "next";

export const SITE_URL = "https://harrybonedrumlessons.com";
export const SITE_NAME = "Harry Bone Drum Lessons";
export const WHATSAPP_URL = "https://wa.me/447984263112";
export const WHATSAPP_DISPLAY = "+44 7984 263112";
export const EMAIL = "harrybonedrumlessons@gmail.com";
export const PLAYLIST_ID = "PLnW7DBoH5op8JxS3NwyhbSF51bxWpDvY5";
export const PLAYLIST_URL = `https://www.youtube.com/playlist?list=${PLAYLIST_ID}`;
// The Partner app's App Store page. Slugless on purpose: Apple resolves it,
// and the old app name stays out of the site entirely.
export const PARTNER_APP_URL = "https://apps.apple.com/app/id6753584431";

/** The link-preview image: 1200x630, cut from the hero photo. */
export const OG_IMAGE = {
  url: `${SITE_URL}/og.jpg`,
  width: 1200,
  height: 630,
  alt: "Harry Bone at his electronic drum kit",
};

/**
 * Per-page metadata. Every page states its own canonical URL; the layout no
 * longer sets one, because a canonical inherited from the layout told Google
 * that every page was a copy of the homepage.
 *
 * Next.js replaces openGraph/twitter wholesale rather than merging, so each
 * page gets the full set here.
 */
export function pageMetadata({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_GB",
      title,
      description,
      url,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

// Copied word for word from Senja. Never rewrite or tidy a quote.
export const REVIEWS = [
  {
    quote:
      "Harry is an excellent and encouraging teacher. Our son has progressed massively and is really enjoying the breadth of content to learn. Always timely, polite, clearly very knowledgeable and communicates really clearly. Would recommend Harry to anyone!",
    name: "Richard",
    who: "Parent",
  },
  {
    quote:
      "Brilliant teacher, tailored lessons to my musical interests overall and on a week-to-week basis. Always able to help me get unstuck. Great drum kit and teaching resources. Harry has taken me from complete beginner to playing through my favourite songs.",
    name: "Max",
    who: "Student",
  },
  {
    quote:
      "Harry Bone is an experienced, meticulous, and encouraging drum instructor. I am very grateful for his encouragement and guidance, which has greatly improved my son's skills. He also helped him take the exam and obtain certification.",
    name: "Vicky",
    who: "Parent",
  },
];
