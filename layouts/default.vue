<template>
  <div>
    <Navbar />

    <main class="px-6 pt-36">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Navbar from '~/components/Layout/Navbar.vue';
</script>
