<template>
  <div class="card p-0">
    <div class="card-header mx-4 mt-2 p-1 text-center">
      <div
        class="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg"
      >
        <i class="fas fa-archive opacity-10" aria-hidden="true"></i>
      </div>
    </div>
    <div class="card-body pt-0 p-1 text-center">
      <h6 class="text-center mb-0 text-xxs">
        <i class="fas fa-barcode"></i> 000
      </h6>
      <!-- articles como props, que se llena con un  v-for desde 'Compras' y 'Ventas', extrayendo luego su descripción -->
      <span class="text-xs">{{ articles.description }}</span>
      <hr class="horizontal dark my-2" />
      <h5 class="mb-0 text-sm">0.00</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Object,
      default: () => {}, //Función que retorna un objeto vacio
    },
  },

  data() {
    return {};
  },

  methods: {},

  mounted() {},
};
</script>
