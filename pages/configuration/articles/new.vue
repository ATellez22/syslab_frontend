<template>
  <div>
    <!-- Llamado al componente con prop de 'load', recibiendo el valor de una variable como true -->
    <JcLoader :load="load" />

    <AdminTemplate :page="page" :modulo="modulo">
      <div slot="body">
        <div class="row justify-content-center">
          <div class="col-sm-8 col-12">
            <div class="card">
              <div class="card-body">
                <h3>Agregar</h3>
              </div>
              <div class="card-body">
                <!-- Llamado al componente de forma diferente? -->
                <!-- Sin el prop 'model' no se envian los datos -->
                <CrudCreate :model="model" :apiUrl="apiUrl">
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
                      <select
                        name="brand_id"
                        id="brand_id"
                        class="form-control"
                        v-model="model.brand_id"
                      >
                        <option
                          v-for="(elemento, indice) in brands_list"
                          :value="elemento.id"
                        >
                          {{ elemento.description }}
                        </option>
                      </select>
                    </div>
                    <div class="form-group col-12">
                      <label for="">Categoria</label>
                      <select
                        name="brand_id"
                        id="brand_id"
                        class="form-control"
                        v-model="model.category_id"
                      >
                        <option
                          v-for="(elemento, indice) in categories_list"
                          :value="elemento.id"
                        >
                          {{ elemento.description }}
                        </option>
                      </select>
                    </div>
                    <div class="form-group col-12">
                      <label for="">Unidad de Medida</label>
                      <select
                        name="brand_id"
                        id="brand_id"
                        class="form-control"
                        v-model="model.measure_id"
                      >
                        <option
                          v-for="(elemento, indice) in measures_list"
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
                </CrudCreate>
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

export default {
  name: "IndexPage",

  head() {
    return {
      title: "Index",
    };
  },

  components: { AdminTemplate },

  data() {
    return {
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
      load: true, //Variable de carga que se establece como 'true' y que se utiliza en el componente de 'JcLoader'

      /* Listas de claves foraneas */
      brands_list: [],
      categories_list: [],
      measures_list: [],
    };
  },

  methods: {
    //No se escribe toda la ruta gracias a la configuracion en 'plugins/api'.
    //El metodo GET_DATA recibe la ruta desde el 'mounted' que ejecuta una promesa.
    async GET_DATA(path) {
      const res = await this.$api.$get(path);
      return res;
    },
  },

  mounted() {
    //Esperar para ejecutar la funcion. No funciona sin 'mounted()'.

    //Una forma de asegurarse de que 'Vue' ya ha renderizado todos los elementos del DOM es usar la función nextTick.
    //La función nextTick lo que hace es dejar pasar un pequeño intervalo de tiempo, el correspondiente a un tick.
    this.$nextTick(async () => {
      try {
        await Promise.all([
          this.GET_DATA("brands"),
          this.GET_DATA("categories"),
          this.GET_DATA("measures"),
        ]).then((position) => {
          //La promesa resuelta 'position' se trasfiere a 'list' por valores.
          this.brands_list = position[0];
          this.categories_list = position[1];
          this.measures_list = position[2];

          //Si marca tiene valores, establecer el primer valor de la lista como predeterminado
          if (this.brands_list.length) {
            this.model.brand_id = this.brands_list[0].id;
          }

          if (this.categories_list.length) {
            this.model.category_id = this.categories_list[0].id;
          }

          if (this.measures_list.length) {
            this.model.measure_id = this.measures_list[0].id;
          }
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
