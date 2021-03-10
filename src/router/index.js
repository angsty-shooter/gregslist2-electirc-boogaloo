import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import CarsPage from '../views/CarsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/cars-page',
    name: 'CarsPage',
    component: CarsPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
