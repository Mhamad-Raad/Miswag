<template>
  <form
    class="flex-grow max-w-[761px] px-[15px] py-[11px] flex items-center justify-end gap-[11px] bg-white border border-[#d0d0d0] rounded-2xl"
  >
    <input
      type="text"
      placeholder="ابحث عن منتج او ماركة"
      class="w-full text-right"
    />
    <SearchIcon />
  </form>
</template>

<script setup>
import SearchIcon from '~/assets/Icons/Search.vue';
</script>
