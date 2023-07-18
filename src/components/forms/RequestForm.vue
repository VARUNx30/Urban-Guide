<template>
  <form
    class="mt-10 flex h-auto w-full flex-wrap items-start justify-between gap-y-10 rounded-3xl bg-white p-20 shadow"
    ref="requestForm"
    action="https://formspree.io/f/mgebgpwg"
    method="POST"
    @submit.prevent="sendRequest"
  >
    <div class="flex h-auto w-full flex-col items-start justify-start gap-4">
      <label for="username">{{ content.userName }}:</label>
      <input
        type="text"
        name="username"
        id="username"
        class="w-full rounded-md border-2 border-gray-300 p-2"
        :placeholder="content.userName"
        v-model="formData.userName"
      />
    </div>
    <div class="flex h-auto w-full flex-col items-start justify-start gap-4">
      <label for="email">{{ content.email }}:</label>
      <input
        type="text"
        name="email"
        id="email"
        class="w-full rounded-md border-2 border-gray-300 p-2"
        :placeholder="content.email"
        v-model="formData.email"
      />
    </div>
    <div class="flex h-auto w-full flex-col items-start justify-start gap-4">
      <label for="itemName">{{ content.itemName }}:</label>
      <input
        type="text"
        name="itemName"
        id="itemName"
        class="w-full rounded-md border-2 border-gray-300 p-2"
        :placeholder="content.itemName"
        v-model="formData.itemName"
      />
    </div>
    <div class="flex h-auto w-full flex-col items-start justify-start gap-4">
      <label for="itemType">{{ content.itemType }}:</label>
      <input
        type="text"
        name="itemType"
        id="itemType"
        class="w-full rounded-md border-2 border-gray-300 p-2"
        :placeholder="content.itemType"
        v-model="formData.itemType"
      />
    </div>
    <div class="flex h-auto w-full flex-col items-start justify-start gap-4">
      <label for="itemDescription">{{ content.itemDescription }}:</label>
      <textarea
        type="text"
        name="itemDescription"
        id="itemDescription"
        class="w-full rounded-md border-2 border-gray-300 p-2"
        :placeholder="content.itemDescription"
        v-model="formData.itemDescription"
      />
    </div>

    <div
      class="flex h-auto w-full flex-col items-center justify-start gap-4 text-center"
    >
      <button
        class="w-full rounded-full bg-theme py-4 px-6 text-white"
        type="submit"
      >
        Send Request
      </button>
      <router-link
        to="/profile"
        class="w-full rounded-full border-2 border-darkgray-700 py-4 px-6"
      >
        Cancel
      </router-link>
    </div>
    <vue-basic-alert :duration="300" :closeIn="2000" ref="alert" />
  </form>
</template>

<script>
import VueBasicAlert from "vue-basic-alert";

export default {
  name: "RequestForm",
  components: {
    VueBasicAlert,
  },
  data() {
    return {
      content: {
        userName: "User Name",
        email: "Email",
        itemName: "Item Name",
        itemDescription: "Item Description",
        itemType: "Item Type",
      },
      formData: {
        userName: "",
        email: "",
        itemName: "",
        itemDescription: "",
        itemType: "",
      },
    };
  },
  methods: {
    async sendRequest(event) {
      var form = this.$refs.requestForm;
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            form.reset();
            this.$refs.alert.showAlert(
              "success",
              "Your request has been sent successfully",
              "Success"
            );
            setTimeout(() => {
              this.$router.push("/profile");
            }, 1000);
          } else {
            response.json().then((data) => {
              if (Object.hasOwn(data, "errors")) {
                this.$refs.alert.showAlert(
                  "error",
                  "Please fill all the required fields",
                  "Error"
                );
              } else {
                this.$refs.alert.showAlert(
                  "error",
                  "Something went wrong, please try again later",
                  "Error"
                );
              }
            });
          }
        })
        .catch((error) => {
          this.$refs.alert.showAlert(
            "error",
            "Something went wrong, please try again later",
            "Error"
          );
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
