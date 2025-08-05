<template>
  <header class="navbar relative z-50">
    <!-- Background dengan gradient dan blur -->
    <div
      class="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-white/20"
    ></div>

    <nav class="relative">
      <div class="container flex items-center justify-between py-4">
        <!-- Logo Section -->
        <NuxtLink
          href="/"
          class="flex gap-2 lg:gap-3 items-center group hover:scale-105 transition-transform duration-300"
        >
          <div class="relative">
            <div
              class="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl blur-sm opacity-60 group-hover:opacity-80 transition-opacity"
            ></div>
            <NuxtImg
              preset="avatar"
              src="/icon.png"
              alt="My Recipes Logo"
              class="relative rounded-xl shadow-lg lg:w-12"
            />
          </div>
          <div class="flex flex-col">
            <span
              class="text-lg lg:text-2xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
            >
              My Recipes
            </span>
            <span class="text-xs text-gray-500 font-medium hidden sm:block"
              >Cook with passion</span
            >
          </div>
        </NuxtLink>

        <!-- Desktop Navigation Links -->
        <ul class="hidden lg:flex items-center gap-8">
          <li>
            <NuxtLink
              href="/"
              class="nav-link relative px-4 py-2 text-gray-700 hover:text-orange-600 font-semibold transition-colors duration-300 group"
            >
              <span class="relative z-10">Home</span>
              <div
                class="absolute inset-0 bg-orange-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"
              ></div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              href="/about"
              class="nav-link relative px-4 py-2 text-gray-700 hover:text-orange-600 font-semibold transition-colors duration-300 group"
            >
              <span class="relative z-10">About</span>
              <div
                class="absolute inset-0 bg-orange-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"
              ></div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              href="/recipes"
              class="nav-link relative px-4 py-2 text-gray-700 hover:text-orange-600 font-semibold transition-colors duration-300 group"
            >
              <span class="relative z-10">Recipes</span>
              <div
                class="absolute inset-0 bg-orange-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"
              ></div>
            </NuxtLink>
          </li>
        </ul>

        <!-- Desktop CTA Section -->
        <div class="hidden lg:flex items-center gap-4">
          <!-- Get Started Button -->
          <MyButton
            to="/recipes"
            label="Get Started"
            :custom-class="'!bg-gradient-to-r !from-orange-500 !to-red-500 hover:!from-orange-600 hover:!to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'"
          />
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          :class="[
            'lg:hidden p-2 rounded-lg transition-all duration-300 border',
            isMobileMenuOpen
              ? 'text-orange-600 bg-orange-50 border-orange-300'
              : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50 border-gray-300',
          ]"
          type="button"
        >
          <svg
            v-if="!isMobileMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg z-50"
      >
        <div class="container py-4">
          <ul class="flex flex-col gap-2">
            <li>
              <NuxtLink
                href="/"
                @click="closeMobileMenu"
                class="mobile-nav-link block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all duration-300"
              >
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                href="/about"
                @click="closeMobileMenu"
                class="mobile-nav-link block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all duration-300"
              >
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                href="/recipes"
                @click="closeMobileMenu"
                class="mobile-nav-link block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all duration-300"
              >
                Recipes
              </NuxtLink>
            </li>
          </ul>

          <!-- Mobile CTA -->
          <div class="mt-4 pt-4 border-t border-gray-200">
            <div class="flex items-center gap-3">
              <MyButton
                to="/recipes"
                label="Get Started"
                :custom-class="'flex-1 !bg-gradient-to-r !from-orange-500 !to-red-500 hover:!from-orange-600 hover:!to-red-600 text-center justify-center'"
                @click="closeMobileMenu"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
}

.nav-link {
  position: relative;
  overflow: hidden;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, #f97316, #ef4444);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 100%;
}

/* Active link styling */
.nav-link.router-link-active {
  color: #f97316;
  font-weight: 700;
}

.nav-link.router-link-active::after {
  width: 100%;
}

.mobile-nav-link.router-link-active {
  color: #f97316;
  background-color: #fef3c7;
  font-weight: 600;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (max-width: 640px) {
  .container {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}
</style>
