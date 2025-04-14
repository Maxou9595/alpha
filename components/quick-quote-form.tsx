"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Liste complète des marques de véhicules
const carBrands = [
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
]

interface QuickQuoteFormProps {
  defaultType?: string
  darkMode?: boolean
}

export function QuickQuoteForm({ defaultType = "auto", darkMode = false }: QuickQuoteFormProps) {
  const router = useRouter()
  const [quoteType, setQuoteType] = useState(defaultType)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Récupérer les valeurs du formulaire
    const formData = new FormData(e.target as HTMLFormElement)
    const formValues: Record<string, string> = {}

    // Convertir FormData en objet avec des noms de champs cohérents
    formData.forEach((value, key) => {
      // Mapper les noms de champs du formulaire rapide vers ceux du formulaire complet
      if (key === "car-brand") {
        formValues["marque"] = value.toString()
      } else if (key === "car-model") {
        formValues["modele"] = value.toString()
      } else if (key === "car-year") {
        formValues["annee"] = value.toString()
      } else if (key === "postal-code") {
        formValues["codePostal"] = value.toString()
      } else if (key === "age") {
        formValues["age"] = value.toString()
      } else if (key === "email") {
        formValues["email"] = value.toString()
      } else if (key === "telephone") {
        formValues["telephone"] = value.toString()
      } else {
        formValues[key] = value.toString()
      }
    })

    // Ajouter le type de véhicule si c'est une assurance auto
    if (quoteType === "auto") {
      formValues["typeVehicule"] = "auto"
    }

    // Ajouter le type de logement si c'est une assurance habitation
    if (quoteType === "habitation") {
      formValues["typeLogement"] = "appartement" // Valeur par défaut
    }

    // Stocker les données dans localStorage
    localStorage.setItem("devisType", quoteType)
    localStorage.setItem("devisData", JSON.stringify(formValues))

    // Afficher les données dans la console pour le débogage
    console.log("Données stockées:", quoteType, formValues)

    // Rediriger vers la page de devis complète avec le type sélectionné
    router.push(`/devis?type=${quoteType}`)
  }

  return (
    <Card className={`border-alpha-blue/20 ${darkMode ? "bg-alpha-black text-white" : ""}`}>
      <CardHeader className={`${darkMode ? "bg-alpha-black-light" : "bg-alpha-blue/10"} rounded-t-lg`}>
        <CardTitle className={darkMode ? "text-white" : ""}>Obtenir un devis gratuit</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="quote-type" className={darkMode ? "text-gray-300" : ""}>
              Type d'assurance
            </Label>
            <Select value={quoteType} onValueChange={setQuoteType}>
              <SelectTrigger id="quote-type" className={darkMode ? "bg-alpha-black-light border-gray-700" : ""}>
                <SelectValue placeholder="Sélectionnez un type d'assurance" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="auto">Assurance Auto</SelectItem>
                <SelectItem value="habitation">Assurance Habitation</SelectItem>
                <SelectItem value="sante">Assurance Santé</SelectItem>
                <SelectItem value="vie">Assurance Vie</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {quoteType === "auto" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="car-brand" className={darkMode ? "text-gray-300" : ""}>
                  Marque du véhicule
                </Label>
                <Select name="car-brand">
                  <SelectTrigger id="car-brand" className={darkMode ? "bg-alpha-black-light border-gray-700" : ""}>
                    <SelectValue placeholder="Sélectionnez une marque" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    {carBrands.map((brand) => (
                      <SelectItem key={brand} value={brand.toLowerCase()}>
                        {brand}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="car-model" className={darkMode ? "text-gray-300" : ""}>
                  Modèle
                </Label>
                <Input
                  id="car-model"
                  name="car-model"
                  placeholder="Modèle du véhicule"
                  className={darkMode ? "bg-alpha-black-light border-gray-700" : ""}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="car-year" className={darkMode ? "text-gray-300" : ""}>
                  Année de 1ère mise en circulation
                </Label>
                <Select name="car-year">
                  <SelectTrigger id="car-year" className={darkMode ? "bg-alpha-black-light border-gray-700" : ""}>
                    <SelectValue placeholder="Sélectionnez une année" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    {Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          {quoteType === "habitation" && (
            <div className="space-y-2">
              <Label htmlFor="postal-code" className={darkMode ? "text-gray-300" : ""}>
                Code postal
              </Label>
              <Input
                id="postal-code"
                name="postal-code"
                placeholder="Votre code postal"
                className={darkMode ? "bg-alpha-black-light border-gray-700" : ""}
              />
            </div>
          )}

          {(quoteType === "sante" || quoteType === "vie") && (
            <div className="space-y-2">
              <Label htmlFor="age" className={darkMode ? "text-gray-300" : ""}>
                Âge
              </Label>
              <Input
                id="age"
                type="number"
                name="age"
                placeholder="Votre âge"
                className={darkMode ? "bg-alpha-black-light border-gray-700" : ""}
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email" className={darkMode ? "text-gray-300" : ""}>
              Email
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="votre@email.com"
              required
              className={darkMode ? "bg-alpha-black-light border-gray-700" : ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telephone" className={darkMode ? "text-gray-300" : ""}>
              Téléphone
            </Label>
            <Input
              id="telephone"
              type="tel"
              name="telephone"
              placeholder="Votre numéro de téléphone"
              className={darkMode ? "bg-alpha-black-light border-gray-700" : ""}
            />
          </div>

          <Button
            type="submit"
            className={`w-full ${darkMode ? "bg-alpha-blue hover:bg-alpha-blue-light" : "bg-alpha-blue hover:bg-alpha-blue-light text-white"}`}
          >
            Obtenir mon devis
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
