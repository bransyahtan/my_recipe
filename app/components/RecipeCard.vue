<template>
  <div class="flex flex-col shadow rounded-md h-full">
    <NuxtImg
      :src="recipe.image"
      sizes="xs:100vw sm:50vw lg:400px"
      format="webp"
      densities="x1"
      alt=""
      class="rounded-t-md"
    />
    <div class="flex flex-col py-6 px-4 flex-1">
      <p class="text-xl lg:text-2xl font-semibold mb-2">{{ recipe.name }}</p>
      <div
        class="font-normal w-full bg-white/80 flex flex-col gap-2 text-lg lg:text-xl mb-4 mt-auto"
      >
        <div class="flex gap-8">
          <div class="flex items-center gap-1">
            <Icon
              name="i-mdi-clock-time-eight-outline"
              class="text-dodgeroll-gold-500"
            />
            <span>{{ recipe.cookTimeMinutes }} Mins</span>
          </div>
          <div class="flex items-center gap-1">
            <Icon name="i-mdi-fire" class="text-dodgeroll-gold-500" />
            <span>{{ recipe.caloriesPerServing }} Calories</span>
          </div>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="i-mdi-star" class="text-dodgeroll-gold-500" />
          <span>{{ recipe.rating }} ({{ recipe.reviewCount }}) Reviews</span>
        </div>
      </div>
      <MyButton
        :ui="{
          base: 'self-start',
        }"
        :to="`/recipes/${recipe.id}`"
        label="View"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Recipe } from "~/types/types";

defineProps<{
  recipe: Recipe;
}>();
</script>
