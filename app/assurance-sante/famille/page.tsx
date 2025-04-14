import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Stethoscope, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AssuranceSanteFamillePage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90" />
        <div className="relative container py-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Assurance Santé Famille</h1>
            <p className="text-xl mb-8">
              Une protection complète pour toute votre famille, adaptée à chaque âge et à chaque besoin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/devis?type=sante&formule=famille">
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
            <h2 className="text-3xl font-bold mb-6 text-alpha-blue">Une assurance pour toute la famille</h2>
            <p className="text-muted-foreground mb-6">
              Notre assurance santé famille vous offre une protection complète pour tous les membres de votre famille,
              des plus petits aux plus grands. Avec des garanties adaptées à chaque âge et des tarifs dégressifs selon
              le nombre d'enfants, vous bénéficiez d'une couverture optimale pour un budget maîtrisé.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Tarification familiale avantageuse</h3>
                  <p className="text-muted-foreground">
                    Bénéficiez de tarifs dégressifs à partir du 2ème enfant et la gratuité à partir du 3ème enfant.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Garanties adaptées à chaque âge</h3>
                  <p className="text-muted-foreground">
                    Des couvertures spécifiques pour les enfants (orthodontie, optique) et pour les adultes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Services d'assistance famille</h3>
                  <p className="text-muted-foreground">
                    Garde d'enfants en cas d'hospitalisation, aide aux devoirs, soutien psychologique, etc.
                  </p>
                </div>
              </div>
            </div>
            <Link href="/devis?type=sante&formule=famille">
              <Button size="lg" className="bg-alpha-blue hover:bg-alpha-blue/90">
                Demander un devis personnalisé
              </Button>
            </Link>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Assurance santé famille"
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
            <h2 className="text-3xl font-bold mb-4">Les avantages de notre assurance famille</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez pourquoi notre assurance santé famille est la solution idéale pour protéger tous vos proches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Protection complète</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Une couverture santé adaptée à chaque membre de la famille, avec des garanties spécifiques selon
                  l'âge.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Services de prévention famille</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Accédez à des services de prévention pour toute la famille : bilans de santé, vaccinations,
                  dépistages.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Stethoscope className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Assistance familiale</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Bénéficiez de services d'assistance dédiés aux familles : garde d'enfants, aide aux devoirs, soutien
                  psychologique.
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
            Des formules adaptées à tous les budgets pour une protection optimale de toute votre famille.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="border-2 border-gray-200">
            <CardHeader className="text-center pb-2">
              <CardTitle>Formule Essentielle</CardTitle>
              <div className="text-3xl font-bold text-alpha-blue mt-4">
                50€<span className="text-lg font-normal">/mois</span>
              </div>
              <p className="text-sm text-muted-foreground">Pour une famille de 4 personnes</p>
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
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Orthodontie enfants (100% BR)</span>
                </li>
              </ul>
              <Link href="/devis?type=sante&formule=famille&niveau=essentielle">
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
                80€<span className="text-lg font-normal">/mois</span>
              </div>
              <p className="text-sm text-muted-foreground">Pour une famille de 4 personnes</p>
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
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Orthodontie enfants (200% BR)</span>
                </li>
              </ul>
              <Link href="/devis?type=sante&formule=famille&niveau=equilibre">
                <Button className="w-full bg-alpha-blue hover:bg-alpha-blue/90">Obtenir un devis</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200">
            <CardHeader className="text-center pb-2">
              <CardTitle>Formule Premium</CardTitle>
              <div className="text-3xl font-bold text-alpha-blue mt-4">
                120€<span className="text-lg font-normal">/mois</span>
              </div>
              <p className="text-sm text-muted-foreground">Pour une famille de 4 personnes</p>
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
                  <span>Orthodontie enfants (300% BR)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Médecines douces (300€/an/personne)</span>
                </li>
              </ul>
              <Link href="/devis?type=sante&formule=famille&niveau=premium">
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
            <h2 className="text-3xl font-bold mb-4">Protégez votre famille dès aujourd'hui</h2>
            <p className="text-xl mb-8">
              Obtenez un devis personnalisé en quelques minutes et bénéficiez de nos offres exclusives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/devis?type=sante&formule=famille">
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
