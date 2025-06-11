<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-6 text-right">عربة التسوق</h1>

    <ImageGridSkeleton v-if="!readyToCheckEmptyState" count="1" cols="1" />

    <Transition name="fade-scale" appear>
      <div
        v-if="readyToCheckEmptyState && cartItems.length === 0"
        class="text-center py-10"
      >
        <EmptyState
          title="السلة فارغة"
          message="أضف بعض المنتجات لعرضها هنا."
        />
      </div>
    </Transition>

    <TransitionGroup name="fade-scale" tag="div" class="space-y-6" appear>
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
          <button @click="cartStore.increment(item.id)" title="زيادة الكمية">
            <PlusIcon />
          </button>
          <button @click="cartStore.decrement(item.id)" title="تقليل الكمية">
            <MinusIcon />
          </button>
          <button @click="cartStore.removeFromCart(item.id)" title="حذف المنتج">
            <TrashIcon />
          </button>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { useHead } from '#imports';
import { ref, computed, onMounted } from 'vue';

import { useCartStore } from '~/stores/useCartStore';
import EmptyState from '~/components/UI/EmptyState.vue';
import ImageGridSkeleton from '~/components/UI/ImageGridSkeleton.vue';

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
</style>
