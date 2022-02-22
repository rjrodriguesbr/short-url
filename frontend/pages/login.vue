<template>
  <div>
    <PagesLoginInputLogin />
    <PagesLoginFooterLogin />
  </div>  
</template>

<script>
export default {
  middleware: 'guest',
  name: 'IndexPage',
  layout: 'home-page',
}
</script>