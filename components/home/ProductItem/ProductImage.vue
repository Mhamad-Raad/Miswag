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
        :v-if="product?.startTag?.icon"
        :src="product?.startTag?.icon"
        alt="Limitied Offer"
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
      class="absolute top-0 right-0 bg-[#fcfcfc] flex items-center justify-center p-2 rounded-lg shadow-md"
    >
      <HeartIcon />
    </button>
    <!-- add to cart button will change -->
    <button
      class="absolute bottom-0 right-0 bg-[#fcfcfc] disabled:bg-red-400 text-sm text-[#575757] flex items-center justify-center p-2 rounded-lg"
      :disabled="!product.isAvailable"
      :title="!product.isAvailable ? 'Out of stock' : ''"
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
