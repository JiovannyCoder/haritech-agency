<script lang="ts" setup>
const advantages: Advantage[] = [
    {
        title: "Facturation Internationale",
        description: "Factures EUR/USD. IBAN européen. Paiements Stripe, Wise, virement SEPA. TVA intracommunautaire.",
        icon: "mdi-cog"
    },
    {
        title: "Contrats Solides",
        description: "NDA systématique. Contrats en français/anglais. Propriété intellectuelle garantie. RGPD compliant.",
        icon: "mdi-account-group"
    },
    {
        title: "Timezone Compatible",
        description: "GMT+3 (1h d'écart avec Paris). Disponibilité 9h-18h heure française. Réunions Zoom quotidiennes.",
        icon: "mdi-check-circle"
    },
    {
        title: "Communication Fluide",
        description: "Français natif. Anglais professionnel. Slack, Teams, ou votre outil préféré. Daily standups inclus.",
        icon: "mdi-check-circle"
    },
    {
        title: "Expertise Certifiée",
        description: "Master Génie Logiciel. 5+ ans d'expérience. Formation continue. Veille technologique active.",
        icon: "mdi-check-circle"
    },
    {
        title: "Qualité Garantie",
        description: "Code reviews systématiques. Tests automatisés. CI/CD. Documentation exhaustive. Support post-livraison.",
        icon: "mdi-check-circle"
    },
];
</script>

<template>
    <UPageSection id="pourquoi-nous" title="Un partenaire technique fiable"
        description="Nous comprenons vos enjeux business. Externaliser n'est pas qu'une question de coût, c'est avant tout une question de confiance."
        headline="Pourquoi Haritech Agency">
        <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4">
            <CardsAdvantage :advantage="advantage" v-for="advantage in advantages" :key="advantage.title" />
        </div>
        <BannersQualityCommitment />
    </UPageSection>
</template>
