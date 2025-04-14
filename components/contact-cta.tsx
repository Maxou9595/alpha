import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneCall, Mail, MessageSquare } from "lucide-react"

export default function ContactCTA() {
  return (
    <section className="container py-10 md:py-16 px-4 md:px-6">
      <div className="bg-alpha-gradient rounded-xl p-6 md:p-12 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            Besoin d'aide pour choisir la bonne assurance?
          </h2>
          <p className="text-blue-100 mb-6 md:mb-8 text-sm md:text-lg">
            Nos conseillers experts sont là pour vous aider à trouver la solution qui correspond parfaitement à vos
            besoins.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 md:mb-8">
            <div className="bg-alpha-black-light p-4 md:p-6 rounded-lg flex flex-col items-center">
              <PhoneCall className="h-6 w-6 md:h-8 md:w-8 mb-2 md:mb-3" />
              <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Appelez-nous</h3>
              <a
                href="tel:0123456789"
                className="text-blue-100 text-sm md:text-base hover:text-white transition-colors"
              >
                01 23 45 67 89
              </a>
            </div>

            <div className="bg-alpha-black-light p-4 md:p-6 rounded-lg flex flex-col items-center">
              <Mail className="h-6 w-6 md:h-8 md:w-8 mb-2 md:mb-3" />
              <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Envoyez-nous un email</h3>
              <a
                href="mailto:contact@alpha-assurance.fr"
                className="text-blue-100 text-sm md:text-base hover:text-white transition-colors"
              >
                contact@alpha-assurance.fr
              </a>
            </div>

            <div className="bg-alpha-black-light p-4 md:p-6 rounded-lg flex flex-col items-center">
              <MessageSquare className="h-6 w-6 md:h-8 md:w-8 mb-2 md:mb-3" />
              <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Chat en direct</h3>
              <p className="text-blue-100 text-sm md:text-base">Disponible 8h-20h</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="default"
                className="bg-white text-alpha-blue hover:bg-gray-100 font-semibold w-full"
              >
                Nous contacter
              </Button>
            </Link>
            <Link href="/devis" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-white/10 hover:bg-white/20 hover:border-white font-semibold w-full"
              >
                Demander un devis
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
