<template>
  <nav
    class="navigation fixed top-0 left-0 z-10 h-auto w-screen border-b-2 border-darkgray-700 bg-white"
  >
    <div
      class="container mx-auto flex max-w-[90%] items-center justify-between py-4"
    >
      <router-link to="/">
        <img src="@/assets/shared/logo.svg" alt="error" class="w-[10rem]">
      </router-link>

      <div
        class="flex h-auto w-auto items-center justify-between gap-4"
        v-if="this.$store.state.admin"
      >
        <router-link
          to="/admin/dashboard"
          class="w-full rounded-full border-2 border-darkgray-700 py-2 px-4"
        >
          Dashboard
        </router-link>
        <router-link
          to="/admin"
          class="rounded-full bg-theme py-2 px-4 text-white"
        >
          Logout
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AdminLayout",
};
</script>

<style lang="scss" scoped></style>
