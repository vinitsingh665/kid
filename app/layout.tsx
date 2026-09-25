import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "KidZoo - Learn, Play & Create with Fun",
  description:
    "Fun games, printable activities, stories and more — all in one place for curious kids and happy parents. Explore educational games, coloring pages, math worksheets and more at KidZoo.",
  keywords: ["kids games", "educational activities", "printables", "coloring pages", "math worksheets", "children learning"],
  authors: [{ name: "KidZoo" }],
  openGraph: {
    title: "KidZoo - Learn, Play & Create",
    description: "A joyful place for curious kids and happy parents.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
