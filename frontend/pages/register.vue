<template>
<transition name="fade">
  <div>
    <PagesRegisterInputRegister />
    <PagesRegisterFooterRegister />
  </div>
</transition>
  
</template>

<script>
export default {
  middleware: 'guest',
  name: 'IndexPage',
  layout: 'home-page',
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
    opacity: 0;
  }
</style>