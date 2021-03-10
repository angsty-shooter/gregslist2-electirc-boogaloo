import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import Home from '../views/Home.vue'
// @ts-ignore
import About from '../views/About.vue'
// @ts-ignore
import CarsPage from '../views/CarsPage.vue'
// @ts-ignore
import CarsDetails from '../views/CarsDetails.vue'

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
  },
  {
    path: '/cars/:id',
    name: 'CarsDetails',
    component: CarsDetails
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
