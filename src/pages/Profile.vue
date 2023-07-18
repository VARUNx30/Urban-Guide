<template>
  <fixed>
    <div
      class="profile-box grid h-full w-full place-items-center bg-darkgray-900"
    >
      <div
        class="flex h-auto w-auto flex-col items-center justify-center gap-4 rounded-3xl bg-white p-20 shadow"
      >
        <figure class="h-[15rem] w-[15rem]">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            class="h-full w-full"
          >
            <path
              fill="#ff385c"
              d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"
            ></path>
          </svg>
        </figure>

        <h1 class="text-center text-3xl font-bold">
          {{ user.user_name }}
        </h1>
        <p class="text-center text-sm text-gray-600">
          User id : {{ user.user_id }}
        </p>
        <div class="h-[1px] w-full bg-darkgray-400/50"></div>
        <router-link
          to="/request"
          class="w-full rounded-full border-2 border-darkgray-700 py-4 px-6"
        >
          Add New Destinations
        </router-link>
        <button
          class="w-full rounded-full bg-theme py-4 px-6 text-white"
          @click.prevent="logout"
        >
          Logout
        </button>
      </div>
    </div>

    <vue-basic-alert :duration="300" :closeIn="2000" ref="alert" />
  </fixed>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import VueBasicAlert from "vue-basic-alert";
import fixed from "@/layouts/fixed.vue";

export default {
  name: "Profile",
  components: {
    fixed,
    VueBasicAlert,
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapMutations(["setUser", "setIsUserLoggedIn"]),

    logout() {
      this.loading = true;
      localStorage.removeItem("user_email");
      localStorage.removeItem("user_pass");

      this.$refs.alert.showAlert("success", "Logout successfully!!", "Done!!");

      setTimeout(() => {
        this.setUser("");
        this.setIsUserLoggedIn(false);
        this.$router.push("/login");
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped></style>
