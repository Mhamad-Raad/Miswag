<template>
  <nav class="bg-white shadow px-6 py-4 flex justify-between items-center">
    <NuxtLink to="/" class="text-xl font-bold text-blue-600">MyPlatform</NuxtLink>

    <ul class="hidden md:flex space-x-6 text-gray-700 font-medium">
      <li><NuxtLink to="/" class="hover:text-blue-500">Home</NuxtLink></li>
      <li><NuxtLink to="/products" class="hover:text-blue-500">Products</NuxtLink></li>
      <li><NuxtLink to="/about" class="hover:text-blue-500">About</NuxtLink></li>
    </ul>

    <button @click="isOpen = !isOpen" class="md:hidden text-gray-700 focus:outline-none">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <div v-if="isOpen" class="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-10">
      <ul class="flex flex-col p-4 space-y-2 text-gray-700 font-medium">
        <li><NuxtLink to="/" class="block">Home</NuxtLink></li>
        <li><NuxtLink to="/products" class="block">Products</NuxtLink></li>
        <li><NuxtLink to="/about" class="block">About</NuxtLink></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>
