<template>
  <div class="p-8">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div v-for="(block, index) in contentBlocks" :key="index" class="mb-6">
        <ProductList
          v-if="block.type === 'products'"
          :products="block.content"
          :properties="block.properties"
          @open-details="openProductModal"
        />
        <ImageGrid v-if="block.type === 'grid'" :grid="block" />
      </div>
    </div>

    <ProductDetailsModal
      v-if="selectedProduct"
      :open="!!selectedProduct"
      :product="selectedProduct"
      :onClose="() => (selectedProduct = null)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useHomeContent } from '~/composables/useHomeContent';
import ProductList from '~/components/home/ProductList.vue';
import ImageGrid from '~/components/home/ImageGrid.vue';
import ProductDetailsModal from '~/components/home/ProductDetailsModal.vue';

const { contentBlocks, loading, error } = useHomeContent();
const selectedProduct = ref(null);

const openProductModal = (product) => {
  selectedProduct.value = product;
};
</script>

<!-- the followings need to be done -->

<!-- add Modal -->
<!-- add Skeleton loading (Modal as well)-->
<!-- add functionality to favorites with local host -->
<!-- add favorites page -->
<!-- add functionality to search -->
<!-- add default variables to tailwind -->
