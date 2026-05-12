<script lang="ts" setup>
const pricingPlans: Pricing[] = [
    {
        title: "Developer à temps partiel",
        subtitle: "50h/mois",
        price: "1,800",
        unity: "€",
        periodicity: "mois",
        description: "Idéal pour maintenance & évolutions",
        features: [
            "1 développeur senior",
            "~12h par semaine",
            "Communication Slack/Teams",
            "Facturation mensuelle",
            "Code reviews inclus",
            "Documentation basique"
        ],
        isPopular: false
    },
    {
        title: "Developer à temps plein",
        subtitle: "160h/mois",
        price: "3,500",
        unity: "€",
        periodicity: "mois",
        description: "Le plus populaire pour les projets en cours",
        features: [
            "1 développeur senior dédié",
            "40h par semaine",
            "Daily standups",
            "Contrat mensuel ou annuel",
            "Tests automatisés",
            "Documentation complète",
            "Onboarding inclus",
            "Remplacement garanti"
        ],
        isPopular: true
    },
    {
        title: "Équipe Complète",
        subtitle: "Équipe de 3-8 personnes",
        price: "Sur devis",
        description: "Pour les projets complexes & ambitieux",
        features: [
            "Lead developer + équipe",
            "Architecture technique",
            "DevOps & CI/CD",
            "Product owner dédié",
            "Sprints Agile 2 semaines",
            "Tests E2E",
            "Support 24/7",
            "SLA personnalisé"
        ],
        isPopular: false
    },
];
</script>

<template>
    <UPageSection id="tarifs" title="Tarification simple et transparente"
        description="Prix fixes. Aucune surprise. Facturation EUR/USD. Résiliation flexible." headline="Tarifs">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-8 gap-4">
            <CardsPricing v-for="pricing in pricingPlans" :key="pricing.title" :pricing="pricing" />
        </div>
    </UPageSection>
</template>
