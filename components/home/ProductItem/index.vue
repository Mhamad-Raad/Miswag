<template>
  <div
    class="w-[167.5px] h-[316px] p-2 flex flex-col gap-3 bg-[#fcfcfc] border border-[#e8e8e8] rounded-lg"
  >
    <ProductImage />
    <ProductMeta />
  </div>
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

const { product, properties } = props;

console.log('ProductItem props:',{ product, properties});
</script>
