import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VitalCode | Cartes utilisateurs, API Hello et guide Firebase",
  description:
    "Démo Next.js pour le test technique VitalCode : cartes utilisateurs responsive, route API /api/hello et guide de connexion Firebase Auth.",
  keywords: [
    "Next.js",
    "Tailwind CSS",
    "Firebase Auth",
    "API route",
    "User Card",
    "VitalCode",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "VitalCode | Cartes utilisateurs, API Hello et guide Firebase",
    description:
      "Cartes utilisateurs responsive, test API /api/hello et guide rapide Firebase Auth.",
    url: "https://VitalCode.vercel.app/",
    siteName: "VitalCode Demo",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "VitalCode | Cartes utilisateurs, API Hello et guide Firebase",
    description:
      "Cartes utilisateurs responsive, test API /api/hello et guide rapide Firebase Auth.",
  },
  alternates: {
    canonical: "https://VitalCode.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
