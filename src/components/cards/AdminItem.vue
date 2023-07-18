<template>
  <div
    class="flex h-auto w-full items-center justify-between rounded-lg bg-white p-10 shadow"
  >
    <figure class="h-40 w-40 overflow-hidden rounded-full">
      <img
        :src="getImageUrl(content.image)"
        :alt="content.name"
        class="h-full w-full object-cover"
      />
    </figure>
    <div class="h-auto w-full max-w-[40%] flex-[0_0_40%]">
      <h1 class="text-t-5 font-medium text-theme">
        {{ content.name }}
      </h1>
      <p class="text-sm font-bold text-darkgray-300">
        {{ content.location }}
      </p>
      <div
        class="mt-2 flex h-auto w-full flex-col items-start justify-start gap-2"
      >
        <div class="h-2 w-full rounded-lg bg-darkgray-800"></div>
        <div class="h-2 w-[80%] rounded-lg bg-darkgray-800"></div>
        <div class="h-2 w-1/2 rounded-lg bg-darkgray-800"></div>
      </div>
    </div>
    <div class="flex h-auto w-auto items-center justify-center gap-4">
      <router-link
        :to="`/admin/${type}/edit/${link}`"
        class="w-full rounded-full border-2 border-darkgray-700 py-4 px-6"
      >
        Edit
      </router-link>
      <button
        class="w-full rounded-full bg-theme py-4 px-6 text-white"
        @click.prevent="method(content.id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminItem",
  props: {
    type: {
      type: String,
      required: true,
    },
    link: {
      type: Number,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
    method: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      content: {},
    };
  },
  methods: {
    getImageUrl(data) {
      return new URL(
        `../../assets/shared/${this.type}/${data}.jpg`,
        import.meta.url
      ).href;
    },
  },
  mounted() {
    if (this.type === "tours") {
      this.content = {
        id: this.data.tour_id,
        name: this.data.tour_name,
        description: this.data.tour_description,
        image: this.data.tour_image,
        rating: this.data.tour_rating,
        location: this.data.tour_location,
        type: this.data.tour_type,
        price: this.data.tour_price,
      };
    }

    if (this.type === "educations") {
      this.content = {
        id: this.data.education_id,
        name: this.data.education_name,
        description: this.data.education_description,
        image: this.data.education_image,
        rating: this.data.education_rating,
        location: this.data.education_location,
        type: this.data.education_type,
        price: this.data.education_price,
      };
    }

    if (this.type === "jobs") {
      this.content = {
        id: this.data.job_id,
        name: this.data.job_name,
        description: this.data.job_description,
        image: this.data.job_image,
        rating: this.data.job_rating,
        location: this.data.job_location,
        type: this.data.job_type,
        price: this.data.job_price,
      };
    }
  },
};
</script>

<style lang="scss" scoped></style>
