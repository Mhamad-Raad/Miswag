<template>
  <button
    class="absolute bottom-0 right-0 bg-accent disabled:bg-red-400 text-sm text-[#575757] flex items-center justify-center p-2 rounded-lg shadow-md"
    :disabled="!available"
    :title="!available ? 'Out of stock' : ''"
    @click.stop="onAdd"
  >
    <AddToCartIcon />
  </button>
</template>

<script setup>
import AddToCartIcon from '~/assets/Icons/AddToCart.vue';
defineProps({ available: Boolean });
defineEmits(['add']);
const onAdd = () => {
  emit('add');
};
</script>
