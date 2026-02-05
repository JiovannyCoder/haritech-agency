<script setup lang="ts">
import type { NavigationMenuItem, FooterColumn } from "@nuxt/ui"

const columns: FooterColumn[] = [
  {
    label: "Services",
    children: [
      {
        label: "UI/UX Experiences",
        to: "#"
      },
      {
        label: "Web Design",
        to: "#"
      },
      {
        label: "App Development",
        to: "#"
      },
      {
        label: "Modern Design",
        to: "#"
      },
      {
        label: "Landing Page",
        to: "#"
      },
      {
        label: "Careers",
        to: "#"
      }
    ]
  },
  {
    label: "Company",
    children: [
      {
        label: "Home",
        to: "/"
      },
      {
        label: "About Us",
        to: "#"
      },
      {
        label: "Services",
        to: "#"
      },
      {
        label: "Blog",
        to: "#"
      },
      {
        label: "Contact Us",
        to: "#"
      },
      {
        label: "Content Creation",
        to: "#"
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
                Follow Us On
              </h3>
              <div class="mt-4">
                <UButton
                  icon="i-simple-icons-facebook"
                  color="neutral"
                  variant="ghost"
                  size="xl"
                />
                <UButton
                  icon="i-simple-icons-whatsapp"
                  color="neutral"
                  variant="ghost"
                  size="xl"
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
      <p class="text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }} tout droit reservé.
      </p>
    </template>
  </UFooter>
</template>
