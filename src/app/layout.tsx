import type { Metadata } from "next";
import { Geist, Exo_2, Oswald } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-Oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alberto Paim",
  description: "Portifolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body
        className={`${geistSans.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
