import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Users, Clock, Heart, Scale, HandHelping, FileText } from "lucide-react"
import Link from "next/link"

export default function AProposPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90" />
        <div className="relative container py-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos d'Alpha Assurance</h1>
            <p className="text-xl mb-8">
              Découvrez notre histoire, nos valeurs et notre engagement envers nos clients.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Histoire Section */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
            <p className="text-muted-foreground mb-4">
              Alpha Assurance est née d'une injustice vécue – une injustice comme tant d'autres que subissent chaque
              année des assurés, face à un système parfois sourd à leurs droits.
            </p>
            <p className="text-muted-foreground mb-4">
              Nous avons été témoins de situations où des experts et médecins-experts, liés contractuellement aux
              compagnies d'assurance, prenaient des décisions partiales, remettant en cause la parole des victimes et
              compromettant l'équité du traitement. Ces pratiques, loin de l'esprit d'égalité et de justice, nous ont
              profondément révoltés.
            </p>
            <p className="text-muted-foreground mb-4">
              Face à cela, nous avons décidé de fonder Alpha Assurance : un acteur indépendant et humain, déterminé à
              remettre du sens, de la transparence et du respect dans le monde de l'assurance.
            </p>
            <p className="text-muted-foreground mb-4">Notre engagement est clair :</p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li className="mb-2">
                Un accompagnement réel de nos assurés, en particulier dans les moments critiques comme les expertises ou
                les sinistres graves.
              </li>
              <li className="mb-2">Un service à la hauteur d'un service public, proche, accessible et éthique.</li>
              <li className="mb-2">
                Une véritable prise en charge, notamment en cas de sténographie médicale ou de situations complexes, où
                chaque mot compte.
              </li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Nous croyons qu'il est possible de faire de l'assurance autrement.
              <br />
              Plus juste. Plus claire. Plus humaine.
              <br />
              Bienvenue chez Alpha Assurance.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg overflow-hidden p-8 shadow-md border border-blue-100">
            <div className="flex flex-col items-center">
              <div className="relative mb-8">
                <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-blue-600 rounded-full p-4">
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-blue-600 rounded-full p-4">
                  <HandHelping className="h-8 w-8 text-white" />
                </div>
                <div className="h-1 w-48 bg-blue-600"></div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Justice et Accompagnement</h3>
                <p className="text-muted-foreground">
                  Notre mission est de rétablir l'équilibre entre les assureurs et les assurés, en plaçant l'humain au
                  centre de nos préoccupations.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 w-full">
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                  <Shield className="h-10 w-10 text-blue-600 mb-2" />
                  <span className="text-sm font-medium text-center">Protection équitable</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                  <FileText className="h-10 w-10 text-blue-600 mb-2" />
                  <span className="text-sm font-medium text-center">Transparence totale</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                  <Heart className="h-10 w-10 text-blue-600 mb-2" />
                  <span className="text-sm font-medium text-center">Approche humaine</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos Valeurs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nos valeurs guident chacune de nos actions et décisions au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Confiance</h3>
                <p className="text-muted-foreground">
                  Nous construisons des relations durables basées sur la confiance et le respect mutuel avec nos clients
                  et partenaires.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  Nous visons l'excellence dans tous nos services et produits, avec un souci constant de la qualité et
                  de la satisfaction client.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Engagement</h3>
                <p className="text-muted-foreground">
                  Nous nous engageons pleinement auprès de nos clients, en leur offrant un accompagnement personnalisé à
                  chaque étape.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nos Engagements Section */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nos Engagements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chez Alpha Assurance, nous nous engageons à vous offrir le meilleur service possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Réactivité</h3>
              <p className="text-muted-foreground">
                Nous nous engageons à traiter vos demandes et vos sinistres dans les meilleurs délais, avec une réponse
                sous 48h maximum.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Protection</h3>
              <p className="text-muted-foreground">
                Nous vous garantissons une protection optimale adaptée à vos besoins spécifiques, avec des garanties
                claires et transparentes.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Accompagnement</h3>
              <p className="text-muted-foreground">
                Un conseiller dédié vous accompagne tout au long de votre contrat, pour répondre à vos questions et vous
                conseiller.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
              <Award className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Qualité</h3>
              <p className="text-muted-foreground">
                Nous nous engageons à maintenir un haut niveau de qualité dans tous nos services, avec une amélioration
                continue de nos processus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Rejoignez la famille Alpha Assurance</h2>
            <p className="text-muted-foreground mb-8">
              Découvrez pourquoi des milliers de clients nous font confiance pour protéger ce qui compte le plus pour
              eux.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/devis">
                <Button size="lg">Obtenir un devis</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
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
