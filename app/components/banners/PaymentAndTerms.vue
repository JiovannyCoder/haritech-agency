<script setup lang="ts">
const payments = [
    "Facturation mensuelle anticipée (ou trimestrielle avec -5%)",
    "Paiement par virement SEPA, Stripe, Wise, ou PayPal",
    "Factures EUR ou USD, TVA si applicable",
    "Période d'essai 2 semaines (remboursable si non satisfait)"
]

const terms = [
    "Contrats mensuels ou annuels (annuel = -10%)",
    "NDA et clause de confidentialité systématique",
    "Propriété intellectuelle transférée au client",
    "Résiliation possible avec préavis 30 jours"
]
</script>

<template>
    <div
        class="sm:p-8 p-6 bg-neutral-100 dark:bg-neutral-950 sm:border-l-4 border-t-4 sm:border-t-0 border-primary grid lg:grid-cols-2 grid-cols-1 gap-8">
        <div>
            <h3 class="text-lg font-semibold">Modalités de paiement</h3>
            <div class="mt-6 flex flex-col gap-2 grow">
                <div v-for="payment in payments" :key="payment" class="flex items-center gap-2">
                    <UIcon name="lucide-circle-small" class="text-primary" />
                    <div class="text-muted">{{ payment }}</div>
                </div>
            </div>
        </div>
        <div>
            <h3 class="text-lg font-semibold">Conditions contractuelles</h3>
            <div class="mt-6 flex flex-col gap-2 grow">
                <div v-for="term in terms" :key="term" class="flex items-center gap-2">
                    <UIcon name="lucide-circle-small" class="text-primary" />
                    <div class="text-muted">{{ term }}</div>
                </div>
            </div>
        </div>
    </div>
</template>