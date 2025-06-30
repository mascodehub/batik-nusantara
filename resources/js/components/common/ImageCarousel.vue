<template>
  <div class="relative w-full overflow-hidden rounded-lg shadow-lg">
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div v-for="(image, index) in images" :key="index" class="w-full flex-shrink-0 relative">
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-96 object-cover"
        />
        <div v-if="image.text" class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white p-4">
          <h2 class="text-4xl font-bold text-center">{{ image.text }}</h2>
        </div>
      </div>
    </div>

    <button
      @click="prevSlide"
      class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <font-awesome-icon :icon="['fas', 'chevron-left']" class="text-xl" />
    </button>

    <button
      @click="nextSlide"
      class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <font-awesome-icon :icon="['fas', 'chevron-right']" class="text-xl" />
    </button>

    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <span
        v-for="(image, index) in images"
        :key="index"
        @click="goToSlide(index)"
        :class="[
          'block w-3 h-3 rounded-full bg-gray-300 cursor-pointer transition-colors duration-300',
          { 'bg-blue-500': index === currentIndex }
        ]"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => [],
    validator: (value) => value.every(img => typeof img.src === 'string' && typeof img.alt === 'string'),
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  interval: {
    type: Number,
    default: 5000, // 5 detik
  },
});

const currentIndex = ref(0);
let autoSlideInterval = null;

const nextSlide = () => {
  if (props.images.length === 0) return;
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
  resetAutoplay();
};

const prevSlide = () => {
  if (props.images.length === 0) return;
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
  resetAutoplay();
};

const goToSlide = (index) => {
  if (props.images.length === 0) return;
  currentIndex.value = index;
  resetAutoplay();
};

const startAutoplay = () => {
  if (props.autoplay && props.images.length > 1) {
    autoSlideInterval = setInterval(nextSlide, props.interval);
  }
};

const stopAutoplay = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
};

const resetAutoplay = () => {
  stopAutoplay();
  startAutoplay();
};

onMounted(() => {
  if (props.images.length > 0) {
    startAutoplay();
  }
});

onUnmounted(() => {
  stopAutoplay();
});

watch(() => props.images, (newImages) => {
  if (newImages.length > 0) {
    currentIndex.value = 0;
    resetAutoplay();
  } else {
    stopAutoplay();
  }
}, { deep: true });
</script>

<style scoped>
/* Anda bisa menambahkan gaya CSS tambahan di sini jika diperlukan */
img {
  max-width: 100%;
  height: auto;
}
</style>