<script setup lang="ts">
import type { FooterColumn } from "@nuxt/ui"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const columns: FooterColumn[] = [
  {
    label: "Solutions B2B",
    children: [
      {
        label: "Développement Dédié",
        to: "/#entreprises",
        exactHash: true
      },
      {
        label: "Formation Intra-Entreprise",
        to: "/#entreprises",
        exactHash: true
      },
      {
        label: "Pourquoi Haritech",
        to: "/#pourquoi-haritech",
        exactHash: true
      }
    ]
  },
  {
    label: "Formations",
    children: [
      {
        label: "Développement Web",
        to: "/formations/developpement-web"
      },
      {
        label: "BPO & Assistantes (Bientôt)",
        to: "/#formations",
        exactHash: true
      },
      {
        label: "Digital & Métiers de l'IA (Bientôt)",
        to: "/#formations",
        exactHash: true
      }
    ]
  },
  {
    label: "Contact & Légal",
    children: [
      {
        label: "contact@haritechagency.com",
        href: "mailto:contact@haritechagency.com",
        icon: "i-lucide-mail"
      },
      {
        label: "Page Haritech Agency",
        href: "https://facebook.com",
        icon: "i-lucide-facebook",
        target: "_blank"
      },
      {
        label: "Antananarivo, Madagascar",
        icon: "i-lucide-map-pin"
      },
      {
        label: "Politique de confidentialité",
        to: "/politique-de-confidentialite"
      }
    ]
  }
]

const footerWrapperRef = useTemplateRef<HTMLElement>("footer-wrapper-ref")
const gridRef = useTemplateRef<HTMLElement>("grid-ref")
const brandRef = useTemplateRef<HTMLElement>("brand-ref")
const bottomRef = useTemplateRef<HTMLElement>("bottom-ref")

let ctx: gsap.Context | null = null

onMounted(() => {
  if (!footerWrapperRef.value) return
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

  ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: footerWrapperRef.value,
        start: "top 88%",
        once: true
      }
    })

    if (gridRef.value) {
      tl.from(gridRef.value, {
        opacity: 0,
        duration: 0.9,
        ease: "power1.out"
      }, 0)
    }

    if (brandRef.value) {
      tl.from(brandRef.value, {
        y: 20,
        opacity: 0,
        duration: 0.65,
        ease: "expo.out"
      }, 0.1)
    }

    tl.from(".footer-col", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "expo.out"
    }, 0.15)

    if (bottomRef.value) {
      tl.from(bottomRef.value, {
        y: 12,
        opacity: 0,
        duration: 0.45
      }, "-=0.3")
    }
  }, footerWrapperRef.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <div ref="footer-wrapper-ref" class="relative overflow-hidden">
     <div
      ref="grid-ref"
      class="absolute inset-0 -z-10 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--ui-border)_25%,white)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--ui-border)_25%,white)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[linear-gradient(to_top,black,transparent_85%)]"
      aria-hidden="true"
    />

    <UFooter class="bg-transparent border-t border-default/60" :ui="{
      top: 'py-20 sm:py-28',
      bottom: 'border-none py-8'
    }">
      <template #top>
        <UContainer>
          <UFooterColumns :columns="columns" :ui="{
            label: 'footer-col text-sm font-bold text-highlighted',
            list: 'footer-col mt-5 space-y-3'
          }">
            <template #left>
              <div ref="brand-ref" class="max-w-xs">
                <div class="inline-block scale-115 origin-left mb-1">
                  <AppLogo />
                </div>
                <p class="text-sm text-muted mt-5 leading-relaxed">
                  L'ingénierie logicielle et la formation de précision au service de votre croissance.
                </p>
              </div>
            </template>

            <template #link="{ link }">
              <ULink v-if="link.to || link.href" :to="link.to" :href="link.href" :target="link.target"
                :exact-hash="link.exactHash"
                class="footer-link group inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors duration-300">
                <UIcon v-if="link.icon" :name="link.icon"
                  class="size-4 text-muted group-hover:text-primary transition-colors duration-300 shrink-0" />
                <span class="footer-link-text">{{ link.label }}</span>
              </ULink>

              <span v-else class="inline-flex items-center gap-2 text-sm text-muted">
                <UIcon v-if="link.icon" :name="link.icon" class="size-4 text-muted shrink-0" />
                <span>{{ link.label }}</span>
              </span>
            </template>
          </UFooterColumns>
        </UContainer>
      </template>

      <template #bottom>
        <p ref="bottom-ref" class="text-xs text-muted text-center">
          © {{ new Date().getFullYear() }} Haritech Agency. Tous droits réservés.
        </p>
      </template>
    </UFooter>
  </div>
</template>

<style scoped>
.footer-link-text {
  position: relative;
  display: inline-block;
}

.footer-link-text::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 1.5px;
  background-color: var(--ui-primary);
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.footer-link:hover .footer-link-text::after {
  transform: scaleX(1);
}
</style>
