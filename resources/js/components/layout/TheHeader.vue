<template>
  <header class="bg-white shadow-md p-4">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-2xl font-bold text-gray-800">TokoBaju</router-link>

      <nav class="hidden md:flex space-x-6">
        <router-link to="/products" class="text-gray-600 hover:text-gray-900">Produk</router-link>
        <router-link to="/categories" class="text-gray-600 hover:text-gray-900">Kategori</router-link>
        <router-link to="/about" class="text-gray-600 hover:text-gray-900">Tentang Kami</router-link>
        <router-link to="/contact" class="text-gray-600 hover:text-gray-900">Kontak</router-link>
      </nav>

      <div class="flex items-center space-x-4">
        <router-link to="/cart" class="relative text-gray-600 hover:text-gray-900">
          <font-awesome-icon :icon="['fas', 'shopping-cart']" class="text-xl" />
          <span v-if="cartStore.totalItems > 0" class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {{ cartStore.totalItems }}
          </span>
        </router-link>

        <router-link v-if="!authStore.isLoggedIn" to="/login" class="text-gray-600 hover:text-gray-900">
          <font-awesome-icon :icon="['fas', 'user']" class="text-xl" />
        </router-link>
        <div v-else class="relative group">
          <button class="text-gray-600 hover:text-gray-900 flex items-center">
            <font-awesome-icon :icon="['fas', 'user']" class="text-xl mr-1" />
            <span class="hidden md:inline">{{ authStore.currentUser?.name || 'Profil' }}</span>
          </button>
          <div class="absolute right-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-10">
            <router-link to="/profile" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profil</router-link>
            <router-link to="/orders" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Pesanan Saya</router-link>
            <button @click="handleLogout" class="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">Logout</button>
          </div>
        </div>

        <button @click="toggleMobileMenu" class="md:hidden text-gray-600 hover:text-gray-900">
          <font-awesome-icon :icon="['fas', 'bars']" class="text-xl" v-if="!isMobileMenuOpen" />
          <font-awesome-icon :icon="['fas', 'times']" class="text-xl" v-else />
        </button>
      </div>
    </div>

    <div v-if="isMobileMenuOpen" class="md:hidden bg-white shadow-lg py-4 px-4 mt-2">
      <router-link to="/products" class="block py-2 text-gray-600 hover:text-gray-900">Produk</router-link>
      <router-link to="/categories" class="block py-2 text-gray-600 hover:text-gray-900">Kategori</router-link>
      <router-link to="/about" class="block py-2 text-gray-600 hover:text-gray-900">Tentang Kami</router-link>
      <router-link to="/contact" class="block py-2 text-gray-600 hover:text-gray-900">Kontak</router-link>
      <hr class="my-2" />
      <router-link v-if="!authStore.isLoggedIn" to="/login" class="block py-2 text-gray-600 hover:text-gray-900">Login / Daftar</router-link>
      <router-link v-else to="/profile" class="block py-2 text-gray-600 hover:text-gray-900">Profil</router-link>
      <router-link v-else to="/orders" class="block py-2 text-gray-600 hover:text-gray-900">Pesanan Saya</router-link>
      <button v-else @click="handleLogout" class="block w-full text-left py-2 text-red-600 hover:bg-gray-100">Logout</button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/modules/auth';
import { useCartStore } from '@/store/modules/cart';
import { useAlertDialog } from '@/composables/useAlertDialog'; // Import composable

const authStore = useAuthStore();
const cartStore = useCartStore();
const router = useRouter();
const { showAlertDialog } = useAlertDialog(); // Dapatkan fungsi untuk menampilkan modal

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const handleLogout = async () => {
  try {
    // await authStore.logoutUserApi(); // Jika ada API logout di backend
    authStore.logout(); // Panggil aksi logout di Pinia store
    router.push('/login'); // Redirect ke halaman login
  } catch (error) {
    console.error('Error during logout:', error);
    showAlertDialog({
        title: 'Gagal!',
        message: 'Terjadi kesalahan saat logout. Silakan coba lagi.',
        type: 'error',
    });
  }
};
</script>