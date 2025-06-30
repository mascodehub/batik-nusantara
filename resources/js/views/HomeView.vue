<template>
  <div class="text-center py-10">
    <section class="hero-carousel mb-12">
      <ImageCarousel :images="carouselImages" :autoplay="true" :interval="5000" />
    </section>

    <section class="mt-16">
      <h2 class="text-3xl font-bold text-gray-800 mb-8">Produk Terbaru</h2>
      <LoadingSpinner v-if="productStore.loading" />
      <p v-else-if="productStore.error" class="text-red-500">{{ productStore.error }}</p>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ProductCard
          v-for="product in productStore.allProducts.slice(0, 4)"
          :key="product.id"
          :product="product"
        />
      </div>
      <router-link to="/products" class="mt-8 inline-block text-blue-600 hover:underline">Lihat Lebih Banyak Produk</router-link>
    </section>
  </div>
</template>

<script setup>
import Button from '@/components/common/Button.vue';
import ProductCard from '@/components/product/ProductCard.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { useProductStore } from '@/store/modules/products';
import { onMounted } from 'vue';
import ImageCarousel from '@/components/common/ImageCarousel.vue'; // Import komponen carousel

const productStore = useProductStore();

const carouselImages = [
  {
    src: 'https://placehold.co/1600x400',
    alt: 'Koleksi Musim Panas Terbaru',
    text: 'Koleksi Musim Panas Terbaru',
  },
  {
    src: 'https://placehold.co/1600x400',
    alt: 'Promo Spesial Pakaian Pria',
    text: 'Diskon Menarik untuk Pria',
  },
  {
    src: 'https://placehold.co/1600x400',
    alt: 'Elegansi Gaya Wanita',
    text: 'Gaya Elegan untuk Wanita',
  },
  {
    src: 'https://placehold.co/1600x400',
    alt: 'Aksesori Fashion Lengkap',
    text: 'Lengkapi Gayomu dengan Aksesori Kami',
  },
];


onMounted(() => {
  // Hanya fetch jika produk belum ada untuk menghindari duplikasi fetch
  if (productStore.allProducts.length === 0) {
    productStore.fetchAllProducts();
  }
});
</script>