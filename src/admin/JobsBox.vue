<template>
  <AdminLayout class="min-h-screen bg-darkgray-900">
    <div class="container mx-auto h-full max-w-[90%] py-20">
      <div class="flex h-auto w-full items-center justify-between">
        <h1 class="text-center text-t-4 font-bold text-theme">Active Jobs</h1>
        <router-link
          to="/admin/jobs/create"
          class="rounded-full bg-theme py-4 px-10 text-white"
        >
          Add Job
        </router-link>
      </div>
      <div
        class="mt-10 flex h-auto w-full flex-col items-start justify-center gap-8"
      >
        <admin-item
          v-for="product in products"
          :key="product.job_id"
          :data="product"
          :link="product.job_id"
          type="jobs"
          :method="openPopup"
        />
      </div>
    </div>
    <!-- popup start -->
    <div
      class="fixed top-0 left-0 z-10 grid h-screen w-full place-items-center bg-white/50 text-center"
      v-if="popup"
    >
      <div class="h-auto w-auto rounded-3xl bg-gray-100 p-20 shadow">
        <h1 class="text-quaternary text-3xl font-semibold">Delete Product</h1>
        <p class="my-4 text-lg font-medium">
          Are you sure you want to delete this product?
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
    <vue-basic-alert :duration="300" :closeIn="2000" ref="alert" />
  </AdminLayout>
</template>

<script>
import { mapActions } from "vuex";
import VueBasicAlert from "vue-basic-alert";
import AdminLayout from "@/layouts/admin.vue";
import AdminItem from "@/components/cards/AdminItem.vue";

export default {
  name: "JobsBox",
  data() {
    return {
      products: [],
      popup: false,
      deleteId: null,
    };
  },
  components: {
    AdminLayout,
    AdminItem,
    VueBasicAlert,
  },
  methods: {
    ...mapActions(["fetchJobs", "deleteJobById"]),

    openPopup: function (id) {
      this.popup = true;
      this.deleteId = id;
    },

    closePopup: function () {
      this.popup = false;
      this.deleteId = null;
    },

    async deleteProduct() {
      await this.deleteJobById(this.deleteId);

      this.$refs.alert.showAlert(
        "success",
        "Delete product successfully",
        "You have successfully deleted the product."
      );
      setTimeout(() => {
        this.fetchJobs().then((res) => {
          this.products = res;
          this.closePopup();
        });
      }, 1500);
    },
  },
  async mounted() {
    this.fetchJobs().then((res) => {
      this.products = res;
    });
  },
};
</script>

<style lang="scss" scoped></style>
