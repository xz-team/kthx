import "./globals.css";

import type { Metadata } from "next";

// import { Aldrich } from "next/font/google";

// const variableFont = Aldrich({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "kthx",
  description: "xz.team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
