import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import {
  ChevronRight,
  Search,
  ArrowRight,
  ExternalLink,
  Info,
  Shield,
  Home,
  Heart,
  Briefcase,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "FAQ Assurance | Questions Fréquentes sur l'Assurance Auto, Habitation, Santé | Alpha Assurance",
  description:
    "Centre d'aide complet avec réponses détaillées à toutes vos questions sur l'assurance auto, habitation, santé et vie. Conseils d'experts et informations pratiques.",
  keywords:
    "FAQ assurance, questions fréquentes assurance, assurance auto questions, assurance habitation questions, assurance santé questions, assurance vie questions, conseils assurance, guide assurance, comparatif assurance, meilleure assurance, prix assurance, devis assurance, économiser assurance",
  alternates: {
    canonical: "https://alpha-assurance.fr/faq",
  },
  openGraph: {
    title: "FAQ Assurance | Questions Fréquentes sur l'Assurance | Alpha Assurance",
    description:
      "Centre d'aide complet avec réponses détaillées à toutes vos questions sur l'assurance auto, habitation, santé et vie. Conseils d'experts et informations pratiques.",
    url: "https://alpha-assurance.fr/faq",
    type: "website",
    images: [
      {
        url: "https://alpha-assurance.fr/images/og-faq.jpg",
        width: 1200,
        height: 630,
        alt: "Alpha Assurance FAQ",
      },
    ],
  },
}

