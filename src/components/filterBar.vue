<template>
  <div class="h-auto w-full border-b-2 border-darkgray-800 bg-white pt-28 pb-8">
    <div
      class="container mx-auto flex h-full w-full max-w-[90%] items-center justify-start gap-10"
    >
      <input
        type="text"
        :placeholder="placeholder"
        class="w-1/3 rounded-full border-none bg-gray-100 px-10 py-4 text-xl font-semibold"
        v-model="search"
      />

      <select
        name="locations"
        id="locations"
        @change.prevent="changeLocation"
        class="h-auto w-auto rounded-full border-0 bg-gray-100 py-4 pl-10 pr-20 text-xl font-semibold text-gray-500"
      >
        <option value="all">All Locations</option>
        <option
          v-for="location in locations"
          :key="location.location_id"
          :value="location.location_name"
        >
          {{ location.location_name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "FilterBar",
  data() {
    return {
      placeholder: "",
      search: "",
      location: "",
    };
  },
  async mounted() {
    switch (this.$route.meta.name) {
      case "tours":
        this.placeholder = "Search Destinations";
        break;

      case "educations":
        this.placeholder = "Search Destinations";
        break;

      case "jobs":
        this.placeholder = "Search Jobs";
        break;

      default:
        this.placeholder = "Search";
        break;
    }

    await this.fetchLocations();
  },
  methods: {
    ...mapActions([
      "searchTours",
      "searchEducations",
      "searchJobs",
      "fetchLocations",
      "updateLocationSelectTour",
      "updateLocationSelectEducation",
      "updateLocationSelectJob",
    ]),

    searchHandler() {
      switch (this.$route.meta.name) {
        case "tours":
          this.searchTours(this.search);
          break;

        case "educations":
          this.searchEducations(this.search);
          break;

        case "jobs":
          this.searchJobs(this.search);
          break;

        default:
          break;
      }
    },

    changeLocation(e) {
      this.location = e.target.value;
      if (this.$route.meta.name == "tours") {
        this.updateLocationSelectTour(this.location);
      }

      if (this.$route.meta.name == "educations") {
        this.updateLocationSelectEducation(this.location);
      }

      if (this.$route.meta.name == "jobs") {
        this.updateLocationSelectJob(this.location);
      }
    },
  },
  computed: {
    ...mapState(["locations"]),
  },
  watch: {
    search() {
      console.log(this.search);
      this.searchHandler();
    },
  },
};
</script>

<style lang="scss" scoped></style>
