<template>
    <div class="main-navbar sticky-top bg-white">
        <nav class="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
              <div action="#" class="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
              </div>
              <ul class="navbar-nav border-left flex-row ">
                <li class="nav-item border-right dropdown notifications">
                  <NuxtLink class="nav-link nav-link-icon text-center" to='/dashboard/links' role="button">
                    <div class="nav-link-icon__wrapper">
                      <i class="material-icons">add_circle</i>
                    </div>
                  </NuxtLink>
                </li>
                <li class="nav-item pt-2">
                  <p class="nav-link text-nowrap px-3">
                    <span class="d-none d-md-inline-block">{{ loggedInUser.name }}</span>
                  </p>
                </li>
              </ul>
              <nav class="nav">
                <a href="#" class="nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none text-center border-left" data-toggle="collapse" data-target=".header-navbar" aria-expanded="false" aria-controls="header-navbar">
                  <i class="material-icons">&#xE5D2;</i>
                </a>
              </nav>
            </nav>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['loggedInUser'])
  }
}
</script>