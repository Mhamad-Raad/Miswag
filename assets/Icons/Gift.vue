<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    :class="iconClass"
  >
    <path
      d="M20 7h-1.17a3 3 0 00.17-1 3 3 0 10-5.24 2H10.24a3 3 0 10-5.24-2c0 .35.06.68.17 1H4a1 1 0 00-1 1v3a1 1 0 001 1h1v8a1 1 0 001 1h12a1 1 0 001-1v-8h1a1 1 0 001-1V8a1 1 0 00-1-1zM16 4a1 1 0 110 2h-2a1 1 0 110-2h2zm-8 0a1 1 0 110 2H6a1 1 0 110-2h2zm-2 6v-1h12v1H6zm10 2v7H8v-7h8z"
    />
  </svg>
</template>

<script setup>
defineProps({
  iconClass: {
    type: String,
    default: 'w-6 h-6 text-gray-700',
  },
});
</script>
