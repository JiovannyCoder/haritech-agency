<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"
import { gsap } from "gsap"

const links: ButtonProps[] = [
  {
    label: "Découvrir nos formations",
    to: "/#formations",
    size: "xl"
  },
  {
    label: "Vous êtes une entreprise ?",
    to: "/#entreprises",
    variant: "outline",
    color: "neutral",
    size: "xl"
  }
]

const trustPoints = ["100% pratique", "Présentiel à Antananarivo", "Formateurs expérimentés"]

const gridRef = useTemplateRef<HTMLElement>("grid-ref")
const headlineRef = useTemplateRef<HTMLElement>("headline-ref")
const titleRef = useTemplateRef<HTMLElement>("title-ref")
const descriptionRef = useTemplateRef<HTMLElement>("description-ref")
const bodyContainer = useTemplateRef<HTMLElement>("body-container")
const redBlockRef = useTemplateRef<HTMLElement>("red-block-ref")
const imageCardRef = useTemplateRef<HTMLElement>("image-card-ref")
const badgeRef = useTemplateRef<HTMLElement>("badge-ref")
const floatingCardRef = useTemplateRef<HTMLElement>("floating-card-ref")

onMounted(() => {
  if (!titleRef.value || !bodyContainer.value || !imageCardRef.value) return
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

  // Texte : la grille s'installe, puis le contenu remonte ligne après ligne.
  if (gridRef.value) tl.from(gridRef.value, { opacity: 0, duration: 0.9, ease: "power1.out" }, 0)
  if (headlineRef.value) tl.from(headlineRef.value, { y: 16, opacity: 0, duration: 0.5 }, 0.15)
  tl.fromTo(titleRef.value,
    { y: 24, opacity: 0, clipPath: "inset(0% 0% 100% 0%)" },
    { y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 0.8, ease: "expo.out" },
    "-=0.3"
  )
  if (descriptionRef.value) tl.from(descriptionRef.value, { y: 16, opacity: 0, duration: 0.5 }, "-=0.5")
  tl.from(bodyContainer.value.children, { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.3")

  // Visuel : les couches se révèlent de l'arrière vers l'avant, avec un petit
  // rebond sur les éléments qui "se posent" en dernier (badge, carte flottante).
  tl.from(imageCardRef.value, { opacity: 0, scale: 0.92, duration: 0.8, ease: "expo.out" }, 0.3)
  if (redBlockRef.value) tl.from(redBlockRef.value, { opacity: 0, scale: 0.7, duration: 0.6, ease: "expo.out" }, "-=0.35")
  if (badgeRef.value) tl.from(badgeRef.value, { opacity: 0, scale: 0.6, y: -10, duration: 0.5, ease: "back.out(1.7)" }, "-=0.3")
  if (floatingCardRef.value) tl.from(floatingCardRef.value, { opacity: 0, y: 24, duration: 0.6, ease: "back.out(1.4)" }, "-=0.25")

  // Petite respiration continue sur la carte flottante une fois posée.
  if (floatingCardRef.value) {
    tl.add(() => {
      gsap.to(floatingCardRef.value, { y: "+=6", duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1 })
    })
  }
})
</script>

<template>
  <UPageHero id="hero" orientation="horizontal" headline="Formation & services numériques — Antananarivo"
    title="Devenez un professionnel performant, avec ou sans l'IA."
    description="Haritech Agency forme les talents de Madagascar aux métiers du numérique et accompagne les entreprises dans leurs projets."
    :ui="{
      title: 'sm:text-6xl text-4xl font-semibold leading-12 sm:leading-18',
      description: 'sm:text-lg text-md'
    }">
    <template #top>
      <div
        ref="grid-ref"
        class="absolute inset-0 -z-10 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--ui-border)_35%,white)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--ui-border)_35%,white)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[linear-gradient(to_bottom,black,transparent_75%)]"
        aria-hidden="true"
      />
    </template>

    <template #headline>
      <span ref="headline-ref" class="text-primary font-semibold uppercase text-xs sm:text-sm tracking-wider">Formation & services numériques</span>
    </template>

    <template #title>
      <span ref="title-ref" class="block">Devenez un professionnel <span class="text-primary">performant</span>, avec ou sans l'IA.</span>
    </template>

    <template #description>
      <span ref="description-ref">Haritech Agency forme les talents de Madagascar aux métiers du numérique et accompagne les entreprises dans leurs projets.</span>
    </template>

    <template #body>
      <div ref="body-container" class="flex flex-col gap-8">
        <div class="flex items-center sm:gap-4 gap-3 flex-wrap">
          <UButton v-for="link in links" v-bind="link" :key="link.label" class="grow justify-center sm:grow-0" />
        </div>
        <ul class="flex items-center gap-4 sm:gap-6 flex-wrap text-sm text-muted border-t border-default pt-6">
          <li v-for="point in trustPoints" :key="point" class="flex items-center gap-2">
            <UIcon name="lucide-check" class="text-primary size-4 shrink-0" />
            {{ point }}
          </li>
        </ul>
      </div>
    </template>

    <div class="relative mb-8 sm:mb-10 w-full max-w-md mx-auto lg:max-w-none">
      <div ref="red-block-ref" class="absolute h-3/4 -bottom-1/10 w-2/3 right-0 bg-primary rounded-2xl" aria-hidden="true"></div>
      <div ref="image-card-ref" class="relative aspect-4/5 w-95/100 border-10 border-white rounded-2xl overflow-hidden bg-default">
        <NuxtImg class="absolute top-0 left-0 w-full h-full object-cover object-center" src="/images/home/bg-hero.jpg"
          alt="Session de formation Haritech Agency à Antananarivo" />
        <div ref="badge-ref" class="absolute top-4 left-4 sm:top-6 sm:left-6">
          <UBadge color="primary" variant="solid" class="rounded-full uppercase text-xs tracking-wider">
            100% présentiel
          </UBadge>
        </div>
      </div>
      <div
        ref="floating-card-ref"
        class="absolute bg-default md:w-75/100 w-85/100 left-6 md:left-20 -bottom-5 md:-bottom-10 rounded-2xl shadow-xl p-4 sm:p-5 flex items-center justify-between gap-2 md:gap-4 flex-wrap will-change-transform transform-gpu">
        <p class="font-semibold text-sm md:text-md">Apprendre par la pratique</p>
        <p class="text-muted text-xs md:text-sm">Antananarivo, Madagascar</p>
      </div>
    </div>
  </UPageHero>
</template>
