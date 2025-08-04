<template>
  <Carousel v-bind="config">
    <Slide v-for="recipe in recipes" :key="recipe.id">
      <RecipeCard :recipe="recipe" />
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/carousel.css";
import type { Recipe } from "~/types/types";

interface Props {
  recipes: Recipe[];
}

const props = defineProps<Props>();

const config = {
  height: 600,
  itemsToShow: 1.2,
  gap: 16,
  wrapAround: true,
  snapAlign: "start" as const,
  transition: 500,
  autoplay: 0,
  pauseAutoplayOnHover: true,
  breakpoints: {
    768: {
      itemsToShow: 2,
      gap: 20,
    },
    1024: {
      itemsToShow: 3,
      gap: 24,
    },
  },
};
</script>

<style>
img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
