export default {
  // Cabeceras globales de la pagina: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/assets/css/nucleo-icons.css' },
      { rel: 'stylesheet', href: '/assets/css/nucleo-svg.css' },
      { rel: 'stylesheet', href: '/assets/css/soft-ui-dashboard.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' },

    ],
    script: [
      { src:"/assets/js/core/popper.min.js" },
      { src:"https://kit.fontawesome.com/42d5adcbca.js" },
      { src:"/assets/js/core/bootstrap.min.js" },
      { src:"/assets/js/plugins/perfect-scrollbar.min.js" },
      { src:"/assets/js/plugins/smooth-scrollbar.min.js" },
      { src:"/assets/js/plugins/dragula/dragula.min.js" },
      { src:"/assets/js/plugins/jkanban/jkanban.js" },
      { src:"/assets/js/plugins/chartjs.min.js" },
    ],
  },
  // CSS Global: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Complementos para ejecutar antes de renderizar la página: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/api'
  ],

  // Componentes de importación automática: https://go.nuxtjs.dev/config-components
  components: true,

  // Módulos para desarrollo y compilación (recomendado): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modulos: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', 'vue-sweetalert2/nuxt'],

  // Configuración de compilación: https://go.nuxtjs.dev/config-build
  build: {
  }
}
