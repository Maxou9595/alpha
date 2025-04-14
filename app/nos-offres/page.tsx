import { Button } from "@/components/ui/button"
import { Shield, Home, Car, Heart, Briefcase, Users, Building } from "lucide-react"
import Link from "next/link"

export default function NosOffresPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90" />
        <div className="relative container py-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Offres d'Assurance</h1>
            <p className="text-xl mb-8">
              Découvrez notre gamme complète de solutions d'assurance adaptées à tous vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* Assurance Auto Section */}
      <section className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-alpha-blue">Assurance Auto</h2>
            <p className="text-muted-foreground mb-6">
              Protégez votre véhicule avec une assurance adaptée à vos besoins et à votre budget. Nos formules
              d'assurance auto vous offrent une protection complète pour rouler en toute sérénité.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Formule au Tiers</h3>
                  <p className="text-sm text-muted-foreground">
                    L'assurance minimum obligatoire qui couvre les dommages que vous pourriez causer à autrui.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Formule Intermédiaire</h3>
                  <p className="text-sm text-muted-foreground">
                    Une protection étendue incluant le vol, l'incendie et le bris de glace.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Formule Tous Risques</h3>
                  <p className="text-sm text-muted-foreground">
                    Une protection complète couvrant tous les dommages, même ceux dont vous êtes responsable.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/assurance-auto">
                <Button className="bg-alpha-blue hover:bg-alpha-blue-light">En savoir plus</Button>
              </Link>
              <Link href="/devis?type=auto">
                <Button
                  variant="outline"
                  className="border-alpha-blue text-alpha-blue hover:bg-alpha-blue hover:text-white"
                >
                  Obtenir un devis
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg overflow-hidden shadow-md flex items-center justify-center p-10 h-80">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-8 inline-flex mb-6">
                <Car className="h-24 w-24 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Assurance Auto</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Assurance Habitation Section */}
      <section className="container bg-gray-50 py-16 -mx-4 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 bg-green-50 rounded-lg overflow-hidden shadow-md flex items-center justify-center p-10 h-80">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-8 inline-flex mb-6">
                <Home className="h-24 w-24 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800">Assurance Habitation</h3>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-6 text-alpha-blue">Assurance Habitation</h2>
            <p className="text-muted-foreground mb-6">
              Protégez votre logement et vos biens avec une assurance habitation adaptée à votre situation. Que vous
              soyez propriétaire ou locataire, nous avons la solution qu'il vous faut.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                  <Home className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Formule Éco</h3>
                  <p className="text-sm text-muted-foreground">
                    Les garanties essentielles pour protéger votre logement à petit prix.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                  <Home className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Formule Confort</h3>
                  <p className="text-sm text-muted-foreground">
                    Un bon équilibre entre protection et prix pour une tranquillité d'esprit au quotidien.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                  <Home className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Formule Premium</h3>
                  <p className="text-sm text-muted-foreground">
                    Une protection complète avec des garanties étendues pour une sécurité maximale.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/assurance-habitation">
                <Button className="bg-alpha-blue hover:bg-alpha-blue-light">En savoir plus</Button>
              </Link>
              <Link href="/devis?type=habitation">
                <Button
                  variant="outline"
                  className="border-alpha-blue text-alpha-blue hover:bg-alpha-blue hover:text-white"
                >
                  Obtenir un devis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Assurance Santé Section */}
      <section className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-alpha-blue">Assurance Santé</h2>
            <p className="text-muted-foreground mb-6">
              Prenez soin de votre santé et celle de votre famille avec nos solutions d'assurance santé. Des formules
              adaptées à tous les besoins et à tous les budgets.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                  <Heart className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Formule Essentielle</h3>
                  <p className="text-sm text-muted-foreground">
                    Une couverture de base pour les soins courants à un tarif économique.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                  <Heart className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Formule Équilibre</h3>
                  <p className="text-sm text-muted-foreground">
                    Un bon rapport qualité-prix avec des remboursements améliorés.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                  <Heart className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Formule Premium</h3>
                  <p className="text-sm text-muted-foreground">
                    Des remboursements optimaux et des services exclusifs pour votre santé.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/assurance-sante">
                <Button className="bg-alpha-blue hover:bg-alpha-blue-light">En savoir plus</Button>
              </Link>
              <Link href="/devis?type=sante">
                <Button
                  variant="outline"
                  className="border-alpha-blue text-alpha-blue hover:bg-alpha-blue hover:text-white"
                >
                  Obtenir un devis
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-red-50 rounded-lg overflow-hidden shadow-md flex items-center justify-center p-10 h-80">
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-8 inline-flex mb-6">
                <Heart className="h-24 w-24 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-red-800">Assurance Santé</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Assurance Vie Section */}
      <section className="container bg-gray-50 py-16 -mx-4 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 bg-purple-50 rounded-lg overflow-hidden shadow-md flex items-center justify-center p-10 h-80">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-8 inline-flex mb-6">
                <Users className="h-24 w-24 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-purple-800">Assurance Vie</h3>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-6 text-alpha-blue">Assurance Vie</h2>
            <p className="text-muted-foreground mb-6">
              Préparez l'avenir et protégez vos proches avec notre assurance vie. Une solution d'épargne et de
              prévoyance avec des avantages fiscaux attractifs.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Protection Famille</h3>
                  <p className="text-sm text-muted-foreground">
                    Assurez l'avenir financier de vos proches en cas de décès.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Épargne Retraite</h3>
                  <p className="text-sm text-muted-foreground">
                    Constituez un capital pour préparer votre retraite sereinement.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Transmission Patrimoine</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimisez la transmission de votre patrimoine à vos héritiers.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/assurance-vie">
                <Button className="bg-alpha-blue hover:bg-alpha-blue-light">En savoir plus</Button>
              </Link>
              <Link href="/devis?type=vie">
                <Button
                  variant="outline"
                  className="border-alpha-blue text-alpha-blue hover:bg-alpha-blue hover:text-white"
                >
                  Obtenir un devis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Assurance Professionnelle Section */}
      <section className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-alpha-blue">Assurance Professionnelle</h2>
            <p className="text-muted-foreground mb-6">
              Protégez votre entreprise et votre activité professionnelle avec nos solutions d'assurance adaptées aux
              besoins spécifiques des professionnels.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Responsabilité Civile Professionnelle</h3>
                  <p className="text-sm text-muted-foreground">
                    Protégez-vous contre les conséquences financières des dommages causés à des tiers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Multirisque Professionnelle</h3>
                  <p className="text-sm text-muted-foreground">
                    Une protection complète pour vos locaux, équipements et marchandises.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Protection Juridique</h3>
                  <p className="text-sm text-muted-foreground">
                    Un accompagnement juridique pour défendre vos intérêts en cas de litige.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/assurance-professionnelle">
                <Button className="bg-alpha-blue hover:bg-alpha-blue-light">En savoir plus</Button>
              </Link>
              <Link href="/devis?type=pro">
                <Button
                  variant="outline"
                  className="border-alpha-blue text-alpha-blue hover:bg-alpha-blue hover:text-white"
                >
                  Obtenir un devis
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-amber-50 rounded-lg overflow-hidden shadow-md flex items-center justify-center p-10 h-80">
            <div className="text-center">
              <div className="bg-amber-100 rounded-full p-8 inline-flex mb-6">
                <Building className="h-24 w-24 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800">Assurance Professionnelle</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
