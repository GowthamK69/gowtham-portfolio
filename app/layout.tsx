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
  title: "Gowtham K | Professional Portfolio",

  description:
    "Portfolio of Gowtham K, MSc Computer Science Graduate with experience in Artificial Intelligence, Data Analytics, Research Publications, Operations, Documentation, and Technology Solutions.",

  keywords: [
    "Gowtham K",
    "Portfolio",
    "Computer Science",
    "Artificial Intelligence",
    "Data Analytics",
    "Research Publications",
    "Operations",
    "Documentation",
    "Technology",
    "Graduate",
  ],

  authors: [
    {
      name: "Gowtham K",
    },
  ],

  creator: "Gowtham K",

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title: "Gowtham K | Professional Portfolio",
    description:
      "MSc Computer Science Graduate specializing in AI, Data Analytics, Research, Operations, and Technology Solutions.",
    images: ["/logo.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        {children}
      </body>
    </html>
  );
}