<template>
  <div>
    <h1>Etsala Legion Blueprint Library</h1>
    <div>You need to login to use this library</div>
    <form @submit.prevent @submit="login">
      <div class="d-flex justify-content-center py-3">
        <div>
          <label for="userEmail">Email Address</label>
          <b-form-input id="userEmail" v-model="email" type="email"/>
        </div>
        <div class="ml-2">
          <label for="userPassword">Password</label>
          <b-form-input id="userPassword" v-model="password" type="password"/>
        </div>
        <div class="ml-2" v-if="newAcc">
          <label for="confirmPassword">Confirm Password</label>
          <b-form-input id="confirmPassword" v-model="confirmPassword" type="password"></b-form-input>
        </div>
      </div>
      <b-button variant="success" type="submit" v-if="newAcc" @click="createAcc">Create Account</b-button>
      <b-button variant="success" type="submit" v-else>Login</b-button>
      <b-button  class="ml-2" @click="toggleConfirm">or create account</b-button>
    </form>
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: "Login",

    data(){
      return {
        email: "",
        newAcc: false,
        password: "",
        confirmPassword: "",
      }
    },

    methods: {
      login(){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          alert(error);
        })
      },

      createAcc(){
        if (this.password === this.confirmPassword){
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .catch(error => {
            alert (error);
          })
        } else {
          alert ("passwords do not match")
        }
      },

      toggleConfirm(){
        this.newAcc = !this.newAcc
      }
    }
  }
</script>

<style scoped>

</style>
