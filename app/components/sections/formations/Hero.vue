<script lang="ts" setup>
import gsap from "gsap";

interface SessionHighlight {
    id: string;
    status: string;
    statusColor: "primary" | "neutral";
    title: string;
    format: string;
    seats: string;
    icon: string;
    points: string[];
}

const sessions: SessionHighlight[] = [
    {
        id: "dev",
        status: "Inscriptions ouvertes",
        statusColor: "primary",
        title: "Sessions Code & Bootcamps Dev",
        format: "One-Shot (1 jour) ou Week-end (2 jours)",
        seats: "15 places max • Salle Premium",
        icon: "i-lucide-terminal",
        points: [
            "Samedi Laravel : créer une API & back-office de zéro",
            "Bootcamp Week-end : déployer une application complète",
            "100% pratique sur poste en salle climatisée",
        ],
    },
    {
        id: "va",
        status: "Prochainement",
        statusColor: "neutral",
        title: "Coaching Assistance Virtuelle",
        format: "Atelier pratique 1 à 2 jours",
        seats: "15 places max • Liste d'attente",
        icon: "i-lucide-laptop",
        points: [
            "Maîtrise des outils collaboratifs (Notion, Slack, CRM)",
            "Gestion d'agenda, emails & support client B2B",
            "Mises en situation réelles sur cas d'agence",
        ],
    },
    {
        id: "ia-bpo",
        status: "Prochainement",
        statusColor: "neutral",
        title: "Annotation IA & Téléconseil",
        format: "Sessions courtes & Coaching terrain",
        seats: "15 places max • Liste d'attente",
        icon: "i-lucide-sparkles",
        points: [
            "Annotation de données & contrôle qualité IA",
            "Techniques d'appel & posture téléconseiller",
            "Préparation opérationnelle aux standards B2B",
        ],
    },
];

const selectedId = ref<string>("dev");

const activeSession = computed(
    () => sessions.find((s) => s.id === selectedId.value) ?? sessions,
);

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");
const overlineLineRef = useTemplateRef<HTMLElement>("overlineLineRef");
const overlineTextRef = useTemplateRef<HTMLElement>("overlineTextRef");
const titleRef = useTemplateRef<HTMLElement>("titleRef");
const descriptionRef = useTemplateRef<HTMLElement>("descriptionRef");
const actionsRef = useTemplateRef<HTMLElement>("actionsRef");
const metricsRef = useTemplateRef<HTMLElement>("metricsRef");
const showcaseRef = useTemplateRef<HTMLElement>("showcaseRef");

let ctx: gsap.Context | null = null;

onMounted(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        tl.from(overlineLineRef.value, {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.45,
        })
            .from(
                overlineTextRef.value,
                { x: -10, opacity: 0, duration: 0.45 },
                "-=0.25",
            )
            .fromTo(
                titleRef.value,
                { y: 24, opacity: 0, clipPath: "inset(0% 0% 100% 0%)" },
                { y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 0.8 },
                "-=0.2",
            )
            .from(
                [descriptionRef.value, actionsRef.value, metricsRef.value],
                { y: 24, opacity: 0, scale: 0.98, stagger: 0.1, duration: 0.7 },
                "-=0.45",
            )
            .from(
                showcaseRef.value,
                { y: 32, opacity: 0, scale: 0.96, duration: 0.85 },
                "-=0.55",
            );
    }, sectionRef.value ?? undefined);
});

