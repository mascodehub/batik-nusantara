<template>
    <div class="border rounded-lg shadow-md p-4 flex flex-col items-center">
        <router-link :to="`/products/${product.id}`">
            <img
                :src="product.imageUrl || '/placeholder.jpg'"
                :alt="product.name"
                class="w-40 h-40 object-cover mb-4 rounded"
            />
        </router-link>
        <h3 class="text-lg font-semibold mb-1 text-center">
            {{ product.name }}
        </h3>
        <p class="text-gray-600 text-sm mb-2">{{ product.category }}</p>
        <p class="text-xl font-bold text-blue-600 mb-4">
            Rp {{ product.price.toLocaleString("id-ID") }}
        </p>
        <Button @click.stop="addToCart" variant="primary"
            >Tambah ke Keranjang</Button
        >
    </div>
</template>

<script setup>
import Button from "@/components/common/Button.vue";
import { useCartStore } from "@/store/modules/cart";
import { useAlertDialog } from '@/composables/useAlertDialog'; // Import composable

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});

const cartStore = useCartStore();
const { showAlertDialog } = useAlertDialog(); // Dapatkan fungsi untuk menampilkan modal

const addToCart = () => {
    console.log("ProductCard: Adding item", props.product.name);
    try {
        cartStore.addItem(props.product);
        
        showAlertDialog({
            title: 'Berhasil!',
            message: `${props.product.name} berhasil ditambahkan ke keranjang.`,
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
