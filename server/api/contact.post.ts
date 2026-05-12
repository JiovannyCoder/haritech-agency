import { contactSchema } from "#shared/validations/contact";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readValidatedBody(event, (body) =>
    contactSchema.validate(body),
  );

  const formData = new URLSearchParams();
  formData.append("entry.38490596", body.name);
  formData.append("entry.1645473206", body.email);
  formData.append("entry.291754906", body.phone || "");
  formData.append("entry.2105487527", body.company || "");
  formData.append("entry.1281401115", body.projectType);
  formData.append("entry.629622522", body.message);

  try {
    await $fetch(config.googleFormUrl, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    setResponseStatus(event, 204);
    return "";
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Erreur lors de l'envoi vers Google Forms",
    });
  }
});
