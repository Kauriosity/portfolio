import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gurjot Kaur — Software Engineer Aspirant",
  description:
    "Portfolio of Gurjot Kaur, a Computer Science student at Bennett University focused on building scalable systems with strong foundations in DSA, OOP, DBMS, and core CS fundamentals.",
  keywords: [
    "Gurjot Kaur",
    "Software Engineer",
    "Next.js",
    "React",
    "DSA",
    "Portfolio",
    "CS Student",
    "Bennett University",
    "Backend Systems",
  ],
  authors: [{ name: "Gurjot Kaur" }],
  openGraph: {
    title: "Gurjot Kaur — Software Engineer Aspirant",
    description:
      "CS student building scalable systems with strong CS fundamentals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <body className="antialiased" suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
