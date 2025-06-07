<template>
  <div class="w-full flex justify-center">
    <div v-if="loading" class="text-center text-gray-600 py-10">
      Loading products...
    </div>

    <div v-else-if="error" class="text-center text-red-500 py-10">
      Error loading products: {{ error }}
    </div>

    <div
      v-else
      class="w-[95%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-5 content-center"
    >
      <ProductItem
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { watchEffect } from 'vue';
import { useProducts } from '~/composables/useProducts';
import ProductItem from './ProductItem/index.vue';

const { products, loading, error } = useProducts();

watchEffect(() => {
  if (!loading.value && products.value.length > 0) {
    console.log('Products loaded:', products.value);
  }

  if (error.value) {
    console.error('API error:', error.value);
  }
});
</script>
