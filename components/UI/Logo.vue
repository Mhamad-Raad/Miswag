<template>
  <img
    src="~/assets/Logo.png"
    alt="Logo"
    width="133"
    height="42"
    class="w-[133px] h-[42px] ml-3"
    fetchpriority="high"
    decoding="async"
    loading="eager"
    v-bind="$attrs"
  />
</template>

<script setup>
defineOptions({ inheritAttrs: false });
</script>
