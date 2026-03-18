import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harrybonedrumlessons.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  title: {
    default: "Harry Bone Drum Lessons | Professional Drum Teacher in Bristol",
    template: "%s | Harry Bone Drum Lessons",
  },
  description:
    "Professional drum lessons in Bristol with Harry Bone. BMus (Hons) from RWCMD, 20+ years playing, 6+ years teaching. In-person at home studio or mobile. DBS checked. All ages. Trial lesson £10.",
  keywords: [
    "drum lessons Bristol",
    "drum teacher Bristol",
    "learn drums Bristol",
    "private drum lessons Bristol",
    "drum tutor near me",
    "Harry Bone",
    "Harry Bone drums",
    "Rockschool drum lessons",
    "drum lessons for kids Bristol",
    "adult drum lessons Bristol",
    "online drum lessons UK",
    "beginner drum lessons",
    "mobile drum teacher Bristol",
  ],
  authors: [{ name: "Harry Bone" }],
  creator: "Harry Bone",
  other: {
    "theme-color": "#04C57A",
    "google-site-verification": "",
  },
  openGraph: {
    title: "Harry Bone Drum Lessons | Bristol",
    description:
      "Professional drum lessons in Bristol. In-person at my home studio or I come to you. All ages, all levels.",
    url: "https://harrybonedrumlessons.com",
    siteName: "Harry Bone Drum Lessons",
    type: "website",
    images: [
      {
        url: "https://harrybonedrumlessons.com/harry-hero.jpg",
        width: 800,
        height: 500,
        alt: "Harry Bone at the drum kit in his home studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harry Bone Drum Lessons | Bristol",
    description:
      "Professional drum lessons in Bristol. In-person at my home studio or I come to you. All ages, all levels.",
    images: ["https://harrybonedrumlessons.com/harry-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sourceSerif.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
