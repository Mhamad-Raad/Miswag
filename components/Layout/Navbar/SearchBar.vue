<template>
  <form
    v-if="route.path !== '/cart'"
    class="px-[15px] py-[11px] hidden lg:flex items-center justify-end gap-[11px] bg-white border border-[#d0d0d0] rounded-2xl"
  >
    <input
      type="text"
      v-model="searchStore.query"
      placeholder="ابحث عن منتج او ماركة"
      class="w-full text-right"
    />
    <SearchIcon />
  </form>
</template>

<script setup>
import { useSearchStore } from '~/stores/useSearchStore';
import { useRoute } from 'vue-router';

import SearchIcon from '~/assets/Icons/Search.vue';

const searchStore = useSearchStore();
const route = useRoute();
</script>
