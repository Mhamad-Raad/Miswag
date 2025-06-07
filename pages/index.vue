<template>
  <div class="p-8 h-[100vh]">
    <ProductList />
    <div class="flex gap-4 my-4">
      <img src="~/assets/Ads/Ad1.png" alt="Ad1 Image" class="w-1/2 h-[204px]" />
      <img src="~/assets/Ads/Ad2.png" alt="Ad1 Image" class="w-1/2 h-[204px]" />
    </div>
  </div>
</template>

<script setup>
import ProductList from '~/components/home/ProductList.vue';
</script>
