<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui"

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Accueil",
    to: "/",
    exactHash: true,
  },
  {
    label: "Services",
    to: "/#nos-services",
    exactHash: true,
  },
  {
    label: "Pourquoi nous",
    to: "/#pourquoi-nous",
    exactHash: true,
  },
  {
    label: "Tarifs",
    to: "/#tarifs",
    exactHash: true,
  },
  {
    label: "Contact",
    to: "/#contact",
    exactHash: true,
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
      <!-- <UColorModeButton /> -->
      <UButton class="hidden md:flex" to="/#contact">
        Devis gratuit
      </UButton>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
