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
                        <span class="material-symbols-outlined text-[20px]">
                           room_service
                        </span>
                     </div>
                     <span class="font-label-sm text-label-sm uppercase tracking-wider text-outline-variant mb-1">
                        WhatsApp
                     </span>
                     <span class="font-title-md text-title-md text-surface-bright mb-1">
                        +628156653189
                     </span>
                  </div>
                  <div
                     class="mt-space-md pt-space-xs text-surface-bright text-body-sm flex items-center justify-between font-semibold">
                     <span>
                        Konsultasi Foto Motif &amp; Cek Ketersediaan
                     </span>
                     <span class="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                        arrow_forward
                     </span>
                  </div>
               </a>
               <!-- IG Card -->
               <a class="group flex flex-col justify-between p-space-lg bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  href="https://www.instagram.com/batiknusantarasby" target="_blank">
                  <div class="flex flex-col">
                     <div
                        class="w-10 h-10 rounded-full bg-secondary-container text-primary flex items-center justify-center mb-space-md group-hover:bg-primary-container group-hover:text-surface-bright transition-colors">
                        <i class="fab fa-instagram"></i>
                     </div>
                     <span class="font-label-sm text-label-sm uppercase tracking-wider text-outline mb-1">
                        instagram
                     </span>
                     <span class="font-title-md text-title-md text-primary mb-1">
                        @batiknusantarasby
                     </span>
                  </div>
               </a>
               <!-- Shopee Card -->
               <a class="group flex flex-col justify-between p-space-lg bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  href="https://shopee.co.id/batiknusantarasby" target="_blank">
                  <div class="flex flex-col">
                     <div
                        class="w-10 h-10 rounded-full bg-secondary-container text-primary flex items-center justify-center mb-space-md group-hover:bg-primary-container group-hover:text-surface-bright transition-colors">
                        <i class="fab fa-shopify"></i>
                     </div>
                     <span class="font-label-sm text-label-sm uppercase tracking-wider text-outline mb-1">
                        shopee
                     </span>
                     <span class="font-title-md text-title-md text-primary mb-1">
                        @batiknusantarasby
                     </span>
                  </div>
               </a>
               <!-- Tokopedia Card -->
               <a class="group flex flex-col justify-between p-space-lg bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  href="https://www.tiktok.com/@batiknusantarasurabaya" target="_blank">
                  <div class="flex flex-col">
                     <div
                        class="w-10 h-10 rounded-full bg-secondary-container text-primary flex items-center justify-center mb-space-md group-hover:bg-primary-container group-hover:text-surface-bright transition-colors">
                        <i class="fab fa-tiktok"></i>
                     </div>
                     <span class="font-label-sm text-label-sm uppercase tracking-wider text-outline mb-1">
                        tiktok
                     </span>
                     <span class="font-title-md text-title-md text-primary mb-1">
                        @batiknusantarasurabaya
                     </span>
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
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
               <!-- Location 1: Yogyakarta -->
               <div
                  class="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div class="w-full h-56 bg-cover bg-center"
                     data-location="Jl. Tirtodipuran No. 42, Mantrijeron, Yogyakarta"
                     style="background-image: url('/gallery-maps.png')">
                  </div>
                  <div class="p-space-lg flex flex-col flex-grow justify-between">
                     <div class="flex flex-col">
                        <h3 class="font-headline-sm text-headline-sm text-primary mb-space-sm">
                           BATIK NUSANTARA GALLERY & WORKSHOP
                        </h3>
                        <div class="flex items-start gap-space-xs text-secondary font-body-sm text-body-sm mb-space-sm">
                           <span class="material-symbols-outlined text-[18px] text-primary mt-0.5">
                              location_on
                           </span>
                           <span>
                              Jl. Puri Jambangan Baru III, Karah, Kec. Jambangan, Surabaya, Jawa Timur 60232
                           </span>
                        </div>
                        <div class="flex items-start gap-space-xs text-secondary font-body-sm text-body-sm mb-space-md">
                           <span class="material-symbols-outlined text-[18px] text-primary mt-0.5">
                              schedule
                           </span>
                           <span>
                              senin – Minggu, 08:00 – 16:00 WIB <br />
                              <!-- <span class="text-outline text-xs">
                                 (Senin Tutup untuk Perawatan Koleksi)
                              </span> -->
                           </span>
                        </div>
                        <!-- Highlight Facilities -->
                        <div class="p-space-sm bg-surface-container-low rounded-lg mb-space-md">
                           <span class="font-label-sm text-label-sm uppercase tracking-wider text-outline block mb-1">
                              GALLERY SERVICES :
                           </span>
                           <ul
                              class="font-body-sm text-body-sm text-on-surface-variant space-y-1 list-inside list-disc">
                              <li>Design & Order Consultation</li>
                              <li>Custom Garment Measurements</li>
                              <li>Batik-Making Classes</li>
                              <li>Feel Free to Browse Our Collections</li>
                           </ul>
                        </div>
                     </div>
                     <!-- Action Buttons -->
                     <div class="flex items-center gap-space-sm pt-space-xs">
                        <a class="flex-1 py-2.5 px-3 rounded-lg bg-surface-container text-primary hover:bg-secondary-container text-center font-label-md text-label-md uppercase tracking-wider transition-colors flex items-center justify-center gap-1"
                           href="https://maps.app.goo.gl/BMBNgSPjzuuAfpQA7?g_st=ic"
                           rel="noopener noreferrer" target="_blank">
                           <span class="material-symbols-outlined text-base">
                              directions
                           </span>
                           <span>
                              Peta Navigasi
                           </span>
                        </a>
                     </div>
                  </div>
               </div>
               <!-- Location 2: Surakarta (Solo) -->
               <div
                  class="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div class="w-full h-56 bg-cover bg-center"
                     data-location="Jl. Dr. Rajiman No. 518, Laweyan, Surakarta"
                     style="background-image: url('/hotel-majapahit.png')">
                  </div>
                  <div class="p-space-lg flex flex-col flex-grow justify-between">
                     <div class="flex flex-col">
                        <h3 class="font-headline-sm text-headline-sm text-primary mb-space-sm">
                           Hotel Majapahit Surabaya
                        </h3>
                        <div class="flex items-start gap-space-xs text-secondary font-body-sm text-body-sm mb-space-sm">
                           <span class="material-symbols-outlined text-[18px] text-primary mt-0.5">location_on</span>
                           <span>Jl. Tunjungan No.65, Genteng, Kec. Genteng, Surabaya, Jawa Timur 60275</span>
                        </div>
                        <div class="flex items-start gap-space-xs text-secondary font-body-sm text-body-sm mb-space-md">
                           <span class="material-symbols-outlined text-[18px] text-primary mt-0.5">schedule</span>
                           <span>
                              Everyday, Open daily during hotel hours <br />
                              <!-- <span class="text-outline text-xs">
                                 (Termasuk Hari Libur Nasional)
                              </span> -->
                           </span>
                        </div>
                     </div>
                     <!-- Action Buttons -->
                     <div class="flex items-center gap-space-sm pt-space-xs">
                        <a class="flex-1 py-2.5 px-3 rounded-lg bg-surface-container text-primary hover:bg-secondary-container text-center font-label-md text-label-md uppercase tracking-wider transition-colors flex items-center justify-center gap-1"
                           href="https://maps.app.goo.gl/QpqBgDnmkJQENaQp7" rel="noopener noreferrer"
                           target="_blank">
                           <span class="material-symbols-outlined text-base">
                              directions
                           </span>
                           <span>
                              Peta Navigasi
                           </span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

   </div>
</template>