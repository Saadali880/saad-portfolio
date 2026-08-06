import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://saad-portfolio.vercel.app"),
  title: "Saad Ali — AI/ML Engineer & Software Builder",
  description:
    "Portfolio of Saad Ali, a computer science student and machine learning intern building practical AI, mobile, data and algorithmic systems.",
  keywords: [
    "Saad Ali",
    "Machine Learning Engineer",
    "Computer Science",
    "Python Developer",
    "C++ Developer",
    "Lahore",
  ],
  authors: [{ name: "Saad Ali", url: "https://github.com/Saadali880" }],
  openGraph: {
    title: "Saad Ali — AI/ML Engineer & Software Builder",
    description: "Curiosity turned into working systems across AI, data, mobile and algorithms.",
    url: "https://saad-portfolio.vercel.app",
    siteName: "Saad Ali Portfolio",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Saad Ali portfolio" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Ali — AI/ML Engineer & Software Builder",
    description: "Curiosity turned into working systems.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
