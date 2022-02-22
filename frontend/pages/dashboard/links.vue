<template>
  <div>
    <DashBasePageHeader page="Links"/>
    <div class="row">
      <DashLinksCreateLink />
    </div>

    <div class="row">
      <DashLinksTable />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      pageTitle: this.title,
      subTitle: this.title,
    }
  },
}
</script>