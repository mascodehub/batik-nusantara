<template>
  <nav class="bg-white shadow py-4 px-6 flex flex-col md:flex-row justify-between items-center">
    <router-link :to="{ name: 'home' }" class="text-lg font-bold mb-2 md:mb-0" aria-current="page">LOGO</router-link>
    <ul class="flex flex-wrap justify-center md:justify-start space-x-6">
      <router-link :to="{ name: 'new' }" class="nav-link" aria-current="page">New</router-link>
      <router-link :to="{ name: 'men' }" class="nav-link" aria-current="page">Men</router-link>
      <router-link :to="{ name: 'women' }" class="nav-link" aria-current="page">Women</router-link>
      <router-link :to="{ name: 'couple' }" class="nav-link" aria-current="page">Couple</router-link>
      <router-link :to="{ name: 'about' }" class="nav-link" aria-current="page">About</router-link>
    </ul>
    <div class="mt-2 md:mt-0">
      <button class="mr-4">Login</button>
      <button>Cart (£159)</button>
    </div>
  </nav>
</template>

<script setup>
</script>
