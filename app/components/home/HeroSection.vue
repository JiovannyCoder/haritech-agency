<template>
  <UPageHero orientation="vertical">
    <template #title>
      <h1 class="text-left md:w-[90%] leading-tight lg:text-8xl! md:text-6xl! text-5xl!">
        Nous créons <br><span class="italic font-normal font-serif">— des Solutions Digitales </span> qui se démarquent
      </h1>
    </template>
    <template #description>
      <div class="flex items-center justify-end md:flex-row flex-col gap-5 mt-12">
        <p class="text-left md:w-[60%]">
          Sites web et applications optimisés SEO, pensés pour gagner du temps, <span class="text-primary">attirer des prospects et faire évoluer votre activité.</span>
        </p>
        <UButton
          trailing-icon="i-lucide-arrow-right"
          size="xl"
          class="md:mr-0 mr-auto md:mt-0 mt-7"
        >
          Discutons
        </UButton>
      </div>
    </template>

    <UMarquee
      pause-on-hover
      class="[--duration:50s]"
    >
      <div class="md:h-[400px] h-[240px] flex flex-col">
        <div class="md:p-10" />
        <div class="grow rounded-2xl h-full overflow-hidden border border-accented">
          <img
            src="/images/home/hero-projet-1.jpg"
            alt="Hero Projet"
            class="w-full h-full object-cover"
          >
        </div>
      </div>
      <div class="md:h-[400px] h-[240px] flex flex-col-reverse">
        <div class="md:p-10" />
        <div class="grow rounded-2xl h-full overflow-hidden border border-accented">
          <img
            src="/images/home/hero-projet-2.jpg"
            alt="Hero Projet"
            class="w-full h-full object-cover"
          >
        </div>
      </div>
      <div class="md:h-[400px] h-[240px] flex flex-col">
        <div class="md:p-10" />
        <div class="grow rounded-2xl h-full overflow-hidden border border-accented">
          <img
            src="/images/home/hero-projet-3.jpg"
            alt="Hero Projet"
            class="w-full h-full object-cover"
          >
        </div>
      </div>
      <div class="md:h-[400px] h-[240px] flex flex-col-reverse">
        <div class="md:p-10" />
        <div class="grow rounded-2xl h-full overflow-hidden border border-accented">
          <img
            src="/images/home/hero-projet-4.jpg"
            alt="Hero Projet"
            class="w-full h-full object-cover"
          >
        </div>
      </div>
      <div class="md:h-[400px] h-[240px] flex flex-col">
        <div class="md:p-10" />
        <div class="grow rounded-2xl h-full overflow-hidden border border-accented">
          <img
            src="/images/home/hero-projet-5.jpg"
            alt="Hero Projet"
            class="w-full h-full object-cover"
          >
        </div>
      </div>
      <div class="md:h-[400px] h-[240px] flex flex-col-reverse">
        <div class="md:p-10" />
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
