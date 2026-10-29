import type { Metadata, Viewport } from "next";
import {
  Cinzel,
  Playfair_Display,
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

const cinzelFont = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const playfairFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0d12",
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.angelamaria.adv.br"),
  title:
    "Dra. Ângela Maria Gonçalves Rabelo | Advocacia, Consultoria & Assessoria Jurídica · Cláudio - MG",
  description:
    "⚖️ Dra. Ângela Maria Gonçalves Rabelo — Advocacia, Consultoria & Assessoria Jurídica. Defesas Criminais, Prisões 24h, Audiências, Divórcios, Guarda, Pensão Alimentícia, Inventários, Contratos e Usucapião. Nota máxima 5,0 ★ no Google (35 avaliações). Sede em Cláudio - MG e atendimento digital em todo o Brasil.",
  keywords: [
    "Dra. Ângela Maria Gonçalves Rabelo",
    "Ângela Maria Advogada",
    "Advogada Cláudio MG",
    "Advogado em Cláudio Minas Gerais",
    "angelamaria.advocacia",
    "Advogada Criminalista Cláudio MG",
    "Defesa Criminal e Prisões Cláudio",
    "Divórcio e Pensão Cláudio MG",
    "Inventário em Cartório Cláudio MG",
    "Guarda de Filhos Cláudio MG",
    "Usucapião e Contratos Cláudio MG",
    "Assessoria Jurídica Cláudio MG",
    "Divinópolis Carmo da Mata Itapecerica Cláudio MG",
    "Atendimento Jurídico Online Brasil",
  ],
  authors: [{ name: "Dra. Ângela Maria Gonçalves Rabelo" }],
  creator: "Dra. Ângela Maria Gonçalves Rabelo — Advocacia",
  publisher: "Dra. Ângela Maria Gonçalves Rabelo — Advocacia, Consultoria & Assessoria Jurídica",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=amr1", sizes: "any" },
      { url: "/favicon-32x32.png?v=amr1", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=amr1", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=amr1", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png?v=amr1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=amr1",
    apple: [{ url: "/apple-icon.png?v=amr1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.angelamaria.adv.br",
    title:
      "Dra. Ângela Maria Gonçalves Rabelo | Advocacia & Consultoria Jurídica · Cláudio - MG",
    description:
      "⚖️ Advocacia de alta excelência, acolhimento e combatividade. Defesas, Prisões, Audiências, Divórcios, Guarda, Pensão, Inventários, Contratos e Usucapião. 5,0 ★ no Google (35 avaliações). Sede em Cláudio - MG e atendimento digital em todo o Brasil.",
    siteName: "Dra. Ângela Maria Gonçalves Rabelo — Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "Dra. Ângela Maria Gonçalves Rabelo — Advocacia, Consultoria & Assessoria Jurídica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dra. Ângela Maria Gonçalves Rabelo | Advocacia de Excelência · Cláudio - MG",
    description:
      "⚖️ Advocacia de Alto Padrão. Nota 5,0 ★ no Google (35 avaliações). Sede na Pça. Levy Vitói de Freitas, 28, Sl 303 - Centro, Cláudio - MG e atuação em todo o Brasil.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Dra. Ângela Maria Gonçalves Rabelo — Advocacia, Consultoria & Assessoria Jurídica",
    alternateName: "Ângela Maria | Advogada",
    legalName: "Dra. Ângela Maria Gonçalves Rabelo — Advocacia",
    telephone: "+55-37-99921-8631",
    email: "contato@angelamaria.adv.br",
    url: "https://www.angelamaria.adv.br",
    image: "https://www.angelamaria.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Praça Levy Vitói de Freitas, n° 28 - Sl 303 - Centro",
      addressLocality: "Cláudio",
      addressRegion: "MG",
      postalCode: "35530-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-20.4447",
      longitude: "-44.7675",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "35",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      "Cláudio",
      "Divinópolis",
      "Itapecerica",
      "Carmo da Mata",
      "Carmópolis de Minas",
      "Oliveira",
      "Campo Belo",
      "Belo Horizonte",
      "Minas Gerais",
      "Brasil",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:30",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/angelamaria.advocacia/",
      "https://wa.me/5537999218631",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=amr1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=amr1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=amr1" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png?v=amr1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=amr1" />
        <link rel="shortcut icon" href="/favicon.ico?v=amr1" />
        <meta name="theme-color" content="#0a0d12" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-white font-sans text-slate-900 antialiased selection:bg-[#b81424] selection:text-white">
        {children}
      </body>
    </html>
  );
}
