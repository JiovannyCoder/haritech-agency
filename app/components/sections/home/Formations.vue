<script lang="ts" setup>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const tags = [
  "Laravel",
  "Spring Boot",
  "Frontend (React/Vue)",
  "Intégration IA"
]

const upcomingPrograms = [
  {
    number: "01",
    title: "Assistantes Virtuelles",
    description: "Maîtrise complète des outils modernes & automatisation"
  },
  {
    number: "02",
    title: "SAV / BPO / Téléconseillers",
    description: "Coaching intensif et maîtrise de la relation client"
  },
  {
    number: "03",
    title: "Digital & Métiers de l'IA",
    description: "Annotation de données et bases du Prompt Engineering"
  }
]

const sectionRef = useTemplateRef<HTMLElement>("section-ref")
const headlineLineRef = useTemplateRef<HTMLElement>("headline-line-ref")
const headlineTextRef = useTemplateRef<HTMLElement>("headline-text-ref")
const titleRef = useTemplateRef<HTMLElement>("title-ref")
const descriptionRef = useTemplateRef<HTMLElement>("description-ref")
const leftCardRef = useTemplateRef<HTMLElement>("left-card-ref")
const ringRef = useTemplateRef<HTMLElement>("ring-ref")
const tagsContainerRef = useTemplateRef<HTMLElement>("tags-container-ref")
const rightCardRef = useTemplateRef<HTMLElement>("right-card-ref")
const upcomingListRef = useTemplateRef<HTMLElement>("upcoming-list-ref")

let ctx: gsap.Context | null = null

