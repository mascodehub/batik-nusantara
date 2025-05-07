<template>
   <div>
      <Navbar />
      <router-view></router-view>
      <Footer />
   </div>
</template>

<script setup>
import Navbar from './layouts/Navbar.vue'
import Footer from './layouts/Footer.vue'
</script>

<style>
body {
   font-family: 'Arial', sans-serif;
   background: #fff;
}
</style>