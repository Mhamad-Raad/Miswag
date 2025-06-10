<template>
  <button
    v-if="show"
    @click.stop="onClick"
    class="absolute top-0 right-0 bg-accent flex items-center justify-center p-2 rounded-lg shadow-md"
  >
    <HeartIcon
      :class="[
        isActive ? 'text-red-500 fill-red-500' : 'text-gray-400 fill-none',
      ]"
    />
  </button>
</template>

<script setup>
import HeartIcon from '~/assets/Icons/Heart.vue';
defineProps({
  show: Boolean,
  isActive: Boolean,
});
defineEmits(['click']);
const onClick = () => {
  emit('click');
};
</script>
