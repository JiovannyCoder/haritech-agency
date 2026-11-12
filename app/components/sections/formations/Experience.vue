<script lang="ts" setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");
const overlineTextRef = useTemplateRef<HTMLElement>("overlineTextRef");
const titleRef = useTemplateRef<HTMLElement>("titleRef");
const subtitleRef = useTemplateRef<HTMLElement>("subtitleRef");
const cardOneRef = useTemplateRef<HTMLElement>("cardOneRef");
const cardTwoRef = useTemplateRef<HTMLElement>("cardTwoRef");

let ctx: gsap.Context | null = null;

onMounted(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.value,
                start: "top 80%",
                once: true,
            },
            defaults: { ease: "expo.out" },
        });

        tl.from(overlineTextRef.value, {
            x: -10,
            opacity: 0,
            duration: 0.45,
        })
            .fromTo(
                titleRef.value,
                { y: 24, opacity: 0, clipPath: "inset(0% 0% 100% 0%)" },
                { y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 0.8 },
                "-=0.2",
            )
            .from(
                subtitleRef.value,
                { y: 16, opacity: 0, duration: 0.6 },
                "-=0.55",
            )
            .from(
                [cardOneRef.value, cardTwoRef.value],
                { y: 28, opacity: 0, scale: 0.98, stagger: 0.14, duration: 0.75 },
                "-=0.4",
            );
    }, sectionRef.value ?? undefined);
});

