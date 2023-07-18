<template>
  <fixed>
    <div
      class="login-box grid h-full w-full place-items-center bg-darkgray-900"
    >
      <form
        class="flex h-auto w-auto flex-col items-center justify-center gap-6 rounded-lg bg-white p-20 shadow"
        @submit.prevent="handleSubmit"
        novalidate
        autocomplete="off"
      >
        <h1 class="text-secondary text-4xl font-bold">Login Now</h1>
        <input
          type="email"
          id="uEmail"
          name="uEmail"
          class="rounded-full border-none bg-gray-100 px-10 py-6 text-xl font-semibold"
          v-model="login.email"
          placeholder="Enter the Email"
        />

        <input
          type="password"
          id="uPass"
          name="uPass"
          placeholder="Enter the Password"
          class="rounded-full border-none bg-gray-100 px-10 py-6 text-xl font-semibold"
          v-model="login.pass"
        />

        <button
          type="submit"
          class="bg-secondary w-full rounded-full bg-theme p-6 text-lg text-white"
        >
          Login
        </button>
        <p>
          don't have an account?
          <router-link to="/register" class="font-semibold text-theme"
            >create one
          </router-link>
        </p>
      </form>
    </div>

    <vue-basic-alert :duration="300" :closeIn="2000" ref="alert" />
  </fixed>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
import fixed from "@/layouts/fixed.vue";
import VueBasicAlert from "vue-basic-alert";

export default {
  name: "Login",
  components: {
    fixed,
    VueBasicAlert,
  },
  data() {
    return {
      login: {
        email: "",
        pass: "",
      },
    };
  },
  methods: {
    ...mapMutations(["setUser", "setIsUserLoggedIn"]),

    async getMatchUser(email) {
      let data = await axios.get("/users/" + email);
      this.matchUser = data.data;
    },

    async handleSubmit() {
      this.errors = [];
      this.loading = true;

      if (!this.login.email) {
        this.errors.push("Email is required");
        this.$refs.alert.showAlert(
          "error",
          "Email is required",
          "Please enter your email address"
        );
      } else {
        if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.login.email)) {
          this.errors.push("Email must be valid");
          this.$refs.alert.showAlert(
            "error",
            "Email must be valid",
            "Please enter a valid email address"
          );
        }
      }

      if (!this.login.pass) {
        this.errors.push("Password is required");
        this.$refs.alert.showAlert(
          "error",
          "Password is required",
          "Please enter your password"
        );
      }

      if (!this.errors.length == 0) {
        return;
      } else {
        await this.getMatchUser(this.login.email);
        if (!this.matchUser) {
          this.errors.push("Incorrect email or password!");
          this.$refs.alert.showAlert(
            "error",
            "Incorrect email or password!",
            "Please enter a valid email address and password"
          );
        } else {
          if (this.matchUser.user_password === this.login.pass) {
            this.matchUser.user_password = "";

            this.setUser(this.matchUser);
            this.setIsUserLoggedIn(true);

            localStorage.removeItem("user_email");
            localStorage.removeItem("user_pass");

            localStorage.setItem("user_email", this.login.email);
            localStorage.setItem("user_pass", this.login.pass);

            this.$refs.alert.showAlert(
              "success",
              "Login Successful",
              "You have successfully logged in"
            );

            setTimeout(() => {
              this.$router.push("/");
            }, 2000);
          } else {
            this.errors.push("Incorrect email or password!");
            this.$refs.alert.showAlert(
              "error",
              "Incorrect email or password!",
              "Please enter a valid email address and password"
            );
          }
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
