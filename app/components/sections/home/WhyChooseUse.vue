<script lang="ts" setup>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const pillars = [
    {
        number: "01",
        icon: "i-lucide-target",
        title: "100% Pratique & Présentiel",
        description:
            "Pas de cours théoriques passifs. Nos apprenants codent et pratiquent chaque jour dans nos espaces."
    },
    {
        number: "02",
        icon: "i-lucide-sparkles",
        title: "Technologies Modernes",
        description:
            "Nous alignons nos programmes et nos stacks de développement sur les demandes réelles du marché international."
    },
    {
        number: "03",
        icon: "i-lucide-check",
        title: "Ingénierie de Précision",
        description:
            "Chaque projet client bénéficie d'une révision de code stricte et d'une documentation exhaustive."
    }
]

const activeIndex = ref(1)

const sectionRef = useTemplateRef<HTMLElement>("section-ref")
const headlineLineRef = useTemplateRef<HTMLElement>("headline-line-ref")
const headlineTextRef = useTemplateRef<HTMLElement>("headline-text-ref")
const titleRef = useTemplateRef<HTMLElement>("title-ref")
const descriptionRef = useTemplateRef<HTMLElement>("description-ref")
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

        if (cardsGridRef.value) {
            tl.from(cardsGridRef.value, {
                y: 28,
                opacity: 0,
                duration: 0.75,
                ease: "expo.out"
            }, "-=0.3")

            tl.from(cardsGridRef.value.children, {
                y: 20,
                opacity: 0,
                duration: 0.55,
                stagger: 0.12,
                ease: "power3.out"
            }, "-=0.55")
        }
    }, sectionRef.value)
})

onUnmounted(() => {
    ctx?.revert()
})
</script>

<template>
    <section ref="section-ref" id="pourquoi-haritech" class="py-16 sm:py-24 bg-default">
        <UContainer>
            <div class="max-w-2xl mb-12 text-left">
                <div class="flex items-center gap-3 mb-4">
                    <span ref="headline-line-ref" class="w-5 h-[1.5px] bg-primary inline-block shrink-0" />
                    <span ref="headline-text-ref" class="text-xs font-bold tracking-[0.15em] uppercase text-primary">
                        POURQUOI HARITECH
                    </span>
                </div>

                <h2 ref="title-ref"
                    class="text-4xl sm:text-5xl font-extrabold tracking-tight text-highlighted leading-[1.1]">
                    Un partenaire technique de<br>confiance
                </h2>

                <p ref="description-ref" class="mt-4 text-base text-muted">
                    Pourquoi les entreprises et les apprenants choisissent nos standards.
                </p>
            </div>

            <div ref="cards-grid-ref"
                class="grid grid-cols-1 lg:grid-cols-3 rounded-2xl border border-default bg-default overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-default"
                @mouseleave="activeIndex = 1">
                <div v-for="(pillar, index) in pillars" :key="pillar.number"
                    class="relative overflow-hidden p-8 sm:p-10 flex flex-col justify-between min-h-[280px] cursor-default"
                    @mouseenter="activeIndex = index">
                    <span
                        class="pointer-events-none absolute -bottom-24 -left-24 size-[680px] rounded-full bg-primary origin-bottom-left transition-transform duration-[3000ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                        :class="activeIndex === index ? 'scale-100' : 'scale-0'" aria-hidden="true" />

                    <div class="relative z-10 flex items-center justify-between gap-4 mb-12">
                        <div class="size-10 rounded-lg flex items-center justify-center transition-colors duration-1000 ease-out shrink-0"
                            :class="activeIndex === index ? 'bg-white/15 text-white' : 'bg-elevated text-highlighted'">
                            <UIcon :name="pillar.icon" class="size-5" />
                        </div>

                        <span class="text-xs font-bold tracking-wider transition-colors duration-1000 ease-out"
                            :class="activeIndex === index ? 'text-white/70' : 'text-muted/60'">
                            {{ pillar.number }}
                        </span>
                    </div>

                    <div class="relative z-10">
                        <h3 class="text-lg font-bold transition-colors duration-1000 ease-out"
                            :class="activeIndex === index ? 'text-white' : 'text-highlighted'">
                            {{ pillar.title }}
                        </h3>

                        <p class="mt-3 text-sm leading-relaxed transition-colors duration-1000 ease-out"
                            :class="activeIndex === index ? 'text-white/85' : 'text-muted'">
                            {{ pillar.description }}
                        </p>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
