// // src/store/modules/products.js
// import { defineStore } from 'pinia';
// import { getProducts, getProductById } from '@/api/products';

// export const useProductStore = defineStore('products', {
//     state: () => ({
//         allProducts: [],
//         currentProduct: null,
//         loading: false,
//         error: null,
//         filters: {
//             category: null,
//             minPrice: 0,
//             maxPrice: 1000000, // Ubah batas harga maksimal ke angka yang realistis
//             searchQuery: '',
//         },
//     }),

//     getters: {
//         filteredProducts: (state) => {
//             let products = state.allProducts;
//             if (state.filters.category) {
//                 products = products.filter(p => p.category.toLowerCase() === state.filters.category.toLowerCase());
//             }
//             products = products.filter(p => p.price >= state.filters.minPrice && p.price <= state.filters.maxPrice);
//             if (state.filters.searchQuery) {
//                 const query = state.filters.searchQuery.toLowerCase();
//                 products = products.filter(p =>
//                     p.name.toLowerCase().includes(query) ||
//                     p.description.toLowerCase().includes(query)
//                 );
//             }
//             return products;
//         },
//         topSellingProducts: (state) => state.allProducts.slice(0, 5),
//     },

//     actions: {
//         async fetchAllProducts() {
//             this.loading = true;
//             this.error = null;
//             try {
//                 const response = await getProducts();
//                 // Data dummy jika API belum siap
//                 this.allProducts = response.data.length > 0 ? response.data : [
//                   { id: 1, name: 'Kaos Basic Hitam', description: 'Kaos katun lembut, nyaman dipakai sehari-hari.', price: 75000, category: 'T-Shirt', imageUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Kaos+Hitam' },
//                   { id: 2, name: 'Kemeja Flanel Merah', description: 'Kemeja flanel kotak-kotak merah, gaya kasual.', price: 180000, category: 'Kemeja', imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Kemeja+Merah' },
//                   { id: 3, name: 'Celana Jeans Slim Fit', description: 'Jeans denim berkualitas tinggi, potongan slim fit.', price: 250000, category: 'Celana', imageUrl: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Jeans+Biru' },
//                   { id: 4, name: 'Jaket Bomber Keren', description: 'Jaket bomber dengan lapisan hangat, cocok untuk musim dingin.', price: 350000, category: 'Jaket', imageUrl: 'https://via.placeholder.com/150/FFFF00/000000?text=Jaket+Bomber' },
//                   { id: 5, name: 'T-Shirt Putih Polos', description: 'Kaos putih dasar, wajib punya.', price: 60000, category: 'T-Shirt', imageUrl: 'https://via.placeholder.com/150/CCCCCC/000000?text=Kaos+Putih' },
//                   { id: 6, name: 'Kemeja Denim Biru', description: 'Kemeja denim klasik, tak lekang oleh waktu.', price: 195000, category: 'Kemeja', imageUrl: 'https://via.placeholder.com/150/0000FF/000000?text=Kemeja+Denim' },
//                 ];
//             } catch (err) {
//                 this.error = err.response?.data?.message || 'Failed to fetch products.';
//                 // Jika error, gunakan data dummy agar tampilan tidak kosong
//                 this.allProducts = [
//                   { id: 1, name: 'Kaos Basic Hitam (Dummy)', description: 'Kaos katun lembut, nyaman dipakai sehari-hari.', price: 75000, category: 'T-Shirt', imageUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Kaos+Hitam' },
//                   { id: 2, name: 'Kemeja Flanel Merah (Dummy)', description: 'Kemeja flanel kotak-kotak merah, gaya kasual.', price: 180000, category: 'Kemeja', imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Kemeja+Merah' },
//                   { id: 3, name: 'Celana Jeans Slim Fit (Dummy)', description: 'Jeans denim berkualitas tinggi, potongan slim fit.', price: 250000, category: 'Celana', imageUrl: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Jeans+Biru' },
//                 ];
//                 throw err;
//             } finally {
//                 this.loading = false;
//             }
//         },

//         async fetchProductDetail(id) {
//             this.loading = true;
//             this.error = null;
//             this.currentProduct = null;
//             try {
//                 const response = await getProductById(id);
//                 this.currentProduct = response.data;
//             } catch (err) {
//                 this.error = err.response?.data?.message || `Failed to fetch product with ID: ${id}.`;
//                 // Coba cari di data dummy jika API gagal
//                 this.currentProduct = this.allProducts.find(p => p.id == id) || null;
//                 throw err;
//             } finally {
//                 this.loading = false;
//             }
//         },

//         setFilters(newFilters) {
//             this.filters = { ...this.filters, ...newFilters };
//         },

//         clearFilters() {
//             this.filters = { category: null, minPrice: 0, maxPrice: 1000000, searchQuery: '' };
//         }
//     },
// });

// src/store/modules/products.js
import { defineStore } from 'pinia';
import { getProducts, getProductById } from '@/api/products'; // Mengambil fungsi API dari folder api/

export const useProductStore = defineStore('products', {
    state: () => ({
        allProducts: [],
        currentProduct: null,
        loading: false,
        error: null,
        filters: {
            category: null,
            minPrice: 0,
            maxPrice: 1000000,
            searchQuery: '',
        },
    }),

    getters: {
        filteredProducts: (state) => {
            let products = state.allProducts;
            if (state.filters.category) {
                products = products.filter(p => p.category.toLowerCase() === state.filters.category.toLowerCase());
            }
            products = products.filter(p => p.price >= state.filters.minPrice && p.price <= state.filters.maxPrice);
            if (state.filters.searchQuery) {
                const query = state.filters.searchQuery.toLowerCase();
                products = products.filter(p =>
                    p.name.toLowerCase().includes(query) ||
                    p.description.toLowerCase().includes(query)
                );
            }
            return products;
        },
        topSellingProducts: (state) => state.allProducts.slice(0, 5),
    },

    actions: {
        async fetchAllProducts() {
            this.loading = true;
            this.error = null;
            try {
                const response = await getProducts();
                this.allProducts = response.data; // Data diambil langsung dari products.json
            } catch (err) {
                this.error = err.message || 'Failed to fetch products.';
                this.allProducts = []; // Kosongkan jika ada error dalam mengambil data JSON
                throw err;
            } finally {
                this.loading = false;
            }
        },

        async fetchProductDetail(id) {
            this.loading = true;
            this.error = null;
            this.currentProduct = null;
            try {
                const response = await getProductById(id);
                this.currentProduct = response.data;
            } catch (err) {
                this.error = err.message || `Failed to fetch product with ID: ${id}.`;
                this.currentProduct = null;
                throw err;
            } finally {
                this.loading = false;
            }
        },

        setFilters(newFilters) {
            this.filters = { ...this.filters, ...newFilters };
        },

        clearFilters() {
            this.filters = { category: null, minPrice: 0, maxPrice: 1000000, searchQuery: '' };
        }
    },
});