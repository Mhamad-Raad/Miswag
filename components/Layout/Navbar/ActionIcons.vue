<template>
  <div class="flex items-center gap-[28px]">
    <div class="flex items-center gap-[22px]">
      <NuxtLink to="/cart" class="inline-flex">
        <div class="px-[14px] py-[11px] bg-[#ffefe9] rounded-2xl">
          <Notify :notificationNumber="cartStore.cart.length">
            <CartIcon class="transform-gpu" />
          </Notify>
        </div>
      </NuxtLink>
      <NuxtLink to="/favorites" class="inline-flex">
        <Notify :notificationNumber="favoritesStore.favorites.length">
          <HeartIcon class="fill-transparent transform-gpu" />
        </Notify>
      </NuxtLink>
    </div>
    <AuthButton class="transform-gpu" />
  </div>
</template>

<script setup>
import { useFavoritesStore } from '~/stores/useFavoritesStore';
import { useCartStore } from '~/stores/useCartStore';

import Notify from '~/components/UI/Notifcation.vue';
import AuthButton from './AuthButton.vue';

import CartIcon from '~/assets/Icons/Cart.vue';
import HeartIcon from '~/assets/Icons/Heart.vue';

const favoritesStore = useFavoritesStore();
const cartStore = useCartStore();

onMounted(() => {
  if (process.client) {
    favoritesStore.load();
    cartStore.load();
  }
});
</script>
