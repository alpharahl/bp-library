import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import firebase from 'firebase';
import firebaseConfig from '../.firebase.conf.js';
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
