<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = useTemplateRef<HTMLElement>('section-ref')

const faqItems: AccordionItem[] = [
    {
        label: 'Faut-il obligatoirement apporter son propre ordinateur portable ?',
        content:
            'Oui pour les bootcamps Développement Web, Annotation IA (souris externe obligatoire) et Assistante Virtuelle, car vous configurez votre propre environnement de travail. Aucun ordinateur n’est requis pour le bootcamp Centre d’Appel & Relation Client.'
    },
    {
        label: 'Délivrez-vous un diplôme d’État ou une attestation ?',
        content:
            'Nous sommes un centre de formation professionnelle pratique (structure enregistrée à Antananarivo), pas une université. Nous délivrons une Attestation de Formation Pratique Haritech Agency uniquement aux participants ayant validé le projet final ou l’examen blanc de fin de session.'
    },
    {
        label: 'Pourquoi demandez-vous un acompte de 50 % à l’inscription ?',
        content:
            'Notre salle en U est strictement limitée à 15 participants afin de garantir un suivi individuel par le formateur. L’acompte de 50 % (payable via MVola, Orange Money, Airtel Money ou en espèces à l’agence) permet de réserver fermement votre place.'
    },
    {
        label: 'Quel niveau faut-il avoir pour rejoindre un bootcamp ?',
        content:
            'Chaque fiche programme précise les prérequis exacts. Nos bootcamps sont accessibles aux étudiants, jeunes diplômés et professionnels en reconversion motivés par la pratique intensive.'
    },
    {
        label: 'Où se déroulent les formations à Antananarivo ?',
        content:
            'Toutes nos sessions ont lieu en présentiel dans notre salle équipée à Antananarivo. L’adresse exacte et le point Google Maps vous sont transmis dès la validation de votre pré-inscription.'
    }
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

        tl.from('[data-faq-eyebrow]', {
            opacity: 0,
            y: 8,
            duration: 0.4
        })
            .fromTo(
                '[data-faq-title]',
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
                '[data-faq-subtitle]',
                {
                    opacity: 0,
                    y: 10,
                    duration: 0.5
                },
                '-=0.45'
            )
            .from(
                '[data-faq-list]',
                {
                    opacity: 0,
                    y: 14,
                    duration: 0.55
                },
                '-=0.35'
            )
    }, sectionRef.value)
})

onUnmounted(() => {
    ctx?.revert()
})
</script>
<template>
    <section ref="section-ref" class="py-16 sm:py-24 bg-neutral-100">
        <UContainer>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                <!-- Colonne gauche : En-tête -->
                <div class="lg:col-span-4 text-left">
                    <div class="flex items-center gap-2.5 mb-3">
                        <p data-faq-eyebrow class="text-xs font-bold tracking-[0.15em] uppercase text-primary">
                            Questions fréquentes
                        </p>
                    </div>

                    <h2 data-faq-title
                        class="text-3xl sm:text-4xl font-extrabold tracking-tight text-highlighted leading-[1.12]">
                        Tout ce qu’il faut savoir avant de s’inscrire
                    </h2>

                    <p data-faq-subtitle class="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                        Une question sur le matériel, le paiement ou le déroulement en salle à Antananarivo ? Voici nos
                        réponses directes.
                    </p>
                </div>

                <!-- Colonne droite : Accordéon Nuxt UI 4 -->
                <div data-faq-list class="lg:col-span-8">
                    <UAccordion :items="faqItems" :ui="{
                        item: 'border-b border-default last:border-b-0',
                        trigger: 'py-5 text-left text-base font-bold text-highlighted hover:text-primary transition-colors cursor-pointer',
                        body: 'pb-5 text-sm text-muted leading-relaxed'
                    }" />
                </div>
            </div>
        </UContainer>
    </section>
</template>
