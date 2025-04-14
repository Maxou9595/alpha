import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, TrendingUp, Clock, AlertTriangle, CheckCircle, Info } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nos Garanties Assurance Vie | Alpha Assurance",
  description:
    "Découvrez les garanties de nos contrats d'assurance vie : garantie en capital, garanties plancher, garanties de table et options de prévoyance pour sécuriser votre épargne et protéger vos proches.",
  keywords: [
    "garanties assurance vie",
    "garantie en capital",
    "garantie plancher",
    "garantie de table",
    "prévoyance assurance vie",
    "sécurité épargne",
    "protection capital",
    "assurance décès",
    "options assurance vie",
  ],
  alternates: {
    canonical: "https://alpha-assurance.fr/assurance-vie/nos-garanties",
  },
  openGraph: {
    title: "Nos Garanties Assurance Vie | Alpha Assurance",
    description:
      "Découvrez les garanties de nos contrats d'assurance vie : garantie en capital, garanties plancher, garanties de table et options de prévoyance pour sécuriser votre épargne et protéger vos proches.",
    url: "https://alpha-assurance.fr/assurance-vie/nos-garanties",
    type: "website",
  },
}

export default function NosGarantiesAssuranceViePage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90" />
        <div className="relative container py-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Garanties Assurance Vie</h1>
            <p className="text-xl mb-8">
              Découvrez les garanties qui sécurisent votre épargne et protègent vos proches en toutes circonstances.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/devis?type=vie">
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
                  Contacter un conseiller
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Sécurité et tranquillité d'esprit</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Chez Alpha Assurance, nous proposons différentes garanties pour sécuriser votre épargne et protéger vos
            proches. Ces garanties vous permettent de faire face aux aléas de la vie et d'optimiser la transmission de
            votre patrimoine.
          </p>
        </div>
      </section>

      {/* Garanties principales Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos garanties principales</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Garantie en capital */}
            <Card className="border-blue-200 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Lock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Garantie en capital</CardTitle>
                    <CardDescription>Sécurité pour votre épargne</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  La garantie en capital s'applique uniquement aux sommes investies sur le fonds en euros. Elle vous
                  assure que votre capital est protégé et ne peut pas diminuer, quelles que soient les conditions des
                  marchés financiers.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Info className="h-4 w-4 mr-2 text-blue-600" />
                    Caractéristiques
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Protection intégrale du capital investi sur le fonds en euros</li>
                    <li>Effet cliquet : les intérêts acquis sont définitivement acquis</li>
                    <li>Pas de risque de perte en capital sur cette partie de votre épargne</li>
                  </ul>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p className="italic">
                    <strong>Note importante :</strong> Cette garantie ne s'applique pas aux unités de compte, qui
                    comportent un risque de perte en capital.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Garantie plancher */}
            <Card className="border-blue-200 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Garantie plancher</CardTitle>
                    <CardDescription>Protection en cas de décès</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  La garantie plancher assure qu'en cas de décès, vos bénéficiaires recevront au minimum le montant des
                  versements que vous avez effectués, même si la valeur de votre contrat a diminué en raison de
                  performances négatives des unités de compte.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Info className="h-4 w-4 mr-2 text-blue-600" />
                    Caractéristiques
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Protection du capital investi en cas de décès</li>
                    <li>Particulièrement utile pour les investissements en unités de compte</li>
                    <li>Généralement incluse jusqu'à un certain âge (souvent 75 ans)</li>
                    <li>Peut être soumise à des conditions médicales selon l'âge et le montant</li>
                  </ul>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p className="italic">
                    <strong>Exemple :</strong> Si vous avez versé 100 000€ et qu'au moment de votre décès, votre contrat
                    ne vaut plus que 80 000€, vos bénéficiaires recevront tout de même 100 000€.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Garantie de table */}
            <Card className="border-blue-200 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Garantie de table</CardTitle>
                    <CardDescription>Optimisation de la rente viagère</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  La garantie de table vous assure que le taux de conversion de votre capital en rente viagère sera
                  calculé selon la table de mortalité en vigueur à la souscription du contrat, même si celle-ci a évolué
                  défavorablement au moment de la conversion.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Info className="h-4 w-4 mr-2 text-blue-600" />
                    Caractéristiques
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Protection contre l'allongement de l'espérance de vie</li>
                    <li>Sécurisation du montant de la rente future</li>
                    <li>Particulièrement avantageuse pour les contrats de longue durée</li>
                  </ul>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p className="italic">
                    <strong>Avantage :</strong> Cette garantie vous protège contre la baisse des taux de conversion en
                    rente liée à l'allongement de l'espérance de vie.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Garantie de fidélité */}
            <Card className="border-blue-200 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Garantie de fidélité</CardTitle>
                    <CardDescription>Bonus de rendement</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  La garantie de fidélité vous permet de bénéficier d'un bonus de rendement sur le fonds en euros après
                  une certaine durée de détention du contrat, récompensant ainsi votre fidélité.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Info className="h-4 w-4 mr-2 text-blue-600" />
                    Caractéristiques
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Bonus de rendement progressif selon la durée de détention</li>
                    <li>Généralement applicable après 4 ou 8 ans de détention</li>
                    <li>Peut atteindre jusqu'à 0,5% de rendement supplémentaire</li>
                  </ul>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p className="italic">
                    <strong>Exemple :</strong> Si le rendement du fonds en euros est de 2%, vous pourriez bénéficier
                    d'un rendement de 2,5% après 8 ans de détention grâce au bonus de fidélité.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Garanties optionnelles Section */}
      <section className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Nos garanties optionnelles</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Garantie plancher indexée */}
          <Card className="border-blue-200 shadow-sm">
            <CardHeader className="pb-2 bg-blue-50">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">Garantie plancher indexée</CardTitle>
                  <CardDescription>Protection renforcée</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-4 text-muted-foreground">
                Extension de la garantie plancher, cette option assure qu'en cas de décès, vos bénéficiaires recevront
                au minimum le montant des versements que vous avez effectués, majoré d'un taux de rendement annuel
                prédéfini.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="font-semibold mb-2">Fonctionnement</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Le capital minimum garanti augmente chaque année selon un taux fixé à l'avance (généralement entre 1%
                  et 3%).
                </p>
                <div className="flex items-start gap-2 mt-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-xs text-amber-700">
                    Cette garantie implique le paiement d'une prime supplémentaire, calculée en fonction de votre âge et
                    du montant garanti.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Garantie de bonne fin */}
          <Card className="border-blue-200 shadow-sm">
            <CardHeader className="pb-2 bg-blue-50">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">Garantie de bonne fin</CardTitle>
                  <CardDescription>Sécurisation des versements programmés</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-4 text-muted-foreground">
                Cette garantie assure qu'en cas de décès avant le terme prévu de vos versements programmés, l'assureur
                prendra en charge les versements restants, permettant ainsi à vos bénéficiaires de recevoir le capital
                initialement prévu.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="font-semibold mb-2">Fonctionnement</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Idéale pour les contrats avec un objectif d'épargne précis (financement des études des enfants,
                  préparation de la retraite, etc.).
                </p>
                <div className="flex items-start gap-2 mt-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-xs text-amber-700">
                    Cette garantie est généralement soumise à des conditions d'âge et de montant, et implique le
                    paiement d'une prime supplémentaire.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Garantie de prévoyance */}
          <Card className="border-blue-200 shadow-sm">
            <CardHeader className="pb-2 bg-blue-50">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">Garantie de prévoyance</CardTitle>
                  <CardDescription>Capital décès majoré</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-4 text-muted-foreground">
                Cette garantie permet de verser à vos bénéficiaires un capital supplémentaire en cas de décès, en plus
                de la valeur de votre contrat d'assurance vie, offrant ainsi une protection renforcée à vos proches.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="font-semibold mb-2">Fonctionnement</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Le montant du capital supplémentaire est défini à la souscription et peut être un multiple de la
                  valeur du contrat ou un montant fixe.
                </p>
                <div className="flex items-start gap-2 mt-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-xs text-amber-700">
                    Cette garantie nécessite généralement un questionnaire médical et implique le paiement d'une prime
                    supplémentaire.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Garantie d'exonération */}
          <Card className="border-blue-200 shadow-sm">
            <CardHeader className="pb-2 bg-blue-50">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">Garantie d'exonération</CardTitle>
                  <CardDescription>Protection en cas d'invalidité</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-4 text-muted-foreground">
                Cette garantie prévoit la prise en charge de vos versements programmés par l'assureur en cas
                d'invalidité ou d'incapacité de travail, vous permettant de maintenir votre plan d'épargne malgré les
                aléas de la vie.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="font-semibold mb-2">Fonctionnement</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  L'exonération peut être totale ou partielle selon le degré d'invalidité et les conditions du contrat.
                </p>
                <div className="flex items-start gap-2 mt-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-xs text-amber-700">
                    Cette garantie est soumise à des conditions médicales et implique le paiement d'une prime
                    supplémentaire.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tableau comparatif */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Tableau comparatif des garanties</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            Comparez les différentes garanties pour choisir celles qui correspondent le mieux à vos besoins et à votre
            situation.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-3 text-left">Garantie</th>
                  <th className="p-3 text-center">Incluse par défaut</th>
                  <th className="p-3 text-center">Coût supplémentaire</th>
                  <th className="p-3 text-center">Âge limite</th>
                  <th className="p-3 text-center">Idéal pour</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="p-3 font-medium">Garantie en capital (fonds en euros)</td>
                  <td className="p-3 text-center text-green-600">Oui</td>
                  <td className="p-3 text-center">Non</td>
                  <td className="p-3 text-center">Aucun</td>
                  <td className="p-3 text-center">Sécurité de l'épargne</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-3 font-medium">Garantie plancher</td>
                  <td className="p-3 text-center text-green-600">Oui</td>
                  <td className="p-3 text-center">Non jusqu'à 75 ans</td>
                  <td className="p-3 text-center">75 ans</td>
                  <td className="p-3 text-center">Protection des bénéficiaires</td>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="p-3 font-medium">Garantie de table</td>
                  <td className="p-3 text-center text-green-600">Oui</td>
                  <td className="p-3 text-center">Non</td>
                  <td className="p-3 text-center">Aucun</td>
                  <td className="p-3 text-center">Conversion en rente</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-3 font-medium">Garantie de fidélité</td>
                  <td className="p-3 text-center text-green-600">Oui</td>
                  <td className="p-3 text-center">Non</td>
                  <td className="p-3 text-center">Aucun</td>
                  <td className="p-3 text-center">Épargne long terme</td>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="p-3 font-medium">Garantie plancher indexée</td>
                  <td className="p-3 text-center text-red-600">Non</td>
                  <td className="p-3 text-center">Oui</td>
                  <td className="p-3 text-center">75 ans</td>
                  <td className="p-3 text-center">Protection renforcée</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-3 font-medium">Garantie de bonne fin</td>
                  <td className="p-3 text-center text-red-600">Non</td>
                  <td className="p-3 text-center">Oui</td>
                  <td className="p-3 text-center">65 ans</td>
                  <td className="p-3 text-center">Versements programmés</td>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="p-3 font-medium">Garantie de prévoyance</td>
                  <td className="p-3 text-center text-red-600">Non</td>
                  <td className="p-3 text-center">Oui</td>
                  <td className="p-3 text-center">70 ans</td>
                  <td className="p-3 text-center">Protection famille</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-medium">Garantie d'exonération</td>
                  <td className="p-3 text-center text-red-600">Non</td>
                  <td className="p-3 text-center">Oui</td>
                  <td className="p-3 text-center">60 ans</td>
                  <td className="p-3 text-center">Protection revenus</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Conseils Section */}
      <section className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos conseils pour bien choisir vos garanties</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 rounded-full p-2 mt-1">
                <CheckCircle className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Évaluez vos besoins de protection</h3>
                <p className="text-muted-foreground">
                  Analysez votre situation familiale et financière pour déterminer le niveau de protection dont vous
                  avez besoin. Si vous avez des personnes à charge, les garanties de prévoyance peuvent être
                  particulièrement importantes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 rounded-full p-2 mt-1">
                <CheckCircle className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Tenez compte de votre profil d'investisseur</h3>
                <p className="text-muted-foreground">
                  Si vous privilégiez les unités de compte pour leur potentiel de performance, la garantie plancher peut
                  être un filet de sécurité important. À l'inverse, si vous investissez principalement sur le fonds en
                  euros, cette garantie est moins utile.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 rounded-full p-2 mt-1">
                <CheckCircle className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Considérez votre âge</h3>
                <p className="text-muted-foreground">
                  Les garanties optionnelles sont généralement plus coûteuses avec l'âge. Il peut être judicieux de les
                  souscrire tôt, d'autant que certaines ne sont plus disponibles après un certain âge.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 rounded-full p-2 mt-1">
                <CheckCircle className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Évaluez le rapport coût/bénéfice</h3>
                <p className="text-muted-foreground">
                  Les garanties optionnelles impliquent un coût supplémentaire qui peut réduire le rendement de votre
                  contrat. Assurez-vous que les avantages qu'elles procurent justifient leur coût, en fonction de votre
                  situation personnelle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Besoin de conseils personnalisés ?</h2>
            <p className="text-xl mb-8">
              Nos experts sont à votre disposition pour vous aider à choisir les garanties les plus adaptées à votre
              situation et à vos objectifs.
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
                  Contacter un conseiller
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
