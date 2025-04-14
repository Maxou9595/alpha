import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Stethoscope, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AssuranceSanteCouplePage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90" />
        <div className="relative container py-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Assurance Santé Couple</h1>
            <p className="text-xl mb-8">Une protection complète pour vous et votre conjoint(e) à tarif avantageux.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/devis?type=sante&formule=couple">
                <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100">
                  Obtenir un devis
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white bg-white/10 hover:bg-white/20 hover:border-white"
                >
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-alpha-blue">Une assurance pour votre couple</h2>
            <p className="text-muted-foreground mb-6">
              Notre assurance santé couple vous offre une protection complète pour vous et votre conjoint(e), avec des
              tarifs préférentiels par rapport à deux contrats individuels. Profitez d'une couverture adaptée à vos
              besoins communs et bénéficiez d'avantages exclusifs.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Économies garanties</h3>
                  <p className="text-muted-foreground">
                    Bénéficiez d'une réduction allant jusqu'à 15% par rapport à deux contrats individuels.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Gestion simplifiée</h3>
                  <p className="text-muted-foreground">
                    Un seul contrat pour deux personnes, une seule cotisation et un suivi facilité.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Garanties adaptées</h3>
                  <p className="text-muted-foreground">
                    Des formules spécialement conçues pour répondre aux besoins des couples.
                  </p>
                </div>
              </div>
            </div>
            <Link href="/devis?type=sante&formule=couple">
              <Button size="lg" className="bg-alpha-blue hover:bg-alpha-blue/90">
                Demander un devis personnalisé
              </Button>
            </Link>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Assurance santé couple"
              width={600}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Les avantages de notre assurance couple</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez pourquoi notre assurance santé couple est la solution idéale pour votre protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Tarification avantageuse</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Profitez de tarifs préférentiels par rapport à deux contrats individuels, pour une économie
                  significative.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Services de prévention couple</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Accédez à des services de prévention spécifiques pour les couples, comme des bilans de santé
                  coordonnés.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Stethoscope className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Assistance dédiée</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Bénéficiez d'une assistance dédiée pour vous accompagner dans toutes vos démarches de santé.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tarifs Section */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nos tarifs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Des formules adaptées à tous les budgets pour une protection optimale de votre couple.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="border-2 border-gray-200">
            <CardHeader className="text-center pb-2">
              <CardTitle>Formule Essentielle</CardTitle>
              <div className="text-3xl font-bold text-alpha-blue mt-4">
                35€<span className="text-lg font-normal">/mois</span>
              </div>
              <p className="text-sm text-muted-foreground">Pour le couple</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Consultations (100% BR)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Hospitalisation (100% BR)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Pharmacie (100% BR)</span>
                </li>
              </ul>
              <Link href="/devis?type=sante&formule=couple&niveau=essentielle">
                <Button className="w-full">Obtenir un devis</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 border-alpha-blue shadow-lg relative">
            <div className="absolute top-0 right-0 bg-alpha-blue text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
              Recommandé
            </div>
            <CardHeader className="text-center pb-2">
              <CardTitle>Formule Équilibre</CardTitle>
              <div className="text-3xl font-bold text-alpha-blue mt-4">
                60€<span className="text-lg font-normal">/mois</span>
              </div>
              <p className="text-sm text-muted-foreground">Pour le couple</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Consultations (150% BR)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Hospitalisation (150% BR)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Pharmacie (100% BR)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Optique et dentaire (150% BR)</span>
                </li>
              </ul>
              <Link href="/devis?type=sante&formule=couple&niveau=equilibre">
                <Button className="w-full bg-alpha-blue hover:bg-alpha-blue/90">Obtenir un devis</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200">
            <CardHeader className="text-center pb-2">
              <CardTitle>Formule Premium</CardTitle>
              <div className="text-3xl font-bold text-alpha-blue mt-4">
                100€<span className="text-lg font-normal">/mois</span>
              </div>
              <p className="text-sm text-muted-foreground">Pour le couple</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Consultations (300% BR)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Hospitalisation (300% BR)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Pharmacie (100% BR)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Optique et dentaire (300% BR)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Médecines douces (300€/an/personne)</span>
                </li>
              </ul>
              <Link href="/devis?type=sante&formule=couple&niveau=premium">
                <Button className="w-full">Obtenir un devis</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-alpha-gradient py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Protégez votre couple dès aujourd'hui</h2>
            <p className="text-xl mb-8">
              Obtenez un devis personnalisé en quelques minutes et bénéficiez de nos offres exclusives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/devis?type=sante&formule=couple">
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
