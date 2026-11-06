<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui"

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Accueil",
    to: "/",
    exactHash: true
  },
  {
    label: "Formations",
    children: formations.map((formation) => ({
      label: formation.title,
      // Le panneau horizontal n'affiche pas le badge des enfants : le statut
      // est donc intégré à la description.
      description: `${formationStatusLabel[formation.status]} · ${formation.description}`,
      badge: formationStatusLabel[formation.status],
      to: "/#formations"
    }))
  },
  {
    label: "Entreprises",
    to: "/#entreprises",
    exactHash: true
  },
  {
    label: "Qui sommes-nous",
    to: "/#qui-sommes-nous",
    exactHash: true
  },
  {
    label: "Contact",
    to: "/#contact",
    exactHash: true
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

    <UNavigationMenu
      :items="items"
      variant="link"
      content-orientation="vertical"
      :ui="{ content: 'w-96' }"
    />

    <template #right>
      <!-- <UColorModeButton /> -->
      <UButton class="hidden md:flex" to="/#contact">
        Nous contacter
      </UButton>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      <UButton to="/#contact" block class="mt-4">
        Nous contacter
      </UButton>
    </template>
  </UHeader>
</template>
