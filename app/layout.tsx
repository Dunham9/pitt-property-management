import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pittpropertymanagement.co.uk"),

  title: {
    default: "Pitt Property Management | Independent Property Management & Maintenance",
    template: "%s | Pitt Property Management",
  },

  description:
    "Independent property management and trusted maintenance services across West Sussex and the South Coast. Boutique service, practical experience and transparent pricing.",

  keywords: [
    "Property Management Worthing",
    "Property Maintenance Worthing",
    "Property Management West Sussex",
    "Property Maintenance West Sussex",
    "Rent Collection",
    "Landlord Services",
    "Property Inspections",
    "Property Maintenance",
    "Property Manager",
    "Worthing",
    "West Sussex",
  ],

  authors: [{ name: "Pitt Property Management" }],

  openGraph: {
    title: "Pitt Property Management",
    description:
      "Independent property management and trusted maintenance services across West Sussex and the South Coast.",
    url: "https://www.pittpropertymanagement.co.uk",
    siteName: "Pitt Property Management",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pitt Property Management",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pitt Property Management",
    description:
      "Independent property management and trusted maintenance services.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/thefavicon.png",
    apple: "/thefavicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
