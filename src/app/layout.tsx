import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gurjot Kaur – Full-Stack Developer",
  description:
    "Portfolio of Gurjot Kaur – Full-Stack Developer (MERN + Django) and DSA Enthusiast building scalable web systems and data-driven applications.",
  keywords: [
    "Gurjot Kaur",
    "Full Stack Developer",
    "MERN",
    "Django",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Gurjot Kaur" }],
  openGraph: {
    title: "Gurjot Kaur – Full-Stack Developer",
    description:
      "Building scalable web systems & data-driven applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="bg-black text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
