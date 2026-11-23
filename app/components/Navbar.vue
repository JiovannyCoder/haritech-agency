<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui"

const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  handleScroll()
  window.addEventListener("scroll", handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Accueil",
    to: "/",
    exactHash: true
  },
  {
    label: "Formations",
    to: "/formations",
    exactHash: true
  },
  {
    label: "Entreprises",
    to: "/#entreprises",
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
  <UHeader mode="drawer" :ui="{
    root: [
      'bg-default backdrop-blur-none border-b-0 transition-shadow duration-200',
      isScrolled ? 'shadow-sm' : 'shadow-none'
    ]
  }">
    <template #title>
      <div>
        <AppLogo />
      </div>
    </template>

    <UNavigationMenu :items="items" variant="link" content-orientation="vertical" :ui="{ content: 'w-96' }" />

    <template #right>
      <UColorModeButton />
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
