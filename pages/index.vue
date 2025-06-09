<template>
  <div class="p-8">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div v-for="(block, index) in filteredBlocks" :key="index" class="mb-6">
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
import { ref, computed } from 'vue';
import { useHomeContent } from '~/composables/useHomeContent';
import { useSearchStore } from '~/stores/useSearchStore';

import ProductList from '~/components/home/ProductList.vue';
import ImageGrid from '~/components/home/ImageGrid.vue';
import ProductDetailsModal from '~/components/ProductDetailsModal.vue';

const { contentBlocks, loading, error } = useHomeContent();
const selectedProduct = ref(null);
const searchStore = useSearchStore();

const openProductModal = (product) => {
  selectedProduct.value = product;
};

const filteredBlocks = computed(() => {
  const q = searchStore.query.toLowerCase().trim();
  if (!q) return contentBlocks.value;

  return contentBlocks.value
    .map((block) => {
      if (block.type !== 'products') return block;

      const filteredContent = block.content.filter((product) => {
        const title = product.title?.toLowerCase() || '';
        const brand = product.brand?.toLowerCase() || '';
        return title.includes(q) || brand.includes(q);
      });

      return {
        ...block,
        content: filteredContent,
      };
    })
    .filter((block) => block.content.length > 0 || block.type === 'grid');
});
</script>

<!-- the followings need to be done -->

<!-- add Skeleton loading (Modal as well)-->
<!-- add favorites page -->
<!-- add functionality to search -->
<!-- add default variables to tailwind -->
