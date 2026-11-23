<script lang="ts" setup>
const siteUrl = "https://haritechagency.com"
const pageTitle = "Haritech Agency | Formation Numérique & Développement Web à Madagascar"
const pageDescription =
  "Centre de formation pratique en présentiel à Antananarivo (Développement Web, IA, BPO) et agence d'ingénierie logicielle sur-mesure pour les entreprises."

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  keywords:
    "formation développement web Antananarivo, école informatique Madagascar, formation IA Madagascar, agence développement web sur-mesure, formation intra-entreprise Madagascar, Laravel Spring Boot React Vue, BPO assistantes virtuelles, Haritech Agency, Haritina Jiovanny",
  author: "Haritina Jiovanny",
  robots: "index, follow, max-image-preview:large, max-snippet:-1",

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  ogSiteName: "Haritech Agency",
  ogType: "website",
  ogLocale: "fr_MG",
  ogLocaleAlternate: ["fr_FR"],
  ogUrl: `${siteUrl}/`,
  ogTitle: "Haritech Agency | Formation aux Métiers du Numérique & Solutions B2B",
  ogDescription:
    "Devenez un professionnel performant avec ou sans l'IA. Cursus 100% pratique à Antananarivo et accompagnement technique sur-mesure pour les entreprises.",
  ogImage: `${siteUrl}/og-image.jpg`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: "image/jpeg",
  ogImageAlt: "Haritech Agency — Formation numérique et développement sur-mesure à Antananarivo",

  // Twitter / X
  twitterCard: "summary_large_image",
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: `${siteUrl}/og-image.jpg`,
  twitterImageAlt: "Haritech Agency — Formation et ingénierie logicielle à Madagascar"
})

useHead({
  htmlAttrs: {
    lang: "fr"
  },
  link: [
    { rel: "canonical", href: `${siteUrl}/` }
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
            "@type": ["Organization", "EducationalOrganization"],
            "@id": `${siteUrl}/#organization`,
            name: "Haritech Agency",
            url: `${siteUrl}/`,
            logo: `${siteUrl}/logo.png`,
            image: `${siteUrl}/og-image.jpg`,
            description: pageDescription,
            email: "contact@haritechagency.com",
            founder: {
              "@type": "Person",
              name: "Haritina Jiovanny"
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Antananarivo",
              addressCountry: "MG"
            },
            areaServed: [
              { "@type": "City", name: "Antananarivo" },
              { "@type": "Country", name: "Madagascar" },
              "International"
            ],
            sameAs: [
              "https://facebook.com/haritechagency"
            ]
          },
          {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            url: `${siteUrl}/`,
            name: "Haritech Agency",
            publisher: { "@id": `${siteUrl}/#organization` },
            inLanguage: "fr"
          }
        ]
      })
    }
  ]
})
</script>

<template>
  <UPage class="scroll-smooth">
    <SectionsHomeHero />
    <SectionsHomeFormations />
    <SectionsHomeServices />
    <SectionsHomeWhyChooseUse />
    <SectionsHomeContact />
  </UPage>
</template>