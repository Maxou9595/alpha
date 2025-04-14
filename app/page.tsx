import Hero from "@/components/hero"
import Benefits from "@/components/benefits"
import Testimonials from "@/components/testimonials"
import ContactCTA from "@/components/contact-cta"
import HomeFAQ from "@/components/home-faq"
import InsuranceTypes from "@/components/insurance-types"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Alpha Assurance | Courtier en Assurance Auto, Habitation, Santé et Vie | Devis Gratuit",
  description:
    "Alpha Assurance, votre courtier en assurance de confiance. Comparez et économisez jusqu'à 40% sur vos assurances auto, habitation, santé et vie. Devis gratuit en ligne en quelques minutes.",
  alternates: {
    canonical: "https://alpha-assurance.fr",
  },
  openGraph: {
    title: "Alpha Assurance | Courtier en Assurance Auto, Habitation, Santé et Vie | Devis Gratuit",
    description:
      "Alpha Assurance, votre courtier en assurance de confiance. Comparez et économisez jusqu'à 40% sur vos assurances auto, habitation, santé et vie. Devis gratuit en ligne en quelques minutes.",
  },
}

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-12 md:gap-16 pb-16">
        <Hero />
        <InsuranceTypes />
        <Benefits />
        <Testimonials />
        <HomeFAQ />
        <ContactCTA />
      </div>

      {/* Structured Data for WebSite */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Alpha Assurance",
            url: "https://alpha-assurance.fr",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://alpha-assurance.fr/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* Structured Data for Service */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Courtage en Assurance",
            provider: {
              "@type": "InsuranceAgency",
              name: "Alpha Assurance",
              url: "https://alpha-assurance.fr",
            },
            areaServed: {
              "@type": "Country",
              name: "France",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Services d'assurance",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Assurance Auto",
                    url: "https://alpha-assurance.fr/assurance-auto",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Assurance Habitation",
                    url: "https://alpha-assurance.fr/assurance-habitation",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Assurance Santé",
                    url: "https://alpha-assurance.fr/assurance-sante",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Assurance Vie",
                    url: "https://alpha-assurance.fr/assurance-vie",
                  },
                },
              ],
            },
            description:
              "Alpha Assurance propose des services de courtage en assurance pour vous aider à trouver la meilleure couverture au meilleur prix. Nous comparons les offres des principales compagnies d'assurance pour vous proposer des solutions personnalisées.",
          }),
        }}
      />
    </>
  )
}
