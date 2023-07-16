import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5342ba68 = () => interopDefault(import('../pages/configuration/articles/index.vue' /* webpackChunkName: "pages/configuration/articles/index" */))
const _772f3b37 = () => interopDefault(import('../pages/configuration/brands/index.vue' /* webpackChunkName: "pages/configuration/brands/index" */))
const _47380f87 = () => interopDefault(import('../pages/configuration/categories/index.vue' /* webpackChunkName: "pages/configuration/categories/index" */))
const _a23bde00 = () => interopDefault(import('../pages/configuration/measures/index.vue' /* webpackChunkName: "pages/configuration/measures/index" */))
const _67f368f8 = () => interopDefault(import('../pages/modules/inventory/index.vue' /* webpackChunkName: "pages/modules/inventory/index" */))
const _f29a018a = () => interopDefault(import('../pages/modules/purchase/index.vue' /* webpackChunkName: "pages/modules/purchase/index" */))
const _de003afe = () => interopDefault(import('../pages/modules/sale/index.vue' /* webpackChunkName: "pages/modules/sale/index" */))
const _69420bb6 = () => interopDefault(import('../pages/configuration/articles/new.vue' /* webpackChunkName: "pages/configuration/articles/new" */))
const _56b31776 = () => interopDefault(import('../pages/configuration/brands/new.vue' /* webpackChunkName: "pages/configuration/brands/new" */))
const _5b0fc6d6 = () => interopDefault(import('../pages/configuration/categories/new.vue' /* webpackChunkName: "pages/configuration/categories/new" */))
const _0176284e = () => interopDefault(import('../pages/configuration/measures/new.vue' /* webpackChunkName: "pages/configuration/measures/new" */))
const _4a7db4b3 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _576f0ace = () => interopDefault(import('../pages/configuration/articles/update/_id.vue' /* webpackChunkName: "pages/configuration/articles/update/_id" */))
const _d6e49942 = () => interopDefault(import('../pages/configuration/brands/update/_id.vue' /* webpackChunkName: "pages/configuration/brands/update/_id" */))
const _5525dde2 = () => interopDefault(import('../pages/configuration/categories/update/_id.vue' /* webpackChunkName: "pages/configuration/categories/update/_id" */))
const _2b561336 = () => interopDefault(import('../pages/configuration/measures/update/_id.vue' /* webpackChunkName: "pages/configuration/measures/update/_id" */))
const _beed17a0 = () => interopDefault(import('../pages/modules/inventory/kardex/_id.vue' /* webpackChunkName: "pages/modules/inventory/kardex/_id" */))

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
    component: _5342ba68,
    name: "configuration-articles"
  }, {
    path: "/configuration/brands",
    component: _772f3b37,
    name: "configuration-brands"
  }, {
    path: "/configuration/categories",
    component: _47380f87,
    name: "configuration-categories"
  }, {
    path: "/configuration/measures",
    component: _a23bde00,
    name: "configuration-measures"
  }, {
    path: "/modules/inventory",
    component: _67f368f8,
    name: "modules-inventory"
  }, {
    path: "/modules/purchase",
    component: _f29a018a,
    name: "modules-purchase"
  }, {
    path: "/modules/sale",
    component: _de003afe,
    name: "modules-sale"
  }, {
    path: "/configuration/articles/new",
    component: _69420bb6,
    name: "configuration-articles-new"
  }, {
    path: "/configuration/brands/new",
    component: _56b31776,
    name: "configuration-brands-new"
  }, {
    path: "/configuration/categories/new",
    component: _5b0fc6d6,
    name: "configuration-categories-new"
  }, {
    path: "/configuration/measures/new",
    component: _0176284e,
    name: "configuration-measures-new"
  }, {
    path: "/",
    component: _4a7db4b3,
    name: "index"
  }, {
    path: "/configuration/articles/update/:id?",
    component: _576f0ace,
    name: "configuration-articles-update-id"
  }, {
    path: "/configuration/brands/update/:id?",
    component: _d6e49942,
    name: "configuration-brands-update-id"
  }, {
    path: "/configuration/categories/update/:id?",
    component: _5525dde2,
    name: "configuration-categories-update-id"
  }, {
    path: "/configuration/measures/update/:id?",
    component: _2b561336,
    name: "configuration-measures-update-id"
  }, {
    path: "/modules/inventory/kardex/:id?",
    component: _beed17a0,
    name: "modules-inventory-kardex-id"
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
