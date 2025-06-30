// src/composables/useAlertDialog.js
import { ref } from 'vue';

const isVisible = ref(false);
const dialogTitle = ref('');
const dialogMessage = ref('');
const dialogType = ref('info'); // default type

export function useAlertDialog() {
  const showAlertDialog = (options = {}) => {
    dialogTitle.value = options.title || 'Pemberitahuan';
    dialogMessage.value = options.message || 'Aksi Anda berhasil diselesaikan.';
    dialogType.value = options.type || 'info';
    isVisible.value = true;
  };

  const hideAlertDialog = () => {
    isVisible.value = false;
  };

  return {
    // State yang diekspos
    isVisible,
    dialogTitle,
    dialogMessage,
    dialogType,
    // Fungsi untuk mengelola modal
    showAlertDialog,
    hideAlertDialog,
  };
}