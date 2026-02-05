<script setup lang="ts">
import { object, string } from "yup"

const schema = object({
  name: string()
    .trim()
    .min(3, "Le nom doit contenir au moins 3 caractères")
    .required("Veuillez renseigner votre nom"),

  email: string()
    .email("L'email doit être valide")
    .required("Veuillez renseigner votre email"),

  service: string()
    .required("Veuillez renseigner le service demandé"),

  description: string()
    .trim()
    .min(3, "La description doit contenir au moins 3 caractères")
    .required("Veuillez renseigner une petite description de votre idée")
})
const initialState = {
  name: undefined,
  email: undefined,
  service: undefined,
  description: undefined
}
const state = reactive({ ...initialState })

const serviceOptions = [
  "Sites Vitrines & Landing Pages",
  "Mini E-commerce",
  "Applications Web Sur-Mesure",
  "Dashboards & Analytics"
]

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
  }
})
</script>

<template>
  <UPageSection
    id="contact"
    orientation="horizontal"
  >
    <template #title>
      <h2 class="leading-tight">
        Un projet en tête ? <br>
        — Parlons-en
      </h2>
    </template>
    <template #description>
      <p>
        Le design efficace ne fait pas que séduire : il convertit.
        Une expérience utilisateur solide transforme l’intérêt en engagement durable.
      </p>
    </template>
    <template #links>
      <UButton
        color="neutral"
        leading-icon="i-lucide-phone"
        size="xl"
        to="tel:+261382862245"
        target="_blank"
      >
        Contactez-nous
      </UButton>
    </template>
    <UForm
      :schema="schema"
      :state="state"
      class="space-y-4 bg-elevated rounded-2xl md:p-10 p-5"
      @submit="onSubmit"
    >
      <div>
        <h3 class="text-xl font-bold mb-4">
          Planifier une consultation gratuite
        </h3>
        <USeparator />
      </div>
      <UFormField
        label="Nom"
        name="name"
        size="xl"
      >
        <UInput
          v-model="state.name"
          class="w-full"
        />
      </UFormField>

      <UFormField
        label="Email"
        name="email"
        size="xl"
      >
        <UInput
          v-model="state.email"
          class="w-full"
        />
      </UFormField>

      <UFormField
        label="Service"
        name="service"
        size="xl"
      >
        <USelect
          v-model="state.service"
          :items="serviceOptions"
          class="w-full"
        />
      </UFormField>

      <UFormField
        label="Description"
        name="description"
        size="xl"
      >
        <UTextarea
          v-model="state.description"
          class="w-full"
        />
      </UFormField>

      <UButton
        size="xl"
        type="submit"
        leading-icon="i-lucide-send"
        :loading="pending"
      >
        Envoyer
      </UButton>
    </UForm>
  </UPageSection>
</template>
