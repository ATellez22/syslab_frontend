<template>
  <div>
    <!-- Acceso al parametro con route. No se usa 'this' en el template -->
    {{ $route.params.id }}

    <!-- Estructura de model -->
    {{ model.description }}

    <!-- Llamado al componente con prop de 'load', recibiendo el valor de una variable como true -->
    <JcLoader :load="load" />

    <AdminTemplate>
      <div slot="body">
        <div class="row justify-content-center">
          <div class="col-sm-8 col-12">
            <div class="card">
              <div class="card-body">
                <h3>Actualizar</h3>
              </div>

              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label for="description"></label>
                      <input
                        type="text"
                        name="description"
                        id="description"
                        class="form-control"
                        v-model="model.description"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <button class="btn btn-info w-100" @click="$router.back()">
                      Volver
                    </button>
                  </div>
                  <div class="col-6">
                    <button class="btn btn-dark w-100" @click="Save()">
                      Actualizar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminTemplate>
  </div>
</template>

<script>
//AdminTemplate vendria a ser el 'MainLayout'
import AdminTemplate from "../../components/AdminTemplate.vue";
//Importar componente de carga de pagina
import JcLoader from "../../components/JcLoader.vue";

export default {
  name: "IndexPage",
  head() {
    return {
      title: "Index",
    };
  },
  components: { AdminTemplate, JcLoader },
  data() {
    return {
      load: true,
      //Variable que se utiliza para tomar el valor del input
      model: {
        description: "",
      },
    };
  },
  methods: {
    async GET_DATA(path) {
      const res = await this.$api.$get(path);
      return res;
      console.log(res);
    },

    //No se escribe toda la ruta gracias a la configuracion en 'plugins/api'.
    //API modo POST para guardar datos.
    async Save() {
      try {
        //Habilitar carga de pagina
        this.load = true;
        const res = await this.$api.$put("categories/" + this.model.id, this.model);

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
  mounted() {
    //Esperar para ejecutar la funcion. No funciona sin 'mounted()'
    this.$nextTick(async () => {
      /*
        - Variable Promise: Representa la finalización de una operación asíncrona.

        - Promise.all(): Crea una Promesa que se resuelve con una matriz de resultados
         cuando se resuelven todas las Promesas proporcionadas,
         o se rechaza cuando se rechaza alguna Promesa.

          @parametro — Un array de promesas (this.GET_DATA('brands'))

          @return — Una nueva promesa. (then((v))
      */

      try {
        await Promise.all([
          this.GET_DATA("categories/" + this.$route.params.id),
        ]).then((position) => {
          //La promesa resuelta 'position' se trasfiere a 'list' desde su primer valor '0'.
          this.model = position[0];
        });
      } catch (error) {
        console.log(e);
      } finally {
        //Desaparecer la carga de datos
        this.load = false;
      }
    });
  },
};
</script>
