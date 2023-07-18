<template>
  <div class="h-auto w-screen">
    <slot></slot>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AdminLayout",
  computed: {
    ...mapGetters(["authAdmin"]),
  },
  created() {
    // if (!this.authAdmin) {
    //   this.$router.push("/admin");
    // }
  },
};
</script>

<style lang="scss" scoped></style>
