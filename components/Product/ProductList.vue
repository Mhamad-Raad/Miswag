<template>
  <div class="w-full flex justify-center">
    <div
      class="w-[95%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-5 content-center"
    >
      <template v-if="loading">
        <ProductSkeleton v-for="i in 14" :key="i" />
      </template>
      <template v-else>
        <ProductItem
          v-for="(product, index) in products"
          :key="index"
          :product="product"
          :properties="properties"
          @click="$emit('open-details', product)"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import ProductItem from '~/components/Product/ProductItem/index.vue';
import ProductSkeleton from '~/components/UI/ProductSkeleton.vue';

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
  properties: {
    type: Object,
    default: () => ({}),
  },
  loading: {
    type: Boolean,
    default: true,
  },
});
</script>
