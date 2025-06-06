<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    :class="iconClass"
  >
    <path d="M2 4h28v24H2z" fill="#fff" />
    <path d="M2 4h9.33v24H2z" fill="#007847" />
    <path d="M20.67 4H30v24h-9.33z" fill="#d71920" />
  </svg>
</template>

<script setup>
defineProps({
  iconClass: {
    type: String,
    default: 'w-6 h-6',
  },
});
</script>
