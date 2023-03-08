<template>
  <div>
    <AdminTemplate>
      <div slot="body">H3</div>
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
};
</script>
