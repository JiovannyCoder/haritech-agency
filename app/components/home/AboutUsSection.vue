<template>
  <UPageSection id="a-propos-de-nous">
    <template #headline>
      <div class="text-primary font-semibold">
        À propos de nous
      </div>
    </template>

    <template #title>
      <h2 class="text-left md:max-w-4/5 leading-tight">
        Des expériences web
        <span class="text-muted">
          pensées pour simplifier, automatiser et accélérer la croissance de votre activité.
        </span>
      </h2>
    </template>

    <UPageGrid>
      <UPageCard
        orientation="vertical"
        spotlight
        spotlight-color="primary"
        class="bg-accented"
      >
        <div class="h-[228px] p-4 flex flex-col">
          <p>Projets livrés rapidement</p>
          <h3 class="text-5xl font-bold mt-auto">
            4x
          </h3>
        </div>
      </UPageCard>
      <UPageCard
        orientation="vertical"
        spotlight
        spotlight-color="primary"
        class="bg-accented"
      >
        <div class="h-[228px] p-4 flex flex-col">
          <p>Stratégies digitales efficaces</p>
          <h3 class="text-5xl font-bold mt-auto">
            2x
          </h3>
        </div>
      </UPageCard>
      <UPageCard
        orientation="vertical"
        spotlight
        spotlight-color="primary"
        class="bg-accented"
      >
        <div class="h-[228px] p-4 flex flex-col">
          <p>Croissance client accélérée</p>
          <h3 class="text-5xl font-bold mt-auto">
            400%
          </h3>
        </div>
      </UPageCard>
    </UPageGrid>
    <UPageGrid>
      <h4 class="text-2xl">
        / Solutions orientées résultats
      </h4>
      <h4 class="text-2xl">
        / Expériences stratégiques
      </h4>
      <h4 class="text-2xl">
        / Designs pensés pour performer
      </h4>
    </UPageGrid>
  </UPageSection>
</template>
