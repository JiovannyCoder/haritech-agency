<script setup lang="ts">
const isVisible = ref(false)

function handleScroll() {
    isVisible.value = window.scrollY > 400
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

onMounted(() => {
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
})

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
})
</script>

<template>
    <Transition enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-4 scale-90" enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 translate-y-4 scale-90">
        <UButton v-if="isVisible" icon="i-lucide-arrow-up" color="primary" variant="solid" size="lg"
            aria-label="Remonter en haut de la page"
            class="fixed bottom-6 right-6 z-50 rounded-full shadow-lg cursor-pointer" @click="scrollToTop" />
    </Transition>
</template>
