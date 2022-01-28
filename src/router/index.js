import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contactus from "../views/Contactus.vue"
// that is the same name as exported in the Contactus.vue page
import Service from "../views/Service.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contactus',
    // name can be set as I like but it would be prefered as the file name
    // component: () => import('../views/Contactus.vue')
    // but this is not the best practice ... it is to identify the component in components
    component: Contactus
    // that is the best practice to define the component after importing it in the above section
    // I do not add the Cards as I am creating a path for the Contactus Page as a whole 
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
