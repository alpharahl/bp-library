import Vue from 'vue'
import VueRouter from 'vue-router'
import Upload from "@/views/Upload";
import Blueprints from "@/views/Blueprints";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/upload',
    name: "Upload",
    component: Upload,
  },
  {
    path: '/',
    name: 'Blueprints',
    component: Blueprints,
  }
]

const router = new VueRouter({
  routes
})

export default router
