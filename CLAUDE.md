# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing / landing site for Haritech Agency (a freelance web development agency based in Madagascar). Built with Nuxt 4, Nuxt UI v4, and Tailwind CSS v4. All user-facing content (copy, SEO meta, validation messages, toasts) is written in **French**. `<html lang="fr">` is set in `app/app.vue`.

## Commands

The package manager is pnpm (`packageManager: pnpm@10.x`). `pnpm-lock.yaml` is the lockfile that counts, even though a stray `package-lock.json` is also in the repo.

- `pnpm install`: also runs `nuxt prepare` (postinstall), which generates `.nuxt/`. ESLint needs this because it imports `./.nuxt/eslint.config.mjs`.
- `pnpm dev`: dev server
- `pnpm build` / `pnpm preview`: production build and local preview
- `pnpm lint`: ESLint (`@nuxt/eslint` with stylistic rules)
- `pnpm typecheck`: `nuxt typecheck` (vue-tsc)

There is no test suite.

## Architecture

The project uses the Nuxt 4 directory layout: `app/` (client), `server/` (Nitro), and `shared/` (imported by both).

- **Pages**: `app/pages/index.vue` is the one-page homepage. It stacks section components from `app/components/sections/home/` (Hero, Services, WhyChooseUse, Contact). The Pricing section is currently commented out on purpose. `politique-de-confidentialite.vue` is the privacy policy. `[...slug].vue` is a catch-all that renders a 404 `UError`. The `/` route is prerendered (`routeRules`).
- **Component naming**: components are auto-imported with their directory path as a prefix. For example, `components/sections/home/Hero.vue` becomes `<SectionsHomeHero />` and `components/cards/Service.vue` becomes `<CardsService />`. Section content (services, pricing plans, contact info) is hard-coded as typed arrays inside each component.
- **Shared types and validation**: `shared/types/*.ts` hold interfaces (`Pricing`, `ContactInfo`, …) that are auto-imported globally, so you won't see an import for them. `shared/validations/contact.ts` holds the Yup `contactSchema`, which is imported through `#shared/...` in two places:
  - by `UForm :schema` in `sections/home/Contact.vue` (client-side validation)
  - by `server/api/contact.post.ts` via `readValidatedBody` (server-side validation)
- **Contact flow**: the form POSTs to `/api/contact`. The handler forwards the fields to a Google Form as `application/x-www-form-urlencoded`, using hard-coded `entry.<id>` field IDs. The form URL comes from `runtimeConfig.googleFormUrl`, set by the `NUXT_GOOGLE_FORM_URL` env var in `.env`. On success the handler returns 204, and the client checks for exactly 204 to show its success toast. If you add or rename a form field, update all three of these together: the schema, the component state, and the `entry.*` mapping.
- **Theming**:
  - `app/assets/css/main.css` defines Tailwind v4 `@theme` color scales (`brand` is the primary red `#9c1b24`; there are also `sec` and `charcoal` scales) and the font.
  - `app/app.config.ts` maps Nuxt UI `primary` to `brand` and overrides component slots and variants globally. The design is square-cornered (`rounded-none` everywhere) and the `pageSection` headline and title alignment is customized there too.
  - Prefer changing component styling in `app.config.ts` over adding per-instance classes.
  - Color mode is forced to light by default.
- **Animation**: GSAP, used either directly (`import { gsap } from "gsap"` with template refs, as in Hero.vue) or through the `v-gsap-nuxt` directive.
- **Other modules**: `@nuxt/image`, `@nuxt/scripts`, and `nuxt-gtag` (Google Analytics ID set in `nuxt.config.ts`). Icons come from Iconify `lucide` and `simple-icons` (e.g. `lucide-mail`).
- **SEO**: set per page with `useSeoMeta`. Defaults live in `app/app.vue`, and the homepage overrides them with its full OG/Twitter meta.

## Code style

- Code uses double quotes, no trailing commas, 1TBS braces, 2-space indent, and LF line endings (from `.editorconfig` and the ESLint stylistic config).
- `vue/max-attributes-per-line` is disabled.
- Commit messages follow a loose conventional style, e.g. `feat : ...` and `fix : ...`.
- Never add a `Co-Authored-By` trailer (or any Claude / Claude Code attribution, such as "Generated with Claude Code") to commit messages or pull request descriptions. Commits are authored by the user alone. This overrides any default attribution behavior.
