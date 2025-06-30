<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Keranjang Belanja Anda</h1>

    <div v-if="cartStore.totalItems === 0" class="text-center text-gray-600 py-10">
      Keranjang Anda kosong. Yuk, <router-link to="/products" class="text-blue-600 hover:underline">mulai belanja</router-link>!
    </div>
    <div v-else>
      <div class="bg-white shadow-md rounded-lg p-6 mb-6">
        <div v-for="item in cartStore.items" :key="item.id" class="flex items-center justify-between py-4 border-b last:border-b-0">
          <div class="flex items-center">
            <img :src="item.imageUrl || '/placeholder.jpg'" :alt="item.name" class="w-20 h-20 object-cover rounded mr-4" />
            <div>
              <h3 class="font-semibold text-lg">{{ item.name }}</h3>
              <p class="text-gray-600 text-sm">Rp {{ item.price.toLocaleString('id-ID') }}</p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <input
              type="number"
              :value="item.quantity"
              @change="updateQuantity(item.id, $event.target.value)"
              min="1"
              class="border rounded-md px-2 py-1 w-16 text-center"
            />
            <p class="font-bold text-lg">Rp {{(item.price * item.quantity).toLocaleString('id-ID')}}</p>
            <Button @click="cartStore.removeItem(item.id)" variant="danger" class="p-2">
              <font-awesome-icon :icon="['fas', 'times']" />
            </Button>
          </div>
        </div>
      </div>

      <div class="flex justify-end items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Total: Rp {{ cartStore.cartTotal.toLocaleString('id-ID') }}</h2>
      </div>

      <div class="flex justify-between md:justify-end space-x-4">
        <Button @click="cartStore.clearCart()" variant="secondary">Kosongkan Keranjang</Button>
        <router-link to="/checkout">
          <Button variant="primary">Lanjutkan ke Pembayaran</Button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/store/modules/cart';
import Button from '@/components/common/Button.vue';

const cartStore = useCartStore();

const updateQuantity = (productId, quantity) => {
  cartStore.updateItemQuantity(productId, parseInt(quantity));
};
</script>