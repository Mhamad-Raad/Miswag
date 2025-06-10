import { ref, computed, onMounted } from 'vue';

const FAVORITES_KEY = 'favoriteProducts';

export function useFavorites() {
  const favorites = ref(new Set());

  const loadFavorites = () => {
    if (process.client) {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) {
        favorites.value = new Set(JSON.parse(stored));
      }
    }
  };

  const saveFavorites = () => {
    if (process.client) {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites.value]));
    }
  };

  const toggleFavorite = (productId) => {
    if (favorites.value.has(productId)) {
      favorites.value.delete(productId);
    } else {
      favorites.value.add(productId);
    }
    saveFavorites();
  };

  const isFavorited = (productId) => {
    return favorites.value.has(productId);
  };

  onMounted(() => {
    loadFavorites();
  });

  return {
    toggleFavorite,
    isFavorited,
    favorites: computed(() => [...favorites.value]),
  };
}
