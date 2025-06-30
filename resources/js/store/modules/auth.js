// src/store/modules/auth.js
import { defineStore } from 'pinia';
import { loginUser, registerUser, getUserProfile } from '@/api/auth'; // Mengambil fungsi API dari folder api/

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('currentUser')) || null, // Ambil dari localStorage
        token: localStorage.getItem('authToken') || null,
        isAuthenticated: !!localStorage.getItem('authToken'),
        loading: false,
        error: null,
    }),

    getters: {
        isLoggedIn: (state) => state.isAuthenticated,
        authToken: (state) => state.token,
        currentUser: (state) => state.user,
    },

    actions: {
        async login(credentials) {
            this.loading = true;
            this.error = null;
            try {
                const response = await loginUser(credentials);
                const { token, user } = response.data; // Asumsi API mengembalikan token dan user

                this.token = token;
                this.user = user;
                this.isAuthenticated = true;
                localStorage.setItem('authToken', token);
                localStorage.setItem('currentUser', JSON.stringify(user)); // Simpan user juga
                
                return true;
            } catch (err) {
                this.error = err.response?.data?.message || 'Login failed. Please check your credentials.';
                this.isAuthenticated = false;
                this.token = null;
                this.user = null;
                localStorage.removeItem('authToken');
                localStorage.removeItem('currentUser');
                throw err;
            } finally {
                this.loading = false;
            }
        },

        logout() {
            this.user = null;
            this.token = null;
            this.isAuthenticated = false;
            localStorage.removeItem('authToken');
            localStorage.removeItem('currentUser');
        },

        async fetchUserProfile() {
            if (!this.token) {
                this.isAuthenticated = false;
                return;
            }
            this.loading = true;
            this.error = null;
            try {
                const response = await getUserProfile();
                this.user = response.data.user; // Asumsi API mengembalikan user di data.user
                this.isAuthenticated = true;
                localStorage.setItem('currentUser', JSON.stringify(this.user)); // Update localStorage
            } catch (err) {
                this.error = err.response?.data?.message || 'Failed to fetch user profile.';
                this.logout();
                throw err;
            } finally {
                this.loading = false;
            }
        },

        async register(userData) {
            this.loading = true;
            this.error = null;
            try {
                const response = await registerUser(userData);
                return response.data;
            } catch (err) {
                this.error = err.response?.data?.message || 'Registration failed.';
                throw err;
            } finally {
                this.loading = false;
            }
        },
    },
});