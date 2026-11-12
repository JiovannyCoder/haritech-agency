<script lang="ts" setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CategoryId = "all" | "dev" | "va" | "ia" | "bpo";

interface SessionItem {
    slug: string;
    category: Exclude<CategoryId, "all">;
    categoryLabel: string;
    available: boolean;
    formatBadge: string;
    daySchedule: string;
    seatsLeft: string;
    title: string;
    image: string;
    description: string;
    deliverables: string[];
}

const filters: { id: CategoryId; label: string; icon: string }[] = [
    { id: "all", label: "Tout voir", icon: "i-lucide-layout-grid" },
    { id: "dev", label: "Développement (Dispo)", icon: "i-lucide-code-2" },
    { id: "va", label: "Assistante Virtuelle", icon: "i-lucide-laptop" },
    { id: "ia", label: "Annotation IA", icon: "i-lucide-cpu" },
    { id: "bpo", label: "Téléconseiller", icon: "i-lucide-headset" },
];

const sessions: SessionItem[] = [
    {
        slug: "samedi-code-laravel-essentiel",
        category: "dev",
        categoryLabel: "Développement",
        available: true,
        formatBadge: "One-Shot • 1 Journée",
        daySchedule: "Samedi • 08h30 - 16h30",
        seatsLeft: "15 places max",
        title: "Samedi Laravel : Architecture & CRUD Complet en 1 jour",
        image:
            "https://unsplash.com",
        description:
            "Une journée intensive pour maîtriser la structure MVC de Laravel, Eloquent ORM, l'authentification et créer une base solide prête pour la production.",
        deliverables: [
            "Installation, routing, contrôleurs & migrations",
            "Relations Eloquent et validation des données",
            "Mini-projet fonctionnel codé de A à Z sur place",
        ],
    },
    {
        slug: "bootcamp-weekend-app-fullstack",
        category: "dev",
        categoryLabel: "Développement",
        available: true,
        formatBadge: "Bootcamp • Week-end (2j)",
        daySchedule: "Samedi & Dimanche",
        seatsLeft: "15 places max",
        title: "Bootcamp Week-end : Créer & Déployer une App Complète",
        image:
            "https://unsplash.com",
        description:
            "Deux jours en immersion totale pour concevoir, coder et mettre en ligne une application web complète en conditions réelles d'agence.",
        deliverables: [
            "Conception de la base de données et API",
            "Intégration d'une interface moderne et réactive",
            "Déploiement en ligne sur serveur avec nom de domaine",
        ],
    },
    {
        slug: "vendredi-pratique-laravel-api",
        category: "dev",
        categoryLabel: "Développement",
        available: true,
        formatBadge: "One-Shot • 1 Journée",
        daySchedule: "Lundi ou Vendredi",
        seatsLeft: "15 places max",
        title: "Focus Laravel : Création d'APIs REST Sécurisées",
        image:
            "https://unsplash.com",
        description:
            "Atelier ciblé sur la création d'APIs performantes avec Laravel Sanctum, gestion des rôles, pagination et tests des endpoints.",
        deliverables: [
            "Authentification par token avec Laravel Sanctum",
            "API Resources, gestion des erreurs et permissions",
            "Documentation et tests complets sous Postman",
        ],
    },
    {
        slug: "coaching-assistante-virtuelle-outils",
        category: "va",
        categoryLabel: "Assistante Virtuelle",
        available: false,
        formatBadge: "Coaching • 1 à 2 Jours",
        daySchedule: "Dates à venir",
        seatsLeft: "15 places max",
        title: "Boîte à Outils de l'Assistante Virtuelle Pro",
        image:
            "https://unsplash.com",
        description:
            "Prise en main pratique des outils indispensables demandés par les clients internationaux : Notion, Google Workspace, CRM et gestion administrative.",
        deliverables: [
            "Organisation d'espace client sur Notion & Trello",
            "Gestion de boîte mail, agenda et facturation",
            "Simulation d'une mission réelle d'assistance B2B",
        ],
    },
    {
        slug: "atelier-annotation-donnees-ia",
        category: "ia",
        categoryLabel: "Annotation IA",
        available: false,
        formatBadge: "One-Shot • 1 Journée",
        daySchedule: "Dates à venir",
        seatsLeft: "15 places max",
        title: "Initiation Pratique à l'Annotation de Données IA",
        image:
            "https://unsplash.com",
        description:
            "Apprenez les méthodes de labellisation texte, image et évaluation de réponses IA selon les critères de qualité des plateformes actuelles.",
        deliverables: [
            "Typologies d'annotation (texte, vision, classement)",
            "Respect des guidelines et taux de précision",
            "Exercices pratiques sur outils d'annotation",
        ],
    },
    {
        slug: "coaching-teleconseiller-relation-client",
        category: "bpo",
        categoryLabel: "Téléconseiller",
        available: false,
        formatBadge: "Coaching • 2 Jours",
        daySchedule: "Dates à venir",
        seatsLeft: "15 places max",
        title: "Coaching Terrain : Posture & Outils du Téléconseiller",
        image:
            "https://unsplash.com",
        description:
            "Entraînement intensif en salle sur la prise d'appel, l'écoute active, la gestion des objections et l'utilisation d'un logiciel CRM.",
        deliverables: [
            "Structure d'appel entrant/sortant et élocution",
            "Qualification de fiches prospects sur CRM",
            "Jeux de rôle enregistrés et débriefing individuel",
        ],
    },
];

