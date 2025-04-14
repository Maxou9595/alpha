import { Shield, Home, Car, Heart, Briefcase } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const insuranceTypes = [
  {
    title: "Assurance Auto",
    description: "Protection complète pour votre véhicule avec des garanties adaptées à vos besoins.",
    icon: Car,
    href: "/assurance-auto",
  },
  {
    title: "Assurance Habitation",
    description: "Protégez votre logement et vos biens contre les dommages et le vol.",
    icon: Home,
    href: "/assurance-habitation",
  },
  {
    title: "Assurance Santé",
    description: "Des solutions pour prendre soin de votre santé et celle de votre famille.",
    icon: Heart,
    href: "/assurance-sante",
  },
  {
    title: "Assurance Vie",
    description: "Sécurisez l'avenir financier de vos proches et préparez votre retraite.",
    icon: Shield,
    href: "/assurance-vie",
  },
  {
    title: "Assurance Professionnelle",
    description: "Des solutions adaptées aux besoins spécifiques de votre entreprise.",
    icon: Briefcase,
    href: "/assurance-professionnelle",
  },
]

export default function InsuranceTypes() {
  return (
    <section id="insurance-types-section" className="container py-8 md:py-12">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Nos Solutions d'Assurance</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto px-4 md:px-0">
          Découvrez notre gamme complète de produits d'assurance conçus pour répondre à tous vos besoins de protection.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {insuranceTypes.map((type, index) =>
          type.title === "Assurance Professionnelle" ? (
            // Carte non cliquable pour Assurance Professionnelle
            <div key={index} className="group">
              <Card className="h-full transition-all duration-200 opacity-80 cursor-not-allowed">
                <CardHeader className="pb-2">
                  <div className="bg-alpha-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <type.icon className="h-6 w-6 text-alpha-blue" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm md:text-base">{type.description}</CardDescription>
                  <p className="text-xs text-muted-foreground mt-2">* Sur rendez-vous</p>
                </CardContent>
              </Card>
            </div>
          ) : (
            // Cartes cliquables pour les autres types d'assurance
            <Link href={type.href} key={index} className="group">
              <Card className="h-full transition-all duration-200 group-hover:shadow-md group-hover:border-alpha-blue/30">
                <CardHeader className="pb-2">
                  <div className="bg-alpha-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <type.icon className="h-6 w-6 text-alpha-blue" />
                  </div>
                  <CardTitle className="group-hover:text-alpha-blue transition-colors text-xl md:text-2xl">
                    {type.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm md:text-base">{type.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ),
        )}
      </div>
    </section>
  )
}
