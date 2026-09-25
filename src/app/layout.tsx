import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "PeraTrack — Personal Finance, Credit Cards & OCR Receipt Scanner",
  description: "PeraTrack helps Filipinos track accounts, credit cards, OCR receipts, statement due dates, installment purchases, fees, and payments in one clear dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} dark scroll-smooth`}>
      <body className="bg-[#00160D] text-slate-100 font-sans antialiased selection:bg-[#85DB6C] selection:text-[#00160D]">
        {children}
      </body>
    </html>
  );
}


