<script setup lang="ts">
import type { SelectItem } from '@nuxt/ui'
import { contactSchema } from "#shared/validations/contact";

const contacts: ContactInfo[] = [
  {
    icon: "lucide-mail",
    title: "Email",
    description: "contact@haritechagency.com",
    link: "mailto:contact@haritechagency.com"
  },
  {
    icon: "lucide-facebook",
    title: "Facebook",
    description: "Page Haritech Agency",
    link: "https://facebook.com/haritechagency"
  },
  {
    icon: "lucide-map-pin",
    title: "Localisation",
    description: "Antananarivo, Madagascar \n Rayonnement International",
  },
]

const initialState = {
  name: '',
  email: '',
  company: '',
  phone: '',
  projectType: '',
  message: ''
}

const state = reactive({ ...initialState })

const projectTypes = ref<SelectItem[]>([
  {
    value: "custom-development",
    label: "Développement sur mesure"
  },
  {
    value: "architecture-consulting",
    label: "Consulting Architecture"
  },
  {
    value: "code-audit",
    label: "Audit de code"
  },
  {
    value: "team-augmentation",
    label: "Renfort d'équipe"
  },
  {
    value: "other",
    label: "Autre"
  },
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
      // reset form
      Object.assign(state, initialState)
    }
  },
  onRequestError({ error }) {
    toast.add({ title: 'Erreur réseau', description: error.message })
  },

  onResponseError({ response }) {
    if (response.status === 422) {
      toast.add({ title: 'Validation échouée', description: 'Vérifiez vos champs.' })
    } else {
      toast.add({
        title: "Une erreur est survenue",
        description: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer plus tard.",
        color: "error"
      })
    }
  }
})
</script>

<template>
  <UPageSection class="bg-elevated/60" id="contact" title="Démarrons votre projet"
    description="Partagez-nous vos besoins et recevez une proposition détaillée sous 48 heures." headline="Contact">
    <div class="grid lg:grid-cols-3 grid-cols-1 gap-6">
      <div class="lg:col-span-2 bg-default dark:bg-elevated md:p-8 p-6 border border-neutral-200">
        <UForm :schema="contactSchema" :state="state" @submit="onSubmit" class="grid md:grid-cols-2 grid-cols-1 gap-6">
          <UFormField label="Nom complet *" name="name">
            <UInput v-model="state.name" placeholder="John Doe"></UInput>
          </UFormField>
          <UFormField label="Email *" name="email">
            <UInput v-model="state.email" placeholder="john@company.com"></UInput>
          </UFormField>
          <UFormField label="Entreprise" name="company">
            <UInput v-model="state.company" placeholder="Votre entreprise"></UInput>
          </UFormField>
          <UFormField label="Téléphone" name="phone">
            <UInput v-model="state.phone" placeholder="Ex: +33 6 12 34 56 78"></UInput>
          </UFormField>
          <UFormField label="Type de projet *" name="projectType" class="col-span-full">
            <USelect v-model="state.projectType" :items="projectTypes" placeholder="Sélétionnez un type"></USelect>
          </UFormField>
          <UFormField label="Décrivez votre projet *" name="message" class="col-span-full">
            <UTextarea v-model="state.message"
              placeholder="Partagez-nous les détails de votre projet, vos objectifs et vos contraintes..."></UTextarea>
          </UFormField>
          <div class="col-span-full">
            <UButton :loading="pending" type="submit" color="primary" trailing-icon="lucide-send"
              class="w-full justify-center hidden md:flex" size="xl">Envoyer ma demande</UButton>
            <UButton :loading="pending" type="submit" color="primary" trailing-icon="lucide-send"
              class="w-full justify-center md:hidden">Envoyer ma demande</UButton>
          </div>
        </UForm>
      </div>
      <div class="flex flex-col flex-wrap gap-6">
        <CardsContactInfo v-for="contact in contacts" :key="contact.title" :contact="contact" />
      </div>
    </div>
  </UPageSection>
</template>
