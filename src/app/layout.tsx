import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Marina Luz Fotografia | Fotografia de Casamentos em São Paulo",
    template: "%s | Marina Luz Fotografia",
  },
  description:
    "Fotografia autoral de casamentos em São Paulo. Capturando emoções genuínas e histórias de amor únicas há mais de 8 anos.",
  keywords: [
    "fotografia casamento",
    "casamento são paulo",
    "fotógrafo casamento sp",
    "fotógrafa casamento",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
