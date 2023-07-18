<template>
  <AdminLayout class="min-h-screen bg-darkgray-900">
    <div class="container mx-auto h-full max-w-[90%] py-20">
      <h1 class="text-center text-t-4 font-bold text-theme">
        Create New {{ title }}
      </h1>
      <ItemForm />
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/admin.vue";
import ItemForm from "@/components/forms/ItemForm.vue";
export default {
  name: "AdminItemCreate",
  data() {
    return {
      title: "",
    };
  },
  components: {
    ItemForm,
    AdminLayout,
  },
  mounted() {
    if (this.$route.meta.name === "tours") {
      this.title = "Tour";
    }

    if (this.$route.meta.name === "educations") {
      this.title = "Education";
    }

    if (this.$route.meta.name === "jobs") {
      this.title = "Job";
    }
  },
};
</script>

<style lang="scss" scoped></style>
