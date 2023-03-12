<template>
  <div>
    <!-- Llamado al componente con prop de 'load', recibiendo el valor de una variable como true -->
    <JcLoader :load="load" />

    <AdminTemplate :page="page" :modulo="modulo">
      <div slot="body">
        <div class="row justify-content-end">
          <div class="col-2">
            <nuxt-link :to="urlNew" class="btn btn-dark btn-sm w-100">
              <i class="fas fa-plus"></i> Agregar
            </nuxt-link>
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
                    <!-- Se recorre la lista generada por la promesa y trasferida a la data 'List' -->
                    <tr v-for="(elemento, indice) in list">
                      <td class="py-0 px-1">{{ elemento.id }}</td>
                      <td class="py-0 px-1">{{ elemento.description }}</td>
                      <td class="py-0 px-1">
                        <div class="btn-group">
                          <!-- 'to' dinamico para enviar parametros -->
                          <!-- Es capturado por $route.params.id -->
                          <nuxt-link
                            :to="urlUpdate + elemento.id"
                            class="btn btn-info btn-sm py-1 px-2"
                          >
                            <i class="fas fa-plus"></i>
                          </nuxt-link>
                          <button
                            type="button"
                            class="btn btn-danger btn-sm py-1 px-2"
                            @click="Eliminar(elemento.id)"
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
import AdminTemplate from "../../../components/AdminTemplate.vue";
//Importar componente de carga de pagina
import JcLoader from "../../../components/JcLoader.vue";

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
      apiUrl: "brands",
      /*Estos valores se añaden como 'props' en 'AdminTemplate' y este los reenvia al 'Navbar' para que se muestren como
      parametros */
      page: "Configuracion",
      modulo: "Marcas",
      urlNew: "brands/new",
      urlUpdate: "brands/update/"
    };
  },

  methods: {
    //No se escribe toda la ruta gracias a la configuracion en 'plugins/api'.
    //El metodo GET_DATA recibe la ruta desde el 'mounted' que ejecuta una promesa.
    async GET_DATA(path) {
      const res = await this.$api.$get(path);
      return res;
    },

    //------------------------------Eliminar-------------------------------------//

    async EliminarItem(id) {
      try {
        //Se activa la carga mientras se lista los resultados
        this.load = true;
        const res = await this.$api.$delete("brands/" + id);
        //Al recargar la pagina
        await Promise.all([this.GET_DATA(this.apiUrl)]).then((position) => {
          //La promesa resuelta 'position' se trasfiere a 'list' desde su primer valor '0'.
          this.list = position[0];
        });
      } catch (error) {
        console.log(e);
      } finally {
        //Desaparecer la carga cuando se carguen los datos.
        this.load = false;
      }
    },
    Eliminar(id) {
      /*
        - 'this.$swal.fire' es una funcion anidada dentro de 'Eliminar' y por tanto
        no puede acceder a los elementos del 'this' al que si puede acceder 'Eliminar'.
        Para superar la limitante, se transfiere el 'this' en un 'self'.
        - La variable 'self' contendrá los elementos externos (incluidos funciones).
      */
      let self = this;
      this.$swal
        .fire({
          title: "Deseas eliminar?",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "Eliminar",
          cancelButtonText: `Cancelar`,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            //Esto no seria posible de ejecutar solo con 'this'.
            //Se confirma la eliminacion y posteriormente se ejecuta la funcion asincrona.
            await self.EliminarItem(id);
          }
        });
    },

    //------------------------------Eliminar-------------------------------------//
  },
  mounted() {
    //Esperar para ejecutar la funcion. No funciona sin 'mounted()'.

    //Una forma de asegurarse de que 'Vue' ya ha renderizado todos los elementos del DOM es usar la función nextTick.
    //La función nextTick lo que hace es dejar pasar un pequeño intervalo de tiempo, el correspondiente a un tick.
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
        await Promise.all([this.GET_DATA("brands")]).then((position) => {
          //La promesa resuelta 'position' se trasfiere a 'list' desde su primer valor '0'.
          this.list = position[0];
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
