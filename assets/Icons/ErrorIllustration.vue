<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    fill="none"
    :class="iconClass"
  >
    <circle cx="60" cy="60" r="55" fill="#FFEDED" stroke="#FF4D4F" stroke-width="2" />
    <line x1="40" y1="40" x2="80" y2="80" stroke="#FF4D4F" stroke-width="4" stroke-linecap="round" />
    <line x1="80" y1="40" x2="40" y2="80" stroke="#FF4D4F" stroke-width="4" stroke-linecap="round" />
    <circle cx="60" cy="60" r="45" stroke="#FF4D4F" stroke-width="1" stroke-dasharray="4 4" />
  </svg>
</template>

<script setup>
defineProps({
  iconClass: {
    type: String,
    default: 'w-32 h-32'
  }
});
</script>
