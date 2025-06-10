<template>
  <div class="flex flex-col items-center justify-center py-20 text-center">
    <ErrorIllustrationIcon />
    <h2 class="text-lg font-bold text-red-600 mb-2">
      Oops! Something went wrong.
    </h2>
    <p class="text-gray-600 mb-4">{{ message }}</p>
    <button
      class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
      @click="$emit('retry')"
    >
      Try Again
    </button>
  </div>
</template>

<script setup>
import ErrorIllustrationIcon from '~/assets/Icons/ErrorIllustration.vue';
defineProps({
  message: {
    type: String,
    default:
      'Unable to load content. Please check your connection or try again later.',
  },
});
</script>
