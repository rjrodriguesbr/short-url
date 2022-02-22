<template>
  <div>
    <DashBasePageHeader page="Home"/>
    <DashInitialCards :links="results ? results.lenghtAll : 0" :clicks="results ? results.sumLinks : 0" />
    <div class="row">
      <DashInitialLists :links="results.lastLinks" title="Ultimos Links" />
      <DashInitialLists :links="results.bestLinks" title="Links Populares" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'dashboard',
  data() {
    return {
      title: 'Inicio',
      results: {}
    }
  },
  computed: {
    ...mapGetters(['loggedInUser'])
  },
  created() {
    this.$axios.setToken(this.loggedInUser.remember_me_token, 'Bearer')
    this.$axios.$get('/analytics').then(response => {
      this.results = response
    })
  }
}
</script>