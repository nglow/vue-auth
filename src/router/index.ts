import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Signin from '@/views/Signin.vue'
import Register from '@/views/Register.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '', component: Home },
  { path: '/signin', component: Signin },
  { path: '/register', component: Register }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
