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
        <h1 class="text-secondary text-4xl font-bold">Register Now</h1>
        <input
          type="text"
          name="uName"
          placeholder="Username"
          id="uName"
          class="rounded-full border-none bg-gray-100 px-10 py-6 text-xl font-semibold"
          v-model="register.name"
        />

        <input
          type="email"
          name="uEmail"
          placeholder="Email Address"
          id="uEmail"
          class="rounded-full border-none bg-gray-100 px-10 py-6 text-xl font-semibold"
          v-model="register.email"
        />

        <input
          type="password"
          name="uPass"
          placeholder="Password"
          id="uPass"
          class="rounded-full border-none bg-gray-100 px-10 py-6 text-xl font-semibold"
          v-model="register.pass"
        />

        <input
          type="password"
          name="uPass2"
          placeholder="Confirm Password"
          id="uPass2"
          class="rounded-full border-none bg-gray-100 px-10 py-6 text-xl font-semibold"
          v-model="register.pass2"
        />

        <button
          type="submit"
          class="bg-secondary w-full rounded-full bg-theme p-6 text-lg text-white"
        >
          Create Account
        </button>
        <p>
          Already have an account?
          <router-link to="/login" class="font-semibold text-theme"
            >Login Now
          </router-link>
        </p>
      </form>
    </div>
    <vue-basic-alert :duration="300" :closeIn="2000" ref="alert" />
  </fixed>
</template>

<script>
import axios from "axios";
import VueBasicAlert from "vue-basic-alert";
import fixed from "@/layouts/fixed.vue";
export default {
  name: "Register",
  components: {
    fixed,
    VueBasicAlert,
  },
  data() {
    return {
      register: {
        name: "",
        email: "",
        pass: "",
        pass2: "",
      },
      errorBox: {
        nameError: [],
        emailError: [],
        passError: [],
      },
    };
  },
  methods: {
    async getMatchUser(email) {
      let data = await axios.get("/users/" + email);
      this.matchUser = data.data;
    },

    resetCheckErr: function () {
      this.errorBox.nameError = [];
      this.errorBox.emailError = [];
      this.errorBox.passError = [];
    },

    checkEmptyErr: function () {
      for (var typeErr in this.errorBox) {
        if (this.errorBox[typeErr].length != 0) {
          return false;
        }
      }
      return true;
    },

    checkForm: function () {
      this.resetCheckErr();

      // Name validate
      if (!this.register.name) {
        this.$refs.alert.showAlert(
          "error",
          "Entering a name is required",
          "error"
        );
        this.errorBox.nameError.push("Name is required");
      } else {
        if (!/^[A-Za-z]+$/.test(this.register.name.replace(/\s/g, ""))) {
          this.$refs.alert.showAlert(
            "error",
            "A name can only contain letters",
            "error"
          );
          this.errorBox.nameError.push("A name can only contain letters");
        }
      }

      // Email validate
      if (!this.register.email) {
        this.$refs.alert.showAlert(
          "error",
          "Entering a email is required",
          "error"
        );
        this.errorBox.emailError.push("Email is required");
      } else {
        if (
          !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.register.email)
        ) {
          this.$refs.alert.showAlert("error", "Email must be valid", "error");
          this.errorBox.emailError.push("Email must be valid");
        }
      }

      // Pass validate
      if (!this.register.pass) {
        this.$refs.alert.showAlert(
          "error",
          "Entering a password is required",
          "error"
        );
        this.errorBox.passError.push("Password is required");
      } else {
        if (!/[!@#$%^&*]/.test(this.register.pass)) {
          this.$refs.alert.showAlert(
            "error",
            "Password must contain at least 1 special character",
            "error"
          );
          this.errorBox.passError.push(
            "Password must contain at least 1 special character"
          );
        }

        if (this.register.pass.length < 8) {
          this.$refs.alert.showAlert(
            "error",
            "Password must be more than or equal 8 characters",
            "error"
          );
          this.errorBox.passErr.push(
            "Password must be more than or equal 8 characters"
          );
        }
      }
    },

    // async handleSubmit() {
    //   this.checkForm();

    //   if (!this.checkEmptyErr()) {
    //     return;
    //   } else {
    //     await this.getMatchUser(this.register.email);
    //     if (this.matchUser) {
    //       this.$refs.alert.showAlertAlert(
    //         "warning",
    //         "Account already exist",
    //         "warning"
    //       );
    //     } else {
    //       let data = {
    //         user_name: this.register.name,
    //         user_email: this.register.email,
    //         user_password: this.register.pass,
    //       };

    //       await axios.post("/users/", data);

    //       this.$refs.alert.showAlert(
    //         "success",
    //         "Register successfully",
    //         "success"
    //       );

    //       setTimeout(() => {
    //         this.$router.push("/login");
    //       }, 2000);
    //     }
        
    //   }
      
    // }
    async handleSubmit() {
      this.checkForm();

      if (!this.checkEmptyErr()) {
        return;
        } 
        else {
          await this.getMatchUser(this.register.email);
          if (this.matchUser) {
            this.$refs.alert.showAlertAlert(
            "warning",
            "Account already exists",
            "warning"
            );
          }
          else {
          if (this.register.pass !== this.register.pass2) {
            this.$refs.alert.showAlert(
            "error",
            "Passwords do not match",
            "error"
          );
          return;
          }

          let data = {
          user_name: this.register.name,
          user_email: this.register.email,
          user_password: this.register.pass,
          };

          await axios.post("/users/", data);

          this.$refs.alert.showAlert(
          "success",
          "Register successfully",
          "success"
          );

          setTimeout(() => {
          this.$router.push("/login");
          }, 2000);
            }
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
