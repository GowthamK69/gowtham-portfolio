import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
  metadataBase: new URL("https://gowtham-portfolio-mu.vercel.app"),

  title: {
    default: "Gowtham K | Professional Portfolio",
    template: "%s | Gowtham K",
  },

  description:
    "Portfolio of Gowtham K, MSc Computer Science Graduate specializing in Artificial Intelligence, Machine Learning, Data Analytics, Research Publications, IEEE Reviewing, Documentation, Operations, and Technology Solutions.",

  keywords: [
    "Gowtham K",
    "Portfolio",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Analytics",
    "Research Publications",
    "IEEE Reviewer",
    "Computer Science",
    "Python",
    "SQL",
    "Technology",
    "Research",
  ],

  authors: [
    {
      name: "Gowtham K",
    },
  ],

  creator: "Gowtham K",
  publisher: "Gowtham K",

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title: "Gowtham K | Professional Portfolio",
    description:
      "MSc Computer Science Graduate specializing in AI, Machine Learning, Data Analytics, Research Publications, and Technology Solutions.",
    url: "https://gowtham-portfolio-mu.vercel.app",
    siteName: "Gowtham K Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Gowtham K Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gowtham K | Professional Portfolio",
    description:
      "AI Researcher • IEEE Reviewer • Data Analytics Enthusiast",
    images: ["/profile.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}