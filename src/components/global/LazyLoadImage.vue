<template>
  <img
    :data-src="src"
    :alt="alter"
    class="ease h-full w-full object-cover opacity-0 transition-all duration-[500ms] group-hover:scale-110"
  />
</template>

<script>
export default {
  name: "LazyLoadImage",
  props: {
    src: {
      type: String,
      required: true,
    },
    alter: {
      type: String,
    },
  },
  mounted() {
    const img = this.$el;
    img.setAttribute("src", "");
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const imgSrc = img.getAttribute("data-src");
          if (imgSrc) {
            img.setAttribute("src", this.src);
            img.classList.remove("opacity-0");
            img.classList.add("opacity-100");
            imgObserver.unobserve(img);
          }
        }
      });
    });
    imgObserver.observe(img);
  },
};
</script>

<style lang="scss" scoped></style>
