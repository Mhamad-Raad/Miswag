<template>
  <ImageGridSkeleton v-if="loading" :count="2" :cols="2" />
  <div
    v-else
    class="grid w-full gap-x-4 gap-y-3"
    :style="{
      gridTemplateColumns: `repeat(${grid?.properties?.cols || 1}, 1fr)`,
    }"
  >
    <img
      v-for="(item, idx) in grid.content"
      :key="idx"
      :src="item.image"
      loading="lazy"
      alt=""
      class="w-full h-[204px] object-cover"
    />
  </div>
</template>

<script setup>
import ImageGridSkeleton from '~/components/UI/ImageGridSkeleton.vue';

defineProps({
  grid: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>
