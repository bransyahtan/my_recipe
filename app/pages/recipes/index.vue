<template>
  <section id="recipes" class="py-20 container">
    <div class="text-center mb-16">
      <h1 class="text-4xl lg:text-6xl font-bold mb-4 text-gray-900">
        Explore All Menus
      </h1>
      <p
        class="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
      >
        Browse through a wide variety of delicious dishes — from quick bites to
        gourmet meals. Find your next favorite recipe!
      </p>
    </div>

    <div
      v-if="!error"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
    >
      <RecipeCard
        v-for="recipe in displayedRecipes"
        :key="recipe.id"
        :recipe="recipe"
      />
    </div>

    <div v-if="!error && hasMoreRecipes" class="text-center mt-12">
      <MyButton
        @click="loadMore"
        :ui="{
          base: 'px-8 py-3 text-lg font-semibold',
        }"
        label="Load More Recipes"
      />
    </div>

    <div
      v-if="!error && !hasMoreRecipes && displayedRecipes.length > 0"
      class="text-center mt-12"
    >
      <p class="text-xl text-gray-600 font-medium">
        You've seen all our recipes! 🎉
      </p>
    </div>

    <div v-else-if="error" class="text-center py-12">
      <p class="text-xl text-red-600 font-medium">
        Oops, something went wrong. Please try again later.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { RecipeResponse } from "~/types/types";

const { data, error } = await useFetch<RecipeResponse>(
  "https://dummyjson.com/recipes?limit=30"
);

useSeoMeta({
  title: "MyRecipes",
  description: "Recipes for you to cook!",
  ogTitle: "MyRecipes",
  ogDescription: "Recipes for you to cook!",
  ogImage: "/food.png",
  ogUrl: `${useRequestURL().origin}/recipes`,
  twitterTitle: "MyRecipes",
  twitterDescription: "Recipes for you to cook!",
  twitterImage: "/food.png",
  twitterCard: "summary",
});

const recipesPerPage = 6;
const currentPage = ref(1);

const displayedRecipes = computed(() => {
  if (!data.value?.recipes) return [];
  return data.value.recipes.slice(0, currentPage.value * recipesPerPage);
});

const hasMoreRecipes = computed(() => {
  if (!data.value?.recipes) return false;
  return displayedRecipes.value.length < data.value.recipes.length;
});

const loadMore = () => {
  currentPage.value++;
};
</script>
