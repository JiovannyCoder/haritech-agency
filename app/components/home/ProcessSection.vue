<script setup lang="ts">
import type { AccordionItem } from "@nuxt/ui"

const processSteps: AccordionItem[] = [
  {
    label: "Échange & Analyse",
    content: `
Nous prenons le temps d’analyser vos besoins, vos objectifs business et votre
cible. Cette phase de cadrage permet d’aligner la vision du projet, de clarifier
les enjeux et de poser des bases solides avant toute décision stratégique,
créative ou technique.
    `.trim()
  },
  {
    label: "Idées & Concepts",
    content: `
À partir de ces échanges, nous définissons des idées et des concepts pertinents
pour votre projet. Architecture globale, fonctionnalités clés et orientations
stratégiques sont pensées pour transformer vos objectifs en une solution
cohérente, efficace et durable.
    `.trim()
  },
  {
    label: "Design & Expérience",
    content: `
Nous concevons une interface moderne, intuitive et centrée sur l’expérience
utilisateur. Chaque choix de design vise à valoriser votre image de marque,
faciliter la navigation et maximiser l’engagement de vos utilisateurs.
    `.trim()
  },
  {
    label: "Développement & Livraison",
    content: `
Nous développons une solution robuste, sécurisée et évolutive à l’aide de
technologies modernes. Le code est structuré pour être maintenable, scalable
et prêt à accompagner la croissance et les évolutions futures de votre projet.
    `.trim()
  }
]
</script>

<template>
  <UPageSection
    id="Processus"
    orientation="horizontal"
    class="bg-elevated"
  >
    <template #headline>
      <div class="text-primary font-semibold">
        Processus de travail
      </div>
    </template>
    <template #title>
      <h2 class="text-left leading-tight">
        De la stratégie à la livraison, en toute simplicité
      </h2>
    </template>
    <div>
      <p>
        Nous suivons un processus clair, structuré et orienté résultats pour transformer votre vision en réalité. De la
        compréhension de vos objectifs à la conception et au développement, nous donnons vie à vos idées.
      </p>
      <div class="mt-10">
        <UButton
          trailing-icon="i-lucide-arrow-right"
          size="xl"
          href="#contact"
        >
          Discutons
        </UButton>
      </div>
    </div>
    <div>
      <UAccordion
        :items="processSteps"
        :ui="{
          label: 'md:text-2xl text-xl py-5'
        }"
      >
        <template #leading="{ index }">
          <div
            class="mr-2 text-xl font-bold h-10 w-10 flex justify-center items-center rounded-full border-primary border"
          >
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
