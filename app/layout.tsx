import type { Metadata, Viewport } from "next";
import { Archivo, Atkinson_Hyperlegible, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "./lib/site";

// Archivo is loaded with its width axis: headings are set at 72% width.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

// Body text. Designed for easy reading.
const atkinson = Atkinson_Hyperlegible({
  variable: "--font-atkinson",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// Small labels and counts.
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

/*
 * Site-wide defaults only. There is deliberately NO canonical here: every
 * page sets its own (see lib/site.ts), and a canonical inherited from the
 * layout told Google that every page was a copy of the homepage.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Harry Bone Drum Lessons | Drum teacher in Brislington, Bristol",
    template: "%s | Harry Bone Drum Lessons",
  },
  description:
    "Drum lessons in Brislington, Bristol for ages 7 and up. BMus (Hons) RWCMD, Enhanced DBS. At my studio or your home. Book a £10 trial lesson.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
  authors: [{ name: "Harry Bone" }],
  creator: "Harry Bone",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_GB",
    url: SITE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F1E8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${archivo.variable} ${atkinson.variable} ${plexMono.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
