<template>
    <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold">
        Links simples, poderosos e reconhecíveis
        </h2>
        <p class="mb-3 mt-3 text-gray-600">
        Crie e compartilhe seus links curtos, interaja com seus usuários em um nível diferente.
        </p>
        <form v-if="!successLink" @submit.prevent="anonymousLink">
            <div class="form-row">
                <div class="col-12 col-sm">
                    <input type="url" autocapitalize="none" spellcheck="false" name="url" v-model="link" class="form-control form-control-lg font-size-lg" placeholder="Digite a URL para encurtar" autofocus :disabled="loading">
                </div>
                <div class="col-12 col-sm-auto">
                    <button :disabled="loading" class="btn btn-success btn-lg btn-block font-size-lg mt-3 mt-sm-0" type="submit">
                        <span v-if="!loading"> Encurtar </span>
                        <div v-if="loading">
                            <span class="spinner-border spinner-border-sm mt-3 mt-sm-0" role="status" aria-hidden="true"></span>
                        </div>
                    </button>
                </div>
            </div>
        </form>
        <transition v-if="successLink">
            <PagesHomeInputCopy :link="alias" />
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            successLink: false,
            loading: false,
            link: '',
            alias: ''
        }
    },
    methods: {
        anonymousLink() {
            this.loading = true
            const data = {
                link: this.link
            }
            this.$axios.$post('/anonymous', data)
            .then(success => {
                this.alias = success.alias
                this.loading = false
                this.successLink = true
            })
        },
    },
}
</script>

<style>
    .slide-fade-enter-active {
        transition: all .5s ease;
    }
    .slide-fade-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(10px);
        opacity: 0;
    }
</style>