const selectedCategory = ref<CategoryId>("all");

const filteredSessions = computed(() => {
    if (selectedCategory.value === "all") return sessions;
    return sessions.filter((item) => item.category === selectedCategory.value);
});

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");
const overlineLineRef = useTemplateRef<HTMLElement>("overlineLineRef");
const overlineTextRef = useTemplateRef<HTMLElement>("overlineTextRef");
const titleRef = useTemplateRef<HTMLElement>("titleRef");

let ctx: gsap.Context | null = null;

onMounted(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.value,
                start: "top 80%",
                once: true,
            },
            defaults: { ease: "expo.out" },
        });

        tl.from(overlineLineRef.value, {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.45,
        })
            .from(
                overlineTextRef.value,
                { x: -10, opacity: 0, duration: 0.45 },
                "-=0.25",
            )
            .fromTo(
                titleRef.value,
                { y: 24, opacity: 0, clipPath: "inset(0% 0% 100% 0%)" },
                { y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 0.8 },
                "-=0.2",
            );
    }, sectionRef.value ?? undefined);
});

onUnmounted(() => {
    ctx?.revert();
});
</script>
<template>
  <section
    id="catalogue-formations"
    ref="sectionRef"
    class="bg-elevated/50 py-16 sm:py-24 border-b border-default scroll-mt-16"
  >
    <UContainer>
      <!-- En-tête de section -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div class="max-w-2xl">
          <div class="flex items-center gap-3 mb-4">
            <span
              ref="overlineLineRef"
              class="w-5 h-[1.5px] bg-primary inline-block shrink-0"
              aria-hidden="true"
            />
            <span
              ref="overlineTextRef"
              class="text-xs font-bold tracking-[0.15em] uppercase text-primary dark:text-brand-400"
            >
              Programme & Formats Courts
            </span>
          </div>

          <h2
            ref="titleRef"
            class="text-4xl sm:text-5xl font-extrabold tracking-tight text-highlighted leading-[1.1]"
          >
            Les sessions disponibles & à venir.
          </h2>

          <p class="mt-4 text-base text-muted">
            Des ateliers pratiques de 1 à 2 jours en salle équipée à Antananarivo, limités à
            <strong class="text-highlighted font-semibold">15 participants</strong>.
          </p>
        </div>

        <div
          class="inline-flex items-center gap-3 rounded-xl border border-default bg-default px-4 py-3 text-sm shrink-0"
        >
          <div
            class="size-9 rounded-lg bg-primary/10 text-primary dark:text-brand-400 flex items-center justify-center shrink-0"
          >
            <UIcon name="i-lucide-building-2" class="size-5" />
          </div>
          <div>
            <p class="font-bold text-highlighted">Salle Premium • 15 places</p>
            <p class="text-xs text-muted">Présentiel uniquement à Antananarivo</p>
          </div>
        </div>
      </div>

      <!-- Onglets de filtrage -->
      <div class="mt-10 flex flex-wrap items-center gap-2 pb-8 border-b border-default">
        <UButton
          v-for="filter in filters"
          :key="filter.id"
          :icon="filter.icon"
          :color="selectedCategory === filter.id ? 'primary' : 'neutral'"
          :variant="selectedCategory === filter.id ? 'solid' : 'outline'"
          size="md"
          class="font-semibold cursor-pointer"
          @click="selectedCategory = filter.id"
        >
          {{ filter.label }}
        </UButton>
      </div>

      <!-- Grille de Cards propres -->
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <NuxtLink
          v-for="item in filteredSessions"
          :key="item.slug"
          :to="
            item.available
              ? `/formations/${item.slug}`
              : `/contact?sujet=alerte&session=${item.slug}`
          "
          class="group flex flex-col rounded-xl bg-default border border-default overflow-hidden transition-all duration-300"
          :class="
            item.available
              ? 'hover:-translate-y-1 hover:border-primary/50 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.12)]'
              : 'opacity-75'
          "
        >
          <!-- Image 100% largeur de la card, propre, sans texte superposé -->
          <div class="w-full aspect-[16/9] overflow-hidden bg-elevated border-b border-default">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover transition-transform duration-500 ease-out"
              :class="item.available ? 'group-hover:scale-105' : 'grayscale'"
              loading="lazy"
            />
          </div>

          <!-- Contenu structuré -->
          <div class="flex-1 flex flex-col justify-between p-5 sm:p-6">
            <div>
              <!-- Ligne haut : Catégorie + Statut -->
              <div class="flex items-center justify-between gap-2 mb-3">
                <span class="text-xs font-bold uppercase tracking-wider text-primary dark:text-brand-400">
                  {{ item.categoryLabel }}
                </span>

                <UBadge
                  :color="item.available ? 'primary' : 'neutral'"
                  variant="subtle"
                  size="sm"
                  class="font-semibold"
                >
                  {{ item.available ? "Inscriptions ouvertes" : "Bientôt" }}
                </UBadge>
              </div>

              <!-- Titre -->
              <h3
                class="text-lg font-bold text-highlighted leading-snug transition-colors"
                :class="item.available ? 'group-hover:text-primary dark:group-hover:text-brand-400' : ''"
              >
                {{ item.title }}
              </h3>

              <!-- Description concise -->
              <p class="mt-2 text-sm text-muted line-clamp-2 leading-relaxed">
                {{ item.description }}
              </p>
            </div>

            <!-- Pied de carte sobre -->
            <div class="mt-5 pt-4 border-t border-default flex items-center justify-between text-xs">
              <div class="flex items-center gap-3 text-muted font-medium">
                <span class="inline-flex items-center gap-1">
                  <UIcon name="i-lucide-clock" class="size-3.5 text-primary dark:text-brand-400" />
                  {{ item.formatBadge }}
                </span>
                <span class="inline-flex items-center gap-1">
                  <UIcon name="i-lucide-users" class="size-3.5 text-primary dark:text-brand-400" />
                  15 places
                </span>
              </div>

              <span
                class="inline-flex items-center gap-1 font-bold text-highlighted transition-colors"
                :class="item.available ? 'group-hover:text-primary dark:group-hover:text-brand-400' : ''"
              >
                <span>{{ item.available ? "Voir" : "Alerte" }}</span>
                <UIcon
                  name="i-lucide-arrow-right"
                  class="size-3.5 transition-transform duration-200 group-hover:translate-x-1"
                />
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </UContainer>
  </section>
</template>

