<template>
  <div class="flex justify-center items-center min-h-[60vh] bg-gray-50">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            v-model="credentials.email"
            required
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            v-model="credentials.password"
            required
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <p v-if="authStore.error" class="text-red-500 text-sm mb-4 text-center">{{ authStore.error }}</p>
        <Button type="submit" variant="primary" :disabled="authStore.loading" class="w-full">
          <span v-if="authStore.loading">Loading...</span>
          <span v-else>Login</span>
        </Button>
      </form>
      <p class="text-center text-gray-600 text-sm mt-4">
        Belum punya akun?
        <router-link to="/register" class="text-blue-600 hover:underline">Daftar di sini</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/modules/auth';
import Button from '@/components/common/Button.vue';

const authStore = useAuthStore();
const router = useRouter();

const credentials = reactive({
  email: '',
  password: '',
});

const handleLogin = async () => {
  try {
    const success = await authStore.login(credentials);
    if (success) {
      router.push('/'); // Redirect ke halaman utama setelah login sukses
    }
  } catch (error) {
    // Error sudah ditangani di store, tapi bisa log di sini jika perlu
    console.error('Login failed in component:', error);
  }
};
</script>