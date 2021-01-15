import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/Home.vue")
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import("../views/Checkout.vue")
  },
  {
    path: '/product-detail/:productId',
    name: 'ProductDetail',
    component: () => import("../views/ProductDetail.vue"),
    props: true
  },
  {
    path: '/cart-detail',
    name: 'CartDetail',
    component: () => import("../views/CartDetail.vue")
  },
  {
    path: '/finish',
    name: 'Finish',
    component: () => import("../views/Finish.vue")
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
