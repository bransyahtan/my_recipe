<template>
  <main>
    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-br from-orange-50 to-yellow-50 py-20 overflow-hidden"
    >
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div class="space-y-6">
            <h1
              class="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
            >
              About <span class="text-orange-600">MyRecipes</span>
            </h1>
            <p class="text-xl text-gray-700 leading-relaxed">
              Discover, create, and share amazing recipes with our modern recipe
              application. Built with passion for food lovers and cooking
              enthusiasts.
            </p>
            <div class="flex flex-wrap gap-4">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                <span class="text-gray-600">30 Recipes</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span class="text-gray-600">Easy to Use</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span class="text-gray-600">Free Forever</span>
              </div>
            </div>
          </div>

          <!-- Image -->
          <div class="relative">
            <div class="relative z-10">
              <img
                src="/food.png"
                alt="Delicious Food"
                class="w-full h-auto rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            <div
              class="absolute -top-4 -right-4 w-full h-full bg-orange-200 rounded-2xl transform -rotate-3"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center space-y-8">
          <h2 class="text-4xl font-bold text-gray-900">Our Story</h2>
          <p class="text-xl text-gray-700 leading-relaxed">
            MyRecipes is a recipe application based on the dummyJSON API,
            created by
            <span class="font-bold text-orange-600">Sultan Bransyah</span> for
            the
            <span class="font-bold">Build Modern Apps with Nuxt</span> course.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed">
            Our mission is to inspire home cooks and food enthusiasts to explore
            new flavors, share their culinary creations, and build a community
            around the joy of cooking.
          </p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Why Choose MyRecipes?
          </h2>
          <p class="text-xl text-gray-600">
            Everything you need to discover amazing recipes
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div
              class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6"
            >
              <svg
                class="w-8 h-8 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              Discover Recipes
            </h3>
            <p class="text-gray-600">
              Explore thousands of delicious recipes from around the world,
              carefully curated for every taste and skill level.
            </p>
          </div>

          <!-- Feature 2 -->
          <div
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div
              class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6"
            >
              <svg
                class="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              Easy Instructions
            </h3>
            <p class="text-gray-600">
              Step-by-step instructions with clear measurements and cooking
              times to ensure perfect results every time.
            </p>
          </div>

          <!-- Feature 3 -->
          <div
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div
              class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6"
            >
              <svg
                class="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              Share & Connect
            </h3>
            <p class="text-gray-600">
              Join our community of food lovers, share your favorite recipes,
              and get inspired by others' culinary creations.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-orange-500 to-red-500">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">
          Ready to Start Cooking?
        </h2>
        <p class="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
          Join thousands of home cooks who are already discovering amazing
          recipes with MyRecipes.
        </p>
        <NuxtLink
          to="/"
          class="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
        >
          Explore Recipes
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts"></script>
