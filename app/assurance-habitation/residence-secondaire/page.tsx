import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Home, Shield, Lock } from "lucide-react"
import Link from "next/link"

export default function ResidenceSecondairePage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90" />
        <div className="relative container py-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Assurance Résidence Secondaire</h1>
            <p className="text-xl mb-8">
              Une protection adaptée pour votre résidence secondaire, même en votre absence
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/devis?type=habitation&logement=residence-secondaire">
                <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100">
                  Obtenir un devis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Pourquoi une assurance spécifique pour votre résidence secondaire ?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Une résidence secondaire présente des risques particuliers liés à son inoccupation prolongée. Notre
              assurance est spécialement conçue pour répondre à ces besoins spécifiques.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Protection contre les risques d'inoccupation</h3>
                  <p className="text-muted-foreground">
                    Couverture renforcée contre les dégâts des eaux, le gel des canalisations et autres risques liés à
                    l'absence prolongée.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Sécurité renforcée</h3>
                  <p className="text-muted-foreground">
                    Protection accrue contre le vol, l'effraction et le vandalisme pendant les périodes d'inoccupation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Assistance à distance</h3>
                  <p className="text-muted-foreground">
                    Intervention rapide en cas de sinistre, même en votre absence.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="/devis?type=habitation&logement=residence-secondaire">
                <Button size="lg">Obtenir un devis</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Nos garanties spécifiques pour les résidences secondaires</h3>

            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Lock className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Garantie vol renforcée</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Protection spécifique contre le cambriolage avec indemnisation des biens volés et des dommages
                    causés.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Garantie surveillance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Prise en charge des frais de gardiennage après sinistre et des systèmes de télésurveillance.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Home className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Garantie location saisonnière</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Protection spécifique si vous louez votre résidence secondaire à des tiers pendant votre absence.
                  </CardDescription>
                </CardContent>
              </Card>

              <div className="text-center mt-8">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  À partir de 20€<span className="text-lg font-normal">/mois</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Pour une résidence secondaire standard</p>
                <Link href="/devis?type=habitation&logement=residence-secondaire">
                  <Button className="w-full">Obtenir un devis personnalisé</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Protégez votre résidence secondaire dès aujourd'hui</h2>
            <p className="text-xl mb-8">
              Obtenez un devis personnalisé en quelques minutes et bénéficiez de nos offres exclusives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/devis?type=habitation&logement=residence-secondaire">
                <Button
                  size="lg"
                  variant="default"
                  className="bg-white text-alpha-blue hover:bg-gray-100 font-semibold"
                >
                  Obtenir un devis
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white bg-white/10 hover:bg-white/20 hover:border-white font-semibold"
                >
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
