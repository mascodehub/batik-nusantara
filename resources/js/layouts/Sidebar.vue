<template>
  <aside class="w-full lg:w-1/4 p-4">
    <div class="mb-6">
      <h2 class="font-bold mb-2">Category</h2>
      <ul>
        <li>
          <button @click="$emit('filter-change', () => true)" class="underline text-blue-500 hover:text-black cursor-pointer">All</button>
        </li>
        <li>
          <button @click="$emit('filter-change', () => true)" class="underline text-blue-500 hover:text-black cursor-pointer">New Realease</button>
        </li>
        <li>
          <button @click="$emit('filter-change', () => true)" class="underline text-blue-500 hover:text-black cursor-pointer">Men</button>
        </li>
        <li>
          <button @click="$emit('filter-change', () => true)" class="underline text-blue-500 hover:text-black cursor-pointer">Women</button>
        </li>
        <li>
          <button @click="$emit('filter-change', () => true)" class="underline text-blue-500 hover:text-black cursor-pointer">Couple</button>
        </li>
      </ul>
      <!-- <button @click="$emit('filter-change', p => p.price < 100)" class="ml-2 underline text-blue-500">Under £100</button> -->
    </div>
    <div>
      <h2 class="font-bold mb-2">Colour</h2>
      <div class="flex flex-wrap gap-2">
        <span class="w-4 h-4 bg-black rounded-full"></span>
        <span class="w-4 h-4 bg-red-500 rounded-full"></span>
        <span class="w-4 h-4 bg-green-500 rounded-full"></span>
      </div>
    </div>
  </aside>
</template>

<script setup></script>