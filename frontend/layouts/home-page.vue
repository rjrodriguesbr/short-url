<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <NuxtLink
        class="flex justify-center pt-8 sm:pt-0"
        to="/"
      >
        <PagesLogoShortUrl />
      </NuxtLink>
      <transition name="slide-fade">
        <Nuxt />
      </transition>
      </div>
  </div>
</template>

<style>
  .slide-fade-enter-active {
  transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all .10s cubic-bezier(1.0, 0.5, 0.8, 2.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>