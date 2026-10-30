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
  themeColor: "#050e18",
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nunesemotaadv.com.br"),
  title:
    "Nunes & Mota Advogados Associados | Advocacia em Januária - MG · Trabalhista, Cível e Consumidor",
  description:
    "⚖️ Nunes & Mota Advogados Associados — Há mais de 7 anos prestando advocacia de excelência em Januária - MG e em todo o Brasil. Atuação especializada e resolutiva em Direito Trabalhista, Cível, Consumidor, Família e Previdenciário. Nota máxima 5,0 ★ no Google (25 avaliações). Sede na Av. Cônego Ramiro Leite, 20B - Centro, Januária - MG.",
  keywords: [
    "Nunes & Mota Advogados Associados",
    "Nunes e Mota Advogados",
    "Dra. Misley Nunes",
    "Dr. Mota Advogado",
    "Advogado Januária MG",
    "Advocacia Januária Minas Gerais",
    "Advogado Trabalhista Januária MG",
    "Causas Trabalhistas Januária",
    "Direito Cível Januária MG",
    "Direito do Consumidor Januária MG",
    "Advogado Norte de Minas Gerais",
    "nunesemotaadv",
    "Escritório de Advocacia Januária",
    "Advogado Centro Januária",
    "Acessibilidade Januária MG",
    "Advogado OAB GO Januária",
  ],
  authors: [
    { name: "Dra. Misley Nunes" },
    { name: "Nunes & Mota Advogados Associados" },
  ],
  creator: "Nunes & Mota Advogados Associados",
  publisher: "Nunes & Mota Advogados Associados",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=nm2", sizes: "any" },
      { url: "/favicon-32x32.png?v=nm2", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=nm2", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=nm2", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png?v=nm2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=nm2",
    apple: [{ url: "/apple-icon.png?v=nm2", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://nunesemotaadv.com.br",
    title:
      "Nunes & Mota Advogados Associados | Advocacia em Januária - MG · Trabalhista, Cível e Consumidor",
    description:
      "⚖️ Há mais de 7 anos dedicados à defesa combativa e estratégica dos seus direitos. Nota máxima 5,0 ★ no Google (25 avaliações). Sede na Av. Cônego Ramiro Leite, 20B - Centro, Januária - MG.",
    siteName: "Nunes & Mota Advogados Associados",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 512,
        alt: "Nunes & Mota Advogados Associados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Nunes & Mota Advogados Associados | Advocacia em Januária - MG",
    description:
      "⚖️ Advocacia com rigor técnico, atendimento acolhedor e alta resolutividade. Nota 5,0 ★ no Google (25 avaliações). Sede na Av. Cônego Ramiro Leite, 20B - Centro, Januária - MG.",
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
    name: "Nunes & Mota Advogados Associados",
    alternateName: "Nunes & Mota Advogados | Januária - MG",
    legalName: "Nunes & Mota Advogados Associados",
    telephone: "+55-38-99948-0028",
    email: "contato@nunesemotaadv.com.br",
    url: "https://nunesemotaadv.com.br",
    image: "/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Cônego Ramiro Leite, 20B - Centro",
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
      reviewCount: "25",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      "Januária",
      "Montes Claros",
      "São Francisco",
      "Pedras de Maria da Cruz",
      "Itacarambi",
      "Manga",
      "Norte de Minas Gerais",
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
        closes: "17:30",
      },
    ],
    sameAs: [
      "https://www.instagram.com/nunesemotaadv/",
      "https://wa.me/5538999480028",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=nm2" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=nm2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=nm2" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png?v=nm2" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png?v=nm2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=nm2" />
        <link rel="shortcut icon" href="/favicon.ico?v=nm2" />
        <meta name="theme-color" content="#050e18" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-white font-sans text-slate-900 antialiased selection:bg-[#16365b] selection:text-white">
        {children}
      </body>
    </html>
  );
}
