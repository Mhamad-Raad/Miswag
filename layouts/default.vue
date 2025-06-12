<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />

    <main class="flex-1 px-3 lg:px-6 pt-36">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/components/Layout/Navbar/index.vue';
import Footer from '~/components/Layout/Footer.vue';
</script>
