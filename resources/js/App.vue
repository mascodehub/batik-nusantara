<script setup>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';

import AlertDialog from '@/components/common/AlertDialog.vue'; // Import komponen modal
import { useAlertDialog } from '@/composables/useAlertDialog'; // Import composable modal

// Dapatkan state dan fungsi dari composable
const { isVisible, dialogTitle, dialogMessage, dialogType, hideAlertDialog } = useAlertDialog();

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <main class="flex-grow container mx-auto p-4">
      <RouterView />
    </main>
    <TheFooter />

    <AlertDialog
      :isVisible="isVisible"
      :title="dialogTitle"
      :message="dialogMessage"
      :type="dialogType"
      @close="hideAlertDialog"
    />
  </div>
</template>

<style>
/* Anda bisa menambahkan gaya global tambahan di sini jika diperlukan */
</style>