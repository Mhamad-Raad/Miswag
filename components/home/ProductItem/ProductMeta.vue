<template>
  <div class="flex flex-col gap-2 text-sm text-[#575757] relative">
    <h3 class="text-right line-clamp-2" dir="rtl">
      <span class="font-bold">ابل</span>
      ساعة ابل ووتش سيريس 8 - 45 مللساعة ابل ووتش سيريس 8 - 45 ملل
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
      <div class="flex justify-end w-full">
        <div
          class="px-1 py-[3.5px] flex items-center gap-1 bg-[#1c1c1c] rounded-full w-fit mt-[2px]"
        >
          <h6 class="text-xs text-[#fcfcfc] font-medium">GadgetHub</h6>
          <BagIcon />
        </div>
      </div>
    </div>
    <div
      class="p-[2px] absolute bottom-0 left-0 bg-white flex flex-col items-center rounded-full shadow-md"
    >
      <div class="flex flex-col items-center -space-y-1">
        <div
          class="w-4 h-4 bg-[#e6e3dc] border border-[#f1f2f5] rounded-full z-20"
        ></div>
        <div
          class="w-4 h-4 bg-[#ffA0a4] border border-[#f1f2f5] rounded-full z-10"
        ></div>
        <div
          class="w-4 h-4 bg-[#067f9e] border border-[#f1f2f5] rounded-full"
        ></div>
      </div>
      <p class="text-[9px] text-[#585252]">2+</p>
    </div>
  </div>
</template>
<script setup>
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
