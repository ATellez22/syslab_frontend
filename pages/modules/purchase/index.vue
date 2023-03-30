<template>
  <div>
    <!-- Llamado al componente con prop de 'load', recibiendo el valor de una variable como true -->
    <JcLoader :load="load" />

    <AdminTemplate :page="page" :modulo="modulo">
      <div slot="body">
        <div class="row justify-content-end">
          <div class="col-12 col-sm-7">
            <div class="row">
              <div class="col-12">
                <div class="card bg-gradient-dark">
                  <div class="card-header bg-transparent py-2 px-3">
                    <div class="row">
                      <div class="col-lg-4 col-md-6 col-12">
                        <div class="input-group input-group-lg">
                          <span
                            class="input-group-text text-white bg-transparent border-0"
                          >
                            <i
                              class="ni ni-archive-2 text-lg"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <input
                            type="text"
                            class="form-control bg-transparent border-0 text-white"
                            placeholder="Buscar..."
                            v-model="find"
                            @keyup.enter="Codebar()"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-12 my-auto ms-auto">
                        <div class="input-group input-group-lg">
                          <span
                            class="input-group-text text-white bg-transparent border-0"
                          >
                            <i
                              class="ni ni-box-2 text-lg"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <select
                            name=""
                            id=""
                            class="form-control bg-transparent border-0 text-white"
                            v-model="brand"
                          >
                            <option value="all" class="text-dark">
                              Todas las brands
                            </option>
                            <!-- Rellenando el combo con v-for -->
                            <option
                              class="text-dark"
                              v-for="elemento in brands_list"
                              :value="elemento.id"
                            >
                              {{ elemento.description }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-12 py-2"
                style="
                  min-height: 60vh;
                  max-height: 60vh;
                  overflow-y: scroll;
                  overflow-x: none;
                "
              >
                <div class="row">
                  <div
                    class="col-3"
                    v-for="elemento in articlesCategoriesFilter"
                  >
                    <!-- Componente de article que recibe la lista como props -->
                    <!-- @AgregarCarrito es un evento, algo asi como 'evento props' que se encuentra en el
                    componente de 'Article' y se lo llama mediante la funcion '$emit'.
                          Lo que hace basicamente es ejecutar al funcion de otra pagina o componente -->
                    <Article :articles="elemento" @AddCart="addCart"></Article>
                  </div>
                </div>
              </div>
              <div class="col-xl-12">
                <div class="card">
                  <div class="card-body d-flex p-3">
                    <h6 class="my-auto">Categoría</h6>
                    <div class="nav-wrapper position-relative ms-auto w-50">
                      <ul class="nav nav-pills nav-fill p-1" role="tablist">
                        <li class="nav-item active" role="presentation">
                          <a
                            class="nav-link mb-0 px-0 py-1"
                            data-bs-toggle="tab"
                            href="#cam1"
                            role="tab"
                            aria-controls="cam1"
                            aria-selected="true"
                          >
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="dropdown pt-2">
                      <a
                        href="javascript:;"
                        class="text-secondary ps-4"
                        id="dropdownCam"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                      </a>
                      <ul
                        class="dropdown-menu dropdown-menu-end me-sm-n4 px-2 py-3"
                        aria-labelledby="dropdownCam"
                        style=""
                      >
                        <li>
                          <a
                            class="dropdown-item border-radius-md"
                            href="javascript:;"
                            @click="category = 'all'"
                            >Todo</a
                          >
                        </li>
                        <li v-for="elemento in categories_list">
                          <a
                            class="dropdown-item border-radius-md"
                            href="javascript:;"
                            @click="category = elemento.id"
                            >{{ elemento.description }}</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-5">
            <div class="card card-pricing">
              <div
                class="card-header bg-gradient-dark text-center pt-4 pb-5 position-relative"
              >
                <div class="z-index-1 position-relative">
                  <h1 class="text-white mt-2 mb-0">
                    <small></small>{{ Number(totalCart).toFixed(2) }}
                  </h1>
                  <h6 class="text-white">Total</h6>
                </div>
              </div>
              <div class="position-relative mt-n5" style="height: 50px">
                <div class="position-absolute w-100">
                  <svg
                    class="waves waves-sm"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 40"
                    preserveAspectRatio="none"
                    shape-rendering="auto"
                  >
                    <defs>
                      <path
                        id="card-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                      ></path>
                    </defs>
                    <g class="moving-waves">
                      <use
                        xlink:href="#card-wave"
                        x="48"
                        y="-1"
                        fill="rgba(255,255,255,0.30"
                      ></use>
                      <use
                        xlink:href="#card-wave"
                        x="48"
                        y="3"
                        fill="rgba(255,255,255,0.35)"
                      ></use>
                      <use
                        xlink:href="#card-wave"
                        x="48"
                        y="5"
                        fill="rgba(255,255,255,0.25)"
                      ></use>
                      <use
                        xlink:href="#card-wave"
                        x="48"
                        y="8"
                        fill="rgba(255,255,255,0.20)"
                      ></use>
                      <use
                        xlink:href="#card-wave"
                        x="48"
                        y="13"
                        fill="rgba(255,255,255,0.15)"
                      ></use>
                      <use
                        xlink:href="#card-wave"
                        x="48"
                        y="16"
                        fill="rgba(255,255,255,0.99)"
                      ></use>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="card-body text-center p-3">
                <div class="d-flex align-items-center px-2">
                  <h6>CARRITO</h6>
                  <button
                    type="button"
                    class="btn btn-icon-only btn-rounded btn-outline-dark mb-0 ms-2 btn-sm d-flex align-items-center justify-content-center ms-auto"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                  >
                    <i class="fas fa-trash" aria-hidden="true"></i>
                  </button>
                </div>
                <div class="table-responsive p-0" style="min-height: 30vh">
                  <table
                    class="table align-items-center justify-content-center mb-0"
                  >
                    <thead>
                      <tr>
                        <th
                          class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-start"
                        >
                          Artículo
                        </th>
                        <th
                          class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-start"
                        >
                          Cantidad
                        </th>
                        <th
                          class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-start"
                        >
                          Total
                        </th>
                        <th
                          class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- Recorrer los items 'pusheados' en el evento 'AddCart' -->
                      <tr v-for="(elemento, i) in cart">
                        <td class="text-start">
                          <p class="text-xxs font-weight-bold mb-0 text-start">
                            {{ elemento.article.description }}
                          </p>
                        </td>
                        <td class="text-start">
                          <p class="text-xxs font-weight-bold mb-0 text-start">
                            {{ elemento.quantity }}
                          </p>
                        </td>
                        <td class="text-start">
                          <p class="text-xxs font-weight-bold mb-0 text-start">
                            {{
                              Number(
                                elemento.quantity * elemento.purchase_price
                              ).toFixed(2)
                            }}
                          </p>
                        </td>
                        <td>
                          <div class="input-group input-group-sm">
                            <!--
                              Al dar click en 'editar' el valor de 'modalEdit' pasa a ser 'true', lo que activa
                              el v-bind:class del 'modal' para que se muestre la ventana.
                            -->
                            <!--
                                Los elementos del recorrido se transfieren a 'item', el cual es una variable
                                de objeto que se encargará de mostrar el articulo seleccionado.
                            -->
                            <button
                              class="btn btn-outline-primary mb-0 btn-sm"
                              type="button"
                              @click="[(modalEdit = true), (item = elemento)]"
                            >
                              <i class="fas fa-pen"></i>
                            </button>
                            <button
                              class="btn btn-outline-danger mb-0 btn-sm"
                              type="button"
                              @click="deleteItem(i)"
                            >
                              <i class="fas fa-times"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <a
                  href="javascript:void(0);"
                  class="btn bg-gradient-dark w-100 mt-4 mb-0"
                >
                  <i class="fas fa-save mx-2"></i> GUARDAR
                </a>
              </div>
            </div>
          </div>
          <!--
            v-bind:class que mediante el valor de modalEdit (true o false) se muestra el modal gracias
            a 'showModal' del css o que no haga nada...
          -->
          <div
            class="modal fade"
            :class="modalEdit ? 'showModal' : ''"
            id="AjusteModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Editar artículo
                  </h5>
                  <!--
                   Cerrar ventana de 'x' con modalEdit como 'false'
                  -->
                  <button
                    type="button"
                    class="btn-close text-dark"
                    @click="modalEdit = false"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group has-success">
                        <label for="">Articulo</label>
                        <!--
                          Por que 'value?' Por que no 'v-model'?
                        -->
                        <input
                          type="text"
                          placeholder=""
                          disabled
                          class="form-control"
                          :value="item.article.description"
                        />
                      </div>
                    </div>

                    <div class="col-6">
                      <div class="form-group has-success">
                        <label for="">Precio de compra</label>
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                          v-model.number="item.purchase_price"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group has-success">
                        <label for="">Precio de venta </label>
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                          v-model.number="item.price"
                        />
                      </div>
                    </div>

                    <div class="col-6">
                      <div class="form-group has-success">
                        <label for="">Precio</label>
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                          v-model.number="item.purchase_price"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group has-success">
                        <label for="">Cantidad</label>
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                          v-model.number="item.quantity"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    @click="modalEdit = false"
                    class="btn bg-gradient-secondary w-100"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
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
import AdminTemplate from "../../../components/AdminTemplate.vue";
//Importar componente de carga de pagina
import JcLoader from "../../../components/JcLoader.vue";
//Importar componente de article que representa el interior de la lista de articles
import Article from "../../../components/pos/Article.vue";

export default {
  head() {
    return {
      title: this.modulo,
    };
  },

  components: { AdminTemplate, JcLoader, Article },

  data() {
    return {
      /*Estos valores se añaden como 'props' en 'AdminTemplate' y este los reenvia al 'Navbar' para que se muestren como
      parametros */
      modulo: "Compras",
      page: "Modulo",

      //Variable 'buscar'
      find: "",
      brand: "all",
      category: "all",

      //Variable de carga que se establece como 'true' y que se utiliza en el componente de 'JcLoader'
      load: true,

      //Va como argumento para GET_DATA que se ejecuta en el Promise del mounted
      apiUrl: "articles",

      /* Listas de datos. Esto se llena con el GET_DATA a través del Promise en el mounted */
      articles_list: [],
      brands_list: [],
      categories_list: [],

      /* Carrito de compras */
      cart: [],

      modalEdit: false,

      item: {
        article: {
          description: "",
        },
        price: 0,
        purchase_price: 0,
        quantity: 0,
      },
    };
  },

  computed: {
    /*
      En el v-for, es posible recorrer el resultado de la API como por ejemplo 'brands_list'; pero también
      es posible recorrer una función que genera una lista.
      'articlesFilter()' puede ser recorrido con el v-for siempre que tenga el 'return' de una lista,
       por ejemplo: 'return this.articles_list' (retorna la misma lista pero desde la función).
    */
    articlesFilter() {
      //Capturar el v-model del buscador
      let find = this.find;

      //Preguntar si no esta vacio
      if (find != "") {
        //Array.Filter() recibe un callback que establece la condición.
        //Ejemplo básico de 'filter' = ''let pequeños = gente.filter(persona => persona.edad <= 3)''
        return this.articles_list.filter((elemento) => {
          //Aqui se filtra lo del 'find', pero no comprendo su funcionalidad...
          let description =
            elemento.description != null ? elemento.description : "";
          let barcode = elemento.barcode != null ? elemento.barcode : "";
          return (
            description.toLowerCase().indexOf(find.toLowerCase()) != -1 ||
            //Barcode es numerico
            barcode.toString().toLowerCase().indexOf(find.toLowerCase()) != -1
          );
        });
      }
      //Si no hay nada escrito en el buscador, retornar la lista normal
      return this.articles_list;
    },

    articlesBrandsFilter() {
      let brand = this.brand;
      if (brand != "all") {
        return this.articlesFilter.filter((elemento) => {
          return elemento.brand_id == brand;
        });
      }
      return this.articlesFilter;
    },

    articlesCategoriesFilter() {
      let category = this.category;
      if (category != "all") {
        return this.articlesBrandsFilter.filter((elemento) => {
          return elemento.category_id == category;
        });
      }
      return this.articlesBrandsFilter;
    },

    totalCart() {
      //Reduce?
      return this.cart.reduce((a, b) => a + b.quantity * b.purchase_price, 0);
    },
  },

  methods: {
    //No se escribe toda la ruta gracias a la configuracion en 'plugins/api'.
    //El metodo GET_DATA recibe la ruta desde el 'mounted' que ejecuta una promesa.
    //Este sería el metodo 'listar' de todas las apis. Sirven para rellenas listas del DATA.
    async GET_DATA(path) {
      const res = await this.$api.$get(path);
      return res;
    },

    //Listado independiente de referenciales. El GET_DATA original se usa para el listado de compras
    async GET_REFERENTIALS() {
      try {
        //Para mas de una lista, estan se ponen dentro del array separados por comas
        await Promise.all([
          this.GET_DATA("articles"),
          this.GET_DATA("brands"),
          this.GET_DATA("categories"),
        ]).then((position) => {
          //La promesa resuelta 'position' se trasfiere a 'list' desde su primer valor '0'.
          this.articles_list = position[0];
          this.brands_list = position[1];
          this.categories_list = position[2];
        });
      } catch (error) {
        console.log(e);
      }
    },

    //Añadir valores al carrito, se ejecuta del evento capturado en el componente Article
    addCart(articles) {
      let id = articles.id;

      let findRegister = this.cart.filter((i) => i.article.id == id);

      if (findRegister.length > 0) {
        let index = this.cart.findIndex((i) => i.article.id == id);
        this.cart[index].quantity += 1;
      } else {
        const item = {
          article: articles,
          quantity: 1,
          purchase_price: articles.purchase_price,
        };

        this.cart.push(item);
      }
    },

    deleteItem(i) {
      this.cart.splice(i, 1);
    },

    //Lector de código de barras
    Codebar() {
      let code = this.find;
      let findRegister = this.articlesCategoriesFilter.filter(
        (i) => i.barcode == code
      );
      if (findRegister.length > 0) {
        this.addCart(findRegister[0]);
        this.find = "";
      }
    },
  },

  //Importante: Las funciones automaticas o de lista se crean el el METHOD, pero se ejecutan el MOUNTED
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

          La promesa es la ejecutara de la funcion GET_DATA desde el 'mounted'
      */

      //La promesa ejecuta el GET_REFERENTIALS
      try {
        await Promise.all([this.GET_REFERENTIALS()]).then((position) => {
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

<style>
/* Mostrar el modal */
.showModal {
  visibility: visible;
  display: block;
  opacity: 1 !important;
}
</style>
