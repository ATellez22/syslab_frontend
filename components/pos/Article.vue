<template>
  <div class="card p-0" @click="addCart()">
    <div class="card-header mx-4 mt-2 p-1 text-center">
      <div
        class="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg"
      >
        <i class="fas fa-archive opacity-10" aria-hidden="true"></i>
      </div>
    </div>
    <div class="card-body pt-0 p-1 text-center">
      <h6 class="text-center mb-0 text-xxs">
        <i class="fas fa-barcode"></i> {{ articles.barcode }}
      </h6>
      <!-- articles como props, que se llena con un  v-for desde 'Compras' y 'Ventas', extrayendo luego su descripción -->
      <span class="text-xs">{{ articles.description }}</span>
      <hr class="horizontal dark my-2" />
      <h5 class="mb-0 text-sm">
        {{ Number(articles.purchase_price).toFixed(2) }}
      </h5>
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

  methods: {
    //Añadir articulo al carrito de compras/tabla
    addCart() {
      //Capturar evento
      this.$emit("AddCart", this.articles);
    },
  },

  mounted() {},
};
</script>
