<template>
  <p
    v-if="startTag"
    class="absolute top-0 left-0 text-xs font-bold rounded-full px-1 py-[2px] flex gap-2 items-center"
    :style="{ backgroundColor: startTag.bgColor, color: startTag.color }"
  >
    {{ startTag.title }}
    <img
      v-if="startTag.icon"
      :src="startTag.icon"
      alt="Limited Offer"
      class="w-4 h-4 brightness-200"
    />
  </p>
</template>

<script setup>
defineProps({ startTag: Object });
</script>
