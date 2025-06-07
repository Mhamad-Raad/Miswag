<template>
  <div class="w-full flex justify-center">
    <div
      class="w-[95%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-5 content-center"
    >
      <ProductItem v-for="i in 20" :key="i" />
    </div>
  </div>
</template>

<script setup>
import ProductItem from '~/components/home/ProductItem/index.vue';
</script>
