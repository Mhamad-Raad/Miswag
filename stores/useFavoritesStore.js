import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref([]);

  function load() {
    if (process.client) {
      const stored = localStorage.getItem('favoriteProducts');
      favorites.value = stored ? JSON.parse(stored) : [];
    }
  }

  function toggle(id) {
    const index = favorites.value.indexOf(id);
    if (index === -1) {
      favorites.value.push(id);
    } else {
      favorites.value.splice(index, 1);
    }
    localStorage.setItem('favoriteProducts', JSON.stringify(favorites.value));
  }

  function isFavorited(id) {
    return favorites.value.includes(id);
  }

  return { favorites, load, toggle, isFavorited };
});
