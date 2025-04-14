import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Shield, AlertTriangle, Car, Wrench, HeartHandshake } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Assurance Auto | Comparateur et Devis Gratuit | Alpha Assurance",
  description:
    "Comparez les meilleures offres d'assurance auto et obtenez un devis gratuit en quelques minutes. Économisez jusqu'à 40% sur votre assurance auto avec Alpha Assurance.",
  keywords: [
    "assurance auto",
    "comparateur assurance auto",
    "devis assurance auto",
    "assurance voiture",
    "assurance auto pas chère",
    "meilleure assurance auto",
    "courtier assurance auto",
    "assurance tous risques",
    "assurance au tiers",
    "tarif assurance auto",
  ],
  alternates: {
    canonical: "https://alpha-assurance.fr/assurance-auto",
  },
  openGraph: {
    title: "Assurance Auto | Comparateur et Devis Gratuit | Alpha Assurance",
    description:
      "Comparez les meilleures offres d'assurance auto et obtenez un devis gratuit en quelques minutes. Économisez jusqu'à 40% sur votre assurance auto avec Alpha Assurance.",
    url: "https://alpha-assurance.fr/assurance-auto",
    type: "website",
    images: [
      {
        url: "https://alpha-assurance.fr/images/og-assurance-auto.jpg",
        width: 1200,
        height: 630,
        alt: "Assurance Auto Alpha Assurance",
      },
    ],
  },
}

