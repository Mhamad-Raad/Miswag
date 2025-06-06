<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    :class="iconClass"
  >
    <path
      d="M6 7V6a6 6 0 0112 0v1h3a1 1 0 011 1v2a1 1 0 01-1 1h-.18l-.89 10.68A2 2 0 0117.94 24H6.06a2 2 0 01-1.99-2.32L3.18 11H3a1 1 0 01-1-1V8a1 1 0 011-1h3zm2 0h8V6a4 4 0 00-8 0v1z"
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
