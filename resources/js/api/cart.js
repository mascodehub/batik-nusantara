// // src/api/cart.js
// import apiClient from './axios';

// // API untuk keranjang (jika keranjang disinkronkan dengan backend)
// export const fetchCartItems = () => {
//     return apiClient.get('/cart');
// };

// export const addProductToCart = (productId, quantity = 1) => {
//     return apiClient.post('/cart/add', { product_id: productId, quantity });
// };

// export const updateCartItemQuantity = (productId, quantity) => {
//     return apiClient.put(`/cart/update/${productId}`, { quantity });
// };

// export const removeCartItem = (productId) => {
//     return apiClient.delete(`/cart/remove/${productId}`);
// };

// // API untuk checkout / pesanan
// export const checkout = (orderDetails) => {
//     return apiClient.post('/checkout', orderDetails);
// };

// export const getOrderHistory = () => {
//     return apiClient.get('/orders');
// };

// export const getOrderDetail = (orderId) => {
//     return apiClient.get(`/orders/${orderId}`);
// };

// src/api/cart.js
import ordersData from '@/data/orders.json'; // Import data pesanan dummy
import productsData from '@/data/products.json'; // Mungkin dibutuhkan untuk info produk

const delay = (ms) => new Promise(res => setTimeout(res, ms)); // Simulasi delay API

// Dalam skenario data JSON lokal, fungsi-fungsi ini hanya akan menjadi simulasi.
// Keranjang belanja sebenarnya dikelola di Pinia store secara lokal (localStorage).

export const fetchCartItems = async () => {
    await delay(300);
    // Karena keranjang dikelola di frontend, ini hanya simulasi sukses kosong
    return { data: { items: [] } };
};

export const addProductToCart = async (productId, quantity = 1) => {
    await delay(200);
    // Simulasi sukses
    return { data: { message: 'Item berhasil ditambahkan (simulasi).' } };
};

export const updateCartItemQuantity = async (productId, quantity) => {
    await delay(200);
    // Simulasi sukses
    return { data: { message: 'Kuantitas berhasil diperbarui (simulasi).' } };
};

export const removeCartItem = async (productId) => {
    await delay(200);
    // Simulasi sukses
    return { data: { message: 'Item berhasil dihapus (simulasi).' } };
};

export const checkout = async (orderDetails) => {
    await delay(800); // Simulasi waktu proses checkout yang lebih lama
    // Simulasi sukses. Anda bisa menambahkan validasi sederhana di sini jika mau.
    // Misalnya, jika total_amount kurang dari 100,000, simulasikan gagal.
    if (orderDetails.total_amount < 10000) { // Contoh validasi
        throw { response: { data: { message: 'Total pesanan terlalu kecil (simulasi gagal).' }, status: 400 } };
    }
    // Simulasi respons order ID baru
    const newOrderId = `ORD${Date.now()}`;
    return { data: { success: true, orderId: newOrderId, message: 'Pesanan berhasil diproses (simulasi).' } };
};

export const getOrderHistory = async () => {
    await delay(600); // Simulasi waktu loading
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    const userId = storedUser ? storedUser.id : null;

    if (!userId) {
        throw { response: { data: { message: 'Pengguna tidak terautentikasi.' }, status: 401 } };
    }

    // Filter pesanan berdasarkan user_id (jika ada)
    const userOrders = ordersData.filter(order => order.user_id === userId);

    // Untuk demo, kita akan tambahkan nama produk ke item pesanan dari data produk
    const ordersWithProductNames = userOrders.map(order => ({
        ...order,
        items: order.items.map(item => ({
            ...item,
            product_name: productsData.find(p => p.id === item.product_id)?.name || 'Produk Tidak Dikenal'
        }))
    }));

    return { data: ordersWithProductNames };
};

export const getOrderDetail = async (orderId) => {
    await delay(400);
    const order = ordersData.find(o => o.id === orderId);
    if (order) {
        return { data: order };
    } else {
        throw { response: { data: { message: 'Pesanan tidak ditemukan.' }, status: 404 } };
    }
};