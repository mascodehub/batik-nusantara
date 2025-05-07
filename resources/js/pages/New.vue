<template>
    <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        recusandae non, alias debitis voluptas expedita, eius veniam totam
        voluptatum in corrupti molestias, architecto praesentium aperiam labore
        vitae nulla possimus rem.
    </div>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from "@/layouts/Sidebar.vue";

import Banner from "@/components/Banner.vue";
import ProductGrid from "@/components/ProductGrid.vue";
import ContactSection from "@/components/ContactSection.vue";

const products = ref([
    {
        id: 1,
        title: "Ring Fastening Cardigan",
        price: 159,
        image: "https://aspenhillvillage.bigpic.dev/wp-content/uploads/2020/12/300x300-Placeholder-Image.jpg",
    },
    {
        id: 2,
        title: "Silk Polo Neck Jumper",
        price: 89,
        image: "https://aspenhillvillage.bigpic.dev/wp-content/uploads/2020/12/300x300-Placeholder-Image.jpg",
    },
    {
        id: 3,
        title: "Cashmere Stripe Polo",
        price: 109,
        image: "https://aspenhillvillage.bigpic.dev/wp-content/uploads/2020/12/300x300-Placeholder-Image.jpg",
    },
    {
        id: 4,
        title: "Cashmere Jumper",
        price: 95,
        image: "https://aspenhillvillage.bigpic.dev/wp-content/uploads/2020/12/300x300-Placeholder-Image.jpg",
    },
    {
        id: 5,
        title: "Wool Polo Neck Jumper",
        price: 89,
        image: "https://aspenhillvillage.bigpic.dev/wp-content/uploads/2020/12/300x300-Placeholder-Image.jpg",
    },
    {
        id: 6,
        title: "Chunky Ottoman Jumper",
        price: 159,
        image: "https://aspenhillvillage.bigpic.dev/wp-content/uploads/2020/12/300x300-Placeholder-Image.jpg",
    },
]);

const filteredProducts = ref([...products.value]);

const applyFilter = (filterFn) => {
    filteredProducts.value = products.value.filter(filterFn);
};

const editProduct = (id) => {
    alert("Edit product ID: " + id);
};

const deleteProduct = (id) => {
    filteredProducts.value = filteredProducts.value.filter((p) => p.id !== id);
};
</script>

<style>
body {
    font-family: "Arial", sans-serif;
    background: #fff;
}
</style>
