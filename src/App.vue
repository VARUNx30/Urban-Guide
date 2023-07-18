<template>
  <Navigation v-if="!this.$route.meta.admin"></Navigation>
  <AdminNavigation v-else />

  <router-view></router-view>
</template>

<script>
import Navigation from "@/partials/Navigation.vue";
import AdminNavigation from "@/partials/AdminNavigation.vue";
export default {
  name: "App",
  components: {
    Navigation,
    AdminNavigation,
  },
};
</script>

<style></style>
