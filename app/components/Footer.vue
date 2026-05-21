<script setup lang="ts">
import type { FooterColumn } from "@nuxt/ui"

const columns: FooterColumn[] = [
  {
    label: "Nos Services",
    children: [
      {
        label: "Développement Dédié",
        href: "#nos-services"
      },
      {
        label: "Staff Augmentation",
        href: "#nos-services"
      },
      {
        label: "Maintenance & Support",
        href: "#nos-services"
      },
      {
        label: "Consulting Technique",
        href: "#nos-services"
      }
    ]
  },
  {
    label: "Informations",
    children: [
      {
        label: "Accueil",
        to: "/",
        exactHash: true,
      },
      {
        label: "Pourquoi nous choisir",
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
      },
      {
        label: "Politique de confidentialité",
        to: "/politique-de-confidentialite",
      }
    ]
  },
  {
    label: "Contact",
    children: [
      {
        label: "Page Haritech Agency",
        href: "https://facebook.com/haritechagency",
        icon: "i-simple-icons-facebook",
        target: "_blank"
      },
      {
        label: "contact@haritechagency.com",
        href: "mailto:contact@haritechagency.com",
        icon: "lucide-mail"
      },
      {
        label: "Antananarivo, Madagascar",
        icon: "lucide-map-pin"
      }
    ]
  }
]
</script>

<template>
  <UFooter class="dark bg-neutral-950">
    <template #top>
      <UContainer>
        <UFooterColumns :ui="{
          label: 'dark:text-white'
        }" :columns="columns">
          <template #left>
            <div>
              <AppLogo />
              <p class="text-muted mt-4">L'ingénierie logicielle de précision au service de votre croissance
                internationale.
              </p>
            </div>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>
    <template #bottom>
      <p class="text-muted text-sm text-center">
        © {{ new Date().getFullYear() }} Haritech Agency — Tous droits réservés.
        <!-- <br> Conçu avec précision et expertise par Haritina Jiovanny -->
      </p>
    </template>
  </UFooter>
</template>
