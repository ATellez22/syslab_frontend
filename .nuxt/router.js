import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _dd683648 = () => interopDefault(import('../pages/configuration/articles/index.vue' /* webpackChunkName: "pages/configuration/articles/index" */))
const _a2af1aaa = () => interopDefault(import('../pages/configuration/brands/index.vue' /* webpackChunkName: "pages/configuration/brands/index" */))
const _27a06cfb = () => interopDefault(import('../pages/configuration/categories/index.vue' /* webpackChunkName: "pages/configuration/categories/index" */))
const _26298918 = () => interopDefault(import('../pages/configuration/measures/index.vue' /* webpackChunkName: "pages/configuration/measures/index" */))
const _2862f3f8 = () => interopDefault(import('../pages/modules/inventory/index.vue' /* webpackChunkName: "pages/modules/inventory/index" */))
const _b88bdea2 = () => interopDefault(import('../pages/modules/purchase/index.vue' /* webpackChunkName: "pages/modules/purchase/index" */))
const _2edc6416 = () => interopDefault(import('../pages/modules/sale/index.vue' /* webpackChunkName: "pages/modules/sale/index" */))
const _be8979ac = () => interopDefault(import('../pages/configuration/articles/new.vue' /* webpackChunkName: "pages/configuration/articles/new" */))
const _67a20e8e = () => interopDefault(import('../pages/configuration/brands/new.vue' /* webpackChunkName: "pages/configuration/brands/new" */))
const _10814709 = () => interopDefault(import('../pages/configuration/categories/new.vue' /* webpackChunkName: "pages/configuration/categories/new" */))
const _38ef5fc2 = () => interopDefault(import('../pages/configuration/measures/new.vue' /* webpackChunkName: "pages/configuration/measures/new" */))
const _2efb6e4c = () => interopDefault(import('../pages/configuration/articles/update/_id.vue' /* webpackChunkName: "pages/configuration/articles/update/_id" */))
const _7d9df72a = () => interopDefault(import('../pages/configuration/brands/update/_id.vue' /* webpackChunkName: "pages/configuration/brands/update/_id" */))
const _6ea8fc1b = () => interopDefault(import('../pages/configuration/categories/update/_id.vue' /* webpackChunkName: "pages/configuration/categories/update/_id" */))
const _872d5d7c = () => interopDefault(import('../pages/configuration/measures/update/_id.vue' /* webpackChunkName: "pages/configuration/measures/update/_id" */))
const _42dac2b8 = () => interopDefault(import('../pages/modules/inventory/kardex/_id.vue' /* webpackChunkName: "pages/modules/inventory/kardex/_id" */))
const _7b238682 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/configuration/articles",
    component: _dd683648,
    name: "configuration-articles"
  }, {
    path: "/configuration/brands",
    component: _a2af1aaa,
    name: "configuration-brands"
  }, {
    path: "/configuration/categories",
    component: _27a06cfb,
    name: "configuration-categories"
  }, {
    path: "/configuration/measures",
    component: _26298918,
    name: "configuration-measures"
  }, {
    path: "/modules/inventory",
    component: _2862f3f8,
    name: "modules-inventory"
  }, {
    path: "/modules/purchase",
    component: _b88bdea2,
    name: "modules-purchase"
  }, {
    path: "/modules/sale",
    component: _2edc6416,
    name: "modules-sale"
  }, {
    path: "/configuration/articles/new",
    component: _be8979ac,
    name: "configuration-articles-new"
  }, {
    path: "/configuration/brands/new",
    component: _67a20e8e,
    name: "configuration-brands-new"
  }, {
    path: "/configuration/categories/new",
    component: _10814709,
    name: "configuration-categories-new"
  }, {
    path: "/configuration/measures/new",
    component: _38ef5fc2,
    name: "configuration-measures-new"
  }, {
    path: "/configuration/articles/update/:id?",
    component: _2efb6e4c,
    name: "configuration-articles-update-id"
  }, {
    path: "/configuration/brands/update/:id?",
    component: _7d9df72a,
    name: "configuration-brands-update-id"
  }, {
    path: "/configuration/categories/update/:id?",
    component: _6ea8fc1b,
    name: "configuration-categories-update-id"
  }, {
    path: "/configuration/measures/update/:id?",
    component: _872d5d7c,
    name: "configuration-measures-update-id"
  }, {
    path: "/modules/inventory/kardex/:id?",
    component: _42dac2b8,
    name: "modules-inventory-kardex-id"
  }, {
    path: "/",
    component: _7b238682,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
