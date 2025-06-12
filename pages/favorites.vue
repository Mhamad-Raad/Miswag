<template>
  <div class="lg:p-8">
    <h1 class="text-2xl font-bold mb-6 text-right">المفضلة</h1>

    <ProductList
      v-if="loading"
      :products="[]"
      :properties="productListProperties"
      :loading="true"
      @open-details="openProductModal"
    />

    <Transition name="fade-scale" appear>
      <div
        v-if="
          !loading && filteredFavorites.length === 0 && readyToCheckEmptyState
        "
        class="text-center py-10"
      >
        <EmptyState
          title="لا توجد نتائج"
          message="لا توجد منتجات مفضلة تطابق اسم المنتج أو الماركة المدخلة."
        />
      </div>
    </Transition>

    <Transition name="fade-scale" appear>
      <div v-if="!loading && filteredFavorites.length > 0">
        <ProductList
          :products="filteredFavorites"
          :properties="productListProperties"
          :loading="false"
          @open-details="openProductModal"
        />
      </div>
    </Transition>

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
import { ref, computed, onMounted } from 'vue';

import ProductList from '~/components/Product/ProductList.vue';
import ProductDetailsModal from '~/components/Product/ProductDetailsModal.vue';
import EmptyState from '~/components/UI/EmptyState.vue';

import { useHomeContent } from '~/composables/useHomeContent';
import { useFavoritesStore } from '~/stores/useFavoritesStore';
import { useSearchStore } from '~/stores/useSearchStore';

useHead({
  title: 'المفضلة | MyStore',
});

const { contentBlocks, loading } = useHomeContent();
const favoritesStore = useFavoritesStore();
const searchStore = useSearchStore();

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

const filteredFavorites = computed(() => {
  const query = searchStore.query.toLowerCase().trim();
  if (!query) return favoriteProducts.value;

  return favoriteProducts.value.filter(
    (product) =>
      product.title?.toLowerCase().includes(query) ||
      product.brand?.toLowerCase().includes(query)
  );
});

const readyToCheckEmptyState = computed(() => {
  return !loading.value && allProducts.value.length > 0;
});
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
