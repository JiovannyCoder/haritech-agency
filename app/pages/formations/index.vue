<script setup lang="ts">
const siteUrl = "https://haritechagency.com"
const pageUrl = `${siteUrl}/formations`
const pageTitle = "Bootcamps & Formations Pratiques en Présentiel à Antananarivo | Haritech Agency"
const pageDescription =
    "Formations intensives 100 % pratiques à Antananarivo (8h à 12h, 15 places max) : Développement Web Code Pur, Centre d'Appel, Annotation IA et Assistante Virtuelle. Inscription en ligne."

useSeoMeta({
    title: pageTitle,
    description: pageDescription,
    keywords:
        "bootcamp développement web Antananarivo, formation pratique informatique Madagascar, formation centre d'appel Antananarivo, formation annotation IA Madagascar, formation assistante virtuelle remote, Haritech Agency",
    author: "Haritina Jiovanny",
    robots: "index, follow, max-image-preview:large, max-snippet:-1",

    // Open Graph (Facebook, LinkedIn, WhatsApp)
    ogSiteName: "Haritech Agency",
    ogType: "website",
    ogLocale: "fr_MG",
    ogLocaleAlternate: ["fr_FR"],
    ogUrl: pageUrl,
    ogTitle: pageTitle,
    ogDescription:
        "Apprenez un métier numérique par la pratique à Antananarivo. Groupes limités à 15 places, livrable concret et attestation de formation pratique.",
    ogImage: `${siteUrl}/og-image.jpg`,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageType: "image/jpeg",
    ogImageAlt: "Bootcamps et formations pratiques en présentiel à Antananarivo — Haritech Agency",

    // Twitter / X
    twitterCard: "summary_large_image",
    twitterTitle: pageTitle,
    twitterDescription: pageDescription,
    twitterImage: `${siteUrl}/og-image.jpg`,
    twitterImageAlt: "Formations pratiques en présentiel à Antananarivo — Haritech Agency"
})

useHead({
    htmlAttrs: {
        lang: "fr"
    },
    link: [
        { rel: "canonical", href: pageUrl }
    ],
    meta: [
        { name: "theme-color", media: "(prefers-color-scheme: light)", content: "#ffffff" },
        { name: "theme-color", media: "(prefers-color-scheme: dark)", content: "#0a0a0a" },
        { name: "geo.region", content: "MG-T" },
        { name: "geo.placename", content: "Antananarivo" }
    ],
    script: [
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "CollectionPage",
                        "@id": `${pageUrl}#webpage`,
                        url: pageUrl,
                        name: pageTitle,
                        description: pageDescription,
                        isPartOf: { "@id": `${siteUrl}/#website` },
                        about: { "@id": `${siteUrl}/#organization` },
                        inLanguage: "fr"
                    },
                    {
                        "@type": "ItemList",
                        "@id": `${pageUrl}#courses`,
                        name: "Catalogue des Bootcamps Pratiques Haritech Agency",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                item: {
                                    "@type": "Course",
                                    name: "Bootcamp Développement Web Pro (Code Pur)",
                                    description:
                                        "Formation intensive de 8h en présentiel à Antananarivo : architecture logicielle propre, API REST sécurisées, bases de données et déploiement en production.",
                                    url: `${siteUrl}/formations/developpement-web`,
                                    provider: { "@id": `${siteUrl}/#organization` }
                                }
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                item: {
                                    "@type": "Course",
                                    name: "Bootcamp Centre d'Appel & Relation Client",
                                    description:
                                        "Entraînement pratique de 12h en présentiel à Antananarivo : posture vocale, appels entrants et sortants, gestion des clients difficiles et refonte de CV.",
                                    url: `${siteUrl}/formations/centre-appel-sav`,
                                    provider: { "@id": `${siteUrl}/#organization` }
                                }
                            },
                            {
                                "@type": "ListItem",
                                position: 3,
                                item: {
                                    "@type": "Course",
                                    name: "Bootcamp Annotation IA & Contrôle Qualité",
                                    description:
                                        "Formation pratique de 12h sur l'étiquetage d'images (Bounding Boxes), l'évaluation de modèles d'IA (RLHF) et les tests de recrutement.",
                                    url: `${siteUrl}/formations/annotation-ia`,
                                    provider: { "@id": `${siteUrl}/#organization` }
                                }
                            },
                            {
                                "@type": "ListItem",
                                position: 4,
                                item: {
                                    "@type": "Course",
                                    name: "Bootcamp Assistante Virtuelle & Organisation Pro",
                                    description:
                                        "Formation pratique de 12h pour travailler à distance avec des clients francophones : rédaction administrative, agenda multi-fuseaux, facturation et prospection.",
                                    url: `${siteUrl}/formations/assistante-virtuelle`,
                                    provider: { "@id": `${siteUrl}/#organization` }
                                }
                            }
                        ]
                    },
                    {
                        "@type": "FAQPage",
                        "@id": `${pageUrl}#faq`,
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "Faut-il obligatoirement apporter son propre ordinateur portable ?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Oui pour les bootcamps Développement Web, Annotation IA (souris externe obligatoire) et Assistante Virtuelle, car vous configurez votre propre environnement de travail. Aucun ordinateur n'est requis pour le bootcamp Centre d'Appel & Relation Client."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Délivrez-vous un diplôme d'État ou une attestation ?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Nous sommes un centre de formation professionnelle pratique (structure enregistrée à Antananarivo), pas une université. Nous délivrons une Attestation de Formation Pratique Haritech Agency uniquement aux participants ayant validé le projet final ou l'examen blanc de fin de session."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Pourquoi demandez-vous un acompte de 50 % à l'inscription ?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Notre salle en U est strictement limitée à 15 participants afin de garantir un suivi individuel par le formateur. L'acompte de 50 % (payable via MVola, Orange Money, Airtel Money ou en espèces à l'agence) permet de réserver fermement votre place."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Quel niveau faut-il avoir pour rejoindre un bootcamp ?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Chaque fiche programme précise les prérequis exacts. Nos bootcamps sont accessibles aux étudiants, jeunes diplômés et professionnels en reconversion motivés par la pratique intensive."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Où se déroulent les formations à Antananarivo ?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Toutes nos sessions ont lieu en présentiel dans notre salle équipée à Antananarivo. L'adresse exacte et le point Google Maps vous sont transmis dès la validation de votre pré-inscription."
                                }
                            }
                        ]
                    }
                ]
            })
        }
    ]
})
</script>

<template>
    <UPage class="scroll-smooth">
        <SectionsFormationHero />
        <SectionsFormationCategoryGrid />
        <SectionsFormationUpcomingSessions />
        <SectionsFormationPathFinder />
        <SectionsFormationEnrollmentStep />
        <SectionsFormationFaq />
        <SectionsFormationB2bBanner />
    </UPage>
</template>
