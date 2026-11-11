<script setup lang="ts">
import type { SelectItem } from "@nuxt/ui"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { contactSchema } from "#shared/validations/contact"

gsap.registerPlugin(ScrollTrigger)

const contacts: ContactInfo[] = [
  {
    icon: "i-lucide-mail",
    title: "Email",
    description: "contact@haritechagency.com",
    link: "mailto:contact@haritechagency.com"
  },
  {
    icon: "i-lucide-facebook",
    title: "Facebook",
    description: "Page Haritech Agency",
    link: "https://facebook.com"
  },
  {
    icon: "i-lucide-map-pin",
    title: "Localisation",
    description: "Antananarivo, Madagascar — Rayonnement International"
  }
]

const initialState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  projectType: "company",
  message: ""
}

const state = reactive({ ...initialState })

const projectTypes = ref<SelectItem[]>([
  {
    value: "company",
    label: "Une Entreprise"
  },
  {
    value: "learner",
    label: "Un Apprenant / Particulier"
  },
  {
    value: "custom-development",
    label: "Développement sur mesure"
  },
  {
    value: "architecture-consulting",
    label: "Consulting Architecture"
  },
  {
    value: "other",
    label: "Autre"
  }
])

const toast = useToast()

async function onSubmit() {
  execute()
}

const { execute, pending } = useFetch("/api/contact", {
  method: "POST",
  body: state,
  watch: false,
  immediate: false,
  onResponse({ response }) {
    if (response.status === 204) {
      toast.add({
        title: "Message envoyé !",
        description: "Votre message a bien été envoyé ! Nous vous répondrons bientôt.",
        color: "success"
      })
      Object.assign(state, initialState)
    }
  },
  onRequestError({ error }) {
    toast.add({
      title: "Erreur réseau",
      description: error.message,
      color: "error"
    })
  },
  onResponseError({ response }) {
    if (response.status === 422) {
      toast.add({
        title: "Validation échouée",
        description: "Vérifiez vos champs.",
        color: "error"
      })
    } else {
      toast.add({
        title: "Une erreur est survenue",
        description: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer plus tard.",
        color: "error"
      })
    }
  }
})

const sectionRef = useTemplateRef<HTMLElement>("section-ref")
const headlineLineRef = useTemplateRef<HTMLElement>("headline-line-ref")
const headlineTextRef = useTemplateRef<HTMLElement>("headline-text-ref")
const titleRef = useTemplateRef<HTMLElement>("title-ref")
const descriptionRef = useTemplateRef<HTMLElement>("description-ref")
const contactsListRef = useTemplateRef<HTMLElement>("contacts-list-ref")
const formCardRef = useTemplateRef<HTMLElement>("form-card-ref")

let ctx: gsap.Context | null = null

onMounted(() => {
  if (!sectionRef.value) return
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

  ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top 80%",
        once: true
      }
    })

    if (headlineLineRef.value) {
      tl.from(headlineLineRef.value, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.45
      }, 0)
    }

    if (headlineTextRef.value) {
      tl.from(headlineTextRef.value, {
        x: -10,
        opacity: 0,
        duration: 0.45
      }, 0.1)
    }

    if (titleRef.value) {
      tl.fromTo(
        titleRef.value,
        { y: 24, opacity: 0, clipPath: "inset(0% 0% 100% 0%)" },
        { y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 0.8, ease: "expo.out" },
        "-=0.25"
      )
    }

    if (descriptionRef.value) {
      tl.from(descriptionRef.value, {
        y: 16,
        opacity: 0,
        duration: 0.5
      }, "-=0.45")
    }

    if (contactsListRef.value) {
      tl.from(contactsListRef.value.children, {
        y: 14,
        opacity: 0,
        duration: 0.45,
        stagger: 0.1
      }, "-=0.35")
    }

    if (formCardRef.value) {
      tl.from(formCardRef.value, {
        y: 28,
        opacity: 0,
        scale: 0.97,
        duration: 0.8,
        ease: "expo.out"
      }, 0.25)
    }
  }, sectionRef.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <section ref="section-ref" id="contact" class="py-16 sm:py-24 bg-elevated/50">
    <UContainer>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
        <div class="lg:col-span-5 text-left">
          <div class="flex items-center gap-3 mb-4">
            <span ref="headline-line-ref" class="w-5 h-[1.5px] bg-primary inline-block shrink-0" />
            <span ref="headline-text-ref"
              class="text-xs font-bold tracking-[0.15em] uppercase text-primary dark:text-brand-400">
              PARLONS DE VOTRE BESOIN
            </span>
          </div>

          <h2 ref="title-ref" class="text-4xl sm:text-5xl font-extrabold tracking-tight text-highlighted leading-[1.1]">
            Démarrons votre<br>projet
          </h2>

          <p ref="description-ref" class="mt-5 text-base text-muted leading-relaxed">
            Une idée, un projet ou un besoin de formation ?<br>
            Notre équipe vous répond sous 24 heures.
          </p>

          <div ref="contacts-list-ref" class="mt-8 flex flex-col gap-4">
            <CardsContactInfo v-for="contact in contacts" :key="contact.title" :contact="contact" />
          </div>
        </div>

        <div ref="form-card-ref"
          class="lg:col-span-7 rounded-xl p-2 sm:p-3 bg-white/20 dark:bg-white/[0.03] backdrop-blur-md border border-white/90 dark:border-white/10 ring-1 ring-black/[0.08] dark:ring-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
          <UCard variant="solid" :ui="{
            root: 'rounded-lg bg-default text-default ring-1 ring-black/[0.07] dark:ring-white/10 shadow-[0_4px_16px_-6px_rgba(0,0,0,0.08)] dark:shadow-none',
            body: 'p-6 sm:p-8'
          }">
            <UForm :schema="contactSchema" :state="state" class="grid grid-cols-1 md:grid-cols-2 gap-6"
              @submit="onSubmit">
              <UFormField label="Nom complet" name="name" :ui="{ label: 'text-xs font-bold text-highlighted mb-1.5' }">
                <UInput v-model="state.name" placeholder="Votre nom" size="lg" class="w-full" />
              </UFormField>

              <UFormField label="Email" name="email" :ui="{ label: 'text-xs font-bold text-highlighted mb-1.5' }">
                <UInput v-model="state.email" type="email" placeholder="vous@entreprise.com" size="lg" class="w-full" />
              </UFormField>

              <UFormField label="Vous êtes" name="projectType" class="col-span-full"
                :ui="{ label: 'text-xs font-bold text-highlighted mb-1.5' }">
                <USelect v-model="state.projectType" :items="projectTypes" size="lg" class="w-full" />
              </UFormField>

              <UFormField label="Votre besoin" name="message" class="col-span-full"
                :ui="{ label: 'text-xs font-bold text-highlighted mb-1.5' }">
                <UTextarea v-model="state.message" :rows="5"
                  placeholder="Décrivez votre projet ou la formation qui vous intéresse..." size="lg" class="w-full" />
              </UFormField>

              <div class="col-span-full pt-1">
                <UButton :loading="pending" type="submit" color="primary" variant="solid" size="xl"
                  trailing-icon="i-lucide-arrow-right" class="w-full justify-center font-semibold">
                  Envoyer ma demande
                </UButton>
              </div>
            </UForm>
          </UCard>
        </div>
      </div>
    </UContainer>
  </section>
</template>
