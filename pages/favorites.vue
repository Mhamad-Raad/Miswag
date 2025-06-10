<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-6 text-right">المفضلة</h1>

    <!-- Loading State -->
    <ProductList
      v-if="loading"
      :products="[]"
      :properties="productListProperties"
      :loading="true"
      @open-details="openProductModal"
    />

    <!-- Empty State with animation -->
    <Transition name="fade-scale" appear>
      <div
        v-if="
          !loading && favoriteProducts.length === 0 && readyToCheckEmptyState
        "
        class="text-center py-10"
      >
        <EmptyState
          title="لا توجد منتجات مفضلة"
          message="أضف بعض المنتجات إلى المفضلة لعرضها هنا لاحقًا."
        />
      </div>
    </Transition>

    <!-- Product List with animation -->
    <Transition name="fade-scale" appear>
      <div v-if="!loading && favoriteProducts.length > 0">
        <ProductList
          :products="favoriteProducts"
          :properties="productListProperties"
          :loading="false"
          @open-details="openProductModal"
        />
      </div>
    </Transition>

    <!-- Modal -->
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
