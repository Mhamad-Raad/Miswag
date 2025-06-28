import { ref, onMounted } from 'vue';
import { convertKeysToCamelCase } from '~/utils/formatters';
import jsonData from '~/Data.json'; // adjust path if needed

export function useHomeContent() {
  const contentBlocks = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchContent = async () => {
    loading.value = true;
    error.value = null;

    try {
      const data = jsonData;

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
    refetch: fetchContent,
  };
}
