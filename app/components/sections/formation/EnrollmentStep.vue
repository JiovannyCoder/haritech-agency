<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = useTemplateRef<HTMLElement>('section-ref')

const paymentMethods = [
    'MVola',
    'Orange Money',
    'Airtel Money',
    'Espèces à l’agence'
]

const steps = [
    {
        number: '01',
        badge: 'En moins de 1 min',
        title: 'Pré-inscription en ligne',
        description:
            'Choisissez votre parcours bootcamp et remplissez le formulaire de réservation directement sur notre site pour enregistrer votre demande.'
    },
    {
        number: '02',
        badge: 'Place garantie',
        title: 'Validation par acompte de 50 %',
        description:
            'Réglez l’acompte de 50 % via Mobile Money ou en espèces à l’agence afin de bloquer définitivement votre siège parmi les 15 places de la salle.'
    },
    {
        number: '03',
        badge: 'Accompagnement direct',
        title: 'Intégration WhatsApp & Jour J',
        description:
            'Vous intégrez le groupe WhatsApp privé de votre session, recevez la liste du matériel à prévoir et l’adresse exacte de la salle à Antananarivo.'
    }
]

let ctx: gsap.Context | null = null

onMounted(() => {
    if (!sectionRef.value) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    ctx = gsap.context(() => {
        const leftTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.value,
                start: 'top 85%',
                once: true
            }
        })

        leftTl
            .from('[data-steps-eyebrow]', {
                opacity: 0,
                y: 8,
                duration: 0.4,
                ease: 'power2.out'
            })
            .fromTo(
                '[data-steps-title]',
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
                '[data-steps-left-box]',
                {
                    opacity: 0,
                    y: 14,
                    duration: 0.55,
                    ease: 'power2.out'
                },
                '-=0.4'
            )

        const timelineTl = gsap.timeline({
            scrollTrigger: {
                trigger: '[data-steps-timeline]',
                start: 'top 85%',
                once: true
            }
        })

        timelineTl
            .fromTo(
                '[data-steps-vertical-line]',
                { scaleY: 0 },
                {
                    scaleY: 1,
                    transformOrigin: 'top center',
                    duration: 0.9,
                    ease: 'power3.out'
                }
            )
            .from(
                '[data-step-node]',
                {
                    opacity: 0,
                    x: 16,
                    duration: 0.55,
                    stagger: 0.14,
                    ease: 'power2.out'
                },
                '-=0.65'
            )
    }, sectionRef.value)
})

onUnmounted(() => {
    ctx?.revert()
})
</script>
<template>
    <section ref="section-ref" class="bg-default py-16 sm:py-24">
        <UContainer>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <!-- COLONNE GAUCHE : TITRE + PAIEMENT -->
                <div class="lg:col-span-5 text-left">
                    <p data-steps-eyebrow class="text-xs font-bold tracking-[0.15em] mb-3 uppercase text-primary">
                        Processus d’inscription
                    </p>

                    <h2 data-steps-title
                        class="text-3xl sm:text-4xl font-extrabold tracking-tight text-highlighted leading-[1.12]">
                        Comment réserver votre place en 3 étapes
                    </h2>

                    <p class="mt-4 text-sm sm:text-base text-muted leading-relaxed">
                        Notre salle en U est strictement limitée à 15 participants afin de garantir un suivi individuel
                        par le formateur. Le solde restant se paie le premier jour de la formation.
                    </p>

                    <div data-steps-left-box class="mt-8 rounded-xl bg-neutral-100 p-6">
                        <div class="flex items-center gap-2.5 text-sm font-bold text-highlighted">
                            <UIcon name="i-lucide-wallet" class="size-5 text-primary shrink-0" />
                            <span>Moyens de paiement acceptés</span>
                        </div>

                        <div class="mt-4 flex flex-wrap gap-2">
                            <span v-for="method in paymentMethods" :key="method"
                                class="rounded-full bg-default px-3.5 py-1.5 text-xs font-semibold text-highlighted">
                                {{ method }}
                            </span>
                        </div>

                        <p class="mt-4 text-xs text-muted leading-relaxed">
                            Un reçu de confirmation nominatif vous est envoyé immédiatement après validation de votre
                            paiement.
                        </p>
                    </div>
                </div>

                <!-- COLONNE DROITE : TIMELINE VERTICALE CONNECTÉE -->
                <div data-steps-timeline class="lg:col-span-7 relative">
                    <!-- Fil conducteur vertical gris + barre rouge animée au scroll -->
                    <div aria-hidden="true"
                        class="absolute left-5 top-6 bottom-6 w-[2px] bg-neutral-200 overflow-hidden">
                        <div data-steps-vertical-line class="size-full bg-primary" />
                    </div>

                    <div class="space-y-8">
                        <div v-for="step in steps" :key="step.number" data-step-node
                            class="relative flex items-start gap-6">
                            <!-- Pastille numérotée rouge -->
                            <div
                                class="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-extrabold tracking-wider text-white ring-4 ring-white">
                                {{ step.number }}
                            </div>

                            <!-- Carte flat de l'étape (Chip neutre -> Titre -> Description) -->
                            <div class="flex-1 rounded-xl bg-neutral-100 p-6 sm:p-7 text-left">
                                <span
                                    class="inline-flex items-center rounded-full bg-default px-3 py-1 text-xs font-semibold text-muted">
                                    {{ step.badge }}
                                </span>

                                <h3 class="mt-3.5 text-lg sm:text-xl font-extrabold tracking-tight text-highlighted">
                                    {{ step.title }}
                                </h3>

                                <p class="mt-2 text-sm text-muted leading-relaxed">
                                    {{ step.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
