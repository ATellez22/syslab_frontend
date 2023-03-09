<template>
  <div>
    <AdminTemplate>
      <div slot="body">{{ip}}</div>
    </AdminTemplate>
  </div>
</template>

<script>
import AdminTemplate from "../components/AdminTemplate.vue";

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
      ip: {}
    }
  },
  methods: {
    async fetchSomething() {
      const ip = await this.$api.$get("categories");
      this.ip = ip; //Guardar resultado en una variable de 'data'.
    },
  },
  mounted() {
    this.$nextTick(async () => { //Esperar para ejecutar la funcion.
        await this.fetchSomething()
    })
  }
}
</script>
