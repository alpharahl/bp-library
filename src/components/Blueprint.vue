<template>
  <b-card
    :title="blueprint.name"
    class="m-2 blueprint"
  >
    <b-card-text>
      <div class="d-flex justify-content-around">
        <div>
          ME: {{blueprint.me}}
        </div>
        <div>
          TE: {{blueprint.te}}
        </div>
      </div>
      <div>
        Group: {{blueprint.group}}
      </div>
    </b-card-text>
  </b-card>
</template>

<script>
  export default {
    name: "Blueprint",
    props: {
      blueprint: {

      }
    }
  }
</script>

<style scoped>
  .blueprint{
    color: black;
  }
</style>
