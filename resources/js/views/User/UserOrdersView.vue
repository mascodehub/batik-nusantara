<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Pesanan Saya</h1>

    <LoadingSpinner v-if="loading" />
    <p v-else-if="error" class="text-red-500 text-center">{{ error }}</p>
    <div v-else-if="orders.length === 0" class="text-center text-gray-600 py-10">
      Anda belum memiliki pesanan.
    </div>
    <div v-else class="bg-white shadow-md rounded-lg p-6">
      <div v-for="order in orders" :key="order.id" class="border-b pb-4 mb-4 last:border-b-0 last:pb-0">
        <div class="flex justify-between items-center mb-2">
          <h2 class="font-semibold text-xl">Pesanan #{{ order.id }}</h2>
          <span :class="['px-3 py-1 rounded-full text-sm font-medium', order.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800']">
            {{ order.status }}
          </span>
        </div>
        <p class="text-gray-600 text-sm mb-2">Tanggal: {{ new Date(order.order_date).toLocaleDateString('id-ID') }}</p>
        <p class="font-bold text-lg">Total: Rp {{ order.total_amount.toLocaleString('id-ID') }}</p>
        <ul class="list-disc list-inside text-sm text-gray-700 mt-2">
          <li v-for="item in order.items" :key="item.product_id">
            {{ item.product_name }} ({{ item.quantity }}x) - Rp {{ item.price.toLocaleString('id-ID') }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getOrderHistory } from '@/api/cart'; // Menggunakan API cart untuk order history
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { useAuthStore } from '@/store/modules/auth'; // Untuk mengecek login

const orders = ref([]);
const loading = ref(false);
const error = ref(null);
const authStore = useAuthStore();

onMounted(async () => {
  if (!authStore.isLoggedIn) {
    // Handle redirect or message if not logged in (already handled by router guard)
    return;
  }
  loading.value = true;
  error.value = null;
  try {
    const response = await getOrderHistory();
    // Contoh data dummy jika API belum siap
    orders.value = response.data || [
      {
        id: 'ORD001',
        order_date: '2025-06-25T10:00:00Z',
        total_amount: 250000,
        status: 'completed',
        items: [
          { product_id: 1, product_name: 'Kaos Basic Hitam', quantity: 2, price: 75000 },
          { product_id: 3, product_name: 'Celana Jeans Slim Fit', quantity: 1, price: 100000 },
        ],
      },
      {
        id: 'ORD002',
        order_date: '2025-06-28T14:30:00Z',
        total_amount: 180000,
        status: 'pending',
        items: [
          { product_id: 2, product_name: 'Kemeja Flanel Merah', quantity: 1, price: 180000 },
        ],
      },
    ];
  } catch (err) {
    error.value = err.response?.data?.message || 'Gagal memuat riwayat pesanan.';
    console.error('Error fetching orders:', err);
  } finally {
    loading.value = false;
  }
});
</script>