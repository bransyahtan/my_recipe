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
  height: 500,
  itemsToShow: 1.2,
  gap: 12,
  wrapAround: true,
  snapAlign: "start" as const,
  transition: 500,
  autoplay: 0,
  pauseAutoplayOnHover: true,
  breakpoints: {
    640: {
      itemsToShow: 1.5,
      gap: 16,
    },
    768: {
      itemsToShow: 2.2,
      gap: 20,
    },
    1024: {
      itemsToShow: 3.2,
      gap: 24,
    },
    1280: {
      itemsToShow: 3.5,
      gap: 28,
    },
    1536: {
      itemsToShow: 4,
      gap: 32,
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

/* Custom navigation styling */
.carousel__prev,
.carousel__next {
  background: rgba(255, 255, 255, 0.9) !important;
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
  transition: all 0.3s ease !important;
  border-radius: 50% !important;
  width: 40px !important;
  height: 40px !important;
}

.carousel__prev:hover,
.carousel__next:hover {
  background: white !important;
  transform: scale(1.1) !important;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15) !important;
}

.carousel__icon {
  color: #374151 !important;
  font-size: 1.5rem !important;
}
</style>
