import Link from "next/link"
import { ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomeFAQ() {
  return (
    <section className="container py-12 md:py-16">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Questions Fréquemment Posées</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Trouvez rapidement des réponses aux questions les plus courantes sur nos produits et services d'assurance.
        </p>
      </div>

      {/* Balisage Schema.org pour FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Comment fonctionne le bonus-malus en assurance auto ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le bonus-malus est un coefficient qui évolue en fonction de votre sinistralité. Sans accident responsable pendant un an, votre coefficient est réduit de 5% (bonus). En cas d'accident responsable, votre coefficient augmente de 25% (malus).",
                },
              },
              {
                "@type": "Question",
                name: "L'assurance habitation est-elle obligatoire ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "L'assurance habitation est obligatoire pour les locataires (loi Alur de 2014). Pour les propriétaires non-occupants, elle est également obligatoire si le logement est situé dans une copropriété.",
                },
              },
              {
                "@type": "Question",
                name: "Qu'est-ce que le 100% santé ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le 100% santé est une réforme qui permet à tous les Français d'accéder à des soins de qualité pris en charge à 100% dans les domaines de l'optique, du dentaire et de l'audiologie.",
                },
              },
            ],
          }),
        }}
      />

      <div className="max-w-3xl mx-auto">
        <div className="space-y-4 mb-8">
          <div className="border rounded-lg overflow-hidden">
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-4 text-lg font-medium">
                <h3>Comment fonctionne le bonus-malus en assurance auto ?</h3>
                <span className="ml-2 flex-shrink-0 transition duration-300 group-open:rotate-180">
                  <ChevronRight className="h-5 w-5" />
                </span>
              </summary>
              <div className="p-4 pt-0 border-t">
                <p className="text-gray-700 mt-4">
                  Le bonus-malus est un coefficient qui évolue en fonction de votre sinistralité. Sans accident
                  responsable pendant un an, votre coefficient est réduit de 5% (bonus). En cas d'accident responsable,
                  votre coefficient augmente de 25% (malus). Le bonus maximum est de 50% (coefficient 0,50) et le malus
                  peut aller jusqu'à 3,5 fois le tarif de base (coefficient 3,50).
                </p>
              </div>
            </details>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-4 text-lg font-medium">
                <h3>L'assurance habitation est-elle obligatoire ?</h3>
                <span className="ml-2 flex-shrink-0 transition duration-300 group-open:rotate-180">
                  <ChevronRight className="h-5 w-5" />
                </span>
              </summary>
              <div className="p-4 pt-0 border-t">
                <p className="text-gray-700 mt-4">
                  L'assurance habitation est obligatoire pour les locataires (loi Alur de 2014). Pour les propriétaires
                  non-occupants, elle est également obligatoire si le logement est situé dans une copropriété. Pour les
                  propriétaires occupants, elle n'est pas obligatoire mais fortement recommandée pour protéger votre
                  patrimoine.
                </p>
              </div>
            </details>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-4 text-lg font-medium">
                <h3>Qu'est-ce que le 100% santé ?</h3>
                <span className="ml-2 flex-shrink-0 transition duration-300 group-open:rotate-180">
                  <ChevronRight className="h-5 w-5" />
                </span>
              </summary>
              <div className="p-4 pt-0 border-t">
                <p className="text-gray-700 mt-4">
                  Le 100% santé est une réforme qui permet à tous les Français d'accéder à des soins de qualité pris en
                  charge à 100% dans les domaines de l'optique, du dentaire et de l'audiologie. Les assureurs
                  complémentaires santé doivent obligatoirement prendre en charge le reste à charge des équipements 100%
                  santé, après remboursement de l'Assurance Maladie.
                </p>
              </div>
            </details>
          </div>
        </div>

        <div className="text-center">
          <Link href="/faq">
            <Button className="bg-alpha-blue hover:bg-alpha-blue-light flex items-center">
              <span>Voir toutes les questions fréquentes</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
