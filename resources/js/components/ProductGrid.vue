<template>
  <main class="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
    <div v-for="product in products" :key="product.id" class="border p-4">
      <img :src="product.image" class="w-full h-auto mb-2" />
      <h2 class="font-bold">{{ product.title }}</h2>
      <p class="text-sm mb-2">£{{ product.price }}</p>
      <div class="flex space-x-2">
        <button @click="$emit('edit', product.id)"
          class="px-2 py-1 bg-blue-500 text-white text-sm rounded">Edit</button>
        <button @click="$emit('delete', product.id)"
          class="px-2 py-1 bg-red-500 text-white text-sm rounded">Delete</button>
      </div>
    </div>
  </main>
</template>

<script setup>
const props = defineProps({
  products: Array
})
</script>