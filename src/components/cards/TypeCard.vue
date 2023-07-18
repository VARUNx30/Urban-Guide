<template>
  <div
    class="group flex max-w-[30%] flex-[0_0_30%] flex-col items-center justify-center gap-4 rounded-2xl bg-darkgray-900 p-20 text-center text-darkgray-400"
  >
    <figure class="h-40 w-40">
      <LazyLoadImage :src="getImage(image)" alt="title" class="object-fill" />
    </figure>
    <h1 class="text-t-4 font-medium">{{ title }}</h1>
    <p class="text-lg">
      {{ description }}
    </p>
    <btnBase text="Explore" :url="url" />
  </div>
</template>

<script>
export default {
  name: "TypeCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  methods: {
    getImage(image) {
      const url = `../../assets/shared/${image}`;
      return new URL(url, import.meta.url).href;
    },
  },
};
</script>

<style lang="scss" scoped></style>
