<template>
  <div class="w-full flex justify-center">
    <ProductGridWrapper>
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
          v-memo="[product.id]"
        />
      </template>
    </ProductGridWrapper>
  </div>
</template>

<script setup>
import ProductItem from '~/components/Product/ProductItem/index.vue';
import ProductSkeleton from '~/components/UI/ProductSkeleton.vue';
import ProductGridWrapper from '~/components/Product/ProductGridWrapper.vue';

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
