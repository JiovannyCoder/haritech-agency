// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/scripts",
    "v-gsap-nuxt",
    "nuxt-gtag",
  ],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],
  colorMode: {
    preference: "light",
    fallback: "light",
    storageKey: "app-color-mode",
  },

  runtimeConfig: {
    googleFormUrl: "",
  },

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
        quotes: "double",
      },
    },
  },

  gtag: {
    id: "G-WRHGTZR00H",
  },
});
