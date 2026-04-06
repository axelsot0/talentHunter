import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TALENTO 360 | Asesoría Profesional en República Dominicana",
    template: "%s | TALENTO 360",
  },
  description:
    "Asesorías enfocadas para potencializar tu perfil profesional. Conectamos talento con oportunidades en República Dominicana.",
  keywords: [
    "empleo",
    "vacantes",
    "trabajo",
    "república dominicana",
    "talento",
    "reclutamiento",
    "asesoría profesional",
    "recursos humanos",
  ],
  openGraph: {
    locale: "es_DO",
    type: "website",
    siteName: "TALENTO 360",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${plusJakarta.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
