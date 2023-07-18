<template>
  <div :class="['h-auto w-screen', title]">
    <FilterBar
      v-if="
        ($route.meta.name === 'tours' ||
          $route.meta.name === 'educations' ||
          $route.meta.name === 'jobs') &&
        $route.meta.details === false
      "
    />
    <slot />
    <Footer v-if="$route.meta.name === 'home'" />
  </div>
</template>

<script>
import FilterBar from "@/components/FilterBar.vue";
import Footer from "@/partials/Footer.vue";
export default {
  name: "mainLayout",
  props: {
    title: {
      type: String,
      default: "page",
    },
  },
  components: {
    Footer,
    FilterBar,
  },
};
</script>

<style lang="scss" scoped></style>
