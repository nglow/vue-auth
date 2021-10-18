import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Signin from '@/views/Signin.vue'
import Register from '@/views/Signup.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '', component: Home },
  { path: '/sign_in', component: Signin },
  { path: '/sign_up', component: Register }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
