<template>
  <router-link
    class="ease rounded-md bg-darkgray-200 py-3 px-6 text-darkgray-900 transition-all duration-500 hover:bg-theme"
    :to="url"
    >{{ text }}</router-link
  >
</template>

<script>
export default {
  name: "btnBase",
  props: {
    text: {
      type: String,
      default: "Button",
    },
    url: {
      type: String,
      default: "#",
    },
  },
};
</script>

<style lang="scss" scoped></style>
