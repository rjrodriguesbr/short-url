<template>
    <div class="col">
        <div class="card card-small mb-3">
            <div class="card-body">
            <form v-if="!successLink" @submit.prevent="newLink">
                <div class="form-row">
                    <div class="col-12 col-sm">
                        <input type="url" autocapitalize="none" spellcheck="false" name="url" v-model="link" class="form-control form-control-lg font-size-lg mb-1" placeholder="Digite a URL para encurtar" autofocus :disabled="loading">
                    </div>
                    <div class="col-12 col-sm-auto">
                        <button :disabled="loading" class="btn btn-success btn-lg btn-block font-size-lg mt-2 mt-sm-0" type="submit">
                            <span v-if="!loading"> Encurtar </span>
                            <div v-if="loading">
                                <span class="spinner-border spinner-border-sm mt-3 mt-sm-0" role="status" aria-hidden="true"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </form>
            <transition v-if="successLink">
                <DashLinksInputCopy :link="alias" />
            </transition>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            successLink: false,
            loading: false,
            link: '',
            alias: ''
        }
    },
    computed: {
    ...mapGetters(['loggedInUser'])
    },
    methods: {
        newLink() {
            this.loading = true
            const data = {
                link: this.link
            }
            this.$axios.setToken(this.loggedInUser.remember_me_token, 'Bearer')
            this.$axios.$post('/new-link', data)
            .then(success => {
                this.alias = success.alias
                this.loading = false
                this.successLink = true
                location.reload()
            })
        }
    }
}
</script>