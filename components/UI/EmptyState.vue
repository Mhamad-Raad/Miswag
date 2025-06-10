<template>
  <div class="flex flex-col items-center text-center">
    <h2 class="text-lg font-semibold mb-2">{{ title }}</h2>
    <p class="text-gray-500">{{ message }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  message: String,
});
</script>
