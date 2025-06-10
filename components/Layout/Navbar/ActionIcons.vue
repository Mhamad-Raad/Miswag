<template>
  <div class="flex items-center gap-[28px]">
    <div class="flex items-center gap-[22px]">
      <button
        class="px-[14px] py-[11px] bg-[#ffefe9] rounded-2xl"
        type="button"
      >
        <CartIcon />
      </button>
      <NuxtLink to="/favorites" class="inline-flex">
        <HeartIcon />
      </NuxtLink>
    </div>
    <AuthButton />
  </div>
</template>

<script setup>
import AuthButton from './AuthButton.vue';
import CartIcon from '~/assets/Icons/Cart.vue';
import HeartIcon from '~/assets/Icons/Heart.vue';
</script>
