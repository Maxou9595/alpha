import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Shield, AlertTriangle, Home, Umbrella, Lock } from "lucide-react"
import Link from "next/link"

export default function AssuranceHabitationPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90" />
        <div className="relative container py-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Assurance Habitation</h1>
            <p className="text-xl mb-8">
              Protégez votre logement et vos biens avec une assurance adaptée à vos besoins.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/devis?type=habitation">
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
          <h2 className="text-3xl font-bold mb-4">Nos formules d'assurance habitation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choisissez la formule qui correspond le mieux à votre logement et à vos besoins.
          </p>
        </div>

        <Tabs defaultValue="eco" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="eco">Éco</TabsTrigger>
            <TabsTrigger value="confort">Confort</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
          </TabsList>

          <TabsContent value="eco">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Formule Éco</h3>
                <p className="mb-6 text-muted-foreground">
                  Notre formule économique qui couvre les garanties essentielles pour votre logement.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Responsabilité civile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Incendie, explosion, dégâts des eaux</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Catastrophes naturelles et technologiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Défense pénale et recours</span>
                  </li>
                </ul>
                <div className="flex gap-4">
                  <Link href="/devis?type=habitation">
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
                    <Home className="h-12 w-12 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">À partir de</h4>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    10€<span className="text-lg font-normal">/mois</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Soit 120€ par an</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Idéal pour les petites surfaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Solution économique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                    <span>Garanties limitées pour les biens de valeur</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="confort">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Formule Confort</h3>
                <p className="mb-6 text-muted-foreground">
                  Notre formule équilibrée qui offre une protection étendue avec un bon rapport qualité-prix.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Toutes les garanties de la formule Éco</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Vol et vandalisme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Bris de glace</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Dommages électriques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Assistance 24h/24</span>
                  </li>
                </ul>
                <div className="flex gap-4">
                  <Link href="/devis?type=habitation">
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
                    <Home className="h-12 w-12 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">À partir de</h4>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    18€<span className="text-lg font-normal">/mois</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Soit 216€ par an</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Bon rapport qualité-prix</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Protection contre le vol</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Adapté à la plupart des logements</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="premium">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Formule Premium</h3>
                <p className="mb-6 text-muted-foreground">
                  Notre formule haut de gamme qui offre une protection complète pour votre logement et vos biens.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Toutes les garanties de la formule Confort</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Tous risques mobiliers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Garantie des objets de valeur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Rééquipement à neuf</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Assistance premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Protection juridique</span>
                  </li>
                </ul>
                <div className="flex gap-4">
                  <Link href="/devis?type=habitation">
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
                    <Home className="h-12 w-12 text-blue-600" />
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
                    <span>Protection complète</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Idéal pour les grands logements</span>
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
              Découvrez l'ensemble des garanties que nous proposons pour protéger votre logement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Umbrella className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Responsabilité civile</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Couvre les dommages matériels et corporels que vous pourriez causer à autrui dans le cadre de votre
                  vie privée.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Incendie et dégâts des eaux</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Indemnisation en cas d'incendie, d'explosion ou de dégâts des eaux dans votre logement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Vol et vandalisme</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Protection contre le vol de vos biens et les actes de vandalisme commis à votre domicile.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Bris de glace</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Prise en charge du remplacement des vitres, miroirs, et autres surfaces vitrées en cas de bris
                  accidentel.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Catastrophes naturelles</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Indemnisation des dommages causés par des catastrophes naturelles reconnues par arrêté ministériel.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Services d'urgence 24h/24 en cas de sinistre : plombier, serrurier, électricien, etc.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types de logements Section */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Une assurance adaptée à votre logement</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Que vous soyez propriétaire ou locataire, nous avons une solution pour vous.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle>Appartement</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Une protection adaptée aux spécificités des appartements en immeuble collectif.
              </CardDescription>
              <Link href="/assurance-habitation/appartement">
                <Button className="mt-4 w-full">En savoir plus</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle>Maison</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Une couverture complète pour votre maison individuelle et ses dépendances.
              </CardDescription>
              <Link href="/assurance-habitation/maison">
                <Button className="mt-4 w-full">En savoir plus</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle>Résidence secondaire</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Une assurance spécifique pour les logements occupés occasionnellement.
              </CardDescription>
              <Link href="/assurance-habitation/residence-secondaire">
                <Button className="mt-4 w-full">En savoir plus</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle>Logement étudiant</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Des formules économiques spécialement conçues pour les étudiants.
              </CardDescription>
              <Link href="/assurance-habitation/logement-etudiant">
                <Button className="mt-4 w-full">En savoir plus</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus fréquemment posées sur notre assurance habitation.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <details className="group border rounded-lg [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 font-medium">
                  <h3>Quelle est la différence entre l'assurance habitation et la garantie décennale ?</h3>
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
                    L'assurance habitation couvre les dommages causés à votre logement et à vos biens, ainsi que votre
                    responsabilité civile. La garantie décennale est une assurance obligatoire pour les constructeurs
                    qui couvre les dommages compromettant la solidité de l'ouvrage ou le rendant impropre à sa
                    destination pendant 10 ans après la réception des travaux.
                  </p>
                </div>
              </details>

              <details className="group border rounded-lg [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 font-medium">
                  <h3>L'assurance habitation est-elle obligatoire ?</h3>
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
                    L'assurance habitation est obligatoire pour les locataires (loi Alur de 2014). Pour les
                    propriétaires non-occupants, elle est également obligatoire si le logement est situé dans une
                    copropriété. Pour les propriétaires occupants, elle n'est pas obligatoire mais fortement recommandée
                    pour protéger votre patrimoine.
                  </p>
                </div>
              </details>

              <details className="group border rounded-lg [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 font-medium">
                  <h3>Comment est calculé le montant de ma prime d'assurance habitation ?</h3>
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
                    Le montant de votre prime d'assurance habitation dépend de plusieurs facteurs :
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                    <li>Type de logement (appartement, maison)</li>
                    <li>Surface habitable</li>
                    <li>Localisation géographique</li>
                    <li>Niveau de garanties choisi</li>
                    <li>Valeur des biens à assurer</li>
                    <li>Antécédents de sinistres</li>
                  </ul>
                </div>
              </details>

              <details className="group border rounded-lg [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 font-medium">
                  <h3>Que faire en cas de sinistre ?</h3>
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
                  <p className="text-muted-foreground">En cas de sinistre, vous devez :</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                    <li>Prendre les mesures nécessaires pour limiter les dégâts</li>
                    <li>Déclarer le sinistre à votre assureur dans les 5 jours ouvrés (2 jours pour un vol)</li>
                    <li>Rassembler les preuves et documents nécessaires (photos, factures, etc.)</li>
                    <li>Ne pas effectuer de réparations avant le passage de l'expert, sauf si elles sont urgentes</li>
                    <li>Déposer plainte en cas de vol ou de vandalisme</li>
                  </ul>
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
            <h2 className="text-3xl font-bold mb-4">Protégez votre logement dès aujourd'hui</h2>
            <p className="text-xl mb-8">
              Obtenez un devis personnalisé en quelques minutes et bénéficiez de nos offres exclusives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/devis?type=habitation">
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
