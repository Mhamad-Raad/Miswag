<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-6 text-right">المفضلة</h1>

    <ProductList
      v-if="loading"
      :products="[]"
      :properties="productListProperties"
      :loading="true"
      @open-details="openProductModal"
    />

    <div
      v-else-if="favoriteProducts.length === 0 && readyToCheckEmptyState"
      class="text-center py-10"
    >
      <EmptyState
        title="لا توجد منتجات مفضلة"
        message="أضف بعض المنتجات إلى المفضلة لعرضها هنا لاحقًا."
      />
    </div>

    <ProductList
      v-else
      :products="favoriteProducts"
      :properties="productListProperties"
      :loading="false"
      @open-details="openProductModal"
    />

    <ProductDetailsModal
      v-if="selectedProduct"
      :open="!!selectedProduct"
      :product="selectedProduct"
      :onClose="() => (selectedProduct = null)"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

import ProductList from '~/components/Product/ProductList.vue';
import ProductDetailsModal from '~/components/Product/ProductDetailsModal.vue';
import EmptyState from '~/components/UI/EmptyState.vue';

import { useHomeContent } from '~/composables/useHomeContent';
import { useFavoritesStore } from '~/stores/useFavoritesStore';

const { contentBlocks, loading } = useHomeContent();
const favoritesStore = useFavoritesStore();

onMounted(() => favoritesStore.load());

const selectedProduct = ref(null);
const openProductModal = (product) => {
  selectedProduct.value = product;
};

const productListProperties = {
  hasFavouriteBtn: true,
  shouldShowRating: true,
  shouldShowVariations: true,
};

const allProducts = computed(() =>
  contentBlocks.value
    .filter((block) => block.type === 'products')
    .flatMap((block) => block.content || [])
);

const favoriteProducts = computed(() =>
  allProducts.value.filter((p) => favoritesStore.isFavorited(p.id))
);

const readyToCheckEmptyState = computed(() => {
  return !loading.value && allProducts.value.length > 0;
});
</script>
