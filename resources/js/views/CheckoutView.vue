<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Pembayaran</h1>

    <div v-if="cartStore.totalItems === 0" class="text-center text-gray-600 py-10">
      Keranjang Anda kosong. Tidak ada yang bisa dibayar.
      <router-link to="/products" class="text-blue-600 hover:underline">Belanja sekarang</router-link>!
    </div>
    <div v-else class="bg-white shadow-md rounded-lg p-6">
      <h2 class="text-2xl font-semibold mb-4">Ringkasan Pesanan</h2>
      <ul>
        <li v-for="item in cartStore.items" :key="item.id" class="flex justify-between py-2 border-b last:border-b-0">
          <span>{{ item.name }} ({{ item.quantity }}x)</span>
          <span>Rp {{(item.price * item.quantity).toLocaleString('id-ID')}}</span>
        </li>
      </ul>
      <div class="flex justify-between font-bold text-xl mt-4 pt-4 border-t-2 border-gray-200">
        <span>Total:</span>
        <span>Rp {{ cartStore.cartTotal.toLocaleString('id-ID') }}</span>
      </div>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Informasi Pengiriman</h2>
      <form @submit.prevent="processCheckout" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nama Lengkap:</label>
          <input type="text" id="name" v-model="form.name" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input type="email" id="email" v-model="form.email" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div class="md:col-span-2">
          <label for="address" class="block text-gray-700 text-sm font-bold mb-2">Alamat Lengkap:</label>
          <textarea id="address" v-model="form.address" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div>
          <label for="city" class="block text-gray-700 text-sm font-bold mb-2">Kota:</label>
          <input type="text" id="city" v-model="form.city" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label for="zip" class="block text-gray-700 text-sm font-bold mb-2">Kode Pos:</label>
          <input type="text" id="zip" v-model="form.zip" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div class="md:col-span-2 mt-6">
          <Button type="submit" variant="primary" :disabled="loading" class="w-full">
            <span v-if="loading">Memproses...</span>
            <span v-else>Konfirmasi Pesanan</span>
          </Button>
          <p v-if="error" class="text-red-500 mt-2 text-center">{{ error }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '@/store/modules/cart';
import { useAuthStore } from '@/store/modules/auth'; // Jika ingin kirim order dengan user ID
import { checkout } from '@/api/cart'; // Import API checkout
import Button from '@/components/common/Button.vue';
import { useAlertDialog } from '@/composables/useAlertDialog'; // Import composable

const cartStore = useCartStore();
const authStore = useAuthStore();
const router = useRouter();
const { showAlertDialog } = useAlertDialog(); // Dapatkan fungsi untuk menampilkan modal

const loading = ref(false);
const error = ref(null);

const form = reactive({
  name: authStore.currentUser?.name || '',
  email: authStore.currentUser?.email || '',
  address: '',
  city: '',
  zip: '',
});

const processCheckout = async () => {
  loading.value = true;
  error.value = null;

  try {
    const orderDetails = {
      user_id: authStore.currentUser?.id, // Kirim ID user jika login
      items: cartStore.items.map(item => ({
        product_id: item.id,
        quantity: item.quantity,
        price: item.price,
      })),
      shipping_address: `${form.address}, ${form.city}, ${form.zip}`,
      total_amount: cartStore.cartTotal,
      // Tambahkan detail pembayaran lain di sini
    };

    const response = await checkout(orderDetails); // Panggil API checkout
    
    if (response.data.success) {
      showAlertDialog({
          title: 'Berhasil!',
          message: `Pesanan Anda berhasil diproses! Terima kasih.`,
          type: 'success',
      });
      cartStore.clearCart(); // Kosongkan keranjang setelah sukses
      router.push('/order-success'); // Redirect ke halaman sukses order
    } else {
      error.value = response.data.message || 'Gagal memproses pesanan.';
    }
  } catch (err) {
    error.value = err.response?.data?.message || 'Terjadi kesalahan saat checkout. Silakan coba lagi.';
    console.error('Checkout error:', err);
    showAlertDialog({
        title: 'Gagal!',
        message: 'Terjadi kesalahan saat menambahkan produk ke keranjang. Silakan coba lagi.',
        type: 'error',
    });
  } finally {
    loading.value = false;
  }
};
</script>