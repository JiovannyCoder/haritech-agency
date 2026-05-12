import { object, string } from "yup";

export const contactSchema = object({
  name: string()
    .trim()
    .min(3, "Le nom doit contenir au moins 3 caractères")
    .required("Veuillez renseigner votre nom"),

  email: string()
    .email("L'email doit être valide")
    .required("Veuillez renseigner votre email"),

  company: string()
    .trim()
    .min(3, "Le nom d'entreprise doit contenir au moins 3 caractères")
    .notRequired(),

  phone: string()
    .trim()
    .min(10, "Le numéro de téléphone doit contenir au moins 10 caractères")
    .notRequired(),

  projectType: string().required("Veuillez renseigner le type projet demandé"),

  message: string()
    .trim()
    .min(3, "Le message doit contenir au moins 3 caractères")
    .required("Veuillez renseigner une petite description de votre idée"),
});
