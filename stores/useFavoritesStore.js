import { defineStore } from 'pinia';

const FAVORITES_KEY = 'favoriteProducts';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: new Set(),
  }),

  getters: {
    list: (state) => [...state.favorites],
    isFavorited: (state) => (id) => state.favorites.has(id),
  },

  actions: {
    load() {
      if (process.client) {
        const stored = localStorage.getItem(FAVORITES_KEY);
        if (stored) {
          this.favorites = new Set(JSON.parse(stored));
        }
      }
    },
    save() {
      if (process.client) {
        localStorage.setItem(
          FAVORITES_KEY,
          JSON.stringify([...this.favorites])
        );
      }
    },
    toggle(id) {
      if (this.favorites.has(id)) {
        this.favorites.delete(id);
      } else {
        this.favorites.add(id);
      }
      this.save();
    },
    remove(id) {
      this.favorites.delete(id);
      this.save();
    },
    clear() {
      this.favorites.clear();
      this.save();
    },
  },
});
