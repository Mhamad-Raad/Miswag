<template>
  <div
    class="w-[156px] h-[316px] p-2 flex flex-col gap-3 bg-[#fcfcfc] border border-[#e8e8e8] rounded-lg"
  >
    <ProductImage />
    <ProductMeta />
  </div>
</template>

<script setup>
import ProductImage from './ProductImage.vue';
import ProductMeta from './ProductMeta.vue';
</script>
