<template>
  <button
    type="button"
    @click="$emit('click', product)"
    :disabled="!product.isAvailable"
    class="w-[167.5px] h-[316px] p-2 flex flex-col gap-3 bg-accent border border-skeleton rounded-lg"
  >
    <ProductImage :product="product" :properties="properties" />
    <ProductMeta :product="product" :properties="properties" />
  </button>
</template>

<script setup>
import ProductImage from './ProductImage.vue';
import ProductMeta from './ProductMeta.vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  properties: {
    type: Object,
    default: () => ({}),
  },
});

console.log(props);

const { product, properties } = props;
</script>
