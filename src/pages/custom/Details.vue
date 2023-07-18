<template>
  <mainLayout title="detail">
    <!-- loader start -->
    <div
      class="flex h-screen w-screen flex-col items-center justify-center"
      v-if="loading"
    >
      <figure class="h-auto w-1/2">
        <LazyLoadImage
          src="https://images.prismic.io/ssssssssss/bfbba243-b482-4282-96b7-015feb73e690_loader.gif?auto=compress,format"
          alter="Loader gif"
        />
      </figure>
      <h1 class="text-t-4">Loading...</h1>
    </div>
    <!-- loader end -->

    <div class="h-auto min-h-screen w-screen" v-else>
      <!-- banner start -->
      <div
        class="container mx-auto flex h-full max-w-[90%] items-start justify-between pt-[7.5rem] pb-[2.5rem]"
      >
        <!-- big picture start -->
        <figure class="h-[50rem] w-full overflow-hidden rounded-3xl">
          <img
            :src="getImage(content.image)"
            alt="image"
            class="h-full w-full"
          />
        </figure>
        <!-- big picture end -->
      </div>
      <!-- banner end -->
      <!-- info start -->
      <div
        class="container mx-auto flex h-full max-w-[90%] items-start justify-between pb-[10rem]"
      >
        <!-- left side start -->
        <div class="h-auto w-full max-w-[60%] flex-[0_0_60%]">
          <h1 class="text-t-3 font-semibold text-theme">
            {{ content.name }}
          </h1>
          <p class="text-xl text-gray-500">{{ content.location }}, Gujarat</p>
          <div class="mt-[2rem] h-0.5 w-full bg-gray-600/25"></div>
          <p class="mt-[2rem] text-xl leading-10 text-gray-600">
            {{ content.description }}
          </p>
        </div>
        <!-- left side end -->
        <!-- right side start -->
        <div class="h-auto w-full max-w-[40%] flex-[0_0_40%]"></div>
        <!-- right side end -->
      </div>
      <!-- info end -->
    </div>
  </mainLayout>
</template>

<script>
import { mapActions } from "vuex";
import mainLayout from "@/layouts/main.vue";

export default {
  name: "Details",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      content: {},
      loading: true,
    };
  },
  components: {
    mainLayout,
  },
  methods: {
    ...mapActions(["fetchTourById", "fetchEducationById", "fetchJobById"]),

    getImage(data) {
      if (this.$route.meta.name === "tours") {
        return new URL(`../../assets/shared/tours/${data}.jpg`, import.meta.url)
          .href;
      }

      if (this.$route.meta.name === "educations") {
        return new URL(
          `../../assets/shared/educations/${data}.jpg`,
          import.meta.url
        ).href;
      }

      if (this.$route.meta.name === "jobs") {
        return new URL(`../../assets/shared/jobs/${data}.jpg`, import.meta.url)
          .href;
      }
    },
  },
  async mounted() {
    if (this.$route.meta.name === "tours") {
      await this.fetchTourById(this.id).then((res) => {
        const response = res;
        this.content = {
          name: response.tour_name,
          image: response.tour_image,
          description: response.tour_description,
          rating: response.tour_rating,
          location: response.tour_location,
          type: response.tour_type,
          price: response.tour_price,
        };
        this.loading = false;
      });
    }

    if (this.$route.meta.name === "educations") {
      await this.fetchEducationById(this.id).then((res) => {
        const response = res;
        this.content = {
          name: response.education_name,
          image: response.education_image,
          description: response.education_description,
          rating: response.education_rating,
          location: response.education_location,
          type: response.education_type,
          price: response.education_price,
        };
        this.loading = false;
      });
    }

    if (this.$route.meta.name === "jobs") {
      await this.fetchJobById(this.id).then((res) => {
        const response = res;
        this.content = {
          name: response.job_name,
          image: response.job_image,
          description: response.job_description,
          rating: response.job_rating,
          location: response.job_location,
          type: response.job_type,
          price: response.job_price,
        };
        this.loading = false;
      });
    }
  },
};
</script>

<style lang="scss" scoped></style>
