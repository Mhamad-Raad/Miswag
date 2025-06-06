<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25 24"
    fill="none"
    :class="iconClass"
  >
    <path
      d="M17.0714 7.1746C17.0714 9.69933 15.0247 11.746 12.5 11.746C9.97527 11.746 7.92857 9.69933 7.92857 7.1746C7.92857 4.64987 9.97527 2.60317 12.5 2.60317C15.0247 2.60317 17.0714 4.64987 17.0714 7.1746Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.5 14.2857C8.08172 14.2857 4.5 16.9785 4.5 21.3968H20.5C20.5 16.9785 16.9183 14.2857 12.5 14.2857Z"
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
