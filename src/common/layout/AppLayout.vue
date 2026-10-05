<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { useAppStore } from '@/stores/app.js'
const appStore = useAppStore()
const router = useRouter()

let list_menu = [
    {
        IDMENU: 1,
        MENU_NAME: 'Home',
        STATUS: 1,
        URL: '/',
    },
    {
        IDMENU: 2,
        MENU_NAME: 'Gallery',
        STATUS: 0,
        URL: 'gallery',
    },
    {
        IDMENU: 3,
        MENU_NAME: 'Service',
        STATUS: 0,
        URL: 'service',
    },
    {
        IDMENU: 4,
        MENU_NAME: 'Price',
        STATUS: 0,
        URL: 'price',
    },
    {
        IDMENU: 5,
        MENU_NAME: 'Philosophy',
        STATUS: 0,
        URL: 'philosophy',
    },
    {
        IDMENU: 6,
        MENU_NAME: 'Customer',
        STATUS: 0,
        URL: 'customer',
    },
    {
        IDMENU: 7,
        MENU_NAME: 'Contact',
        STATUS: 0,
        URL: 'contact',
    },
];

const sidebarMenu = ref(false);
sidebarMenu.value = false;

</script>


<template>
    <div class="app-container w-full">
        <aside class="topbar ">
            <div class="h-20 max-w-[1320px] mx-auto px-margin-mobile md:px-margin flex items-center justify-between">
                <div class="flex items-center gap-space-md">
                    <a class="flex items-center gap-space-sm group" data-path="home" href="#">
                        <img alt="Batik Nusantara Logo" class="h-9 w-auto object-contain" src="/raw-logo.png" />
                        <img alt="Batik Nusantara Logo" class="h-9 w-auto object-contain" src="/banus-trans.png" />
                        <!-- <div class="flex flex-col">
                            <span
                                class="font-headline-sm text-headline-sm tracking-tight text-primary leading-none group-hover:text-secondary transition-colors">
                                Larasati
                            </span>
                            <span class="font-label-sm text-label-sm tracking-widest text-outline uppercase mt-0.5">
                                Batik Heritage
                            </span>
                        </div> -->
                    </a>
                </div>
                <nav class="hidden xl:flex items-center gap-space-lg"
                    data-active-classes="text-primary font-title-md border-b-2 border-primary py-space-xs">
                    <a :class="['font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors py-space-xs ', { 'tracking-wider text-primary border-b-2': appStore.topbar == item.MENU_NAME }]"
                        v-for="item in list_menu" :href=item.URL :key="item.IDMENU">
                        {{ item.MENU_NAME }}
                    </a>
                </nav>
                <div class="flex items-center gap-space-md">
                    <button aria-label="Menu"
                        class="xl:hidden text-on-surface hover:text-primary bg-white border-white hover:border-white hover:bg-gray-400 transition-colors"
                        id="mobile-menu-btn" type="button" @click="sidebarMenu = !sidebarMenu;">
                        <span class="material-symbols-outlined text-2xl">menu
                        </span>
                    </button>
                </div>
            </div>
            <div class="xl:hidden bg-surface-container-lowest px-margin-mobile py-space-lg shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
                :class="{ hidden: !sidebarMenu }" id="mobile-drawer">
                <nav class="flex flex-col gap-space-md"
                    data-active-classes="text-primary font-title-md border-l-2 border-primary pl-space-xs">
                    <a :class="[{ 'font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors': appStore.topbar != item.MENU_NAME }, { 'font-title-md text-label-md uppercase tracking-wider text-primary border-l-2 border-primary pl-space-xs': appStore.topbar == item.MENU_NAME }]"
                        v-for="item in list_menu" :href=item.URL :key="item.IDMENU">
                        {{ item.MENU_NAME }}
                    </a>
                </nav>
            </div>
        </aside>

        <div class="content">
            <div class="content-inner w-full bg-surface min-h-[calc(100vh-80px)]">
                <router-view />
            </div>
        </div>

        <footer class="w-full bg-primary-container text-surface-container-low">
            <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin pt-space-2xl pb-space-xl">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl">
                    <div class="lg:col-span-5 flex flex-col gap-space-md">
                        <div class="flex items-center gap-space-sm">
                            <span class="font-headline-sm text-headline-sm tracking-tight text-surface-bright">
                                Batik Nusantara Heritage
                            </span>
                        </div>
                        <p class="font-body-md text-body-md text-outline-variant max-w-md leading-relaxed">
                            Dedikasi melestarikan mahakarya wastra batik Nusantara dengan sentuhan desain modern,
                            kualitas bahan pilihan, dan pengerjaan tangan autentik.
                        </p>
                        <div class="flex items-center gap-space-md pt-space-xs"><a aria-label="Instagram"
                                class="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-surface-bright hover:bg-surface-bright hover:text-primary transition-colors duration-200"
                                href="#">
                                <span class="material-symbols-outlined text-[18px]">photo_camera</span>
                            </a>
                            <a aria-label="LinkedIn"
                                class="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-surface-bright hover:bg-surface-bright hover:text-primary transition-colors duration-200"
                                href="#">
                                <span class="material-symbols-outlined text-[18px]">work</span>
                            </a>
                            <a aria-label="YouTube"
                                class="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-surface-bright hover:bg-surface-bright hover:text-primary transition-colors duration-200"
                                href="#">
                                <span class="material-symbols-outlined text-[18px]">smart_display</span>
                            </a>
                            <a aria-label="Pinterest"
                                class="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-surface-bright hover:bg-surface-bright hover:text-primary transition-colors duration-200"
                                href="#">
                                <span class="material-symbols-outlined text-[18px]">interests</span>
                            </a>
                        </div>
                    </div>
                    <div class="lg:col-span-3 flex flex-col gap-space-md">
                        <span class="font-title-md text-title-md text-surface-bright uppercase tracking-wider">
                            Navigasi
                        </span>
                        <nav class="flex flex-col gap-space-sm" data-active-classes="text-surface-bright font-title-md">
                            <a :class="[{ 'font-body-md text-body-md text-outline-variant hover:text-surface-bright transition-colors': appStore.topbar != item.MENU_NAME }, { 'transition-colors text-surface-bright font-title-md': appStore.topbar == item.MENU_NAME }]"
                                v-for="item in list_menu" :href=item.URL :key="item.IDMENU">
                                {{ item.MENU_NAME }}
                            </a>
                        </nav>
                    </div>
                    <div class="lg:col-span-4 flex flex-col gap-space-md">
                        <span class="font-title-md text-title-md text-surface-bright uppercase tracking-wider">
                            Informasi Kontak
                        </span>
                        <div class="flex flex-col gap-space-sm font-body-sm text-body-sm text-outline-variant">
                            <div class="flex items-start gap-space-xs">
                                <span
                                    class="material-symbols-outlined text-[18px] text-surface-bright mt-0.5">call</span>
                                <span>Telepon: +62 21 5890 2234</span>
                            </div>
                            <div class="flex items-start gap-space-xs">
                                <span
                                    class="material-symbols-outlined text-[18px] text-surface-bright mt-0.5">chat</span>
                                <span>WhatsApp: +62 812 8900 1928</span>
                            </div>
                            <div class="flex items-start gap-space-xs">
                                <span
                                    class="material-symbols-outlined text-[18px] text-surface-bright mt-0.5">mail</span>
                                <span>Email: halo@batiknusantara.id</span>
                            </div>
                            <div class="flex items-start gap-space-xs">
                                <span
                                    class="material-symbols-outlined text-[18px] text-surface-bright mt-0.5">location_on</span>
                                <span>Jl. Tirtodipuran No. 42, Mantrijeron, Yogyakarta 55143</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-space-xl flex items-center justify-center gap-space-md opacity-30">
                    <div class="h-px w-full bg-outline-variant"></div><svg
                        class="w-5 h-5 flex-shrink-0 text-outline-variant fill-current" viewbox="0 0 24 24">
                        <circle cx="12" cy="12" fill="none" r="4" stroke="currentColor" stroke-width="1.5"></circle>
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                            fill="none" opacity="0.5" stroke="currentColor" stroke-width="1"></path>
                    </svg>
                    <div class="h-px w-full bg-outline-variant"></div>
                </div>
                <div
                    class="flex flex-col md:flex-row items-center justify-between gap-space-sm text-center md:text-left">
                    <p class="font-label-sm text-label-sm text-outline-variant tracking-wider">
                        © 2026 Batik Nusantara. All rights reserved.</p>
                    <p class="font-label-sm text-label-sm text-outline-variant tracking-widest uppercase">
                        Yogyakarta • Surakarta • Cirebon
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
.app-container {
    color: #24201D !important;
}

i {
    padding-right: 1.8em;
    color: #24201D;
}

.topbar {
    position: fixed;
    min-width: 100%;
    background-color: #FAF8F5;
    filter: drop-shadow(0 0 0.05rem #699C77);
    font-weight: bold;
    text-align: right;
    z-index: 10;
}

.topbar .fa-bell:hover:before {
    font-weight: 900;
    cursor: pointer;
}

.topbar-menu-button {
    padding: 0 1em 0 1em;
}

.content {
    padding-top: 80px
}

.content .content-inner {
    background-color: #FAF8F5;
}
</style>
