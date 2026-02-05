<script setup lang="ts">
const services = [
  {
    title: "Sites Vitrines & Landing Pages",
    points: [
      "Création de sites vitrines modernes et responsives",
      "Landing pages avec formulaires et newsletters",
      "Optimisation pour la génération de prospects qualifiés",
      "Idéal pour entrepreneurs et petites entreprises"
    ]
  },
  {
    title: "Mini E-commerce",
    points: [
      "Développement de boutiques en ligne simples et rapides",
      "Gestion facile des produits et commandes",
      "Vente en ligne adaptée aux artisans et commerçants locaux",
      "Solution technique légère et performante"
    ]
  },
  {
    title: "Applications Web Sur-Mesure",
    points: [
      "Conception d’applications web personnalisées",
      "Automatisation des processus et gestion des données",
      "Solutions adaptées aux besoins des entreprises et équipes",
      "Amélioration de l’efficacité opérationnelle"
    ]
  },
  {
    title: "Dashboards & Analytics",
    points: [
      "Création de dashboards interactifs et personnalisés",
      "Visualisation et analyse des données en temps réel",
      "Aide à la prise de décision pour managers et responsables",
      "Interface claire et intuitive pour un suivi efficace"
    ]
  }
]
</script>

<template>
  <UPageSection>
    <template #headline>
      <div class="text-primary font-semibold">
        Nos Services
      </div>
    </template>
    <template #title>
      <h2 class="text-left md:max-w-3/5 leading-tight ml-auto">
        Solutions <span class="text-muted"><span class="text-primary">sur-mesure </span> pour développer et faire prospérer votre business</span>
      </h2>
    </template>
    <template v-for="(service, i) in services">
      <UPageGrid>
        <div>
          <div class="md:text-2xl text-xl font-bold h-10 w-10 flex justify-center items-center rounded-full border-primary border">
            0{{ i+1 }}
          </div>
          <h3 class="md:text-4xl text-2xl font-semibold mt-10">
            {{ service.title }}
          </h3>
        </div>
        <div class=" md:pb-10">
          <NuxtImg
            :src="`/images/home/service-${i+1}.webp`"
            :alt="service.title"
            class="rounded-2xl object-cover h-full w-full"
          />
        </div>
        <div class="h-full grid grid-cols-4 gap-2 md:mt-[25%]">
          <div class="col-span-1 border-t mt-3" />
          <div class="col-span-3">
            <h4 class="text-xl font-semibold mb-4">
              {{ service.title }}
            </h4>
            <ul class="list-disc pl-5">
              <li
                v-for="point in service.points"
                :key="point"
                class="mb-2"
              >
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </UPageGrid>
    </template>
  </UPageSection>
</template>
