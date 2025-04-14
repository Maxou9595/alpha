import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Home, Shield, Umbrella } from "lucide-react"
import Link from "next/link"

export default function MaisonPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90" />
        <div className="relative container py-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Assurance Maison</h1>
            <p className="text-xl mb-8">Une protection complète pour votre maison, ses dépendances et votre jardin</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/devis?type=habitation&logement=maison">
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
            <h2 className="text-3xl font-bold mb-6">Pourquoi assurer votre maison ?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Votre maison est probablement votre bien le plus précieux. Notre assurance maison vous offre une
              protection complète contre tous les risques.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Protection complète du bâtiment</h3>
                  <p className="text-muted-foreground">
                    Couverture des dommages à la structure de votre maison, y compris le toit, les murs et les
                    fondations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Couverture des dépendances</h3>
                  <p className="text-muted-foreground">
                    Protection de votre garage, abri de jardin, piscine et autres structures annexes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Responsabilité civile étendue</h3>
                  <p className="text-muted-foreground">
                    Couverture des dommages que vous pourriez causer à des tiers sur votre propriété.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="/devis?type=habitation&logement=maison">
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
            <h3 className="text-2xl font-bold mb-6">Nos garanties spécifiques pour les maisons</h3>

            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Home className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Garantie jardin et extérieurs</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Protection de vos aménagements extérieurs, arbres, plantations et mobilier de jardin.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Garantie catastrophes naturelles</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Couverture renforcée contre les inondations, tempêtes, grêle et autres événements climatiques.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Umbrella className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Garantie piscine et spa</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Protection spécifique pour votre piscine, spa et leurs équipements contre les dommages et accidents.
                  </CardDescription>
                </CardContent>
              </Card>

              <div className="text-center mt-8">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  À partir de 15€<span className="text-lg font-normal">/mois</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Pour une maison standard</p>
                <Link href="/devis?type=habitation&logement=maison">
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
            <h2 className="text-3xl font-bold mb-4">Protégez votre maison dès aujourd'hui</h2>
            <p className="text-xl mb-8">
              Obtenez un devis personnalisé en quelques minutes et bénéficiez de nos offres exclusives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/devis?type=habitation&logement=maison">
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
