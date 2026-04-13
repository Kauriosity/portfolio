import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gurjot Kaur — Full Stack Developer",
  description:
    "Portfolio of Gurjot Kaur, a Computer Science student and Full Stack Developer specializing in scalable web applications, DSA, and backend systems.",
  keywords: [
    "Gurjot Kaur",
    "Full Stack Developer",
    "Next.js",
    "React",
    "DSA",
    "Portfolio",
    "CS Student",
    "Bennett University",
  ],
  authors: [{ name: "Gurjot Kaur" }],
  openGraph: {
    title: "Gurjot Kaur — Full Stack Developer",
    description:
      "Computer Science student building scalable full-stack web applications.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
