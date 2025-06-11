<template>
  <div class="p-8 flex flex-col">
    <h1 class="text-2xl font-bold mb-6 text-right">عربة التسوق</h1>

    <ImageGridSkeleton v-if="!readyToCheckEmptyState" :count="1" :cols="1" />

    <template v-else>
      <div v-if="cartItems.length === 0" class="text-center py-10">
        <Transition name="fade-scale" appear>
          <EmptyState
            title="السلة فارغة"
            message="أضف بعض المنتجات لعرضها هنا."
          />
        </Transition>
      </div>

      <div
        v-else
        class="h-[400px] overflow-y-auto pr-2 custom-scroll flex flex-col gap-4"
      >
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
            <button @click="cartStore.increment(item.id)">
              <PlusIcon />
            </button>
            <button @click="cartStore.decrement(item.id)">
              <MinusIcon />
            </button>
            <button @click="cartStore.removeFromCart(item.id)">
              <TrashIcon />
            </button>
          </div>
        </div>
      </div>
    </template>

    <div
      class="pt-4 mt-4 border-t border-gray-300 flex items-center justify-between"
    >
      <p class="text-lg font-semibold text-right">
        المجموع: {{ formatCurrency(totalPrice) }} دينار
      </p>
      <button
        class="bg-gray-400 text-white py-2 px-6 rounded-lg cursor-not-allowed"
        disabled
        title="الدفع غير متاح في هذا العرض"
      >
        الدفع
      </button>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '#imports';
import { ref, computed, onMounted } from 'vue';

import { useCartStore } from '~/stores/useCartStore';
import EmptyState from '~/components/UI/EmptyState.vue';
import ImageGridSkeleton from '~/components/UI/ImageGridSkeleton.vue';

import { formatCurrency } from '~/utils/formatters.js';

import TrashIcon from '~/assets/Icons/Trash.vue';
import PlusIcon from '~/assets/Icons/Plus.vue';
import MinusIcon from '~/assets/Icons/Minus.vue';

useHead({
  title: 'My Cart | MyStore',
});

const cartStore = useCartStore();
const isLoaded = ref(false);

onMounted(() => {
  cartStore.load();
  isLoaded.value = true;
});

const cartItems = computed(() => cartStore.cart);
const readyToCheckEmptyState = computed(() => isLoaded.value);

console.log('Cart items:', cartItems.value);

const totalPrice = computed(() =>
  cartItems.value.reduce((sum, item) => {
    const price = parseInt(item.price?.value || '0');
    const quantity = parseInt(item.quantity || '0');
    return sum + price * quantity;
  }, 0)
);
</script>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.4s ease;
}
.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.fade-scale-enter-to {
  opacity: 1;
  transform: scale(1);
}
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.custom-scroll::-webkit-scrollbar {
  width: 6px;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background-color: #c2c2c2;
  border-radius: 10px;
}
.custom-scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
}
</style>
