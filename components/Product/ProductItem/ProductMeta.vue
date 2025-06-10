<template>
  <div class="flex flex-col gap-2 text-sm text-[#575757] relative">
    <h3 class="text-right line-clamp-2" dir="rtl">
      <span class="font-bold">{{ product?.brand }}</span>
      {{ product?.title }}
    </h3>

    <div class="flex flex-col justify-between gap-1 text-right">
      <h3 class="text-sm text-[#141414] font-bold">
        {{ `${price} ${product?.price?.currency}` }}
      </h3>
      <h5
        class="text-xs text-[#a5a5a5] line-through"
        v-show="product?.price?.originalValue !== product?.price?.value"
      >
        {{ `${originalPrice} ${product?.price?.currency}` }}
      </h5>
      <div
        class="h-4"
        v-show="product?.price?.originalValue === product?.price?.value"
      ></div>
      <div class="flex items-center justify-end gap-[2px]">
        <p class="text-xs text-[#575757] font-semibold">هدية</p>
        <GiftIcon />
      </div>
      <div class="w-full flex justify-end">
        <div
          class="px-1 py-[3.5px] flex items-center gap-1 rounded-full w-fit mt-[2px]"
          :style="{
            backgroundColor: product?.merchant?.bgColor || '#00000',
          }"
        >
          <h6 class="text-xs text-accent font-medium">
            {{ product?.merchant?.title }}
          </h6>

          <BagIcon />
          <!-- Uncomment the following line if you want to show the merchant icon, it is commented because the link provided does not work -->
          <!-- <img
            v-show="product?.merchant?.icon"
            :src="product?.merchant?.icon"
            alt="Merchant Icon"
            class="w-4 h-4 rounded-full"
          /> -->
        </div>
      </div>
    </div>
    <ColorDots
      v-if="properties?.shouldShowVariations && product?.colors?.length"
      :colors="product.colors"
      :max="3"
    />
  </div>
</template>
<script setup>
import ColorDots from './ColorDots.vue';

import GiftIcon from '~/assets/Icons/Gift.vue';
import BagIcon from '~/assets/Icons/Bag.vue';

import { formatCurrency } from '~/utils/formatters';

const props = defineProps({
  product: Object,
  properties: Object,
});

const { product, properties } = props;
const price = formatCurrency(product?.price?.value);
const originalPrice = formatCurrency(product?.price?.originalValue);
</script>
