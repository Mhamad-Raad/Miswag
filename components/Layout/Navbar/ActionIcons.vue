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
        <Notify :notificationNumber="favoritesStore.favorites.length">
          <button @click="$router.push('/favorites')">
            <HeartIcon />
          </button>
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
