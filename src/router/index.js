import Vue from 'vue'
import VueRouter from 'vue-router'
import iframeMain from '@/views/iframe-main.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: iframeMain
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
