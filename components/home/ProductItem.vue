<template>
  <div
    class="w-[156px] h-[316px] p-2 flex flex-col gap-3 bg-[#fcfcfc] border border-[#e8e8e8] rounded-lg"
  >
    <!-- add floating buttons -->
    <div class="w-full h-[152px] rounded-lg relative shadow-md">
      <img
        class="w-full h-full object-cover rounded-lg"
        src="https://picsum.photos/200/300"
        alt="Product Image"
      />
      <!-- discout badge -->
      <p
        class="absolute top-0 left-0 bg-[#d92d20] text-xs text-[#fcfcfc] font-bold rounded-full px-1 py-[2px]"
      >
        -20%
      </p>
      <!-- rate badge -->
      <div
        class="absolute bottom-0 left-0 bg-[#fcfcfc] rounded-full px-1 py-[2px] flex items-center gap-1 shadow-md"
      >
        <p class="text-xs text-[#575757]">
          <span class="font-bold">5.0</span>
          [20]
        </p>
        <StarIcon />
      </div>

      <!-- favorite button -->
      <button
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
    <!-- Add floating buttons -->
    <div class="flex flex-col gap-2 text-sm text-[#575757] relative">
      <h3 class="text-right line-clamp-2" dir="rtl">
        <span class="font-bold">ابل</span>
        ساعة ابل ووتش سيريس 8 - 45 مللساعة ابل ووتش سيريس 8 - 45 ملل
      </h3>

      <div class="flex flex-col justify-end gap-1 text-right">
        <h3 class="text-sm text-[#141414] font-bold">650,000 د.ع</h3>
        <h5 class="text-xs text-[#a5a5a5] line-through">1,300,000</h5>
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
  </div>
</template>

<script setup>
import GiftIcon from '~/assets/Icons/Gift.vue';
import BagIcon from '~/assets/Icons/Bag.vue';
import HeartIcon from '~/assets/Icons/Heart.vue';
import AddToCartIcon from '~/assets/Icons/AddToCart.vue';
import StarIcon from '~/assets/Icons/Star.vue';
</script>
