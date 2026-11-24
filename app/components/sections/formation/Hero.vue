<script setup lang="ts">
import gsap from 'gsap'

const sectionRef = useTemplateRef<HTMLElement>('section-ref')

const proofs = [
    {
        icon: 'i-lucide-map-pin',
        label: '100 % Présentiel à Antananarivo'
    },
    {
        icon: 'i-lucide-users',
        label: '15 places max (Salle en U)'
    },
    {
        icon: 'i-lucide-terminal',
        label: '80 % Pratique / 20 % Concepts'
    },
    {
        icon: 'i-lucide-smartphone',
        label: 'Acompte 50 % via Mobile Money'
    }
]

let ctx: gsap.Context | null = null

onMounted(() => {
    if (!sectionRef.value) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    ctx = gsap.context(() => {
        const tl = gsap.timeline()

        tl.from('[data-hero-eyebrow]', {
            opacity: 0,
            x: -12,
            duration: 0.45,
            ease: 'power2.out'
        })
            .fromTo(
                '[data-hero-title]',
                { clipPath: 'inset(0% 0% 100% 0%)' },
                {
                    clipPath: 'inset(0% 0% 0% 0%)',
                    duration: 0.85,
                    ease: 'expo.out'
                },
                '-=0.25'
            )
            .from(
                '[data-hero-desc]',
                {
                    opacity: 0,
                    y: 12,
                    duration: 0.55,
                    ease: 'power2.out'
                },
                '-=0.5'
            )
            .from(
                '[data-hero-badge]',
                {
                    opacity: 0,
                    y: 8,
                    duration: 0.4,
                    stagger: 0.05,
                    ease: 'power2.out'
                },
                '-=0.35'
            )
            .from(
                '[data-hero-media]',
                {
                    opacity: 0,
                    y: 20,
                    duration: 0.75,
                    ease: 'power3.out'
                },
                '-=0.55'
            )
            .fromTo(
                '[data-hero-dots]',
                {
                    clipPath: 'inset(0% 0% 100% 0%)',
                    opacity: 0
                },
                {
                    clipPath: 'inset(0% 0% 0% 0%)',
                    opacity: 0.45,
                    duration: 1.8,
                    ease: 'power2.out'
                },
                '-=0.4'
            )
    }, sectionRef.value)
})

onUnmounted(() => {
    ctx?.revert()
})
</script>

<template>
    <section ref="section-ref" class="relative overflow-hidden bg-default pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div aria-hidden="true" data-hero-dots
            class="pointer-events-none absolute inset-0 opacity-45 bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)] dark:bg-[radial-gradient(var(--color-neutral-800)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black_25%,transparent_90%)]" />

        <UContainer class="relative z-10">
            <div class="max-w-3xl text-left">
                <p data-hero-eyebrow class="mb-5 text-xs font-bold tracking-[0.15em] uppercase text-primary">
                    Formations pratiques à Antananarivo
                </p>

                <h1 data-hero-title
                    class="text-4xl sm:text-5xl font-extrabold tracking-tight text-highlighted leading-[1.1]">
                    Apprenez un métier numérique par la pratique, pas par la théorie.
                </h1>

                <p data-hero-desc class="mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
                    Des bootcamps intensifs de 8h à 12h en présentiel (15 places maximum) encadrés par des praticiens en
                    activité. Repartez avec un livrable concret et une attestation officielle.
                </p>

                <div class="mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <div v-for="proof in proofs" :key="proof.label" data-hero-badge
                        class="inline-flex items-center gap-2 rounded-sm border border-default bg-default px-3 py-1.5 text-xs sm:text-sm font-medium text-highlighted">
                        <UIcon :name="proof.icon" class="size-4 text-primary shrink-0" />
                        <span>{{ proof.label }}</span>
                    </div>
                </div>
            </div>

            <div data-hero-media
                class="pointer-events-none hidden lg:flex lg:justify-end lg:items-end lg:absolute lg:-bottom-20 lg:right-8 xl:right-12 lg:w-1/3">
                <img src="/images/formation/hero.png" alt="Participant regardant vers l'avenir chez Haritech Agency"
                    class="block max-h-[340px] xl:max-h-[380px] w-auto object-contain object-bottom dark:brightness-90 dark:contrast-105 transition-[filter] duration-300" />
            </div>
        </UContainer>
    </section>
</template>
