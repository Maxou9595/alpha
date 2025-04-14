import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Alpha Assurance</h3>
            <p className="text-muted-foreground mb-4">
              Votre partenaire de confiance pour tous vos besoins en assurance.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61574648715598"
                className="text-muted-foreground hover:text-blue-600 transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Nos solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/assurance-auto" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Assurance Auto
                </Link>
              </li>
              <li>
                <Link
                  href="/assurance-habitation"
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  Assurance Habitation
                </Link>
              </li>
              <li>
                <Link href="/assurance-sante" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Assurance Santé
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Assurance Vie
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Assurance Professionnelle
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Informations</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/a-propos" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  À propos de nous
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions-generales"
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  Conditions générales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">
                40 rue Maria Visseaux
                <br />
                08110 Carignan, France
              </li>
              <li className="text-muted-foreground">01 23 45 67 89</li>
              <li className="text-muted-foreground">contact@alpha-assurance.fr</li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Formulaire de contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Alpha Assurance. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
