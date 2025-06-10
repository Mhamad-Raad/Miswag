<template>
  <div class="p-8">
    <div v-if="loading" class="mb-6">
      <ProductList
        :products="[]"
        :properties="{}"
        @open-details="() => {}"
        :loading="true"
      />
      <ImageGrid :grid="block" :loading="true" />
    </div>
    <div v-else-if="error">
      <ErrorState :message="error" @retry="retryLoad" />
    </div>
    <div v-else>
      <div
        v-for="(block, index) in filteredBlocks"
        :key="index"
        :class="['mb-3', shouldApplyGridMargin(index) ? 'mt-[42px]' : '']"
      >
        <ProductList
          v-if="block.type === 'products'"
          :products="block.content"
          :properties="block.properties"
          @open-details="openProductModal"
          :loading="loading"
        />
        <ImageGrid
          v-if="block.type === 'grid'"
          :grid="block"
          :loading="false"
        />
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

import ErrorState from '~/components/UI/ErrorState.vue';
import ProductList from '~/components/home/ProductList.vue';
import ImageGrid from '~/components/home/ImageGrid.vue';
import ProductDetailsModal from '~/components/ProductDetailsModal.vue';

const { contentBlocks, loading, error, refetch } = useHomeContent();
const selectedProduct = ref(null);
const searchStore = useSearchStore();

function retryLoad() {
  refetch();
}

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

function shouldApplyGridMargin(index) {
  const blocks = filteredBlocks.value;

  const current = blocks[index];
  const nextBlocks = blocks.slice(index + 1);
  const prev = blocks[index - 1];

  const allNextAreGrids = nextBlocks.every((b) => b.type === 'grid');

  return (
    current.type === 'grid' &&
    allNextAreGrids &&
    (!prev || prev.type !== 'grid')
  );
}
</script>

<!-- the followings need to be done -->

<!-- add cart page -->
<!-- add default variables to tailwind -->
<!-- add empty state to home page -->
