<template>
  <footer
    class="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
  >
    <!-- Main Footer Content -->
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Brand Section -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-3 mb-6">
            <div class="relative">
              <div
                class="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl blur-sm opacity-60"
              ></div>
              <NuxtImg
                preset="logo"
                src="/icon.png"
                alt="My Recipes Logo"
                class="relative rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h3
                class="text-2xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"
              >
                My Recipes
              </h3>
              <p class="text-sm text-gray-400">Cook with passion</p>
            </div>
          </div>

          <p class="text-gray-300 mb-6 leading-relaxed">
            Discover delicious recipes from around the world. From quick
            weeknight dinners to impressive weekend feasts, we've got you
            covered.
          </p>

          <!-- Social Media Links -->
          <div class="flex gap-4">
            <a
              href="#"
              class="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
            >
              <Icon
                name="i-mdi-facebook"
                class="text-gray-400 group-hover:text-white text-lg"
              />
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
            >
              <Icon
                name="i-mdi-instagram"
                class="text-gray-400 group-hover:text-white text-lg"
              />
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
            >
              <Icon
                name="i-mdi-twitter"
                class="text-gray-400 group-hover:text-white text-lg"
              />
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
            >
              <Icon
                name="i-mdi-youtube"
                class="text-gray-400 group-hover:text-white text-lg"
              />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-bold mb-6 text-white">Quick Links</h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink
                to="/"
                class="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group"
              >
                <Icon
                  name="i-mdi-chevron-right"
                  class="text-orange-500 group-hover:translate-x-1 transition-transform"
                />
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/recipes"
                class="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group"
              >
                <Icon
                  name="i-mdi-chevron-right"
                  class="text-orange-500 group-hover:translate-x-1 transition-transform"
                />
                All Recipes
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/about"
                class="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group"
              >
                <Icon
                  name="i-mdi-chevron-right"
                  class="text-orange-500 group-hover:translate-x-1 transition-transform"
                />
                About Us
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Newsletter & Contact -->
        <div>
          <h4 class="text-lg font-bold mb-6 text-white">Stay Updated</h4>

          <!-- Newsletter Signup -->
          <div class="mb-8">
            <p class="text-gray-300 mb-4">
              Get the latest recipes and cooking tips delivered to your inbox.
            </p>
            <div class="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                class="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button
                class="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="space-y-3">
            <div class="flex items-center gap-3 text-gray-300">
              <Icon name="i-mdi-email" class="text-orange-500" />
              <span>hello@myrecipes.com</span>
            </div>
            <div class="flex items-center gap-3 text-gray-300">
              <Icon name="i-mdi-phone" class="text-orange-500" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div class="flex items-center gap-3 text-gray-300">
              <Icon name="i-mdi-map-marker" class="text-orange-500" />
              <span>123 Cooking Street, Food City</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="border-t border-gray-800">
      <div class="container mx-auto px-4 py-6">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div class="text-gray-400 text-sm">
            © 2024 My Recipes. All rights reserved.
          </div>

          <div class="flex gap-6 text-sm">
            <a
              href="#"
              class="text-gray-400 hover:text-orange-400 transition-colors duration-300"
              >Privacy Policy</a
            >
            <a
              href="#"
              class="text-gray-400 hover:text-orange-400 transition-colors duration-300"
              >Terms of Service</a
            >
            <a
              href="#"
              class="text-gray-400 hover:text-orange-400 transition-colors duration-300"
              >Cookie Policy</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No props needed for this footer component
</script>

<style scoped>
/* Custom scrollbar for newsletter input */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Focus styles */
input:focus {
  box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
}
</style>
