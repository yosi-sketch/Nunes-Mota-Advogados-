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
  themeColor: "#060f1e",
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marianacorsi.adv.br"),
  title:
    "Mariana Corsi | Advocacia Previdenciária & INSS · Pitangui - MG",
  description:
    "⚖️ Mariana Corsi Advocacia Previdenciária — Especialista em Direito Previdenciário e Benefícios do INSS. Planejamento Previdenciário, Aposentadorias, BPC/LOAS, Auxílio-Doença, Pensão por Morte e Revisões. Nota 5,0 ★ no Google (29 avaliações). Sede em Pitangui - MG e atendimento online para todo o Brasil.",
  keywords: [
    "Mariana Corsi Advocacia",
    "Mariana Corsi Advocacia Previdenciária",
    "Dra. Mariana Corsi",
    "Mariana Corsi",
    "Advogada Previdenciária Pitangui MG",
    "Advogado INSS Pitangui MG",
    "Aposentadoria Pitangui MG",
    "BPC LOAS Pitangui MG",
    "Planejamento Previdenciário MG",
    "Auxílio Doença INSS Pitangui",
    "Benefício Negado INSS Pitangui",
    "Pensão por Morte Pitangui MG",
    "marianamunizcorsi",
    "Advocacia Previdenciária Minas Gerais",
    "Atendimento INSS Online Brasil",
  ],
  authors: [{ name: "Dra. Mariana Corsi" }],
  creator: "Mariana Corsi Advocacia Previdenciária",
  publisher: "Mariana Corsi Advocacia Previdenciária",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=mc2", sizes: "any" },
      { url: "/favicon-32x32.png?v=mc2", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=mc2", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=mc2", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png?v=mc2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=mc2",
    apple: [{ url: "/apple-icon.png?v=mc2", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.marianacorsi.adv.br",
    title:
      "Mariana Corsi | Advocacia Previdenciária & INSS · Pitangui - MG",
    description:
      "⚖️ Advocacia Previdenciária com foco no seu melhor benefício. Planejamento, Aposentadorias, BPC/LOAS e liberação de auxílios negados. 5,0 ★ no Google (29 avaliações). Sede em Pitangui - MG e atendimento online para todo o Brasil.",
    siteName: "Mariana Corsi Advocacia Previdenciária",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 682,
        alt: "Mariana Corsi Advocacia Previdenciária",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mariana Corsi | Advocacia Previdenciária & INSS · Pitangui - MG",
    description:
      "⚖️ Direito Previdenciário sem complicação. Nota 5,0 ★ no Google (29 avaliações). Sede na R. Martinho Campos, 162 - Centro, Pitangui - MG e atuação em todo o Brasil.",
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
    name: "Mariana Corsi Advocacia Previdenciária",
    alternateName: "Mariana Corsi | Advogada Previdenciária",
    legalName: "Mariana Corsi Advocacia Previdenciária",
    telephone: "+55-38-99930-8575",
    email: "contato@marianacorsi.adv.br",
    url: "https://www.marianacorsi.adv.br",
    image: "https://www.marianacorsi.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Martinho Campos, 162 - Centro",
      addressLocality: "Pitangui",
      addressRegion: "MG",
      postalCode: "35650-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-19.6800",
      longitude: "-45.2100",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "29",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      "Pitangui",
      "Leandro Ferreira",
      "Conceição do Pará",
      "Onça de Pitangui",
      "Pará de Minas",
      "Nova Serrana",
      "Bom Despacho",
      "Divinópolis",
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
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/marianamunizcorsi/",
      "https://wa.me/5538999308575",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=mc2" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=mc2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=mc2" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png?v=mc2" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png?v=mc2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=mc2" />
        <link rel="shortcut icon" href="/favicon.ico?v=mc2" />
        <meta name="theme-color" content="#060f1e" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-white font-sans text-slate-900 antialiased selection:bg-[#c5a059] selection:text-[#060f1e]">
        {children}
      </body>
    </html>
  );
}
