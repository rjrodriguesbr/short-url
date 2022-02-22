<template>
    <div class="h-100">
        <div class="container-fluid">
            <div class="row">
                <DashBaseSideBar />
                <main class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                    <DashBaseMainNav />
                    <div class="main-content-container container-fluid px-4">
                        <transition name="slide-fade">
                            <Nuxt />
                        </transition>
                    </div>
                    <footer class="main-footer d-flex p-2 px-3 bg-white border-top">
                        <span class="copyright ml-auto my-auto mr-2">Copyright © 2022
                        <a href="https://www.linkedin.com/in/rjrodriguesbr/" rel="nofollow">RJ Rodrigues</a>
                        </span>
                    </footer>
                </main>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    middleware: 'auth',
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