<template>
  <div>
    <!-- Llamado al componente con prop de 'load', recibiendo el valor de una variable como true -->
    <JcLoader :load="load" />

    <AdminTemplate :page="page" :modulo="modulo">
      <div slot="body">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header pb-0">
                <div class="d-lg-flex">
                  <div>
                    <h5 class="mb-0">Kardex de artículo</h5>
                  </div>
                  <div class="ms-auto my-auto mt-lg-0 mt-4">
                    <div class="ms-auto my-auto">
                      <button
                        @click="$router.back()"
                        class="btn bg-gradient-info btn-sm mb-0"
                      >
                        <i class="ni ni-bold-left"></i> Regresar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-lg-5 mx-auto">
                    <h3 class="mt-lg-0 mt-4">{{ model.description }}</h3>
                    <div class="rating">
                      <i class="fas fa-barcode" aria-hidden="true"></i>
                      {{ model.barcode }} |
                      <i class="fas fa-boxes" aria-hidden="true"></i>
                      {{ model.category_id.description }} |
                      <i class="fas fa-bookmark" aria-hidden="true"></i>
                      {{ model.brand_id.description }}
                    </div>
                    <br />
                    <div class="d-flex justify-content-between">
                      <div class="mx-1">
                        <h6 class="mb-0 mt-3">Precio Compra</h6>
                        <h5>{{ Number(model.purchase_price).toFixed(2) }}</h5>
                      </div>
                      <div class="mx-1">
                        <h6 class="mb-0 mt-3">Precio Venta</h6>
                        <h5>{{ Number(model.price).toFixed(2) }}</h5>
                      </div>
                      <div class="mx-1">
                        <h6 class="mb-0 mt-3">Ganancia Unitaria</h6>
                        <h5>
                          {{
                            Number(model.price - model.purchase_price).toFixed(
                              2
                            )
                          }}
                        </h5>
                      </div>
                    </div>
                    <span
                      class="badge"
                      :class="[
                        model.stock < model.minimum_stock
                          ? 'badge-danger'
                          : 'badge-success',
                      ]"
                      ><i class="fas fa-archive" aria-hidden="true"></i>
                      {{ model.stock }} en Stock</span
                    >
                    <br />
                    <div class="d-flex justify-content-between">
                      <div class="mx-1">
                        <h6 class="mb-0 mt-3">Inversion</h6>
                        <h5>{{ Number(model.investment).toFixed(2) }}</h5>
                      </div>
                      <div class="mx-1">
                        <h6 class="mb-0 mt-3">Valorizado</h6>
                        <h5>{{ Number(model.valued).toFixed(2) }}</h5>
                      </div>
                      <div class="mx-1">
                        <h6 class="mb-0 mt-3">Ganancia</h6>
                        <h5>{{ Number(model.profit).toFixed(2) }}</h5>
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col-lg-12">
                        <!-- 'data-bs-target' determina el modal que se abrirá -->
                        <button
                          class="btn bg-gradient-primary mb-0 mt-lg-auto w-100"
                          type="button"
                          name="button"
                          data-bs-toggle="modal"
                          data-bs-target="#AjusteModal"
                        >
                          <i class="fas fa-cog"></i>
                          Ajustar Stock
                        </button>
                         <!-- Aqui empieza el Modal -->
                        <div
                          class="modal fade"
                          id="AjusteModal"
                          tabindex="-1"
                          role="dialog"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div
                            class="modal-dialog modal-dialog-centered"
                            role="document"
                          >
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">
                                  Nuevo Ajuste
                                </h5>
                                <button
                                  type="button"
                                  class="btn-close text-dark"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <div class="row">
                                  <div class="col-6">
                                    <div class="form-group has-success">
                                      <label for="">Cantidad</label>
                                      <input
                                        type="text"
                                        placeholder=""
                                        class="form-control"
                                        v-model.number="inventory.quantity"
                                      />
                                    </div>
                                  </div>
                                  <div class="col-6">
                                    <div class="form-group has-success">
                                      <label for="">Tipo de ajuste</label>
                                      <select
                                        name=""
                                        id=""
                                        class="form-control"
                                        v-model.number="inventory.type"
                                      >
                                        <option value="1">ENTRADA</option>
                                        <option value="2">SALIDA</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div class="col-6">
                                    <div class="form-group has-success">
                                      <label for="">Precio Compra</label>
                                      <input
                                        type="text"
                                        placeholder=""
                                        class="form-control"
                                        v-model.number="model.purchase_price"
                                      />
                                    </div>
                                  </div>
                                  <div class="col-6">
                                    <div class="form-group has-success">
                                      <label for="">Precio Venta</label>
                                      <input
                                        type="text"
                                        placeholder=""
                                        class="form-control"
                                        v-model.number="model.price"
                                      />
                                    </div>
                                  </div>
                                  <div class="col-12">
                                    <div class="form-group has-success">
                                      <label for="">Motivo</label>
                                      <input
                                        type="text"
                                        placeholder=""
                                        class="form-control"
                                        v-model="inventory.reason"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn bg-gradient-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Cancelar
                                </button>
                                <button
                                  type="button"
                                  class="btn bg-gradient-primary"
                                  data-bs-dismiss="modal"
                                  @click="Save()"
                                >
                                  Continuar
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                         <!-- Aqui termina el Modal -->
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-7">
                    <h5 class="ms-1">Movimientos de stock</h5>
                    <div class="table table-responsive">
                      <table class="table align-items-center mb-0 table-sm">
                        <thead>
                          <tr>
                            <th
                              class="text-uppercase text-left text-secondary text-xxs font-weight-bolder opacity-7 px-1"
                            >
                              Detalle
                            </th>
                            <th
                              class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                            >
                              Cantidad
                            </th>
                            <th
                              class="text-uppercase text-secondary text-left text-xxs font-weight-bolder opacity-7 ps-2"
                            >
                              Compra
                            </th>
                            <th
                              class="text-left text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                            >
                              Venta
                            </th>
                            <th
                              class="text-left text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                            ></th>
                          </tr>
                        </thead>
                        <tbody>
                          <!-- Referencia al nombre 'inventories' en la funcion kardex de la api -->
                          <!-- Se recorre el valor de 'inventories' -->
                          <tr v-for="elemento in model.inventories">
                            <td>
                              <div class="d-flex px-1 py-1">
                                <div class="text-xxs">
                                  {{ elemento.reason }}
                                </div>
                                <div
                                  class="d-flex flex-column justify-content-center"
                                >
                                  <!-- <h6 class="mb-0 text-xxs"></h6> -->
                                </div>
                              </div>
                            </td>
                            <td>
                              <h6>
                                <span
                                  class="badge"
                                  :class="[
                                    elemento.type == 2
                                      ? 'badge-danger'
                                      : 'badge-success',
                                  ]"
                                  >{{ elemento.quantity }}
                                  {{ model.measure_id.code }}</span
                                >
                              </h6>
                            </td>
                            <td class="text-xxs">{{ elemento.purchase }}</td>
                            <td class="align-middle text-sm text-xxs">
                              {{ elemento.sale }}
                            </td>
                            <td class="align-middle text-center text-xxs">
                              <a
                                href="javascript:void(0);"
                                @click="DeleteItem(elemento.id)"
                                data-bs-toggle="tooltip"
                                data-bs-original-title="Delete product"
                              >
                                <i
                                  class="fas fa-trash text-secondary"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
