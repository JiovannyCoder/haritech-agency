<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = useTemplateRef<HTMLElement>('section-ref')
const flippedIndex = ref<number | null>(null)

const toggleFlip = (index: number) => {
    flippedIndex.value = flippedIndex.value === index ? null : index
}

const profiles = [
    {
        step: '01',
        badgeFront: 'PROFIL 01',
        hardware: 'Avec votre ordinateur portable',
        audience: 'Étudiant en informatique ou développeur junior',
        situation: 'Vous connaissez les bases du code mais vous voulez maîtriser la création de sites et d’applications complètes pour réussir vos tests techniques.',
        frontTags: ['Création de sites web', 'Logique & Code', 'Projet concret'],
        badgeBack: 'FORMATION RECOMMANDÉE',
        status: 'Places disponibles',
        recommendation: 'Bootcamp Développement Web Pro',
        tags: ['Code sans IA', 'API & Sécurité', 'Base de données', 'Mise en ligne'],
        linkLabel: 'Découvrir le programme Dev Web',
        to: '/formations/developpement-web'
    },
    {
        step: '02',
        badgeFront: 'PROFIL 02',
        hardware: 'Sans ordinateur requis',
        audience: 'Recherche d’emploi rapide à Antananarivo',
        situation: 'Vous parlez bien français et vous souhaitez décrocher rapidement un poste en centre d’appel, service client ou traitement de données.',
        frontTags: ['Relation client', 'Expression orale', 'Précision sur écran'],
        badgeBack: 'FORMATION RECOMMANDÉE',
        status: 'Places disponibles',
        recommendation: 'Centre d’Appel & Annotation IA',
        tags: ['Coaching entretien', 'Gestion d’appels', 'Étiquetage IA', 'Refonte CV'],
        linkLabel: 'Comparer les deux parcours',
        to: '/formations/centre-appel-sav'
    },
    {
        step: '03',
        badgeFront: 'PROFIL 03',
        hardware: 'Avec votre ordinateur portable',
        audience: 'Travail à distance depuis Madagascar',
        situation: 'Vous êtes organisé, rigoureux à l’écrit et vous voulez travailler depuis chez vous pour des entreprises et clients francophones.',
        frontTags: ['Organisation', 'Rédaction pro', 'Outils bureautiques'],
        badgeBack: 'FORMATION RECOMMANDÉE',
        status: 'Places disponibles',
        recommendation: 'Bootcamp Assistante Virtuelle',
        tags: ['Google Workspace', 'Gestion d’agenda', 'Facturation', 'Recherche de clients'],
        linkLabel: 'Découvrir le programme Remote',
        to: '/formations/assistante-virtuelle'
    }
]

let ctx: gsap.Context | null = null

onMounted(() => {
    if (!sectionRef.value) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    ctx = gsap.context(() => {
        const headerTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.value,
                start: 'top 85%',
                once: true
            }
        })

        headerTl
            .from('[data-path-eyebrow]', {
                opacity: 0,
                y: 8,
                duration: 0.4,
                ease: 'power2.out'
            })
            .fromTo(
                '[data-path-title]',
                { clipPath: 'inset(0% 0% 100% 0%)', y: 10 },
                {
                    clipPath: 'inset(0% 0% 0% 0%)',
                    y: 0,
                    duration: 0.75,
                    ease: 'expo.out'
                },
                '-=0.25'
            )
            .from(
                '[data-path-subtitle]',
                {
                    opacity: 0,
                    y: 10,
                    duration: 0.5,
                    ease: 'power2.out'
                },
                '-=0.45'
            )

        gsap.from('[data-path-card]', {
            opacity: 0,
            y: 24,
            duration: 0.65,
            stagger: 0.12,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
                trigger: '[data-path-grid]',
                start: 'top 85%',
                once: true
            }
        })
    }, sectionRef.value)
})

onUnmounted(() => {
    ctx?.revert()
})
</script>

