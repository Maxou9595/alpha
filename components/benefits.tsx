import { CheckCircle, Clock, HeartHandshake, ShieldCheck } from "lucide-react"

const benefits = [
  {
    title: "Couverture Complète",
    description: "Nos polices d'assurance offrent une protection complète pour tous les aspects de votre vie.",
    icon: ShieldCheck,
  },
  {
    title: "Service Rapide",
    description: "Traitement rapide des réclamations et assistance 24/7 pour répondre à vos besoins.",
    icon: Clock,
  },
  {
    title: "Tarifs Compétitifs",
    description: "Des prix justes et transparents avec des options flexibles adaptées à votre budget.",
    icon: CheckCircle,
  },
  {
    title: "Accompagnement Personnalisé",
    description: "Un conseiller dédié pour vous guider et vous aider à chaque étape de votre parcours.",
    icon: HeartHandshake,
  },
]

export default function Benefits() {
  return (
    <section className="bg-gray-50 py-10 md:py-16">
      <div className="container">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Pourquoi Choisir Alpha Assurance</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4 md:px-0">
            Nous nous engageons à offrir le meilleur service et la meilleure protection à nos clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="bg-blue-600 rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-4">
                <benefit.icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
