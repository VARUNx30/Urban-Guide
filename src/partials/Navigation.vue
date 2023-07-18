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

      <router-link
        class="flex items-center justify-between gap-2 rounded-[50px] border-2 border-darkgray-700 px-2 py-1.5"
        to="/profile"
        v-if="this.$store.state.isUserLoggedIn"
      >
        <span class="pl-2">Profile</span>
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          class="h-8 w-8"
        >
          <path
            fill="#ff385c"
            d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"
          ></path>
        </svg>
      </router-link>
      <div class="flex h-auto w-auto items-center justify-between gap-4" v-else>
        <router-link
          to="/login"
          class="rounded-3xl border-2 border-darkgray-700 py-2 px-6"
        >
          Login
        </router-link>
        <router-link
          to="/register"
          class="rounded-3xl border-2 border-darkgray-700 py-2 px-6"
        >
          Register
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  mounted() {
    const nav = document.querySelector(".navigation");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        nav.classList.add("shadow-card");
        nav.classList.remove("border-b-2");
      } else {
        nav.classList.add("border-b-2");
        nav.classList.remove("shadow-card");
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