export default function AssuranceAutoPage() {
  return (
    <>
      <div className="flex flex-col gap-16 pb-16">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90" />
          <div className="relative container py-20">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Assurance Auto</h1>
              <p className="text-xl mb-8">
                Protégez votre véhicule avec une assurance adaptée à vos besoins et à votre budget.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/devis?type=auto">
                  <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100">
                    Obtenir un devis
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white bg-white/10 hover:bg-white/20 hover:border-white"
                >
                  Nos garanties
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Formules Section */}
        <section className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos formules d'assurance auto</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choisissez la formule qui correspond le mieux à vos besoins et à votre budget.
            </p>
          </div>

          <Tabs defaultValue="tiers" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="tiers">Tiers</TabsTrigger>
              <TabsTrigger value="intermediaire">Intermédiaire</TabsTrigger>
              <TabsTrigger value="tous-risques">Tous Risques</TabsTrigger>
            </TabsList>

            <TabsContent value="tiers">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Assurance au Tiers</h3>
                  <p className="mb-6 text-muted-foreground">
                    Notre formule économique qui couvre les dommages que vous pourriez causer à autrui. C'est
                    l'assurance minimum obligatoire.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Responsabilité civile (dommages causés à autrui)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Défense pénale et recours suite à accident</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Assistance en cas d'accident</span>
                    </li>
                  </ul>
                  <div className="flex gap-4">
                    <Link href="/devis?type=auto">
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
                      <Shield className="h-12 w-12 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">À partir de</h4>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      15€<span className="text-lg font-normal">/mois</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Soit 180€ par an</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Idéal pour les véhicules anciens</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Solution économique</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                      <span>Ne couvre pas les dommages sur votre véhicule</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="intermediaire">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Assurance Intermédiaire</h3>
                  <p className="mb-6 text-muted-foreground">
                    Notre formule équilibrée qui offre une protection étendue avec un bon rapport qualité-prix.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Toutes les garanties de la formule Tiers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Vol et incendie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Bris de glace</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Assistance 0km</span>
                    </li>
                  </ul>
                  <div className="flex gap-4">
                    <Link href="/devis?type=auto">
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
                      <Shield className="h-12 w-12 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">À partir de</h4>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      25€<span className="text-lg font-normal">/mois</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Soit 300€ par an</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Bon rapport qualité-prix</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Protection contre le vol et l'incendie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                      <span>Ne couvre pas tous les dommages matériels</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tous-risques">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Assurance Tous Risques</h3>
                  <p className="mb-6 text-muted-foreground">
                    Notre formule premium qui offre une protection complète pour votre véhicule et ses occupants.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Toutes les garanties de la formule Intermédiaire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Dommages tous accidents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Garantie du conducteur étendue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Véhicule de remplacement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Assistance premium</span>
                    </li>
                  </ul>
                  <div className="flex gap-4">
                    <Link href="/devis?type=auto">
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
                      <Shield className="h-12 w-12 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">À partir de</h4>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      40€<span className="text-lg font-normal">/mois</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Soit 480€ par an</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Protection complète</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Idéal pour les véhicules neufs ou récents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Tranquillité d'esprit maximale</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Garanties Section */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nos garanties</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Découvrez l'ensemble des garanties que nous proposons pour protéger votre véhicule.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Car className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Responsabilité civile</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Couvre les dommages matériels et corporels que vous pourriez causer à autrui avec votre véhicule.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Vol et incendie</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Indemnisation en cas de vol de votre véhicule ou de dommages causés par un incendie.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Wrench className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Bris de glace</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Prise en charge du remplacement ou de la réparation des vitres de votre véhicule.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <HeartHandshake className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Garantie conducteur</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Indemnisation du conducteur en cas de blessures suite à un accident, même s'il est responsable.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Car className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Dommages tous accidents</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Couvre les dommages matériels subis par votre véhicule, quelle que soit la cause.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Car className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Assistance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Dépannage, remorquage et solutions de mobilité en cas de panne ou d'accident.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus fréquemment posées sur notre assurance auto.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <details className="group border rounded-lg [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 font-medium">
                  <h3>Quels documents fournir pour souscrire une assurance auto ?</h3>
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
                    Pour souscrire une assurance auto, vous devez généralement fournir :
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                    <li>Carte grise du véhicule</li>
                    <li>Permis de conduire</li>
                    <li>Relevé d'information de votre précédent assureur</li>
                    <li>RIB pour le prélèvement des cotisations</li>
                    <li>Pièce d'identité</li>
                  </ul>
                </div>
              </details>

              <details className="group border rounded-lg [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 font-medium">
                  <h3>Comment fonctionne le bonus-malus ?</h3>
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
                    Le bonus-malus est un coefficient qui évolue en fonction de votre sinistralité :
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                    <li>Sans accident responsable pendant un an, votre coefficient est réduit de 5% (bonus)</li>
                    <li>En cas d'accident responsable, votre coefficient augmente de 25% (malus)</li>
                    <li>Le bonus maximum est de 50% (coefficient 0,50)</li>
                    <li>Le malus peut aller jusqu'à 3,5 fois le tarif de base (coefficient 3,50)</li>
                  </ul>
                </div>
              </details>

              <details className="group border rounded-lg [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 font-medium">
                  <h3>Puis-je assurer un véhicule qui n'est pas à mon nom ?</h3>
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
                    Oui, il est possible d'assurer un véhicule qui n'est pas à votre nom. Dans ce cas, vous serez le
                    souscripteur du contrat et le propriétaire du véhicule sera mentionné sur le contrat. Vous devrez
                    fournir une attestation du propriétaire vous autorisant à assurer le véhicule.
                  </p>
                </div>
              </details>

              <details className="group border rounded-lg [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 font-medium">
                  <h3>Comment déclarer un sinistre ?</h3>
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
                  <p className="text-muted-foreground">Pour déclarer un sinistre, vous pouvez :</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                    <li>Contacter notre service sinistres par téléphone au 01 23 45 67 89</li>
                    <li>Vous connecter à votre espace client et remplir le formulaire de déclaration</li>
                    <li>Envoyer un email à sinistres@alpha-assurance.fr</li>
                  </ul>
                  <p className="mt-2 text-muted-foreground">
                    La déclaration doit être faite dans les 5 jours ouvrés suivant l'événement.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Prêt à protéger votre véhicule ?</h2>
              <p className="text-xl mb-8">
                Obtenez un devis personnalisé en quelques minutes et bénéficiez de nos offres exclusives.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/devis?type=auto">
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

      {/* Structured Data for Car Insurance Service */}
      <Script
        id="car-insurance-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Assurance Auto",
            provider: {
              "@type": "InsuranceAgency",
              name: "Alpha Assurance",
              url: "https://alpha-assurance.fr",
            },
            description:
              "Protégez votre véhicule avec une assurance adaptée à vos besoins et à votre budget. Comparez les meilleures offres d'assurance auto et obtenez un devis gratuit en quelques minutes.",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "EUR",
              lowPrice: "15",
              highPrice: "40",
              offerCount: "3",
              offers: [
                {
                  "@type": "Offer",
                  name: "Assurance au Tiers",
                  description:
                    "Notre formule économique qui couvre les dommages que vous pourriez causer à autrui. C'est l'assurance minimum obligatoire.",
                  price: "15",
                  priceCurrency: "EUR",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "15",
                    priceCurrency: "EUR",
                    unitCode: "MON",
                    billingIncrement: 1,
                    billingDuration: "P1M",
                  },
                },
                {
                  "@type": "Offer",
                  name: "Assurance Intermédiaire",
                  description:
                    "Notre formule équilibrée qui offre une protection étendue avec un bon rapport qualité-prix.",
                  price: "25",
                  priceCurrency: "EUR",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "25",
                    priceCurrency: "EUR",
                    unitCode: "MON",
                    billingIncrement: 1,
                    billingDuration: "P1M",
                  },
                },
                {
                  "@type": "Offer",
                  name: "Assurance Tous Risques",
                  description:
                    "Notre formule premium qui offre une protection complète pour votre véhicule et ses occupants.",
                  price: "40",
                  priceCurrency: "EUR",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "40",
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
              name: "Formules d'assurance auto",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Assurance au Tiers",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Assurance Intermédiaire",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Assurance Tous Risques",
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
                name: "Quels documents fournir pour souscrire une assurance auto ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pour souscrire une assurance auto, vous devez généralement fournir : Carte grise du véhicule, Permis de conduire, Relevé d'information de votre précédent assureur, RIB pour le prélèvement des cotisations, Pièce d'identité.",
                },
              },
              {
                "@type": "Question",
                name: "Comment fonctionne le bonus-malus ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le bonus-malus est un coefficient qui évolue en fonction de votre sinistralité : Sans accident responsable pendant un an, votre coefficient est réduit de 5% (bonus). En cas d'accident responsable, votre coefficient augmente de 25% (malus). Le bonus maximum est de 50% (coefficient 0,50). Le malus peut aller jusqu'à 3,5 fois le tarif de base (coefficient 3,50).",
                },
              },
              {
                "@type": "Question",
                name: "Puis-je assurer un véhicule qui n'est pas à mon nom ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, il est possible d'assurer un véhicule qui n'est pas à votre nom. Dans ce cas, vous serez le souscripteur du contrat et le propriétaire du véhicule sera mentionné sur le contrat. Vous devrez fournir une attestation du propriétaire vous autorisant à assurer le véhicule.",
                },
              },
              {
                "@type": "Question",
                name: "Comment déclarer un sinistre ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pour déclarer un sinistre, vous pouvez : Contacter notre service sinistres par téléphone au 01 23 45 67 89, Vous connecter à votre espace client et remplir le formulaire de déclaration, Envoyer un email à sinistres@alpha-assurance.fr. La déclaration doit être faite dans les 5 jours ouvrés suivant l'événement.",
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
