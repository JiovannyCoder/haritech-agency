<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = useTemplateRef<HTMLElement>('section-ref')

const selectedFilter = ref('all')

const filters = [
    { label: 'Toutes les sessions', value: 'all' },
    { label: 'Développement Web', value: 'developpement-web' },
    { label: 'Centre d\'Appel', value: 'centre-appel-sav' },
    { label: 'Annotation IA', value: 'annotation-ia' },
    { label: 'Assistante Virtuelle', value: 'assistante-virtuelle' }
]

const sessions = [
    {
        id: 'dev-01',
        slug: 'developpement-web',
        category: 'Développement Web',
        title: 'Développement Web Pro : Architecture & API REST',
        dates: 'Sam. 05 & Sam. 12 Déc.',
        schedule: '08h30 – 12h30 (8h)',
        seatsLeft: 4,
        totalSeats: 15,
        price: '120 000 Ar'
    },
    {
        id: 'bpo-01',
        slug: 'centre-appel-sav',
        category: 'Centre d\'Appel',
        title: 'Préparation Entretien & Relation Client (Méthode E.R.A.S)',
        dates: 'Mar. 08 au Ven. 11 Déc.',
        schedule: '14h00 – 17h00 (12h)',
        seatsLeft: 6,
        totalSeats: 15,
        price: '90 000 Ar'
    },
    {
        id: 'ia-01',
        slug: 'annotation-ia',
        category: 'Annotation IA',
        title: 'Annotation d\'Images (Bounding Boxes) & Évaluation RLHF',
        dates: 'Lun. 14 au Jeu. 17 Déc.',
        schedule: '09h00 – 12h00 (12h)',
        seatsLeft: 3,
        totalSeats: 15,
        price: '90 000 Ar'
    },
    {
        id: 'va-01',
        slug: 'assistante-virtuelle',
        category: 'Assistante Virtuelle',
        title: 'Assistante Virtuelle & Gestion Client Francophone',
        dates: 'Lun. 14 au Jeu. 17 Déc.',
        schedule: '14h00 – 17h00 (12h)',
        seatsLeft: 8,
        totalSeats: 15,
        price: '120 000 Ar'
    }
]

const filteredSessions = computed(() => {
    if (selectedFilter.value === 'all') return sessions
    return sessions.filter(s => s.slug === selectedFilter.value)
})

let ctx: gsap.Context | null = null

onMounted(() => {
    if (!sectionRef.value) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    ctx = gsap.context(() => {
        gsap.fromTo(
            '[data-sessions-title]',
            { clipPath: 'inset(0% 0% 100% 0%)' },
            {
                clipPath: 'inset(0% 0% 0% 0%)',
                duration: 0.8,
                ease: 'expo.out',
                scrollTrigger: {
                    trigger: sectionRef.value,
                    start: 'top 85%',
                    once: true
                }
            }
        )

        gsap.from('[data-session-row]', {
            opacity: 0,
            y: 12,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '[data-sessions-table]',
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
    <section ref="section-ref" class="bg-default py-16 sm:py-24">
        <UContainer>
            <div class="max-w-2xl text-left">
                <p class="mb-3 text-xs font-bold tracking-[0.15em] uppercase text-primary">
                    Calendrier Antananarivo
                </p>

                <h2 data-sessions-title
                    class="text-3xl sm:text-4xl font-extrabold tracking-tight text-highlighted leading-[1.12]">
                    Prochaines sessions en salle
                </h2>

                <p class="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                    Groupes limités à 15 participants en configuration U. Réservez votre place avec un acompte de 50 %
                    via MVola, Orange Money ou Airtel Money.
                </p>
            </div>

            <div class="mt-6 mb-8 flex flex-wrap items-center gap-2">
                <button v-for="filter in filters" :key="filter.value" type="button"
                    class="rounded-sm px-3.5 py-1.5 text-xs font-semibold border transition-colors cursor-pointer"
                    :class="selectedFilter === filter.value
                        ? 'bg-highlighted text-default border-highlighted'
                        : 'bg-default text-muted border-default hover:text-highlighted'"
                    @click="selectedFilter = filter.value">
                    {{ filter.label }}
                </button>
            </div>

            <div data-sessions-table
                class="rounded-2xl p-2 sm:p-2.5 bg-neutral-100/45 dark:bg-white/[0.03] backdrop-blur-md border border-white/90 dark:border-white/10 ring-1 ring-black/[0.06] dark:ring-black/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] dark:shadow-none">
                <div
                    class="rounded-xl bg-default ring-1 ring-black/[0.06] dark:ring-white/10 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] dark:shadow-none overflow-hidden">
                    <div
                        class="hidden lg:grid lg:grid-cols-12 gap-4 px-6 py-3.5 bg-neutral-50/90 dark:bg-neutral-900/80 border-b border-default text-[11px] font-bold tracking-[0.1em] uppercase text-muted">
                        <div class="col-span-5">
                            Bootcamp
                        </div>
                        <div class="col-span-3">
                            Date
                        </div>
                        <div class="col-span-2">
                            Disponibilité
                        </div>
                        <div class="col-span-2 text-right">
                            Action
                        </div>
                    </div>

                    <div class="divide-y divide-(--ui-border)">
                        <div v-for="session in filteredSessions" :key="session.id" data-session-row
                            class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start lg:items-center px-5 py-5 sm:px-6 transition-colors hover:bg-neutral-50/70 dark:hover:bg-neutral-900/60">
                            <div class="lg:col-span-5">
                                <span
                                    class="inline-block text-[11px] font-bold uppercase tracking-wider text-primary mb-1">
                                    {{ session.category }}
                                </span>
                                <h3 class="text-base font-bold text-highlighted leading-snug">
                                    {{ session.title }}
                                </h3>
                                <p class="mt-1 text-xs font-medium text-muted">
                                    Tarif : {{ session.price }} (acompte 50 % à l'inscription)
                                </p>
                            </div>

                            <div class="lg:col-span-3 flex flex-col gap-1 text-sm">
                                <div class="inline-flex items-center gap-2 font-semibold text-highlighted">
                                    <UIcon name="i-lucide-calendar" class="size-4 text-muted shrink-0" />
                                    <span>{{ session.dates }}</span>
                                </div>
                                <div class="inline-flex items-center gap-2 text-xs text-muted">
                                    <UIcon name="i-lucide-clock" class="size-3.5 shrink-0" />
                                    <span>{{ session.schedule }}</span>
                                </div>
                            </div>

                            <div class="lg:col-span-2">
                                <div
                                    class="inline-flex items-center gap-2 rounded-full border border-default bg-neutral-100/60 dark:bg-neutral-900 px-3 py-1 text-xs font-semibold text-highlighted">
                                    <span class="size-2 rounded-full shrink-0"
                                        :class="session.seatsLeft <= 4 ? 'bg-primary' : 'bg-emerald-600'" />
                                    <span>{{ session.seatsLeft }} / {{ session.totalSeats }} places</span>
                                </div>
                            </div>

                            <div class="lg:col-span-2 flex lg:justify-end w-full">
                                <UButton :to="`/formations/${session.slug}`" color="primary" variant="solid" size="md"
                                    trailing-icon="i-lucide-arrow-right"
                                    class="w-full lg:w-auto justify-center rounded-sm font-semibold">
                                    Réserver
                                </UButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
