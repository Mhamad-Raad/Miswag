<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 52"
    fill="none"
    class="w-14 h-14"
    v-bind="attrs"
  >
    <circle
      cx="26"
      cy="26"
      r="15"
      fill="white"
      stroke="black"
      stroke-opacity="0.93"
    />
    <line x1="20" y1="20" x2="32" y2="32" stroke="black" />
    <line x1="32" y1="20" x2="20" y2="32" stroke="black" />
  </svg>
</template>

<script setup>
import { useAttrs } from 'vue';
const attrs = useAttrs();
</script>
