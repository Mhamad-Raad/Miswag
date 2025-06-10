<template>
  <div
    v-if="shouldShow"
    class="absolute bottom-0 left-0 bg-accent rounded-full px-1 py-[2px] flex items-center gap-1 shadow-md"
  >
    <p class="text-xs text-[#575757]">
      <span class="font-bold">{{ rating }}</span>
      {{ `[${ratingCount}]` }}
    </p>
    <StarIcon />
  </div>
</template>

<script setup>
import StarIcon from '~/assets/Icons/Star.vue';
defineProps({
  shouldShow: Boolean,
  rating: Number,
  ratingCount: Number,
});
</script>
