<template>
    <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold">
          Seja bem Vindo(a) 👋
        </h2>
        <p class="mb-3 mt-3 text-gray-600">
          Cadastre sua conta e salve seus links curtos.
        </p>
        <form @submit.prevent="userRegister" method="POST" action="" id="registration-form">

            <div class="form-group">
                <label for="i-name">Nome</label>
                <input v-model="user.name" id="i-name" type="text" class="form-control" name="name" autofocus>
            </div>

            <div class="form-group">
                <label for="i-email">Email</label>
                <input v-model="user.email" id="i-email" type="email" dir="ltr" class="form-control" name="email">
            </div>

            <div class="form-group">
                <label for="i-password">Senha</label>
                <input v-model="user.password" id="i-password" type="password" class="form-control" name="password">
            </div>

            <div class="form-group">
                <label for="i-password-confirmation">Confirmar Senha</label>
                <input v-model="user.cPassword" id="i-password-confirmation" type="password" class="form-control" name="password_confirmation">
            </div>

            <button :disabled="loading" type="submit" class="btn btn-lg btn-block btn-success py-2">
                <span v-if="!loading"> Cadastrar </span>
                <div v-if="loading">
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                </div>
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                password: '',
                cPassword: ''
            },
            loading: false,
        }
    },
    methods: {
    async userRegister() {
      try {
        await this.$axios.$post('/users', this.user).then(response => {
          this.$toast.success(`Seja Bem Vindo ${this.user.name}!`)
          this.$router.push('/login')
        })
      } catch (e) {
        this.error = e.response.data.message
        this.$toast.error(e.response.data.message)
      }
    }
  }
}
</script>