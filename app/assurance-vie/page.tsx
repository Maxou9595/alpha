import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Shield, Coins, Briefcase, Users, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Assurance Vie | Épargne et Prévoyance | Alpha Assurance",
  description:
    "Préparez votre avenir et protégez vos proches avec notre assurance vie. Solutions d'épargne et de prévoyance adaptées à vos objectifs avec des avantages fiscaux attractifs.",
  keywords: [
    "assurance vie",
    "épargne",
    "prévoyance",
    "transmission patrimoine",
    "avantages fiscaux assurance vie",
    "placement assurance vie",
    "préparation retraite",
    "protection famille",
    "succession",
    "investissement",
  ],
  alternates: {
    canonical: "https://alpha-assurance.fr/assurance-vie",
  },
  openGraph: {
    title: "Assurance Vie | Épargne et Prévoyance | Alpha Assurance",
    description:
      "Préparez votre avenir et protégez vos proches avec notre assurance vie. Solutions d'épargne et de prévoyance adaptées à vos objectifs avec des avantages fiscaux attractifs.",
    url: "https://alpha-assurance.fr/assurance-vie",
    type: "website",
    images: [
      {
        url: "https://alpha-assurance.fr/images/og-assurance-vie.jpg",
        width: 1200,
        height: 630,
        alt: "Assurance Vie Alpha Assurance",
      },
    ],
  },
}

