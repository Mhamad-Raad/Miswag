<template>
  <div class="flex items-center gap-[28px]">
    <div class="flex items-center gap-[22px]">
      <NuxtLink to="/cart" class="inline-flex">
        <div class="px-[14px] py-[11px] bg-[#ffefe9] rounded-2xl">
          <Notify :notificationNumber="favoritesStore.favorites.length">
            <CartIcon />
          </Notify>
        </div>
      </NuxtLink>
      <NuxtLink to="/favorites" class="inline-flex">
        <Notify :notificationNumber="favoritesStore.favorites.length">
          <HeartIcon />
        </Notify>
      </NuxtLink>
    </div>
    <AuthButton />
  </div>
</template>

<script setup>
import { useFavoritesStore } from '~/stores/useFavoritesStore';
import Notify from '~/components/UI/Notifcation.vue';
import AuthButton from './AuthButton.vue';

import CartIcon from '~/assets/Icons/Cart.vue';
import HeartIcon from '~/assets/Icons/Heart.vue';

const favoritesStore = useFavoritesStore();

console.log('Favorites store:', favoritesStore);

onMounted(() => {
  if (process.client) {
    favoritesStore.load();
  }
});
</script>
