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
                <!-- Llamado al componente de forma diferente? -->
                <!-- Sin el prop 'model' no se envian los datos -->
                <CrudUpdate :model="model" :apiUrl="apiUrl">
                  <!-- Rellenando el slot del componente Create -->
                  <div slot="body" class="row">
                    <div class="form-group col-12">
                      <label for="">Descripcion</label>
                      <input
                        type="text"
                        name="description"
                        id="description"
                        v-model="model.description"
                        class="form-control"
                      />
                    </div>
                  </div>
                </CrudUpdate>
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
      apiUrl: "categories",
    };
  },

  methods: {
    async GET_DATA(path) {
      const res = await this.$api.$get(path);
      return res;
      console.log(res);
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
          this.GET_DATA(this.apiUrl + "/" + this.$route.params.id),
        ]).then((position) => {
          //La promesa resuelta 'position' se trasfiere a 'this.model' desde su primer valor '0'.
          this.model = position[0];
        });
      } catch (error) {
        console.log(e);
      } finally {
        //Desaparecer la carga de datosu
        this.load = false;
      }
    });
  },
};
</script>