<template>
    <section ref="section-ref" class="relative overflow-hidden py-16 bg-elevated/50 sm:py-24">
        <div aria-hidden="true"
            class="pointer-events-none absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:20px_20px] [mask-image:linear-gradient(to_top,black_15%,transparent_85%)]" />

        <UContainer class="relative z-10">
            <div class="max-w-2xl text-left mb-10 sm:mb-12">
                <div class="flex items-center gap-3 mb-4">
                    <span ref="headline-line-ref" class="w-5 h-[1.5px] bg-primary inline-block shrink-0" />
                    <span ref="headline-text-ref"
                        class="text-xs font-bold tracking-[0.15em] uppercase text-primary dark:text-brand-400">
                        Orientation rapide
                    </span>
                </div>

                <h2 data-path-title
                    class="text-3xl sm:text-4xl font-extrabold tracking-tight text-highlighted leading-[1.12]">
                    Quelle formation pratique correspond à votre objectif ?
                </h2>

                <p data-path-subtitle class="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                    Identifiez votre situation ci-dessous et passez la souris sur votre carte (ou touchez-la sur mobile)
                    pour voir le bootcamp adapté.
                </p>
            </div>

            <div data-path-grid class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div v-for="(item, index) in profiles" :key="item.step" data-path-card
                    class="group h-[390px] sm:h-[410px] [perspective:1200px] cursor-pointer" @click="toggleFlip(index)">
                    <div class="relative size-full transition-transform duration-600 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                        :class="{ '[transform:rotateY(180deg)]': flippedIndex === index }">
                        <div
                            class="absolute inset-0 size-full rounded-2xl bg-default/95 backdrop-blur-sm border border-default shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] dark:shadow-none p-6 sm:p-8 flex flex-col justify-between [backface-visibility:hidden]">
                            <div>
                                <div class="flex items-center justify-between gap-3">
                                    <span
                                        class="inline-flex items-center rounded-full bg-primary px-3 py-1 text-[11px] font-bold tracking-wider uppercase text-white">
                                        {{ item.badgeFront }}
                                    </span>

                                    <span class="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
                                        <span class="size-1.5 rounded-full bg-primary shrink-0" />
                                        {{ item.hardware }}
                                    </span>
                                </div>

                                <h3
                                    class="mt-6 text-xl sm:text-2xl font-extrabold tracking-tight text-highlighted leading-snug">
                                    {{ item.audience }}
                                </h3>

                                <p class="mt-3 text-sm text-muted leading-relaxed">
                                    {{ item.situation }}
                                </p>

                                <div class="mt-4 flex flex-wrap gap-2">
                                    <span v-for="tag in item.frontTags" :key="tag"
                                        class="rounded-full bg-elevated px-3 py-1 text-xs font-medium text-muted">
                                        {{ tag }}
                                    </span>
                                </div>
                            </div>

                            <div class="pt-4">
                                <div
                                    class="w-full rounded-full bg-elevated py-2.5 px-4 text-xs font-bold text-highlighted flex items-center justify-center gap-2 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                                    <span>Voir la formation conseillée</span>
                                    <UIcon name="i-lucide-refresh-cw" class="size-3.5 text-primary shrink-0" />
                                </div>
                            </div>
                        </div>

                        <div
                            class="absolute inset-0 size-full rounded-2xl bg-primary text-white ring-0 overflow-hidden p-6 sm:p-8 flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <div aria-hidden="true"
                                class="absolute -top-24 -right-24 size-64 rounded-full border-[40px] border-white/[0.07] pointer-events-none" />

                            <div class="relative z-10">
                                <div class="flex items-center justify-between gap-3">
                                    <span
                                        class="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold tracking-wider uppercase text-white">
                                        {{ item.badgeBack }}
                                    </span>

                                    <span class="inline-flex items-center gap-1.5 text-xs font-medium text-white">
                                        <span class="size-1.5 rounded-full bg-white animate-pulse shrink-0" />
                                        {{ item.status }}
                                    </span>
                                </div>

                                <h3
                                    class="mt-6 text-xl sm:text-2xl font-extrabold tracking-tight text-white leading-snug">
                                    {{ item.recommendation }}
                                </h3>

                                <div class="mt-5 flex flex-wrap gap-2">
                                    <span v-for="tag in item.tags" :key="tag"
                                        class="px-3 py-1 text-xs font-medium text-white bg-white/10 border border-white/15 rounded-full">
                                        {{ tag }}
                                    </span>
                                </div>
                            </div>

                            <div class="relative z-10 pt-4">
                                <UButton :to="item.to" variant="ghost" size="md" trailing-icon="i-lucide-arrow-right"
                                    :ui="{
                                        base: 'w-full justify-center bg-white hover:bg-neutral-100 active:bg-neutral-200 text-primary font-semibold rounded-full py-2.5 px-5 shadow-sm',
                                        label: 'text-primary',
                                        trailingIcon: 'text-primary'
                                    }" @click.stop>
                                    {{ item.linkLabel }}
                                </UButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
