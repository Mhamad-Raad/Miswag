<template>
  <div class="p-8">
    <div v-if="loading" class="mb-6">
      <ProductList
        :products="loadingPlaceholder.content"
        :properties="loadingPlaceholder.properties"
        @open-details="() => {}"
        :loading="true"
      />
      <ImageGrid
        :grid="{ content: loadingPlaceholder.content }"
        :loading="true"
      />
    </div>

    <div v-else-if="error">
      <ErrorState :message="error" @retry="retryLoad" />
    </div>

    <div v-else-if="readyToCheckEmptyState && noProductBlocks">
      <EmptyState
        title="لا توجد منتجات"
        message="لم يتم العثور على أي منتجات تطابق البحث."
      />
    </div>

    <TransitionGroup name="fade-scale" tag="div" class="space-y-3" appear>
      <div
        v-for="(block, index) in filteredBlocks"
        :key="index"
        :class="shouldApplyGridMargin(index) ? 'mt-[42px]' : ''"
      >
        <ProductList
          v-if="block.type === 'products'"
          :products="block.content"
          :properties="block.properties"
          @open-details="openProductModal"
          :loading="false"
        />
        <ImageGrid
          v-else-if="block.type === 'grid' && !noProductBlocks"
          :grid="block"
          :loading="false"
        />
      </div>
    </TransitionGroup>

    <ProductDetailsModal
      v-if="selectedProduct"
      :open="!!selectedProduct"
      :product="selectedProduct"
      :onClose="() => (selectedProduct = null)"
    />
  </div>
</template>

<script setup>
import { useHead } from '#imports';
import { ref, computed } from 'vue';
import { useHomeContent } from '~/composables/useHomeContent';
import { useSearchStore } from '~/stores/useSearchStore';

import ErrorState from '~/components/UI/ErrorState.vue';
import EmptyState from '~/components/UI/EmptyState.vue';
import ProductList from '~/components/Product/ProductList.vue';
import ImageGrid from '~/components/UI/ImageGrid.vue';
import ProductDetailsModal from '~/components/Product/ProductDetailsModal.vue';

useHead({
  title: 'Miswag | MyStore',
});

const { contentBlocks, loading, error, refetch } = useHomeContent();
const selectedProduct = ref(null);
const searchStore = useSearchStore();

const loadingPlaceholder = { content: [], properties: {} };

function retryLoad() {
  refetch();
}

const openProductModal = (product) => {
  selectedProduct.value = product;
};

const filteredBlocks = computed(() => {
  const q = searchStore.query.toLowerCase().trim();
  if (!q) return contentBlocks.value;

  return contentBlocks.value.map((block) => {
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
  });
});

const noProductBlocks = computed(() => {
  return !filteredBlocks.value.some(
    (block) => block.type === 'products' && block.content.length > 0
  );
});

const readyToCheckEmptyState = computed(() => {
  return !loading.value && contentBlocks.value.length > 0;
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

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.4s ease;
}
.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.fade-scale-enter-to {
  opacity: 1;
  transform: scale(1);
}
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>

<!-- TODOS -->

<!-- Add Animation to Modal Product -->
<!-- Publish the project -->
