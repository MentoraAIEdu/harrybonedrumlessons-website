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
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  title: {
    default: "Harry Bone Drum Lessons | Bristol",
    template: "%s | Harry Bone Drum Lessons",
  },
  description:
    "Professional drum lessons in Bristol with Harry Bone. BMus (Hons) from RWCMD, 6+ years teaching, DBS checked. In-person or online. Book a trial lesson for just £10.",
  keywords: [
    "drum lessons Bristol",
    "drum teacher Bristol",
    "learn drums",
    "Harry Bone",
    "Rockschool",
    "private drum lessons",
  ],
  openGraph: {
    title: "Harry Bone Drum Lessons | Bristol",
    description:
      "Professional drum lessons in Bristol. In-person at my home studio or I come to you. All ages, all levels.",
    url: "https://harrybonedrumlessons.com",
    siteName: "Harry Bone Drum Lessons",
    type: "website",
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
