import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Shield, AlertTriangle, Heart, Stethoscope, Users } from "lucide-react"
import Link from "next/link"

export default function AssuranceSantePage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90" />
        <div className="relative container py-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Assurance Santé</h1>
            <p className="text-xl mb-8">Des solutions pour prendre soin de votre santé et celle de votre famille.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/devis?type=sante">
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
          <h2 className="text-3xl font-bold mb-4">Nos formules d'assurance santé</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choisissez la formule qui correspond le mieux à vos besoins et à votre budget.
          </p>
        </div>

        <Tabs defaultValue="essentielle" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="essentielle">Essentielle</TabsTrigger>
            <TabsTrigger value="equilibre">Équilibre</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
          </TabsList>

          <TabsContent value="essentielle">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Formule Essentielle</h3>
                <p className="mb-6 text-muted-foreground">
                  Notre formule économique qui couvre les soins de base pour un budget maîtrisé.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Consultations généralistes et spécialistes (100% BR*)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Pharmacie (100% BR*)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Hospitalisation (100% BR*)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Analyses et examens de laboratoire (100% BR*)</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mb-6">
                  * BR : Base de Remboursement de la Sécurité Sociale
                </p>
                <div className="flex gap-4">
                  <Link href="/devis?type=sante">
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
                    <Heart className="h-12 w-12 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">À partir de</h4>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    20€<span className="text-lg font-normal">/mois</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Par personne</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Idéal pour les petits budgets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Couverture des soins essentiels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                    <span>Remboursements limités pour l'optique et le dentaire</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="equilibre">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Formule Équilibre</h3>
                <p className="mb-6 text-muted-foreground">
                  Notre formule intermédiaire qui offre un bon équilibre entre couverture et prix.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Consultations généralistes et spécialistes (150% BR*)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Pharmacie (100% BR*)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Hospitalisation (150% BR*)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Analyses et examens de laboratoire (125% BR*)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Optique et dentaire (150% BR*)</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mb-6">
                  * BR : Base de Remboursement de la Sécurité Sociale
                </p>
                <div className="flex gap-4">
                  <Link href="/devis?type=sante">
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
                    <Heart className="h-12 w-12 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">À partir de</h4>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    35€<span className="text-lg font-normal">/mois</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Par personne</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Bon rapport qualité-prix</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Couverture étendue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Adapté à la plupart des besoins</span>
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
                  Notre formule haut de gamme qui offre une protection complète pour votre santé.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Consultations généralistes et spécialistes (300% BR*)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Pharmacie (100% BR*)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Hospitalisation (300% BR*)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Analyses et examens de laboratoire (200% BR*)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Optique et dentaire (300% BR*)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Médecines douces (forfait 300€/an)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Chambre particulière (100€/jour)</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mb-6">
                  * BR : Base de Remboursement de la Sécurité Sociale
                </p>
                <div className="flex gap-4">
                  <Link href="/devis?type=sante&niveau=premium">
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
                    <Heart className="h-12 w-12 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">À partir de</h4>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    60€<span className="text-lg font-normal">/mois</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Par personne</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Protection complète</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Remboursements optimaux</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Services exclusifs</span>
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
              Découvrez l'ensemble des garanties que nous proposons pour protéger votre santé.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Stethoscope className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Soins courants</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Consultations généralistes et spécialistes, analyses, radiologies, actes techniques médicaux.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Hospitalisation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Frais de séjour, honoraires, forfait journalier, chambre particulière, transport.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Pharmacie</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Médicaments remboursés par la Sécurité Sociale à différents taux.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Optique</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Montures, verres, lentilles, chirurgie réfractive.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Dentaire</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">Soins, prothèses, orthodontie, implantologie.</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Médecines douces</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Ostéopathie, acupuncture, chiropractie, psychologie, diététique.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types de contrats Section */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Une assurance adaptée à votre situation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Que vous soyez seul, en couple ou en famille, nous avons une solution pour vous.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle>Individuelle</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Une protection adaptée à vos besoins personnels, avec des garanties sur mesure.
              </CardDescription>
              <Link href="/assurance-sante/individuelle">
                <Button className="mt-4 w-full">En savoir plus</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle>Couple</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Une formule avantageuse pour vous et votre conjoint(e), avec des tarifs préférentiels.
              </CardDescription>
              <Link href="/assurance-sante/couple">
                <Button className="mt-4 w-full">En savoir plus</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle>Famille</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Une protection complète pour toute la famille, avec des garanties adaptées à chaque âge.
              </CardDescription>
              <Link href="/assurance-sante/famille">
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
              Retrouvez les réponses aux questions les plus fréquemment posées sur notre assurance santé.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <details className="group border rounded-lg [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 font-medium">
                  <h3>Qu'est-ce que le 100% santé ?</h3>
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
                    Le 100% santé est une réforme qui permet à tous les Français d'accéder à des soins de qualité pris
                    en charge à 100% dans les domaines de l'optique, du dentaire et de l'audiologie. Les assureurs
                    complémentaires santé doivent obligatoirement prendre en charge le reste à charge des équipements
                    100% santé, après remboursement de l'Assurance Maladie.
                  </p>
                </div>
              </details>

              <details className="group border rounded-lg [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 font-medium">
                  <h3>Qu'est-ce que le délai de carence ?</h3>
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
                    Le délai de carence est une période pendant laquelle vous cotisez à votre assurance santé mais ne
                    pouvez pas encore bénéficier de certaines garanties. Ce délai peut varier selon les contrats et les
                    garanties. Chez Alpha Assurance, nous proposons des contrats sans délai de carence pour la plupart
                    des garanties.
                  </p>
                </div>
              </details>

              <details className="group border rounded-lg [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 font-medium">
                  <h3>Comment fonctionne le tiers payant ?</h3>
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
                    Le tiers payant est un système qui vous permet de ne pas avancer les frais de santé. Le
                    professionnel de santé est directement payé par l'Assurance Maladie et/ou votre complémentaire
                    santé. Avec Alpha Assurance, vous bénéficiez du tiers payant dans un large réseau de professionnels
                    de santé partenaires.
                  </p>
                </div>
              </details>

              <details className="group border rounded-lg [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 font-medium">
                  <h3>Puis-je changer de formule en cours de contrat ?</h3>
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
                    Oui, vous pouvez changer de formule à chaque échéance annuelle de votre contrat. Dans certains cas
                    (changement de situation familiale, professionnelle), vous pouvez également modifier votre contrat
                    en cours d'année. Contactez votre conseiller pour plus d'informations.
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
            <h2 className="text-3xl font-bold mb-4">Prenez soin de votre santé</h2>
            <p className="text-xl mb-8">
              Obtenez un devis personnalisé en quelques minutes et bénéficiez de nos offres exclusives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/devis?type=sante">
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