export default function AssuranceViePage() {
  return (
    <>
      <div className="flex flex-col gap-16 pb-16">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90" />
          <div className="relative container py-20">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Assurance Vie</h1>
              <p className="text-xl mb-8">
                Préparez votre avenir et protégez vos proches avec des solutions d'épargne et de prévoyance adaptées à
                vos objectifs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/devis?type=vie">
                  <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100">
                    Obtenir un devis
                  </Button>
                </Link>
                <Link href="/assurance-vie/nos-garanties">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white bg-white/10 hover:bg-white/20 hover:border-white"
                  >
                    Nos garanties
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Formules Section */}
        <section className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos formules d'assurance vie</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choisissez la formule qui correspond le mieux à vos objectifs d'épargne et de prévoyance.
            </p>
          </div>

          <Tabs defaultValue="epargne" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="epargne">Épargne</TabsTrigger>
              <TabsTrigger value="retraite">Retraite</TabsTrigger>
              <TabsTrigger value="transmission">Transmission</TabsTrigger>
            </TabsList>

            <TabsContent value="epargne">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Formule Épargne</h3>
                  <p className="mb-6 text-muted-foreground">
                    Notre formule Épargne vous permet de constituer un capital à votre rythme, tout en bénéficiant
                    d'avantages fiscaux attractifs et d'une disponibilité de votre épargne.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Versements libres et programmés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Fonds en euros sécurisé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Large gamme d'unités de compte</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Disponibilité de l'épargne (rachats partiels ou total)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Fiscalité avantageuse après 8 ans</span>
                    </li>
                  </ul>
                  <div className="flex gap-4">
                    <Link href="/devis?type=vie">
                      <Button>Obtenir un devis</Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="border-alpha-blue text-alpha-blue hover:bg-alpha-blue hover:text-white"
                    >
                      En savoir plus
                    </Button>
                  </div>
                </div>
                <div className="bg-blue-50 p-8 rounded-xl">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
                      <Coins className="h-12 w-12 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">À partir de</h4>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      30€<span className="text-lg font-normal">/mois</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Versement programmé minimum</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Idéal pour se constituer une épargne à moyen terme</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Épargne disponible à tout moment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Fiscalité avantageuse</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="retraite">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Formule Retraite</h3>
                  <p className="mb-6 text-muted-foreground">
                    Notre formule Retraite vous permet de préparer sereinement votre retraite en vous constituant un
                    complément de revenus pour maintenir votre niveau de vie.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Versements programmés adaptés à votre budget</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Gestion pilotée selon votre horizon de retraite</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Options de sortie en capital ou en rente viagère</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Avantages fiscaux spécifiques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Protection en cas de décès avant la retraite</span>
                    </li>
                  </ul>
                  <div className="flex gap-4">
                    <Link href="/devis?type=vie">
                      <Button>Obtenir un devis</Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="border-alpha-blue text-alpha-blue hover:bg-alpha-blue hover:text-white"
                    >
                      En savoir plus
                    </Button>
                  </div>
                </div>
                <div className="bg-blue-50 p-8 rounded-xl">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
                      <Clock className="h-12 w-12 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">À partir de</h4>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      50€<span className="text-lg font-normal">/mois</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Versement programmé minimum</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Idéal pour préparer sa retraite</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Complément de revenus garanti</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Optimisation fiscale</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="transmission">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Formule Transmission</h3>
                  <p className="mb-6 text-muted-foreground">
                    Notre formule Transmission vous permet d'optimiser la transmission de votre patrimoine à vos proches
                    dans des conditions fiscales avantageuses.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Désignation libre des bénéficiaires</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Transmission hors succession</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Abattement fiscal de 152 500€ par bénéficiaire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Versement rapide aux bénéficiaires</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Options de démembrement</span>
                    </li>
                  </ul>
                  <div className="flex gap-4">
                    <Link href="/devis?type=vie">
                      <Button>Obtenir un devis</Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="border-alpha-blue text-alpha-blue hover:bg-alpha-blue hover:text-white"
                    >
                      En savoir plus
                    </Button>
                  </div>
                </div>
                <div className="bg-blue-50 p-8 rounded-xl">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
                      <Users className="h-12 w-12 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Versement initial</h4>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      5 000€<span className="text-lg font-normal"> minimum</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Puis versements libres</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Idéal pour la transmission de patrimoine</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Fiscalité successorale avantageuse</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Protection des proches</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Avantages Section */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Les avantages de l'assurance vie</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Découvrez pourquoi l'assurance vie est l'un des placements préférés des Français.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Un rendement attractif avec le fonds en euros sécurisé et un potentiel de performance plus élevé
                    avec les unités de compte.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Fiscalité avantageuse</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Exonération d'impôt sur les plus-values après 8 ans (dans la limite d'un abattement annuel) et
                    transmission avantageuse aux bénéficiaires.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Disponibilité</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Votre épargne reste disponible à tout moment grâce aux possibilités de rachats partiels ou total,
                    sans pénalités.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Transmission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Transmission hors succession avec un abattement fiscal de 152 500€ par bénéficiaire pour les
                    versements effectués avant 70 ans.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Fonctionnement Section */}
        <section className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comment fonctionne l'assurance vie ?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprendre les mécanismes de l'assurance vie pour faire les meilleurs choix.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Les supports d'investissement</h3>
              <p className="text-muted-foreground mb-6">
                L'assurance vie vous permet d'investir sur deux types de supports :
              </p>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-2">Le fonds en euros</h4>
                  <p className="text-muted-foreground">
                    Un support sécurisé qui garantit votre capital et offre un rendement régulier. Les gains acquis sont
                    définitivement acquis grâce à l'effet cliquet.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-2">Les unités de compte</h4>
                  <p className="text-muted-foreground">
                    Des supports d'investissement plus dynamiques (actions, obligations, immobilier...) qui offrent un
                    potentiel de performance plus élevé mais comportent un risque de perte en capital.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">La fiscalité de l'assurance vie</h3>
              <p className="text-muted-foreground mb-6">
                La fiscalité de l'assurance vie dépend de la durée de détention du contrat :
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Avant 4 ans</h4>
                    <p className="text-sm text-muted-foreground">
                      Les gains sont soumis au PFU (Prélèvement Forfaitaire Unique) de 30% ou au barème progressif de
                      l'impôt sur le revenu.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Entre 4 et 8 ans</h4>
                    <p className="text-sm text-muted-foreground">
                      Les gains sont soumis au PFU de 24.7% ou au barème progressif de l'impôt sur le revenu.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Après 8 ans</h4>
                    <p className="text-sm text-muted-foreground">
                      Les gains bénéficient d'un abattement annuel de 4 600€ pour une personne seule et 9 200€ pour un
                      couple. Au-delà, ils sont soumis au PFU de 24.7% ou au barème progressif de l'impôt sur le revenu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Retrouvez les réponses aux questions les plus fréquemment posées sur notre assurance vie.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                <details className="group border rounded-lg [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 font-medium">
                    <h3>Quels sont les avantages fiscaux de l'assurance vie ?</h3>
                    <span className="relative h-5 w-5 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="p-4 pt-0 border-t">
                    <p className="text-muted-foreground">L'assurance vie offre plusieurs avantages fiscaux :</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                      <li>
                        Exonération d'impôt sur les plus-values après 8 ans (dans la limite d'un abattement annuel de 4
                        600€ pour une personne seule et 9 200€ pour un couple)
                      </li>
                      <li>
                        Transmission avantageuse aux bénéficiaires en cas de décès (exonération jusqu'à 152 500€ par
                        bénéficiaire pour les versements effectués avant 70 ans)
                      </li>
                      <li>Absence de droits de succession dans la plupart des cas</li>
                      <li>Pas d'impôt sur la fortune immobilière (IFI)</li>
                    </ul>
                  </div>
                </details>

                <details className="group border rounded-lg [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 font-medium">
                    <h3>Comment choisir les bénéficiaires de mon assurance vie ?</h3>
                    <span className="relative h-5 w-5 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="p-4 pt-0 border-t">
                    <p className="text-muted-foreground">
                      Vous êtes libre de désigner qui vous voulez comme bénéficiaire de votre assurance vie. Vous pouvez
                      désigner :
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                      <li>Votre conjoint ou partenaire de PACS</li>
                      <li>Vos enfants (avec possibilité de préciser "vivants ou à naître")</li>
                      <li>D'autres membres de votre famille</li>
                      <li>Des amis</li>
                      <li>Des associations</li>
                    </ul>
                    <p className="mt-2 text-muted-foreground">
                      La clause bénéficiaire peut être modifiée à tout moment, sauf en cas d'acceptation du
                      bénéficiaire. Il est important de la rédiger avec précision et de la tenir à jour en fonction de
                      l'évolution de votre situation familiale.
                    </p>
                  </div>
                </details>

                <details className="group border rounded-lg [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 font-medium">
                    <h3>Puis-je récupérer mon argent avant 8 ans ?</h3>
                    <span className="relative h-5 w-5 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="p-4 pt-0 border-t">
                    <p className="text-muted-foreground">
                      Oui, vous pouvez récupérer votre argent à tout moment grâce aux rachats partiels ou au rachat
                      total :
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                      <li>
                        <strong>Rachat partiel</strong> : vous retirez une partie de votre épargne tout en conservant
                        votre contrat
                      </li>
                      <li>
                        <strong>Rachat total</strong> : vous récupérez l'intégralité de votre épargne et mettez fin à
                        votre contrat
                      </li>
                    </ul>
                    <p className="mt-2 text-muted-foreground">
                      Cependant, si vous effectuez un rachat avant 8 ans, les gains seront soumis à une fiscalité moins
                      avantageuse. Avant 4 ans, les gains sont imposés à 30% (PFU) et entre 4 et 8 ans, à 24,7% (PFU).
                    </p>
                  </div>
                </details>

                <details className="group border rounded-lg [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 font-medium">
                    <h3>Quelle est la différence entre le fonds en euros et les unités de compte ?</h3>
                    <span className="relative h-5 w-5 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="p-4 pt-0 border-t">
                    <p className="text-muted-foreground">
                      Les principales différences entre le fonds en euros et les unités de compte sont :
                    </p>
                    <div className="overflow-x-auto mt-2">
                      <table className="min-w-full border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="px-4 py-2 border">Caractéristiques</th>
                            <th className="px-4 py-2 border">Fonds en euros</th>
                            <th className="px-4 py-2 border">Unités de compte</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-4 py-2 border font-medium">Garantie du capital</td>
                            <td className="px-4 py-2 border">Oui</td>
                            <td className="px-4 py-2 border">Non</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="px-4 py-2 border font-medium">Potentiel de rendement</td>
                            <td className="px-4 py-2 border">Modéré</td>
                            <td className="px-4 py-2 border">Élevé</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 border font-medium">Risque</td>
                            <td className="px-4 py-2 border">Faible</td>
                            <td className="px-4 py-2 border">Variable selon les supports</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="px-4 py-2 border font-medium">Types d'investissements</td>
                            <td className="px-4 py-2 border">Principalement obligations d'État</td>
                            <td className="px-4 py-2 border">Actions, obligations, immobilier, etc.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-2 text-muted-foreground">
                      Une stratégie d'investissement équilibrée combine souvent les deux types de supports selon votre
                      profil de risque et vos objectifs.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Préparez votre avenir dès aujourd'hui</h2>
              <p className="text-xl mb-8">
                Obtenez un devis personnalisé en quelques minutes et bénéficiez de nos offres exclusives.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/devis?type=vie">
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

      {/* Structured Data for Life Insurance Service */}
      <Script
        id="life-insurance-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Assurance Vie",
            provider: {
              "@type": "InsuranceAgency",
              name: "Alpha Assurance",
              url: "https://alpha-assurance.fr",
            },
            description:
              "Préparez votre avenir et protégez vos proches avec notre assurance vie. Solutions d'épargne et de prévoyance adaptées à vos objectifs avec des avantages fiscaux attractifs.",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "EUR",
              lowPrice: "30",
              highPrice: "5000",
              offerCount: "3",
              offers: [
                {
                  "@type": "Offer",
                  name: "Formule Épargne",
                  description:
                    "Notre formule Épargne vous permet de constituer un capital à votre rythme, tout en bénéficiant d'avantages fiscaux attractifs et d'une disponibilité de votre épargne.",
                  price: "30",
                  priceCurrency: "EUR",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "30",
                    priceCurrency: "EUR",
                    unitCode: "MON",
                    billingIncrement: 1,
                    billingDuration: "P1M",
                  },
                },
                {
                  "@type": "Offer",
                  name: "Formule Retraite",
                  description:
                    "Notre formule Retraite vous permet de préparer sereinement votre retraite en vous constituant un complément de revenus pour maintenir votre niveau de vie.",
                  price: "50",
                  priceCurrency: "EUR",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "50",
                    priceCurrency: "EUR",
                    unitCode: "MON",
                    billingIncrement: 1,
                    billingDuration: "P1M",
                  },
                },
                {
                  "@type": "Offer",
                  name: "Formule Transmission",
                  description:
                    "Notre formule Transmission vous permet d'optimiser la transmission de votre patrimoine à vos proches dans des conditions fiscales avantageuses.",
                  price: "5000",
                  priceCurrency: "EUR",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "5000",
                    priceCurrency: "EUR",
                    unitCode: "MON",
                    billingIncrement: 1,
                    billingDuration: "P1M",
                  },
                },
              ],
            },
            areaServed: {
              "@type": "Country",
              name: "France",
            },
            termsOfService: "https://alpha-assurance.fr/conditions-generales",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Formules d'assurance vie",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Formule Épargne",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Formule Retraite",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Formule Transmission",
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Quels sont les avantages fiscaux de l'assurance vie ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "L'assurance vie offre plusieurs avantages fiscaux : exonération d'impôt sur les plus-values après 8 ans (dans la limite d'un abattement annuel), transmission avantageuse aux bénéficiaires en cas de décès (exonération jusqu'à 152 500€ par bénéficiaire pour les versements effectués avant 70 ans), absence de droits de succession dans la plupart des cas, et pas d'impôt sur la fortune immobilière (IFI).",
                },
              },
              {
                "@type": "Question",
                name: "Comment choisir les bénéficiaires de mon assurance vie ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vous êtes libre de désigner qui vous voulez comme bénéficiaire de votre assurance vie : votre conjoint ou partenaire de PACS, vos enfants, d'autres membres de votre famille, des amis, des associations. La clause bénéficiaire peut être modifiée à tout moment, sauf en cas d'acceptation du bénéficiaire. Il est important de la rédiger avec précision et de la tenir à jour en fonction de l'évolution de votre situation familiale.",
                },
              },
              {
                "@type": "Question",
                name: "Puis-je récupérer mon argent avant 8 ans ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, vous pouvez récupérer votre argent à tout moment grâce aux rachats partiels ou au rachat total. Le rachat partiel vous permet de retirer une partie de votre épargne tout en conservant votre contrat, tandis que le rachat total vous permet de récupérer l'intégralité de votre épargne et met fin à votre contrat. Cependant, si vous effectuez un rachat avant 8 ans, les gains seront soumis à une fiscalité moins avantageuse.",
                },
              },
              {
                "@type": "Question",
                name: "Quelle est la différence entre le fonds en euros et les unités de compte ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le fonds en euros offre une garantie du capital avec un rendement modéré et un risque faible, principalement investi en obligations d'État. Les unités de compte n'offrent pas de garantie du capital mais présentent un potentiel de rendement plus élevé avec un risque variable selon les supports (actions, obligations, immobilier, etc.). Une stratégie d'investissement équilibrée combine souvent les deux types de supports selon votre profil de risque et vos objectifs.",
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