onUnmounted(() => {
    ctx?.revert();
});
</script>
<template>
    <section ref="sectionRef" class="bg-default py-20 sm:py-28 border-b border-default">
        <UContainer>
            <!-- En-tête asymétrique avec respiration -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                <div class="lg:col-span-7">
                    <div class="flex items-center gap-3 mb-5">
                        <span class="w-5 h-[1.5px] bg-primary inline-block shrink-0" aria-hidden="true" />
                        <span ref="overlineTextRef"
                            class="text-xs font-bold tracking-[0.15em] uppercase text-primary dark:text-brand-400">
                            À chacun son format
                        </span>
                    </div>

                    <h2 ref="titleRef"
                        class="text-4xl sm:text-5xl font-extrabold tracking-tight text-highlighted leading-[1.12]">
                        Vous venez pour pratiquer.
                    </h2>
                </div>

                <div class="lg:col-span-5 lg:pb-1">
                    <p ref="subtitleRef" class="text-base sm:text-lg text-muted leading-relaxed">
                        Que vous soyez développeur indépendant ou responsable d'équipe à Antananarivo, nos
                        sessions en salle de 15 places s'adaptent à votre rythme.
                    </p>
                </div>
            </div>

            <!-- Empilement des deux grands bandeaux avec espacement généreux -->
            <div class="mt-16 space-y-8 lg:space-y-10">
                <!-- BANDEAU 01 : Talents & Indépendants (Fond clair + Mosaïque 3 photos Picsum) -->
                <div ref="cardOneRef"
                    class="rounded-2xl bg-elevated/40 dark:bg-elevated border border-default p-8 sm:p-12 lg:p-14 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.06)] dark:shadow-none">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                        <!-- Colonne texte gauche -->
                        <div class="lg:col-span-5">
                            <span
                                class="text-xs font-bold tracking-[0.15em] uppercase text-primary dark:text-brand-400">
                                01 / Talents & Développeurs
                            </span>

                            <h3
                                class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-highlighted leading-[1.15]">
                                Montez en compétence en 1 à 2 jours
                            </h3>

                            <p class="mt-5 text-base text-muted leading-relaxed">
                                Rejoignez nos sessions One-Shot du samedi ou nos Bootcamps Week-end en petit comité
                                (15 places max). Pratiquez sur un vrai projet et repartez avec des acquis
                                immédiatement exploitables.
                            </p>

                            <div class="mt-8">
                                <NuxtLink to="#catalogue-formations"
                                    class="group inline-flex items-center gap-2.5 pb-1.5 border-b-2 border-primary text-sm font-bold text-highlighted hover:text-primary dark:hover:text-brand-400 transition-colors">
                                    <span>Réserver une place en salle</span>
                                    <UIcon name="i-lucide-arrow-right"
                                        class="size-4 text-primary dark:text-brand-400 transition-transform duration-200 group-hover:translate-x-1" />
                                </NuxtLink>
                            </div>
                        </div>

                        <!-- Colonne droite : Mosaïque asymétrique de 3 photos Picsum -->
                        <div class="lg:col-span-7">
                            <div class="grid grid-cols-12 gap-4 h-72 sm:h-80 lg:h-[340px]">
                                <!-- Grande photo gauche -->
                                <div
                                    class="col-span-7 h-full rounded-xl overflow-hidden bg-elevated border border-default">
                                    <img src="https://picsum.photos"
                                        alt="Développeur travaillant sur son ordinateur portable"
                                        class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        loading="lazy" />
                                </div>

                                <!-- Deux photos empilées à droite -->
                                <div class="col-span-5 h-full flex flex-col gap-4">
                                    <div class="flex-1 rounded-xl overflow-hidden bg-elevated border border-default">
                                        <img src="https://picsum.photos" alt="Espace de travail moderne et matériel"
                                            class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                            loading="lazy" />
                                    </div>
                                    <div class="flex-1 rounded-xl overflow-hidden bg-elevated border border-default">
                                        <img src="https://picsum.photos"
                                            alt="Poste dédié pour session pratique en salle"
                                            class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                            loading="lazy" />
                                    </div>
                                </div>
                            </div>

                            <!-- Légende alignée à droite sous la mosaïque -->
                            <p class="mt-3.5 text-right text-[11px] font-bold tracking-[0.18em] uppercase text-muted">
                                Apprendre &bull; Pratiquer &bull; Livrer
                            </p>
                        </div>
                    </div>
                </div>

                <!-- BANDEAU 02 : Entreprises & Privatisation (Fond Rouge Carmin signature + Cercles) -->
                <div ref="cardTwoRef"
                    class="relative isolate overflow-hidden rounded-2xl bg-primary text-white p-8 sm:p-12 lg:p-14 shadow-[0_12px_32px_-10px_rgba(156,27,36,0.35)]">
                    <!-- Cercles concentriques subtils en arrière-plan -->
                    <div class="pointer-events-none absolute -top-24 right-16 sm:right-48 size-[380px] rounded-full border border-white/10"
                        aria-hidden="true" />
                    <div class="pointer-events-none absolute -top-10 right-30 sm:right-62 size-[250px] rounded-full border border-white/10"
                        aria-hidden="true" />
                    <div class="pointer-events-none absolute top-6 right-46 sm:right-78 size-[120px] rounded-full bg-white/[0.04]"
                        aria-hidden="true" />

                    <div class="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                        <div class="max-w-xl">
                            <span class="text-xs font-bold tracking-[0.15em] uppercase text-white/80">
                                02 / Entreprises & Équipes
                            </span>

                            <h3
                                class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-[1.15]">
                                Privatisez la salle pour former vos équipes
                            </h3>

                            <p class="mt-5 text-base text-white/85 leading-relaxed">
                                Des ateliers sur-mesure de 1 à 2 jours (Laravel, outils IA, productivité) pour
                                faire monter jusqu'à 15 collaborateurs en compétence dans notre salle équipée à
                                Antananarivo.
                            </p>
                        </div>

                        <!-- Action droite -->
                        <div class="flex flex-col sm:items-end gap-3.5 shrink-0">
                            <div class="inline-flex items-center gap-1.5 text-xs font-medium text-white/85">
                                <UIcon name="i-lucide-clock" class="size-3.5" />
                                <span>Proposition sous 48h</span>
                            </div>

                            <UButton to="/contact?sujet=formation-entreprise" size="xl"
                                trailing-icon="i-lucide-arrow-right"
                                class="bg-white text-primary hover:bg-neutral-100 font-bold rounded-xl shadow-sm group px-6 py-3.5"
                                :ui="{ trailingIcon: 'transition-transform duration-200 group-hover:translate-x-1' }">
                                Demander un programme sur-mesure
                            </UButton>
                        </div>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
