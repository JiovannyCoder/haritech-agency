<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui"

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Accueil",
    to: "/"
  },
  {
    label: "Services",
    href: "#"
  },
  {
    label: "A propos",
    href: "#"
  },
  {
    label: "Blog",
    href: "#"
  },
  {
    label: "Contact",
    href: "#"
  }
])
</script>

<template>
  <UHeader>
    <template #title>
      <div>
        <AppLogo />
      </div>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
      <UButton
        color="neutral"
        variant="subtle"
      >
        Let's Talk
      </UButton>
    </template>
  </UHeader>
</template>
