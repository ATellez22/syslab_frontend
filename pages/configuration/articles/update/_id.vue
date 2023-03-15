<template>
  <div>
    <!-- {{ $route.params.id }} Acceso al parametro con route. No se usa 'this' en el template -->

    <!-- {{ model.description }} Estructura de model -->

    <AdminTemplate :page="page" :modulo="modulo">
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
                      <label for="">Código de Barras</label>
                      <input
                        type="text"
                        name="description"
                        id="description"
                        v-model="model.barcode"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group col-12">
                      <label for="">Descripción</label>
                      <input
                        type="text"
                        name="description"
                        id="description"
                        v-model="model.description"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group col-6">
                      <label for="">Precio</label>
                      <input
                        type="text"
                        name="price"
                        id="price"
                        v-model.number="model.price"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group col-6">
                      <label for="">Precio de compra</label>
                      <input
                        type="text"
                        name="purchase_price"
                        id="purchase_price"
                        v-model.number="model.purchase_price"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group col-12">
                      <label for="">Marca</label>
                      <!-- V-for para Select -->
                      <select class="form-control" v-model="model.brand_id">
                        <option
                          v-for="elemento in brands_list"
                          :value="elemento.id"
                        >
                          {{ elemento.description }}
                        </option>
                      </select>
                    </div>
                    <div class="form-group col-12">
                      <label for="">Categoria</label>
                      <select class="form-control" v-model="model.category_id">
                        <option
                          v-for="elemento in categories_list"
                          :value="elemento.id"
                        >
                          {{ elemento.description }}
                        </option>
                      </select>
                    </div>
                    <div class="form-group col-12">
                      <label for="">Unidad de Medida</label>
                      <select class="form-control" v-model="model.measure_id">
                        <option
                          v-for="elemento in measures_list"
                          :value="elemento.id"
                        >
                          {{ elemento.description }} - {{ elemento.code }}
                        </option>
                      </select>
                    </div>
                    <div class="form-group col-12">
                      <label for="">Stock minimo</label>
                      <input
                        type="text"
                        name="minimum_stock"
                        id="minimum_stock"
                        v-model.number="model.minimum_stock"
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
import AdminTemplate from "../../../../components/AdminTemplate.vue";

export default {
  name: "IndexPage",
  head() {
    return {
      title: this.modulo,
    };
  },

  components: { AdminTemplate },
  data() {
    return {
      load: true,
      //Variable que se utiliza para tomar el valor del input
      model: {
        barcode: "",
        description: "",
        price: 0,
        purchase_price: 0,
        brand_id: "",
        category_id: "",
        measure_id: "",
        minimum_stock: 0,
      },
      apiUrl: "articles",
      /*Estos valores se añaden como 'props' en 'AdminTemplate' y este los reenvia al 'Navbar' para que se muestren como
      parametros */
      page: "Configuracion",
      modulo: "Articulos",

      /* Listas de claves foraneas */
      brands_list: [],
      categories_list: [],
      measures_list: [],
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
          this.GET_DATA("brands"),
          this.GET_DATA("categories"),
          this.GET_DATA("measures"),
        ]).then((position) => {
          //La promesa resuelta 'position' se trasfiere a 'this.model' desde su primer valor '0'.
          this.model = position[0];
          this.brands_list = position[1];
          this.categories_list = position[2];
          this.measures_list = position[3];

          //Asignar el valor original como primer elemento.
          this.model.brand_id = this.model.brand_id.id;
          this.model.category_id = this.model.category_id.id;
          this.model.measure_id = this.model.measure_id.id;

          //Si marca tiene valores, establecer el primer valor de la lista como predeterminado
          // if (this.brands_list.length) {
          //   this.model.brand_id = this.brands_list[0].id;
          // }

          // if (this.categories_list.length) {
          //   this.model.category_id = this.categories_list[0].id;
          // }

          // if (this.measures_list.length) {
          //   this.model.measure_id = this.measures_list[0].id;
          // }
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
