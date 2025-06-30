<template>
  <router-link
    v-if="categoryName" :to="{ name: 'ProductsView', query: { category: categoryName } }"
    class="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden text-center p-6 cursor-pointer"
  >
    <div class="mb-4">
      <font-awesome-icon :icon="['fas', getCategoryIcon(categoryName)]" class="text-5xl text-blue-600" />
    </div>
    <h3 class="text-xl font-semibold text-gray-800">{{ categoryName }}</h3>
  </router-link>
  <div v-else class="text-red-500">Kategori tidak valid!</div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  categoryName: {
    type: String,
    required: true,
  },
});

// Fungsi untuk mendapatkan ikon berdasarkan nama kategori
const getCategoryIcon = (category) => {
  // Pastikan kategori tidak undefined sebelum toLowerCase
  if (!category) return 'tags'; // Fallback jika category tiba-tiba undefined
  
  switch (category.toLowerCase()) {
    case 't-shirt':
      return 'tshirt';
    case 'kemeja':
      return 'shirt';
    case 'celana':
      return 'compass';
    case 'jaket':
      return 'jacket';
    default:
      return 'tags';
  }
};
</script>