<script lang="ts" setup>
const props = defineProps<{
    contact: ContactInfo;
}>();

const { contact } = toRefs(props);
</script>

<template>
    <div class="bg-default dark:bg-elevated p-6 border border-neutral-200 flex flex-col gap-4">
        <UAvatar :icon="contact.icon" size="3xl"></UAvatar>
        <h3 class="font-semibold text-lg -mb-2">{{ contact.title }}</h3>
        <a v-if="contact.link" :href="contact.link" target="__blank"
            class="hover:text-primary transition-all ease-in-out duration-400">{{
                contact.description }}</a>
        <p v-else class="text-muted whitespace-pre-line">{{ contact.description }}</p>
    </div>
</template>
