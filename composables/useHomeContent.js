import { ref, onMounted } from 'vue';
import axios from 'axios';

function toCamelCase(str) {
  return str.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}

function convertKeysToCamelCase(obj) {
  if (!obj || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(convertKeysToCamelCase);

  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[toCamelCase(key)] = convertKeysToCamelCase(value);
    return acc;
  }, {});
}

export function useHomeContent() {
  const contentBlocks = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchContent = async () => {
    loading.value = true;
    try {
      const { data } = await axios.get(
        'https://run.mocky.io/v3/f37b5d0d-ee4c-4d81-b91e-09c30ed62bb8'
      );

      contentBlocks.value = Array.isArray(data?.content)
        ? data.content.map((block) => ({
            ...block,
            properties: convertKeysToCamelCase(block.properties),
            content: Array.isArray(block.content)
              ? block.content.map((item) =>
                  block.type === 'products'
                    ? convertKeysToCamelCase(item)
                    : item
                )
              : [],
          }))
        : [];
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchContent);

  return {
    contentBlocks,
    loading,
    error,
  };
}
