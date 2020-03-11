import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _05f408d0 = () => interopDefault(import('../pages/calendar.vue' /* webpackChunkName: "pages/calendar" */))
const _26b32920 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _7f1ca002 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _73236ab4 = () => interopDefault(import('../pages/messages.vue' /* webpackChunkName: "pages/messages" */))
const _d52bc004 = () => interopDefault(import('../pages/notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _4212e330 = () => interopDefault(import('../pages/patients.vue' /* webpackChunkName: "pages/patients" */))
const _a77e1706 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _9d120648 = () => interopDefault(import('../pages/chats/_id.vue' /* webpackChunkName: "pages/chats/_id" */))
const _126be630 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/calendar",
    component: _05f408d0,
    name: "calendar"
  }, {
    path: "/inspire",
    component: _26b32920,
    name: "inspire"
  }, {
    path: "/login",
    component: _7f1ca002,
    name: "login"
  }, {
    path: "/messages",
    component: _73236ab4,
    name: "messages"
  }, {
    path: "/notifications",
    component: _d52bc004,
    name: "notifications"
  }, {
    path: "/patients",
    component: _4212e330,
    name: "patients"
  }, {
    path: "/register",
    component: _a77e1706,
    name: "register"
  }, {
    path: "/chats/:id?",
    component: _9d120648,
    name: "chats-id"
  }, {
    path: "/",
    component: _126be630,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
