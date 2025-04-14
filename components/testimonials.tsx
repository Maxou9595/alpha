import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Marie D.",
    content:
      "Alpha Assurance a été d'une aide précieuse lorsque j'ai eu un accident de voiture. Le processus de réclamation était simple et j'ai été remboursée rapidement.",
    rating: 5,
  },
  {
    name: "Thomas M.",
    content:
      "Je suis très satisfait de mon assurance habitation. Le service client est excellent et les tarifs sont très compétitifs par rapport aux autres assureurs.",
    rating: 5,
  },
  {
    name: "Sophie L.",
    content:
      "Mon conseiller chez Alpha Assurance a pris le temps de comprendre mes besoins et m'a proposé une solution d'assurance santé parfaitement adaptée à ma situation.",
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <section className="container py-10 md:py-16">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ce que nos clients disent</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto px-4 md:px-0">
          Découvrez les témoignages de nos clients satisfaits qui nous font confiance pour leur protection.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="h-full">
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="mb-4 text-sm md:text-base">"{testimonial.content}"</p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">{testimonial.name}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