export default function FAQPage() {
  // Données pour le tableau comparatif des formules d'assurance auto
  const autoInsuranceComparison = [
    { feature: "Responsabilité civile", tiers: "✓", intermediaire: "✓", tousRisques: "✓" },
    { feature: "Défense pénale et recours", tiers: "✓", intermediaire: "✓", tousRisques: "✓" },
    { feature: "Assistance en cas d'accident", tiers: "✓", intermediaire: "✓", tousRisques: "✓" },
    { feature: "Vol et incendie", tiers: "✗", intermediaire: "✓", tousRisques: "✓" },
    { feature: "Bris de glace", tiers: "✗", intermediaire: "✓", tousRisques: "✓" },
    { feature: "Dommages tous accidents", tiers: "✗", intermediaire: "✗", tousRisques: "✓" },
    { feature: "Garantie du conducteur", tiers: "Option", intermediaire: "Option", tousRisques: "✓" },
    { feature: "Véhicule de remplacement", tiers: "✗", intermediaire: "Option", tousRisques: "✓" },
  ]

  // Données pour le tableau comparatif des formules d'assurance habitation
  const homeInsuranceComparison = [
    { feature: "Responsabilité civile", essentielle: "✓", confort: "✓", premium: "✓" },
    { feature: "Dégâts des eaux", essentielle: "✓", confort: "✓", premium: "✓" },
    { feature: "Incendie et explosion", essentielle: "✓", confort: "✓", premium: "✓" },
    { feature: "Vol et vandalisme", essentielle: "Limité", confort: "✓", premium: "✓" },
    { feature: "Bris de glace", essentielle: "Option", confort: "✓", premium: "✓" },
    { feature: "Catastrophes naturelles", essentielle: "✓", confort: "✓", premium: "✓" },
    { feature: "Dommages électriques", essentielle: "✗", confort: "✓", premium: "✓" },
    { feature: "Objets de valeur", essentielle: "✗", confort: "Limité", premium: "✓" },
    { feature: "Assistance 24/7", essentielle: "✓", confort: "✓", premium: "✓" },
    { feature: "Relogement temporaire", essentielle: "30 jours", confort: "60 jours", premium: "90 jours" },
  ]

  // Données pour le tableau comparatif des formules d'assurance santé
  const healthInsuranceComparison = [
    { feature: "Consultations généralistes", basique: "100% BR", medium: "125% BR", premium: "200% BR" },
    { feature: "Consultations spécialistes", basique: "100% BR", medium: "150% BR", premium: "250% BR" },
    { feature: "Hospitalisation", basique: "100% BR", medium: "150% BR", premium: "Frais réels" },
    { feature: "Pharmacie", basique: "100% BR", medium: "100% BR", premium: "100% BR" },
    { feature: "Optique", basique: "100€", medium: "200€", premium: "350€" },
    { feature: "Dentaire", basique: "125% BR", medium: "200% BR", premium: "300% BR" },
    { feature: "Médecine douce", basique: "✗", medium: "3x50€/an", premium: "5x80€/an" },
    { feature: "Prévention", basique: "Basique", medium: "Renforcée", premium: "Complète" },
  ]

  // Données FAQ structurées pour Schema.org
  const faqSchemaData = [
    // Auto
    {
      "@type": "Question",
      name: "Comment fonctionne le bonus-malus en assurance auto ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le bonus-malus est un coefficient qui évolue en fonction de votre sinistralité. Sans accident responsable pendant un an, votre coefficient est réduit de 5% (bonus). En cas d'accident responsable, votre coefficient augmente de 25% (malus). Le bonus maximum est de 50% (coefficient 0,50) et le malus peut aller jusqu'à 3,5 fois le tarif de base (coefficient 3,50).",
      },
    },
    {
      "@type": "Question",
      name: "Quels documents fournir pour souscrire une assurance auto ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour souscrire une assurance auto, vous devez généralement fournir : la carte grise du véhicule, votre permis de conduire, un relevé d'information de votre précédent assureur, un RIB pour le prélèvement des cotisations et une pièce d'identité.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la différence entre l'assurance au tiers et tous risques ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'assurance au tiers (responsabilité civile) couvre uniquement les dommages que vous causez à autrui. L'assurance tous risques couvre en plus les dommages subis par votre propre véhicule, même en cas d'accident responsable, ainsi que le vol, l'incendie et les bris de glace.",
      },
    },
    {
      "@type": "Question",
      name: "Comment déclarer un sinistre auto ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour déclarer un sinistre auto, contactez votre assureur dans les 5 jours ouvrés suivant l'accident (2 jours pour un vol). Vous pouvez le faire par téléphone, via votre espace client en ligne ou par email. Fournissez le constat amiable rempli et signé, des photos des dommages et tout autre document demandé par votre assureur.",
      },
    },
    // Habitation
    {
      "@type": "Question",
      name: "L'assurance habitation est-elle obligatoire pour les locataires et propriétaires ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'assurance habitation est obligatoire pour les locataires (loi Alur de 2014). Pour les propriétaires non-occupants, elle est également obligatoire si le logement est situé dans une copropriété. Pour les propriétaires occupants, elle n'est pas obligatoire mais fortement recommandée pour protéger votre patrimoine.",
      },
    },
    {
      "@type": "Question",
      name: "Comment est calculé le montant de ma prime d'assurance habitation ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le montant de votre prime d'assurance habitation dépend de plusieurs facteurs : type de logement (appartement, maison), surface habitable, localisation géographique, niveau de garanties choisi, valeur des biens à assurer et antécédents de sinistres.",
      },
    },
    {
      "@type": "Question",
      name: "Que faire en cas de dégât des eaux ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En cas de dégât des eaux, commencez par couper l'arrivée d'eau et limiter les dommages. Prévenez votre assureur dans les 5 jours ouvrés et remplissez un constat de dégât des eaux avec le voisin concerné si nécessaire. Prenez des photos des dommages et conservez les factures des biens endommagés pour faciliter l'indemnisation.",
      },
    },
    // Santé
    {
      "@type": "Question",
      name: "Qu'est-ce que le 100% santé et quels soins sont concernés ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le 100% santé est une réforme qui permet à tous les Français d'accéder à des soins de qualité pris en charge à 100% dans les domaines de l'optique (lunettes), du dentaire (prothèses) et de l'audiologie (aides auditives). Les assureurs complémentaires santé doivent obligatoirement prendre en charge le reste à charge des équipements 100% santé, après remboursement de l'Assurance Maladie.",
      },
    },
    {
      "@type": "Question",
      name: "Qu'est-ce que le délai de carence en assurance santé ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le délai de carence est une période pendant laquelle vous cotisez à votre assurance santé mais ne pouvez pas encore bénéficier de certaines garanties. Ce délai peut varier selon les contrats et les garanties. Chez Alpha Assurance, nous proposons des contrats sans délai de carence pour la plupart des garanties.",
      },
    },
    {
      "@type": "Question",
      name: "Comment choisir la bonne mutuelle santé ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour choisir la bonne mutuelle santé, analysez vos besoins médicaux spécifiques (consultations fréquentes, lunettes, soins dentaires), comparez les niveaux de remboursement pour ces postes, vérifiez les plafonds annuels, le réseau de soins, les services inclus (tiers payant, téléconsultation) et le rapport qualité/prix des différentes offres.",
      },
    },
    // Vie
    {
      "@type": "Question",
      name: "Quels sont les avantages fiscaux de l'assurance vie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'assurance vie offre plusieurs avantages fiscaux : exonération d'impôt sur les plus-values après 8 ans (dans la limite d'un abattement annuel), transmission avantageuse aux bénéficiaires en cas de décès (exonération jusqu'à 152 500 € par bénéficiaire pour les versements effectués avant 70 ans), absence de droits de succession dans la plupart des cas, et pas d'impôt sur la fortune immobilière (IFI).",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la différence entre les fonds en euros et les unités de compte ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les fonds en euros offrent une garantie du capital investi et un rendement modéré mais sécurisé. Les unités de compte (UC) sont investies sur les marchés financiers sans garantie du capital, mais avec un potentiel de rendement plus élevé. Une stratégie d'investissement équilibrée combine souvent les deux selon votre profil de risque et vos objectifs.",
      },
    },
    // Général
    {
      "@type": "Question",
      name: "Comment résilier mon contrat d'assurance auto ou habitation ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depuis la loi Hamon et la loi Chatel, vous pouvez résilier votre contrat d'assurance auto ou habitation à tout moment après la première année de souscription. Pour cela, envoyez une lettre recommandée avec accusé de réception à votre assureur ou utilisez notre formulaire de résiliation en ligne. Votre nouvelle assurance peut également s'occuper des démarches de résiliation pour vous.",
      },
    },
    {
      "@type": "Question",
      name: "Comment fonctionne la franchise en assurance auto et habitation ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La franchise est la somme qui reste à votre charge lors d'un sinistre. Elle peut être absolue (montant fixe déduit de l'indemnisation), relative (seuil en dessous duquel l'assureur n'intervient pas) ou proportionnelle (pourcentage du montant des dommages). Plus la franchise est élevée, plus votre prime d'assurance sera basse, mais plus vous devrez payer en cas de sinistre.",
      },
    },
    {
      "@type": "Question",
      name: "Comment économiser sur mes assurances ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour économiser sur vos assurances, comparez régulièrement les offres, regroupez vos contrats chez un même assureur pour bénéficier de remises, adaptez vos garanties à vos besoins réels, augmentez vos franchises si possible, et profitez des avantages fidélité. Pensez aussi à signaler à votre assureur tout changement qui pourrait réduire votre prime (système d'alarme, changement de véhicule, etc.).",
      },
    },
  ]

  return (
    <>
      {/* Balisage Schema.org amélioré pour FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqSchemaData,
          }),
        }}
      />

      {/* Balisage Schema.org pour BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Accueil",
                item: "https://alpha-assurance.fr",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "FAQ",
                item: "https://alpha-assurance.fr/faq",
              },
            ],
          }),
        }}
      />

      {/* Hero Section avec image de fond */}
      <div className="bg-alpha-gradient py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Fond FAQ Alpha Assurance"
            width={1600}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Centre d'Aide et FAQ</h1>
            <p className="text-lg md:text-xl opacity-90">
              Trouvez des réponses détaillées à toutes vos questions sur nos produits et services d'assurance
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12 md:py-16">
        {/* Fil d'Ariane amélioré pour SEO */}
        <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
          <ol
            className="inline-flex items-center space-x-1 md:space-x-3"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            <li
              className="inline-flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <Link href="/" className="text-gray-700 hover:text-alpha-blue" itemProp="item">
                <span itemProp="name">Accueil</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span
                  className="ml-1 text-gray-500 md:ml-2 font-medium"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <span itemProp="name">FAQ</span>
                  <meta itemProp="position" content="2" />
                </span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Table des matières pour une meilleure navigation */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-xl font-bold mb-4">Dans cette page :</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <li>
              <a href="#assurance-auto" className="flex items-center text-alpha-blue hover:underline">
                <Shield className="h-4 w-4 mr-2" />
                Assurance Auto
              </a>
              <ul className="ml-6 mt-1 space-y-1">
                <li>
                  <a href="#bonus-malus" className="text-sm text-gray-600 hover:text-alpha-blue hover:underline">
                    Système Bonus-Malus
                  </a>
                </li>
                <li>
                  <a href="#souscription-auto" className="text-sm text-gray-600 hover:text-alpha-blue hover:underline">
                    Souscription Auto
                  </a>
                </li>
                <li>
                  <a href="#sinistres-auto" className="text-sm text-gray-600 hover:text-alpha-blue hover:underline">
                    Sinistres Auto
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#assurance-habitation" className="flex items-center text-alpha-blue hover:underline">
                <Home className="h-4 w-4 mr-2" />
                Assurance Habitation
              </a>
              <ul className="ml-6 mt-1 space-y-1">
                <li>
                  <a
                    href="#obligation-habitation"
                    className="text-sm text-gray-600 hover:text-alpha-blue hover:underline"
                  >
                    Obligations
                  </a>
                </li>
                <li>
                  <a
                    href="#garanties-habitation"
                    className="text-sm text-gray-600 hover:text-alpha-blue hover:underline"
                  >
                    Garanties
                  </a>
                </li>
                <li>
                  <a
                    href="#sinistres-habitation"
                    className="text-sm text-gray-600 hover:text-alpha-blue hover:underline"
                  >
                    Sinistres
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#assurance-sante" className="flex items-center text-alpha-blue hover:underline">
                <Heart className="h-4 w-4 mr-2" />
                Assurance Santé
              </a>
              <ul className="ml-6 mt-1 space-y-1">
                <li>
                  <a href="#100-sante" className="text-sm text-gray-600 hover:text-alpha-blue hover:underline">
                    100% Santé
                  </a>
                </li>
                <li>
                  <a href="#remboursements" className="text-sm text-gray-600 hover:text-alpha-blue hover:underline">
                    Remboursements
                  </a>
                </li>
                <li>
                  <a href="#delai-carence" className="text-sm text-gray-600 hover:text-alpha-blue hover:underline">
                    Délai de carence
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#assurance-vie" className="flex items-center text-alpha-blue hover:underline">
                <ArrowRight className="h-4 w-4 mr-2" />
                Assurance Vie
              </a>
              <ul className="ml-6 mt-1 space-y-1">
                <li>
                  <a href="#avantages-fiscaux" className="text-sm text-gray-600 hover:text-alpha-blue hover:underline">
                    Avantages fiscaux
                  </a>
                </li>
                <li>
                  <a href="#types-contrats" className="text-sm text-gray-600 hover:text-alpha-blue hover:underline">
                    Types de contrats
                  </a>
                </li>
                <li>
                  <a href="#beneficiaires" className="text-sm text-gray-600 hover:text-alpha-blue hover:underline">
                    Bénéficiaires
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#assurance-pro" className="flex items-center text-alpha-blue hover:underline">
                <Briefcase className="h-4 w-4 mr-2" />
                Assurance Professionnelle
              </a>
              <ul className="ml-6 mt-1 space-y-1">
                <li>
                  <a href="#rc-pro" className="text-sm text-gray-600 hover:text-alpha-blue hover:underline">
                    RC Professionnelle
                  </a>
                </li>
                <li>
                  <a href="#multirisque-pro" className="text-sm text-gray-600 hover:text-alpha-blue hover:underline">
                    Multirisque Pro
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#questions-generales" className="flex items-center text-alpha-blue hover:underline">
                <HelpCircle className="h-4 w-4 mr-2" />
                Questions Générales
              </a>
              <ul className="ml-6 mt-1 space-y-1">
                <li>
                  <a href="#resiliation" className="text-sm text-gray-600 hover:text-alpha-blue hover:underline">
                    Résiliation
                  </a>
                </li>
                <li>
                  <a href="#franchise" className="text-sm text-gray-600 hover:text-alpha-blue hover:underline">
                    Franchise
                  </a>
                </li>
                <li>
                  <a href="#economiser" className="text-sm text-gray-600 hover:text-alpha-blue hover:underline">
                    Économiser
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Recherche FAQ améliorée */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Rechercher une question ou un mot-clé..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-alpha-blue focus:border-transparent"
              aria-label="Rechercher dans la FAQ"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-alpha-blue text-white px-4 py-1 rounded-md hover:bg-alpha-blue-light transition-colors">
              Rechercher
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Exemples : bonus-malus, franchise, résiliation, sinistre, 100% santé, avantages fiscaux...
          </p>
        </div>

        {/* Onglets de catégories pour une meilleure UX */}
        <Tabs defaultValue="auto" className="mb-12">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-6 mb-8">
            <TabsTrigger value="auto" className="data-[state=active]:bg-alpha-blue data-[state=active]:text-white">
              Auto
            </TabsTrigger>
            <TabsTrigger
              value="habitation"
              className="data-[state=active]:bg-alpha-blue data-[state=active]:text-white"
            >
              Habitation
            </TabsTrigger>
            <TabsTrigger value="sante" className="data-[state=active]:bg-alpha-blue data-[state=active]:text-white">
              Santé
            </TabsTrigger>
            <TabsTrigger value="vie" className="data-[state=active]:bg-alpha-blue data-[state=active]:text-white">
              Vie
            </TabsTrigger>
            <TabsTrigger value="pro" className="data-[state=active]:bg-alpha-blue data-[state=active]:text-white">
              Pro
            </TabsTrigger>
            <TabsTrigger value="general" className="data-[state=active]:bg-alpha-blue data-[state=active]:text-white">
              Général
            </TabsTrigger>
          </TabsList>

          <TabsContent value="auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <a href="#bonus-malus" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-colors">
                <h3 className="font-bold mb-2">Bonus-Malus</h3>
                <p className="text-sm text-gray-600">
                  Comprendre le système de bonus-malus et son impact sur votre prime
                </p>
              </a>
              <a href="#souscription-auto" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-colors">
                <h3 className="font-bold mb-2">Souscription</h3>
                <p className="text-sm text-gray-600">Documents et démarches pour souscrire une assurance auto</p>
              </a>
              <a href="#sinistres-auto" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-colors">
                <h3 className="font-bold mb-2">Sinistres</h3>
                <p className="text-sm text-gray-600">Procédure à suivre en cas d'accident ou de sinistre</p>
              </a>
            </div>
            <p>
              Consultez toutes nos{" "}
              <a href="#assurance-auto" className="text-alpha-blue hover:underline font-medium">
                questions sur l'assurance auto
              </a>{" "}
              ci-dessous.
            </p>
          </TabsContent>

          <TabsContent value="habitation">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <a
                href="#obligation-habitation"
                className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-colors"
              >
                <h3 className="font-bold mb-2">Obligations</h3>
                <p className="text-sm text-gray-600">Obligations légales pour les locataires et propriétaires</p>
              </a>
              <a href="#garanties-habitation" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-colors">
                <h3 className="font-bold mb-2">Garanties</h3>
                <p className="text-sm text-gray-600">Les différentes garanties et leur fonctionnement</p>
              </a>
              <a href="#sinistres-habitation" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-colors">
                <h3 className="font-bold mb-2">Sinistres</h3>
                <p className="text-sm text-gray-600">Démarches en cas de dégât des eaux, incendie ou vol</p>
              </a>
            </div>
            <p>
              Consultez toutes nos{" "}
              <a href="#assurance-habitation" className="text-alpha-blue hover:underline font-medium">
                questions sur l'assurance habitation
              </a>{" "}
              ci-dessous.
            </p>
          </TabsContent>

          <TabsContent value="sante">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <a href="#100-sante" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-colors">
                <h3 className="font-bold mb-2">100% Santé</h3>
                <p className="text-sm text-gray-600">Tout savoir sur la réforme 100% santé et ses avantages</p>
              </a>
              <a href="#remboursements" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-colors">
                <h3 className="font-bold mb-2">Remboursements</h3>
                <p className="text-sm text-gray-600">Comprendre les remboursements et le tiers payant</p>
              </a>
              <a href="#delai-carence" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-colors">
                <h3 className="font-bold mb-2">Délai de carence</h3>
                <p className="text-sm text-gray-600">Fonctionnement des délais de carence en assurance santé</p>
              </a>
            </div>
            <p>
              Consultez toutes nos{" "}
              <a href="#assurance-sante" className="text-alpha-blue hover:underline font-medium">
                questions sur l'assurance santé
              </a>{" "}
              ci-dessous.
            </p>
          </TabsContent>

          <TabsContent value="vie">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <a href="#avantages-fiscaux" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-colors">
                <h3 className="font-bold mb-2">Avantages fiscaux</h3>
                <p className="text-sm text-gray-600">Les avantages fiscaux de l'assurance vie</p>
              </a>
              <a href="#types-contrats" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-colors">
                <h3 className="font-bold mb-2">Types de contrats</h3>
                <p className="text-sm text-gray-600">Différences entre contrats en euros et unités de compte</p>
              </a>
              <a href="#beneficiaires" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-colors">
                <h3 className="font-bold mb-2">Bénéficiaires</h3>
                <p className="text-sm text-gray-600">Comment choisir et désigner les bénéficiaires</p>
              </a>
            </div>
            <p>
              Consultez toutes nos{" "}
              <a href="#assurance-vie" className="text-alpha-blue hover:underline font-medium">
                questions sur l'assurance vie
              </a>{" "}
              ci-dessous.
            </p>
          </TabsContent>

          <TabsContent value="pro">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <a href="#rc-pro" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-colors">
                <h3 className="font-bold mb-2">RC Professionnelle</h3>
                <p className="text-sm text-gray-600">Protégez votre activité contre les risques professionnels</p>
              </a>
              <a href="#multirisque-pro" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-colors">
                <h3 className="font-bold mb-2">Multirisque Pro</h3>
                <p className="text-sm text-gray-600">Protection complète pour vos locaux et équipements</p>
              </a>
              <a
                href="#protection-juridique-pro"
                className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-colors"
              >
                <h3 className="font-bold mb-2">Protection juridique</h3>
                <p className="text-sm text-gray-600">Défendez vos droits et intérêts professionnels</p>
              </a>
            </div>
            <p>
              Consultez toutes nos{" "}
              <a href="#assurance-pro" className="text-alpha-blue hover:underline font-medium">
                questions sur l'assurance professionnelle
              </a>{" "}
              ci-dessous.
            </p>
          </TabsContent>

          <TabsContent value="general">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <a href="#resiliation" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-colors">
                <h3 className="font-bold mb-2">Résiliation</h3>
                <p className="text-sm text-gray-600">Comment résilier un contrat d'assurance</p>
              </a>
              <a href="#franchise" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-colors">
                <h3 className="font-bold mb-2">Franchise</h3>
                <p className="text-sm text-gray-600">Comprendre le fonctionnement des franchises</p>
              </a>
              <a href="#economiser" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-colors">
                <h3 className="font-bold mb-2">Économiser</h3>
                <p className="text-sm text-gray-600">Astuces pour réduire le coût de vos assurances</p>
              </a>
            </div>
            <p>
              Consultez toutes nos{" "}
              <a href="#questions-generales" className="text-alpha-blue hover:underline font-medium">
                questions générales sur l'assurance
              </a>{" "}
              ci-dessous.
            </p>
          </TabsContent>
        </Tabs>

        {/* Section Assurance Auto */}
        <section id="assurance-auto" className="mb-16 scroll-mt-24">
          <div className="flex items-center mb-6">
            <div className="bg-alpha-blue rounded-full p-2 mr-3">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-alpha-blue">Assurance Auto</h2>
          </div>

          <div className="space-y-6">
            {/* Sous-section Bonus-Malus */}
            <div id="bonus-malus" className="scroll-mt-24">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Système Bonus-Malus</h3>

              <div className="border rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-4 text-lg font-medium">
                    <span>Comment fonctionne le bonus-malus en assurance auto ?</span>
                    <span className="ml-2 flex-shrink-0 transition duration-300 group-open:rotate-180">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="p-4 pt-0 border-t">
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="col-span-2">
                        <p className="text-gray-700">
                          Le bonus-malus (ou coefficient de réduction-majoration) est un système qui récompense les bons
                          conducteurs et pénalise ceux qui ont des accidents. Il évolue comme suit :
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                          <li>Sans accident responsable pendant un an, votre coefficient est réduit de 5% (bonus)</li>
                          <li>En cas d'accident responsable, votre coefficient augmente de 25% (malus)</li>
                          <li>Le bonus maximum est de 50% (coefficient 0,50)</li>
                          <li>Le malus peut aller jusqu'à 3,5 fois le tarif de base (coefficient 3,50)</li>
                        </ul>
                        <p className="mt-4 text-gray-700">
                          Par exemple, avec un coefficient de 0,50, vous ne payez que 50% du tarif de base. À l'inverse,
                          avec un coefficient de 1,25 après un accident responsable, vous payez 25% de plus.
                        </p>
                        <p className="mt-4 text-gray-700">
                          <strong>Bon à savoir :</strong> Certains accidents n'impactent pas votre bonus-malus, comme
                          ceux causés par un cas de force majeure ou par un tiers identifié.
                        </p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Évolution du coefficient</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Année 1 (sans accident)</span>
                            <span className="font-medium">1,00 → 0,95</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Année 2 (sans accident)</span>
                            <span className="font-medium">0,95 → 0,90</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Année 3 (avec accident)</span>
                            <span className="font-medium">0,90 → 1,13</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Année 4 (sans accident)</span>
                            <span className="font-medium">1,13 → 1,07</span>
                          </div>
                        </div>
                        <p className="text-xs mt-2 text-gray-500">Source : Article A121-1 du Code des assurances</p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <Link
                        href="/assurance-auto"
                        className="text-alpha-blue hover:underline font-medium flex items-center"
                      >
                        <span>En savoir plus sur notre assurance auto</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                      <a
                        href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006786372/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800 text-sm flex items-center"
                      >
                        <span>Consulter l'article A121-1 du Code des assurances</span>
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </details>
              </div>

              <div className="border rounded-lg overflow-hidden mt-4">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-4 text-lg font-medium">
                    <span>Quelle est la différence entre l'assurance au tiers et tous risques ?</span>
                    <span className="ml-2 flex-shrink-0 transition duration-300 group-open:rotate-180">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="p-4 pt-0 border-t">
                    <div className="mt-4">
                      <p className="text-gray-700">
                        La principale différence entre ces deux formules réside dans l'étendue des garanties :
                      </p>

                      <h4 className="font-semibold mt-4 mb-2">Assurance au tiers (responsabilité civile)</h4>
                      <p className="text-gray-700">C'est l'assurance minimale obligatoire qui couvre uniquement :</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Les dommages que vous causez à autrui (autres véhicules, piétons, bâtiments)</li>
                        <li>Les dommages corporels des passagers de votre véhicule</li>
                        <li>La défense pénale et recours suite à accident</li>
                      </ul>
                      <p className="text-gray-700 mt-2">
                        <strong>Important :</strong> Elle ne couvre pas les dommages subis par votre propre véhicule,
                        même en cas d'accident non responsable si le tiers n'est pas identifié.
                      </p>

                      <h4 className="font-semibold mt-4 mb-2">Assurance tous risques</h4>
                      <p className="text-gray-700">Cette formule complète inclut :</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Toutes les garanties de l'assurance au tiers</li>
                        <li>Les dommages subis par votre propre véhicule, même en cas d'accident responsable</li>
                        <li>Le vol et la tentative de vol</li>
                        <li>L'incendie et les événements climatiques</li>
                        <li>Le bris de glace</li>
                        <li>Les catastrophes naturelles et technologiques</li>
                        <li>Souvent, une garantie du conducteur renforcée</li>
                      </ul>

                      <div className="bg-blue-50 p-4 rounded-lg mt-4">
                        <h4 className="font-semibold mb-2">Quand choisir quelle formule ?</h4>
                        <p className="text-sm text-gray-700">
                          <strong>Assurance au tiers recommandée si :</strong> votre véhicule est ancien (plus de 8
                          ans), de faible valeur, ou si vous avez un petit budget.
                        </p>
                        <p className="text-sm text-gray-700 mt-2">
                          <strong>Assurance tous risques recommandée si :</strong> votre véhicule est récent ou de
                          valeur importante, en leasing/crédit, ou si vous souhaitez une protection maximale.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link
                        href="/assurance-auto"
                        className="text-alpha-blue hover:underline font-medium flex items-center"
                      >
                        <span>Comparer nos formules d'assurance auto</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Sous-section Souscription */}
            <div id="souscription-auto" className="scroll-mt-24">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Souscription et Documents</h3>

              <div className="border rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-4 text-lg font-medium">
                    <span>Quels documents fournir pour souscrire une assurance auto ?</span>
                    <span className="ml-2 flex-shrink-0 transition duration-300 group-open:rotate-180">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="p-4 pt-0 border-t">
                    <div className="mt-4">
                      <p className="text-gray-700">
                        Pour souscrire une assurance auto, vous devez généralement fournir les documents suivants :
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Carte grise du véhicule</strong> (certificat d'immatriculation)
                        </li>
                        <li>
                          <strong>Permis de conduire</strong> valide du conducteur principal et des conducteurs
                          secondaires
                        </li>
                        <li>
                          <strong>Relevé d'information</strong> de votre précédent assureur (attestant de votre
                          coefficient bonus-malus)
                        </li>
                        <li>
                          <strong>RIB</strong> pour le prélèvement des cotisations
                        </li>
                        <li>
                          <strong>Pièce d'identité</strong> en cours de validité
                        </li>
                      </ul>
                      <div className="bg-blue-50 p-4 rounded-lg mt-4">
                        <div className="flex items-start">
                          <Info className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                          <p className="text-sm">
                            <strong>Bon à savoir :</strong> Si vous n'avez pas encore de relevé d'information, vous
                            pouvez demander à votre assureur actuel de vous le fournir. Ce document est obligatoire pour
                            bénéficier de votre bonus. Sans ce document, vous serez considéré comme un nouveau
                            conducteur avec un coefficient de 1.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link
                        href="/devis?type=auto"
                        className="text-alpha-blue hover:underline font-medium flex items-center"
                      >
                        <span>Obtenir un devis d'assurance auto en ligne</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </details>
              </div>

              <div className="border rounded-lg overflow-hidden mt-4">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-4 text-lg font-medium">
                    <span>Puis-je assurer un véhicule qui n'est pas à mon nom ?</span>
                    <span className="ml-2 flex-shrink-0 transition duration-300 group-open:rotate-180">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="p-4 pt-0 border-t">
                    <div className="mt-4">
                      <p className="text-gray-700">
                        Oui, il est possible d'assurer un véhicule qui n'est pas à votre nom. Dans ce cas, vous serez le
                        souscripteur du contrat et le propriétaire du véhicule sera mentionné sur le contrat.
                      </p>
                      <p className="text-gray-700 mt-2">Pour cela, vous devrez fournir :</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Une attestation du propriétaire vous autorisant à assurer le véhicule</li>
                        <li>La carte grise du véhicule</li>
                        <li>Une copie de la pièce d'identité du propriétaire</li>
                      </ul>
                      <p className="text-gray-700 mt-2">Cette situation est courante dans plusieurs cas :</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Véhicule de fonction</li>
                        <li>Véhicule prêté par un proche</li>
                        <li>Véhicule en leasing ou en location longue durée</li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <Link href="/contact" className="text-alpha-blue hover:underline font-medium flex items-center">
                        <span>Contactez-nous pour plus d'informations</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Tableau comparatif des formules */}
            <div className="bg-white p-6 rounded-lg border mt-8">
              <h3 className="text-xl font-bold mb-4">Comparatif des formules d'assurance auto</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 text-left">Garanties</th>
                      <th className="p-2 text-center">Tiers</th>
                      <th className="p-2 text-center">Intermédiaire</th>
                      <th className="p-2 text-center">Tous Risques</th>
                    </tr>
                  </thead>
                  <tbody>
                    {autoInsuranceComparison.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                        <td className="p-2 border-t">{item.feature}</td>
                        <td className="p-2 border-t text-center">
                          {item.tiers === "✓" ? (
                            <span className="text-green-600 font-bold">✓</span>
                          ) : item.tiers === "✗" ? (
                            <span className="text-red-600">✗</span>
                          ) : (
                            item.tiers
                          )}
                        </td>
                        <td className="p-2 border-t text-center">
                          {item.intermediaire === "✓" ? (
                            <span className="text-green-600 font-bold">✓</span>
                          ) : item.intermediaire === "✗" ? (
                            <span className="text-red-600">✗</span>
                          ) : (
                            item.intermediaire
                          )}
                        </td>
                        <td className="p-2 border-t text-center">
                          {item.tousRisques === "✓" ? (
                            <span className="text-green-600 font-bold">✓</span>
                          ) : item.tousRisques === "✗" ? (
                            <span className="text-red-600">✗</span>
                          ) : (
                            item.tousRisques
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center">
                <Link href="/assurance-auto">
                  <Button className="bg-alpha-blue hover:bg-alpha-blue-light">
                    Découvrir nos formules d'assurance auto
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sous-section Sinistres */}
            <div id="sinistres-auto" className="scroll-mt-24 mt-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Sinistres et Accidents</h3>

              <div className="border rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-4 text-lg font-medium">
                    <span>Comment déclarer un sinistre auto ?</span>
                    <span className="ml-2 flex-shrink-0 transition duration-300 group-open:rotate-180">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="p-4 pt-0 border-t">
                    <div className="mt-4">
                      <p className="text-gray-700">
                        Pour déclarer un sinistre auto, vous disposez de plusieurs options :
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          Contacter notre service sinistres par téléphone au{" "}
                          <a href="tel:0123456789" className="text-alpha-blue hover:underline font-medium">
                            01 23 45 67 89
                          </a>{" "}
                          (du lundi au vendredi de 9h à 12h et de 13h à 18h)
                        </li>
                        <li>
                          Vous connecter à votre{" "}
                          <a href="#" className="text-alpha-blue hover:underline font-medium">
                            espace client
                          </a>{" "}
                          et remplir le formulaire de déclaration en ligne
                        </li>
                        <li>
                          Envoyer un email à{" "}
                          <a
                            href="mailto:sinistres@alpha-assurance.fr"
                            className="text-alpha-blue hover:underline font-medium"
                          >
                            sinistres@alpha-assurance.fr
                          </a>
                        </li>
                      </ul>
                      <div className="bg-amber-50 p-4 rounded-lg mt-4 border border-amber-200">
                        <p className="text-amber-800 font-medium">Délais à respecter :</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-amber-800">
                          <li>5 jours ouvrés suivant l'accident pour un sinistre matériel</li>
                          <li>2 jours ouvrés pour un vol</li>
                          <li>10 jours suivant la publication de l'arrêté pour une catastrophe naturelle</li>
                        </ul>
                      </div>
                      <p className="mt-4 text-gray-700">
                        <strong>Documents à fournir :</strong>
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Constat amiable rempli et signé (si accident avec un tiers)</li>
                        <li>Photos des dommages</li>
                        <li>Devis de réparation (si possible)</li>
                        <li>Récépissé de dépôt de plainte (en cas de vol)</li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <Link href="/contact" className="text-alpha-blue hover:underline font-medium flex items-center">
                        <span>Contacter notre service sinistres</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </details>
              </div>

              <div className="border rounded-lg overflow-hidden mt-4">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-4 text-lg font-medium">
                    <span>Que faire immédiatement après un accident de voiture ?</span>
                    <span className="ml-2 flex-shrink-0 transition duration-300 group-open:rotate-180">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="p-4 pt-0 border-t">
                    <div className="mt-4">
                      <p className="text-gray-700">Après un accident de voiture, suivez ces étapes essentielles :</p>

                      <ol className="list-decimal pl-5 mt-2 space-y-2 text-gray-700">
                        <li>
                          <strong>Sécurisez les lieux</strong> : Allumez vos feux de détresse, mettez votre gilet de
                          sécurité et placez le triangle de signalisation à 30 mètres du véhicule.
                        </li>
                        <li>
                          <strong>Vérifiez s'il y a des blessés</strong> : Si c'est le cas, appelez immédiatement les
                          secours (15 pour le SAMU, 18 pour les pompiers ou 112 numéro d'urgence européen).
                        </li>
                        <li>
                          <strong>Remplissez un constat amiable</strong> : Échangez vos coordonnées et informations
                          d'assurance avec l'autre conducteur, puis remplissez ensemble le constat amiable. N'oubliez
                          pas de le signer tous les deux.
                        </li>
                        <li>
                          <strong>Prenez des photos</strong> : Documentez les dégâts sur tous les véhicules impliqués,
                          la position des véhicules, les conditions de la route et tout élément pertinent (panneaux,
                          feux de signalisation).
                        </li>
                        <li>
                          <strong>Recueillez des témoignages</strong> : Si possible, notez les coordonnées des témoins
                          de l'accident.
                        </li>
                        <li>
                          <strong>Contactez votre assureur</strong> : Informez-le de l'accident dès que possible,
                          idéalement dans les 24 heures.
                        </li>
                      </ol>

                      <div className="bg-blue-50 p-4 rounded-lg mt-4">
                        <p className="text-sm text-gray-700">
                          <strong>Important :</strong> Ne jamais reconnaître votre responsabilité sur le lieu de
                          l'accident. Contentez-vous de décrire objectivement les faits dans le constat. C'est aux
                          assureurs de déterminer les responsabilités selon le barème officiel.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link
                        href="/assurance-auto"
                        className="text-alpha-blue hover:underline font-medium flex items-center"
                      >
                        <span>En savoir plus sur notre assistance accident</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Section Assurance Habitation */}
        <section id="assurance-habitation" className="mb-16 scroll-mt-24">
          <div className="flex items-center mb-6">
            <div className="bg-alpha-blue rounded-full p-2 mr-3">
              <Home className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-alpha-blue">Assurance Habitation</h2>
          </div>

          <div className="space-y-6">
            {/* Sous-section Obligations */}
            <div id="obligation-habitation" className="scroll-mt-24">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Obligations et Réglementation</h3>

              <div className="border rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-4 text-lg font-medium">
                    <span>L'assurance habitation est-elle obligatoire pour les locataires et propriétaires ?</span>
                    <span className="ml-2 flex-shrink-0 transition duration-300 group-open:rotate-180">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="p-4 pt-0 border-t">
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Pour les locataires</h4>
                        <p className="text-gray-700">
                          <strong>Oui, c'est obligatoire.</strong> Depuis la loi ALUR de 2014, tous les locataires
                          doivent souscrire une assurance habitation couvrant au minimum les risques locatifs (dégâts
                          des eaux, incendie, explosion).
                        </p>
                        <p className="text-gray-700 mt-2">
                          Le propriétaire peut exiger une attestation d'assurance chaque année. En cas de défaut
                          d'assurance, il peut :
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                          <li>Souscrire une assurance pour le compte du locataire et lui répercuter le coût</li>
                          <li>Engager une procédure de résiliation du bail</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Pour les propriétaires</h4>
                        <p className="text-gray-700">
                          <strong>Propriétaires occupants :</strong> Pas d'obligation légale, mais fortement recommandé
                          pour protéger votre patrimoine.
                        </p>
                        <p className="text-gray-700 mt-2">
                          <strong>Propriétaires non-occupants :</strong> Obligation d'assurer les parties privatives
                          contre les risques de responsabilité civile si le logement est situé dans une copropriété.
                        </p>
                        <p className="text-gray-700 mt-2">
                          <strong>Copropriétaires :</strong> Le syndicat de copropriété souscrit une assurance pour les
                          parties communes, mais chaque copropriétaire doit assurer ses parties privatives.
                        </p>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg mt-4">
                      <p className="text-sm text-gray-700">
                        <strong>Cas particulier des meublés touristiques :</strong> Pour les locations saisonnières ou
                        Airbnb, vérifiez que votre assurance couvre ce type d'usage, car une assurance habitation
                        standard peut ne pas être suffisante.
                      </p>
                    </div>
                    <div className="mt-4">
                      <Link
                        href="/assurance-habitation"
                        className="text-alpha-blue hover:underline font-medium flex items-center"
                      >
                        <span>Découvrir nos offres d'assurance habitation</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </details>
              </div>

              <div className="border rounded-lg overflow-hidden mt-4">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-4 text-lg font-medium">
                    <span>Comment est calculé le montant de ma prime d'assurance habitation ?</span>
                    <span className="ml-2 flex-shrink-0 transition duration-300 group-open:rotate-180">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="p-4 pt-0 border-t">
                    <div className="mt-4">
                      <p className="text-gray-700">
                        Le montant de votre prime d'assurance habitation est calculé en fonction de nombreux critères :
                      </p>

                      <h4 className="font-semibold mt-4 mb-2">Critères liés au logement</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Type de logement</strong> : appartement ou maison (une maison coûte généralement plus
                          cher à assurer)
                        </li>
                        <li>
                          <strong>Surface habitable</strong> : plus elle est grande, plus la prime est élevée
                        </li>
                        <li>
                          <strong>Localisation géographique</strong> : zone urbaine ou rurale, taux de criminalité,
                          risques naturels
                        </li>
                        <li>
                          <strong>Année de construction</strong> : un logement ancien peut présenter plus de risques
                        </li>
                        <li>
                          <strong>Matériaux de construction</strong> : certains sont plus résistants que d'autres
                        </li>
                        <li>
                          <strong>Étage</strong> (pour un appartement) : les rez-de-chaussée sont plus exposés aux
                          cambriolages
                        </li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Critères liés à l'occupation</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Statut d'occupation</strong> : propriétaire ou locataire
                        </li>
                        <li>
                          <strong>Résidence principale ou secondaire</strong> : une résidence secondaire inoccupée une
                          partie de l'année présente plus de risques
                        </li>
                        <li>
                          <strong>Nombre d'occupants</strong> : plus il y a d'occupants, plus les risques augmentent
                        </li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Critères liés au contrat</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Niveau de garanties choisi</strong> : formule basique ou premium
                        </li>
                        <li>
                          <strong>Montant des franchises</strong> : plus elles sont élevées, moins la prime est chère
                        </li>
                        <li>
                          <strong>Valeur des biens à assurer</strong> : mobilier, objets de valeur
                        </li>
                        <li>
                          <strong>Options supplémentaires</strong> : protection juridique, assistance, etc.
                        </li>
                        <li>
                          <strong>Antécédents de sinistres</strong> : un historique de sinistres peut augmenter la prime
                        </li>
                      </ul>

                      <div className="bg-blue-50 p-4 rounded-lg mt-4">
                        <p className="text-sm text-gray-700">
                          <strong>Bon à savoir :</strong> Certains équipements de sécurité (alarme, porte blindée,
                          détecteurs de fumée) peuvent vous faire bénéficier de réductions sur votre prime. N'hésitez
                          pas à les mentionner lors de votre souscription.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link
                        href="/devis?type=habitation"
                        className="text-alpha-blue hover:underline font-medium flex items-center"
                      >
                        <span>Obtenir un devis personnalisé</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Sous-section Garanties */}
            <div id="garanties-habitation" className="scroll-mt-24">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Garanties et Couvertures</h3>

              <div className="border rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-4 text-lg font-medium">
                    <span>Quelles sont les garanties essentielles d'une assurance habitation ?</span>
                    <span className="ml-2 flex-shrink-0 transition duration-300 group-open:rotate-180">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="p-4 pt-0 border-t">
                    <div className="mt-4">
                      <p className="text-gray-700">
                        Une assurance habitation complète comprend plusieurs garanties essentielles :
                      </p>

                      <h4 className="font-semibold mt-4 mb-2">Garanties de base (incluses dans tous les contrats)</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Responsabilité civile</strong> : Couvre les dommages que vous pourriez causer
                          involontairement à autrui (voisins, tiers)
                        </li>
                        <li>
                          <strong>Dégâts des eaux</strong> : Fuites, infiltrations, débordements
                        </li>
                        <li>
                          <strong>Incendie et explosion</strong> : Dommages causés par le feu ou une explosion
                        </li>
                        <li>
                          <strong>Catastrophes naturelles</strong> : Inondations, tempêtes, tremblements de terre (selon
                          déclaration officielle)
                        </li>
                        <li>
                          <strong>Catastrophes technologiques</strong> : Accidents industriels majeurs
                        </li>
                        <li>
                          <strong>Attentats et actes de terrorisme</strong> : Dommages résultant d'attentats
                        </li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Garanties complémentaires (selon formules)</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Vol et vandalisme</strong> : Cambriolages, dégradations volontaires
                        </li>
                        <li>
                          <strong>Bris de glace</strong> : Vitres, miroirs, plaques vitrocéramiques
                        </li>
                        <li>
                          <strong>Dommages électriques</strong> : Court-circuits, surtensions
                        </li>
                        <li>
                          <strong>Tempête, grêle et neige</strong> : Dommages causés par les intempéries
                        </li>
                        <li>
                          <strong>Protection juridique</strong> : Litiges avec voisins, artisans, etc.
                        </li>
                        <li>
                          <strong>Assistance</strong> : Intervention d'urgence (plombier, serrurier)
                        </li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Garanties optionnelles (à souscrire en plus)</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Objets de valeur</strong> : Bijoux, œuvres d'art, collections
                        </li>
                        <li>
                          <strong>Équipements de loisirs</strong> : Piscine, spa, terrain de tennis
                        </li>
                        <li>
                          <strong>Garantie scolaire</strong> : Dommages causés ou subis par vos enfants à l'école
                        </li>
                        <li>
                          <strong>Tous risques informatiques</strong> : Protection spécifique pour vos appareils
                          électroniques
                        </li>
                        <li>
                          <strong>Assurance jardin</strong> : Arbres, mobilier de jardin, outils
                        </li>
                      </ul>

                      <div className="bg-blue-50 p-4 rounded-lg mt-4">
                        <p className="text-sm text-gray-700">
                          <strong>Notre conseil :</strong> Adaptez vos garanties à votre situation personnelle. Par
                          exemple, si vous possédez des objets de valeur, vérifiez les plafonds d'indemnisation et
                          souscrivez une option spécifique si nécessaire.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link
                        href="/assurance-habitation"
                        className="text-alpha-blue hover:underline font-medium flex items-center"
                      >
                        <span>Comparer nos formules d'assurance habitation</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Tableau comparatif des formules */}
            <div className="bg-white p-6 rounded-lg border mt-8">
              <h3 className="text-xl font-bold mb-4">Comparatif des formules d'assurance habitation</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 text-left">Garanties</th>
                      <th className="p-2 text-center">Essentielle</th>
                      <th className="p-2 text-center">Confort</th>
                      <th className="p-2 text-center">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    {homeInsuranceComparison.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                        <td className="p-2 border-t">{item.feature}</td>
                        <td className="p-2 border-t text-center">
                          {item.essentielle === "✓" ? (
                            <span className="text-green-600 font-bold">✓</span>
                          ) : item.essentielle === "✗" ? (
                            <span className="text-red-600">✗</span>
                          ) : (
                            item.essentielle
                          )}
                        </td>
                        <td className="p-2 border-t text-center">
                          {item.confort === "✓" ? (
                            <span className="text-green-600 font-bold">✓</span>
                          ) : item.confort === "✗" ? (
                            <span className="text-red-600">✗</span>
                          ) : (
                            item.confort
                          )}
                        </td>
                        <td className="p-2 border-t text-center">
                          {item.premium === "✓" ? (
                            <span className="text-green-600 font-bold">✓</span>
                          ) : item.premium === "✗" ? (
                            <span className="text-red-600">✗</span>
                          ) : (
                            item.premium
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center">
                <Link href="/assurance-habitation">
                  <Button className="bg-alpha-blue hover:bg-alpha-blue-light">
                    Découvrir nos formules d'assurance habitation
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sous-section Sinistres */}
            <div id="sinistres-habitation" className="scroll-mt-24 mt-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Sinistres Habitation</h3>

              <div className="border rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-4 text-lg font-medium">
                    <span>Que faire en cas de dégât des eaux ?</span>
                    <span className="ml-2 flex-shrink-0 transition duration-300 group-open:rotate-180">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="p-4 pt-0 border-t">
                    <div className="mt-4">
                      <p className="text-gray-700">
                        En cas de dégât des eaux, suivez ces étapes pour limiter les dommages et faciliter votre
                        indemnisation :
                      </p>

                      <ol className="list-decimal pl-5 mt-2 space-y-2 text-gray-700">
                        <li>
                          <strong>Coupez l'arrivée d'eau</strong> : Localisez et fermez le robinet d'arrivée d'eau
                          général ou celui de la canalisation concernée.
                        </li>
                        <li>
                          <strong>Coupez l'électricité</strong> : Si l'eau menace des installations électriques, coupez
                          le courant au disjoncteur pour éviter tout risque d'électrocution.
                        </li>
                        <li>
                          <strong>Limitez les dégâts</strong> : Épongez l'eau, protégez vos meubles, déplacez les objets
                          de valeur, aérez les pièces touchées.
                        </li>
                        <li>
                          <strong>Identifiez l'origine de la fuite</strong> : Déterminez si elle provient de chez vous
                          ou d'un voisin.
                        </li>
                        <li>
                          <strong>Prévenez les voisins concernés</strong> : Si la fuite affecte d'autres logements
                          (au-dessus ou en dessous).
                        </li>
                        <li>
                          <strong>Contactez un plombier</strong> : Pour une réparation d'urgence si nécessaire.
                        </li>
                        <li>
                          <strong>Déclarez le sinistre à votre assureur</strong> : Dans les 5 jours ouvrés suivant la
                          découverte du dégât.
                        </li>
                        <li>
                          <strong>Remplissez un constat de dégât des eaux</strong> : Avec le voisin concerné si la fuite
                          provient de son logement ou affecte son logement.
                        </li>
                        <li>
                          <strong>Documentez les dommages</strong> : Prenez des photos, conservez les factures des biens
                          endommagés.
                        </li>
                        <li>
                          <strong>Ne jetez rien</strong> : Conservez les objets endommagés jusqu'au passage de l'expert.
                        </li>
                      </ol>

                      <div className="bg-blue-50 p-4 rounded-lg mt-4">
                        <p className="text-sm text-gray-700">
                          <strong>Bon à savoir :</strong> Notre service d'assistance est disponible 24h/24 et 7j/7 pour
                          vous aider en cas d'urgence. Nous pouvons vous envoyer un plombier ou un autre professionnel
                          si nécessaire.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link href="/contact" className="text-alpha-blue hover:underline font-medium flex items-center">
                        <span>Contacter notre service sinistres</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Section Assurance Santé */}
        <section id="assurance-sante" className="mb-16 scroll-mt-24">
          <div className="flex items-center mb-6">
            <div className="bg-alpha-blue rounded-full p-2 mr-3">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-alpha-blue">Assurance Santé</h2>
          </div>

          <div className="space-y-6">
            {/* Sous-section 100% Santé */}
            <div id="100-sante" className="scroll-mt-24">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Réforme 100% Santé</h3>

              <div className="border rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-4 text-lg font-medium">
                    <span>Qu'est-ce que le 100% santé et quels soins sont concernés ?</span>
                    <span className="ml-2 flex-shrink-0 transition duration-300 group-open:rotate-180">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="p-4 pt-0 border-t">
                    <div className="mt-4">
                      <p className="text-gray-700">
                        La réforme 100% Santé (ou "reste à charge zéro") permet à tous les Français bénéficiant d'une
                        complémentaire santé responsable d'accéder à des soins de qualité intégralement remboursés dans
                        trois domaines :
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Optique</h4>
                          <p className="text-sm text-gray-700">
                            <strong>Équipements concernés :</strong>
                          </p>
                          <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-gray-700">
                            <li>Montures respectant les normes européennes</li>
                            <li>Verres traitant toutes les corrections visuelles</li>
                            <li>Montures à 30€ maximum</li>
                            <li>Verres amincis, anti-reflets, anti-rayures</li>
                          </ul>
                          <p className="text-sm text-gray-700 mt-2">
                            <strong>Renouvellement :</strong> Tous les 2 ans (sauf évolution de la vue)
                          </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Dentaire</h4>
                          <p className="text-sm text-gray-700">
                            <strong>Soins concernés :</strong>
                          </p>
                          <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-gray-700">
                            <li>Couronnes et bridges en céramique</li>
                            <li>Inlays core et couronnes transitoires</li>
                            <li>Prothèses amovibles (dentiers) en résine</li>
                            <li>Réparations de prothèses</li>
                          </ul>
                          <p className="text-sm text-gray-700 mt-2">
                            <strong>Localisation :</strong> Toutes les dents pour certains soins, dents visibles pour
                            d'autres
                          </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Audiologie</h4>
                          <p className="text-sm text-gray-700">
                            <strong>Équipements concernés :</strong>
                          </p>
                          <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-gray-700">
                            <li>Tous types d'appareils auditifs</li>
                            <li>12 canaux de réglage minimum</li>
                            <li>30 jours d'essai minimum</li>
                            <li>4 ans de garantie</li>
                            <li>
                              Au moins 3 options parmi réduction du bruit, système anti-acouphène, connectivité, etc.
                            </li>
                          </ul>
                          <p className="text-sm text-gray-700 mt-2">
                            <strong>Renouvellement :</strong> Tous les 4 ans
                          </p>
                        </div>
                      </div>

                      <p className="mt-4 text-gray-700">
                        <strong>Comment ça marche ?</strong> Le 100% Santé repose sur un mécanisme de plafonnement des
                        tarifs que les professionnels de santé s'engagent à respecter. L'Assurance Maladie et votre
                        complémentaire santé prennent en charge l'intégralité du coût, sans reste à charge pour vous.
                      </p>

                      <p className="mt-2 text-gray-700">
                        <strong>Liberté de choix :</strong> Vous restez libre de choisir des équipements hors panier
                        100% Santé, mais ils seront remboursés selon les conditions habituelles de votre contrat, avec
                        un reste à charge possible.
                      </p>

                      <div className="bg-amber-50 p-4 rounded-lg mt-4 border border-amber-200">
                        <p className="text-amber-800">
                          <strong>Important :</strong> Pour bénéficier du 100% Santé, vous devez disposer d'une
                          complémentaire santé responsable. Tous nos contrats sont compatibles avec la réforme 100%
                          Santé.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link
                        href="/assurance-sante"
                        className="text-alpha-blue hover:underline font-medium flex items-center"
                      >
                        <span>Découvrir nos offres d'assurance santé</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Sous-section Remboursements */}
            <div id="remboursements" className="scroll-mt-24">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Remboursements et Tiers Payant</h3>

              <div className="border rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-4 text-lg font-medium">
                    <span>Comment fonctionnent les remboursements de frais de santé ?</span>
                    <span className="ml-2 flex-shrink-0 transition duration-300 group-open:rotate-180">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="p-4 pt-0 border-t">
                    <div className="mt-4">
                      <p className="text-gray-700">
                        Le remboursement des frais de santé fonctionne généralement en deux temps :
                      </p>

                      <h4 className="font-semibold mt-4 mb-2">1. Remboursement par l'Assurance Maladie</h4>
                      <p className="text-gray-700">
                        L'Assurance Maladie (Sécurité sociale) prend en charge une partie de vos dépenses de santé, sur
                        la base de tarifs de référence appelés "Base de Remboursement" (BR) :
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Consultations médecin traitant : 70% de la BR</li>
                        <li>Médicaments à service médical rendu majeur : 65% de la BR</li>
                        <li>Analyses médicales : 60% de la BR</li>
                        <li>Hospitalisation : 80% de la BR</li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">2. Remboursement par votre complémentaire santé</h4>
                      <p className="text-gray-700">
                        Votre mutuelle intervient en complément pour rembourser tout ou partie du "reste à charge" selon
                        votre contrat. Les remboursements sont généralement exprimés en :
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Pourcentage de la BR</strong> : Par exemple, "150% BR" signifie que la Sécurité
                          sociale rembourse 70% et votre mutuelle 80% supplémentaires
                        </li>
                        <li>
                          <strong>Forfait</strong> : Montant fixe annuel ou par acte (ex : 150€ pour l'optique)
                        </li>
                        <li>
                          <strong>Frais réels</strong> : Prise en charge intégrale du reste à charge
                        </li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Le tiers payant</h4>
                      <p className="text-gray-700">
                        Le tiers payant vous permet de ne pas avancer les frais chez certains professionnels de santé :
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Tiers payant Sécurité sociale</strong> : Vous ne payez que la part complémentaire
                        </li>
                        <li>
                          <strong>Tiers payant intégral</strong> : Vous ne payez rien (part Sécurité sociale et
                          complémentaire prises en charge)
                        </li>
                      </ul>
                      <p className="text-gray-700 mt-2">
                        Pour en bénéficier, présentez votre carte Vitale et votre carte de tiers payant fournie par
                        Alpha Assurance.
                      </p>

                      <div className="bg-blue-50 p-4 rounded-lg mt-4">
                        <p className="text-sm text-gray-700">
                          <strong>Bon à savoir :</strong> Avec notre application mobile, vous pouvez suivre vos
                          remboursements en temps réel, envoyer vos justificatifs et accéder à votre carte de tiers
                          payant digitale.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link
                        href="/assurance-sante"
                        className="text-alpha-blue hover:underline font-medium flex items-center"
                      >
                        <span>Découvrir nos garanties santé</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Sous-section Délai de carence */}
            <div id="delai-carence" className="scroll-mt-24">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Délai de Carence</h3>

              <div className="border rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-4 text-lg font-medium">
                    <span>Qu'est-ce que le délai de carence en assurance santé ?</span>
                    <span className="ml-2 flex-shrink-0 transition duration-300 group-open:rotate-180">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="p-4 pt-0 border-t">
                    <div className="mt-4">
                      <p className="text-gray-700">
                        Le délai de carence (ou stage) est une période pendant laquelle vous cotisez à votre assurance
                        santé mais ne pouvez pas encore bénéficier de certaines garanties. Ce mécanisme permet aux
                        assureurs de se prémunir contre les souscriptions opportunistes.
                      </p>

                      <h4 className="font-semibold mt-4 mb-2">Délais de carence habituels</h4>
                      <p className="text-gray-700">Les délais varient selon les garanties et les contrats :</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Soins courants</strong> (consultations, médicaments) : 1 à 3 mois
                        </li>
                        <li>
                          <strong>Hospitalisation</strong> : 3 à 6 mois
                        </li>
                        <li>
                          <strong>Optique et dentaire</strong> : 3 à 6 mois
                        </li>
                        <li>
                          <strong>Maternité</strong> : 9 à 12 mois
                        </li>
                        <li>
                          <strong>Médecine alternative</strong> : 3 mois
                        </li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Exceptions au délai de carence</h4>
                      <p className="text-gray-700">
                        Dans certains cas, le délai de carence peut être supprimé ou réduit :
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Accident</strong> : Les soins liés à un accident sont généralement pris en charge
                          immédiatement
                        </li>
                        <li>
                          <strong>Changement d'assureur</strong> : Si vous étiez déjà couvert par une autre mutuelle
                          sans interruption
                        </li>
                        <li>
                          <strong>Contrat collectif d'entreprise</strong> : Souvent sans délai de carence
                        </li>
                        <li>
                          <strong>Offres promotionnelles</strong> : Certains assureurs proposent ponctuellement des
                          offres sans délai de carence
                        </li>
                      </ul>

                      <div className="bg-blue-50 p-4 rounded-lg mt-4">
                        <p className="text-sm text-gray-700">
                          <strong>Chez Alpha Assurance :</strong> Nous proposons des contrats sans délai de carence pour
                          la plupart des garanties. Pour les garanties spécifiques comme la maternité ou certains soins
                          dentaires importants, un délai réduit peut s'appliquer. Consultez nos conseillers pour
                          connaître les conditions exactes.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link
                        href="/devis?type=sante"
                        className="text-alpha-blue hover:underline font-medium flex items-center"
                      >
                        <span>Obtenir un devis personnalisé</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Tableau comparatif des formules */}
            <div className="bg-white p-6 rounded-lg border mt-8">
              <h3 className="text-xl font-bold mb-4">Comparatif des formules d'assurance santé</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 text-left">Garanties</th>
                      <th className="p-2 text-center">Basique</th>
                      <th className="p-2 text-center">Medium</th>
                      <th className="p-2 text-center">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    {healthInsuranceComparison.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                        <td className="p-2 border-t">{item.feature}</td>
                        <td className="p-2 border-t text-center">
                          {item.basique === "✓" ? (
                            <span className="text-green-600 font-bold">✓</span>
                          ) : item.basique === "✗" ? (
                            <span className="text-red-600">✗</span>
                          ) : (
                            item.basique
                          )}
                        </td>
                        <td className="p-2 border-t text-center">
                          {item.medium === "✓" ? (
                            <span className="text-green-600 font-bold">✓</span>
                          ) : item.medium === "✗" ? (
                            <span className="text-red-600">✗</span>
                          ) : (
                            item.medium
                          )}
                        </td>
                        <td className="p-2 border-t text-center">
                          {item.premium === "✓" ? (
                            <span className="text-green-600 font-bold">✓</span>
                          ) : item.premium === "✗" ? (
                            <span className="text-red-600">✗</span>
                          ) : (
                            item.premium
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center">
                <Link href="/assurance-sante">
                  <Button className="bg-alpha-blue hover:bg-alpha-blue-light">
                    Découvrir nos formules d'assurance santé
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section Assurance Vie */}
        <section id="assurance-vie" className="mb-16 scroll-mt-24">
          <div className="flex items-center mb-6">
            <div className="bg-alpha-blue rounded-full p-2 mr-3">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-alpha-blue">Assurance Vie</h2>
          </div>

          <div className="space-y-6">
            {/* Sous-section Avantages fiscaux */}
            <div id="avantages-fiscaux" className="scroll-mt-24">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Avantages Fiscaux</h3>

              <div className="border rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-4 text-lg font-medium">
                    <span>Quels sont les avantages fiscaux de l'assurance vie ?</span>
                    <span className="ml-2 flex-shrink-0 transition duration-300 group-open:rotate-180">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="p-4 pt-0 border-t">
                    <div className="mt-4">
                      <p className="text-gray-700">
                        L'assurance vie est l'un des placements les plus avantageux fiscalement en France, tant pour
                        l'épargne que pour la transmission :
                      </p>

                      <h4 className="font-semibold mt-4 mb-2">Avantages fiscaux pendant la vie du contrat</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Pas d'impôt sur les plus-values</strong> tant que vous ne retirez pas d'argent
                          (capitalisation)
                        </li>
                        <li>
                          <strong>Liberté de versements et de retraits</strong> sans pénalité fiscale
                        </li>
                        <li>
                          <strong>Pas d'impôt sur la fortune immobilière (IFI)</strong> pour les contrats investis en
                          unités de compte
                        </li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Fiscalité avantageuse en cas de rachat (retrait)</h4>
                      <p className="text-gray-700">
                        Lors d'un rachat, seuls les intérêts (plus-values) sont imposables, et non le capital que vous
                        avez versé. La fiscalité dépend de l'ancienneté du contrat :
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Avant 8 ans</strong> : Imposition des plus-values au taux forfaitaire de 12,8% (PFU)
                          ou au barème progressif de l'impôt sur le revenu (option)
                        </li>
                        <li>
                          <strong>Après 8 ans</strong> : Abattement annuel de 4 600€ (personne seule) ou 9 200€ (couple)
                          sur les plus-values, puis imposition au taux réduit de 7,5% ou au PFU de 12,8%
                        </li>
                        <li>
                          <strong>Dans tous les cas</strong> : Prélèvements sociaux de 17,2% sur les plus-values
                        </li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Avantages fiscaux en cas de décès (transmission)</h4>
                      <p className="text-gray-700">L'assurance vie échappe aux règles classiques des successions :</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Pour les versements avant 70 ans</strong> : Chaque bénéficiaire désigné bénéficie d'un
                          abattement de 152 500€, puis taxation à 20% jusqu'à 852 500€ et 31,25% au-delà
                        </li>
                        <li>
                          <strong>Pour les versements après 70 ans</strong> : Abattement global de 30 500€ sur les
                          versements (pas sur les intérêts), puis application des droits de succession classiques
                        </li>
                        <li>
                          <strong>Exonération totale pour le conjoint ou partenaire de PACS</strong> bénéficiaire, quel
                          que soit l'âge des versements
                        </li>
                      </ul>

                      <div className="bg-blue-50 p-4 rounded-lg mt-4">
                        <p className="text-sm text-gray-700">
                          <strong>Notre conseil :</strong> Pour optimiser la fiscalité de votre assurance vie,
                          privilégiez les versements avant 70 ans et conservez votre contrat au moins 8 ans. La
                          désignation précise des bénéficiaires est également cruciale pour optimiser la transmission.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link
                        href="/assurance-vie"
                        className="text-alpha-blue hover:underline font-medium flex items-center"
                      >
                        <span>Découvrir nos contrats d'assurance vie</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Sous-section Types de contrats */}
            <div id="types-contrats" className="scroll-mt-24">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Types de Contrats</h3>

              <div className="border rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-4 text-lg font-medium">
                    <span>Quelle est la différence entre les fonds en euros et les unités de compte ?</span>
                    <span className="ml-2 flex-shrink-0 transition duration-300 group-open:rotate-180">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="p-4 pt-0 border-t">
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Fonds en euros</h4>
                        <p className="text-gray-700">
                          Les fonds en euros sont des supports d'investissement à capital garanti :
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                          <li>
                            <strong>Garantie du capital</strong> : Votre épargne ne peut pas baisser
                          </li>
                          <li>
                            <strong>Effet cliquet</strong> : Les intérêts acquis sont définitivement acquis
                          </li>
                          <li>
                            <strong>Rendement modéré</strong> : Généralement entre 1% et 2% ces dernières années
                          </li>
                          <li>
                            <strong>Composition</strong> : Majoritairement des obligations d'État et d'entreprises
                          </li>
                          <li>
                            <strong>Liquidité</strong> : Disponibilité permanente de votre épargne
                          </li>
                        </ul>
                        <p className="text-gray-700 mt-2">
                          <strong>Idéal pour :</strong> Les épargnants prudents, les projets à court/moyen terme, la
                          sécurisation progressive d'un capital avant utilisation.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Unités de compte (UC)</h4>
                        <p className="text-gray-700">
                          Les unités de compte sont des supports d'investissement non garantis :
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                          <li>
                            <strong>Capital non garanti</strong> : Risque de perte en capital
                          </li>
                          <li>
                            <strong>Potentiel de performance supérieur</strong> : Rendements potentiellement plus élevés
                          </li>
                          <li>
                            <strong>Diversification</strong> : Actions, obligations, immobilier, fonds thématiques
                          </li>
                          <li>
                            <strong>Gestion</strong> : Active (par des gérants) ou passive (réplication d'indices)
                          </li>
                          <li>
                            <strong>Horizon</strong> : Recommandé sur le long terme (8 ans minimum)
                          </li>
                        </ul>
                        <p className="text-gray-700 mt-2">
                          <strong>Idéal pour :</strong> Les épargnants avec un horizon de placement long, à la recherche
                          de performance, et capables d'accepter des fluctuations temporaires.
                        </p>
                      </div>
                    </div>

                    <h4 className="font-semibold mt-6 mb-2">Quelle stratégie adopter ?</h4>
                    <p className="text-gray-700">
                      La répartition idéale entre fonds en euros et unités de compte dépend de plusieurs facteurs :
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>
                        <strong>Votre profil de risque</strong> : Prudent, équilibré ou dynamique
                      </li>
                      <li>
                        <strong>Votre horizon de placement</strong> : Court, moyen ou long terme
                      </li>
                      <li>
                        <strong>Vos objectifs</strong> : Sécurité, rendement, transmission
                      </li>
                      <li>
                        <strong>Votre âge</strong> : Plus vous approchez de la retraite, plus la part sécurisée devrait
                        augmenter
                      </li>
                    </ul>

                    <div className="bg-blue-50 p-4 rounded-lg mt-4">
                      <p className="text-sm text-gray-700">
                        <strong>Notre conseil :</strong> Une stratégie équilibrée consiste souvent à combiner les deux
                        types de supports. Nos conseillers peuvent vous aider à déterminer la répartition optimale selon
                        votre situation personnelle et à ajuster cette allocation dans le temps.
                      </p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Sous-section Bénéficiaires */}
            <div id="beneficiaires" className="scroll-mt-24">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Bénéficiaires</h3>

              <div className="border rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-4 text-lg font-medium">
                    <span>Comment choisir et désigner les bénéficiaires de mon assurance vie ?</span>
                    <span className="ml-2 flex-shrink-0 transition duration-300 group-open:rotate-180">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="p-4 pt-0 border-t">
                    <div className="mt-4">
                      <p className="text-gray-700">
                        La désignation des bénéficiaires est une étape cruciale dans la souscription d'un contrat
                        d'assurance vie. Elle détermine qui recevra le capital en cas de décès et dans quelles
                        conditions fiscales.
                      </p>

                      <h4 className="font-semibold mt-4 mb-2">Comment désigner un bénéficiaire ?</h4>
                      <p className="text-gray-700">Vous pouvez désigner vos bénéficiaires de plusieurs façons :</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Dans le contrat</strong> : Lors de la souscription ou ultérieurement par avenant
                        </li>
                        <li>
                          <strong>Par testament</strong> : Déposé chez un notaire
                        </li>
                        <li>
                          <strong>Par acte sous seing privé</strong> : Document écrit, daté et signé
                        </li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Qui désigner comme bénéficiaire ?</h4>
                      <p className="text-gray-700">Vous êtes libre de désigner qui vous voulez comme bénéficiaire :</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Votre conjoint ou partenaire de PACS (avantage : exonération totale de droits)</li>
                        <li>Vos enfants (collectivement ou individuellement)</li>
                        <li>D'autres membres de votre famille</li>
                        <li>Des amis</li>
                        <li>Des associations ou fondations</li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Comment rédiger une clause bénéficiaire ?</h4>
                      <p className="text-gray-700">
                        La rédaction de la clause bénéficiaire doit être précise pour éviter toute ambiguïté :
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Identifiez clairement les bénéficiaires</strong> : Nom, prénom, date et lieu de
                          naissance, adresse
                        </li>
                        <li>
                          <strong>Prévoyez des bénéficiaires de second rang</strong> : "À défaut, mes enfants nés ou à
                          naître, vivants ou représentés, par parts égales entre eux"
                        </li>
                        <li>
                          <strong>Précisez la répartition</strong> : Par parts égales ou selon des pourcentages
                          spécifiques
                        </li>
                        <li>
                          <strong>Envisagez un bénéficiaire ultime</strong> : "À défaut, mes héritiers"
                        </li>
                      </ul>

                      <div className="bg-amber-50 p-4 rounded-lg mt-4 border border-amber-200">
                        <p className="text-amber-800">
                          <strong>Attention aux clauses types :</strong> La clause standard "Mon conjoint, à défaut mes
                          enfants, à défaut mes héritiers" peut ne pas être adaptée à votre situation personnelle. Par
                          exemple, elle ne tient pas compte d'un éventuel divorce ou de la naissance de nouveaux
                          enfants.
                        </p>
                      </div>

                      <h4 className="font-semibold mt-4 mb-2">Quand et comment modifier la clause bénéficiaire ?</h4>
                      <p className="text-gray-700">
                        Vous pouvez modifier la clause bénéficiaire à tout moment, tant que vous n'avez pas accepté
                        l'acceptation du bénéficiaire :
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Par simple courrier à votre assureur</li>
                        <li>Par avenant au contrat</li>
                        <li>Par testament</li>
                      </ul>
                      <p className="text-gray-700 mt-2">
                        Pensez à revoir votre clause bénéficiaire lors de chaque changement important dans votre vie :
                        mariage, PACS, naissance, divorce, décès d'un bénéficiaire...
                      </p>

                      <div className="bg-blue-50 p-4 rounded-lg mt-4">
                        <p className="text-sm text-gray-700">
                          <strong>Notre conseil :</strong> Faites-vous accompagner par un conseiller Alpha Assurance ou
                          un notaire pour rédiger une clause bénéficiaire personnalisée et adaptée à votre situation
                          familiale et patrimoniale.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link
                        href="/assurance-vie"
                        className="text-alpha-blue hover:underline font-medium flex items-center"
                      >
                        <span>En savoir plus sur nos contrats d'assurance vie</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Section Assurance Professionnelle */}
        <section id="assurance-pro" className="mb-16 scroll-mt-24">
          <div className="flex items-center mb-6">
            <div className="bg-alpha-blue rounded-full p-2 mr-3">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-alpha-blue">Assurance Professionnelle</h2>
          </div>

          <div className="space-y-6">
            {/* Sous-section RC Pro */}
            <div id="rc-pro" className="scroll-mt-24">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Responsabilité Civile Professionnelle</h3>

              <div className="border rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-4 text-lg font-medium">
                    <span>Qu'est-ce que la RC Pro et pourquoi est-elle importante ?</span>
                    <span className="ml-2 flex-shrink-0 transition duration-300 group-open:rotate-180">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="p-4 pt-0 border-t">
                    <div className="mt-4">
                      <p className="text-gray-700">
                        La Responsabilité Civile Professionnelle (RC Pro) est une assurance qui protège les
                        professionnels contre les conséquences financières des dommages qu'ils pourraient causer à des
                        tiers dans le cadre de leur activité.
                      </p>

                      <h4 className="font-semibold mt-4 mb-2">Que couvre la RC Pro ?</h4>
                      <p className="text-gray-700">Cette assurance couvre principalement trois types de dommages :</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Dommages corporels</strong> : Blessures physiques causées à un client ou un tiers
                        </li>
                        <li>
                          <strong>Dommages matériels</strong> : Détérioration ou destruction des biens d'un client
                        </li>
                        <li>
                          <strong>Dommages immatériels</strong> : Préjudices financiers résultant d'une erreur, d'une
                          négligence ou d'un retard
                        </li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Pourquoi est-elle importante ?</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Protection financière</strong> : Elle prend en charge les frais de défense, les
                          dommages et intérêts, évitant ainsi de mettre en péril la santé financière de votre entreprise
                        </li>
                        <li>
                          <strong>Obligation légale</strong> : Elle est obligatoire pour certaines professions
                          (médecins, avocats, experts-comptables, agents immobiliers...)
                        </li>
                        <li>
                          <strong>Crédibilité</strong> : Elle rassure vos clients sur votre professionnalisme
                        </li>
                        <li>
                          <strong>Accès aux marchés</strong> : De nombreux appels d'offres et contrats exigent une RC
                          Pro
                        </li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Qui a besoin d'une RC Pro ?</h4>
                      <p className="text-gray-700">Pratiquement tous les professionnels, notamment :</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Les professions libérales et consultants</li>
                        <li>Les artisans et commerçants</li>
                        <li>Les prestataires de services</li>
                        <li>Les professions réglementées</li>
                        <li>Les auto-entrepreneurs</li>
                      </ul>

                      <div className="bg-blue-50 p-4 rounded-lg mt-4">
                        <p className="text-sm text-gray-700">
                          <strong>Notre conseil :</strong> Le montant de la couverture doit être adapté à votre
                          activité, à la taille de votre entreprise et aux risques spécifiques de votre secteur. Nos
                          conseillers spécialisés peuvent vous aider à déterminer le niveau de protection optimal.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link
                        href="/assurance-professionnelle"
                        className="text-alpha-blue hover:underline font-medium flex items-center"
                      >
                        <span>Découvrir nos offres d'assurance professionnelle</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Sous-section Multirisque Pro */}
            <div id="multirisque-pro" className="scroll-mt-24">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Multirisque Professionnelle</h3>

              <div className="border rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-4 text-lg font-medium">
                    <span>Quelles garanties inclut une assurance multirisque professionnelle ?</span>
                    <span className="ml-2 flex-shrink-0 transition duration-300 group-open:rotate-180">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="p-4 pt-0 border-t">
                    <div className="mt-4">
                      <p className="text-gray-700">
                        L'assurance multirisque professionnelle est une solution complète qui regroupe plusieurs
                        garanties essentielles pour protéger votre activité professionnelle.
                      </p>

                      <h4 className="font-semibold mt-4 mb-2">Garanties principales</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Protection des locaux</strong> : Couvre les dommages aux murs, sols, plafonds et
                          installations fixes en cas d'incendie, dégât des eaux, événements climatiques, catastrophes
                          naturelles
                        </li>
                        <li>
                          <strong>Protection du contenu</strong> : Mobilier, matériel, équipements, marchandises, stocks
                        </li>
                        <li>
                          <strong>Responsabilité civile exploitation</strong> : Dommages causés aux tiers dans le cadre
                          de votre activité
                        </li>
                        <li>
                          <strong>Vol et vandalisme</strong> : Effraction, détérioration des locaux, vol de marchandises
                        </li>
                        <li>
                          <strong>Bris de machines</strong> : Dommages accidentels aux équipements professionnels
                        </li>
                        <li>
                          <strong>Perte d'exploitation</strong> : Compensation financière en cas d'interruption
                          temporaire d'activité suite à un sinistre
                        </li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Garanties optionnelles</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Protection juridique</strong> : Défense de vos intérêts en cas de litige
                        </li>
                        <li>
                          <strong>Assurance des valeurs</strong> : Espèces, titres et valeurs
                        </li>
                        <li>
                          <strong>Tous risques informatiques</strong> : Protection spécifique du matériel informatique
                        </li>
                        <li>
                          <strong>Assurance des véhicules professionnels</strong> : Flotte automobile
                        </li>
                        <li>
                          <strong>Homme clé</strong> : Protection financière en cas de décès ou d'invalidité d'une
                          personne essentielle à l'entreprise
                        </li>
                      </ul>

                      <div className="bg-blue-50 p-4 rounded-lg mt-4">
                        <p className="text-sm text-gray-700">
                          <strong>Personnalisation :</strong> Chez Alpha Assurance, nous adaptons votre contrat
                          multirisque professionnelle à votre secteur d'activité spécifique (commerce, artisanat,
                          profession libérale, etc.) et à la taille de votre entreprise pour vous offrir une protection
                          optimale.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link
                        href="/assurance-professionnelle"
                        className="text-alpha-blue hover:underline font-medium flex items-center"
                      >
                        <span>Obtenir un devis personnalisé</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Section Questions Générales */}
        <section id="questions-generales" className="mb-16 scroll-mt-24">
          <div className="flex items-center mb-6">
            <div className="bg-alpha-blue rounded-full p-2 mr-3">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-alpha-blue">Questions Générales</h2>
          </div>

          <div className="space-y-6">
            {/* Sous-section Résiliation */}
            <div id="resiliation" className="scroll-mt-24">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Résiliation de Contrats</h3>

              <div className="border rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-4 text-lg font-medium">
                    <span>Comment résilier mon contrat d'assurance auto ou habitation ?</span>
                    <span className="ml-2 flex-shrink-0 transition duration-300 group-open:rotate-180">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="p-4 pt-0 border-t">
                    <div className="mt-4">
                      <p className="text-gray-700">
                        Depuis la loi Hamon (2015) et la loi Chatel (2005), la résiliation des contrats d'assurance a
                        été simplifiée pour les consommateurs.
                      </p>

                      <h4 className="font-semibold mt-4 mb-2">Quand pouvez-vous résilier ?</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>À tout moment après la première année</strong> (Loi Hamon) : Pour les contrats auto,
                          moto, habitation et complémentaire santé
                        </li>
                        <li>
                          <strong>À l'échéance annuelle</strong> : Pour tous les contrats, avec un préavis généralement
                          de 2 mois
                        </li>
                        <li>
                          <strong>En cas de changement de situation</strong> : Déménagement, changement de véhicule,
                          retraite, etc.
                        </li>
                        <li>
                          <strong>En cas d'augmentation de la prime</strong> : Si votre assureur augmente votre prime
                          hors taxes ou contributions
                        </li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Comment procéder à la résiliation ?</h4>
                      <ol className="list-decimal pl-5 mt-2 space-y-2 text-gray-700">
                        <li>
                          <strong>Lettre recommandée avec accusé de réception</strong> : Méthode traditionnelle et
                          sécurisée
                        </li>
                        <li>
                          <strong>Formulaire en ligne</strong> : De nombreux assureurs proposent désormais cette option
                        </li>
                        <li>
                          <strong>Mandat à votre nouvel assureur</strong> : Avec la loi Hamon, votre nouvel assureur
                          peut s'occuper des démarches de résiliation
                        </li>
                        <li>
                          <strong>Email</strong> : Si votre contrat le prévoit explicitement
                        </li>
                      </ol>

                      <h4 className="font-semibold mt-4 mb-2">Informations à inclure dans votre demande</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Vos coordonnées complètes</li>
                        <li>Votre numéro de contrat</li>
                        <li>La date d'effet souhaitée pour la résiliation</li>
                        <li>Le motif de résiliation (pas obligatoire pour la loi Hamon)</li>
                        <li>Votre signature</li>
                        <li>Les justificatifs nécessaires selon le motif (acte de vente, nouveau bail, etc.)</li>
                      </ul>

                      <div className="bg-blue-50 p-4 rounded-lg mt-4">
                        <p className="text-sm text-gray-700">
                          <strong>Notre conseil :</strong> Si vous souhaitez changer d'assureur, souscrivez d'abord
                          votre nouveau contrat avant de résilier l'ancien pour éviter toute période sans couverture.
                          Chez Alpha Assurance, nous pouvons nous charger de toutes les démarches de résiliation pour
                          vous simplifier la vie.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link href="/contact" className="text-alpha-blue hover:underline font-medium flex items-center">
                        <span>Nous contacter pour plus d'informations</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Sous-section Franchise */}
            <div id="franchise" className="scroll-mt-24">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Franchise</h3>

              <div className="border rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-4 text-lg font-medium">
                    <span>Comment fonctionne la franchise en assurance auto et habitation ?</span>
                    <span className="ml-2 flex-shrink-0 transition duration-300 group-open:rotate-180">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="p-4 pt-0 border-t">
                    <div className="mt-4">
                      <p className="text-gray-700">
                        La franchise est la somme qui reste à votre charge lors d'un sinistre. Elle représente votre
                        participation financière et permet de réduire le montant de votre prime d'assurance.
                      </p>

                      <h4 className="font-semibold mt-4 mb-2">Les différents types de franchises</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Franchise absolue (ou fixe)</strong> : Montant fixe déduit systématiquement de
                          l'indemnisation. Exemple : avec une franchise de 150€, pour un sinistre de 1 000€, vous
                          recevrez 850€.
                        </li>
                        <li>
                          <strong>Franchise relative</strong> : Seuil en dessous duquel l'assureur n'intervient pas. Si
                          le montant du sinistre dépasse ce seuil, l'indemnisation est totale. Exemple : avec une
                          franchise de 300€, un sinistre de 250€ ne sera pas indemnisé, mais un sinistre de 350€ sera
                          intégralement remboursé.
                        </li>
                        <li>
                          <strong>Franchise proportionnelle</strong> : Pourcentage du montant des dommages. Exemple :
                          avec une franchise de 10%, pour un sinistre de 2 000€, vous conserverez 200€ à votre charge.
                        </li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Franchise en assurance auto</h4>
                      <p className="text-gray-700">En assurance auto, la franchise s'applique généralement :</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Aux garanties dommages tous accidents</li>
                        <li>Au vol et à l'incendie</li>
                        <li>Au bris de glace (parfois sans franchise)</li>
                      </ul>
                      <p className="text-gray-700 mt-2">
                        La franchise peut être majorée pour les conducteurs novices ou en cas de sinistres répétés.
                      </p>

                      <h4 className="font-semibold mt-4 mb-2">Franchise en assurance habitation</h4>
                      <p className="text-gray-700">
                        En assurance habitation, la franchise s'applique à la plupart des garanties :
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Dégâts des eaux</li>
                        <li>Incendie</li>
                        <li>Vol</li>
                        <li>Catastrophes naturelles (franchise légale fixée par l'État)</li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Comment choisir sa franchise ?</h4>
                      <p className="text-gray-700">Le choix de la franchise dépend de plusieurs facteurs :</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Votre budget</strong> : Une franchise élevée réduit votre prime mais augmente votre
                          participation en cas de sinistre
                        </li>
                        <li>
                          <strong>La valeur de vos biens</strong> : Pour des biens de grande valeur, une franchise plus
                          élevée peut être acceptable
                        </li>
                        <li>
                          <strong>Votre historique de sinistres</strong> : Si vous avez peu de sinistres, une franchise
                          plus élevée peut être avantageuse
                        </li>
                      </ul>

                      <div className="bg-blue-50 p-4 rounded-lg mt-4">
                        <p className="text-sm text-gray-700">
                          <strong>Notre conseil :</strong> Évaluez votre capacité financière à absorber un sinistre
                          avant de choisir une franchise élevée. Une franchise trop importante pourrait vous mettre en
                          difficulté en cas de sinistre coûteux. Nos conseillers peuvent vous aider à trouver le bon
                          équilibre entre prime et franchise.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link href="/devis" className="text-alpha-blue hover:underline font-medium flex items-center">
                        <span>Simuler différentes options de franchise</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Sous-section Économiser */}
            <div id="economiser" className="scroll-mt-24">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Économiser sur vos Assurances</h3>

              <div className="border rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-4 text-lg font-medium">
                    <span>Comment économiser sur mes assurances ?</span>
                    <span className="ml-2 flex-shrink-0 transition duration-300 group-open:rotate-180">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="p-4 pt-0 border-t">
                    <div className="mt-4">
                      <p className="text-gray-700">
                        Voici nos conseils pour optimiser vos contrats d'assurance et réduire vos dépenses sans
                        sacrifier votre protection :
                      </p>

                      <h4 className="font-semibold mt-4 mb-2">Astuces générales</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Comparez régulièrement les offres</strong> : Le marché de l'assurance évolue
                          constamment, comparez les tarifs tous les 2-3 ans
                        </li>
                        <li>
                          <strong>Regroupez vos contrats</strong> : La plupart des assureurs offrent des remises
                          multi-contrats (jusqu'à -15%)
                        </li>
                        <li>
                          <strong>Optez pour le paiement annuel</strong> : Le paiement mensuel entraîne souvent des
                          frais supplémentaires
                        </li>
                        <li>
                          <strong>Privilégiez les démarches en ligne</strong> : Certains assureurs proposent des tarifs
                          réduits pour la gestion 100% digitale
                        </li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Pour l'assurance auto</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Adaptez la formule à la valeur du véhicule</strong> : Un véhicule ancien ne nécessite
                          pas forcément une assurance tous risques
                        </li>
                        <li>
                          <strong>Limitez le kilométrage annuel</strong> : Si vous roulez peu, optez pour un contrat
                          petit rouleur
                        </li>
                        <li>
                          <strong>Installez un système antivol</strong> : Alarme, traceur GPS ou antidémarrage peuvent
                          réduire votre prime
                        </li>
                        <li>
                          <strong>Conduisez prudemment</strong> : Un bonus à 50% peut diviser votre prime par deux
                        </li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Pour l'assurance habitation</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Évaluez correctement la valeur de vos biens</strong> : Ni trop, ni trop peu
                        </li>
                        <li>
                          <strong>Installez des équipements de sécurité</strong> : Alarme, porte blindée, détecteurs de
                          fumée
                        </li>
                        <li>
                          <strong>Ajustez les garanties</strong> : Ne payez pas pour des garanties dont vous n'avez pas
                          besoin
                        </li>
                      </ul>

                      <h4 className="font-semibold mt-4 mb-2">Pour l'assurance santé</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          <strong>Choisissez un contrat adapté à vos besoins réels</strong> : Inutile de surpayer pour
                          des garanties que vous n'utiliserez pas
                        </li>
                        <li>
                          <strong>Optez pour une franchise</strong> : Accepter une petite franchise peut réduire
                          significativement votre cotisation
                        </li>
                        <li>
                          <strong>Vérifiez si vous pouvez bénéficier d'un contrat collectif</strong> : Via votre
                          employeur ou une association
                        </li>
                      </ul>

                      <div className="bg-blue-50 p-4 rounded-lg mt-4">
                        <p className="text-sm text-gray-700">
                          <strong>Notre conseil :</strong> Attention à ne pas sous-assurer pour économiser ! Une
                          protection insuffisante peut coûter beaucoup plus cher en cas de sinistre. Chez Alpha
                          Assurance, nous réalisons un bilan personnalisé pour optimiser vos contrats tout en maintenant
                          une protection adéquate.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link href="/contact" className="text-alpha-blue hover:underline font-medium flex items-center">
                        <span>Demander un bilan gratuit de vos assurances</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Vous n'avez pas trouvé votre réponse ? */}
        <section className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Vous n'avez pas trouvé votre réponse ?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions et vous accompagner dans
            vos démarches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-alpha-blue hover:bg-alpha-blue-light w-full sm:w-auto">Contactez-nous</Button>
            </Link>
            <a href="tel:0123456789">
              <Button
                variant="outline"
                className="border-alpha-blue text-alpha-blue hover:bg-alpha-blue hover:text-white w-full sm:w-auto"
              >
                Appelez-nous au 01 23 45 67 89
              </Button>
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
