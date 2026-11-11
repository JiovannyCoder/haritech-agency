<script lang="ts" setup>
const props = defineProps<{
    contact: ContactInfo
}>()

const { contact } = toRefs(props)
</script>

<template>
    <div class="group flex items-center gap-3.5">
        <div
            class="size-9 rounded-lg bg-default flex items-center justify-center text-muted transition-colors duration-300 group-hover:border-primary/40 group-hover:text-primary shrink-0">
            <UIcon :name="contact.icon" class="size-4" />
        </div>

        <a v-if="contact.link" :href="contact.link" target="_blank" rel="noopener noreferrer"
            class="text-sm font-medium text-muted hover:text-highlighted transition-colors duration-200">
            {{ contact.description }}
        </a>

        <p v-else class="text-sm font-medium text-muted">
            {{ contact.description }}
        </p>
    </div>
</template>
