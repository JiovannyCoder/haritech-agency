<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui"

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Accueil",
    to: "/"
  },
  {
    label: "Services",
    to: "#nos-services"
  },
  {
    label: "Pourquoi nous",
    to: "#a-propos-de-nous"
  },
  {
    label: "Tarifs",
    to: "#contact"
  },
  {
    label: "Formations",
    to: "/formations",
    external: true
  }
])
</script>

<template>
  <UHeader mode="drawer">
    <template #title>
      <div>
        <AppLogo />
      </div>
    </template>

    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <UColorModeButton />
      <UButton>
        Devis gratuit
      </UButton>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
