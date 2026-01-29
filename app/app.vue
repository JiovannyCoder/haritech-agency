<script setup>
useHead({
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" }
  ],
  link: [
    { rel: "icon", href: "/favicon.ico" }
  ],
  htmlAttrs: {
    lang: "fr"
  }
})

const title = "Agence Haritech"
const description = "Agence web & digitale spécialisée dans la création de sites, applications et solutions sur mesure pour accélérer la croissance des entreprises."

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "/images/Logo Landscape on light.jpg",
  twitterImage: "/images/Logo Landscape on light.jpg",
  twitterCard: "summary_large_image"
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
