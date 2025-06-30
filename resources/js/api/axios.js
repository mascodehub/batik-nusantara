// src/api/axios.js
import axios from 'axios';
import { useAuthStore } from '@/store/modules/auth';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_APP_API_BASE_URL || 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    withCredentials: true, // Penting untuk sesi atau cookie jika menggunakan Laravel Sanctum atau sejenisnya
});

apiClient.interceptors.request.use(
    (config) => {
        const authStore = useAuthStore();
        if (authStore.token) {
            config.headers.Authorization = `Bearer ${authStore.token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        const authStore = useAuthStore();
        if (error.response && error.response.status === 401) {
            console.error('Unauthorized request. Logging out...');
            authStore.logout();
            // Anda mungkin ingin menambahkan redirect ke halaman login di sini
            // Contoh: router.push('/login');
        }
        return Promise.reject(error);
    }
);

export default apiClient;