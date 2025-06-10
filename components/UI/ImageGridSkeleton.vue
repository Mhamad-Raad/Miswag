<template>
  <div
    class="grid w-full gap-4 mt-10"
    :style="{ gridTemplateColumns: `repeat(${cols}, 1fr)` }"
  >
    <div
      v-for="i in count"
      :key="i"
      class="w-full h-[204px] bg-gray-200 animate-pulse rounded-lg"
    ></div>
  </div>
</template>

<script setup>
defineProps({
  count: {
    type: Number,
    default: 6,
  },
  cols: {
    type: Number,
    default: 3,
  },
});
</script>
