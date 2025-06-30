<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-gray-800 mb-8 text-center">Semua Produk</h1>

    <div class="mb-6 flex flex-wrap gap-4 items-center">
      <input
        type="text"
        v-model="searchQuery"
        @input="updateRouteAndFilter"
        placeholder="Cari produk..."
        class="border rounded-md px-3 py-2 w-full md:w-auto flex-grow"
      />
      <select v-model="selectedCategory" @change="updateRouteAndFilter" class="border rounded-md px-3 py-2 w-full md:w-auto">
        <option :value="null">Semua Kategori</option>
        <option v-for="cat in uniqueCategories" :key="cat" :value="cat">{{ cat }}</option>
      </select>
      <Button @click="clearFilters" variant="secondary">Reset Filter</Button>
    </div>

    <LoadingSpinner v-if="productStore.loading" />
    <p v-else-if="productStore.error" class="text-red-500">{{ productStore.error }}</p>
    <div v-else-if="productStore.filteredProducts.length === 0" class="text-center text-gray-600 text-lg">
      Tidak ada produk yang ditemukan dengan filter ini.
    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <ProductCard v-for="product in productStore.filteredProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router'; // Import useRoute and useRouter
import { useProductStore } from '@/store/modules/products';
import ProductCard from '@/components/product/ProductCard.vue';
import Button from '@/components/common/Button.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

const productStore = useProductStore();
const route = useRoute();   // Inisialisasi useRoute
const router = useRouter(); // Inisialisasi useRouter

// Inisialisasi ref dengan nilai dari URL query atau store
const searchQuery = ref(route.query.search || productStore.filters.searchQuery || '');
const selectedCategory = ref(route.query.category || productStore.filters.category || null);

// --- Fungsi untuk memperbarui URL dan Filter di Store ---
const updateRouteAndFilter = () => {
  // Update URL query parameters
  router.replace({
    query: {
      search: searchQuery.value || undefined, // Hapus dari URL jika kosong
      category: selectedCategory.value || undefined, // Hapus dari URL jika null
    }
  }).catch(() => {}); // Tangani error jika navigasi identik atau error lain

  // Update filters in the Pinia store
  productStore.setFilters({
    searchQuery: searchQuery.value,
    category: selectedCategory.value,
  });
};

const clearFilters = () => {
  searchQuery.value = '';
  selectedCategory.value = null;
  productStore.clearFilters();

  // Bersihkan query parameters di URL
  router.replace({ query: {} }).catch(() => {});
};

onMounted(() => {
  // Pastikan produk dimuat
  if (productStore.allProducts.length === 0 && !productStore.loading) {
    productStore.fetchAllProducts();
  }
  // Setelah produk dimuat atau jika sudah ada, terapkan filter awal dari URL
  updateRouteAndFilter();
});

// Ambil kategori unik untuk dropdown filter
const uniqueCategories = computed(() => {
  const categories = new Set();
  productStore.allProducts.forEach(product => {
    // Tambahkan validasi: pastikan kategori adalah string dan tidak kosong/null
    if (typeof product.category === 'string' && product.category.trim() !== '') {
      categories.add(product.category.trim());
    }
  });
  return Array.from(categories).sort();
});

// --- Watchers untuk sinkronisasi URL dan Komponen ---

// Watch untuk perubahan URL query params yang mungkin datang dari luar komponen ini (misal dari CategoriesView)
watch(() => route.query.search, (newSearch) => {
  // Perbarui searchQuery lokal hanya jika berbeda dari nilai di URL
  const currentSearchInRef = searchQuery.value === '' ? undefined : searchQuery.value;
  const newSearchNormalized = newSearch === '' ? undefined : newSearch;

  if (currentSearchInRef !== newSearchNormalized) {
    searchQuery.value = newSearch || '';
    // Terapkan filter di store juga, karena perubahan ini datang dari URL
    productStore.setFilters({
      searchQuery: searchQuery.value,
      category: selectedCategory.value, // Tetap gunakan kategori lokal yang ada
    });
  }
}, { immediate: true }); // `immediate: true` agar watcher berjalan saat komponen pertama kali di-mount

watch(() => route.query.category, (newCategory) => {
  // Perbarui selectedCategory lokal hanya jika berbeda dari nilai di URL
  const currentCategoryInRef = selectedCategory.value === null ? undefined : selectedCategory.value;
  const newCategoryNormalized = newCategory === null ? undefined : newCategory;

  if (currentCategoryInRef !== newCategoryNormalized) {
    selectedCategory.value = newCategory || null;
    // Terapkan filter di store juga
    productStore.setFilters({
      searchQuery: searchQuery.value, // Tetap gunakan search lokal yang ada
      category: selectedCategory.value,
    });
  }
}, { immediate: true });

// --- Watcher untuk sinkronisasi dari Store ke UI jika filter di-reset/diubah oleh aksi lain ---
// (Jika Anda punya cara lain untuk mengubah filters di store selain dari UI ini)
watch(() => productStore.filters.searchQuery, (newVal) => {
  // Pastikan tidak terjadi loop tak terbatas
  if (newVal !== searchQuery.value) {
    searchQuery.value = newVal;
  }
});
watch(() => productStore.filters.category, (newVal) => {
  // Pastikan tidak terjadi loop tak terbatas
  if (newVal !== selectedCategory.value) {
    selectedCategory.value = newVal;
  }
});
</script>