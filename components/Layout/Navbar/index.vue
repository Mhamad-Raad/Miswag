<template>
  <nav class="py-6 px-7 fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
    <div
      class="w-full bg-[#dfdfe880] py-[18px] lg:pl-[100px] px-[29px] flex items-center justify-between lg:gap-[182px] rounded-3xl border border-[#e8e8e880]"
    >
      <div :style="iconStyle" class="transition-all duration-500">
        <ActionIcons />
      </div>

      <div
        class="lg:w-full max-w-[761px] flex items-center justify-end gap-10"
      >
        <div :style="langStyle" class="transition-all duration-500 delay-200">
          <LangSwitcher />
        </div>
        <div :style="searchStyle" class="transition-all duration-500 delay-300">
          <SearchBar />
        </div>
        <NuxtLink to="/">
          <div :style="logoStyle" class="transition-all duration-500 delay-400">
            <Logo class="w-[133px] h-[42px] ml-3" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ActionIcons from './ActionIcons.vue';
import LangSwitcher from './LangSwitcher.vue';
import SearchBar from './SearchBar.vue';
import Logo from '../../UI/Logo.vue';

const iconStyle = ref({ opacity: 0, transform: 'translateX(-30px)' });
const langStyle = ref({ opacity: 0, transform: 'translateY(-20px)' });
const searchStyle = ref({ opacity: 0, transform: 'translateY(-20px)' });
const logoStyle = ref({ opacity: 0, transform: 'translateX(30px)' });

onMounted(() => {
  setTimeout(
    () => (iconStyle.value = { opacity: 1, transform: 'translateX(0)' }),
    100
  );
  setTimeout(
    () => (langStyle.value = { opacity: 1, transform: 'translateY(0)' }),
    200
  );
  setTimeout(
    () => (searchStyle.value = { opacity: 1, transform: 'translateY(0)' }),
    300
  );
  setTimeout(
    () => (logoStyle.value = { opacity: 1, transform: 'translateX(0)' }),
    400
  );
});
</script>
