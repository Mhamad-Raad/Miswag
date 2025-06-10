import { defineStore } from 'pinia';

const CART_KEY = 'cartItems';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),

  actions: {
    load() {
      if (process.client) {
        const stored = localStorage.getItem(CART_KEY);
        this.cart = stored ? JSON.parse(stored) : [];
      }
    },

    save() {
      localStorage.setItem(CART_KEY, JSON.stringify(this.cart));
    },

    addToCart(product) {
      const existing = this.cart.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
      this.save();
    },

    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
      this.save();
    },

    increment(productId) {
      const item = this.cart.find((p) => p.id === productId);
      if (item) {
        item.quantity++;
        this.save();
      }
    },

    decrement(productId) {
      const item = this.cart.find((p) => p.id === productId);
      if (item && item.quantity > 1) {
        item.quantity--;
        this.save();
      } else {
        this.removeFromCart(productId);
      }
    },
  },

  getters: {
    totalItems: (state) =>
      state.cart.reduce((acc, item) => acc + item.quantity, 0),
    isInCart: (state) => (id) => state.cart.some((p) => p.id === id),
  },
});
