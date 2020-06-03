<template>
  <div>
    <h2>Upload</h2>

    <h3>Directions</h3>
    <div class="d-flex justify-content-center">
      <ol>
        <li>Open your industry window in game.</li>
        <li>Select blueprints tab</li>
        <li>Use the following settings:</li>
        <ul>
          <li>Owned by me</li>
          <li>Desired station to pull blueprints from</li>
          <li>Desired container to pull blueprints from</li>
          <li>Originals</li>
          <li>All groups</li>
        </ul>
        <li>Click into blueprints window, and hit "ctrl" + "a"</li>
        <li>Copy list with "ctrl" + "c"</li>
        <li>Paste into the text area below with "ctrl" + "v"</li>
      </ol>
    </div>



    <form @submit.prevent @submit="processBlueprints" v-if="!loading">
      <b-form-textarea
        id="blueprints"
        v-model="blueprints"
        placeholder="Paste blueprints here..."
        rows="5"
        max-rows="8"
      >

      </b-form-textarea>
      <b-button type="submit" variant="success" class="mt-3">Submit</b-button>
    </form>
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: "Upload",

    data(){
      return {
        loading: false,
        blueprints: "",
      }
    },

    methods: {
      processBlueprints(){
        this.loading = true;
        const lines = this.blueprints.split("\n");
        lines.forEach(line => {
          let bpData = line.split("\t");
          let bp = {};
          bp.name = bpData[0];
          bp.me = bpData[1];
          bp.te = bpData[2];
          bp.runs = bpData[3];
          bp.group = bpData[4];
          bp.owner = firebase.auth().currentUser.uid;
          firebase
            .database()
            .ref('/blueprints')
            .push(bp)
        })
        this.blueprints = "";
        this.loading = false;
      }
    }
  }
</script>

<style scoped>

</style>
