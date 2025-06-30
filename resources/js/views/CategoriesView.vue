<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-gray-800 mb-8 text-center">Jelajahi Kategori Kami</h1>

    <div v-if="productStore.loading" class="flex justify-center items-center h-48">
      <LoadingSpinner />
    </div>

    <div v-else-if="productStore.error" class="text-center text-red-500 text-lg">
      <p>Terjadi kesalahan saat memuat kategori: {{ productStore.error }}</p>
      <Button @click="productStore.fetchAllProducts" variant="secondary" class="mt-4">Coba Lagi</Button>
    </div>

    <div v-else-if="uniqueCategories.length === 0" class="text-center text-gray-600 text-lg">
      <p>Belum ada kategori yang tersedia saat ini.</p>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <CategoryCard v-for="category in uniqueCategories" :key="category" :category-name="category" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useProductStore } from '@/store/modules/products';
import CategoryCard from '@/components/category/CategoryCard.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import Button from '@/components/common/Button.vue';

const productStore = useProductStore();

// Getter yang dihitung untuk mendapatkan kategori unik dari semua produk
const uniqueCategories = computed(() => {
  const categories = new Set();
  productStore.allProducts.forEach(product => {
    // Memastikan kategori adalah string yang valid dan tidak kosong
    if (typeof product.category === 'string' && product.category.trim() !== '') {
      categories.add(product.category.trim()); // .trim() untuk menghapus spasi di awal/akhir
    }
  });
  // Mengubah Set menjadi Array dan mengurutkannya secara alfabetis (opsional)
  return Array.from(categories).sort();
});

onMounted(() => {
  // Pastikan produk sudah dimuat untuk mendapatkan kategori
  if (productStore.allProducts.length === 0 && !productStore.loading) {
    productStore.fetchAllProducts();
  }
});
</script>

<style scoped>
/* Tidak ada gaya khusus yang dibutuhkan karena menggunakan Tailwind */
</style>