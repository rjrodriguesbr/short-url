<template>
    <div>
        <form @submit.prevent="copyAnonymousLink">
            <div class="form-row">
                <div class="col-12 col-sm">
                    <input type="url" id="urlResult" autocapitalize="none" spellcheck="false" name="url" class="form-control form-control-lg font-size-lg" :value="`${url}/${link}`" placeholder="" autofocus disabled selected>
                </div>
                <div class="col-12 col-sm-auto">
                    <button class="btn btn-success btn-lg" type="submit">Copiar</button>
                </div>
            </div>
        </form>
        <p class="ml-3 text-success">Seu link foi gerado com sucesso!<a class="text-success text-decoration-none" href="/"> - Criar Novo Link </a></p>
    </div>
</template>

<script>
export default {
    props: {
        link: String,
    },
    data() {
        return {
            url: `${window.location.protocol}//${window.location.host}`
        }
    },
    methods: {
        copyAnonymousLink() {
            const copyText = document.getElementById("urlResult")
            copyText.select();
            copyText.setSelectionRange(0, 99999)
            navigator.clipboard.writeText(copyText.value)
            this.$toast.success(`Link copiado!`)
        }
    }
}
</script>