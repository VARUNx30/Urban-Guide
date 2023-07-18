<template>
  <AdminLayout>
    <div class="relative min-h-screen w-full">
      <div class="grid h-screen w-screen place-items-center bg-gray-100">
        <form
          id="adminForm"
          class="flex h-auto w-auto flex-col items-center justify-center gap-4 rounded-3xl bg-white p-20 text-center shadow"
          @submit.prevent="handleSubmit"
          novalidate
          autocomplete="off"
        >
          <h1 class="text-t-4 font-black">Admin Access</h1>

          <input
            type="password"
            id="uPass"
            name="uPass"
            class="w-full rounded-full border-2 border-darkgray-700 bg-gray-100 px-10 py-6 text-xl font-semibold"
            placeholder="Enter admin password"
            v-model="admin.pass"
          />

          <input
            type="submit"
            value="Login"
            class="bg-secondary w-full cursor-pointer rounded-full bg-theme p-6 text-lg text-white"
          />
        </form>
      </div>

      <vue-basic-alert :duration="300" :closeIn="2000" ref="alert" />
    </div>
  </AdminLayout>
</template>

<script>
import { mapMutations } from "vuex";
import VueBasicAlert from "vue-basic-alert";
import AdminLayout from "@/layouts/admin.vue";
export default {
  name: "Admin",
  components: {
    AdminLayout,
    VueBasicAlert,
  },
  data() {
    return {
      admin: {
        pass: "",
      },
      key: "3007",
      loading: false,
    };
  },
  methods: {
    ...mapMutations(["setAdmin"]),

    handleSubmit() {
      this.loading = true;
      this.error = false;
      if (!this.admin.pass) {
        // this.errors.push('Password is required')
        this.$refs.alert.showAlert(
          "error",
          "Password is required",
          "Please enter your Password"
        );
        this.error = true;
        this.loading = false;
      }

      if (this.error) {
        return;
      } else {
        if (this.key === this.admin.pass) {
          this.setAdmin(true);
          this.$refs.alert.showAlert(
            "success",
            "Login Success",
            "Welcome to admin panel"
          );

          setTimeout(() => {
            this.loading = false;
            this.$router.push("/admin/dashboard");
          }, 2000);
        } else {
          this.$refs.alert.showAlert(
            "error",
            "Admin password wrong!",
            "Please enter correct password"
          );
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