onMounted(() => {
  if (!sectionRef.value) return
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

  ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top 80%",
        once: true
      }
    })

    // 1. En-tête : le trait s'étire, le headline apparaît, puis le titre se dévoile
    if (headlineLineRef.value) {
      tl.from(headlineLineRef.value, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.45
      }, 0)
    }

    if (headlineTextRef.value) {
      tl.from(headlineTextRef.value, {
        x: -10,
        opacity: 0,
        duration: 0.45
      }, 0.1)
    }

    if (titleRef.value) {
      tl.fromTo(
        titleRef.value,
        { y: 24, opacity: 0, clipPath: "inset(0% 0% 100% 0%)" },
        { y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 0.8, ease: "expo.out" },
        "-=0.25"
      )
    }

    if (descriptionRef.value) {
      tl.from(descriptionRef.value, {
        y: 16,
        opacity: 0,
        duration: 0.5
      }, "-=0.45")
    }

    // 2. Carte gauche (Parcours actif) + anneau + tags en cascade
    if (leftCardRef.value) {
      tl.from(leftCardRef.value, {
        y: 28,
        opacity: 0,
        scale: 0.96,
        duration: 0.75,
        ease: "expo.out"
      }, "-=0.3")
    }

    if (ringRef.value) {
      tl.from(ringRef.value, {
        scale: 0.65,
        opacity: 0,
        duration: 0.9,
        ease: "expo.out"
      }, "-=0.55")
    }

    if (tagsContainerRef.value) {
      tl.from(tagsContainerRef.value.children, {
        y: 12,
        opacity: 0,
        duration: 0.4,
        stagger: 0.06
      }, "-=0.45")
    }

    // 3. Carte droite (Prochainement) + lignes des programmes en cascade
    if (rightCardRef.value) {
      tl.from(rightCardRef.value, {
        y: 28,
        opacity: 0,
        scale: 0.96,
        duration: 0.75,
        ease: "expo.out"
      }, "-=0.65")
    }

    if (upcomingListRef.value) {
      tl.from(upcomingListRef.value.children, {
        y: 16,
        opacity: 0,
        duration: 0.45,
        stagger: 0.1
      }, "-=0.45")
    }
  }, sectionRef.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <section ref="section-ref" id="formations" class="py-16 sm:py-24 bg-elevated/50">
    <UContainer>
      <!-- En-tête -->
      <div class="max-w-2xl mb-12 text-left">
        <div class="flex items-center gap-3 mb-4">
          <span
            ref="headline-line-ref"
            class="w-5 h-[1.5px] bg-primary inline-block shrink-0"
          />
          <span
            ref="headline-text-ref"
            class="text-xs font-bold tracking-[0.15em] uppercase text-primary"
          >
            MÉTIERS DE DEMAIN
          </span>
        </div>

        <h2
          ref="title-ref"
          class="text-4xl sm:text-5xl font-extrabold tracking-tight text-highlighted leading-[1.1]"
        >
          Nos Programmes de<br>Formation
        </h2>

        <p ref="description-ref" class="mt-4 text-base text-muted">
          Des cursus immersifs en présentiel à Antananarivo.
        </p>
      </div>

      <!-- Grille des deux cartes -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <!-- Carte Gauche -->
        <div ref="left-card-ref" class="h-full">
          <UCard
            variant="solid"
            :ui="{
              root: 'bg-primary text-white ring-0 rounded-2xl relative overflow-hidden h-full',
              body: 'p-8 sm:p-10 h-full flex flex-col justify-between'
            }"
          >
            <div
              ref="ring-ref"
              class="absolute -top-28 -right-28 size-80 rounded-full border-[48px] border-white/[0.07] pointer-events-none"
            />

            <div class="flex items-center justify-between gap-4 relative z-10">
              <UBadge
                variant="soft"
                class="bg-white/15 text-white font-semibold tracking-wider uppercase text-[11px] px-3 py-1 rounded-full"
              >
                Parcours actif
              </UBadge>

              <div class="flex items-center gap-2 text-sm font-medium text-white">
                <span class="size-2 rounded-full bg-white animate-pulse" />
                <span>Disponible</span>
              </div>
            </div>

            <div class="my-10 relative z-10">
              <h3 class="text-2xl sm:text-3xl font-bold text-white mb-5">
                Pôle Développement Web
              </h3>

              <div ref="tags-container-ref" class="flex flex-wrap gap-2">
                <span
                  v-for="tag in tags"
                  :key="tag"
                  class="px-3.5 py-1.5 text-xs font-medium text-white bg-white/10 border border-white/15 rounded-lg"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <div class="relative z-10">
              <UButton
                to="/formations/developpement-web"
                color="neutral"
                variant="solid"
                size="lg"
                trailing-icon="i-lucide-arrow-right"
                class="bg-white text-primary hover:bg-gray-100 font-semibold rounded-xl px-5 py-3"
              >
                Découvrir les modules
              </UButton>
            </div>
          </UCard>
        </div>

        <!-- Carte Droite -->
        <div ref="right-card-ref" class="h-full">
          <UCard
            variant="solid"
            :ui="{
              root: 'bg-default text-default ring-0 rounded-2xl h-full',
              header: 'p-6 sm:px-10 sm:pt-9 sm:pb-6',
              body: 'px-6 sm:px-10 pb-8 sm:pb-10 pt-0'
            }"
          >
            <template #header>
              <div class="flex items-center gap-3.5">
                <div class="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <UIcon name="i-lucide-sparkles" class="size-5" />
                </div>
                <div>
                  <h3 class="text-sm font-bold text-highlighted">
                    Prochainement
                  </h3>
                  <p class="text-xs text-muted mt-0.5">
                    Inscriptions bientôt ouvertes
                  </p>
                </div>
              </div>
            </template>

            <div ref="upcoming-list-ref" class="divide-y divide-default">
              <div
                v-for="program in upcomingPrograms"
                :key="program.number"
                class="py-5 first:pt-6 last:pb-0 flex items-start gap-4"
              >
                <span class="text-xs font-bold text-primary mt-1 shrink-0">
                  {{ program.number }}
                </span>
                <div>
                  <h4 class="text-sm sm:text-base font-bold text-highlighted">
                    {{ program.title }}
                  </h4>
                  <p class="text-xs sm:text-sm text-muted mt-1">
                    {{ program.description }}
                  </p>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </UContainer>
  </section>
</template>
