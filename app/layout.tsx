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
  themeColor: "#040812",
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bento.me/romulomarini"),
  title:
    "Rômulo Marini Advocacia | Advogado em Cláudio - MG · Inventários, Divórcio, Pensão, Trânsito",
  description:
    "⚖️ Rômulo Marini Advocacia — Escritório de advocacia em Cláudio - MG. Atuação especializada em Inventários, Divórcio, Pensão Alimentícia, Direito de Família, Direito de Trânsito e Defesa de CNH. Nota máxima 5,0 ★ no Google (26 avaliações). Sede na Av. Pres. Tancredo Neves, 409 - Centro, Cláudio - MG.",
  keywords: [
    "Rômulo Marini Advocacia",
    "Dr. Rômulo Marini",
    "Advogado Cláudio MG",
    "Advocacia Cláudio Minas Gerais",
    "Inventário Cláudio MG",
    "Divórcio Cláudio MG",
    "Pensão Alimentícia Cláudio MG",
    "Advogado de Família Cláudio MG",
    "Direito de Trânsito Cláudio MG",
    "Recurso de Multa Cláudio MG",
    "Suspensão CNH Cláudio MG",
    "Cassação CNH Cláudio MG",
    "romulo.marini",
    "Advogado Centro Cláudio",
    "Inventário Extrajudicial Cláudio",
    "Partilha de Bens Cláudio MG",
    "Advogado Minas Gerais",
  ],
  authors: [{ name: "Dr. Rômulo Marini" }],
  creator: "Rômulo Marini Advocacia",
  publisher: "Rômulo Marini Advocacia",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=rm1", sizes: "any" },
      { url: "/favicon-32x32.png?v=rm1", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=rm1", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=rm1", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png?v=rm1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=rm1",
    apple: [{ url: "/apple-icon.png?v=rm1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://bento.me/romulomarini",
    title:
      "Rômulo Marini Advocacia | Advogado em Cláudio - MG · Inventários, Divórcio, Pensão, Trânsito",
    description:
      "⚖️ Advocacia de excelência, ética inegociável e defesa estratégica em Inventários, Divórcio, Pensão e Trânsito. Nota 5,0 ★ no Google (26 avaliações). Sede na Av. Pres. Tancredo Neves, 409 - Centro, Cláudio - MG.",
    siteName: "Rômulo Marini Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 512,
        alt: "Rômulo Marini Advocacia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rômulo Marini Advocacia | Advogado em Cláudio - MG · Inventários, Divórcio, Pensão, Trânsito",
    description:
      "⚖️ Advocacia com rigor técnico, atendimento aconchegante e resolutivo. Nota 5,0 ★ no Google (26 avaliações). Sede na Av. Pres. Tancredo Neves, 409 - Centro, Cláudio - MG.",
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
    name: "Rômulo Marini Advocacia",
    alternateName: "Dr. Rômulo Marini | Advogado em Cláudio - MG",
    legalName: "Rômulo Marini Advocacia",
    telephone: "+55-37-98414-2250",
    email: "romulomarini1@hotmail.com",
    url: "https://bento.me/romulomarini",
    image: "/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Pres. Tancredo Neves, 409 - Centro",
      addressLocality: "Cláudio",
      addressRegion: "MG",
      postalCode: "35530-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-20.4439",
      longitude: "-44.7674",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "26",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      "Cláudio",
      "Divinópolis",
      "Carmo do Cajuru",
      "Itapecerica",
      "Oliveira",
      "Carmópolis de Minas",
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
      "https://www.instagram.com/romulo.marini/",
      "https://bento.me/romulomarini",
      "https://wa.me/5537984142250",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=rm1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=rm1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=rm1" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png?v=rm1" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png?v=rm1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=rm1" />
        <link rel="shortcut icon" href="/favicon.ico?v=rm1" />
        <meta name="theme-color" content="#040812" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-white font-sans text-slate-900 antialiased selection:bg-[#d4af37] selection:text-[#040812]">
        {children}
      </body>
    </html>
  );
}
