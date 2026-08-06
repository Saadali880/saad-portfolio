import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://saad-portfolio-wheat.vercel.app"),
  title: "Saad Ali — AI/ML & Software Portfolio",
  description:
    "Portfolio of Saad Ali, a computer science student and machine learning intern building practical AI, mobile, data and algorithmic systems.",
  keywords: [
    "Saad Ali",
    "AI ML Engineer",
    "Computer Science",
    "Python Developer",
    "C++ Developer",
    "Lahore",
  ],
  authors: [{ name: "Saad Ali", url: "https://github.com/Saadali880" }],
  openGraph: {
    title: "Saad Ali — AI/ML & Software Portfolio",
    description: "Machine learning, data and software projects by Saad Ali, a final-year Computer Science student in Lahore.",
    url: "https://saad-portfolio-wheat.vercel.app",
    siteName: "Saad Ali Portfolio",
    images: [{ url: "/og-v3.png", width: 1200, height: 630, alt: "Saad Ali — AI, ML, software and data portfolio" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Ali — AI/ML & Software Portfolio",
    description: "Practical systems across machine learning, data and software.",
    images: ["/og-v3.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
