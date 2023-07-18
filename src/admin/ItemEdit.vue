<template>
  <AdminLayout class="min-h-screen bg-darkgray-900">
    <div class="container mx-auto h-full max-w-[90%] py-20">
      <h1 class="text-center text-t-4 font-bold text-theme">
        Edit {{ title.slice(0, -1) }}
      </h1>
      <EditForm />
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/admin.vue";
import EditForm from "@/components/forms/EditForm.vue";

export default {
  name: "ItemEdit",
  data() {
    return {
      title: "",
    };
  },
  components: {
    EditForm,
    AdminLayout,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.title = this.$route.meta.name;
  },
};
</script>

<style lang="scss" scoped></style>
