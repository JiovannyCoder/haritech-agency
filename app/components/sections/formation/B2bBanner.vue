<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = useTemplateRef<HTMLElement>('section-ref')
const headlineTextRef = useTemplateRef<HTMLElement>('headline-text-ref')
const cardFrameRef = useTemplateRef<HTMLElement>('card-frame-ref')

const enterpriseTags = [
    'Mise à niveau dev selon votre stack',
    'Onboarding & coaching SAV',
    'Outils numériques'
]

let ctx: gsap.Context | null = null

onMounted(() => {
    if (!sectionRef.value) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    ctx = gsap.context(() => {
        const tl = gsap.timeline({
            defaults: { ease: 'power3.out' },
            scrollTrigger: {
                trigger: sectionRef.value,
                start: 'top 85%',
                once: true
            }
        })

        if (cardFrameRef.value) {
            tl.from(
                cardFrameRef.value,
                {
                    y: 20,
                    opacity: 0,
                    scale: 0.985,
                    duration: 0.7,
                    ease: 'expo.out'
                },
                0
            )
        }

        if (headlineTextRef.value) {
            tl.from(
                headlineTextRef.value,
                {
                    x: -10,
                    opacity: 0,
                    duration: 0.45
                },
                0.22
            )
        }
    }, sectionRef.value)
})

onUnmounted(() => {
    ctx?.revert()
})
</script>

<template>
    <section ref="section-ref" class="bg-neutral-100 py-12 sm:py-16">
        <UContainer>
            <div ref="card-frame-ref"
                class="rounded-2xl p-2 sm:p-2.5 bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-xl border border-white ring-1 ring-neutral-950/[0.07]">
                <div class="rounded-xl bg-default text-default ring-1 ring-neutral-950/[0.06] overflow-hidden">
                    <div class="flex flex-col lg:flex-row items-stretch">
                        <div class="flex-1 p-6 sm:p-8 flex flex-col justify-center text-left">
                            <span ref="headline-text-ref"
                                class="mb-2.5 inline-block text-xs font-bold tracking-[0.15em] uppercase text-primary">
                                Solutions entreprises
                            </span>

                            <h2 class="text-xl sm:text-2xl font-extrabold tracking-tight text-highlighted leading-snug">
                                Formez vos équipes internes
                                <span class="lg:block">sur-mesure à Antananarivo</span>
                            </h2>

                            <p class="mt-4 text-sm text-muted leading-relaxed max-w-2xl">
                                Nos formateurs interviennent dans vos locaux pour la mise à niveau technique de vos
                                développeurs selon votre stack, l’onboarding et le coaching de vos équipes SAV, ainsi
                                que la maîtrise des outils numériques.
                            </p>

                            <div class="mt-4 flex flex-wrap items-center gap-2">
                                <span v-for="tag in enterpriseTags" :key="tag"
                                    class="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-muted">
                                    {{ tag }}
                                </span>
                            </div>

                            <div class="mt-5">
                                <UButton to="/entreprises" color="primary" variant="solid" size="lg"
                                    class="w-full sm:w-auto justify-center rounded-sm font-bold">
                                    Découvrir nos formations en entreprise
                                </UButton>
                            </div>
                        </div>

                        <div
                            class="group lg:w-80 xl:w-96 shrink-0 h-48 m-6 sm:m-8 lg:my-6 lg:mr-6 lg:ml-0 rounded-lg overflow-hidden sm:h-56 lg:h-auto bg-neutral-100">
                            <img src="/images/formation/b2b-banner.jpg"
                                alt="Deux professionnels se serrant la main devant un ordinateur portable"
                                loading="lazy"
                                class="size-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105" />
                        </div>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
