<script lang="ts" setup>
const props = defineProps<{
    advantage: Advantage;
}>();

const { advantage } = toRefs(props);
</script>

<template>
    <div
        class="bg-muted dark:bg-elevated p-6 transition-all ease-in-out duration-400 hover:border-primary border border-neutral-200 flex flex-col gap-4">
        <UAvatar :icon="advantage.icon" size="3xl"></UAvatar>
        <h3 class="font-semibold text-lg">{{ advantage.title }}</h3>
        <p class="text-muted">{{ advantage.description }}</p>
    </div>
</template>
