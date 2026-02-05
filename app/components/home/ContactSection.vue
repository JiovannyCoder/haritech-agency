<script setup lang="ts">
import { object, string } from "yup"
import type { InferType } from "yup"
import type { FormSubmitEvent } from "@nuxt/ui"

const schema = object({
  name: string()
    .trim()
    .min(3, "Le nom doit contenir au moins 3 caractères")
    .required("Le nom est obligatoire"),

  email: string()
    .email("L'email doit être valide")
    .required("L'email est obligatoire"),

  service: string()
    .required("Le service est obligatoire"),

  description: string()
    .trim()
    .min(3, "La description doit contenir au moins 3 caractères")
    .required("La description est obligatoire")
})

type Schema = InferType<typeof schema>

const state = reactive({
  name: undefined,
  email: undefined,
  service: "Development",
  description: undefined
})

const serviceOptions = [
  "Branding Service",
  "UI/UX Design",
  "Development"
]

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: "Success", description: "The form has been submitted.", color: "success" })
  console.log(event.data)
}
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
        trailing-icon="i-lucide-arrow-right"
        size="xl"
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
      >
        Envoyer
      </UButton>
    </UForm>
  </UPageSection>
</template>
