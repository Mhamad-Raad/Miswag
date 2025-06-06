<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 22"
    fill="none"
    :class="iconClass"
  >
    <path
      d="M8.93579 20.4999L15.0736 8.19766L21.2247 20.4866M10.7678 16.8093H19.3794H10.7678Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.78194 14.8971C2.41799 14.9104 1.25463 14.1884 0.893581 13.1587C0.599396 12.3296 0.933697 11.5407 1.04067 11.2465C1.12091 10.9791 1.25463 10.7651 1.38835 10.5779C1.80288 10.0564 2.45811 9.77558 3.12671 9.77558L12.2999 9.80233"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <path
      d="M11.8853 1.52526C10.722 1.43165 9.82603 1.61886 9.29115 1.77933C8.66266 1.96653 8.2615 2.19386 8.14115 2.26072C7.84696 2.43456 7.36557 2.71537 6.93767 3.25025C6.48302 3.81188 6.32255 4.36013 6.17546 4.8549C5.98825 5.49675 5.96151 5.99152 5.92139 6.68687C5.88127 7.31535 5.92139 7.71651 5.94813 8.17116C6.01499 9.09383 6.13534 9.29442 6.25569 9.44151C6.54988 9.76244 6.99115 9.80255 7.24522 9.80255C9.0237 9.80255 12.0592 9.84267 12.2999 9.8293"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
  </svg>
</template>

<script setup>
defineProps({
  iconClass: {
    type: String,
    default: 'w-6 h-6 text-gray-800',
  },
});
</script>
