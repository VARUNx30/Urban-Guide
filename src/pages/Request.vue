<template>
  <mainLayout title="jobs" class="bg-darkgray-900">
    <div class="h-auto w-full pt-28">
      <h1 class="text-center text-t-4 font-bold text-theme">
        Request to add new Things
      </h1>
      <p class="text-center text-sm text-darkgray-500">
        like. Tours, Educations destinations or jobs posting
      </p>
    </div>
    <div class="h-auto w-full">
      <div class="container mx-auto h-full max-w-[90%] pt-10 pb-40">
        <RequestForm />
      </div>
    </div>
  </mainLayout>
</template>

<script>
import mainLayout from "@/layouts/main.vue";
import RequestForm from "@/components/forms/RequestForm.vue";

export default {
  name: "Request",
  components: {
    mainLayout,
    RequestForm,
  },
};
</script>

<style lang="scss" scoped></style>
