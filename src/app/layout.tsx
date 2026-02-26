import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aurea Hotels - Eco-Glamping Prístino",
  description: "Lujo carbononeutral en Patagonia y Río Celeste. Eco-glamping sostenible en santuarios naturales. -10% reserva directa.",
  keywords: "eco-glamping, Patagonia, Río Celeste, turismo sostenible, carbononeutral, lujo ecológico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
