<template>
  <UPageSection>
    <template #headline>
      <div class="text-primary font-semibold">
        Services
      </div>
    </template>
    <template #title>
      <h2 class="text-left md:max-w-3/5 leading-tight ml-auto">
        We Deliver <span class="text-muted"><span class="text-primary">-</span> Comprehensive Solutions to help business Grow and thrive</span>
      </h2>
    </template>
    <UPageGrid>
      <div>
        <div class="md:text-2xl text-xl font-bold h-10 w-10 flex justify-center items-center rounded-full border-primary border">
          01
        </div>
        <h3 class="md:text-6xl text-4xl font-semibold mt-10">
          Branding
        </h3>
      </div>
      <div class="h-full md:pb-10 pb-2">
        <NuxtImg
          src="/images/home/service-1.png"
          alt="Service 1"
          class="rounded-2xl object-cover h-full w-full"
        />
      </div>
      <div class="h-full grid grid-cols-3 gap-2 md:mt-[25%]">
        <div class="col-span-1 border-t mt-3" />
        <div class="col-span-2">
          <h4 class="text-xl font-semibold mb-4">
            Branding Service
          </h4>
          <ul class="list-disc pl-5">
            <li class="mb-2">
              Modern Design
            </li>
            <li class="mb-2">
              Visual Branding
            </li>
            <li class="mb-2">
              Brand Planing
            </li>
            <li class="mb-2">
              Brand Creative
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div class="md:text-2xl text-xl font-bold h-10 w-10 flex justify-center items-center rounded-full border-primary border">
          02
        </div>
        <h3 class="md:text-6xl text-4xl font-semibold mt-10">
          UI/UX Design
        </h3>
      </div>
      <div class="h-full md:pb-10 pb-2">
        <NuxtImg
          src="/images/home/service-2.png"
          alt="Service 1"
          class="rounded-2xl object-cover h-full w-full"
        />
      </div>
      <div class="h-full grid grid-cols-3 gap-2 md:mt-[25%]">
        <div class="col-span-1 border-t mt-3" />
        <div class="col-span-2">
          <h4 class="text-xl font-semibold mb-4">
            UI/UX Design
          </h4>
          <ul class="list-disc pl-5">
            <li class="mb-2">
              UI Design
            </li>
            <li class="mb-2">
              UX Design
            </li>
            <li class="mb-2">
              Web & App Design
            </li>
            <li class="mb-2">
              Wireframing and Prototyping
            </li>
            <li class="mb-2">
              Design System
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div class="md:text-2xl text-xl font-bold h-10 w-10 flex justify-center items-center rounded-full border-primary border">
          03
        </div>
        <h3 class="md:text-6xl text-4xl font-semibold mt-10">
          Web Development
        </h3>
      </div>
      <div class="h-full md:pb-10 pb-2">
        <NuxtImg
          src="/images/home/service-3.png"
          alt="Service 1"
          class="rounded-2xl object-cover h-full w-full"
        />
      </div>
      <div class="h-full grid grid-cols-3 gap-2 md:mt-[25%]">
        <div class="col-span-1 border-t mt-3" />
        <div class="col-span-2">
          <h4 class="text-xl font-semibold mb-4">
            Development
          </h4>
          <ul class="list-disc pl-5">
            <li class="mb-2">
              Frontend Development
            </li>
            <li class="mb-2">
              Backend Development
            </li>
            <li class="mb-2">
              Web and App Development
            </li>
            <li class="mb-2">
              CMS Integration
            </li>
            <li class="mb-2">
              API Integration
            </li>
          </ul>
        </div>
      </div>
    </UPageGrid>
  </UPageSection>
</template>
