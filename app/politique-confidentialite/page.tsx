import Link from "next/link"

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Politique de Confidentialité</h1>

        <div className="space-y-8">
          <section>
            <p className="mb-4">
              Dernière mise à jour :{" "}
              {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </p>

            <p className="mb-4">
              Alpha Assurance s'engage à protéger la vie privée des utilisateurs de son site internet et la
              confidentialité des informations personnelles que vous nous confiez. Cette politique de confidentialité
              décrit comment nous collectons, utilisons, partageons et protégeons vos données personnelles conformément
              au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>

            <p>
              En utilisant notre site web et nos services, vous acceptez les pratiques décrites dans la présente
              politique de confidentialité.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">1. Collecte des données personnelles</h2>

            <p className="mb-4">Nous collectons vos données personnelles lorsque vous :</p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Visitez notre site web</li>
              <li>Créez un compte sur notre espace client</li>
              <li>Demandez un devis ou souscrivez à un contrat d'assurance</li>
              <li>Contactez notre service client</li>
              <li>Déclarez un sinistre</li>
              <li>Participez à nos enquêtes de satisfaction</li>
              <li>Vous inscrivez à notre newsletter</li>
            </ul>

            <p className="mb-4">Les types de données personnelles que nous pouvons collecter incluent :</p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Données d'identification : nom, prénom, date de naissance, numéro de client</li>
              <li>Coordonnées : adresse postale, adresse email, numéro de téléphone</li>
              <li>Données de connexion : identifiants, mots de passe, historique de connexion</li>
              <li>Données financières : coordonnées bancaires, historique des paiements</li>
              <li>Données relatives aux contrats : type de contrat, garanties souscrites, montant des primes</li>
              <li>Données relatives aux sinistres : date, nature, circonstances, documents justificatifs</li>
              <li>Données de navigation : cookies, adresse IP, pages visitées</li>
            </ul>

            <p>
              Certaines données sensibles peuvent être collectées dans le cadre de nos services d'assurance, notamment
              des données de santé pour les contrats d'assurance santé. Ces données font l'objet d'une protection
              renforcée et ne sont collectées qu'avec votre consentement explicite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Finalités du traitement</h2>

            <p className="mb-4">Nous traitons vos données personnelles pour les finalités suivantes :</p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Gestion de la relation client et fourniture de nos services d'assurance</li>
              <li>Élaboration de devis et souscription de contrats</li>
              <li>Gestion des sinistres et versement des prestations</li>
              <li>Facturation et recouvrement des primes</li>
              <li>Lutte contre la fraude à l'assurance</li>
              <li>Respect de nos obligations légales et réglementaires</li>
              <li>Amélioration de nos produits et services</li>
              <li>Réalisation d'études statistiques et actuarielles</li>
              <li>Communication et marketing (avec votre consentement lorsque la loi l'exige)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Base légale du traitement</h2>

            <p className="mb-4">Nous traitons vos données personnelles sur les bases légales suivantes :</p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>L'exécution d'un contrat</strong> auquel vous êtes partie ou l'exécution de mesures
                précontractuelles prises à votre demande
              </li>
              <li>
                <strong>Le respect d'une obligation légale</strong> à laquelle nous sommes soumis
              </li>
              <li>
                <strong>Nos intérêts légitimes</strong>, notamment l'amélioration de nos services, la prévention de la
                fraude et la gestion de notre activité commerciale
              </li>
              <li>
                <strong>Votre consentement</strong>, notamment pour l'envoi de communications marketing ou le traitement
                de données sensibles
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Destinataires des données</h2>

            <p className="mb-4">Vos données personnelles peuvent être communiquées aux destinataires suivants :</p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Les services internes d'Alpha Assurance en charge de la gestion de votre contrat</li>
              <li>Nos partenaires et sous-traitants intervenant dans la fourniture de nos services</li>
              <li>Les réassureurs et co-assureurs</li>
              <li>Les intermédiaires d'assurance (agents, courtiers)</li>
              <li>Les prestataires de services (informatiques, de paiement, etc.)</li>
              <li>Les professionnels de santé et établissements de soins (pour les contrats d'assurance santé)</li>
              <li>Les organismes publics, autorités administratives ou judicielles, lorsque la loi l'exige</li>
            </ul>

            <p>
              Nous veillons à ce que ces destinataires traitent vos données avec le même niveau de protection que nous
              et conformément à la réglementation applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Durée de conservation des données</h2>

            <p className="mb-4">
              Nous conservons vos données personnelles pendant la durée nécessaire à la réalisation des finalités pour
              lesquelles elles ont été collectées, augmentée des délais légaux de prescription applicables.
            </p>

            <p className="mb-4">À titre indicatif, les principales durées de conservation sont les suivantes :</p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Données relatives aux prospects : 3 ans à compter du dernier contact</li>
              <li>Données relatives aux contrats : durée du contrat + 5 ans (délai de prescription légale)</li>
              <li>Données relatives aux sinistres : durée du règlement du sinistre + 10 ans</li>
              <li>Données de connexion et cookies : 13 mois maximum</li>
              <li>Données comptables et fiscales : 10 ans</li>
            </ul>

            <p>À l'issue de ces périodes, vos données sont supprimées ou anonymisées.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Sécurité des données</h2>

            <p className="mb-4">
              Alpha Assurance met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos
              données personnelles contre la destruction accidentelle ou illicite, la perte, l'altération, la
              divulgation non autorisée ou l'accès non autorisé.
            </p>

            <p className="mb-4">Ces mesures incluent notamment :</p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Le chiffrement des données sensibles</li>
              <li>Des contrôles d'accès stricts</li>
              <li>Des pare-feu et systèmes de détection d'intrusion</li>
              <li>Des audits de sécurité réguliers</li>
              <li>La sensibilisation et la formation de notre personnel</li>
            </ul>

            <p>
              En cas de violation de données susceptible d'engendrer un risque élevé pour vos droits et libertés, nous
              vous en informerons dans les conditions prévues par la réglementation applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Transferts de données hors de l'Union Européenne</h2>

            <p className="mb-4">
              En principe, vos données personnelles sont traitées au sein de l'Union Européenne. Toutefois, pour
              certaines opérations spécifiques, nous pouvons avoir recours à des sous-traitants établis en dehors de
              l'Union Européenne.
            </p>

            <p>
              Dans ce cas, nous nous assurons que ces transferts sont encadrés par des garanties appropriées
              conformément à la réglementation applicable (décision d'adéquation, clauses contractuelles types, règles
              d'entreprise contraignantes, etc.) et que vos données bénéficient d'un niveau de protection équivalent à
              celui garanti au sein de l'Union Européenne.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Vos droits</h2>

            <p className="mb-4">
              Conformément à la réglementation applicable en matière de protection des données personnelles, vous
              disposez des droits suivants :
            </p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Droit d'accès</strong> : vous pouvez obtenir la confirmation que des données vous concernant
                sont traitées et, le cas échéant, accéder à ces données
              </li>
              <li>
                <strong>Droit de rectification</strong> : vous pouvez demander la correction des données inexactes ou
                incomplètes vous concernant
              </li>
              <li>
                <strong>Droit à l'effacement</strong> : vous pouvez demander l'effacement de vos données dans certains
                cas
              </li>
              <li>
                <strong>Droit à la limitation du traitement</strong> : vous pouvez demander la limitation du traitement
                de vos données dans certains cas
              </li>
              <li>
                <strong>Droit à la portabilité</strong> : vous pouvez recevoir vos données dans un format structuré,
                couramment utilisé et lisible par machine, et les transmettre à un autre responsable de traitement
              </li>
              <li>
                <strong>Droit d'opposition</strong> : vous pouvez vous opposer au traitement de vos données pour des
                raisons tenant à votre situation particulière, notamment lorsque le traitement est fondé sur notre
                intérêt légitime
              </li>
              <li>
                <strong>Droit de retirer votre consentement</strong> à tout moment, lorsque le traitement est fondé sur
                votre consentement
              </li>
              <li>
                <strong>Droit de définir des directives</strong> relatives au sort de vos données après votre décès
              </li>
            </ul>

            <p className="mb-4">
              Pour exercer ces droits, vous pouvez contacter notre Délégué à la Protection des Données :
            </p>

            <ul className="list-none pl-6 mb-4 space-y-1">
              <li>Par email : dpo@alpha-assurance.fr</li>
              <li>Par courrier : Alpha Assurance - DPO, 40 rue Maria Visseaux, 08110 Carignan, France</li>
            </ul>

            <p className="mb-4">
              Nous nous efforcerons de répondre à votre demande dans les meilleurs délais et, en tout état de cause,
              dans un délai d'un mois à compter de la réception de votre demande. Ce délai peut être prolongé de deux
              mois supplémentaires si nécessaire, compte tenu de la complexité et du nombre de demandes.
            </p>

            <p>
              Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser
              une réclamation à la Commission Nationale de l'Informatique et des Libertés (CNIL) : www.cnil.fr.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">9. Cookies et technologies similaires</h2>

            <p className="mb-4">
              Notre site web utilise des cookies et technologies similaires pour améliorer votre expérience de
              navigation, analyser l'utilisation du site et personnaliser nos contenus et publicités.
            </p>

            <p className="mb-4">Les types de cookies que nous utilisons sont les suivants :</p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Cookies strictement nécessaires</strong> : essentiels au fonctionnement du site
              </li>
              <li>
                <strong>Cookies de performance</strong> : pour analyser l'utilisation du site et améliorer ses
                performances
              </li>
              <li>
                <strong>Cookies de fonctionnalité</strong> : pour mémoriser vos préférences
              </li>
              <li>
                <strong>Cookies de ciblage</strong> : pour vous proposer des contenus et publicités personnalisés
              </li>
            </ul>

            <p className="mb-4">
              Vous pouvez à tout moment modifier vos préférences en matière de cookies en cliquant sur le lien "Gérer
              les cookies" en bas de notre site. Vous pouvez également configurer votre navigateur pour refuser tous les
              cookies ou vous alerter lorsque des cookies sont envoyés.
            </p>

            <p>
              Pour plus d'informations sur les cookies et comment les gérer, veuillez consulter notre{" "}
              <Link href="/politique-cookies" className="text-blue-600 hover:underline">
                Politique de Cookies
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">10. Modification de la politique de confidentialité</h2>

            <p className="mb-4">
              Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment, notamment
              pour l'adapter aux évolutions législatives et réglementaires ou à nos pratiques.
            </p>

            <p className="mb-4">
              En cas de modification substantielle, nous vous en informerons par tout moyen approprié et, si nécessaire,
              recueillerons à nouveau votre consentement.
            </p>

            <p>
              Nous vous invitons à consulter régulièrement cette page pour prendre connaissance des éventuelles
              modifications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">11. Contact</h2>

            <p className="mb-4">
              Pour toute question concernant la présente politique de confidentialité ou le traitement de vos données
              personnelles, vous pouvez contacter notre Délégué à la Protection des Données :
            </p>

            <ul className="list-none pl-0 mb-4 space-y-1">
              <li>Par email : dpo@alpha-assurance.fr</li>
              <li>Par courrier : Alpha Assurance - DPO, 40 rue Maria Visseaux, 08110 Carignan, France</li>
              <li>Par téléphone : 01 23 45 67 89</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
