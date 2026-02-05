<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui"

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Accueil",
    to: "/"
  },
  {
    label: "Services",
    href: "#nos-services"
  },
  {
    label: "A propos",
    href: "#a-propos-de-nous"
  },
  {
    label: "Contact",
    href: "#contact"
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
    />

    <template #right>
      <UColorModeButton />
      <UButton
        color="neutral"
        variant="subtle"
        trailing-icon="i-lucide-arrow-right"
      >
        Discutons
      </UButton>
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>
