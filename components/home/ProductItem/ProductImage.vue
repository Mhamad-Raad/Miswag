<template>
  <div class="w-full h-[152px] rounded-lg relative shadow-md">
    <img
      class="w-full h-full object-cover rounded-lg"
      :class="`aspect-[${parseFloat(properties?.imageRatio || '1')}/1]`"
      :src="product?.image"
      :alt="product?.name"
    />
    <!-- discout badge -->
    <p
      v-if="product?.startTag"
      class="absolute top-0 left-0 text-xs font-bold rounded-full px-1 py-[2px] flex gap-2 items-center"
      :style="{
        backgroundColor: product?.startTag.bgColor,
        color: product?.startTag.color,
      }"
    >
      {{ product?.startTag.title }}
      <img
        v-show="product?.startTag?.icon"
        :src="product.startTag.icon"
        alt="Limited Offer"
        class="w-4 h-4 brightness-200"
      />
    </p>
    <!-- rate badge -->
    <div
      v-if="properties?.shouldShowRating"
      class="absolute bottom-0 left-0 bg-[#fcfcfc] rounded-full px-1 py-[2px] flex items-center gap-1 shadow-md"
    >
      <p class="text-xs text-[#575757]">
        <span class="font-bold">
          {{ product?.rating || 0 }}
        </span>
        {{ `[${product?.ratingCount}]` }}
      </p>
      <StarIcon />
    </div>

    <!-- favorite button -->
    <button
      v-if="properties?.hasFavouriteBtn"
      @click.stop="handleFavorite"
      class="absolute top-0 right-0 bg-[#fcfcfc] flex items-center justify-center p-2 rounded-lg shadow-md"
    >
      <HeartIcon
        :class="[
          favoritesStore.isFavorited(product.id)
            ? 'text-red-500 fill-red-500'
            : 'text-gray-400 fill-none',
        ]"
      />
    </button>
    <!-- add to cart button -->
    <button
      class="absolute bottom-0 right-0 bg-[#fcfcfc] disabled:bg-red-400 text-sm text-[#575757] flex items-center justify-center p-2 rounded-lg shadow-md"
      :disabled="!product.isAvailable"
      :title="!product.isAvailable ? 'Out of stock' : ''"
    >
      <AddToCartIcon />
    </button>
  </div>
</template>

<script setup>
import { useFavoritesStore } from '~/stores/useFavoritesStore';

import HeartIcon from '~/assets/Icons/Heart.vue';
import AddToCartIcon from '~/assets/Icons/AddToCart.vue';
import StarIcon from '~/assets/Icons/Star.vue';

const favoritesStore = useFavoritesStore();
onMounted(() => favoritesStore.load());

function handleFavorite(e) {
  e.stopPropagation();
  favoritesStore.toggle(product.id);
}

const isFavorited = computed(() => favoritesStore.isFavorited(product.id));

const props = defineProps({
  product: Object,
  properties: Object,
});

const { product, properties } = props;
</script>
