// // src/api/auth.js
// import apiClient from './axios';

// export const loginUser = (credentials) => {
//     return apiClient.post('/auth/login', credentials);
// };

// export const registerUser = (userData) => {
//     return apiClient.post('/auth/register', userData);
// };

// export const getUserProfile = () => {
//     return apiClient.get('/auth/profile');
// };

// // Optional: Jika Anda punya endpoint logout di backend
// // export const logoutUser = () => {
// //     return apiClient.post('/auth/logout');
// // };

// src/api/auth.js
import usersData from '@/data/users.json'; // Import data user dummy

const delay = (ms) => new Promise(res => setTimeout(res, ms)); // Simulasi delay API

export const loginUser = async (credentials) => {
    await delay(500); // Simulasi waktu loading API
    const user = usersData.find(u => u.email === credentials.email && u.password === credentials.password);
    if (user) {
        return { data: { token: user.token, user: { id: user.id, name: user.name, email: user.email } } };
    } else {
        throw { response: { data: { message: 'Email atau password salah.' }, status: 401 } };
    }
};

export const registerUser = async (userData) => {
    await delay(500); // Simulasi waktu loading API
    // Untuk demo, kita tidak benar-benar menyimpan user baru, hanya simulasi sukses/gagal
    const existingUser = usersData.find(u => u.email === userData.email);
    if (existingUser) {
        throw { response: { data: { message: 'Email sudah terdaftar.' }, status: 409 } };
    } else {
        // Simulasi registrasi sukses (tidak benar-benar menambahkan ke usersData)
        return { data: { message: 'Registrasi berhasil. Silakan login.' } };
    }
};

export const getUserProfile = async () => {
    await delay(300); // Simulasi waktu loading API
    const storedToken = localStorage.getItem('authToken');
    const user = usersData.find(u => u.token === storedToken);
    if (user) {
        return { data: { user: { id: user.id, name: user.name, email: user.email } } };
    } else {
        throw { response: { data: { message: 'Token tidak valid.' }, status: 401 } };
    }
};