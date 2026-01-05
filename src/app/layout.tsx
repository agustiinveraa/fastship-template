import type { Metadata } from "next";
import { Instrument_Serif, Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "SaaS Landing Page Template - Next.js + TailwindCSS + DaisyUI",
  description: "A beautiful, modern landing page template built with Next.js, TailwindCSS, and DaisyUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${inter.variable} ${firaCode.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

