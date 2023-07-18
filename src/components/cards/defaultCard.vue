<template>
  <li
    class="group h-auto w-full max-w-[24%] flex-[0_0_24%] cursor-pointer overflow-hidden rounded-2xl bg-white shadow-card hover:shadow-card_inner"
    :data-type="data.type"
  >
    <router-link :to="path" class="h-auto w-full">
      <figure class="w-ful h-[20rem] overflow-hidden rounded-2xl">
        <img
          :src="getImage(content.image)"
          alt="image"
          class="ease h-full w-full object-cover transition-all duration-[500ms] group-hover:scale-110"
        />
      </figure>
      <div class="px-5 pb-5">
        <div class="mt-4 flex items-center justify-between">
          <h1 class="text-t-6 font-bold text-darkgray-300">
            {{ content.name }}
          </h1>
          <p
            class="text-md flex w-auto items-center justify-center gap-1 font-bold text-theme"
          >
            <img src="@/assets/shared/star.svg" class="h-5 w-5" alt="icon" />
            {{ content.rating }}
          </p>
        </div>
        <p class="text-sm font-normal text-darkgray-300">
          {{ content.location }}
        </p>
        <div class="flex h-auto w-full items-center justify-between">
          <div class="mt-2 flex h-auto w-auto items-start justify-start gap-2">
            <p
              class="w-max rounded-xl bg-gray-200 px-4 py-2 text-sm font-normal text-darkgray-300"
            >
              {{ content.type }}
            </p>
          </div>
          <p class="text-md font-semibold text-theme">
            {{ $filters.currency(content.price) }}
          </p>
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "DefaultCard",
  props: {
    data: {
      type: Object,
      required: true,
    },
    path: {
      type: String,
      default: "/",
    },
    type: {
      type: String,
      default: "default",
    },
  },
  data() {
    return {
      content: {},
    };
  },
  mounted() {
    if (this.type === "tours") {
      this.content = {
        name: this.data.tour_name,
        image: this.data.tour_image,
        rating: this.data.tour_rating,
        location: this.data.tour_location,
        type: this.data.tour_type,
        price: this.data.tour_price,
      };
    }

    if (this.type === "educations") {
      this.content = {
        name: this.data.education_name,
        image: this.data.education_image,
        rating: this.data.education_rating,
        location: this.data.education_location,
        type: this.data.education_type,
        price: this.data.education_price,
      };
    }

    if (this.type === "jobs") {
      this.content = {
        name: this.data.job_name,
        image: this.data.job_image,
        rating: this.data.job_rating,
        location: this.data.job_location,
        type: this.data.job_type,
        price: this.data.job_price,
      };
    }
  },
  methods: {
    getImage(data) {
      if (this.type === "tours") {
        return new URL(`../../assets/shared/tours/${data}.jpg`, import.meta.url)
          .href;
      }

      if (this.type === "educations") {
        return new URL(
          `../../assets/shared/educations/${data}.jpg`,
          import.meta.url
        ).href;
      }

      if (this.type === "jobs") {
        return new URL(`../../assets/shared/jobs/${data}.jpg`, import.meta.url)
          .href;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
