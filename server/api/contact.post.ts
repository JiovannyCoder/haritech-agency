import { object, string } from "yup"

const schema = object({
  name: string()
    .trim()
    .min(3, "Le nom doit contenir au moins 3 caractères")
    .required("Veuillez renseigner votre nom"),

  email: string()
    .email("L'email doit être valide")
    .required("Veuillez renseigner votre email"),

  service: string().required("Veuillez renseigner le service demandé"),

  description: string()
    .trim()
    .min(3, "La description doit contenir au moins 3 caractères")
    .required("Veuillez renseigner une petite description de votre idée")
})

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readValidatedBody(event, body => schema.validate(body))

  const formData = new URLSearchParams()
  formData.append("entry.1394789631", body.name)
  formData.append("entry.1290526402", body.email)
  formData.append("entry.386881313", body.service)
  formData.append("entry.1521228359", body.description)

  console.log("=============================", config.googleFormUrl)
  try {
    await $fetch(config.googleFormUrl, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    setResponseStatus(event, 204)
    return ""
  } catch (err) {
    console.log(err)
    throw createError({
      statusCode: 500,
      statusMessage: "Erreur lors de l'envoi vers Google Forms"
    })
  }
})
