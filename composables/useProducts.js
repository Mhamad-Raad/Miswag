import { ref, onMounted } from 'vue';
import axios from 'axios';

export function useProducts() {
  const products = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchProducts = async () => {
    loading.value = true;
    try {
      const { data } = await axios.get(
        'https://run.mocky.io/v3/f37b5d0d-ee4c-4d81-b91e-09c30ed62bb8'
      );

      products.value = Array.isArray(data?.content) ? data.content : [];
    } catch (err) {
      error.value = err.message;
      console.error('API Error:', err);
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchProducts);

  return { products, loading, error };
}