import AdminTemplate from "../../../../components/AdminTemplate.vue";
//Importar componente de carga de pagina
import JcLoader from "../../../../components/JcLoader.vue";

export default {
  head() {
    return {
      title: this.modulo,
    };
  },

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
        brand: {
          description: "",
        },
        category: {
          description: "",
        },
        measure_id: {
          description: "",
          code: "",
        },
      },

      inventory: {
        type: 1,
        quantity: 1,
        reason: "",
      },

      list: [],
      apiUrl: "inventories",
      page: "Modulo",
      modulo: "Inventario",

      urlUpdate: "/inventory/kardex/",
    };
  },

  components: { AdminTemplate, JcLoader },

  methods: {
    async GET_DATA(path) {
      const res = await this.$api.$get(path);
      return res;
    },

    //------------------------------Guardar--------------------------------------//

    async Save() {

      //Habilitar carga de pagina
      this.load = true;
      let self = this;

      try {
        //Asignar valores propios de 'model' a 'inventory', para poder guardarlos.
        //Inventory.sale, hace referencia a la columna 'sale' de inventories

        this.inventory.article_id = this.model.id;
        this.inventory.sale = this.model.price;
        this.inventory.purchase = this.model.purchase_price;

        //Guardado directo para inventario. Utilizar 'this.inventory'. EL 'this.model' corresponde a Articulo.
        const res = await this.$api.$post("inventories", this.inventory);

        //Sweet-alert2
        /*
          Se instala con 'npm install -S vue-sweetalert2'
          Se configura en el nuxt.config añadiendo en modules: 'vue-sweetalert2/nuxt'
        */
        console.log(res);
        this.$swal
          .fire({
            title: "Movimiento Guardado",
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: "Ok",
          })
          .then(async (result) => {
            if (result.isConfirmed) {
              //this.$swal.fire("Guardado correctamente!", "", "success");
              //this.$router.go(0); //Recargar la pagina

              //Actualizar todos los datos, posterior a la eliminación
              await Promise.all([
                //De aqui se rellena el 'model' proveninete de la consulta a la api de Kardex en Laravel
                //Route::get('/inventories/kardex/{article}', 'InventoryController@kardex');
                self.GET_DATA("inventories/kardex/" + self.$route.params.id),
              ]).then((v) => {
                //Cambia 'list' por 'model'
                self.model = v[0];
              });
            }
          });
      } catch (error) {
        console.log(error);
      } finally {
        //Deshabilitar carga de pagina
        this.load = false;
      }
    },

    //------------------------------Guardar--------------------------------------//

    //------------------------------Eliminar-------------------------------------//

    async EliminarItem(id) {
      this.load = true;
      try {
        const res = await this.$api.$delete(this.apiUrl + "/" + id);
        //Actualizar todos los datos, posterior a la eliminación
        await Promise.all([
          //De aqui se rellena el 'model' proveninete de la consulta a la api de Kardex en Laravel
          //Route::get('/inventories/kardex/{article}', 'InventoryController@kardex');
          this.GET_DATA("inventories/kardex/" + this.$route.params.id),
        ]).then((v) => {
          //Cambia 'list' por 'model'
          this.model = v[0];
        });
      } catch (e) {
        console.log(e);
      } finally {
        this.load = false;
      }
    },

    DeleteItem(id) {
      let self = this;
      this.$swal
        .fire({
          title: "Eliminar el movimiento?",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "Eliminar",
          cancelarButtonText: `Cancelar`,
        })
        .then(async (result) => {
          /* Se ejecuta la función tras la confirmación */
          if (result.isConfirmed) {
            await self.EliminarItem(id);
          }
        });
    },

    //------------------------------Eliminar-------------------------------------//
  },
  mounted() {
    this.$nextTick(async () => {
      try {
        //Aqui la api a utilizar cambia
        await Promise.all([
          //De aqui se rellena el 'model' proveninete de la consulta a la api de Kardex en Laravel
          //Route::get('/inventories/kardex/{article}', 'InventoryController@kardex');
          this.GET_DATA("inventories/kardex/" + this.$route.params.id),
        ]).then((v) => {
          //Cambia 'list' por 'model'
          this.model = v[0];
        });
      } catch (e) {
        console.log(e);
      } finally {
        this.load = false;
      }
    });
  },
};
</script>
