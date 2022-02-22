<script>
export default {
    mounted() {
        const data = {
            alias: this.$route.params.alias
        }
        this.$axios.$put('/anonymous', data)
        .then(success => {
            window.location.href = success.redirect
        })
    },
}
</script>

<template>
    <div>
    </div>
</template>