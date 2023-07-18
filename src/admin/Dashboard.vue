<template>
  <AdminLayout class="min-h-screen bg-darkgray-900">
    <div class="container mx-auto h-full max-w-[90%] py-20">
      <h1 class="text-center text-t-4 font-bold text-theme">Admin Dashboard</h1>
      <div
        class="mt-20 flex h-auto w-full flex-wrap items-start justify-start gap-x-[5%] gap-y-20"
      >
        <router-link
          to="/admin/tours"
          class="flex h-auto w-full max-w-[45%] flex-[0_0_45%] items-center justify-center gap-8 rounded-3xl bg-white py-10 shadow"
        >
          <figure class="h-40 w-40 overflow-hidden rounded-full">
            <img
              src="@/assets/shared/bg-1.jpg"
              alt="error"
              class="h-full w-full"
            />
          </figure>
          <div class="h-auto w-auto">
            <h1 class="text-t-5 font-medium text-theme">Active Tours</h1>
          </div>
        </router-link>
        <router-link
          to="/admin/educations"
          class="flex h-auto w-full max-w-[45%] flex-[0_0_45%] items-center justify-center gap-8 rounded-3xl bg-white py-10 shadow"
        >
          <figure class="h-40 w-40 overflow-hidden rounded-full">
            <img
              src="@/assets/shared/bg-2.jpg"
              alt="error"
              class="h-full w-full"
            />
          </figure>
          <div class="h-auto w-auto">
            <h1 class="text-t-5 font-medium text-theme">Active Educations</h1>
          </div>
        </router-link>
        <router-link
          to="/admin/jobs"
          class="flex h-auto w-full max-w-[45%] flex-[0_0_45%] items-center justify-center gap-8 rounded-3xl bg-white py-10 shadow"
        >
          <figure class="h-40 w-40 overflow-hidden rounded-full">
            <img
              src="@/assets/shared/bg-1.jpg"
              alt="error"
              class="h-full w-full"
            />
          </figure>
          <div class="h-auto w-auto">
            <h1 class="text-t-5 font-medium text-theme">Active Jobs</h1>
          </div>
        </router-link>
        <router-link
          to="/admin/locations"
          class="flex h-auto w-full max-w-[45%] flex-[0_0_45%] items-center justify-center gap-8 rounded-3xl bg-white py-10 shadow"
        >
          <figure class="h-40 w-40 overflow-hidden rounded-full">
            <img
              src="@/assets/shared/bg-2.jpg"
              alt="error"
              class="h-full w-full"
            />
          </figure>
          <div class="h-auto w-auto">
            <h1 class="text-t-5 font-medium text-theme">Active Locations</h1>
          </div>
        </router-link>
      </div>
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/admin.vue";
export default {
  name: "Dashboard",
  components: {
    AdminLayout,
  },
};
</script>

<style lang="scss" scoped></style>
