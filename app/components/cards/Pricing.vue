<script lang="ts" setup>
const props = defineProps<{
    pricing: Pricing;
}>();

const { pricing } = toRefs(props);
</script>

<template>
    <div class="bg-default dark:bg-elevated p-8 transition-all ease-in-out duration-400 hover:border-primary border-2 border-neutral-200 flex flex-col gap-4 relative"
        :class="pricing.isPopular ? 'border-primary' : ''">
        <div v-if="pricing.isPopular"
            class="bg-primary text-white py-2 px-4 text-sm text-center -mt-8 -mb-4 -mx-8 uppercase tracking-wide">Le
            plus
            populaire</div>
        <div class="pt-8">
            <h3 class="font-semibold text-xl">{{ pricing.title }}</h3>
            <div class="mt-2 text-sm text-neutral-500">{{ pricing.subtitle }}</div>
        </div>
        <div>
            <div>
                <b class="font-bold text-3xl">{{ pricing.price }} {{ pricing.unity }}</b>
                <template v-if="pricing.periodicity">/ {{ pricing.periodicity }}</template>
            </div>
        </div>
        <div class="bg-muted p-4 text-sm">
            <p>{{ pricing.description }}</p>
        </div>
        <div class="py-2 flex flex-col gap-3 grow">
            <div v-for="feature in pricing.features" :key="feature" class="flex items-center gap-2">
                <UIcon name="lucide-check" class="text-primary" />
                <div>{{ feature }}</div>
            </div>
        </div>
        <div>
            <UButton v-if="pricing.isPopular" size="xl" class="w-full justify-center">
                Demander un devis
            </UButton>
            <UButton v-else color="secondary" size="xl" class="w-full justify-center" variant="outline">
                Demander un devis
            </UButton>
        </div>
    </div>
</template>
