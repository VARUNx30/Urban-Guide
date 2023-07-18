<template>
  <form
    class="mt-10 flex h-auto w-full flex-wrap items-start justify-between gap-y-10 rounded-3xl bg-white p-20 shadow"
  >
    <div class="flex h-auto w-[48%] flex-col items-start justify-start gap-4">
      <label for="name">{{ content.name }}:</label>
      <input
        type="text"
        name="name"
        id="name"
        class="w-full rounded-md border-2 border-gray-300 p-2"
        :placeholder="content.name"
        v-model="formData.name"
      />
    </div>
    <div class="flex h-auto w-[48%] flex-col items-start justify-start gap-4">
      <label for="location">{{ content.location }}:</label>
      <!-- <input
        type="text"
        name="location"
        id="location"
        class="w-full rounded-md border-2 border-gray-300 p-2"
        :placeholder="content.location"
        v-model="formData.location"
      /> -->
      <select
        name="location"
        id="location"
        class="w-full rounded-md border-2 border-gray-300 p-2"
        v-model="formData.location"
      >
        <option value="" disabled selected>Select a location</option>
        <option
          v-for="location in activeLocations"
          :key="location.location_id"
          :value="location.location_name"
        >
          {{ location.location_name }}
        </option>
      </select>
    </div>
    <div class="flex h-auto w-[48%] flex-col items-start justify-start gap-4">
      <label for="price">{{ content.price }}:</label>
      <input
        type="text"
        name="price"
        id="price"
        class="w-full rounded-md border-2 border-gray-300 p-2"
        :placeholder="content.price"
        v-model="formData.price"
      />
    </div>
    <div class="flex h-auto w-[48%] flex-col items-start justify-start gap-4">
      <label for="rating">{{ content.rating }}:</label>
      <input
        type="text"
        name="rating"
        id="rating"
        class="w-full rounded-md border-2 border-gray-300 p-2"
        :placeholder="content.rating"
        v-model="formData.rating"
      />
    </div>
    <div class="flex h-auto w-[48%] flex-col items-start justify-start gap-4">
      <label for="type">{{ content.type }}:</label>
      <input
        type="text"
        name="type"
        id="type"
        class="w-full rounded-md border-2 border-gray-300 p-2"
        :placeholder="content.type"
        v-model="formData.type"
      />
    </div>
    <div class="flex h-auto w-[48%] flex-col items-start justify-start gap-4">
      <label for="description">{{ content.description }}:</label>
      <textarea
        type="text"
        name="description"
        id="description"
        class="w-full rounded-md border-2 border-gray-300 p-2"
        :placeholder="content.description"
        v-model="formData.description"
      />
    </div>
    <div class="flex h-auto w-full items-start justify-between">
      <figure class="h-[30rem] w-[48%] overflow-hidden rounded-3xl">
        <img
          :src="getImageUrl(formData.image)"
          alt="placeholder"
          class="h-full w-full"
        />
      </figure>
      <div class="h-auto w-[48%]">
        <label for="image">{{ content.image }}:</label>
        <input
          type="text"
          name="image"
          id="image"
          class="w-full rounded-md border-2 border-gray-300 p-2"
          :placeholder="content.image"
          v-model="formData.image"
        />
      </div>
    </div>

    <div
      class="flex h-auto w-full flex-col items-center justify-start gap-4 text-center"
    >
      <button
        class="w-full rounded-full bg-theme py-4 px-6 text-white"
        type="submit"
        @click.prevent="createProduct"
      >
        Create {{ $route.meta.name.slice(0, -1) }}
      </button>
      <router-link
        :to="'/admin/' + $route.meta.name"
        class="w-full rounded-full border-2 border-darkgray-700 py-4 px-6"
      >
        Cancel
      </router-link>
    </div>

    <vue-basic-alert :duration="300" :closeIn="2000" ref="alert" />
  </form>
</template>

<script>
import { mapActions } from "vuex";
import VueBasicAlert from "vue-basic-alert";

import ItemValidation from "@/validations/ItemValidation.js";

export default {
  name: "ItemForm",
  components: {
    VueBasicAlert,
  },
  data() {
    return {
      activeLocations: "",
      content: {},
      formData: {
        name: "",
        location: "",
        price: "",
        rating: "",
        type: "",
        description: "",
        image: "",
      },
    };
  },
  methods: {
    ...mapActions(["AddTour", "AddEducation", "AddJob", "fetchLocations"]),

    getImageUrl(name) {
      if (name === "") {
        return new URL(`../../assets/shared/placeholder.webp`, import.meta.url)
          .href;
      }
      return new URL(
        `../../assets/shared/${this.$route.meta.name}/${name}.jpg`,
        import.meta.url
      ).href;
    },

    async createProduct() {
      const validation = await ItemValidation(this.formData);

      if (validation.length > 0) {
        this.$refs.alert.showAlert("error", validation[0], "Error");
        return;
      }

      if (this.$route.meta.name === "tours") {
        this.product = await this.AddTour(this.formData).then(() => {
          this.$refs.alert.showAlert(
            "success",
            "Product created successfully",
            "Success"
          );

          setTimeout(() => {
            this.$router.push(`/admin/${this.$route.meta.name}`);
          }, 1000);
        });
      }

      if (this.$route.meta.name === "educations") {
        this.product = await this.AddEducation(this.formData).then(() => {
          this.$refs.alert.showAlert(
            "success",
            "Product created successfully",
            "Success"
          );

          setTimeout(() => {
            this.$router.push(`/admin/${this.$route.meta.name}`);
          }, 1000);
        });
      }

      if (this.$route.meta.name === "jobs") {
        this.product = await this.AddJob(this.formData).then(() => {
          this.$refs.alert.showAlert(
            "success",
            "Product created successfully",
            "Success"
          );

          setTimeout(() => {
            this.$router.push(`/admin/${this.$route.meta.name}`);
          }, 1000);
        });
      }
    },
  },
  async mounted() {
    if (this.$route.meta.name === "tours") {
      this.content = {
        name: "Tour Name",
        description: "Tour Description",
        location: "Tour Location",
        price: "Tour Price",
        rating: "Tour Rating",
        type: "Tour Type",
        image: "Tour Image",
      };
    }

    if (this.$route.meta.name === "educations") {
      this.content = {
        name: "Education Name",
        description: "Education Description",
        location: "Education Location",
        price: "Education Price",
        rating: "Education Rating",
        type: "Education Type",
        image: "Education Image",
      };
    }

    if (this.$route.meta.name === "jobs") {
      this.content = {
        name: "Job Name",
        description: "Job Description",
        location: "Job Location",
        price: "Job Price",
        rating: "Job Rating",
        type: "Job Type",
        image: "Job Image",
      };
    }

    await this.fetchLocations().then(() => {
      this.activeLocations = this.$store.state.locations;
    });
  },
};
</script>

<style lang="scss" scoped></style>
