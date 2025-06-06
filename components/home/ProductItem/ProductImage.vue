<template>
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
</template>

<script setup>
import HeartIcon from '~/assets/Icons/Heart.vue';
import AddToCartIcon from '~/assets/Icons/AddToCart.vue';
import StarIcon from '~/assets/Icons/Star.vue';
</script>
