import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Conditions Générales | Alpha Assurance",
  description:
    "Consultez les conditions générales d'Alpha Assurance, courtier en assurance. Informations sur nos services de courtage, nos engagements et vos droits.",
}

export default function ConditionsGeneralesPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Conditions Générales</h1>

        <div className="space-y-8">
          <section>
            <p className="mb-4">
              Dernière mise à jour :{" "}
              {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </p>

            <p className="mb-4">
              Les présentes conditions générales (ci-après les "CG") définissent les droits et obligations réciproques
              d'Alpha Assurance, courtier en assurance, et de ses clients dans le cadre des services de courtage
              proposés.
            </p>

            <p>
              Elles constituent la base juridique de nos relations contractuelles et s'appliquent à l'ensemble des
              services fournis par Alpha Assurance à ses clients.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">1. Préambule et définitions</h2>

            <p className="mb-4">
              Alpha Assurance est un courtier en assurance immatriculé au Registre du Commerce et des Sociétés sous le
              numéro RCS XXX XXX XXX, dont le siège social est situé au 40 rue Maria Visseaux, 08110 Carignan, France.
            </p>

            <p className="mb-4">
              Alpha Assurance est immatriculé à l'ORIAS (Organisme pour le Registre des Intermédiaires en Assurance)
              sous le numéro XX XXX XXX et est soumis au contrôle de l'Autorité de Contrôle Prudentiel et de Résolution
              (ACPR) - 4 Place de Budapest, CS 92459, 75436 Paris Cedex 09.
            </p>

            <p className="mb-4">
              Dans les présentes conditions générales, les termes suivants ont la signification qui leur est donnée
              ci-dessous :
            </p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>"Courtier"</strong> désigne Alpha Assurance, agissant en qualité d'intermédiaire en assurance
              </li>
              <li>
                <strong>"Client"</strong> désigne toute personne physique ou morale qui fait appel aux services d'Alpha
                Assurance
              </li>
              <li>
                <strong>"Assureur"</strong> désigne la compagnie d'assurance auprès de laquelle le contrat d'assurance
                est souscrit
              </li>
              <li>
                <strong>"Contrat d'assurance"</strong> désigne le contrat conclu entre l'assureur et le client, par
                l'intermédiaire d'Alpha Assurance
              </li>
              <li>
                <strong>"Services"</strong> désigne les prestations de conseil et d'intermédiation en assurance fournies
                par Alpha Assurance
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Objet des services</h2>

            <p className="mb-4">
              Alpha Assurance propose à ses clients des services de courtage en assurance comprenant :
            </p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>L'analyse des besoins d'assurance du client</li>
              <li>La recherche et la comparaison des offres d'assurance disponibles sur le marché</li>
              <li>La présentation des solutions d'assurance adaptées aux besoins du client</li>
              <li>L'assistance dans la souscription des contrats d'assurance</li>
              <li>L'accompagnement dans la gestion des contrats d'assurance</li>
              <li>L'assistance en cas de sinistre</li>
            </ul>

            <p>
              Alpha Assurance intervient en qualité d'intermédiaire entre le client et les compagnies d'assurance. À ce
              titre, Alpha Assurance n'est pas l'assureur et ne garantit pas les risques couverts par les contrats
              d'assurance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Indépendance du courtier</h2>

            <p className="mb-4">
              Alpha Assurance est un courtier indépendant qui n'est pas soumis à une obligation contractuelle de
              travailler exclusivement avec une ou plusieurs entreprises d'assurance.
            </p>

            <p className="mb-4">
              Alpha Assurance fonde ses analyses et ses conseils sur un nombre suffisant de contrats d'assurance offerts
              sur le marché, de façon à pouvoir recommander, selon des critères professionnels, le ou les contrats qui
              seraient les plus adaptés aux besoins du client.
            </p>

            <p>
              Sur demande du client, Alpha Assurance peut lui communiquer le nom des entreprises d'assurance avec
              lesquelles il travaille.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Obligations d'Alpha Assurance</h2>

            <p className="mb-4">Dans le cadre de ses services, Alpha Assurance s'engage à :</p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                Respecter son devoir de conseil et proposer des contrats cohérents avec les besoins et exigences du
                client
              </li>
              <li>Présenter les opérations d'assurance de manière claire et non trompeuse</li>
              <li>Informer le client sur les caractéristiques essentielles des contrats proposés</li>
              <li>Communiquer de façon transparente sur sa rémunération</li>
              <li>Respecter la confidentialité des informations qui lui sont confiées</li>
              <li>Accompagner le client tout au long de la vie du contrat</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Obligations du client</h2>

            <p className="mb-4">Pour permettre à Alpha Assurance de remplir ses obligations, le client s'engage à :</p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Fournir des informations exactes, sincères et complètes sur sa situation et ses besoins</li>
              <li>Communiquer tous les documents nécessaires à l'analyse de ses besoins</li>
              <li>
                Informer Alpha Assurance de toute modification de sa situation pouvant avoir un impact sur ses contrats
                d'assurance
              </li>
              <li>Régler les honoraires convenus pour les services fournis par Alpha Assurance, le cas échéant</li>
              <li>Respecter les obligations prévues dans les contrats d'assurance souscrits</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Rémunération du courtier</h2>

            <p className="mb-4">La rémunération d'Alpha Assurance peut prendre la forme :</p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                De commissions versées par les compagnies d'assurance, incluses dans la prime d'assurance payée par le
                client
              </li>
              <li>D'honoraires convenus avec le client et facturés directement à celui-ci</li>
              <li>D'une combinaison de commissions et d'honoraires</li>
            </ul>

            <p className="mb-4">
              Le mode de rémunération d'Alpha Assurance est précisé au client avant la conclusion de tout contrat
              d'assurance.
            </p>

            <p>
              Sur demande du client, Alpha Assurance peut lui communiquer le montant ou le mode de calcul de sa
              rémunération.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Responsabilité</h2>

            <p className="mb-4">
              Alpha Assurance est responsable de la bonne exécution de ses obligations de conseil et d'intermédiation.
            </p>

            <p className="mb-4">Toutefois, Alpha Assurance ne peut être tenu responsable :</p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Des conséquences d'informations inexactes ou incomplètes communiquées par le client</li>
              <li>Du refus de garantie opposé par l'assureur</li>
              <li>Des retards ou manquements qui résulteraient de cas de force majeure</li>
              <li>De l'exécution par l'assureur de ses obligations contractuelles</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Protection des données personnelles</h2>

            <p className="mb-4">
              Alpha Assurance collecte et traite les données personnelles de ses clients conformément au Règlement
              Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>

            <p className="mb-4">Les données personnelles sont collectées pour les finalités suivantes :</p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>L'analyse des besoins en assurance</li>
              <li>La souscription et la gestion des contrats d'assurance</li>
              <li>La gestion de la relation client</li>
              <li>L'exécution des obligations légales et réglementaires</li>
            </ul>

            <p>
              Pour plus d'informations sur la gestion des données personnelles, veuillez consulter notre{" "}
              <Link href="/politique-confidentialite" className="text-blue-600 hover:underline">
                Politique de Confidentialité
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">9. Réclamations et médiation</h2>

            <p className="mb-4">
              En cas de réclamation concernant les services d'Alpha Assurance, le client peut s'adresser à son
              interlocuteur habituel ou au Service Réclamations :
            </p>

            <ul className="list-none pl-0 mb-4 space-y-1">
              <li>
                Par courrier : Alpha Assurance - Service Réclamations, 40 rue Maria Visseaux, 08110 Carignan, France
              </li>
              <li>Par email : reclamations@alpha-assurance.fr</li>
              <li>Par téléphone : 01 23 45 67 89</li>
            </ul>

            <p className="mb-4">
              Alpha Assurance s'engage à accuser réception de la réclamation dans un délai maximum de 10 jours ouvrables
              et à y répondre dans un délai maximum de 2 mois.
            </p>

            <p className="mb-4">
              Si le désaccord persiste après la réponse donnée par Alpha Assurance, le client peut saisir gratuitement
              le Médiateur de l'Assurance :
            </p>

            <ul className="list-none pl-0 mb-4 space-y-1">
              <li>Par courrier : La Médiation de l'Assurance, TSA 50110, 75441 PARIS CEDEX 09</li>
              <li>Par internet : www.mediation-assurance.org</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">10. Loi applicable et juridiction compétente</h2>

            <p className="mb-4">Les présentes conditions générales sont régies par le droit français.</p>

            <p className="mb-4">
              Tout litige relatif à l'interprétation ou à l'exécution des présentes conditions générales sera soumis aux
              tribunaux compétents du ressort du siège social d'Alpha Assurance, sauf disposition légale contraire.
            </p>
          </section>

          <section>
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
