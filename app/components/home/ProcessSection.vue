<script setup lang="ts">
import type { AccordionItem } from "@nuxt/ui"

const processSteps: AccordionItem[] = [
  {
    label: "Discussion",
    content: `
Nous échangeons pour comprendre précisément vos besoins, vos objectifs business
et votre cible. Cette étape permet d’aligner la vision du projet, d’éviter les
malentendus et de poser une base solide avant toute décision technique ou créative.
    `.trim()
  },
  {
    label: "Ideas & Concepts",
    content: `
À partir des échanges, nous proposons des idées et des concepts adaptés à votre
projet. Cela inclut l’architecture globale, les fonctionnalités clés et les
choix stratégiques afin de transformer vos objectifs en une solution cohérente
et efficace.
    `.trim()
  },
  {
    label: "Design",
    content: `
Nous concevons une interface moderne, claire et orientée expérience utilisateur.
Le design n’est pas seulement esthétique : il vise à guider l’utilisateur,
renforcer votre image de marque et maximiser l’engagement.
    `.trim()
  },
  {
    label: "Development",
    content: `
Nous développons une solution performante, sécurisée et évolutive en utilisant
des technologies modernes. Le code est pensé pour être maintenable, scalable et
prêt pour les évolutions futures de votre projet.
    `.trim()
  }
]
</script>

<template>
  <UPageSection orientation="horizontal">
    <template #headline>
      <div class="text-primary font-semibold">
        Work Process
      </div>
    </template>
    <template #title>
      <h2 class="text-left leading-tight">
        Our Process design, and Deliver Simplified
      </h2>
    </template>
    <div>
      <p>We follow a simple mature driven process to bring your vision to real. From understanding your goals to desiging and developing to your dreams ideas to reality.</p>
      <div class="mt-10">
        <UButton
          trailing-icon="i-lucide-arrow-right"
          size="xl"
        >
          Let's Talk
        </UButton>
      </div>
    </div>
    <div>
      <UAccordion
        :items="processSteps"
        :ui="{
          label: 'text-2xl py-5'
        }"
      >
        <template #leading="{ index }">
          <div class="mr-2 text-xl font-bold h-10 w-10 flex justify-center items-center rounded-full border-primary border">
            0{{ index + 1 }}
          </div>
        </template>
      </UAccordion>
    </div>
    <div>
      <NuxtImg
        src="/images/home/process.png"
        alt="Process image"
        class="w-full rounded-2xl"
      />
    </div>
  </UPageSection>
</template>
