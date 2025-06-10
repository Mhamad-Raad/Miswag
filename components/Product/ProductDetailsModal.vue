<template>
  <Teleport to="body">
    <transition name="fade">
      <div
        v-if="open"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        @click.self="onClose"
      >
        <div class="bg-white px-6 py-[26px] rounded-2xl w-[613px] relative">
          <div class="w-full flex justify-between items-center">
            <button @click="onClose" class="text-gray-500 hover:text-black">
              <XIcon />
            </button>
            <h3 class="text-right max-w-[520px] line-clamp-1 pt-5" dir="rtl">
              <span class="font-bold">{{ product?.brand }}</span>
              {{ product?.title }}
            </h3>
          </div>

          <div class="flex flex-col items-end gap-4 mt-10">
            <div
              v-if="product?.colors.length > 0"
              class="flex items-center gap-2"
            >
              <div class="flex gap-2">
                <button
                  v-for="(color, index) in product?.colors"
                  :key="index"
                  class="w-6 h-6 rounded-full border-2"
                  :style="{ backgroundColor: color }"
                  :class="{
                    'border-red-500 ring ring-red-200': selectedColor === color,
                    'border-[#f1f2f5]': selectedColor !== color,
                  }"
                  @click="selectedColor = color"
                ></button>
              </div>
              <h2 class="text-right text-black font-bold">:الألوان</h2>
            </div>
            <img
              :src="product?.image"
              alt=""
              class="w-[185px] h-[185px] rounded-lg border-2 border-[#f69393] object-cover"
              :class="`aspect-[${parseFloat(properties?.imageRatio || '1')}/1]`"
            />
          </div>
          <div class="flex flex-col items-end gap-4 mt-[5px]">
            <h2 class="text-right text-black font-bold">:الحجم</h2>
            <!-- repeat this if there were more options with a loop -->
            <button
              type="button"
              class="py-[10px] px-[25px] rounded-2xl border border-[#d22525] text-black font-semibold"
            >
              <!-- {{ product?.size }} -->
              Default
            </button>
          </div>
          <div
            class="flex flex-col-reverse lg:flex-row items-baseline justify-between gap-4 mt-10"
          >
            <div class="flex gap-[18px] items-baseline justify-end">
              <button
                type="button"
                class="py-[12px] px-[41.5px] text-primary font-semibold border border-primary rounded-2xl"
                @click="onClose"
              >
                الغاء
              </button>

              <button
                type="button"
                class="py-[12px] px-[41.5px] text-white font-semibold bg-primary rounded-2xl"
                @click="handleAddToCart"
              >
                اضافة الى السلة
              </button>
            </div>
            <p
              class="w-full lg:w-auto text-[#141414] text-lg text-center lg:text-left font-semibold border border-[#e7e5e5] rounded-xl px-[48.5px] py-3"
            >
              {{
                `${product?.price?.currency} ${formatCurrency(
                  product?.price?.value,
                  product?.price?.currency
                )}`
              }}
            </p>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import { useCartStore } from '~/stores/useCartStore';

import XIcon from '~/assets/Icons/X.vue';

import { formatCurrency } from '~/utils/formatters';

const selectedColor = ref(null);
const cartStore = useCartStore();

const { product, open, onClose } = defineProps({
  open: Boolean,
  product: Object,
  onClose: Function,
});

onMounted(() => {
  if (Array.isArray(product?.colors) && product.colors.length > 0) {
    selectedColor.value = product.colors[0];
  }
});

const handleAddToCart = () => {
  if (product?.id) {
    cartStore.addToCart(product, 1);
    onClose();
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
