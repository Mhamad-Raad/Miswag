<template>
  <div class="relative inline-block">
    <slot />
    <p
      v-if="notificationNumber > 0"
      class="absolute top-[-4px] right-[-2px] bg-red-500 text-white text-xs px-2 py-[2px] rounded-full translate-x-1/2 -translate-y-1/2"
    >
      {{ notificationNumber }}
    </p>
  </div>
</template>

<script setup>
const { notificationNumber } = defineProps({
  notificationNumber: {
    type: Number,
    default: 0,
  },
});

console.log(notificationNumber);
</script>
