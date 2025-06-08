<template>
  <div
    class="grid w-full gap-2"
    :style="{
      gridTemplateColumns: `repeat(${grid.properties?.cols || 1}, 1fr)`,
    }"
  >
    <img
      v-for="(item, idx) in grid.content"
      :key="idx"
      :src="item.image"
      alt=""
      class="w-full h-[204px]"
    />
  </div>
</template>

<script setup>
defineProps({
  grid: {
    type: Object,
    required: true,
  },
});
</script>
