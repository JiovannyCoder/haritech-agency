<script lang="ts" setup>
const props = defineProps<{
    service: Service;
}>();

const { service } = toRefs(props);
</script>

<template>
    <div
        class="bg-default p-8 transition-all ease-in-out duration-400 hover:border-primary border border-neutral-200 flex flex-col sm:gap-6 gap-4">
        <div class="flex items-center gap-4">
            <UAvatar :icon="service.icon" size="3xl"></UAvatar>
            <div class="sm:ml-auto sm:text-right">
                <div class="text-muted text-sm">Tarif</div>
                <h4 class="font-semibold text-primary">{{ service.price }}</h4>
            </div>
        </div>
        <h3 class="font-semibold text-xl">{{ service.title }}</h3>
        <p>{{ service.description }}</p>
        <USeparator />
        <div>
            <h4 class="uppercase text-sm mb-4">Inclus </h4>
            <div class="flex flex-col gap-2">
                <div v-for="feature in service.features" :key="feature" class="flex items-center gap-2">
                    <UIcon name="lucide-check" class="text-primary" />
                    <div>{{ feature }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
