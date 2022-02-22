<template>
    <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Seus Links</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center">
            <div v-if="!links" class="alert alert-accent alert-dismissible fade show mb-0" role="alert">
              <i class="fa fa-info mx-2"></i>
              <strong>Você ainda não tem um link casdastrado! Cadastre agora um link no botão acima!</strong>
            </div>
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">URL</th>
                  <th scope="col" class="border-0">Titulo</th>
                  <th scope="col" class="border-0">Cliques</th>
                  <th scope="col" class="border-0">Criado</th>
                  <th scope="col" class="border-0"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="link in links" :key="link.id">
                  <td>
                    <p>{{ url }}/{{ link.alias }}</p>
                    <span class="text-warning">{{ link.url.substring(0,40) + '...' }}</span>
                  </td>
                  <td>
                    <p>{{ link.title.substring(0,40) + '...' }}</p>
                  </td>
                  <td>{{ link.clicks }}</td>
                  <td>{{ link.created_at }}</td>
                  <td>
                    <i title="Copiar Link" @click="copyLink(url, link.alias)" :class="`cursor-pointer material-icons text-primary mr-3`">content_copy</i>
                    <i title="Excluir Link" @click="removeLink(link.id)" :class="`cursor-pointer material-icons text-danger`">cancel</i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      url: `http://localhost:3000`,
      links: {}
    }
  },
  computed: {
    ...mapGetters(['loggedInUser'])
  },
  created() {
    this.$axios.setToken(this.loggedInUser.remember_me_token, 'Bearer')
    this.$axios.$get('/new-link')
    .then(success => {
        this.links = success
    })
  },
  methods: {
    removeLink(id) {
      this.$axios.setToken(this.loggedInUser.remember_me_token, 'Bearer')
      this.$axios.$delete(`new-link/${id}`).then(response => {
        this.$toast.success(`Link deletado!`)
        location.reload()
      })
    },
    copyLink(url, alias) {
      const copyText = `${url}/${alias}`
      navigator.clipboard.writeText(copyText)
      this.$toast.success(`Link copiado!`)
    }
  }
}
</script>