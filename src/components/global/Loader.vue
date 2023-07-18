<template>
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
</template>

<script>
export default {
  name: "LoaderBox",
};
</script>

<style lang="scss" scoped></style>
