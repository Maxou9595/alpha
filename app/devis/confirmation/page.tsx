"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ConfirmationPage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/")
    }, 5000)

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [router])

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-alpha-gradient opacity-95" />
        <div className="relative container py-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Demande de devis envoyée</h1>
            <p className="text-xl mb-8">Merci pour votre confiance en Alpha Assurance.</p>
          </div>
        </div>
      </section>

      {/* Confirmation Section */}
      <section className="container">
        <div className="max-w-2xl mx-auto">
          <Card className="border-green-500">
            <CardContent className="pt-6 text-center">
              <div className="mx-auto bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Demande envoyée avec succès !</h2>
              <p className="text-muted-foreground mb-6">
                Merci pour votre demande de devis. Un de nos conseillers vous contactera dans les plus brefs délais.
              </p>
              <div className="mb-8 p-4 bg-alpha-blue/5 rounded-lg border border-alpha-blue/20">
                <p className="text-lg">
                  Vous serez redirigé vers la page d'accueil dans{" "}
                  <span className="font-bold text-alpha-blue">{countdown}</span> secondes.
                </p>
              </div>
              <div className="flex justify-center gap-4">
                <Button asChild variant="outline">
                  <Link href="/">Retour à l'accueil</Link>
                </Button>
                <Button asChild className="bg-alpha-blue hover:bg-alpha-blue-light">
                  <Link href="/contact">Nous contacter</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
