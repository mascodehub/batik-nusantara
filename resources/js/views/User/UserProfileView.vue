<template>
  <div class="container mx-auto p-4">
    <LoadingSpinner v-if="authStore.loading" />
    <div v-else-if="authStore.error" class="text-red-500 text-center">{{ authStore.error }}</div>
    <div v-else-if="authStore.currentUser" class="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
      <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">Profil Pengguna</h1>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Nama:</label>
        <p class="text-gray-900 text-lg">{{ authStore.currentUser.name }}</p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
        <p class="text-gray-900 text-lg">{{ authStore.currentUser.email }}</p>
      </div>
      <div class="mt-6 text-center">
        <router-link to="/orders">
          <Button variant="secondary">Lihat Pesanan Saya</Button>
        </router-link>
      </div>
    </div>
    <div v-else class="text-center text-gray-600 py-10">
      Silakan <router-link to="/login" class="text-blue-600 hover:underline">login</router-link> untuk melihat profil Anda.
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/store/modules/auth';
import { onMounted } from 'vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

const authStore = useAuthStore();

onMounted(() => {
  // Pastikan profil user sudah dimuat jika belum ada
  if (!authStore.currentUser && authStore.token) {
    authStore.fetchUserProfile();
  }
});
</script>