<template>
    <aside class="main-sidebar col-12 col-md-3 col-lg-2 px-0">
          <div class="main-navbar">
            <nav class="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
              <NuxtLink class="navbar-brand w-100 mr-0" to="/dashboard" style="line-height: 25px;">
                <div class="d-table m-auto">
                  <img id="main-logo" class="d-inline-block align-top mr-1" style="max-width: 25px;" src="@/assets/images/logo.svg" alt="Logo Short URL">
                  <span class="d-none d-md-inline ml-1">Short URL</span>
                </div>
              </NuxtLink>
              <a class="toggle-sidebar d-sm-inline d-md-none d-lg-none">
                <i class="material-icons">&#xE5C4;</i>
              </a>
            </nav>
          </div>
          <form action="#" class="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none">
            <div class="input-group input-group-seamless ml-3">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i class="fas fa-search"></i>
                </div>
              </div>
              <input class="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search"> </div>
          </form>
          <div class="nav-wrapper">
            <ul class="nav flex-column">
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/dashboard">
                  <i class="material-icons">edit</i>
                  <span>Inicio</span>
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link " to="/dashboard/links">
                  <i class="material-icons">link</i>
                  <span>Links</span>
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link " to="/dashboard/populars">
                  <i class="material-icons">view_module</i>
                  <span>Top 100</span>
                </NuxtLink>
              </li>
              <div class="cursor-pointer sidebar sidebar-footer">
                  <li class="nav-item mouse-pointer">
                <a class="nav-link text-danger" @click="userLogout">
                  <i class="material-icons text-danger">logout</i>
                  <span>Sair</span>
                </a>
              </li>
              </div>
              
            </ul>
          </div>
        </aside>
</template>

<script>
export default {
  methods: {
    async userLogout() {
      await this.$auth.logout()
    }
  },
}
</script>