<template>
  <div class="relative">
    <!-- Navigation Buttons -->
    <ClientOnly>
      <button
        @click="scrollLeft"
        class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
        :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
        :disabled="currentIndex === 0"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>

      <button
        @click="scrollRight"
        class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
        :class="{ 'opacity-50 cursor-not-allowed': isAtEnd }"
        :disabled="isAtEnd"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </ClientOnly>

    <!-- Carousel Track -->
    <div
      ref="carouselRef"
      class="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
      @scroll="updateCurrentIndex"
    >
      <div
        v-for="recipe in recipes"
        :key="recipe.id"
        class="flex-shrink-0 w-80"
      >
        <RecipeCard :recipe="recipe" />
      </div>
    </div>

    <!-- Dots Indicator -->
    <ClientOnly>
      <div class="flex justify-center mt-6 gap-2">
        <button
          v-for="(_, index) in dotCount"
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="
            index === currentIndex
              ? 'bg-blue-600'
              : 'bg-gray-300 hover:bg-gray-400'
          "
        ></button>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import type { Recipe } from "~/types/types";

interface Props {
  recipes: Recipe[];
}

const props = defineProps<Props>();

// Carousel state
const carouselRef = ref<HTMLElement>();
const currentIndex = ref(0);
const itemsPerView = ref(3); // Number of items visible at once

// Hitung jumlah dot (slide)
const dotCount = computed(() => {
  return Math.max(1, props.recipes.length - itemsPerView.value + 1);
});

// Cek apakah sudah di akhir
const isAtEnd = computed(() => {
  return currentIndex.value >= props.recipes.length - itemsPerView.value;
});

// Update items per view berdasarkan ukuran layar
function updateItemsPerView() {
  if (process.client) {
    if (window.innerWidth < 768) {
      itemsPerView.value = 1;
    } else if (window.innerWidth < 1024) {
      itemsPerView.value = 2;
    } else {
      itemsPerView.value = 3;
    }
    // Pastikan currentIndex tidak melebihi batas baru
    if (currentIndex.value > props.recipes.length - itemsPerView.value) {
      currentIndex.value = Math.max(
        0,
        props.recipes.length - itemsPerView.value
      );
      scrollToIndex(currentIndex.value);
    }
  }
}

function scrollLeft() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    scrollToIndex(currentIndex.value);
  }
}

function scrollRight() {
  if (currentIndex.value < props.recipes.length - itemsPerView.value) {
    currentIndex.value++;
    scrollToIndex(currentIndex.value);
  }
}

function goToSlide(index: number) {
  currentIndex.value = index;
  scrollToIndex(index);
}

function scrollToIndex(index: number) {
  if (carouselRef.value && process.client) {
    const cardWidth = 320; // w-80 = 320px
    const gap = 24; // gap-6 = 24px
    const scrollPosition = index * (cardWidth + gap);
    carouselRef.value.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }
}

function updateCurrentIndex() {
  if (carouselRef.value && process.client) {
    const scrollLeft = carouselRef.value.scrollLeft;
    const cardWidth = 320;
    const gap = 24;
    const totalWidth = cardWidth + gap;
    currentIndex.value = Math.round(scrollLeft / totalWidth);
  }
}

onMounted(() => {
  if (process.client) {
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener("resize", updateItemsPerView);
  }
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
