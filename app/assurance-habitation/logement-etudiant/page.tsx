import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Home, Shield, Smartphone } from "lucide-react"
import Link from "next/link"

export default function LogementEtudiantPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90" />
        <div className="relative container py-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Assurance Logement Étudiant</h1>
            <p className="text-xl mb-8">Une protection abordable et complète pour les étudiants</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/devis?type=habitation&logement=etudiant">
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
            <h2 className="text-3xl font-bold mb-6">Pourquoi une assurance spéciale pour les étudiants ?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Notre assurance logement étudiant est spécialement conçue pour répondre aux besoins des étudiants avec un
              budget limité, tout en offrant une protection essentielle.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Tarifs adaptés aux budgets étudiants</h3>
                  <p className="text-muted-foreground">
                    Des formules économiques spécialement conçues pour les petits budgets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Protection des équipements numériques</h3>
                  <p className="text-muted-foreground">
                    Couverture spécifique pour les ordinateurs, tablettes et smartphones, essentiels pour vos études.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Souscription et gestion 100% en ligne</h3>
                  <p className="text-muted-foreground">
                    Processus simplifié et entièrement digital, adapté au mode de vie des étudiants.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="/devis?type=habitation&logement=etudiant">
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
            <h3 className="text-2xl font-bold mb-6">Nos garanties spécifiques pour les logements étudiants</h3>

            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Garantie équipements numériques</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Protection de vos appareils électroniques contre le vol, la casse et les dommages accidentels.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Garantie responsabilité civile</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Protection contre les dommages que vous pourriez causer à autrui dans votre vie quotidienne et lors
                    de vos stages.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Home className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Garantie colocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Couverture adaptée aux logements partagés, avec possibilité d'assurer plusieurs colocataires sur un
                    même contrat.
                  </CardDescription>
                </CardContent>
              </Card>

              <div className="text-center mt-8">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  À partir de 5€<span className="text-lg font-normal">/mois</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Pour un studio étudiant</p>
                <Link href="/devis?type=habitation&logement=etudiant">
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
            <h2 className="text-3xl font-bold mb-4">Protégez votre logement étudiant dès aujourd'hui</h2>
            <p className="text-xl mb-8">
              Obtenez un devis personnalisé en quelques minutes et bénéficiez de nos offres exclusives pour étudiants.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/devis?type=habitation&logement=etudiant">
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
