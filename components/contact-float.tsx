import { Phone } from "lucide-react"

export default function ContactFloat() {
  return (
    <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50">
      <a
        href="tel:0123456789"
        className="flex items-center gap-2 bg-alpha-blue hover:bg-alpha-blue-light text-white px-3 md:px-4 py-2 md:py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        aria-label="Appeler le service client"
      >
        <Phone className="h-4 w-4 md:h-5 md:w-5" />
        <span className="font-medium text-sm md:text-base">01 23 45 67 89</span>
      </a>
    </div>
  )
}
