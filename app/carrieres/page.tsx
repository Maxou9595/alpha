import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap, Heart, Clock, Users } from "lucide-react"

export default function CarrieresPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Rejoignez l'équipe Alpha Assurance</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Nous recherchons des talents passionnés pour nous aider à transformer le monde de l'assurance et offrir un
          service d'excellence à nos clients.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a href="#offres">Voir nos offres d'emploi</a>
          </Button>
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            <a href="#candidature">Candidature spontanée</a>
          </Button>
        </div>
      </div>

      {/* Pourquoi nous rejoindre */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Pourquoi nous rejoindre</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Travail avec impact</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Contribuez à notre mission de rendre l'assurance plus juste et plus humaine. Votre travail aura un
                impact direct sur la vie de nos clients.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Évolution professionnelle</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Nous investissons dans le développement de nos collaborateurs avec des formations continues et des
                opportunités d'évolution au sein de l'entreprise.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Équilibre vie pro/perso</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Nous valorisons le bien-être de nos collaborateurs avec des horaires flexibles et des avantages sociaux
                attractifs.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Offres d'emploi */}
      <div id="offres" className="mb-16 scroll-mt-16">
        <h2 className="text-3xl font-bold text-center mb-10">Nos offres d'emploi</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">Conseiller(ère) en assurance</CardTitle>
                  <CardDescription className="mt-1">CDI - Carignan</CardDescription>
                </div>
                <div className="bg-blue-100 rounded-full p-2">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                En tant que conseiller(ère) en assurance, vous accompagnerez nos clients dans le choix des solutions
                adaptées à leurs besoins et serez leur interlocuteur privilégié.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">Relation client</span>
                <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">Conseil</span>
                <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">Vente</span>
              </div>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Voir l'offre complète
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">Gestionnaire de sinistres</CardTitle>
                  <CardDescription className="mt-1">CDI - Carignan</CardDescription>
                </div>
                <div className="bg-blue-100 rounded-full p-2">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Vous serez en charge de la gestion des dossiers de sinistres, de l'ouverture à la clôture, en veillant à
                offrir un accompagnement de qualité à nos assurés.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">Gestion de dossiers</span>
                <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">Relation client</span>
                <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">Expertise</span>
              </div>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Voir l'offre complète
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Candidature spontanée */}
      <div id="candidature" className="mb-16 scroll-mt-16">
        <h2 className="text-3xl font-bold text-center mb-10">Candidature spontanée</h2>
        <div className="bg-gray-50 p-8 rounded-lg border">
          <p className="text-center text-muted-foreground mb-8">
            Vous ne trouvez pas d'offre correspondant à votre profil ? N'hésitez pas à nous envoyer une candidature
            spontanée.
          </p>
          <form className="max-w-3xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nom">Nom</Label>
                <Input id="nom" placeholder="Votre nom" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="prenom">Prénom</Label>
                <Input id="prenom" placeholder="Votre prénom" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="votre@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telephone">Téléphone</Label>
                <Input id="telephone" placeholder="Votre numéro de téléphone" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="poste">Poste recherché</Label>
              <Input id="poste" placeholder="Le poste qui vous intéresse" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Présentez-vous et expliquez-nous pourquoi vous souhaitez rejoindre Alpha Assurance"
                rows={5}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cv">CV (PDF, DOC, DOCX)</Label>
              <Input id="cv" type="file" accept=".pdf,.doc,.docx" />
            </div>

            <Button type="submit" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700">
              Envoyer ma candidature
            </Button>
          </form>
        </div>
      </div>

      {/* Témoignages */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Ils travaillent chez Alpha Assurance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="italic mb-4">
                    "Travailler chez Alpha Assurance, c'est faire partie d'une équipe qui partage les mêmes valeurs
                    d'équité et d'humanité. Chaque jour, je sens que mon travail a un impact réel sur la vie de nos
                    clients."
                  </p>
                  <p className="font-semibold">Julie M.</p>
                  <p className="text-sm text-muted-foreground">Conseillère en assurance depuis 2 ans</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="italic mb-4">
                    "Ce qui me plaît chez Alpha Assurance, c'est l'équilibre parfait entre autonomie et travail
                    d'équipe. L'entreprise investit réellement dans notre développement professionnel."
                  </p>
                  <p className="font-semibold">Thomas R.</p>
                  <p className="text-sm text-muted-foreground">Gestionnaire de sinistres depuis 3 ans</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Prêt à nous rejoindre ?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Envoyez-nous votre candidature dès aujourd'hui et participez à notre mission de transformer le monde de
          l'assurance.
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          <a href="#candidature">Postuler maintenant</a>
        </Button>
      </div>
    </div>
  )
}
