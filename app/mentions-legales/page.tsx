import Link from "next/link"

export default function MentionsLegalesPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Informations légales</h2>
            <p className="mb-4">
              Le site web Alpha Assurance est édité par la société Alpha Assurance, Société Anonyme au capital de 10 000
              000 euros, immatriculée au Registre du Commerce et des Sociétés sous le numéro RCS XXX XXX XXX.
            </p>
            <p className="mb-4">
              <strong>Siège social :</strong> 40 rue Maria Visseaux, 08110 Carignan, France
              <br />
              <strong>Numéro de téléphone :</strong> 01 23 45 67 89
              <br />
              <strong>Email :</strong> contact@alpha-assurance.fr
              <br />
              <strong>Directeur de la publication :</strong> Le Président Directeur Général d'Alpha Assurance
            </p>
            <p className="mb-4">
              Alpha Assurance est une société d'assurance régie par le Code des assurances, soumise au contrôle de
              l'Autorité de Contrôle Prudentiel et de Résolution (ACPR) - 4 Place de Budapest, CS 92459, 75436 Paris
              Cedex 09.
            </p>
            <p>
              <strong>Numéro d'immatriculation ORIAS :</strong> XX XXX XXX (vérifiable sur www.orias.fr)
              <br />
              <strong>Numéro de TVA intracommunautaire :</strong> FR XX XXX XXX XXX
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Hébergement</h2>
            <p>
              Le site Alpha Assurance est hébergé par la société Vercel Inc., dont le siège social est situé au 340 S
              Lemon Ave #4133, Walnut, CA 91789, USA.
              <br />
              <strong>Site web de l'hébergeur :</strong> https://vercel.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Propriété intellectuelle</h2>
            <p className="mb-4">
              L'ensemble des éléments constituant le site Alpha Assurance (textes, graphismes, logiciels, photographies,
              images, vidéos, sons, plans, logos, marques, créations et œuvres protégeables diverses, bases de données,
              etc.) ainsi que le site lui-même, relèvent des législations françaises et internationales sur le droit
              d'auteur et la propriété intellectuelle.
            </p>
            <p className="mb-4">
              Ces éléments sont la propriété exclusive d'Alpha Assurance. Toute reproduction, représentation,
              utilisation, adaptation, modification, incorporation, traduction, commercialisation, partielles ou
              intégrales, par quelque procédé et sur quelque support que ce soit (papier, numérique, etc.) sont
              interdites sans l'autorisation écrite préalable d'Alpha Assurance, sous réserve des exceptions prévues par
              la loi, sous peine de constituer un délit de contrefaçon de droit d'auteur et/ou de dessins et modèles
              et/ou de marque, puni de trois ans d'emprisonnement et de 300 000 euros d'amende.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Protection des données personnelles</h2>
            <p className="mb-4">
              Alpha Assurance s'engage à protéger la vie privée des utilisateurs de son site internet et la
              confidentialité des informations fournies. Les données personnelles recueillies sur le site sont traitées
              conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et
              Libertés.
            </p>
            <p className="mb-4">
              Les informations recueillies font l'objet d'un traitement informatique destiné à la gestion de la relation
              client, à la prospection commerciale, à l'exécution des contrats, à l'amélioration des services et
              produits, et à la gestion des réclamations et sinistres.
            </p>
            <p className="mb-4">
              Les destinataires des données sont les services internes d'Alpha Assurance, ses sous-traitants,
              partenaires, réassureurs et co-assureurs. Les données peuvent également être transmises aux autorités
              administratives ou judiciaires lorsque la loi l'exige.
            </p>
            <p className="mb-4">
              Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification,
              d'effacement, de limitation, de portabilité et d'opposition pour motif légitime aux données personnelles
              vous concernant. Pour exercer ces droits, adressez-vous à notre Délégué à la Protection des Données par
              email à dpo@alpha-assurance.fr ou par courrier à l'adresse suivante : Alpha Assurance - DPO, 40 rue Maria
              Visseaux, 08110 Carignan, France.
            </p>
            <p>
              Pour plus d'informations sur la gestion de vos données personnelles, veuillez consulter notre{" "}
              <Link href="/politique-confidentialite" className="text-blue-600 hover:underline">
                Politique de Confidentialité
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Cookies</h2>
            <p className="mb-4">
              Le site Alpha Assurance utilise des cookies pour améliorer l'expérience utilisateur, assurer le bon
              fonctionnement du site, établir des statistiques de visite et permettre le partage sur les réseaux
              sociaux.
            </p>
            <p className="mb-4">
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de
              votre visite sur notre site. Il permet de mémoriser vos préférences de navigation, de collecter des
              informations statistiques et de vous proposer des contenus adaptés à vos centres d'intérêt.
            </p>
            <p className="mb-4">
              Vous pouvez à tout moment désactiver les cookies en paramétrant votre navigateur. Cependant, cette
              désactivation pourrait empêcher l'utilisation de certaines fonctionnalités du site.
            </p>
            <p>
              Pour en savoir plus sur les cookies et comment les gérer, veuillez consulter notre{" "}
              <Link href="/politique-cookies" className="text-blue-600 hover:underline">
                Politique de Cookies
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Limitation de responsabilité</h2>
            <p className="mb-4">
              Alpha Assurance s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des
              informations diffusées sur son site, dont elle se réserve le droit de corriger, à tout moment et sans
              préavis, le contenu.
            </p>
            <p className="mb-4">
              Toutefois, Alpha Assurance ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations
              mises à disposition sur son site. En conséquence, Alpha Assurance décline toute responsabilité :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site ;
              </li>
              <li>
                Pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des
                informations mises à disposition sur le site ;
              </li>
              <li>
                Et plus généralement, pour tous dommages, directs ou indirects, qu'elles qu'en soient les causes,
                origines, nature ou conséquences, provoqués à raison de l'accès de quiconque au site ou de
                l'impossibilité d'y accéder, de même que l'utilisation du site et/ou du crédit accordé à une quelconque
                information provenant directement ou indirectement de ce dernier.
              </li>
            </ul>
            <p>
              Les liens hypertextes mis en place dans le cadre du site en direction d'autres ressources présentes sur le
              réseau Internet ne sauraient engager la responsabilité d'Alpha Assurance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Droit applicable et juridiction compétente</h2>
            <p className="mb-4">
              Les présentes mentions légales sont régies par le droit français. En cas de litige relatif à
              l'interprétation ou à l'exécution des présentes, la compétence exclusive est attribuée aux tribunaux
              compétents de Paris, nonobstant pluralité de défendeurs ou appel en garantie.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Médiation</h2>
            <p className="mb-4">
              Conformément aux dispositions du Code des assurances et du Code de la consommation, en cas de désaccord
              persistant après épuisement des procédures internes de traitement des réclamations, nos clients peuvent
              saisir gratuitement le Médiateur de l'Assurance à l'adresse suivante :
            </p>
            <p>
              <strong>La Médiation de l'Assurance</strong>
              <br />
              TSA 50110
              <br />
              75441 PARIS CEDEX 09
              <br />
              <Link
                href="https://www.mediation-assurance.org"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                www.mediation-assurance.org
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">9. Modification des mentions légales</h2>
            <p>
              Alpha Assurance se réserve le droit de modifier les présentes mentions légales à tout moment.
              L'utilisateur est donc invité à les consulter régulièrement.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Dernière mise à jour :{" "}
              {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
