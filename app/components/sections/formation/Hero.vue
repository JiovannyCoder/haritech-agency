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
        label: '15 places max'
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
                    opacity: 0.55,
                    duration: 1.6,
                    ease: 'power2.out'
                },
                '-=0.4'
            )

        gsap.to('[data-hero-dots]', {
            backgroundPosition: '22px 22px',
            duration: 4.5,
            ease: 'none',
            repeat: -1
        })
    }, sectionRef.value)
})

onUnmounted(() => {
    ctx?.revert()
})
</script>

<template>
    <section ref="section-ref" class="relative overflow-hidden bg-default pt-16 sm:pt-24">
        <div aria-hidden="true" data-hero-dots
            class="pointer-events-none absolute inset-0 opacity-55 bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)] dark:bg-[radial-gradient(var(--color-neutral-700)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black_30%,transparent_90%)]" />

        <UContainer class="relative z-10 pb-14 sm:pb-20">
            <div class="max-w-3xl text-left">
                <p data-hero-eyebrow class="mb-5 text-xs font-bold tracking-[0.15em] uppercase text-primary">
                    Formations pratiques à Antananarivo
                </p>

                <h1 data-hero-title
                    class="text-4xl sm:text-5xl font-extrabold tracking-tight text-highlighted leading-[1.1]">
                    Apprenez un métier numérique <span class="text-primary">par la pratique</span>, pas par la théorie.
                </h1>

                <p data-hero-desc class="mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
                    Des bootcamps intensifs de 8h à 12h en présentiel (15 places maximum) encadrés par des praticiens en
                    activité. Repartez avec un livrable concret et une attestation officielle.
                </p>
            </div>

            <div data-hero-media
                class="pointer-events-none hidden lg:flex lg:justify-end lg:items-end lg:absolute lg:bottom-0 lg:right-8 xl:right-12 lg:w-1/3">
                <img src="/images/formation/hero.png" alt="Participant regardant vers l'avenir chez Haritech Agency"
                    class="block max-h-[340px] xl:max-h-[380px] w-auto object-contain object-bottom dark:brightness-90 dark:contrast-105 transition-[filter] duration-300" />
            </div>
        </UContainer>

        <div class="relative z-10 border-y border-default bg-elevated/40">
            <UContainer>
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-(--ui-border)">
                    <div v-for="(proof, index) in proofs" :key="proof.label" data-hero-badge
                        class="py-4 sm:py-5 px-4 first:pl-0 last:pr-0 flex items-center gap-3 text-xs sm:text-sm font-semibold text-highlighted"
                        :class="[
                            index % 2 === 1 ? 'sm:border-l lg:border-l-0 sm:border-(--ui-border)' : '',
                            index >= 2 ? 'sm:border-t lg:border-t-0 sm:border-(--ui-border)' : ''
                        ]">
                        <div
                            class="size-8 rounded-sm bg-primary/10 flex items-center justify-center text-primary shrink-0">
                            <UIcon :name="proof.icon" class="size-4" />
                        </div>
                        <span>{{ proof.label }}</span>
                    </div>
                </div>
            </UContainer>
        </div>
    </section>
</template>
