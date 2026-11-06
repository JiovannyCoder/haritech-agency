export type FormationStatus = "open" | "soon";

export const formationStatusLabel: Record<FormationStatus, string> = {
  open: "Inscriptions ouvertes",
  soon: "Bientôt"
};

export interface Formation {
  slug: string;
  title: string;
  description: string;
  icon: string;
  status: FormationStatus;
  whatsappMessage: string;
}
