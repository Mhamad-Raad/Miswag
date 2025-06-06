<template>
  <nav class="py-6 px-7 fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
    <div
      class="w-full bg-[#dfdfe880] py-[18px] pl-[100px] pr-[29px] flex items-center justify-between gap-[182px] rounded-3xl border border-[#e8e8e880]"
    >
      <ActionIcons />
      <div class="w-full max-w-[761px] flex items-center gap-10">
        <LangSwitcher />
        <SearchBar />
        <Logo class="w-[133px] h-[42px] ml-3" />
      </div>
    </div>
  </nav>
</template>

<script setup>
import ActionIcons from './ActionIcons.vue';
import LangSwitcher from './LangSwitcher.vue';
import SearchBar from './SearchBar.vue';
import Logo from '../../UI/Logo.vue';
</script>
