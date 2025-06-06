<template>
  <nav class="py-6 px-7 fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
    <div
      class="w-full bg-[#dfdfe880] py-[18px] pl-[134px] pr-[29px] flex items-center justify-between gap-[182px] rounded-3xl border border-[#e8e8e880]"
    >
      <div class="flex items-center gap-[28px]">
        <div class="flex items-center gap-[22px]">
          <button
            class="px-[14px] py-[11px] bg-[#ffefe9] rounded-2xl"
            type="button"
          >
            <CartIcon />
          </button>
          <button type="button">
            <HeartIcon />
          </button>
        </div>
        <button
          class="py-[11px] px-[12.5px] bg-white flex items-center gap-[2px] rounded-xl"
          type="button"
        >
          <p class="text-sm text-[#1a1717] font-medium">انشاءحساب</p>
          <ProfileIcon />
        </button>
      </div>

      <div class="w-full max-w-[761px] flex items-center gap-10">
        <button type="button" class="flex items-center gap-2">
          <p>العربيه</p>
          <ArabicIcon class="w-6 h-6 text-gray-800" />
        </button>
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
        <img
          src="~/assets/Logo.png"
          alt="Logo"
          class="w-[133px] h-[42px] ml-3"
        />
      </div>
    </div>
  </nav>
</template>

<script setup>
import CartIcon from '~/assets/Icons/Cart.vue';
import HeartIcon from '~/assets/Icons/Heart.vue';
import ProfileIcon from '~/assets/Icons/Profile.vue';
import SearchIcon from '~/assets/Icons/Search.vue';
import ArabicIcon from '~/assets/Icons/Arabic.vue';
</script>
