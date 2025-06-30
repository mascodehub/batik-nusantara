// src/store/modules/cart.js
import { defineStore } from 'pinia';
// Anda juga bisa mengimpor API cart di sini jika keranjang perlu disinkronkan dengan backend
// import { addProductToCart, removeCartItem, updateCartItemQuantity, fetchCartItems } from '@/api/cart';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: JSON.parse(localStorage.getItem('cartItems')) || [],
        loading: false,
        error: null,
    }),

    getters: {
        totalItems: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
        cartTotal: (state) => state.items.reduce((total, item) => total + (item.price * item.quantity), 0),
        getItemById: (state) => (productId) => state.items.find(item => item.id === productId),
    },

    actions: {
        async addItem(product, quantity = 1) {
            // Jika ada integrasi API, lakukan panggilan API di sini
            // try {
            //   await addProductToCart(product.id, quantity);
            //   // Setelah sukses di backend, update state lokal
            // } catch (error) {
            //   console.error('Failed to add to cart on backend:', error);
            //   this.error = 'Failed to add item to cart.';
            //   return;
            // }
            console.log('CartStore: addItem called for', product.name, 'with quantity', quantity);

            const existingItem = this.items.find(item => item.id === product.id);
            
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                this.items.push({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  imageUrl: product.imageUrl,
                  quantity: quantity
                });
            }
            this.saveCartToLocalStorage();
        },

        async removeItem(productId) {
            // try {
            //   await removeCartItem(productId);
            // } catch (error) {
            //   console.error('Failed to remove from cart on backend:', error);
            //   this.error = 'Failed to remove item from cart.';
            //   return;
            // }

            this.items = this.items.filter(item => item.id !== productId);
            this.saveCartToLocalStorage();
        },

        async updateItemQuantity(productId, quantity) {
            // try {
            //   await updateCartItemQuantity(productId, quantity);
            // } catch (error) {
            //   console.error('Failed to update cart on backend:', error);
            //   this.error = 'Failed to update item quantity.';
            //   return;
            // }

            const item = this.items.find(i => i.id === productId);
            if (item) {
                if (quantity <= 0) {
                    this.removeItem(productId);
                } else {
                    item.quantity = quantity;
                    this.saveCartToLocalStorage();
                }
            }
        },

        clearCart() {
            this.items = [];
            this.saveCartToLocalStorage();
        },

        saveCartToLocalStorage() {
            localStorage.setItem('cartItems', JSON.stringify(this.items));
        }

        // Jika ingin memuat keranjang dari backend saat aplikasi dimuat
        // async fetchCartFromBackend() {
        //   this.loading = true;
        //   try {
        //     const response = await fetchCartItems();
        //     this.items = response.data.items; // Asumsi API mengembalikan array item
        //     this.saveCartToLocalStorage(); // Simpan juga ke local storage
        //   } catch (error) {
        //     console.error('Failed to fetch cart from backend:', error);
        //     this.error = 'Failed to load cart.';
        //   } finally {
        //     this.loading = false;
        //   }
        // }
    },
});