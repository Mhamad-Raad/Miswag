<template>
  <div class="p-8">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div v-for="(block, index) in contentBlocks" :key="index" class="mb-6">
        <ProductList
          v-if="block.type === 'products'"
          :products="block.content"
          :properties="block.properties"
          :key="block.id"
        />
        <ImageGrid v-if="block.type === 'grid'" :grid="block" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHomeContent } from '~/composables/useHomeContent';
import ProductList from '~/components/home/ProductList.vue';
import ImageGrid from '~/components/home/ImageGrid.vue';

const { contentBlocks, loading, error } = useHomeContent();
</script>

<!-- the followings need to be done -->

<!-- add Modal -->
<!-- add Skeleton loading (Modal as well)-->
<!-- add functionality to favorites with local host -->
<!-- add favorites page -->
<!-- add functionality to search -->
