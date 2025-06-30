<template>
  <div class="flex justify-center items-center min-h-[60vh] bg-gray-50">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">Daftar Akun Baru</h1>
      <form @submit.prevent="handleRegister">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nama Lengkap:</label>
          <input
            type="text"
            id="name"
            v-model="userData.name"
            required
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            v-model="userData.email"
            required
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            v-model="userData.password"
            required
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <p v-if="authStore.error" class="text-red-500 text-sm mb-4 text-center">{{ authStore.error }}</p>
        <Button type="submit" variant="primary" :disabled="authStore.loading" class="w-full">
          <span v-if="authStore.loading">Mendaftar...</span>
          <span v-else>Daftar Sekarang</span>
        </Button>
      </form>
      <p class="text-center text-gray-600 text-sm mt-4">
        Sudah punya akun?
        <router-link to="/login" class="text-blue-600 hover:underline">Login di sini</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/modules/auth';
import Button from '@/components/common/Button.vue';
import { useAlertDialog } from '@/composables/useAlertDialog'; // Import composable
const { showAlertDialog } = useAlertDialog(); // Dapatkan fungsi untuk menampilkan modal

const authStore = useAuthStore();
const router = useRouter();

const userData = reactive({
  name: '',
  email: '',
  password: '',
});

const handleRegister = async () => {
  try {
    await authStore.register(userData);
    showAlertDialog({
        title: 'Berhasil!',
        message: `Registrasi berhasil! Silakan login.`,
        type: 'success',
    });
    router.push('/login'); // Redirect ke halaman login setelah registrasi
  } catch (error) {
    console.error('Registration failed in component:', error);
  }
};
</script>