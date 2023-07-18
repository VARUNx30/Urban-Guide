<template>
  <AdminLayout class="min-h-screen bg-darkgray-900">
    <div class="container mx-auto h-full max-w-[90%] py-20">
      <div class="flex h-auto w-full items-center justify-between">
        <h1 class="text-center text-t-4 font-bold text-theme">
          Active Locations
        </h1>

        <button
          class="rounded-full bg-theme py-4 px-10 text-white"
          @click.prevent="openBox"
        >
          Add Location
        </button>
      </div>

      <transition-group
        name="list"
        tag="ul"
        class="mt-10 flex h-auto w-full flex-wrap items-start justify-start gap-x-[2%] gap-y-10"
      >
        <li
          v-for="item in products"
          :key="item.location_id"
          class="flex h-auto w-full max-w-[32%] flex-[0_0_32%] flex-col items-center justify-start gap-5 rounded-lg bg-white p-10 shadow"
        >
          <h1 class="text-t-6 font-medium text-theme">
            {{ item.location_name }}
          </h1>
          <div class="h-[1px] w-full bg-black-900/25"></div>
          <button
            class="rounded-full bg-theme py-4 px-6 text-white"
            @click.prevent="openPopup(item.location_id)"
          >
            Delete
          </button>
        </li>
      </transition-group>
    </div>

    <!-- popup start -->
    <div
      class="fixed top-0 left-0 z-10 grid h-screen w-full place-items-center bg-white/50 text-center"
      v-if="popup"
    >
      <div class="h-auto w-auto rounded-3xl bg-gray-100 p-20 shadow">
        <h1 class="text-quaternary text-3xl font-semibold">Delete Location</h1>
        <p class="my-4 text-lg font-medium">
          Are you sure you want to delete this location?
        </p>
        <div
          class="flex h-auto w-full flex-col items-center justify-center gap-4"
        >
          <button
            class="w-full rounded-full bg-theme py-4 px-6 text-white"
            @click.prevent="deleteProduct"
          >
            Yes
          </button>
          <button
            class="w-full rounded-full border-2 border-darkgray-700 py-4 px-6"
            @click.prevent="closePopup"
          >
            No
          </button>
        </div>
      </div>
    </div>
    <!-- popup end -->

    <!-- new popup start -->

    <div
      class="fixed top-0 left-0 z-10 grid h-screen w-full place-items-center bg-white/50 text-center"
      v-if="open"
    >
      <div class="h-auto w-auto rounded-lg bg-gray-100 p-20 shadow">
        <input
          type="email"
          id="uEmail"
          name="uEmail"
          placeholder="Enter new location"
          class="rounded-full border-none bg-white px-10 py-6 text-xl font-semibold"
          v-model="newProduct"
        />
        <div class="mt-10 flex h-auto w-full items-center justify-center gap-4">
          <button
            class="w-full rounded-full bg-theme py-6 px-6 text-lg text-white"
            @click.prevent="createProduct"
          >
            Yes
          </button>
          <button
            class="w-full rounded-full border-2 border-darkgray-700 py-6 px-6 text-lg"
            @click.prevent="closeBox"
          >
            No
          </button>
        </div>
      </div>
    </div>
    <!-- new popup end -->

    <vue-basic-alert :duration="300" :closeIn="2000" ref="alert" />
  </AdminLayout>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AdminLayout from "@/layouts/admin.vue";
import VueBasicAlert from "vue-basic-alert";

export default {
  name: "Locations",
  data() {
    return {
      popup: false,
      deleteId: null,
      open: false,
      products: [],
      newProduct: "",
    };
  },
  components: {
    AdminLayout,
    VueBasicAlert,
  },
  computed: {
    ...mapState(["locations"]),
  },
  methods: {
    ...mapActions(["fetchLocations", "deleteLocationById", "createLocation"]),

    openPopup: function (id) {
      this.popup = true;
      this.deleteId = id;
    },

    closePopup: function () {
      this.popup = false;
      this.deleteId = null;
    },

    openBox: function () {
      this.open = true;
    },

    closeBox: function () {
      this.open = false;
    },

    async deleteProduct() {
      await this.deleteLocationById(this.deleteId);

      this.$refs.alert.showAlert(
        "success",
        "Delete location successfully",
        "You have successfully deleted the location."
      );

      setTimeout(() => {
        this.fetchLocations().then((res) => {
          this.products = res;
          this.closePopup();
        });
      }, 500);
    },

    async createProduct() {
      await this.createLocation(this.newProduct);

      this.$refs.alert.showAlert(
        "success",
        "Create location successfully",
        "You have successfully created the location."
      );

      setTimeout(() => {
        this.fetchLocations().then((res) => {
          this.products = res;
          this.closeBox();
          this.newProduct = "";
        });
      }, 500);
    },
  },
  async mounted() {
    await this.fetchLocations().then((res) => {
      this.products = res;
    });
  },
};
</script>

<style lang="scss" scoped></style>
