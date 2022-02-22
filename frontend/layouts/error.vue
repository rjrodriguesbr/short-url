<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <h1 v-if="error.statusCode === 404">Página não encontrada!</h1>
      <h1 v-else>Ocorreu um Erro!</h1>
      <NuxtLink to="/">Voltar para o Inicio</NuxtLink>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>