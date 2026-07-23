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
  title: "Jaya Prasad M | Java Developer",
  description:
    "Java Developer with 4+ years of experience building scalable, cloud-native applications using Java, Spring Boot, React.js, and GCP.",
  keywords: [
    "Java Developer",
    "Full Stack Developer",
    "Spring Boot",
    "React.js",
    "GCP",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Jaya Prasad M" }],
  openGraph: {
    title: "Jaya Prasad M | Java Developer",
    description:
      "Java Developer with 4+ years of experience building scalable, cloud-native applications.",
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-white text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}