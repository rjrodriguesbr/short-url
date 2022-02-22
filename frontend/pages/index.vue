<template>
  <div>
    <PagesHomeAnonymousForm />
    <PagesHomeFooterBar />
  </div>  
</template>

<script>
export default {
  middleware: 'guest',
  name: 'IndexPage',
  layout: 'home-page',
}
</script>