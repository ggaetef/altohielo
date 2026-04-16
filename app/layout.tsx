import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://altohielo.cl"),
  title: {
    default: "Alto Hielo — Frío de altura",
    template: "%s · Alto Hielo",
  },
  description:
    "Hielo premium en Linares. Cubos de 40 g que duran más y no aguan tu trago. Hielo frappé para coctelería. Para bares, restaurantes, banqueteras y hogar.",
  keywords: [
    "hielo premium",
    "hielo Linares",
    "hielo cubos",
    "hielo frappé",
    "hielo bar",
    "hielo restaurante",
    "Alto Hielo",
  ],
  openGraph: {
    title: "Alto Hielo — Frío de altura",
    description:
      "Hielo premium en Linares. Cubos de 40 g que duran más y no aguan tu trago.",
    url: "https://altohielo.cl",
    siteName: "Alto Hielo",
    images: [{ url: "/img/frio-altura.png", width: 1200, height: 630 }],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alto Hielo — Frío de altura",
    description: "Hielo premium en Linares.",
    images: ["/img/frio-altura.png"],
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CL" className={`${inter.variable} ${display.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
