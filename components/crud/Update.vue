<template>
  <div>
    <!-- Llamado al componente con prop de 'load', recibiendo el valor de una variable como true -->
    <JcLoader :load="load" />

    <div class="row">
      <div class="col-12">
        <slot name="body" />
      </div>
    </div>
    <div class="col-12">
      <div class="row">
        <div class="col-6">
          <button class="btn btn-info w-100" @click="$router.back()">
            Volver
          </button>
        </div>
        <div class="col-6">
          <button class="btn btn-dark w-100" @click="Update()">Actualizar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdatePage",

   //En este componente va la interfaz de botones junto a la accion de actualizar con la API

  props: {
    model: {
      type: Object,
      default: () => {},
    },
    apiUrl: {
      type: String,
      default: "",
    },
  },

  head() {
    return {
      title: "Update",
    };
  },

  data() {
    return {
      load: false,
    };
  },

  methods: {
    //No se escribe toda la ruta gracias a la configuracion en 'plugins/api'.
    //API modo POST para guardar datos.
    async Update() {
      try {
        //Habilitar carga de pagina
        this.load = true;
        //CrudCreate recibe los props de 'ApiUrl' y 'Model' y estos se añaden aqui para actualizar
        const res = await this.$api.$put(this.apiUrl+"/"+this.model.id, this.model);

        //Sweet-alert2
        /*
          Se instala con 'npm install -S vue-sweetalert2'

          Se configura en el nuxt.config añadiendo en modules: 'vue-sweetalert2/nuxt'
      */

        this.$swal
          .fire({
            title: "Actualizado",
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: "Ok",
          })
          .then((result) => {
            if (result.isConfirmed) {
              //this.$swal.fire("Guardado correctamente!", "", "success");
              //Volver a la pagina anterior
              this.$router.back();
            }
          });
      } catch (error) {
        console.log(e);
      } finally {
        //Deshabilitar carga de pagina
        this.load = false;
      }
    },
  },
};
</script>
