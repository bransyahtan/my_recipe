<template>
  <div
    class="recipe-card group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full"
  >
    <div class="relative overflow-hidden">
      <NuxtImg
        :src="recipe.image"
        sizes="xs:100vw sm:50vw lg:400px"
        format="webp"
        densities="x1"
        :alt="recipe.name"
        class="w-full h-48 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
      />

      <div
        class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      ></div>

      <div
        class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-lg"
      >
        <Icon name="i-mdi-star" class="text-yellow-500 text-sm" />
        <span class="text-sm font-semibold text-gray-800">{{
          recipe.rating
        }}</span>
      </div>

      <div
        class="absolute top-3 left-3 bg-orange-500 text-white rounded-full px-3 py-1 text-sm font-medium shadow-lg"
      >
        {{ recipe.cookTimeMinutes }}m
      </div>
    </div>

    <div class="p-6 flex flex-col h-full">
      <h3
        class="text-xl lg:text-2xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300"
      >
        {{ recipe.name }}
      </h3>

      <div class="grid grid-cols-2 gap-4 mb-6">
        <div class="flex items-center gap-2 text-gray-600">
          <div
            class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center"
          >
            <Icon
              name="i-mdi-clock-time-eight-outline"
              class="text-orange-600 text-sm"
            />
          </div>
          <div class="flex flex-col">
            <span class="text-xs text-gray-500">Cook Time</span>
            <span class="font-semibold">{{ recipe.cookTimeMinutes }} min</span>
          </div>
        </div>

        <div class="flex items-center gap-2 text-gray-600">
          <div
            class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center"
          >
            <Icon name="i-mdi-fire" class="text-red-600 text-sm" />
          </div>
          <div class="flex flex-col">
            <span class="text-xs text-gray-500">Calories</span>
            <span class="font-semibold">{{ recipe.caloriesPerServing }}</span>
          </div>
        </div>

        <div class="flex items-center gap-2 text-gray-600">
          <div
            class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center"
          >
            <Icon name="i-mdi-account-group" class="text-blue-600 text-sm" />
          </div>
          <div class="flex flex-col">
            <span class="text-xs text-gray-500">Reviews</span>
            <span class="font-semibold">{{ recipe.reviewCount }}</span>
          </div>
        </div>

        <div class="flex items-center gap-2 text-gray-600">
          <div
            class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center"
          >
            <Icon name="i-mdi-food-fork-drink" class="text-green-600 text-sm" />
          </div>
          <div class="flex flex-col">
            <span class="text-xs text-gray-500">Servings</span>
            <span class="font-semibold">{{ recipe.servings || 4 }}</span>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap gap-2 mb-6">
        <span
          class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium"
        >
          {{ recipe.cuisine }}
        </span>
        <span
          v-if="recipe.difficulty"
          class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
        >
          {{ recipe.difficulty }}
        </span>
      </div>

      <div class="mt-auto">
        <MyButton
          :to="`/recipes/${recipe.id}`"
          label="View Recipe"
          :custom-class="'w-full !bg-gradient-to-r !from-orange-500 !to-red-500 hover:!from-orange-600 hover:!to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center justify-center'"
        />
      </div>
    </div>

    <div
      class="absolute inset-0 border-2 border-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
    ></div>
  </div>
</template>

<script setup lang="ts">
import type { Recipe } from "~/types/types";

defineProps<{
  recipe: Recipe;
}>();
</script>

<style scoped>
.recipe-card {
  position: relative;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
}

.recipe-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #f97316, #ef4444);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.recipe-card:hover::before {
  transform: scaleX(1);
}

@media (max-width: 640px) {
  .recipe-card {
    margin: 0 0.5rem;
  }
}
</style>
