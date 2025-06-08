<template>
  <div
    class="p-[2px] absolute bottom-0 left-0 bg-white flex flex-col items-center rounded-full shadow-md"
    v-show="colors?.length"
  >
    <div class="flex flex-col items-center -space-y-1">
      <div
        v-for="(color, index) in limitedColors"
        :key="index"
        class="w-4 h-4 border border-[#f1f2f5] rounded-full"
        :style="{ backgroundColor: color, zIndex: colors.length - index }"
      />
    </div>
    <p
      v-if="colors.length > max"
      class="text-[9px] text-[#585252]"
    >
      +{{ colors.length - max }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  colors: {
    type: Array,
    required: true,
  },
  max: {
    type: Number,
    default: 3,
  },
});

const limitedColors = computed(() => props.colors.slice(0, props.max));
</script>
