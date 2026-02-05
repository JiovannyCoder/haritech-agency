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
  <UHeader mode="slideover">
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
      >
        Let's Talk
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
