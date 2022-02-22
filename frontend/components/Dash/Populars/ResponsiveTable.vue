<template>
  <div class="overflow-auto">
      <div class="col">
        <div class="card card-small mb-4">
            <div class="card-header border-bottom">
                <h6 class="m-0">Links Mais Acessados</h6>
            </div>
            <div class="card-body p-0 pb-3 text-center">
            <b-table
            class="ml-1 mr-1"
            id="my-table"
            :items="items"
            :per-page="perPage"
            :current-page="currentPage"
            small
            ></b-table>
            <b-pagination
            class="ml-5 mt-5"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
            ></b-pagination>
            <p class="mt-3">Página Atual: {{ currentPage }}</p>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        perPage: 20,
        currentPage: 1,
        items: []
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    },
    created() {
        this.$axios.$get('/populars').then(response => {
            this.items = response
        })
    }
  }
</script>