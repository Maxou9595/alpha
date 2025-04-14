"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Info, CheckCircle2 } from "lucide-react"

export default function DevisPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("auto")
  const [dataLoaded, setDataLoaded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [isPreview, setIsPreview] = useState(false)
  const [showActivationInfo, setShowActivationInfo] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [countdown, setCountdown] = useState(5)
  const [forcePreviewMode, setForcePreviewMode] = useState(false)

  // Détection de l'environnement de prévisualisation
  useEffect(() => {
    // Vérifier si nous sommes en prévisualisation (Vercel Preview)
    const isPreviewEnv =
      window.location.hostname.includes("vercel.app") ||
      window.location.hostname.includes("localhost") ||
      window.location.hostname.includes("127.0.0.1") ||
      // Ajouter d'autres domaines de prévisualisation si nécessaire
      window.location.hostname === ""

    setIsPreview(isPreviewEnv)
  }, [])

  // Effet pour le compte à rebours et la redirection
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null

    if (isSuccess && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
    } else if (isSuccess && countdown === 0) {
      router.push("/")
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [isSuccess, countdown, router])

  // Effet pour initialiser l'onglet actif à partir de l'URL
  useEffect(() => {
    // Récupérer le type de devis depuis l'URL si présent
    const typeFromUrl = searchParams.get("type")
    if (typeFromUrl && ["auto", "habitation", "sante", "vie"].includes(typeFromUrl)) {
      setActiveTab(typeFromUrl)
    }
  }, [searchParams])

  // Effet séparé pour charger les données depuis localStorage (une seule fois)
  useEffect(() => {
    // Ne charger les données qu'une seule fois
    if (dataLoaded) return

    // Récupérer les données depuis localStorage
    try {
      const devisType = localStorage.getItem("devisType")
      const devisData = localStorage.getItem("devisData")

      console.log("Données récupérées du localStorage:", devisType, devisData) // Pour le débogage

      if (devisType && devisData) {
        // Activer l'onglet correspondant
        setActiveTab(devisType)

        // Récupérer les données
        const parsedData = JSON.parse(devisData)
        console.log("Données parsées:", parsedData) // Pour le débogage

        // Mettre à jour l'état avec les nouvelles données
        setFormData((prevData) => {
          // Créer un nouvel objet formData en conservant les valeurs par défaut pour les champs non renseignés
          const newFormData = { ...prevData }

          // Mettre à jour tous les champs disponibles dans les données récupérées
          Object.keys(parsedData).forEach((key) => {
            if (parsedData[key] && key in newFormData) {
              newFormData[key] = parsedData[key]
            }
          })

          console.log("Nouveau formData:", newFormData) // Pour le débogage
          return newFormData
        })

        // Ne pas effacer les données du localStorage immédiatement pour permettre le débogage
        // Nous les effacerons après un délai pour s'assurer que les données sont bien utilisées
        setTimeout(() => {
          localStorage.removeItem("devisType")
          localStorage.removeItem("devisData")
          console.log("Données effacées du localStorage")
        }, 2000)
      }

      // Marquer les données comme chargées
      setDataLoaded(true)
    } catch (error) {
      console.error("Erreur lors de la récupération des données:", error)
      setDataLoaded(true)
    }
  }, [dataLoaded])

  // États pour stocker les valeurs des formulaires
  const [formData, setFormData] = useState({
    // Auto/Moto
    marque: "",
    modele: "",
    typeVehicule: "auto",
    annee: "",
    usage: "",
    formule: "tiers",

    // Habitation
    typeLogement: "",
    statut: "",
    surface: "",
    pieces: "",
    codePostal: "",

    // Santé
    nbPersonnes: "",
    regime: "",
    couverture: "standard",
    age: "",

    // Vie
    fumeur: "",
    capital: "",
    motif: "pret",

    // Commun
    email: "",
    telephone: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Fonction pour activer le mode prévisualisation forcé
  const handleForcePreview = () => {
    setForcePreviewMode(true)
    setShowActivationInfo(false)
    setSubmitError("")
  }

  // Gestionnaire de soumission manuel
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // Créer un objet FormData à partir du formulaire
      const form = e.currentTarget
      const formDataObj = new FormData(form)

      // Ajouter le type d'assurance actif
      formDataObj.append("type_assurance", activeTab)

      console.log("Soumission du formulaire avec les données:", Object.fromEntries(formDataObj))

      // Si nous sommes en prévisualisation ou en mode prévisualisation forcé, simuler une soumission réussie
      if (isPreview || forcePreviewMode) {
        console.log("Mode prévisualisation - Simulation d'une soumission réussie")
        // Simuler un délai de traitement
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Afficher le message de succès
        setIsSuccess(true)
        return
      }

      // Soumettre le formulaire manuellement
      const response = await fetch("https://formsubmit.co/ajax/maximeiori08@gmail.com", {
        method: "POST",
        body: formDataObj,
        headers: {
          Accept: "application/json",
        },
      })

      const data = await response.json()
      console.log("Réponse de FormSubmit:", data)

      if (data.success === "true" || data.success === true) {
        // Afficher le message de succès
        setIsSuccess(true)
      } else {
        // Vérifier si c'est une erreur d'activation
        if (data.message && data.message.includes("Activation")) {
          setShowActivationInfo(true)
          setSubmitError(
            "Le formulaire nécessite une activation. Veuillez vérifier l'email envoyé à maximeiori08@gmail.com.",
          )
        } else {
          setSubmitError("Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.")
        }
        console.error("Erreur FormSubmit:", data)
      }
    } catch (error) {
      console.error("Erreur lors de la soumission:", error)
      setSubmitError("Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.")
      setShowActivationInfo(true) // Afficher l'info d'activation en cas d'erreur, car c'est souvent la cause
    } finally {
      setIsSubmitting(false)
    }
  }

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

  // Si le formulaire a été soumis avec succès, afficher le message de succès
  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Demande envoyée avec succès !</h2>
          <p className="text-gray-600 mb-6">
            Merci pour votre demande. Nous vous recontacterons dans les plus brefs délais.
          </p>
          <p className="text-gray-500 text-sm">
            Redirection vers la page d'accueil dans <span className="font-semibold">{countdown}</span> secondes...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-alpha-gradient opacity-95" />
        <div className="relative container py-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Demande de Devis Auto/Moto, Habitation, Santé et Vie
            </h1>
            <p className="text-xl mb-8">Obtenez un devis personnalisé en quelques minutes pour votre assurance.</p>
          </div>
        </div>
      </section>

      {/* Formulaire Section */}
      <section className="container">
        <div className="max-w-4xl mx-auto">
          {(isPreview || forcePreviewMode) && (
            <Alert className="mb-6 bg-blue-50 border-blue-200">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertTitle className="text-blue-800">Mode prévisualisation</AlertTitle>
              <AlertDescription className="text-blue-700">
                Vous êtes en mode prévisualisation. La soumission du formulaire sera simulée.
              </AlertDescription>
            </Alert>
          )}

          {showActivationInfo && (
            <Alert className="mb-6 bg-amber-50 border-amber-200">
              <AlertCircle className="h-4 w-4 text-amber-600" />
              <AlertTitle className="text-amber-800">Activation requise</AlertTitle>
              <AlertDescription className="text-amber-700">
                <p>
                  FormSubmit nécessite une activation pour ce formulaire. Un email a été envoyé à{" "}
                  <strong>maximeiori08@gmail.com</strong>.
                </p>
                <p className="mt-2">
                  Veuillez vérifier la boîte de réception et cliquer sur le lien d'activation pour activer le
                  formulaire.
                </p>
                <p className="mt-4">
                  <button
                    onClick={handleForcePreview}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Continuer en mode prévisualisation
                  </button>
                </p>
              </AlertDescription>
            </Alert>
          )}

          <Card className="border-alpha-blue/20">
            <CardHeader className="bg-alpha-black text-white rounded-t-lg">
              <CardTitle>Formulaire de demande de devis</CardTitle>
              <CardDescription className="text-gray-300">
                Remplissez ce formulaire pour recevoir un devis personnalisé adapté à vos besoins.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Champs cachés pour FormSubmit */}
                <input type="hidden" name="_subject" value={`Demande de devis ${activeTab.toUpperCase()}`} />
                <input type="hidden" name="_next" value="https://alpha-assurance.fr" />

                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-6 bg-gray-100">
                    <TabsTrigger
                      value="auto"
                      className="data-[state=active]:bg-alpha-blue data-[state=active]:text-white"
                    >
                      Auto/Moto
                    </TabsTrigger>
                    <TabsTrigger
                      value="habitation"
                      className="data-[state=active]:bg-alpha-blue data-[state=active]:text-white"
                    >
                      Habitation
                    </TabsTrigger>
                    <TabsTrigger
                      value="sante"
                      className="data-[state=active]:bg-alpha-blue data-[state=active]:text-white"
                    >
                      Santé
                    </TabsTrigger>
                    <TabsTrigger
                      value="vie"
                      className="data-[state=active]:bg-alpha-blue data-[state=active]:text-white"
                    >
                      Vie
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="auto" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="marque">Marque du véhicule (Auto/Moto)</Label>
                        <Select
                          name="marque"
                          value={formData.marque}
                          onValueChange={(value) => handleSelectChange("marque", value)}
                        >
                          <SelectTrigger>
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
                        <Label htmlFor="modele">Modèle</Label>
                        <Input
                          id="modele"
                          name="modele"
                          placeholder="Modèle du véhicule"
                          value={formData.modele}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="typeVehicule">Type de véhicule</Label>
                        <Select
                          name="typeVehicule"
                          value={formData.typeVehicule || "auto"}
                          onValueChange={(value) => handleSelectChange("typeVehicule", value)}
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
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="annee">Année de 1ère mise en circulation</Label>
                        <Select
                          name="annee"
                          value={formData.annee}
                          onValueChange={(value) => handleSelectChange("annee", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez une année" />
                          </SelectTrigger>
                          <SelectContent className="max-h-[300px]">
                            {Array.from({ length: 76 }, (_, i) => (
                              <SelectItem key={i} value={(2025 - i).toString()}>
                                {2025 - i}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="usage">Usage principal</Label>
                        <Select
                          name="usage"
                          value={formData.usage}
                          onValueChange={(value) => handleSelectChange("usage", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez un usage" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="prive">Privé</SelectItem>
                            <SelectItem value="trajet-travail">Trajet domicile-travail</SelectItem>
                            <SelectItem value="professionnel">Professionnel</SelectItem>
                            <SelectItem value="tous">Tous déplacements</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Formule souhaitée</Label>
                      <RadioGroup
                        name="formule"
                        value={formData.formule}
                        onValueChange={(value) => handleSelectChange("formule", value)}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="tiers" id="tiers" />
                          <Label htmlFor="tiers" className="font-normal">
                            Tiers
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="intermediaire" id="intermediaire" />
                          <Label htmlFor="intermediaire" className="font-normal">
                            Intermédiaire
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="tous-risques" id="tous-risques" />
                          <Label htmlFor="tous-risques" className="font-normal">
                            Tous Risques
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="indecis" id="indecis" />
                          <Label htmlFor="indecis" className="font-normal">
                            Je ne sais pas encore
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </TabsContent>

                  <TabsContent value="habitation" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="type-logement">Type de logement</Label>
                        <Select
                          name="typeLogement"
                          value={formData.typeLogement}
                          onValueChange={(value) => handleSelectChange("typeLogement", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez un type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="appartement">Appartement</SelectItem>
                            <SelectItem value="maison">Maison</SelectItem>
                            <SelectItem value="loft">Loft/Studio</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="statut">Statut</Label>
                        <Select
                          name="statut"
                          value={formData.statut}
                          onValueChange={(value) => handleSelectChange("statut", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez un statut" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="proprietaire">Propriétaire</SelectItem>
                            <SelectItem value="locataire">Locataire</SelectItem>
                            <SelectItem value="colocataire">Colocataire</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="surface">Surface (m²)</Label>
                        <Input
                          id="surface"
                          name="surface"
                          type="number"
                          placeholder="Surface en m²"
                          value={formData.surface}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pieces">Nombre de pièces</Label>
                        <Select
                          name="pieces"
                          value={formData.pieces}
                          onValueChange={(value) => handleSelectChange("pieces", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 10 }, (_, i) => (
                              <SelectItem key={i} value={(i + 1).toString()}>
                                {i + 1}
                              </SelectItem>
                            ))}
                            <SelectItem value="10+">10+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="codePostal">Code postal</Label>
                      <Input
                        id="codePostal"
                        name="codePostal"
                        placeholder="Votre code postal"
                        value={formData.codePostal || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="sante" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nb-personnes">Nombre de personnes à assurer</Label>
                        <Select
                          name="nbPersonnes"
                          value={formData.nbPersonnes}
                          onValueChange={(value) => handleSelectChange("nbPersonnes", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 personne</SelectItem>
                            <SelectItem value="2">2 personnes</SelectItem>
                            <SelectItem value="3">3 personnes</SelectItem>
                            <SelectItem value="4">4 personnes</SelectItem>
                            <SelectItem value="5+">5 personnes ou plus</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="regime">Régime actuel</Label>
                        <Select
                          name="regime"
                          value={formData.regime}
                          onValueChange={(value) => handleSelectChange("regime", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez un régime" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">Régime général</SelectItem>
                            <SelectItem value="tns">TNS / Indépendant</SelectItem>
                            <SelectItem value="agricole">Régime agricole</SelectItem>
                            <SelectItem value="etudiant">Étudiant</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Niveau de couverture souhaité</Label>
                      <RadioGroup
                        name="couverture"
                        value={formData.couverture}
                        onValueChange={(value) => handleSelectChange("couverture", value)}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="economique" id="economique" />
                          <Label htmlFor="economique" className="font-normal">
                            Économique
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="standard" id="standard" />
                          <Label htmlFor="standard" className="font-normal">
                            Standard
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="premium" id="premium" />
                          <Label htmlFor="premium" className="font-normal">
                            Premium
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="indecis-sante" id="indecis-sante" />
                          <Label htmlFor="indecis-sante" className="font-normal">
                            Je ne sais pas encore
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </TabsContent>

                  <TabsContent value="vie" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="age">Âge</Label>
                        <Input
                          id="age"
                          name="age"
                          type="number"
                          placeholder="Votre âge"
                          value={formData.age}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="fumeur">Fumeur</Label>
                        <Select
                          name="fumeur"
                          value={formData.fumeur}
                          onValueChange={(value) => handleSelectChange("fumeur", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="non">Non</SelectItem>
                            <SelectItem value="oui">Oui</SelectItem>
                            <SelectItem value="ancien">Ancien fumeur</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="capital">Capital souhaité (€)</Label>
                      <Select
                        name="capital"
                        value={formData.capital}
                        onValueChange={(value) => handleSelectChange("capital", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un montant" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="50000">50 000 €</SelectItem>
                          <SelectItem value="100000">100 000 €</SelectItem>
                          <SelectItem value="150000">150 000 €</SelectItem>
                          <SelectItem value="200000">200 000 €</SelectItem>
                          <SelectItem value="250000">250 000 €</SelectItem>
                          <SelectItem value="300000">300 000 €</SelectItem>
                          <SelectItem value="autre">Autre montant</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Motif de l'assurance</Label>
                      <RadioGroup
                        name="motif"
                        value={formData.motif}
                        onValueChange={(value) => handleSelectChange("motif", value)}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="pret" id="pret" />
                          <Label htmlFor="pret" className="font-normal">
                            Garantie de prêt
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="famille" id="famille" />
                          <Label htmlFor="famille" className="font-normal">
                            Protection de la famille
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="epargne" id="epargne" />
                          <Label htmlFor="epargne" className="font-normal">
                            Épargne/Investissement
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="autre-motif" id="autre-motif" />
                          <Label htmlFor="autre-motif" className="font-normal">
                            Autre motif
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Section commune pour les coordonnées */}
                <div className="pt-4 border-t">
                  <h3 className="text-lg font-semibold mb-4">Vos coordonnées</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telephone">Téléphone</Label>
                      <Input
                        id="telephone"
                        name="telephone"
                        placeholder="Votre numéro de téléphone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Message d'erreur */}
                {submitError && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{submitError}</div>
                )}

                {/* Bouton de soumission */}
                <div className="pt-8 border-t">
                  <div className="bg-alpha-blue/5 p-6 rounded-lg border border-alpha-blue/20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-alpha-blue">Prêt à obtenir votre devis personnalisé ?</h3>
                        <p className="text-muted-foreground">Recevez une proposition adaptée à vos besoins sous 24h.</p>
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto bg-alpha-blue hover:bg-alpha-blue-light text-white text-lg font-semibold px-6 py-3 rounded-md disabled:opacity-70"
                      >
                        {isSubmitting ? "Envoi en cours..." : "Demander mon devis"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
