import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ashiqur.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Mohammad Ashiqur Rahman | Next.js & React Developer | AI Integration Specialist",
    template: "%s | Mohammad Ashiqur Rahman",
  },
  description:
    "Full Stack Developer specializing in Next.js, React, and AI Integration. Expert in building high-performance web applications with modern technologies.",
  keywords: [
    "Next.js Developer",
    "React Developer",
    "AI Integration",
    "Full Stack Developer",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Frontend Developer",
    "Software Engineer",
    "Web Applications",
    "Performance Optimization",
    "Mohammad Ashiqur Rahman",
  ],
  authors: [{ name: "Mohammad Ashiqur Rahman" }],
  creator: "Mohammad Ashiqur Rahman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashiqur.dev",
    siteName: "Ashiqur Rahman Portfolio",
    title: "Mohammad Ashiqur Rahman | Next.js & React Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, and AI Integration. Building high-performance web applications.",
    images: [
      {
        url: "/imgs/website.png",
        width: 1200,
        height: 630,
        alt: "Mohammad Ashiqur Rahman - Next.js & React Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Ashiqur Rahman | Next.js & React Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, and AI Integration",
    images: ["/imgs/website.png"],
    creator: "@ashiqur_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ashiqur.dev",
  },
  icons: {
    icon: "/profile.png",
    apple: "/profile.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
