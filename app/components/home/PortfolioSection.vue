<template>
  <UPageSection>
    <template #headline>
      <div class="text-primary font-semibold">
        Case Studies
      </div>
    </template>
    <template #title>
      <div class="md:max-w-1/2 text-left  ml-auto ">
        <h2 class="leading-tight ">
          See Our <span class="italic font-normal font-serif">All Latest</span> <br>
          Creative Work
        </h2>
        <div class="mt-5">
          <UButton
            trailing-icon="i-lucide-arrow-right"
            size="xl"
          >
            Let's Talk
          </UButton>
        </div>
      </div>
    </template>
    <UPageGrid>
      <div class="md:col-span-2">
        <UCard
          variant="soft"
          class="h-full"
        >
          <NuxtImg
            src="/images/home/portfolio-1.png"
            alt="Portfolio"
            class="w-full rounded"
          />
          <div>
            <div class="text-lg mt-5 mb-2">
              Branding Design, Omphica
            </div>
            <h3 class="text-2xl font-bold">
              Fully Branding Design
            </h3>
          </div>
        </UCard>
      </div>
      <div class="md:col-span-1">
        <UCard
          variant="soft"
          class="h-full"
        >
          <NuxtImg
            src="/images/home/portfolio-2.png"
            alt="Portfolio"
            class="w-full rounded"
          />
          <div>
            <div class="text-lg mt-5 mb-2">
              Website
            </div>
            <h3 class="text-2xl font-bold">
              Interior Website
            </h3>
          </div>
        </UCard>
      </div>
      <div class="md:col-span-1">
        <UCard
          variant="soft"
          class="h-full"
        >
          <NuxtImg
            src="/images/home/portfolio-3.png"
            alt="Portfolio"
            class="w-full rounded"
          />
          <div>
            <div class="text-lg mt-5 mb-2">
              Website
            </div>
            <h3 class="text-2xl font-bold">
              Interior Website
            </h3>
          </div>
        </UCard>
      </div>
      <div class=" md:col-span-2">
        <UCard
          variant="soft"
          class="h-full"
        >
          <NuxtImg
            src="/images/home/portfolio-4.png"
            alt="Portfolio"
            class="w-full rounded"
          />
          <div>
            <div class="text-lg mt-5 mb-2">
              Branding Design, Omphica
            </div>
            <h3 class="text-2xl font-bold">
              Fully Branding Design
            </h3>
          </div>
        </UCard>
      </div>
    </UPageGrid>
  </UPageSection>
</template>
