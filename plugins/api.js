export default function ({ $axios }, inject) {
  // Crear instancia personalizada de Axios.
  const api = $axios.create({
    headers: {
      common: {
        Accept: "text/plain, */*",
      },
    },
  });

  // Establezca URL base
  api.setBaseURL("http://127.0.0.1:8000/api/");

  // Inyectar contexto como $api
  inject("api", api);

  /*
  Este plugin se obtiene de la pagina: https://axios.nuxtjs.org/usage
  */

  /*
  Se debe instalar primeramente:

  - npm install @nuxtjs/axios
  - yarn add @nuxtjs/axios

  */

  /*
  En 'nuxt.config' se debe establecer:

   plugins: [
    '~/plugins/api'
   ],

   modules: ['@nuxtjs/axios'],

  */
}
