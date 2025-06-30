// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/store/modules/auth'; // Import store untuk guard

import HomeView from '@/views/HomeView.vue';
import ProductsView from '@/views/ProductsView.vue';
import ProductDetailView from '@/views/ProductDetailView.vue';
import CartView from '@/views/CartView.vue';
import CheckoutView from '@/views/CheckoutView.vue';
import LoginView from '@/views/Auth/LoginView.vue';
import RegisterView from '@/views/Auth/RegisterView.vue';
import UserProfileView from '@/views/User/UserProfileView.vue';
import CategoriesView from '@/views/CategoriesView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/products',
    name: 'ProductsView',
    component: ProductsView,
  },
  {
    path: '/products/:id', // Dynamic route for product detail
    name: 'ProductDetail',
    component: ProductDetailView,
    props: true, // Pass route params as props to component
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutView,
    meta: { requiresAuth: true }, // Tambahkan meta field untuk guard
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfileView,
    meta: { requiresAuth: true }, // Halaman ini membutuhkan autentikasi
  },
  {
    path: '/orders', // Contoh halaman pesanan
    name: 'Orders',
    component: () => import('@/views/User/UserOrdersView.vue'), // Lazy-load
    meta: { requiresAuth: true },
  },
  // Tambahkan rute lain seperti /about, /contact, /categories jika diperlukan
  {
    path: '/categories',
    name: 'Categories',
    component: CategoriesView,
  },
  {
    path: '/about',
    name: 'About',
    component: CartView,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: CartView,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // --- TAMBAHKAN BAGIAN scrollBehavior INI ---
  scrollBehavior(to, from, savedPosition) {
    // Jika ada posisi tersimpan (misalnya, dari tombol kembali browser), gunakan itu
    if (savedPosition) {
      return savedPosition;
    } else {
      // Gulir ke atas (0, 0) untuk setiap navigasi baru
      return { top: 0, left: 0, behavior: 'smooth' };
    }
  },
  // --- AKHIR DARI scrollBehavior ---
});

// Navigation Guard
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  // Pastikan user profile dimuat jika token ada tapi user belum ada
  if (authStore.token && !authStore.currentUser) {
    try {
      await authStore.fetchUserProfile();
    } catch (error) {
      console.error('Failed to fetch user profile on route guard:', error);
      authStore.logout(); // Logout jika token tidak valid
      return next('/login');
    }
  }

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    // Jika rute membutuhkan autentikasi tapi user belum login
    next('/login');
  } else if ((to.name === 'Login' || to.name === 'Register') && authStore.isLoggedIn) {
    // Jika user sudah login tapi mencoba akses halaman login/register
    next('/profile'); // Redirect ke profil atau home
  } else {
    next(); // Lanjutkan navigasi
  }
});

export default router;