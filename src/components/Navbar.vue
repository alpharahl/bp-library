<template>
  <b-navbar
    toggleable="lg"
    type="dark"
    variant="dark"
  >
    <b-navbar-brand :to="{name: 'Home'}">Etsala Legion</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>Blueprints</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="{name: 'Upload'}">Upload Blueprints</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style scoped>

</style>
