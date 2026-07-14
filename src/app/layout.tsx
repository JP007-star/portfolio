import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaya Prasad M | Lead Software Engineer",
  description:
    "Full Stack Developer & DevOps Engineer - Building scalable systems with modern technologies. Specialized in React, Spring Boot, AWS, Docker, Kubernetes.",
  keywords: [
    "Lead Software Engineer",
    "Full Stack Developer",
    "DevOps Engineer",
    "React",
    "Spring Boot",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Jaya Prasad M" }],
  openGraph: {
    title: "Jaya Prasad M | Lead Software Engineer",
    description:
      "Full Stack Developer & DevOps Engineer - Building scalable systems with modern technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}