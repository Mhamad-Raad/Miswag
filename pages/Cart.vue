<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-6 text-right">عربة التسوق</h1>

    <ImageGridSkeleton v-if="!readyToCheckEmptyState" count="1" cols="1" />

    <div v-else-if="cartItems.length === 0" class="text-center py-10">
      <EmptyState title="السلة فارغة" message="أضف بعض المنتجات لعرضها هنا." />
    </div>

    <div v-else class="space-y-6">
      <div
        v-for="item in cartItems"
        :key="item.id"
        class="flex items-center justify-between gap-4 border p-4 rounded"
      >
        <img :src="item.image" class="w-20 h-20 rounded object-cover" />
        <div class="flex-1 text-right">
          <h2 class="font-bold line-clamp-2" dir="rtl">{{ item.title }}</h2>
          <p class="text-sm text-gray-600">الكمية: {{ item.quantity }}</p>
        </div>
        <div class="flex gap-2">
          <button @click="cartStore.increment(item.id)"><PlusIcon /></button>
          <button @click="cartStore.decrement(item.id)"><MinusIcon /></button>
          <button @click="cartStore.removeFromCart(item.id)">
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

import { useCartStore } from '~/stores/useCartStore';
import EmptyState from '~/components/UI/EmptyState.vue';
import ImageGridSkeleton from '~/components/UI/ImageGridSkeleton.vue';

import TrashIcon from '~/assets/Icons/TrashIcon.vue';
import PlusIcon from '~/assets/Icons/PlusIcon.vue';
import MinusIcon from '~/assets/Icons/MinusIcon.vue';

const cartStore = useCartStore();
const isLoaded = ref(false);

onMounted(() => {
  cartStore.load();
  isLoaded.value = true;
});

const cartItems = computed(() => cartStore.cart);

const readyToCheckEmptyState = computed(() => {
  return isLoaded.value;
});
</script>
