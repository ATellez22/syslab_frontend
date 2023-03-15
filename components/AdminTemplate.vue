<template>
  <div>
    <Aside> </Aside>

    <main
      class="main-content position-relative max-height-vh-100 h-100 border-radius-lg"
    >
      <!-- AdminTemplate recibe estos props y los reenvia al Navbar, sirviendo como puente -->
      <BaseNavbar :page="page" :modulo="modulo" />

      <div class="container-fluid py-4">
        <!-- Slot similar al de Laravel para añadir contenido -->
        <slot name="body"></slot>
        <Footer></Footer>
      </div>
    </main>



  </div>
</template>

<script>
import Aside from "./base/Aside.vue";
import Navbar from "./base/Navbar.vue";
import Footer from "./base/Footer.vue";

export default {
  name: "Admin_Template",
  components: { Aside, Navbar, Footer },

  props: {
    page: {
      type: String,
      default: "",
    },
    modulo: {
      type: String,
      default: "",
    },
  },
};


</script>
