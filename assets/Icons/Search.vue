<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    :class="iconClass"
  >
    <path
      d="M10.5938 18.1875C14.7877 18.1875 18.1875 14.7877 18.1875 10.5938C18.1875 6.39984 14.7877 3 10.5938 3C6.39984 3 3 6.39984 3 10.5938C3 14.7877 6.39984 18.1875 10.5938 18.1875Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 21L16.5 16.5"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
defineProps({
  iconClass: {
    type: String,
    default: 'w-6 h-6 text-gray-800',
  },
});
</script>
