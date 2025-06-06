<template>
  <div
    class="w-[156px] h-[316px] p-2 flex flex-col gap-3 bg-[#fcfcfc] border border-[#e8e8e8] rounded-lg"
  >
    <!-- add floating buttons -->
    <div class="w-full h-[152px] rounded-lg relative">
      <img
        class="w-full h-full object-cover rounded-lg"
        src="https://picsum.photos/200/300"
        alt="Product Image"
      />
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
            class="px-1 py-[3.5px] flex items-center gap-1 bg-[#1c1c1c] rounded-full w-fit"
          >
            <h6 class="text-xs text-[#fcfcfc] font-medium">GadgetHub</h6>
            <BagIcon />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import GiftIcon from '~/assets/Icons/Gift.vue';
import BagIcon from '~/assets/Icons/Bag.vue';
</script>
