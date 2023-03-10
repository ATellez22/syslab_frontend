<template>
  <div>
    <!-- Llamado al componente con prop de 'load', recibiendo el valor de una variable como true -->
    <JcLoader :load="load" />

    <AdminTemplate>
      <div slot="body">
        <div class="row justify-content-center">
          <div class="col-sm-8 col-12">
            <div class="card">
              <div class="card-body">
                <h3>Agregar</h3>
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
                  <div class="col-12">
                    <button class="btn btn-dark w-100" @click="Save()">Agregar</button>
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
      load: false,
      //Variable que se utiliza para tomar el valor del input
      model: {
        description: ""
      }
    }
  },
  methods: {
    //No se escribe toda la ruta gracias a la configuracion en 'plugins/api'.
    //API modo POST para guardar datos.
    async Save() {
      const res = await this.$api.$post('brands', this.model);
      console.log(res);
    },
  },
  // mounted() {
  //   //Esperar para ejecutar la funcion. No funciona sin 'mounted()'
  //   this.$nextTick(async () => {
  //     try {
  //     } catch (error) {
  //       console.log(e);
  //     } finally {
  //     }
  //   });
  // },
};
</script>
