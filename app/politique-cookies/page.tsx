import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de Cookies | Alpha Assurance",
  description:
    "Découvrez comment Alpha Assurance utilise les cookies pour améliorer votre expérience sur notre site web et comment vous pouvez les gérer.",
  keywords: ["cookies", "politique cookies", "gestion cookies", "alpha assurance cookies", "confidentialité"],
  alternates: {
    canonical: "https://alpha-assurance.fr/politique-cookies",
  },
}

export default function PolitiqueCookiesPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Politique de Cookies</h1>

        <div className="space-y-8">
          <section>
            <p className="mb-4">
              Dernière mise à jour :{" "}
              {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </p>

            <p className="mb-4">
              La présente politique de cookies explique ce que sont les cookies, comment Alpha Assurance les utilise sur
              son site web et quelles sont vos options concernant leur utilisation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">1. Qu'est-ce qu'un cookie ?</h2>

            <p className="mb-4">
              Un cookie est un petit fichier texte qu'un site web sauvegarde sur votre ordinateur ou appareil mobile
              lorsque vous visitez ce site. Il permet au site web de mémoriser vos actions et préférences (comme
              l'identifiant de connexion, la langue, la taille de police et d'autres préférences d'affichage) pendant un
              certain temps, pour que vous n'ayez pas à les saisir à nouveau lorsque vous revenez sur le site ou
              naviguez d'une page à une autre.
            </p>

            <p>
              Les cookies peuvent être "persistants" ou "de session". Les cookies persistants restent sur votre appareil
              jusqu'à leur expiration ou jusqu'à ce que vous les supprimiez. Les cookies de session sont supprimés dès
              que vous fermez votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Comment utilisons-nous les cookies ?</h2>

            <p className="mb-4">Alpha Assurance utilise différents types de cookies pour les finalités suivantes :</p>

            <h3 className="text-lg font-medium mt-6 mb-3">2.1 Cookies strictement nécessaires</h3>
            <p className="mb-4">
              Ces cookies sont essentiels au fonctionnement de notre site web et ne peuvent pas être désactivés dans nos
              systèmes. Ils sont généralement établis en réponse à des actions que vous effectuez et qui constituent une
              demande de services, telles que la définition de vos préférences de confidentialité, la connexion ou le
              remplissage de formulaires. Vous pouvez configurer votre navigateur pour qu'il bloque ou vous avertisse de
              l'existence de ces cookies, mais certaines parties du site ne fonctionneront pas correctement.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">2.2 Cookies de performance</h3>
            <p className="mb-4">
              Ces cookies nous permettent de compter les visites et les sources de trafic afin de mesurer et d'améliorer
              les performances de notre site. Ils nous aident à savoir quelles pages sont les plus et les moins
              populaires et à voir comment les visiteurs se déplacent sur le site. Toutes les informations recueillies
              par ces cookies sont agrégées et donc anonymes. Si vous n'autorisez pas ces cookies, nous ne saurons pas
              quand vous avez visité notre site.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">2.3 Cookies de fonctionnalité</h3>
            <p className="mb-4">
              Ces cookies permettent au site de fournir une fonctionnalité et une personnalisation améliorées. Ils
              peuvent être définis par nous ou par des fournisseurs tiers dont nous avons ajouté les services à nos
              pages. Si vous n'autorisez pas ces cookies, certains ou tous ces services peuvent ne pas fonctionner
              correctement.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">2.4 Cookies de ciblage</h3>
            <p>
              Ces cookies peuvent être définis via notre site par nos partenaires publicitaires. Ils peuvent être
              utilisés par ces entreprises pour établir un profil de vos intérêts et vous montrer des publicités
              pertinentes sur d'autres sites. Ils ne stockent pas directement des informations personnelles, mais sont
              basés sur l'identification unique de votre navigateur et de votre appareil Internet. Si vous n'autorisez
              pas ces cookies, vous recevrez des publicités moins ciblées.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Quels cookies utilisons-nous ?</h2>

            <p className="mb-4">Voici une liste détaillée des cookies que nous utilisons sur notre site :</p>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 mt-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 border">Nom du cookie</th>
                    <th className="px-4 py-2 border">Type</th>
                    <th className="px-4 py-2 border">Durée</th>
                    <th className="px-4 py-2 border">Finalité</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">session_id</td>
                    <td className="px-4 py-2 border">Strictement nécessaire</td>
                    <td className="px-4 py-2 border">Session</td>
                    <td className="px-4 py-2 border">Gère votre session sur notre site</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 border">cookie_consent</td>
                    <td className="px-4 py-2 border">Strictement nécessaire</td>
                    <td className="px-4 py-2 border">1 an</td>
                    <td className="px-4 py-2 border">Enregistre vos préférences en matière de cookies</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">_ga</td>
                    <td className="px-4 py-2 border">Performance</td>
                    <td className="px-4 py-2 border">2 ans</td>
                    <td className="px-4 py-2 border">Utilisé par Google Analytics pour distinguer les utilisateurs</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 border">_gid</td>
                    <td className="px-4 py-2 border">Performance</td>
                    <td className="px-4 py-2 border">24 heures</td>
                    <td className="px-4 py-2 border">Utilisé par Google Analytics pour distinguer les utilisateurs</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">_gat</td>
                    <td className="px-4 py-2 border">Performance</td>
                    <td className="px-4 py-2 border">1 minute</td>
                    <td className="px-4 py-2 border">Utilisé par Google Analytics pour limiter le taux de requêtes</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 border">lang</td>
                    <td className="px-4 py-2 border">Fonctionnalité</td>
                    <td className="px-4 py-2 border">Session</td>
                    <td className="px-4 py-2 border">Mémorise la langue sélectionnée</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">_fbp</td>
                    <td className="px-4 py-2 border">Ciblage</td>
                    <td className="px-4 py-2 border">3 mois</td>
                    <td className="px-4 py-2 border">Utilisé par Facebook pour diffuser des publicités</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4">Cette liste n'est pas exhaustive et peut être mise à jour périodiquement.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Comment gérer les cookies ?</h2>

            <p className="mb-4">
              Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. Vous pouvez supprimer tous les
              cookies déjà présents sur votre ordinateur et vous pouvez configurer la plupart des navigateurs pour
              qu'ils les bloquent. Mais si vous faites cela, vous devrez peut-être ajuster manuellement certaines
              préférences chaque fois que vous visiterez un site, et certains services et fonctionnalités pourraient ne
              pas fonctionner.
            </p>

            <p className="mb-4">Vous pouvez gérer vos préférences en matière de cookies de plusieurs façons :</p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Via notre outil de gestion des cookies</strong> : Vous pouvez modifier vos préférences à tout
                moment en cliquant sur le lien "Gérer les cookies" en bas de notre site.
              </li>
              <li>
                <strong>Via les paramètres de votre navigateur</strong> : La plupart des navigateurs vous permettent de
                voir quels cookies vous avez et de les supprimer individuellement ou de bloquer les cookies d'un site
                particulier ou de tous les sites. Notez que si vous supprimez tous les cookies, toutes les préférences
                que vous avez définies seront perdues, y compris la possibilité de refuser les cookies, car cette
                fonction elle-même nécessite le placement d'un cookie de refus.
              </li>
            </ul>

            <p className="mb-4">Voici comment gérer les cookies dans les principaux navigateurs :</p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>

            <p>
              Pour plus d'informations sur les cookies et comment les gérer, vous pouvez visiter le site de la
              <a
                href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Commission Nationale de l'Informatique et des Libertés (CNIL)
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Cookies tiers</h2>

            <p className="mb-4">Notre site peut contenir des cookies tiers, notamment :</p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Google Analytics</strong> : Nous utilisons Google Analytics pour analyser l'utilisation de notre
                site. Google Analytics génère des informations statistiques et autres sur l'utilisation du site au moyen
                de cookies. Pour plus d'informations sur Google Analytics, veuillez consulter la
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  politique de confidentialité de Google
                </a>
                .
              </li>
              <li>
                <strong>Réseaux sociaux</strong> : Notre site peut inclure des fonctionnalités fournies par des réseaux
                sociaux tiers, comme des boutons de partage. Ces réseaux sociaux peuvent collecter des informations sur
                votre navigation sur notre site. Pour plus d'informations, veuillez consulter les politiques de
                confidentialité de ces réseaux sociaux.
              </li>
            </ul>

            <p>
              Nous n'avons aucun contrôle sur les cookies tiers. Veuillez consulter les politiques de confidentialité et
              de cookies des services tiers pour plus d'informations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Modifications de notre politique de cookies</h2>

            <p className="mb-4">
              Nous nous réservons le droit de modifier cette politique de cookies à tout moment. Tout changement sera
              publié sur cette page et, si les changements sont significatifs, nous vous fournirons une notification
              plus visible.
            </p>

            <p>Nous vous encourageons à consulter régulièrement cette page pour rester informé des mises à jour.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Contact</h2>

            <p className="mb-4">
              Si vous avez des questions concernant notre utilisation des cookies, veuillez nous contacter :
            </p>

            <ul className="list-none pl-0 mb-4 space-y-1">
              <li>Par email : dpo@alpha-assurance.fr</li>
              <li>Par courrier : Alpha Assurance - DPO, 40 rue Maria Visseaux, 08110 Carignan, France</li>
              <li>Par téléphone : 01 23 45 67 89</li>
            </ul>

            <p className="mt-8 text-sm text-gray-500">
              Dernière mise à jour :{" "}
              {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
