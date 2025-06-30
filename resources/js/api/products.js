// // src/api/products.js
// import apiClient from './axios';

// export const getProducts = (params = {}) => {
//     return apiClient.get('/products', { params });
// };

// export const getProductById = (id) => {
//     return apiClient.get(`/products/${id}`);
// };

// // Fungsi admin, jika Anda memiliki dashboard admin terpisah
// // export const addProduct = (productData) => {
// //     return apiClient.post('/products', productData);
// // };
// // export const updateProduct = (id, productData) => {
// //     return apiClient.put(`/products/${id}`, productData);
// // };
// // export const deleteProduct = (id) => {
// //     return apiClient.delete(`/products/${id}`);
// // };

// src/api/products.js
import productsData from '@/data/products.json'; // Import data produk dummy

const delay = (ms) => new Promise(res => setTimeout(res, ms)); // Simulasi delay API

export const getProducts = async (params = {}) => {
    await delay(500); // Simulasi waktu loading API
    let filteredProducts = [...productsData]; // Buat salinan agar tidak memodifikasi data asli

    // Anda bisa tambahkan logika filter dummy di sini jika diperlukan,
    // tapi untuk demo awal, kita akan biarkan filtering dilakukan di store.
    // Ini hanya mengembalikan semua produk.

    return { data: filteredProducts };
};

export const getProductById = async (id) => {
    await delay(300); // Simulasi waktu loading API
    const product = productsData.find(p => p.id == id); // Gunakan == karena id dari route params adalah string
    if (product) {
        return { data: product };
    } else {
        throw { response: { data: { message: 'Produk tidak ditemukan.' }, status: 404 } };
    }
};