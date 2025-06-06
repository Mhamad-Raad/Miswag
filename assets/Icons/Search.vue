<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    :class="iconClass"
  >
    <path
      d="M10 2a8 8 0 105.29 14.29l5.21 5.21a1 1 0 001.42-1.42l-5.21-5.21A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z"
    />
  </svg>
</template>

<script setup>
defineProps({
  iconClass: {
    type: String,
    default: 'w-6 h-6 text-gray-600',
  },
});
</script>
