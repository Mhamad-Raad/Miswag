<template>
  <div class="w-full h-[152px] rounded-lg relative shadow-md">
    <img
      class="w-full h-full object-cover rounded-lg"
      :class="`aspect-[${parseFloat(properties?.imageRatio || '1')}/1]`"
      :src="product?.image"
      :alt="product?.name"
      loading="lazy"
    />

    <DiscountBadge :startTag="product?.startTag" />

    <RatingBadge
      :shouldShow="properties?.shouldShowRating"
      :rating="product?.rating || 0"
      :ratingCount="product?.ratingCount"
    />

    <FavoriteButton
      :show="properties?.hasFavouriteBtn"
      :isActive="isFavorited"
      @click="handleFavorite"
    />

    <AddToCartButton
      :available="product.isAvailable"
      @add="cartStore.addToCart(product)"
    />
  </div>
</template>

<script setup>
import { useFavoritesStore } from '~/stores/useFavoritesStore';
import { useCartStore } from '~/stores/useCartStore';

import DiscountBadge from '~/components/UI/DiscountBadge.vue';
import RatingBadge from '~/components/UI/RatingBadge.vue';
import FavoriteButton from '~/components/UI/FavoriteButton.vue';
import AddToCartButton from '~/components/UI/AddToCartButton.vue';

const props = defineProps({
  product: Object,
  properties: Object,
});

const { product, properties } = props;

const favoritesStore = useFavoritesStore();
const cartStore = useCartStore();

onMounted(() => {
  favoritesStore.load();
  cartStore.load();
});

const handleFavorite = (e) => {
  favoritesStore.toggle(product.id);
};

const isFavorited = computed(() => favoritesStore.isFavorited(product.id));
</script>
