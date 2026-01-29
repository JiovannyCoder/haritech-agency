<template>
  <UPageHero orientation="vertical">
    <template #title>
      <h1 class="text-left w-[75%] text-9xl!">
        We Build <br><span class="italic font-normal font-serif">— Brands</span> that Stand out
      </h1>
    </template>
    <template #description>
      <div class="flex items-center justify-end mt-12">
        <p class="text-left w-[60%]">
          Easily connect your SEO-optimized content to your  Wordpress effortless publishing — <span class="text-primary">Helping you stay consistant</span>, save time and grow faster
        </p>
        <UButton
          trailing-icon="i-lucide-arrow-right"
          size="xl"
        >
          Let's Talk
        </UButton>
      </div>
    </template>

    <UMarquee
      pause-on-hover
      class="[--duration:50s]"
    >
      <div class="h-[400px] flex flex-col">
        <div class="p-10" />
        <div class="grow rounded-2xl h-full overflow-hidden border border-accented">
          <img
            src="/images/home/hero-projet-1.jpg"
            alt="Hero Projet"
            class="w-full h-full object-cover"
          >
        </div>
      </div>
      <div class="h-[400px] flex flex-col-reverse">
        <div class=" p-10" />
        <div class="grow rounded-2xl h-full overflow-hidden border border-accented">
          <img
            src="/images/home/hero-projet-2.jpg"
            alt="Hero Projet"
            class="w-full h-full object-cover"
          >
        </div>
      </div>
      <div class="h-[400px] flex flex-col">
        <div class=" p-10" />
        <div class="grow rounded-2xl h-full overflow-hidden border border-accented">
          <img
            src="/images/home/hero-projet-3.jpg"
            alt="Hero Projet"
            class="w-full h-full object-cover"
          >
        </div>
      </div>
      <div class="h-[400px] flex flex-col-reverse">
        <div class=" p-10" />
        <div class="grow rounded-2xl h-full overflow-hidden border border-accented">
          <img
            src="/images/home/hero-projet-4.jpg"
            alt="Hero Projet"
            class="w-full h-full object-cover"
          >
        </div>
      </div>
      <div class="h-[400px] flex flex-col">
        <div class=" p-10" />
        <div class="grow rounded-2xl h-full overflow-hidden border border-accented">
          <img
            src="/images/home/hero-projet-5.jpg"
            alt="Hero Projet"
            class="w-full h-full object-cover"
          >
        </div>
      </div>
      <div class="h-[400px] flex flex-col-reverse">
        <div class=" p-10" />
        <div class="grow rounded-2xl h-full overflow-hidden border border-accented">
          <img
            src="/images/home/hero-projet-6.jpg"
            alt="Hero Projet"
            class="w-full h-full object-cover"
          >
        </div>
      </div>
    </UMarquee>
  </UPageHero>
</template>
