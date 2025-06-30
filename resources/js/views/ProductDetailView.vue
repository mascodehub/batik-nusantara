<template>
    <div class="container mx-auto p-4">
        <LoadingSpinner v-if="productStore.loading" />
        <div v-else-if="productStore.error" class="text-red-500 text-center">
            {{ productStore.error }}
        </div>
        <div
            v-else-if="productStore.currentProduct"
            class="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-md"
        >
            <div class="md:col-span-1">
                <img
                    :src="
                        productStore.currentProduct.imageUrl ||
                        '/placeholder.jpg'
                    "
                    :alt="productStore.currentProduct.name"
                    class="w-full h-auto object-cover rounded-lg shadow-sm"
                />
            </div>
            <div class="md:col-span-1">
                <h1 class="text-3xl font-bold text-gray-800 mb-3">
                    {{ productStore.currentProduct.name }}
                </h1>
                <p class="text-gray-600 text-lg mb-2">
                    {{ productStore.currentProduct.category }}
                </p>
                <p class="text-4xl font-extrabold text-blue-600 mb-6">
                    Rp
                    {{
                        productStore.currentProduct.price.toLocaleString(
                            "id-ID",
                        )
                    }}
                </p>
                <p class="text-gray-700 leading-relaxed mb-6">
                    {{ productStore.currentProduct.description }}
                </p>

                <div class="flex items-center space-x-4 mb-6">
                    <label for="quantity" class="font-semibold text-gray-700"
                        >Kuantitas:</label
                    >
                    <input
                        type="number"
                        id="quantity"
                        v-model.number="quantity"
                        min="1"
                        class="border rounded-md px-3 py-2 w-20 text-center"
                    />
                </div>

                <Button
                    @click="addToCart(productStore.currentProduct)"
                    variant="primary"
                    class="w-full md:w-auto"
                >
                    Tambah ke Keranjang
                </Button>
            </div>
        </div>
        <div v-else class="text-center text-gray-600 py-10">
            Produk tidak ditemukan.
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "@/store/modules/products";
import { useCartStore } from "@/store/modules/cart";
import Button from "@/components/common/Button.vue";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";

import { useAlertDialog } from '@/composables/useAlertDialog'; // Import composable

const route = useRoute();
const productStore = useProductStore();
const cartStore = useCartStore();
const { showAlertDialog } = useAlertDialog(); // Dapatkan fungsi untuk menampilkan modal

const quantity = ref(1); // Default quantity

onMounted(() => {
    const productId = route.params.id;
    if (productId) {
        productStore.fetchProductDetail(productId);
    }
});

const addToCart = async (product) => {
    try {
        cartStore.addItem(product, quantity.value);
        
        showAlertDialog({
            title: 'Berhasil!',
            message: `${product.name} berhasil ditambahkan ke keranjang.`,
            type: 'success',
        });
    } catch (error) {
        console.error('Gagal menambahkan ke keranjang:', error);
        showAlertDialog({
            title: 'Gagal!',
            message: 'Terjadi kesalahan saat menambahkan produk ke keranjang. Silakan coba lagi.',
            type: 'error',
        });
    }

};
</script>
