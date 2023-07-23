<template>
  <div>
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
                      <label for="">Nombre</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        v-model="model.name"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group col-12">
                      <label for="">Usuario</label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        v-model="model.username"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group col-12">
                      <label for="">Correo</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        v-model="model.email"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group col-12">
                      <label for="">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        v-model="model.password"
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
import AdminTemplate from "~/components/AdminTemplate.vue";

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
        name: "",
        username: "",
        email: "",
        password: ""
      },
      apiUrl: "users",
      /*Estos valores se añaden como 'props' en 'AdminTemplate' y este los reenvia al 'Navbar' para que se muestren como
      parametros */
      page: "Configuracion",
      modulo: "Usuarios"
    };
  },
};
</script>
