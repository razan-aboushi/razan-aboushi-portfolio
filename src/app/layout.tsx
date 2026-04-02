import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Razan Aboushi - Full Stack Engineer",
  description: "Full Stack Engineer with 2+ years of experience building scalable web applications used by thousands of users using React, Next.js, TypeScript, and Node.js. Proven track record of improving page speed by over 30%, optimizing performance, implementing authentication systems, and enhancing SEO and Core Web Vitals. Passionate about building high-quality, performant web applications and a highly motivated, fast-learning, collaborative team player.",
  keywords: ["Full Stack Engineer", "React", "Next.js", "TypeScript", "Web Development", "Portfolio", "Node.js", "JavaScript", "SEO", "Core Web Vitals", "Performance Optimization", "SSO", "Authentication"],
  authors: [{ name: "Razan Aboushi" }],
  creator: "Razan Aboushi",
  robots: "index, follow",
  metadataBase: new URL("https://razan-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Razan Aboushi - Full Stack Engineer",
    description: "Full Stack Engineer with 2+ years of experience building scalable web applications used by thousands of users using React, Next.js, TypeScript, and Node.js. Proven track record of improving page speed by over 30%, optimizing performance, implementing authentication systems, and enhancing SEO and Core Web Vitals.",
    url: "https://razan-portfolio.vercel.app",
    siteName: "Razan Aboushi Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://razan-portfolio.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Razan Aboushi - Full Stack Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Razan Aboushi - Full Stack Engineer",
    description: "Full Stack Engineer with 2+ years of experience building scalable web applications.",
    images: {
      url: "https://razan-portfolio.vercel.app/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Razan Aboushi - Full Stack Engineer Portfolio",
    },
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
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-gray-900 text-white">{children}</body>
    </html>
  );
}
