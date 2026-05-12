<script lang="ts" setup>
import type { ButtonProps } from '@nuxt/ui';

const links = ref<ButtonProps[]>([
    {
        label: "Demander un devis",
        trailingIcon: "lucide-arrow-right",
        to: "/#contact",
        size: "xl"
    },
    {
        label: "Voir les tarifs",
        to: "/#tarifs",
        variant: "outline",
        color: "secondary",
        size: "xl"
    }

]);

const garantees = [
    {
        title: "Devis sous 48h",
        subtitle: "Brief → Proposition détaillée avec tarifs fixes"
    },
    {
        title: "Contrat sécurisé",
        subtitle: "NDA, facturation EUR/USD, propriété totale du code"
    },
    {
        title: "Livraison garantie",
        subtitle: "Sprints 2 semaines, code reviews, support post-prod"
    }
]
</script>

<template>
    <UPageHero class="tracking-wid" orientation="horizontal" id="hero"
        title="Externalisez votre développement en toute confiance"
        description="Des développeurs seniors formés aux standards internationaux. Facturation professionnelle. Contrats solides. Support GMT+3 compatible Europe & USA."
        :ui="{
            title: 'sm:text-6xl text-4xl font-semibold text leading-12 sm:leading-18',
            description: 'sm:text-lg text-md'
        }">
        <template #headline>
            <UBadge size="lg" variant="soft" leading-icon="lucide-shield" :ui="{
                leadingIcon: 'text-primary',
                label: 'uppercase',
                base: 'uppercase bg-muted py-2 px-4 rounded-none tracking-wider text-xs sm:text-sm'
            }">
                Your Trusted Development Partner
            </UBadge>
        </template>
        <template #body>
            <div class="flex items-center sm:gap-6 gap-4 flex-wrap">
                <UButton v-for="link in links" v-bind="link" class="grow justify-center sm:grow-0"></UButton>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:mt-12 mt-10">
                <div>
                    <h4 class="font-bold text-primary text-2xl sm:text-3xl">-60%</h4>
                    <p class="text-neutral-500">vs. Europe/USA</p>
                </div>
                <div>
                    <h4 class="font-bold text-primary text-2xl sm:text-3xl">24h</h4>
                    <p class="text-neutral-500">Temps de réponse</p>
                </div>
                <div>
                    <h4 class="font-bold text-primary text-2xl sm:text-3xl">100%</h4>
                    <p class="text-neutral-500">Remote-Ready</p>
                </div>
            </div>
        </template>
        <div
            class="sm:p-6 p-4 h-full border-l-4 border-primary flex relative lg:aspect-auto sm:aspect-video aspect-[0.8]">
            <NuxtImg class="absolute top-0 left-0 z-10 w-full h-full object-cover brightness-90"
                src="/images/home/bg-hero.jpg">
            </NuxtImg>
            <div class="flex flex-col gap-4 mt-auto w-full z-20">
                <div v-for="garentee in garantees" :key="garentee.title" class="flex gap-4 p-4 bg-default">
                    <UAvatar size="3xl" icon="lucide-check"></UAvatar>
                    <div>
                        <h4 class="font-semibold">{{ garentee.title }}</h4>
                        <p class="text-neutral-500 text-sm">{{ garentee.subtitle }}</p>
                    </div>
                </div>
            </div>
        </div>
    </UPageHero>
</template>