onUnmounted(() => {
    ctx?.revert();
});
</script>
<template>
    <section ref="sectionRef"
        class="relative isolate overflow-hidden bg-default py-16 sm:py-24 border-b border-default">
        <div class="absolute inset-0 -z-10 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--ui-border)_25%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--ui-border)_25%,transparent)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,color-mix(in_srgb,var(--ui-border)_50%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--ui-border)_50%,transparent)_1px,transparent_1px)] bg-[size:64px_64px] mask-[linear-gradient(to_bottom,black,transparent_75%)]"
            aria-hidden="true" />

        <UContainer>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
                <div class="lg:col-span-7">
                    <div class="flex items-center gap-3 mb-5">
                        <span ref="overlineLineRef" class="w-5 h-[1.5px] bg-primary inline-block shrink-0"
                            aria-hidden="true" />
                        <span ref="overlineTextRef"
                            class="text-xs font-bold tracking-[0.15em] uppercase text-primary dark:text-brand-400">
                            Ateliers Pratiques & Bootcamps • Antananarivo
                        </span>
                    </div>

                    <h1 ref="titleRef"
                        class="text-4xl sm:text-5xl lg:text-[3.3rem] font-extrabold tracking-tight text-highlighted leading-[1.08]">
                        Des sessions courtes, ultra-pratiques, en
                        <span class="text-primary dark:text-brand-400">comité restreint</span>.
                    </h1>

                    <p ref="descriptionRef" class="mt-5 text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
                        Pas de théorie interminable. Rejoignez nos formats One-Shot (1 journée) ou Week-end
                        Bootcamps dans notre salle équipée à Antananarivo pour maîtriser un outil ou livrer un
                        projet concret en 48h.
                    </p>

                    <div ref="actionsRef" class="mt-8 flex flex-wrap items-center gap-4">
                        <UButton to="#catalogue-formations" color="primary" variant="solid" size="xl"
                            trailing-icon="i-lucide-arrow-down"
                            :ui="{ trailingIcon: 'transition-transform duration-200 group-hover:translate-y-0.5' }"
                            class="group font-semibold">
                            Voir les prochaines sessions
                        </UButton>

                        <UButton to="/contact?sujet=liste-attente" color="neutral" variant="outline" size="xl"
                            trailing-icon="i-lucide-bell" class="font-semibold">
                            Être alerté des dates
                        </UButton>
                    </div>

                    <div ref="metricsRef"
                        class="mt-10 pt-8 border-t border-default grid grid-cols-3 gap-4 sm:gap-8 max-w-xl">
                        <div>
                            <p class="text-2xl sm:text-3xl font-extrabold text-highlighted tracking-tight">15 max</p>
                            <p class="mt-1 text-xs sm:text-sm text-muted">Places par session</p>
                        </div>
                        <div>
                            <p class="text-2xl sm:text-3xl font-extrabold text-highlighted tracking-tight">1 à 2 j</p>
                            <p class="mt-1 text-xs sm:text-sm text-muted">Format One-Shot & Week-end</p>
                        </div>
                        <div>
                            <p class="text-2xl sm:text-3xl font-extrabold text-highlighted tracking-tight">100%</p>
                            <p class="mt-1 text-xs sm:text-sm text-muted">Salle équipée & pratique</p>
                        </div>
                    </div>
                </div>

                <div ref="showcaseRef" class="lg:col-span-5 relative pb-7 pr-4">
                    <div class="absolute inset-0 translate-x-4 translate-y-7 rounded-2xl bg-primary transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                        aria-hidden="true" />

                    <div
                        class="relative rounded-xl p-2 sm:p-3 bg-white/20 dark:bg-white/[0.03] backdrop-blur-md border border-white/90 dark:border-white/10 ring-1 ring-black/[0.08] dark:ring-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                        <UCard variant="solid" :ui="{
                            root: 'rounded-lg bg-default text-default ring-1 ring-black/[0.07] dark:ring-white/10 shadow-[0_4px_16px_-6px_rgba(0,0,0,0.08)] dark:shadow-none',
                        }">
                            <div class="flex items-center justify-between gap-2 pb-4 border-b border-default">
                                <span class="text-xs font-bold uppercase tracking-wider text-muted">
                                    Feuille de route
                                </span>
                                <div class="flex items-center gap-1.5">
                                    <button v-for="session in sessions" :key="session.id" type="button"
                                        class="px-2.5 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer"
                                        :class="selectedId === session.id
                                                ? 'bg-primary text-white'
                                                : 'bg-elevated text-muted hover:text-highlighted'
                                            " @click="selectedId = session.id">
                                        {{ session.id === 'dev' ? 'DEV' : session.id === 'va' ? 'AV' : 'IA / BPO' }}
                                    </button>
                                </div>
                            </div>

                            <div class="pt-5">
                                <div class="flex items-start justify-between gap-3">
                                    <div>
                                        <UBadge :color="activeSession.statusColor" variant="subtle" size="sm"
                                            class="mb-2 font-semibold">
                                            {{ activeSession.status }}
                                        </UBadge>
                                        <h2 class="text-xl font-bold text-highlighted">
                                            {{ activeSession.title }}
                                        </h2>
                                    </div>
                                    <div
                                        class="size-10 rounded-lg bg-primary/10 text-primary dark:text-brand-400 flex items-center justify-center shrink-0">
                                        <UIcon :name="activeSession.icon" class="size-5" />
                                    </div>
                                </div>

                                <div class="mt-4 flex flex-wrap gap-2 text-xs text-muted">
                                    <span class="inline-flex items-center gap-1.5 bg-elevated px-2.5 py-1 rounded-md">
                                        <UIcon name="i-lucide-calendar"
                                            class="size-3.5 text-primary dark:text-brand-400" />
                                        {{ activeSession.format }}
                                    </span>
                                    <span class="inline-flex items-center gap-1.5 bg-elevated px-2.5 py-1 rounded-md">
                                        <UIcon name="i-lucide-users"
                                            class="size-3.5 text-primary dark:text-brand-400" />
                                        {{ activeSession.seats }}
                                    </span>
                                </div>

                                <ul class="mt-5 space-y-2.5">
                                    <li v-for="point in activeSession.points" :key="point"
                                        class="flex items-center gap-2.5 text-sm text-default">
                                        <UIcon name="i-lucide-check"
                                            class="size-4 text-primary dark:text-brand-400 shrink-0" />
                                        <span>{{ point }}</span>
                                    </li>
                                </ul>

                                <div class="mt-6 pt-4 border-t border-default flex items-center justify-between">
                                    <span class="text-xs text-muted">Salle climatisée • Fibre & Poste dédié</span>
                                    <UButton to="#catalogue-formations" color="primary" variant="link" size="sm"
                                        trailing-icon="i-lucide-arrow-right" class="p-0 font-semibold group"
                                        :ui="{ trailingIcon: 'transition-transform duration-200 group-hover:translate-x-1' }">
                                        Découvrir
                                    </UButton>
                                </div>
                            </div>
                        </UCard>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
