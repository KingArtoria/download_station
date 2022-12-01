import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  { path: '/', name: 'Home', component: () => import('../views/index/index') },
  { path: '/login', name: 'Login', component: () => import('../views/login/index') },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
