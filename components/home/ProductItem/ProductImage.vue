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
      class="absolute top-0 left-0 bg-[#d92d20] text-xs text-[#fcfcfc] font-bold rounded-full px-1 py-[2px]"
    >
      -20%
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
      class="absolute top-0 right-0 bg-[#fcfcfc] flex items-center justify-center p-2 rounded-lg shadow-md"
    >
      <HeartIcon />
    </button>
    <!-- add to cart button -->
    <button
      class="absolute bottom-0 right-0 bg-[#fcfcfc] text-sm text-[#575757] flex items-center justify-center p-2 rounded-lg"
    >
      <AddToCartIcon />
    </button>
  </div>
</template>

<script setup>
import HeartIcon from '~/assets/Icons/Heart.vue';
import AddToCartIcon from '~/assets/Icons/AddToCart.vue';
import StarIcon from '~/assets/Icons/Star.vue';

const props = defineProps({
  product: Object,
  properties: Object,
});

const { product, properties } = props;
console.log('ProductImage props:', properties?.hasFavouriteBtn);
</script>
