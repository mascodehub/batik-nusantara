<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'


</script>

<template>
   <div class="flex flex-col w-full">

      <div class="segment-main w-full bg-surface-bright pt-space-xl pb-space-2xl">
         <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin flex flex-col">
            <!-- Main Heading & Narrative Lead -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-end mt-space-sm">
               <div class="lg:col-span-8 flex flex-col gap-space-md">
                  <h1 class="font-display-xl text-display-xl text-primary leading-tight tracking-tight">
                     Let’s Stay Connected
                  </h1>
                  <p class="font-body-lg text-body-lg text-secondary leading-relaxed max-w-2xl">
                     Interested in our collections or have a design of your own in mind? Get in touch with our team and
                     we’ll be happy to discuss your ideas with you.
                  </p>
               </div>
               <!-- Trust & SLA Pillars -->
               <div
                  class="lg:col-span-4 flex flex-col gap-space-sm bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                  <div class="flex items-start gap-space-sm">
                     <span class="material-symbols-outlined text-on-tertiary-container text-[20px] mt-0.5"
                        style="font-variation-settings: 'FILL' 1;">timer</span>
                     <div class="flex flex-col">
                        <span class="font-title-md text-title-md text-primary">Discover Our Collections</span>
                        <span class="font-body-sm text-body-sm text-secondary">
                           Explore our collections and learn more about the pieces we offer.
                        </span>
                     </div>
                  </div>
                  <div class="w-full h-px bg-surface-container my-1"></div>
                  <div class="flex items-start gap-space-sm">
                     <span class="material-symbols-outlined text-on-tertiary-container text-[20px] mt-0.5"
                        style="font-variation-settings: 'FILL' 1;">video_camera_front</span>
                     <div class="flex flex-col">
                        <span class="font-title-md text-title-md text-primary">Share Your Ideas</span>
                        <span class="font-body-sm text-body-sm text-secondary">
                           Have your own idea or design in mind? Let’s discuss the possibilities.
                        </span>
                     </div>
                  </div>
                  <div class="w-full h-px bg-surface-container my-1"></div>
                  <div class="flex items-start gap-space-sm">
                     <span class="material-symbols-outlined text-on-tertiary-container text-[20px] mt-0.5"
                        style="font-variation-settings: 'FILL' 1;">palette</span>
                     <div class="flex flex-col">
                        <span class="font-title-md text-title-md text-primary">Meet Us in Person</span>
                        <span class="font-body-sm text-body-sm text-secondary">
                           Visit our gallery in Surabaya and experience our collections up close.
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="segment-contact w-full bg-surface-container-low py-space-xl">
         <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
               <!-- WhatsApp Card -->
               <a class="group flex flex-col justify-between p-space-lg bg-primary-container text-surface-bright rounded-xl shadow-sm hover:bg-tertiary-container transition-all duration-300"
                  href="https://wa.me/628156653189" rel="noopener noreferrer" target="_blank">
                  <div class="flex flex-col">
                     <div
                        class="w-10 h-10 rounded-full bg-primary text-surface-bright flex items-center justify-center mb-space-md">
                        <span class="material-symbols-outlined text-[20px]">room_service</span>
                     </div>
                     <span
                        class="font-label-sm text-label-sm uppercase tracking-wider text-outline-variant mb-1">WhatsApp</span>
                     <span class="font-title-md text-title-md text-surface-bright mb-1">
                        +628156653189
                     </span>
                  </div>
                  <div
                     class="mt-space-md pt-space-xs text-surface-bright text-body-sm flex items-center justify-between font-semibold">
                     <span>Konsultasi Foto Motif &amp; Cek
                        Ketersediaan</span>
                     <span
                        class="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
               </a>
               <!-- IG Card -->
               <a class="group flex flex-col justify-between p-space-lg bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  href="https://www.instagram.com/batiknusantarasby" target="_blank">
                  <div class="flex flex-col">
                     <div
                        class="w-10 h-10 rounded-full bg-secondary-container text-primary flex items-center justify-center mb-space-md group-hover:bg-primary-container group-hover:text-surface-bright transition-colors">
                        <span class="material-symbols-outlined text-[20px]">call</span>
                     </div>
                     <span class="font-label-sm text-label-sm uppercase tracking-wider text-outline mb-1">
                        instagram
                     </span>
                     <span class="font-title-md text-title-md text-primary mb-1">@batiknusantarasby</span>
                  </div>
               </a>
               <!-- Shopee Card -->
               <a class="group flex flex-col justify-between p-space-lg bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  href="https://shopee.co.id/batiknusantarasby" target="_blank">
                  <div class="flex flex-col">
                     <div
                        class="w-10 h-10 rounded-full bg-secondary-container text-primary flex items-center justify-center mb-space-md group-hover:bg-primary-container group-hover:text-surface-bright transition-colors">
                        <span class="material-symbols-outlined text-[20px]">call</span>
                     </div>
                     <span class="font-label-sm text-label-sm uppercase tracking-wider text-outline mb-1">
                        shopee
                     </span>
                     <span class="font-title-md text-title-md text-primary mb-1">@batiknusantarasby</span>
                  </div>
               </a>
               <!-- Tokopedia Card -->
               <a class="group flex flex-col justify-between p-space-lg bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  href="https://www.tiktok.com/@batiknusantarasurabaya" target="_blank">
                  <div class="flex flex-col">
                     <div
                        class="w-10 h-10 rounded-full bg-secondary-container text-primary flex items-center justify-center mb-space-md group-hover:bg-primary-container group-hover:text-surface-bright transition-colors">
                        <span class="material-symbols-outlined text-[20px]">call</span>
                     </div>
                     <span class="font-label-sm text-label-sm uppercase tracking-wider text-outline mb-1">
                        tiktok
                     </span>
                     <span class="font-title-md text-title-md text-primary mb-1">@batiknusantarasurabaya</span>
                  </div>
               </a>

            </div>
         </div>
      </div>

      <div class="segment-showroom w-full bg-surface-container-low py-space-2xl">
         <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
            <!-- Section Title & Narrative -->
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
               <div>
                  <h2 class="font-headline-lg text-headline-lg text-primary mt-space-xs">
                     Where to find us
                  </h2>
               </div>
               <p class="font-body-md text-body-md text-secondary max-w-md">
                  Discover our collections in person at our gallery and selected locations across Surabaya.
               </p>
            </div>
            <!-- Cards Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-space-xl">
               <!-- Location 1: Yogyakarta -->
               <div
                  class="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div class="w-full h-56 bg-cover bg-center"
                     data-location="Jl. Tirtodipuran No. 42, Mantrijeron, Yogyakarta"
                     style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCri4mJEaBFqegPFPVjX0bsYYeWBVTN6KVszhCAQadYjEIuk9L5hYtkgA94rgeAGIsqDYr0FkfxMzIemtYqpkD6mYxJ_uN0plw9dOWfVUbge1xieiDW3mQKFrdL0MhatwZkuUxdPr40IFIBI1u6NFxcilM8uSgvX_catLazbEX2bkcYGkJTm5kaU17Yf-4FmAjybSu9cSYP19MKas06zjuaANiDcvdwjf2KsF9Ox8HZEDD2FSOH4Ao')">
                  </div>
                  <div class="p-space-lg flex flex-col flex-grow justify-between">
                     <div class="flex flex-col">
                        <div class="flex items-center justify-between mb-space-xs">
                           <span
                              class="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-semibold">Atelier
                              &amp; Ruang Kurasi 01</span>
                           <span
                              class="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-secondary-container text-primary font-semibold">Pusat
                              Desain</span>
                        </div>
                        <h3 class="font-headline-sm text-headline-sm text-primary mb-space-sm">Atelier Tirtodipuran
                           Yogyakarta
                        </h3>
                        <div class="flex items-start gap-space-xs text-secondary font-body-sm text-body-sm mb-space-sm">
                           <span class="material-symbols-outlined text-[18px] text-primary mt-0.5">location_on</span>
                           <span>Jl. Tirtodipuran No. 42, Mantrijeron, Kota Yogyakarta 55143</span>
                        </div>
                        <div class="flex items-start gap-space-xs text-secondary font-body-sm text-body-sm mb-space-md">
                           <span class="material-symbols-outlined text-[18px] text-primary mt-0.5">schedule</span>
                           <span>Selasa – Minggu, 09:00 – 17:30 WIB <br /><span class="text-outline text-xs">(Senin
                                 Tutup untuk
                                 Perawatan Koleksi)</span></span>
                        </div>
                        <!-- Highlight Facilities -->
                        <div class="p-space-sm bg-surface-container-low rounded-lg mb-space-md">
                           <span
                              class="font-label-sm text-label-sm uppercase tracking-wider text-outline block mb-1">Fasilitas
                              Khusus:</span>
                           <ul
                              class="font-body-sm text-body-sm text-on-surface-variant space-y-1 list-inside list-disc">
                              <li>Private Fitting &amp; Bespoke Suite</li>
                              <li>Ruang Arsip Naskah &amp; Cap Keraton</li>
                              <li>Kebun Tanaman Pewarna Alami Soga</li>
                           </ul>
                        </div>
                     </div>
                     <!-- Action Buttons -->
                     <div class="flex items-center gap-space-sm pt-space-xs">
                        <a class="flex-1 py-2.5 px-3 rounded-lg bg-surface-container text-primary hover:bg-secondary-container text-center font-label-md text-label-md uppercase tracking-wider transition-colors flex items-center justify-center gap-1"
                           href="https://maps.google.com/?q=Jl.+Tirtodipuran+No.+42+Yogyakarta"
                           rel="noopener noreferrer" target="_blank">
                           <span class="material-symbols-outlined text-base">directions</span>
                           <span>Peta Navigasi</span>
                        </a>
                     </div>
                  </div>
               </div>
               <!-- Location 2: Surakarta (Solo) -->
               <div
                  class="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div class="w-full h-56 bg-cover bg-center"
                     data-location="Jl. Dr. Rajiman No. 518, Laweyan, Surakarta"
                     style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5n4vcxvnC5Hh0cxgDpaGtaTrzXMEjg2hzSkcCiDwC_ZlWlP8NqDL5CMFZnMMtMsOJJqhqEeSzcx5Vr3bzlTxJzit8BGt5q_nKRdutJXt74d6U6AIK9OnyqMFwgE2I2uyB4bY4698oxXccGOd1CpwQ76pJC3RAW2PttMw3PDhD30eBsFnQpcwMSUEq3-onr-oBPXk0IiDqUCqSQAADiJoYQDIEKqxvvGRXLi4DVUfrwSXXQBWVgL0')">
                  </div>
                  <div class="p-space-lg flex flex-col flex-grow justify-between">
                     <div class="flex flex-col">
                        <div class="flex items-center justify-between mb-space-xs">
                           <span
                              class="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-semibold">Galeri
                              Tradisi 02</span>
                           <span
                              class="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-secondary-container text-primary font-semibold">Sentra
                              Klasik</span>
                        </div>
                        <h3 class="font-headline-sm text-headline-sm text-primary mb-space-sm">Galeri Laweyan Surakarta
                        </h3>
                        <div class="flex items-start gap-space-xs text-secondary font-body-sm text-body-sm mb-space-sm">
                           <span class="material-symbols-outlined text-[18px] text-primary mt-0.5">location_on</span>
                           <span>Kawasan Cagar Budaya Laweyan, Jl. Dr. Rajiman No. 518, Surakarta 57148</span>
                        </div>
                        <div class="flex items-start gap-space-xs text-secondary font-body-sm text-body-sm mb-space-md">
                           <span class="material-symbols-outlined text-[18px] text-primary mt-0.5">schedule</span>
                           <span>Setiap Hari, 09:30 – 18:00 WIB <br /><span class="text-outline text-xs">(Termasuk Hari
                                 Libur
                                 Nasional)</span></span>
                        </div>
                        <!-- Highlight Facilities -->
                        <div class="p-space-sm bg-surface-container-low rounded-lg mb-space-md">
                           <span
                              class="font-label-sm text-label-sm uppercase tracking-wider text-outline block mb-1">Fasilitas
                              Khusus:</span>
                           <ul
                              class="font-body-sm text-body-sm text-on-surface-variant space-y-1 list-inside list-disc">
                              <li>Studio Pengrajin Canting Tulis Alus</li>
                              <li>Display Koleksi Parang &amp; Kawung Maestro</li>
                              <li>Ruang Jamuan Teh Kemitraan Adat</li>
                           </ul>
                        </div>
                     </div>
                     <!-- Action Buttons -->
                     <div class="flex items-center gap-space-sm pt-space-xs">
                        <a class="flex-1 py-2.5 px-3 rounded-lg bg-surface-container text-primary hover:bg-secondary-container text-center font-label-md text-label-md uppercase tracking-wider transition-colors flex items-center justify-center gap-1"
                           href="https://maps.google.com/?q=Laweyan+Jl.+Dr.+Rajiman+518+Solo" rel="noopener noreferrer"
                           target="_blank">
                           <span class="material-symbols-outlined text-base">directions</span>
                           <span>Peta Navigasi</span>
                        </a>
                     </div>
                  </div>
               </div>
               <!-- Location 3: Cirebon -->
               <div
                  class="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div class="w-full h-56 bg-cover bg-center"
                     data-location="Jl. Syekh Datul Kahfi No. 88, Plered, Cirebon"
                     style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdduCNRsxJGUtoK5fMgsJe26UPu28XtteUvFhQyf-9Bt88cxz54AnMa6IWJp-Wz42Tzbf9s0eO4RR0s0fhr-9KBjlw9waDcyx_tRt4-Jm-M8ndUnOFM-a-CUIqUkwGAVoM-JdXK5gCKd-m1JBc31EJOBGHzNWuX7smLC23bIiO-k93ngjPn_wguxUkuOSkzUZ-AF-qKRKqUJj9TDPmDYLuimTdhvntyxbK5z7pxKZJgTDvdQZEGGo')">
                  </div>
                  <div class="p-space-lg flex flex-col flex-grow justify-between">
                     <div class="flex flex-col">
                        <div class="flex items-center justify-between mb-space-xs">
                           <span
                              class="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-semibold">Rumah
                              Wastra Pesisir 03</span>
                           <span
                              class="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-secondary-container text-primary font-semibold">Koleksi
                              Indigo</span>
                        </div>
                        <h3 class="font-headline-sm text-headline-sm text-primary mb-space-sm">Rumah Wastra Trusmi
                           Cirebon
                        </h3>
                        <div class="flex items-start gap-space-xs text-secondary font-body-sm text-body-sm mb-space-sm">
                           <span class="material-symbols-outlined text-[18px] text-primary mt-0.5">location_on</span>
                           <span>Sentra Batik Trusmi, Jl. Syekh Datul Kahfi No. 88, Plered, Cirebon 45154</span>
                        </div>
                        <div class="flex items-start gap-space-xs text-secondary font-body-sm text-body-sm mb-space-md">
                           <span class="material-symbols-outlined text-[18px] text-primary mt-0.5">schedule</span>
                           <span>Senin – Sabtu, 08:30 – 17:00 WIB <br /><span class="text-outline text-xs">(Minggu
                                 dengan
                                 Perjanjian Khusus)</span></span>
                        </div>
                        <!-- Highlight Facilities -->
                        <div class="p-space-sm bg-surface-container-low rounded-lg mb-space-md">
                           <span
                              class="font-label-sm text-label-sm uppercase tracking-wider text-outline block mb-1">Fasilitas
                              Khusus:</span>
                           <ul
                              class="font-body-sm text-body-sm text-on-surface-variant space-y-1 list-inside list-disc">
                              <li>Koleksi Pewarnaan Alami Indigofera &amp; Mega Mendung</li>
                              <li>Laboratorium Ekstraksi Daun Tarum</li>
                              <li>Galeri Souvenir Souvenir VIP Box Diplomat</li>
                           </ul>
                        </div>
                     </div>
                     <!-- Action Buttons -->
                     <div class="flex items-center gap-space-sm pt-space-xs">
                        <a class="flex-1 py-2.5 px-3 rounded-lg bg-surface-container text-primary hover:bg-secondary-container text-center font-label-md text-label-md uppercase tracking-wider transition-colors flex items-center justify-center gap-1"
                           href="https://maps.google.com/?q=Trusmi+Jl.+Syekh+Datul+Kahfi+88+Cirebon"
                           rel="noopener noreferrer" target="_blank">
                           <span class="material-symbols-outlined text-base">directions</span>
                           <span>Peta Navigasi</span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

   </div>
</template>