<template>
  <div class="vl-parent">
    <!-- Se llama al componente Loading, el cual tiene un prop llamado 'active', que recibe un parametro boolean -->
    <Loading :active="load" />
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
//Esta ruta apuntaba por defecto en 'dist'. Se modifico a 'src'.
import "vue-loading-overlay/src/css/index.css";

export default {
  props: {
    //Los props se añaden con parametros de componente
    load: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    //Componente que viene en el 'vue-loading-overlay'
    Loading,
  },
};

/*
Este componente se obtiene de la pagina: https://www.npmjs.com/package/vue-loading-overlay
*/

/*
Se debe instalar primeramente:

- npm install vue-loading-overlay@^3.0
- yarn add vue-loading-overlay@^3.0

*/
</script>
