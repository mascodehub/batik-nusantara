<template>
  <Transition name="modal-fade">
    <div v-if="isVisible" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-gray-900 bg-opacity-50" @click="closeModal"></div>

      <div
        :class="['relative bg-white rounded-lg shadow-xl max-w-sm w-full mx-auto p-6 transform transition-all duration-300 ease-out', modalClass]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="alert-title"
        aria-describedby="alert-message"
      >
        <div class="flex flex-col items-center justify-center text-center">
          <div :class="['text-5xl mb-4', iconColorClass]">
            <font-awesome-icon :icon="['fas', iconType]" />
          </div>

          <h3 id="alert-title" class="text-2xl font-semibold mb-2 text-gray-800">
            {{ title }}
          </h3>

          <p id="alert-message" class="text-gray-600 mb-6">{{ message }}</p>

          <button
            @click="closeModal"
            :class="['px-6 py-2 rounded-md font-medium text-white transition-colors duration-200', buttonClass]"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    default: 'Pemberitahuan',
  },
  message: {
    type: String,
    default: 'Aksi Anda berhasil diselesaikan.',
  },
  type: {
    type: String,
    default: 'info', // success, error, warning, info
    validator: (value) => ['success', 'error', 'warning', 'info'].includes(value),
  },
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};

const iconType = computed(() => {
  switch (props.type) {
    case 'success':
      return 'check-circle';
    case 'error':
      return 'times-circle';
    case 'warning':
      return 'exclamation-triangle';
    case 'info':
      return 'info-circle';
    default:
      return 'info-circle';
  }
});

const iconColorClass = computed(() => {
  switch (props.type) {
    case 'success':
      return 'text-green-500';
    case 'error':
      return 'text-red-500';
    case 'warning':
      return 'text-yellow-500';
    case 'info':
      return 'text-blue-500';
    default:
      return 'text-gray-500';
  }
});

const buttonClass = computed(() => {
  switch (props.type) {
    case 'success':
      return 'bg-green-600 hover:bg-green-700';
    case 'error':
      return 'bg-red-600 hover:bg-red-700';
    case 'warning':
      return 'bg-yellow-600 hover:bg-yellow-700';
    case 'info':
      return 'bg-blue-600 hover:bg-blue-700';
    default:
      return 'bg-gray-600 hover:bg-gray-700';
  }
});

const modalClass = computed(() => {
  // Anda bisa menambahkan kelas transformasi di sini jika ingin animasi yang lebih kompleks
  return '';
});
</script>

<style scoped>
/* Animasi Transisi Modal */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* Optional: Scale up/down effect for content */
.modal-fade-enter-active .modal-content-area,
.modal-fade-leave-active .modal-content-area {
  transition: transform 0.3s ease;
}

.modal-fade-enter-from .modal-content-area,
.modal-fade-leave-to .modal-content-area {
  transform: scale(0.9);
}
</style>