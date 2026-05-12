<script lang="ts" setup>
const services: Service[] = [
    {
        icon: 'lucide-code',
        price: 'À partir de 35€/h',
        title: 'Développement Dédié',
        description: "Une équipe complète assignée à votre projet. Du backend au frontend, nous gérons l'intégralité du cycle de développement.",
        features: [
            'Architecture technique',
            'Code reviews quotidiens',
            'Tests automatisés',
            'Documentation complète'
        ]
    },
    {
        icon: 'lucide-users',
        price: 'À partir de 3,500€/mois',
        title: 'Staff Augmentation',
        description: "Des développeurs seniors qui s'intègrent directement dans vos équipes. Contrats flexibles mensuels ou annuels.",
        features: [
            'Sélection en 48h',
            'Onboarding inclus',
            'Gestion administrative',
            'Remplacement garanti'
        ]
    },
    {
        icon: 'lucide-clock',
        price: 'À partir de 1,200€/mois',
        title: 'Maintenance & Support',
        description: 'Évolution et maintenance de vos applications existantes. SLA garantis, monitoring proactif.',
        features: [
            'Bugfixes < 24h',
            'Mises à jour sécurité',
            'Monitoring 24/7',
            'Hotline technique'
        ]
    },
    {
        icon: 'lucide-headphones',
        price: 'À partir de 800€/jour',
        title: 'Consulting Technique',
        description: "Audit d'architecture, revue de code, recommandations stratégiques. Idéal pour valider une roadmap technique.",
        features: [
            'Rapport détaillé',
            "Plan d'action",
            'Architecture diagrams',
            'Présentation équipe'
        ]
    }
];
</script>

<template>
    <UPageSection class="bg-elevated/60" id="nos-services" title="Des formules adaptées à chaque besoin"
        description="Facturation transparente. Contrats flexibles. Aucun frais caché." headline="Nos Services">
        <div class="grid md:grid-cols-2 grid-cols-1 gap-8">
            <CardsService :service="service" v-for="service in services" :key="service.title" />
        </div>
    </UPageSection>
</template>
