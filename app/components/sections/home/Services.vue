<script lang="ts" setup>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface EnterpriseSolution {
  number: string
  image: string
  imageAlt: string
  title: string
  description: string
  highlights: string[]
  ctaLabel: string
  ctaTo: string
}

const solutions: EnterpriseSolution[] = [
  {
    number: "01",
    image: "/images/home/dev-sur-mesure.jpg",
    imageAlt: "Équipe de développeurs Haritech Agency travaillant sur un projet web",
    title: "Développement sur-mesure",
    description:
      "Création de vos sites web, applications mobiles et projets numériques de A à Z, ou renfort de vos équipes techniques. Code propre, robuste et aux normes internationales.",
    highlights: [
      "Architecture technique",
      "Code reviews",
      "Tests automatisés"
    ],
    ctaLabel: "Voir notre expertise",
    ctaTo: "/#contact"
  },
  {
    number: "02",
    image: "/images/home/formation-entreprise.jpg",
    imageAlt: "Session de formation intra-entreprise par les formateurs Haritech Agency",
    title: "Formation Intra-Entreprise",
    description:
      "Nous déplaçons nos experts dans vos locaux pour former et faire monter vos équipes internes en compétences sur les technologies modernes et la relation client.",
    highlights: [
      "Équipes Dev (Upgrade)",
      "Équipes SAV & Support",
      "Téléconseillers"
    ],
    ctaLabel: "Planifier une formation",
    ctaTo: "/#contact"
  }
]

// La carte 01 est active par défaut, et bascule dynamiquement au survol
const activeIndex = ref(0)

const sectionRef = useTemplateRef<HTMLElement>("section-ref")
const headlineLineRef = useTemplateRef<HTMLElement>("headline-line-ref")
const headlineTextRef = useTemplateRef<HTMLElement>("headline-text-ref")
const titleRef = useTemplateRef<HTMLElement>("title-ref")
const descriptionRef = useTemplateRef<HTMLElement>("description-ref")
const sideNoteRef = useTemplateRef<HTMLElement>("side-note-ref")
const cardsGridRef = useTemplateRef<HTMLElement>("cards-grid-ref")

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

    if (sideNoteRef.value) {
      tl.from(sideNoteRef.value, {
        y: 14,
        opacity: 0,
        duration: 0.5
      }, "-=0.4")
    }

    if (cardsGridRef.value) {
      tl.from(cardsGridRef.value.children, {
        y: 30,
        opacity: 0,
        scale: 0.97,
        duration: 0.75,
        stagger: 0.14,
        ease: "expo.out"
      }, "-=0.3")
    }
  }, sectionRef.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <section ref="section-ref" id="entreprises" class="py-16 sm:py-24 bg-elevated/50 overflow-x-clip">
    <UContainer>
      <!-- En-tête -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div class="max-w-2xl text-left">
          <div class="flex items-center gap-3 mb-4">
            <span ref="headline-line-ref" class="w-5 h-[1.5px] bg-primary inline-block shrink-0" />
            <span ref="headline-text-ref"
              class="text-xs font-bold tracking-[0.15em] uppercase text-primary dark:text-brand-400">
              SOLUTIONS ENTREPRISES
            </span>
          </div>

          <h2 ref="title-ref" class="text-4xl sm:text-5xl font-extrabold tracking-tight text-highlighted leading-[1.1]">
            Nos Solutions pour les<br>Entreprises
          </h2>

          <p ref="description-ref" class="mt-4 text-base text-muted">
            Externalisation et montée en compétences de vos équipes.
          </p>
        </div>

        <p ref="side-note-ref" class="text-xs sm:text-sm text-muted lg:text-right max-w-xs leading-relaxed">
          Une expertise locale, des standards internationaux et un interlocuteur unique.
        </p>
      </div>

      <!-- Grille des 2 cartes avec bascule active au survol -->
      <div ref="cards-grid-ref" class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch pr-4 sm:pr-5 pb-9"
        @mouseleave="activeIndex = 0">
        <div v-for="(solution, index) in solutions" :key="solution.number" class="group relative h-full"
          @mouseenter="activeIndex = index">
          <!-- Plaque rouge : descendue uniquement sur la carte actuellement active -->
          <div
            class="absolute inset-0 bg-primary rounded-2xl pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            :class="[
              activeIndex === index
                ? 'opacity-100 translate-x-4 translate-y-7'
                : 'opacity-0 translate-x-0 translate-y-0'
            ]" aria-hidden="true" />

          <!-- Carte principale fixe -->
          <UCard variant="solid" :ui="{
            root: 'relative z-10 h-full bg-default text-default ring-1 ring-black/[0.06] dark:ring-white/10 shadow-none rounded-2xl overflow-hidden flex flex-col',
            header: 'p-6 sm:p-8 pb-0 border-none',
            body: 'p-6 sm:p-8 pt-6 flex-1 flex flex-col justify-between'
          }">
            <template #header>
              <div class="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-elevated">
                <NuxtImg :src="solution.image" :alt="solution.imageAlt"
                  class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />

                <span
                  class="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-md bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xs text-xs font-bold text-highlighted ring-1 ring-black/5 dark:ring-white/10">
                  {{ solution.number }}
                </span>
              </div>
            </template>

            <div>
              <h3 class="text-xl sm:text-2xl font-bold text-highlighted">
                {{ solution.title }}
              </h3>

              <p class="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                {{ solution.description }}
              </p>
            </div>

            <div class="mt-8 pt-6 border-t border-default">
              <ul class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
                <li v-for="item in solution.highlights" :key="item"
                  class="flex items-start gap-2 text-xs font-medium text-muted">
                  <UIcon name="i-lucide-check" class="size-3.5 text-primary dark:text-brand-400 mt-0.5 shrink-0" />
                  <span>{{ item }}</span>
                </li>
              </ul>

              <UButton :to="solution.ctaTo" color="primary" variant="outline" size="lg"
                trailing-icon="i-lucide-arrow-right" class="font-semibold rounded-xl">
                {{ solution.ctaLabel }}
              </UButton>
            </div>
          </UCard>
        </div>
      </div>
    </UContainer>
  </section>
</template>
