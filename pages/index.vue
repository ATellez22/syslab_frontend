<template>
  <div>
    <!-- Llamado al componente con prop de 'load', recibiendo el valor de una variable como true -->
    <JcLoader :load="load" />

    <AdminTemplate>
      <div slot="body">
        <div class="row justify-content-end">
          <div class="col-2">
            <button type="button" class="btn btn-dark btn-sm w-100">
              <i class="fas fa-plus"></i> Agregar
            </button>
          </div>
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <table class="table">
                  <thead>
                    <th class="py-0 px-1">Id</th>
                    <th class="py-0 px-1">Description</th>
                    <th class="py-0 px-1">Accion</th>
                  </thead>
                  <tbody>
                    <!-- Recorrido con 'v-for', como mejor alternativa a 'map' en React/Next -->
                    <tr v-for="(elemento, indice) in list">
                      <td class="py-0 px-1">{{ elemento.id }}</td>
                      <td class="py-0 px-1">{{ elemento.description }}</td>
                      <td class="py-0 px-1">
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-info btn-sm py-1 px-2"
                          >
                            <i class="fas fa-pen"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger btn-sm py-1 px-2"
                          >
                            <i class="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
import AdminTemplate from "../components/AdminTemplate.vue";
//Importar componente de carga de pagina
import JcLoader from "../components/JcLoader.vue";

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
      load: true, //Variable de carga que se establece como 'true' y que se utiliza en el componente de 'JcLoader'
      list: {}, //Variable de objeto que contendra los datos solicitados con la api de axios.
    };
  },
  methods: {
    //No se escribe toda la ruta gracias a la configuracion en 'plugins/api'.
    //El meotodo GET_DATA recibe la ruta desde el 'mounted' que ejecuta una promesa.
    async GET_DATA(path) {
      const res = await this.$api.$get(path);
      return res;
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
        await Promise.all([this.GET_DATA("brands")]).then((v) => {
          //La promesa resuelta 'v' se trasfiere a 'ip' desde su primer valor '0'.
          this.list = v[0];
        });
      } catch (error) {
        console.log(e);
      } finally {
        //Desaparecer la carga de la pagina cuando se carguen los datos.
        this.load = false;
      }
    });
  },
};
</script>
