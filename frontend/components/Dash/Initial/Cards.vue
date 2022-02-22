<template>
    <div class="row">
      <div class="col-lg col-md-6 col-sm-6 mb-4">
        <div class="stats-small stats-small--1 card card-small">
          <div class="card-body p-0 d-flex">
            <div class="d-flex flex-column m-auto">
              <div class="stats-small__data text-center">
                <span class="stats-small__label text-uppercase">Links</span>
                <h6 class="stats-small__value count my-3">{{ links }}</h6>
              </div>
              <div class="text-center">
                <i class="material-icons">link</i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg col-md-4 col-sm-6 mb-4">
        <div class="stats-small stats-small--1 card card-small">
          <div class="card-body p-0 d-flex">
            <div class="d-flex flex-column m-auto">
              <div class="stats-small__data text-center">
                <span class="stats-small__label text-uppercase">Acessos</span>
                <h6 class="stats-small__value count my-3">{{ clicks }}</h6>
              </div>
              <div class="text-center">
                <i class="material-icons">ads_click</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    links: Number,
    clicks: Number
  }
}
</script>