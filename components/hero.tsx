"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Hero() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("auto")

  // États pour stocker les valeurs des formulaires
  const [autoForm, setAutoForm] = useState({
    marque: "",
    annee: "",
    typeVehicule: "auto",
    email: "",
  })

  const [habitationForm, setHabitationForm] = useState({
    typeLogement: "",
    surface: "",
    email: "",
  })

  const [santeForm, setSanteForm] = useState({
    age: "",
    situation: "",
    email: "",
  })

  const [vieForm, setVieForm] = useState({
    age: "",
    capital: "",
    email: "",
  })

  // Modifions la fonction handleAutoSubmit pour stocker toutes les données du formulaire
  // Remplacer la fonction handleAutoSubmit existante par celle-ci:

  const handleAutoSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Stocker les données dans localStorage avec plus de détails
    localStorage.setItem("devisType", "auto")
    localStorage.setItem(
      "devisData",
      JSON.stringify({
        ...autoForm,
        // Ajoutons des champs supplémentaires pour correspondre au formulaire complet
        typeVehicule: autoForm.typeVehicule || "auto",
        modele: "", // Champ à remplir dans le formulaire complet
        usage: "", // Champ à remplir dans le formulaire complet
        formule: "tiers", // Valeur par défaut
      }),
    )
    router.push("/devis")
  }

  // Modifions également les autres fonctions de soumission pour les autres types d'assurance

  const handleHabitationSubmit = (e: FormEvent) => {
    e.preventDefault()
    localStorage.setItem("devisType", "habitation")
    localStorage.setItem(
      "devisData",
      JSON.stringify({
        ...habitationForm,
        // Ajoutons des champs supplémentaires pour correspondre au formulaire complet
        statut: "", // Champ à remplir dans le formulaire complet
        pieces: "", // Champ à remplir dans le formulaire complet
      }),
    )
    router.push("/devis")
  }

  const handleSanteSubmit = (e: FormEvent) => {
    e.preventDefault()
    localStorage.setItem("devisType", "sante")
    localStorage.setItem(
      "devisData",
      JSON.stringify({
        ...santeForm,
        // Conversion de la situation en nombre de personnes
        nbPersonnes:
          santeForm.situation === "celibataire"
            ? "1"
            : santeForm.situation === "couple"
              ? "2"
              : santeForm.situation === "famille"
                ? "3+"
                : "",
        regime: "", // Champ à remplir dans le formulaire complet
        couverture: "standard", // Valeur par défaut
      }),
    )
    router.push("/devis")
  }

  const handleVieSubmit = (e: FormEvent) => {
    e.preventDefault()
    localStorage.setItem("devisType", "vie")
    localStorage.setItem(
      "devisData",
      JSON.stringify({
        ...vieForm,
        fumeur: "", // Champ à remplir dans le formulaire complet
        motif: "pret", // Valeur par défaut
      }),
    )
    router.push("/devis")
  }

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-alpha-gradient opacity-95" />
      <div className="relative container py-12 md:py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white space-y-4 md:space-y-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Votre protection, notre priorité
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-md mx-auto lg:mx-0">
              Alpha Assurance vous offre des solutions personnalisées pour protéger ce qui compte le plus pour vous.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="/nos-offres">
                <Button
                  size="lg"
                  variant="default"
                  className="bg-alpha-blue text-white hover:bg-alpha-blue-light font-medium"
                >
                  Découvrir nos offres
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white bg-white/10 hover:bg-white/20 hover:border-white font-medium"
                >
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>

          <Card className="w-full max-w-md mx-auto border-alpha-blue-light/20">
            <CardContent className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Obtenez un devis gratuit</h2>
              <Tabs defaultValue="auto" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-4 md:mb-6 bg-gray-100">
                  <TabsTrigger
                    value="auto"
                    className="text-xs md:text-sm data-[state=active]:bg-alpha-blue data-[state=active]:text-white"
                  >
                    Auto/Moto
                  </TabsTrigger>
                  <TabsTrigger
                    value="habitation"
                    className="text-xs md:text-sm data-[state=active]:bg-alpha-blue data-[state=active]:text-white"
                  >
                    Habitation
                  </TabsTrigger>
                  <TabsTrigger
                    value="sante"
                    className="text-xs md:text-sm data-[state=active]:bg-alpha-blue data-[state=active]:text-white"
                  >
                    Santé
                  </TabsTrigger>
                  <TabsTrigger
                    value="vie"
                    className="text-xs md:text-sm data-[state=active]:bg-alpha-blue data-[state=active]:text-white"
                  >
                    Vie
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="auto" className="space-y-4">
                  <form onSubmit={handleAutoSubmit}>
                    <div className="space-y-2">
                      <Label htmlFor="marque">Marque du véhicule</Label>
                      <Select
                        value={autoForm.marque}
                        onValueChange={(value) => setAutoForm({ ...autoForm, marque: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez une marque" />
                        </SelectTrigger>
                        <SelectContent className="max-h-80">
                          {[
                            // Marques de voitures
                            "Abarth",
                            "Acura",
                            "Alfa Romeo",
                            "Alpine",
                            "Aston Martin",
                            "Audi",
                            "Bentley",
                            "BMW",
                            "Bugatti",
                            "Buick",
                            "BYD",
                            "Cadillac",
                            "Chevrolet",
                            "Chrysler",
                            "Citroën",
                            "Cupra",
                            "Dacia",
                            "Daewoo",
                            "Daihatsu",
                            "Dodge",
                            "DS",
                            "Ferrari",
                            "Fiat",
                            "Ford",
                            "Genesis",
                            "GMC",
                            "Honda",
                            "Hummer",
                            "Hyundai",
                            "Infiniti",
                            "Isuzu",
                            "Jaguar",
                            "Jeep",
                            "Kia",
                            "Koenigsegg",
                            "Lamborghini",
                            "Lancia",
                            "Land Rover",
                            "Lexus",
                            "Lincoln",
                            "Lotus",
                            "Maserati",
                            "Maybach",
                            "Mazda",
                            "McLaren",
                            "Mercedes-Benz",
                            "MG",
                            "Mini",
                            "Mitsubishi",
                            "Nissan",
                            "Opel",
                            "Pagani",
                            "Peugeot",
                            "Polestar",
                            "Porsche",
                            "RAM",
                            "Renault",
                            "Rimac",
                            "Rolls-Royce",
                            "Saab",
                            "Seat",
                            "Škoda",
                            "Smart",
                            "SsangYong",
                            "Subaru",
                            "Suzuki",
                            "Tesla",
                            "Toyota",
                            "Volkswagen",
                            "Volvo",

                            // Marques de motos
                            "Aprilia",
                            "Benelli",
                            "Bimota",
                            "BMW Motorrad",
                            "Brixton",
                            "Buell",
                            "CFMoto",
                            "Daelim",
                            "Derbi",
                            "Ducati",
                            "Fantic",
                            "Gilera",
                            "Harley-Davidson",
                            "Hero",
                            "Husqvarna",
                            "Indian",
                            "Kawasaki",
                            "KTM",
                            "Kymco",
                            "Mash",
                            "Moto Guzzi",
                            "Moto Morini",
                            "MV Agusta",
                            "Norton",
                            "Piaggio",
                            "Royal Enfield",
                            "Sherco",
                            "Triumph",
                            "Victory",
                            "Voxan",
                            "Yamaha",
                            "Zero Motorcycles",

                            "Autre",
                          ].map((brand) => (
                            <SelectItem key={brand} value={brand.toLowerCase()}>
                              {brand}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2 mt-4">
                      <Label htmlFor="annee">Année</Label>
                      <Select
                        value={autoForm.annee}
                        onValueChange={(value) => setAutoForm({ ...autoForm, annee: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez une année" />
                        </SelectTrigger>
                        <SelectContent className="max-h-80">
                          {Array.from({ length: 76 }, (_, i) => (
                            <SelectItem key={i} value={(2025 - i).toString()}>
                              {2025 - i}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2 mt-4">
                      <Label htmlFor="typeVehicule">Type de véhicule</Label>
                      <Select
                        value={autoForm.typeVehicule}
                        onValueChange={(value) => setAutoForm({ ...autoForm, typeVehicule: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="auto">Automobile</SelectItem>
                          <SelectItem value="moto">Moto</SelectItem>
                          <SelectItem value="scooter">Scooter</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2 mt-4">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={autoForm.email}
                        onChange={(e) => setAutoForm({ ...autoForm, email: e.target.value })}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-alpha-blue hover:bg-alpha-blue-light mt-4">
                      Obtenir mon devis
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="habitation" className="space-y-4">
                  <form onSubmit={handleHabitationSubmit}>
                    <div className="space-y-2">
                      <Label htmlFor="type-logement">Type de logement</Label>
                      <Select
                        value={habitationForm.typeLogement}
                        onValueChange={(value) => setHabitationForm({ ...habitationForm, typeLogement: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="appartement">Appartement</SelectItem>
                          <SelectItem value="maison">Maison</SelectItem>
                          <SelectItem value="studio">Studio</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2 mt-4">
                      <Label htmlFor="surface">Surface (m²)</Label>
                      <Input
                        id="surface"
                        type="number"
                        placeholder="Surface en m²"
                        value={habitationForm.surface}
                        onChange={(e) => setHabitationForm({ ...habitationForm, surface: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2 mt-4">
                      <Label htmlFor="email-habitation">Email</Label>
                      <Input
                        id="email-habitation"
                        type="email"
                        placeholder="votre@email.com"
                        value={habitationForm.email}
                        onChange={(e) => setHabitationForm({ ...habitationForm, email: e.target.value })}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-alpha-blue hover:bg-alpha-blue-light mt-4">
                      Obtenir mon devis
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="sante" className="space-y-4">
                  <form onSubmit={handleSanteSubmit}>
                    <div className="space-y-2">
                      <Label htmlFor="age">Âge</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="Votre âge"
                        value={santeForm.age}
                        onChange={(e) => setSanteForm({ ...santeForm, age: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2 mt-4">
                      <Label htmlFor="situation">Situation</Label>
                      <Select
                        value={santeForm.situation}
                        onValueChange={(value) => setSanteForm({ ...santeForm, situation: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Votre situation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="celibataire">Célibataire</SelectItem>
                          <SelectItem value="couple">En couple</SelectItem>
                          <SelectItem value="famille">Famille</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2 mt-4">
                      <Label htmlFor="email-sante">Email</Label>
                      <Input
                        id="email-sante"
                        type="email"
                        placeholder="votre@email.com"
                        value={santeForm.email}
                        onChange={(e) => setSanteForm({ ...santeForm, email: e.target.value })}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-alpha-blue hover:bg-alpha-blue-light mt-4">
                      Obtenir mon devis
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="vie" className="space-y-4">
                  <form onSubmit={handleVieSubmit}>
                    <div className="space-y-2">
                      <Label htmlFor="age-vie">Âge</Label>
                      <Input
                        id="age-vie"
                        type="number"
                        placeholder="Votre âge"
                        value={vieForm.age}
                        onChange={(e) => setVieForm({ ...vieForm, age: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2 mt-4">
                      <Label htmlFor="capital">Capital souhaité (€)</Label>
                      <Input
                        id="capital"
                        type="number"
                        placeholder="Montant en euros"
                        value={vieForm.capital}
                        onChange={(e) => setVieForm({ ...vieForm, capital: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2 mt-4">
                      <Label htmlFor="email-vie">Email</Label>
                      <Input
                        id="email-vie"
                        type="email"
                        placeholder="votre@email.com"
                        value={vieForm.email}
                        onChange={(e) => setVieForm({ ...vieForm, email: e.target.value })}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-alpha-blue hover:bg-alpha-blue-light mt-4">
                      Obtenir mon devis
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
