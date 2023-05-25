import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUpLoginView from '@/components/SignupLogin.vue'
import SettingView from '@/components/Settings.vue'
import NotFoundView from '@/components/NotFound.vue'

import App from '@/App.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/todo',
    name: 'home',
    component: App
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/signup_login',
    name: 'signup-login',
    component: SignUpLoginView

  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingView
  },
  {
    path: '/:pathMatch(.*)*',
    name: "Error Not Found",
    component: NotFoundView
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
