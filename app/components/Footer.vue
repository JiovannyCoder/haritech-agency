<script setup lang="ts">
import type { FooterColumn } from "@nuxt/ui"

const columns: FooterColumn[] = [
  {
    label: "Nos Services",
    children: [
      {
        label: "Sites Vitrines & Landing Pages",
        href: "#nos-services"
      },
      {
        label: "Mini E-commerce",
        href: "#nos-services"
      },
      {
        label: "Applications Web Sur-Mesure",
        href: "#nos-services"
      },
      {
        label: "Dashboards & Analytics",
        href: "#nos-services"
      }
    ]
  },
  {
    label: "Navigation",
    children: [
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
    ]
  }
]
</script>

<template>
  <UFooter class="bg-elevated">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns">
          <template #left>
            <div>
              <h3 class="text-sm font-semibold">
                Suivez-nous Sur
              </h3>
              <div class="mt-4">
                <UButton
                  icon="i-simple-icons-facebook"
                  color="neutral"
                  variant="ghost"
                  size="xl"
                  to="https://facebook.com/haritechagency"
                  target="_blank"
                />
                <UButton
                  icon="i-simple-icons-whatsapp"
                  color="neutral"
                  variant="ghost"
                  size="xl"
                  to="https://wa.me/261382862245"
                  target="_blank"
                />
              </div>
            </div>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #right>
      <AppLogo />
    </template>
    <template #left>
      <p class="text-muted text-sm text-center">
        © {{ new Date().getFullYear() }} Haritech Agency — marque exploitée par Razafimaniraka Haritina Jiovanny
      </p>
    </template>
  </UFooter>
</template>
