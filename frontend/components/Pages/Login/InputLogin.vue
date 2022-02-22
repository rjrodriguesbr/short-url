<template>
    <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold">
        Bem Vindo de Volta 👋
        </h2>
        <p class="mb-3 mt-3 text-gray-600">
        Entre com sua conta para administrar seus links curtos.
        </p>

        <form class="mb-3" @submit.prevent="userLogin">
            <div class="form-group">
                <label for="i-email">Email</label>
                <input
                id="i-email"
                type="email"
                dir="ltr"
                v-model="user.email"
                class="form-control"
                name="email"
                value=""
                autofocus
                />
            </div>

            <div class="form-group pb-2">
                <label for="i-password">Senha</label>
                <input
                id="i-password"
                type="password"
                v-model="user.password"
                class="form-control"
                name="password"
                />
            </div>

            <button type="submit" class="btn btn-lg btn-block btn-success py-2">
                Entrar
            </button>
        </form>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            user: {},
            token: ''
        }
    },
    // methods: {
    //     userLogin() {
    //          this.$axios.$post('/auth', this.user).then(response => {
    //             this.token = response.token
    //             this.$store.commit('login/IS_LOGIN', response.token)
    //             // this.$router.push({ path: '/dashboard' })
    //         }).catch(error => console.log(error)) 
           
    //     },
    // },
    methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.user.email,
            password: this.user.password
          }
        })
        this.$toast.success(`Bem Vindo de Volta 👋`)

        this.$router.push('/dashboard')
      } catch (e) {
          console.log(e)
            this.$toast.error(e.response.status.message)
      }
    }
  }
}
</script>