<template>
  <main>
    <section class="hero relative overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-pink-500"
      ></div>
      <div class="absolute inset-0 bg-black/10"></div>

      <div
        class="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"
      ></div>
      <div
        class="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-bounce"
      ></div>

      <div
        class="container relative z-10 flex flex-col lg:flex-row items-center py-24 lg:py-32 gap-12"
      >
        <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
          <div class="mb-6">
            <span
              class="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4 border border-white/30"
            >
              🍳 Fresh Recipes Daily
            </span>
          </div>

          <h1
            class="text-4xl lg:text-7xl font-black mb-8 text-white leading-tight"
          >
            <span class="block">Cook with</span>
            <span
              class="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300"
              >Confidence</span
            >
          </h1>

          <p
            class="text-xl lg:text-2xl mb-10 text-white/90 leading-relaxed max-w-2xl"
          >
            Discover mouthwatering recipes that fit your lifestyle. From quick
            weeknight dinners to impressive weekend feasts.
          </p>

          <div
            class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <MyButton to="/recipes" label="Explore Recipes" />
          </div>

          <!-- Stats -->
          <div class="flex justify-center lg:justify-start gap-8 mt-12">
            <div class="text-center">
              <div class="text-2xl font-bold text-white">500+</div>
              <div class="text-white/70 text-sm">Recipes</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-white">50K+</div>
              <div class="text-white/70 text-sm">Happy Cooks</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-white">4.9★</div>
              <div class="text-white/70 text-sm">Rating</div>
            </div>
          </div>
        </div>

        <div class="flex-1 order-1 lg:order-2 relative">
          <div class="relative">
            <!-- Glow effect -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl blur-2xl opacity-30 animate-pulse"
            ></div>

            <!-- Image container dengan styling modern -->
            <div
              class="relative bg-white/10 backdrop-blur-sm rounded-3xl p-4 border border-white/20 shadow-2xl"
            >
              <NuxtImg
                sizes="xs:100vw sm:667px"
                src="/food.png"
                format="webp"
                densities="x1"
                alt="Delicious food showcase"
                class="rounded-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            <!-- Floating badges -->
            <div
              class="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg"
            >
              <span class="text-2xl">👨‍🍳</span>
            </div>
            <div
              class="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg"
            >
              <span class="text-2xl">⭐</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="recipes" class="py-20 container">
      <h2 class="text-3xl lg:text-5xl mb-2">Discover, Create, Share</h2>
      <p class="text-lg lg:text-xl mb-8">Check out our most popular recipes!</p>

      <!-- Recipe Carousel -->
      <RecipeCarousel v-if="!error && data?.recipes" :recipes="data.recipes" />

      <p v-else-if="error" class="text-xl">
        Opps, something went wrong. Please try again later
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
import type { RecipeResponse } from "~/types/types";

const { data, error } = await useFetch<RecipeResponse>(
  "https://dummyjson.com/recipes?limit=6"
);

useSeoMeta({
  title: "Nuxtcipes",
  description: "Recipes for you to cook!",
  ogTitle: "Nuxtcipes",
  ogDescription: "Recipes for you to cook!",
  ogImage: "/nuxt-course-hero.png",
  ogUrl: `http:localhost:3000`,
  twitterTitle: "Nuxtcipes",
  twitterDescription: "Recipes for you to cook!",
  twitterImage: "/nuxt-course-hero.png",
  twitterCard: "summary",
});
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
