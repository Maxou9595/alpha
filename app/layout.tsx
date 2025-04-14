import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactFloat from "@/components/contact-float"
import ScrollToTop from "@/components/scroll-to-top"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Alpha Assurance | Courtier en Assurance Auto, Habitation, Santé et Vie",
    template: "%s | Alpha Assurance",
  },
  description:
    "Alpha Assurance, votre courtier en assurance de confiance. Comparez et économisez sur vos assurances auto, habitation, santé et vie. Devis gratuit en ligne en quelques minutes.",
  keywords: [
    "assurance",
    "courtier assurance",
    "assurance auto",
    "assurance habitation",
    "assurance santé",
    "assurance vie",
    "comparateur assurance",
    "devis assurance",
    "meilleure assurance",
    "assurance pas chère",
    "Alpha Assurance",
    "assureur",
  ],
  authors: [{ name: "Alpha Assurance" }],
  creator: "Alpha Assurance",
  publisher: "Alpha Assurance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://alpha-assurance.fr"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
    },
  },
  openGraph: {
    title: "Alpha Assurance | Courtier en Assurance Auto, Habitation, Santé et Vie",
    description:
      "Alpha Assurance, votre courtier en assurance de confiance. Comparez et économisez sur vos assurances auto, habitation, santé et vie. Devis gratuit en ligne en quelques minutes.",
    url: "https://alpha-assurance.fr",
    siteName: "Alpha Assurance",
    images: [
      {
        url: "https://alpha-assurance.fr/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alpha Assurance - Votre courtier en assurance",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Assurance | Courtier en Assurance Auto, Habitation, Santé et Vie",
    description:
      "Alpha Assurance, votre courtier en assurance de confiance. Comparez et économisez sur vos assurances auto, habitation, santé et vie.",
    images: ["https://alpha-assurance.fr/images/twitter-image.jpg"],
    creator: "@alphaassurance",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  verification: {
    google: "verification_token",
  },
  category: "insurance",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" type="image/png" sizes="180x180" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <ScrollToTop />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ContactFloat />
          </div>
        </ThemeProvider>

        {/* Structured Data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Alpha Assurance",
              url: "https://alpha-assurance.fr",
              logo: "https://alpha-assurance.fr/images/logo.png",
              sameAs: [
                "https://www.facebook.com/alphaassurance",
                "https://www.twitter.com/alphaassurance",
                "https://www.linkedin.com/company/alpha-assurance",
                "https://www.instagram.com/alphaassurance",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+33123456789",
                  contactType: "customer service",
                  areaServed: "FR",
                  availableLanguage: "French",
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "40 rue Maria Visseaux",
                addressLocality: "Carignan",
                postalCode: "08110",
                addressCountry: "FR",
              },
              description:
                "Alpha Assurance, votre courtier en assurance de confiance. Comparez et économisez sur vos assurances auto, habitation, santé et vie.",
            }),
          }}
        />

        {/* Structured Data for Insurance Agency */}
        <Script
          id="insurance-agency-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              name: "Alpha Assurance",
              url: "https://alpha-assurance.fr",
              logo: "https://alpha-assurance.fr/images/logo.png",
              image: "https://alpha-assurance.fr/images/office.jpg",
              telephone: "+33123456789",
              email: "contact@alpha-assurance.fr",
              priceRange: "€€",
              address: {
                "@type": "PostalAddress",
                streetAddress: "40 rue Maria Visseaux",
                addressLocality: "Carignan",
                postalCode: "08110",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "49.6333",
                longitude: "5.1667",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              areaServed: "France",
              serviceType: ["Assurance Auto", "Assurance Habitation", "Assurance Santé", "Assurance Vie"],
              description:
                "Alpha Assurance est un courtier en assurance proposant des solutions personnalisées pour l'assurance auto, habitation, santé et vie. Devis gratuit en ligne.",
            }),
          }}
        />
      </body>
    </html>
  )
}


import './globals.css'