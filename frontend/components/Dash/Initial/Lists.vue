<template>
    <div class="col-lg-6 col-sm-12 mb-4">
    <div class="card card-small blog-comments">
        <div class="card-header border-bottom">
        <h6 class="m-0">{{ title }}</h6>
        </div>
        <div class="card-body p-0">
        <div v-for="link in links" :key="link.id" class="blog-comments__item d-flex p-3">
            <div class="ml-4 mr-3">
            <img width="24" src="@/assets/images/logo.svg" alt="Icon Site" /> 
            </div>
            <div class="blog-comments__content">
            <div class="blog-comments__meta text-muted">
                <a class="text-secondary" href="#">{{ url }}/{{ link.alias }}</a>
                <span class="text-muted">– {{ link.created_at }}</span>
            </div>
            <p class="m-0 my-1 mb-2 text-muted">{{ link.title }}</p>
            <div class="blog-comments__actions">
                <div class="btn-group btn-group-sm">
                    <button @click="copyLink(url, link.alias)" type="button" class="btn btn-white">
                        <span class="text-success">
                            <i class="material-icons">content_copy</i>
                        </span> Copiar </button>
                    <button @click="removeLink(link.id)" type="button" class="btn btn-white">
                        <span class="text-danger">
                            <i class="material-icons">delete</i>
                    </span> Deletar </button>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div class="card-footer border-top">
        <div class="row">
            <div class="col mb-3 text-center view-report">
            </div>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            links: Object,
        },
        data() {
            return {
                url: 'http://localhost:3000'
            }
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