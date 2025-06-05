<template>
  <div>
    <Navbar />

    <main class="p-6">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Navbar from '~/components/Layout/Navbar.vue';
</script>
