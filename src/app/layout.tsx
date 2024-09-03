import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
const inter = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trisul Travel",

  description: "Our travel and toursim website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
