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
  themeColor: "#050a14",
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dryanmarlon.adv.br"),
  title:
    "Dr. Yan Marlon | Advocacia, Assessoria e Consultoria Jurídica · Januária - MG",
  description:
    "⚖️ Dr. Yan Marlon — Advocacia, Assessoria e Consultoria Jurídica (OAB/MG 195.229). Atuação em Direito Civil, Contratos, Família e Sucessões, Assessoria Empresarial, Trabalhista Patronal e Previdenciário. Nota 5,0 ★ no Google (28 avaliações). Sede em Januária - MG e atendimento online para todo o Brasil.",
  keywords: [
    "Dr. Yan Marlon",
    "Yan Marlon Advocacia",
    "Dr. Yan Marlon Advogado",
    "Advogado Januária MG",
    "Advocacia em Januária",
    "Consultoria Jurídica Januária",
    "OAB MG 195229",
    "Direito Civil Januária",
    "Contratos Januária MG",
    "Direito de Família Januária",
    "Inventário Januária MG",
    "Assessoria Jurídica Januária",
    "Advogado Norte de Minas",
    "dr.yan.marlon",
    "Advocacia Minas Gerais",
  ],
  authors: [{ name: "Dr. Yan Marlon" }],
  creator: "Dr. Yan Marlon — Advocacia, Assessoria e Consultoria Jurídica",
  publisher: "Dr. Yan Marlon — Advocacia, Assessoria e Consultoria Jurídica",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=ym1", sizes: "any" },
      { url: "/favicon-32x32.png?v=ym1", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=ym1", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=ym1", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png?v=ym1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=ym1",
    apple: [{ url: "/apple-icon.png?v=ym1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.dryanmarlon.adv.br",
    title:
      "Dr. Yan Marlon | Advocacia, Assessoria e Consultoria Jurídica · Januária - MG",
    description:
      "⚖️ Advocacia de excelência, compromisso inegociável e defesa estratégica dos seus direitos. 5,0 ★ no Google (28 avaliações). Sede em Januária - MG e atendimento online para todo o Brasil.",
    siteName: "Dr. Yan Marlon — Advocacia e Consultoria Jurídica",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "Dr. Yan Marlon — Advocacia e Consultoria Jurídica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dr. Yan Marlon | Advocacia, Assessoria e Consultoria Jurídica · Januária - MG",
    description:
      "⚖️ Advocacia e Consultoria Jurídica com rigor técnico e comprometimento. Nota 5,0 ★ no Google (28 avaliações). Sede na R. Cel. Serrão, n.190 - Centro, Januária - MG.",
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
    name: "Yan Marlon — Advocacia, Assessoria e Consultoria Jurídica",
    alternateName: "Dr. Yan Marlon | Advogado e Consultor Jurídico",
    legalName: "Yan Marlon Advocacia, Assessoria e Consultoria Jurídica",
    telephone: "+55-38-99928-0572",
    email: "contato@dryanmarlon.adv.br",
    url: "https://www.dryanmarlon.adv.br",
    image: "https://www.dryanmarlon.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Cel. Serrão, n.190 - Centro",
      addressLocality: "Januária",
      addressRegion: "MG",
      postalCode: "39480-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-15.4833",
      longitude: "-44.3667",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "28",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      "Januária",
      "Montes Claros",
      "Itacarambi",
      "São Francisco",
      "Manga",
      "Varzelândia",
      "Pedras de Maria da Cruz",
      "Bonito de Minas",
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
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/dr.yan.marlon/",
      "https://wa.me/5538999280572",
      "https://wa.me/message/CXIPL54ES4SJG1",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=ym1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=ym1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=ym1" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png?v=ym1" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png?v=ym1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=ym1" />
        <link rel="shortcut icon" href="/favicon.ico?v=ym1" />
        <meta name="theme-color" content="#050a14" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-white font-sans text-slate-900 antialiased selection:bg-[#d4af37] selection:text-[#050a14]">
        {children}
      </body>
    </html>
  );
}
