export { default as AdminTemplate } from '../../components/AdminTemplate.vue'
export { default as JcLoader } from '../../components/JcLoader.vue'
export { default as BaseAside } from '../../components/base/Aside.vue'
export { default as BaseFooter } from '../../components/base/Footer.vue'
export { default as BaseNavbar } from '../../components/base/Navbar.vue'
export { default as CrudCreate } from '../../components/crud/Create.vue'
export { default as CrudUpdate } from '../../components/crud/Update.vue'
export { default as PosArticle } from '../../components/pos/Article.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
