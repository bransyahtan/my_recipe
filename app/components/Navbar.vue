<template>
  <header class="py-4 border-b">
    <nav>
      <div class="flex container items-center">
        <NuxtLink href="/" class="flex gap-1 items-center">
          <NuxtImg
            width="54px"
            densities="x1"
            format="webp"
            src="/icon.png"
            alt="logo"
          />
          <span>My Recipes</span>
        </NuxtLink>
        <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
          <li>
            <NuxtLink href="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/about">About</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>
