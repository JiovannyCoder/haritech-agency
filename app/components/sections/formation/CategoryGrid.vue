<script setup lang="ts">
import gsap from 'gsap'

const sectionRef = useTemplateRef<HTMLElement>('section-ref')

const categories = [
    {
        slug: 'developpement-web',
        tag: '8h • Dès 120 000 Ar',
        title: 'Développement Web Pro (Code Pur)',
        image: '/images/home/dev-sur-mesure.jpg',
        icon: 'i-lucide-code-2'
    },
    {
        slug: 'centre-appel-sav',
        tag: '12h • Dès 90 000 Ar',
        title: 'Centre d\'Appel & Relation Client',
        image: '/images/home/formation-entreprise.jpg',
        icon: 'i-lucide-headset'
    },
    {
        slug: 'annotation-ia',
        tag: '12h • Dès 90 000 Ar',
        title: 'Annotation IA & Contrôle Qualité',
        image: '/images/home/bg-hero.jpg',
        icon: 'i-lucide-scan-search'
    },
    {
        slug: 'assistante-virtuelle',
        tag: '12h • 120 000 Ar',
        title: 'Assistante Virtuelle & Organisation Pro',
        image: '/images/home/formation-entreprise.jpg',
        icon: 'i-lucide-calendar-check-2'
    }
]

let ctx: gsap.Context | null = null

onMounted(() => {
    if (!sectionRef.value) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>('[data-cat-card]')
        const tl = gsap.timeline({ delay: 1.05 })

        tl.from('[data-cat-eyebrow]', {
            opacity: 0,
            x: -10,
            duration: 0.4,
            ease: 'power2.out'
        })
            .fromTo(
                '[data-cat-title]',
                { clipPath: 'inset(0% 0% 100% 0%)' },
                {
                    clipPath: 'inset(0% 0% 0% 0%)',
                    duration: 0.75,
                    ease: 'expo.out'
                },
                '-=0.2'
            )
            .from(
                '[data-cat-desc]',
                {
                    opacity: 0,
                    y: 10,
                    duration: 0.5,
                    ease: 'power2.out'
                },
                '-=0.45'
            )
            .from(
                cards.slice(0, 3),
                {
                    opacity: 0,
                    y: -20,
                    duration: 0.65,
                    stagger: 0.14,
                    ease: 'power3.out'
                },
                '-=0.3'
            )
    }, sectionRef.value)
})

onUnmounted(() => {
    ctx?.revert()
})
</script>

<template>
    <section ref="section-ref" class="bg-elevated/40 py-16 sm:py-24 overflow-hidden">
        <UContainer>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                <div class="lg:col-span-4 text-left">
                    <p data-cat-eyebrow class="mb-3 text-xs font-bold tracking-[0.15em] uppercase text-primary">
                        Nos 4 pôles métiers
                    </p>

                    <h2 data-cat-title
                        class="text-3xl sm:text-4xl font-extrabold tracking-tight text-highlighted leading-[1.12]">
                        Acquérez des compétences concrètes
                    </h2>

                    <p data-cat-desc class="mt-4 text-sm sm:text-base text-muted leading-relaxed">
                        Haritech Agency vous forme en présentiel à Antananarivo sur les métiers numériques les plus
                        demandés par les recruteurs locaux et internationaux.
                    </p>
                </div>

                <div class="lg:col-span-8">
                    <UCarousel v-slot="{ item }" :items="categories" arrows dots prev-icon="i-lucide-chevron-left"
                        next-icon="i-lucide-chevron-right" :ui="{
                            root: 'relative pb-14',
                            container: 'items-stretch',
                            item: 'basis-full sm:basis-1/2 xl:basis-1/3 ps-4',
                            controls: 'absolute bottom-0 inset-x-0 flex items-center justify-center gap-3',
                            arrows: 'contents',
                            prev: 'static translate-y-0 size-8 rounded-full border border-default bg-default text-highlighted flex items-center justify-center transition-colors',
                            next: 'static translate-y-0 size-8 rounded-full border border-default bg-default text-highlighted flex items-center justify-center transition-colors',
                            dots: 'static flex items-center gap-1.5',
                            dot: 'h-1.5 w-1.5 rounded-full bg-(--ui-border) transition-all duration-300 data-[state=active]:w-6 data-[state=active]:bg-primary'
                        }">
                        <NuxtLink :to="`/formations/${item.slug}`" data-cat-card
                            class="group relative flex flex-col justify-end h-[340px] rounded-xl border border-default bg-default overflow-hidden p-2.5">
                            <NuxtImg :src="item.image" :alt="item.title" class="absolute inset-0 size-full object-cover"
                                loading="lazy" />
                            <div aria-hidden="true"
                                class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                            <div
                                class="relative z-10 rounded-lg bg-default border border-default p-4 flex flex-col justify-between min-h-[116px]">
                                <div
                                    class="flex items-center justify-between gap-2 text-[11px] font-semibold text-muted">
                                    <span>{{ item.tag }}</span>
                                    <UIcon :name="item.icon" class="size-3.5 text-primary shrink-0" />
                                </div>

                                <div class="mt-2 flex items-end justify-between gap-3">
                                    <h3 class="text-base font-bold text-highlighted leading-snug">
                                        {{ item.title }}
                                    </h3>
                                    <UIcon name="i-lucide-arrow-right"
                                        class="size-4 text-highlighted shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </div>
                        </NuxtLink>
                    </UCarousel>
                </div>
            </div>
        </UContainer>
    </section>
</template>
