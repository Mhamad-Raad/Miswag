<template>
  <form
    class="flex-grow max-w-[761px] px-[15px] py-[11px] hidden lg:flex items-center justify-end gap-[11px] bg-white border border-[#d0d0d0] rounded-2xl"
  >
    <input
      type="text"
      v-model="searchStore.query"
      placeholder="ابحث عن منتج او ماركة"
      class="w-full text-right outline-none"
    />
    <SearchIcon />
  </form>
</template>

<script setup>
import SearchIcon from '~/assets/Icons/Search.vue';

import { useSearchStore } from '~/stores/useSearchStore';

const searchStore = useSearchStore();
</script>
