<template>
  <mainLayout title="jobs">
    <div class="h-auto min-h-screen w-full bg-darkgray-900 py-[5rem]">
      <transition-group
        name="list"
        tag="ul"
        class="container mx-auto flex h-full max-w-[90%] flex-wrap items-start justify-start gap-x-[1.25%] gap-y-8"
      >
        <default-card
          v-for="item in searchJobs"
          :key="item.job_id"
          :data="item"
          :path="`/jobs/details/${item.job_id}`"
          type="jobs"
        />
      </transition-group>
    </div>
  </mainLayout>
</template>

<script>
import { mapActions, mapState } from "vuex";
import mainLayout from "@/layouts/main.vue";
import DefaultCard from "@/components/cards/defaultCard.vue";

export default {
  name: "Jobs",
  components: {
    mainLayout,
    DefaultCard,
  },
  computed: {
    ...mapState(["searchJobs"]),
  },
  methods: {
    ...mapActions(["fetchJobs"]),
  },
  async mounted() {
    await this.fetchJobs();
  },
};
</script>

<style scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
