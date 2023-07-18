<template>
  <mainLayout title="home">
    <!-- home banner start -->
    <section class="h-screen w-screen overflow-hidden">
      <div class="container mx-auto grid h-full max-w-[90%] place-items-center">
        <figure
          class="relative mt-20 h-auto w-full overflow-hidden rounded-[20px] shadow"
        >
          <img
            src="@/assets/shared/image.png"
            alt="Image"
            class="h-[50rem] w-full"
          />
          <div
            class="absolute bottom-[3rem] left-[3rem] h-auto w-[60rem] overflow-hidden rounded-xl shadow"
          >
            <div
              class="absolute bottom-[3rem] left-[3rem] w-[30rem] rounded-md bg-darkgray-900/25 p-16 text-darkgray-300 backdrop-blur-md"
            >
              <h1 class="text-t-4 font-medium leading-[1.2]">
                Want to go on an adventure?
              </h1>
              <p class="mt-2 mb-6 text-xl font-light">
                We are here to help you find the best places to visit in the
                world.
              </p>
              <!-- <a href="/" class="btn">Explore </a> -->
              <btnBase text="Explore" url="/tours" />
            </div>
            <figure class="h-auto w-full">
              <img
                src="@/assets/shared/giphy.gif"
                alt="Image"
                class="h-auto w-full"
              />
            </figure>
          </div>
        </figure>
      </div>
    </section>
    <!-- home banner end -->
    <!-- home categories start -->
    <section class="h-auto w-screen overflow-hidden">
      <div class="container mx-auto h-full max-w-[90%] py-20">
        <h1 class="mb-10 text-t-3 text-darkgray-300">Find your passions</h1>
        <div class="mt-5 flex h-auto w-full items-start justify-between">
          <TypeCard
            title="Tourist"
            description="You can find information about some of the most exciting tourist destinations in the world! Whether you're looking for a peaceful getaway, a thrilling adventure, or a cultural experience, we've got you covered"
            image="tourist.svg"
            url="/tours"
          />
          <TypeCard
            title="Education"
            description="Your ultimate destination for all things related to education and academic success. We are committed to providing students with a wide range of resources, tools, and guidance to help them achieve their academic and personal goals"
            image="education.svg"
            url="/educations"
          />
          <TypeCard
            title="Jobs"
            description="The perfect resource for job seekers who are looking for new opportunities and career growth. We are dedicated to helping job seekers find the right job for them, no matter their industry or experience level"
            image="jobs.svg"
            url="/jobs"
          />
        </div>
      </div>
    </section>
    <!-- home categories end -->
  </mainLayout>
</template>

<script>
import mainLayout from "@/layouts/main.vue";
import TypeCard from "@/components/cards/TypeCard.vue";
export default {
  name: "HomePage",
  components: {
    TypeCard,
    mainLayout,
  },
};
</script>

<style lang="scss" scoped></style>
