"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, AlertCircle, MapPin, Phone, Mail, Clock } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ContactPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)
  const [countdown, setCountdown] = useState(5)
  const [isPreview, setIsPreview] = useState(false)
  const [forcePreviewMode, setForcePreviewMode] = useState(false)
  const [showActivationInfo, setShowActivationInfo] = useState(false)

  // Détection de l'environnement de prévisualisation
  useEffect(() => {
    // Vérifier si nous sommes en prévisualisation (Vercel Preview)
    const isPreviewEnv =
      typeof window !== "undefined" &&
      (window.location.hostname.includes("vercel.app") ||
        window.location.hostname.includes("localhost") ||
        window.location.hostname.includes("127.0.0.1") ||
        window.location.hostname === "")

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
        const errorMessage = data.message || ""
        if (errorMessage.includes("Activation") || errorMessage.includes("activation")) {
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

  // Si le formulaire a été soumis avec succès, afficher le message de succès
  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Message envoyé avec succès !</h2>
          <p className="text-gray-600 mb-6">
            Merci pour votre message. Nous vous recontacterons dans les plus brefs délais.
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-xl mb-8">
              Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <div>
            {(isPreview || forcePreviewMode) && (
              <Alert className="mb-6 bg-blue-50 border-blue-200">
                <AlertCircle className="h-4 w-4 text-blue-600" />
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

            <Card>
              <CardHeader className="bg-alpha-black text-white rounded-t-lg">
                <CardTitle>Formulaire de contact</CardTitle>
                <CardDescription className="text-gray-300">
                  Remplissez ce formulaire pour nous envoyer un message
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Champs cachés pour FormSubmit */}
                  <input type="hidden" name="_subject" value="Nouveau message de contact - Alpha Assurance" />
                  <input type="hidden" name="_next" value="https://alpha-assurance.fr" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nom">Nom complet</Label>
                      <Input id="nom" name="nom" placeholder="Votre nom" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="votre@email.com" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="telephone">Téléphone</Label>
                      <Input id="telephone" name="telephone" placeholder="Votre numéro de téléphone" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sujet">Sujet</Label>
                      <Select name="sujet">
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un sujet" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="devis">Demande de devis</SelectItem>
                          <SelectItem value="information">Demande d'information</SelectItem>
                          <SelectItem value="reclamation">Réclamation</SelectItem>
                          <SelectItem value="sinistre">Déclaration de sinistre</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Votre message"
                      rows={6}
                      className="resize-none"
                      required
                    />
                  </div>

                  {/* Message d'erreur */}
                  {submitError && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{submitError}</div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-alpha-blue hover:bg-alpha-blue-light text-white font-semibold py-3 px-6 rounded-md disabled:opacity-70"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-alpha-blue">Nos coordonnées</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-alpha-blue/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-alpha-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Adresse</h3>
                    <p className="text-muted-foreground">
                      40 rue Maria Visseaux
                      <br />
                      08110 Carignan, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-alpha-blue/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-alpha-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Téléphone</h3>
                    <p className="text-muted-foreground">01 23 45 67 89</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Du lundi au vendredi de 9h à 12h et de 13h à 18h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-alpha-blue/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-alpha-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">contact@alpha-assurance.fr</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Nous vous répondons dans un délai de 24 à 48h ouvrées
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-alpha-blue/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-alpha-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Horaires d'ouverture</h3>
                    <div className="text-muted-foreground space-y-1 mt-1">
                      <div className="flex justify-between">
                        <span>Lundi - Vendredi:</span>
                        <span>9h00 - 12h00, 13h00 - 18h00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Samedi - Dimanche:</span>
                        <span>Fermé</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <h3 className="font-semibold text-lg mb-4">Besoin d'une assistance immédiate ?</h3>
              <p className="text-muted-foreground mb-4">
                Pour toute urgence ou déclaration de sinistre, contactez notre service client par téléphone.
              </p>
              <a
                href="tel:0123456789"
                className="inline-flex items-center gap-2 bg-alpha-blue hover:bg-alpha-blue-light text-white px-4 py-2 rounded-md transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>01 23 45 67 89</span>
              </a>
            </div>
          </div>
        </div>

        {/* Carte ou indications */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Comment nous trouver</h2>
          <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2587.8889269460484!2d5.1603!3d49.6267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ea6f8f8b8f8f8f%3A0x8f8f8f8f8f8f8f8f!2s40%20Rue%20Maria%20Visseaux%2C%2008110%20Carignan!5e0!3m2!1sfr!2sfr!4v1650000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Alpha Assurance"
              aria-label="Carte montrant l'emplacement d'Alpha Assurance"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
