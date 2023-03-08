<template>
  <div>
    <Aside />

    <main
      class="main-content position-relative max-height-vh-100 h-100 border-radius-lg"
    >
      <Navbar />

      <div class="container-fluid py-4">
        <slot name="body" />
        <Footer />
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
};
</script>
