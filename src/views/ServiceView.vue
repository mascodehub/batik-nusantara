<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'


</script>

<template>
   <div class="flex flex-col w-full">
      <div class="segment-main w-full bg-surface py-space-xl md:py-space-2xl">
         <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
            <!-- Editorial Header Content -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
               <div class="lg:col-span-8 flex flex-col gap-space-sm">
                  <div
                     class="inline-flex bg-white hover:border-white items-center gap-space-xs self-start px-3 py-1 rounded-full bg-secondary-container text-primary font-label-sm text-label-sm tracking-wider uppercase">
                     <span
                        class="material-symbols-outlined text-[15px] text-tertiary-container">workspace_premium</span>
                     Katalog Layanan &amp; Kolaborasi
                  </div>
                  <h1
                     class="font-headline-lg text-headline-lg md:text-display-xl text-primary tracking-tight leading-tight">
                     Layanan dan Produk <br class="hidden sm:inline" />
                     <em class="italic font-headline-lg md:text-display-xl text-secondary">Wastra Adiluhung</em>
                  </h1>
                  <p class="font-body-lg text-body-lg text-secondary max-w-2xl mt-space-xs">
                     Batik Nusantara Heritage menghadirkan ekosistem wastra Nusantara terpadu: mulai dari lembaran kain
                     tulis
                     pusaka, busana kriya siap pakai, adibusana pesanan pribadi, hingga pengadaan korporasi dan riset
                     filosofi motif berlisensi.
                  </p>
               </div>
               <!-- Metric Badges / Pillars -->
               <div class="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm">
                  <div
                     class="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-lg shadow-sm">
                     <div
                        class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary flex-shrink-0">
                        <span class="material-symbols-outlined text-[20px]">spa</span>
                     </div>
                     <div>
                        <p class="font-title-md text-title-md text-primary leading-tight">Bahan Alami Pilihan</p>
                        <p class="font-body-sm text-body-sm text-outline">Sutra ATBM, Katun Primissima, Pewarna Soga
                           Alam</p>
                     </div>
                  </div>
                  <div
                     class="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-lg shadow-sm">
                     <div
                        class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary flex-shrink-0">
                        <span class="material-symbols-outlined text-[20px]">groups</span>
                     </div>
                     <div>
                        <p class="font-title-md text-title-md text-primary leading-tight">Ratusan Maestro Pengrajin</p>
                        <p class="font-body-sm text-body-sm text-outline">Pemberdayaan sentra batik Jogja, Solo &amp;
                           Cirebon
                        </p>
                     </div>
                  </div>
                  <div
                     class="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-lg shadow-sm">
                     <div
                        class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary flex-shrink-0">
                        <span class="material-symbols-outlined text-[20px]">verified</span>
                     </div>
                     <div>
                        <p class="font-title-md text-title-md text-primary leading-tight">Kurator Berpengalaman</p>
                        <p class="font-body-sm text-body-sm text-outline">Pendampingan pemilihan motif bersertifikat
                           keaslian
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="segment-service-card bg-surface-container-low py-space-2xl">
         <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
            <!-- Section Header -->
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
               <div>
                  <span class="font-label-sm text-label-sm uppercase tracking-widest text-outline">Portofolio
                     Pelayanan</span>
                  <h2 class="font-headline-md text-headline-md md:text-headline-lg text-primary tracking-tight mt-1">
                     Enam Spektrum Keahlian Kriya
                  </h2>
               </div>
               <p class="font-body-md text-body-md text-secondary max-w-md">
                  Setiap layanan dikerjakan dengan presisi tinggi melalui riset motif dan pengawasan standar mutu ketat.
               </p>
            </div>
            <!-- Grid of 6 Services -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
               <!-- CARD 1: Penjualan Kain Batik -->
               <article
                  class="flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden group hover:bg-surface transition-all duration-300 shadow-sm hover:shadow-md">
                  <div class="relative w-full aspect-[4/3] overflow-hidden bg-surface-container">
                     <img alt="Penjualan Kain Batik Tulis dan Cap Batik Nusantara"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-alt="Draped artisanal Indonesian batik fabric in rich soga brown, indigo blue, and cream colors showing authentic hand-drawn Canting wax details on an antique wooden workshop table."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeBxbb4VECFkvPONaM28OGlZOEkwkh0arzuZmnc3AfvBK7ggqoXbc-88j0kfuiBDQtddFNGH6TzEdiBEbAPhLDEnlTDTiSZEz_pvPrIbyYW1ErH146WQg-wOHtQhUKXdVjv18PitJiUn7u0b75mESEJ2UPgvM9xg2Vm9zvEmHB2NaM-8_BiL9gnXoS7vl7LIAEHaxEY7XWm8wfnpXRDyn_bDIXL6EiSDji0IjICGlmHr5SwGQ-YPc" />
                     <div class="absolute top-3 left-3">
                        <span
                           class="px-2.5 py-1 rounded bg-primary-container text-surface-bright font-label-sm text-label-sm tracking-wider uppercase">
                           Wastra Bahan
                        </span>
                     </div>
                     <div
                        class="absolute bottom-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-0.5 rounded text-primary font-label-sm text-label-sm">
                        Tulis &amp; Cap
                     </div>
                  </div>
                  <div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
                     <div>
                        <div
                           class="flex items-center gap-space-xs text-outline mb-1 font-label-sm text-label-sm uppercase tracking-wider">
                           <span class="material-symbols-outlined text-[16px]">texture</span>
                           <span>Koleksi Lembaran Wastra</span>
                        </div>
                        <h3
                           class="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-tertiary-container transition-colors">
                           Penjualan Kain Batik
                        </h3>
                        <p class="font-body-md text-body-md text-secondary leading-relaxed mb-space-md">
                           Koleksi kain batik tulis halus dan cap berkualitas tinggi dengan bahan primissima, sutra
                           ATBM, dan
                           pewarna alami soga alam yang ramah lingkungan.
                        </p>
                        <ul class="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                           <li class="flex items-center gap-2">
                              <span
                                 class="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span>
                              <span>Batik Tulis Halus (Pengerjaan 3-6 bulan)</span>
                           </li>
                           <li class="flex items-center gap-2">
                              <span
                                 class="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span>
                              <span>Batik Cap Klasik &amp; Kombinasi</span>
                           </li>
                           <li class="flex items-center gap-2">
                              <span
                                 class="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span>
                              <span>Sutra ATBM, Katun Primissima, Dobby</span>
                           </li>
                        </ul>
                     </div>
                     <div class="pt-space-md flex items-center justify-between">
                        <button
                           class="inline-flex bg-white hover:border-white items-center gap-2 font-label-lg text-label-lg text-primary hover:text-tertiary-container group/btn transition-colors"
                           onclick="openDetailModal('kain')" type="button">
                           <span>Lihat Detail &amp; Spesifikasi</span>
                           <span
                              class="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                     </div>
                  </div>
               </article>
               <!-- CARD 2: Produk Fashion Batik -->
               <article
                  class="flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden group hover:bg-surface transition-all duration-300 shadow-sm hover:shadow-md">
                  <div class="relative w-full aspect-[4/3] overflow-hidden bg-surface-container">
                     <img alt="Fashion Batik Ready to Wear"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-alt="Modern Indonesian woman in architectural concrete interior wearing an elegant tailored batik blazer suit with botanical motif paired with dark trousers, quiet luxury look."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC24VBBYwp6fhNAPMQDMTJftzaEvBJb0bzX0db4eZOnTLVLDFzD5pWof_Lef8CdMCvSbAQAgwnZybpGTEi4Fk7c2Z9kr9Uctz7B1c8mHtgr8IZgBnbHdAS-1CvJTbWaqfR32nqNIj7kHMrWEevFpWUQIPr2ocDDJfi93D9eXFmFZy2nPZdF44K9QpC6BXuJPKP26-ziNc1VDpR4dDT9ftomzT86CC0ryQGv7fqX-uJ9fybtKYj1pxM" />
                     <div class="absolute top-3 left-3">
                        <span
                           class="px-2.5 py-1 rounded bg-primary-container text-surface-bright font-label-sm text-label-sm tracking-wider uppercase">
                           Ready-to-Wear
                        </span>
                     </div>
                     <div
                        class="absolute bottom-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-0.5 rounded text-primary font-label-sm text-label-sm">
                        Pria &amp; Wanita
                     </div>
                  </div>
                  <div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
                     <div>
                        <div
                           class="flex items-center gap-space-xs text-outline mb-1 font-label-sm text-label-sm uppercase tracking-wider">
                           <span class="material-symbols-outlined text-[16px]">apparel</span>
                           <span>Busana Siap Pakai</span>
                        </div>
                        <h3
                           class="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-tertiary-container transition-colors">
                           Produk Fashion Batik
                        </h3>
                        <p class="font-body-md text-body-md text-secondary leading-relaxed mb-space-md">
                           Busana siap pakai (ready-to-wear) dan adibusana bergaya kontemporer untuk pria dan wanita
                           dengan
                           potongan modern elegan yang nyaman dipakai sehari-hari.
                        </p>
                        <ul class="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                           <li class="flex items-center gap-2">
                              <span
                                 class="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span>
                              <span>Blazer &amp; Outerwear Siluet Modern</span>
                           </li>
                           <li class="flex items-center gap-2">
                              <span
                                 class="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span>
                              <span>Kemeja Formal Pria Pola Pas Sambung</span>
                           </li>
                           <li class="flex items-center gap-2">
                              <span
                                 class="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span>
                              <span>Dress &amp; Tunik Elegan Serat Alami</span>
                           </li>
                        </ul>
                     </div>
                     <div class="pt-space-md flex items-center justify-between">
                        <button
                           class="inline-flex bg-white hover:border-white items-center gap-2 font-label-lg text-label-lg text-primary hover:text-tertiary-container group/btn transition-colors"
                           onclick="openDetailModal('fashion')" type="button">
                           <span>Lihat Detail &amp; Spesifikasi</span>
                           <span
                              class="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                     </div>
                  </div>
               </article>
               <!-- CARD 3: Custom Tailoring (Bespoke) -->
               <article
                  class="flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden group hover:bg-surface transition-all duration-300 shadow-sm hover:shadow-md">
                  <div class="relative w-full aspect-[4/3] overflow-hidden bg-surface-container">
                     <img alt="Custom Batik Bespoke Batik Nusantara"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-alt="Indonesian high fashion model posing in an art gallery wearing an haute couture asymmetric draped evening gown made of dark floral batik silk, dramatic refined lighting."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0lxx7o-xZtr6Yto4hsdIOgW-_VAxNmo_sVRLQt7b5NQlePkg3pTkyo40zpuzOGffElqIkxR3gVIG7I4_2WXvpLPpKl3BqXFZnOWFNkxLeDctFvjjnkvnQHMCS4yNkXO8gp451q8mydJiis6uYu5usEW_NFovl8eZTgbxcRJw8IgHekrmwiDk08pk_3wieu13mPEnQK5jfJWeNTamxvsGhc8MHXtlsq2VIA2qlgBPPSWFkQp2BdO4" />
                     <div class="absolute top-3 left-3">
                        <span
                           class="px-2.5 py-1 rounded bg-tertiary-container text-surface-bright font-label-sm text-label-sm tracking-wider uppercase">
                           Adibusana Eksklusif
                        </span>
                     </div>
                     <div
                        class="absolute bottom-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-0.5 rounded text-primary font-label-sm text-label-sm">
                        Satu Desain Satu Pemilik
                     </div>
                  </div>
                  <div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
                     <div>
                        <div
                           class="flex items-center gap-space-xs text-outline mb-1 font-label-sm text-label-sm uppercase tracking-wider">
                           <span class="material-symbols-outlined text-[16px]">straighten</span>
                           <span>Tailor-Made Adibusana</span>
                        </div>
                        <h3
                           class="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-tertiary-container transition-colors">
                           Produk Batik Custom (Bespoke)
                        </h3>
                        <p class="font-body-md text-body-md text-secondary leading-relaxed mb-space-md">
                           Pembuatan busana tailor-made dengan pengukuran siluet presisi dan penyesuaian motif khusus
                           berfilosofi personal untuk resepsi pernikahan, gala, atau busana panggung.
                        </p>
                        <ul class="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                           <li class="flex items-center gap-2">
                              <span
                                 class="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span>
                              <span>Konsultasi Motif Filosofis Personal</span>
                           </li>
                           <li class="flex items-center gap-2">
                              <span
                                 class="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span>
                              <span>Pengukuran Siluet Presisi 28 Titik Tubuh</span>
                           </li>
                           <li class="flex items-center gap-2">
                              <span
                                 class="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span>
                              <span>Fitting Eksklusif di Studio / Private Suite</span>
                           </li>
                        </ul>
                     </div>
                     <div class="pt-space-md flex items-center justify-between">
                        <button
                           class="inline-flex bg-white hover:border-white items-center gap-2 font-label-lg text-label-lg text-primary hover:text-tertiary-container group/btn transition-colors"
                           onclick="openDetailModal('bespoke')" type="button">
                           <span>Lihat Detail &amp; Spesifikasi</span>
                           <span
                              class="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                     </div>
                  </div>
               </article>
               <!-- CARD 4: Souvenir & Cinderamata Batik -->
               <article
                  class="flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden group hover:bg-surface transition-all duration-300 shadow-sm hover:shadow-md">
                  <div class="relative w-full aspect-[4/3] overflow-hidden bg-surface-container">
                     <img alt="Cinderamata Souvenir Batik Eksklusif"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-alt="Luxury handcrafted home living and executive gift set featuring parang batik silk cushions, hand-dyed table runner, and ceramic artisan pieces on clean solid teak wood table."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmaM68BY2c3GTA018kDPlSLP5tbNqwf-H7C6Cv5XcYHyNOsh7AecYzgR_ZN8eoI3Phb0JmF6EuxyuNigwxgp9vWKDrKYQ90T2Ww5BOGcoZVYcthgGbHWQ7gcrRcTb3FFcJRbzz1OJTJ5CijdhX_0aRymflZxtpkId5V6sM8krSwiaQpmTdtwWLUN11exbUGpEe7RIdmqxR8c5UGGX0A81dJRJ8MsGUkdyGmXa1r26sOWY5QiHmGMY" />
                     <div class="absolute top-3 left-3">
                        <span
                           class="px-2.5 py-1 rounded bg-primary-container text-surface-bright font-label-sm text-label-sm tracking-wider uppercase">
                           Cinderamata Kenegaraan
                        </span>
                     </div>
                     <div
                        class="absolute bottom-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-0.5 rounded text-primary font-label-sm text-label-sm">
                        Kemasan Kayu Jati
                     </div>
                  </div>
                  <div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
                     <div>
                        <div
                           class="flex items-center gap-space-xs text-outline mb-1 font-label-sm text-label-sm uppercase tracking-wider">
                           <span class="material-symbols-outlined text-[16px]">featured_seasonal_and_gifts</span>
                           <span>Bingkisan Kehormatan</span>
                        </div>
                        <h3
                           class="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-tertiary-container transition-colors">
                           Souvenir &amp; Cinderamata Batik
                        </h3>
                        <p class="font-body-md text-body-md text-secondary leading-relaxed mb-space-md">
                           Bingkisan eksklusif berupa scarf sutra, clutch, selendang tenun batik, kotak kayu ukir batik,
                           dan
                           set kado bernilai seni tinggi untuk delegasi serta tamu VIP.
                        </p>
                        <ul class="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                           <li class="flex items-center gap-2">
                              <span
                                 class="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span>
                              <span>Hampers Kemasan Kotak Kayu Jati Ukir</span>
                           </li>
                           <li class="flex items-center gap-2">
                              <span
                                 class="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span>
                              <span>Pure Silk Hand-rolled Scarf Eksklusif</span>
                           </li>
                           <li class="flex items-center gap-2">
                              <span
                                 class="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span>
                              <span>Sertifikat Filosofi Motif &amp; Keaslian</span>
                           </li>
                        </ul>
                     </div>
                     <div class="pt-space-md flex items-center justify-between">
                        <button
                           class="inline-flex bg-white hover:border-white items-center gap-2 font-label-lg text-label-lg text-primary hover:text-tertiary-container group/btn transition-colors"
                           onclick="openDetailModal('souvenir')" type="button">
                           <span>Lihat Detail &amp; Spesifikasi</span>
                           <span
                              class="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                     </div>
                  </div>
               </article>
               <!-- CARD 5: Pesanan Partai / Grosir Institusi -->
               <article
                  class="flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden group hover:bg-surface transition-all duration-300 shadow-sm hover:shadow-md">
                  <div
                     class="relative w-full aspect-[4/3] overflow-hidden bg-surface-container flex items-center justify-center p-space-xl bg-gradient-to-br from-surface-container to-surface-container-high">
                     <!-- Graphical Rich Accent for B2B Scale -->
                     <div
                        class="w-full h-full flex flex-col justify-between p-space-md bg-surface-container-lowest/80 backdrop-blur-sm rounded">
                        <div class="flex items-center justify-between">
                           <span class="font-label-sm text-label-sm uppercase tracking-widest text-outline">Kapasitas
                              Produksi</span>
                           <span class="text-tertiary-container font-title-md text-title-md font-bold">10.000+
                              m/bln</span>
                        </div>
                        <div class="space-y-2">
                           <div class="flex justify-between font-label-sm text-label-sm text-secondary">
                              <span>Konsistensi Celup Warna</span>
                              <span class="text-primary font-semibold">Delta E &lt; 0.8</span>
                           </div>
                           <div class="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                              <div class="bg-primary h-full w-[94%]"></div>
                           </div>
                        </div>
                        <div class="flex items-center gap-2 text-outline-variant font-label-sm text-label-sm">
                           <span class="material-symbols-outlined text-[16px] text-tertiary-container">domain</span>
                           <span>Standar BUMN, Kementerian &amp; Korporat</span>
                        </div>
                     </div>
                     <div class="absolute top-3 left-3">
                        <span
                           class="px-2.5 py-1 rounded bg-primary-container text-surface-bright font-label-sm text-label-sm tracking-wider uppercase">
                           Institusi &amp; B2B
                        </span>
                     </div>
                  </div>
                  <div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
                     <div>
                        <div
                           class="flex items-center gap-space-xs text-outline mb-1 font-label-sm text-label-sm uppercase tracking-wider">
                           <span class="material-symbols-outlined text-[16px]">inventory_2</span>
                           <span>Pengadaan Skala Besar</span>
                        </div>
                        <h3
                           class="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-tertiary-container transition-colors">
                           Pesanan Partai &amp; Grosir Seragam
                        </h3>
                        <p class="font-body-md text-body-md text-secondary leading-relaxed mb-space-md">
                           Pengadaan seragam batik dinas, instansi kementerian, BUMN, perbankan, dan swasta nasional
                           dengan
                           jaminan konsistensi warna, kekuatan serat, dan ketepatan termin jadwal.
                        </p>
                        <ul class="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                           <li class="flex items-center gap-2">
                              <span
                                 class="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span>
                              <span>Kapasitas Skala Besar Hingga Ribuan Potong</span>
                           </li>
                           <li class="flex items-center gap-2">
                              <span
                                 class="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span>
                              <span>Konsistensi Spektrum Warna Formula Lab</span>
                           </li>
                           <li class="flex items-center gap-2">
                              <span
                                 class="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span>
                              <span>Mockup Desain Digital &amp; Sample Fisik Gratis</span>
                           </li>
                        </ul>
                     </div>
                     <div class="pt-space-md flex items-center justify-between">
                        <button
                           class="inline-flex bg-white hover:border-white items-center gap-2 font-label-lg text-label-lg text-primary hover:text-tertiary-container group/btn transition-colors"
                           onclick="openDetailModal('grosir')" type="button">
                           <span>Lihat Detail &amp; Spesifikasi</span>
                           <span
                              class="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                     </div>
                  </div>
               </article>
               <!-- CARD 6: Custom Pola & Konsultasi Motif Batik -->
               <article
                  class="flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden group hover:bg-surface transition-all duration-300 shadow-sm hover:shadow-md">
                  <div
                     class="relative w-full aspect-[4/3] overflow-hidden bg-surface-container flex items-center justify-center p-space-lg bg-gradient-to-tr from-surface-container-highest via-surface-container to-surface-bright">
                     <!-- Visual Motif Vector Accent -->
                     <div class="relative w-full h-full flex flex-col justify-center items-center text-center p-4">
                        <svg class="w-20 h-20 text-tertiary-container/30 mb-2" fill="none" stroke="currentColor"
                           viewbox="0 0 100 100">
                           <circle cx="50" cy="50" r="38" stroke-dasharray="3 3" stroke-width="1.5"></circle>
                           <circle cx="35" cy="50" r="18" stroke-width="1.5"></circle>
                           <circle cx="65" cy="50" r="18" stroke-width="1.5"></circle>
                           <circle cx="50" cy="35" r="18" stroke-width="1.5"></circle>
                           <circle cx="50" cy="65" r="18" stroke-width="1.5"></circle>
                           <circle cx="50" cy="50" fill="currentColor" r="4"></circle>
                        </svg>
                        <span class="font-headline-sm text-headline-sm text-primary italic">"Kawung Ratu Prabu"</span>
                        <span class="font-label-sm text-label-sm text-outline uppercase tracking-widest mt-1">Hak Paten
                           &amp;
                           Sertifikasi Hak Cipta</span>
                     </div>
                     <div class="absolute top-3 left-3">
                        <span
                           class="px-2.5 py-1 rounded bg-primary text-surface-bright font-label-sm text-label-sm tracking-wider uppercase">
                           Riset &amp; Konsultasi
                        </span>
                     </div>
                  </div>
                  <div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
                     <div>
                        <div
                           class="flex items-center gap-space-xs text-outline mb-1 font-label-sm text-label-sm uppercase tracking-wider">
                           <span class="material-symbols-outlined text-[16px]">history_edu</span>
                           <span>Desain &amp; Lisensi Motif</span>
                        </div>
                        <h3
                           class="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-tertiary-container transition-colors">
                           Custom Pola &amp; Konsultasi Motif
                        </h3>
                        <p class="font-body-md text-body-md text-secondary leading-relaxed mb-space-md">
                           Riset etimologis, penciptaan filosofi, dan pendaftaran lisensi hak kekayaan intelektual
                           (HAKI) motif
                           batik khas bagi entitas perusahaan, trah keluarga, atau acara akbar.
                        </p>
                        <ul class="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                           <li class="flex items-center gap-2">
                              <span
                                 class="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span>
                              <span>Hak Cipta Desain Eksklusif Terdaftar HAKI</span>
                           </li>
                           <li class="flex items-center gap-2">
                              <span
                                 class="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span>
                              <span>Buku Dokumentasi &amp; Rekam Filosofi Nilai Budaya</span>
                           </li>
                           <li class="flex items-center gap-2">
                              <span
                                 class="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span>
                              <span>Pedoman Penggunaan Motif (Brand Styleguide)</span>
                           </li>
                        </ul>
                     </div>
                     <div class="pt-space-md flex items-center justify-between">
                        <button
                           class="inline-flex bg-white hover:border-white items-center gap-2 font-label-lg text-label-lg text-primary hover:text-tertiary-container group/btn transition-colors"
                           onclick="openDetailModal('konsultasi')" type="button">
                           <span>Lihat Detail &amp; Spesifikasi</span>
                           <span
                              class="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                     </div>
                  </div>
               </article>
            </div>
         </div>
      </div>

      <div class="segment-workflow w-full bg-surface py-space-2xl">
         <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
            <!-- Process Header -->
            <div class="text-center max-w-2xl mx-auto mb-space-2xl">
               <span class="font-label-sm text-label-sm uppercase tracking-widest text-outline">Standar Operasional
                  Adiluhung</span>
               <h2 class="font-headline-lg text-headline-lg text-primary tracking-tight mt-2">
                  Alur Pengerjaan Layanan
               </h2>
               <p class="font-body-md text-body-md text-secondary mt-2">
                  Dari guratan canting pertama hingga busana tiba di tangan Anda, kami menjaga setiap tahapan penuh
                  ketelitian dan penghormatan pada tradisi leluhur.
               </p>
            </div>
            <!-- Process 4-Step Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg relative">
               <!-- Step 1 -->
               <div
                  class="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col justify-between relative group hover:bg-surface-container-low transition-colors">
                  <div>
                     <div class="flex items-center justify-between mb-space-md">
                        <span
                           class="font-headline-lg text-headline-lg text-tertiary-container font-light opacity-50">01</span>
                        <div
                           class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                           <span class="material-symbols-outlined text-[20px]">forum</span>
                        </div>
                     </div>
                     <h3 class="font-title-lg text-title-lg text-primary mb-2">Konsultasi &amp; Kurasi Kebutuhan</h3>
                     <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
                        Eksplorasi preferensi motif leluhur, kebutuhan volume pemakaian, pemilihan bahan baku (sutra,
                        katun
                        super, dobby), hingga penentuan skema budget.
                     </p>
                  </div>
                  <div
                     class="mt-space-md pt-space-sm text-outline font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1">
                     <span class="material-symbols-outlined text-[14px]">schedule</span> 1-2 Hari Kerja
                  </div>
               </div>
               <!-- Step 2 -->
               <div
                  class="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col justify-between relative group hover:bg-surface-container-low transition-colors">
                  <div>
                     <div class="flex items-center justify-between mb-space-md">
                        <span
                           class="font-headline-lg text-headline-lg text-tertiary-container font-light opacity-50">02</span>
                        <div
                           class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                           <span class="material-symbols-outlined text-[20px]">draw</span>
                        </div>
                     </div>
                     <h3 class="font-title-lg text-title-lg text-primary mb-2">Sketsa Pola &amp; Persetujuan Desain</h3>
                     <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
                        Pembuatan visualisasi digital (mockup), penetapan filosofi corak, serta sampling warna soga
                        fisik
                        sebelum proses pengerjaan massal dimulai.
                     </p>
                  </div>
                  <div
                     class="mt-space-md pt-space-sm text-outline font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1">
                     <span class="material-symbols-outlined text-[14px]">schedule</span> 3-5 Hari Kerja
                  </div>
               </div>
               <!-- Step 3 -->
               <div
                  class="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col justify-between relative group hover:bg-surface-container-low transition-colors">
                  <div>
                     <div class="flex items-center justify-between mb-space-md">
                        <span
                           class="font-headline-lg text-headline-lg text-tertiary-container font-light opacity-50">03</span>
                        <div
                           class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                           <span class="material-symbols-outlined text-[20px]">brush</span>
                        </div>
                     </div>
                     <h3 class="font-title-lg text-title-lg text-primary mb-2">Proses Canting &amp; Celup Tradisional
                     </h3>
                     <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
                        Pengerjaan tangan oleh maestro pengrajin: pencantingan malam panas, pewarnaan rendam soga alam
                        berlapis, dan proses pelorotan ramah lingkungan.
                     </p>
                  </div>
                  <div
                     class="mt-space-md pt-space-sm text-outline font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1">
                     <span class="material-symbols-outlined text-[14px]">schedule</span> 14 - 60 Hari
                  </div>
               </div>
               <!-- Step 4 -->
               <div
                  class="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col justify-between relative group hover:bg-surface-container-low transition-colors">
                  <div>
                     <div class="flex items-center justify-between mb-space-md">
                        <span
                           class="font-headline-lg text-headline-lg text-tertiary-container font-light opacity-50">04</span>
                        <div
                           class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                           <span class="material-symbols-outlined text-[20px]">verified_user</span>
                        </div>
                     </div>
                     <h3 class="font-title-lg text-title-lg text-primary mb-2">Kontrol Mutu &amp; Pengiriman Khusus</h3>
                     <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
                        Pemeriksaan jahitan dan kepekatan corak secara teliti, penerbitan sertifikat keaslian wastra
                        berhologram, serta pengemasan boks kayu eksklusif.
                     </p>
                  </div>
                  <div
                     class="mt-space-md pt-space-sm text-outline font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1">
                     <span class="material-symbols-outlined text-[14px]">schedule</span> 2-3 Hari Pengiriman
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="segment-value w-full bg-surface-container py-space-2xl">
         <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
               <div class="lg:col-span-5 flex flex-col gap-space-md">
                  <span class="font-label-sm text-label-sm uppercase tracking-widest text-outline">Kemitraan
                     Terpercaya</span>
                  <h2 class="font-headline-lg text-headline-lg text-primary tracking-tight">
                     Mengapa Memilih Layanan Batik Nusantara Heritage?
                  </h2>
                  <p class="font-body-md text-body-md text-secondary leading-relaxed">
                     Kami memadukan integritas teknik leluhur dengan tata kelola manajemen proyek modern, menghadirkan
                     produk
                     wastra tanpa kompromi kualitas untuk setiap level kebutuhan.
                  </p>
                  <div class="flex flex-col gap-space-sm mt-space-sm">
                     <div class="flex items-center gap-space-sm">
                        <span class="material-symbols-outlined text-tertiary-container text-[20px]">check_box</span>
                        <span class="font-title-md text-title-md text-primary">Standarisasi Laboratorium Pengujian
                           Kain</span>
                     </div>
                     <div class="flex items-center gap-space-sm">
                        <span class="material-symbols-outlined text-tertiary-container text-[20px]">check_box</span>
                        <span class="font-title-md text-title-md text-primary">Transparansi Asal-Usul (Traceable
                           Provenance)</span>
                     </div>
                     <div class="flex items-center gap-space-sm">
                        <span class="material-symbols-outlined text-tertiary-container text-[20px]">check_box</span>
                        <span class="font-title-md text-title-md text-primary">Kapasitas Produksi Massal Skala
                           Korporasi</span>
                     </div>
                  </div>
               </div>
               <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <!-- Pillar 1 -->
                  <div class="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col gap-space-sm">
                     <div
                        class="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-2">
                        <span class="material-symbols-outlined text-[24px]">verified</span>
                     </div>
                     <h3 class="font-headline-sm text-headline-sm text-primary">100% Autentisitas Terjamin</h3>
                     <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
                        Bukan batik printing artifisial. Seluruh koleksi kain diproses melalui rintangan lilin malam
                        orisinal
                        oleh pembatik terdaftar di sentra kriya Jawa.
                     </p>
                  </div>
                  <!-- Pillar 2 -->
                  <div class="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col gap-space-sm">
                     <div
                        class="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-2">
                        <span class="material-symbols-outlined text-[24px]">tune</span>
                     </div>
                     <h3 class="font-headline-sm text-headline-sm text-primary">Fleksibilitas Kustomisasi</h3>
                     <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
                        Mulai dari satu helai busana adibusana pribadi hingga pengadaan 5.000 potong seragam dinas
                        kenegaraan
                        dengan konsistensi mutu yang seragam.
                     </p>
                  </div>
                  <!-- Pillar 3 -->
                  <div class="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col gap-space-sm">
                     <div
                        class="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-2">
                        <span class="material-symbols-outlined text-[24px]">eco</span>
                     </div>
                     <h3 class="font-headline-sm text-headline-sm text-primary">Pewarna Ramah Lingkungan</h3>
                     <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
                        Pemanfaatan soga tingi, jolawe, tegeran, dan indigofera murni yang tidak mencemari lingkungan
                        sekaligus menjaga kelembutan kain di kulit sensitif.
                     </p>
                  </div>
                  <!-- Pillar 4 -->
                  <div class="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col gap-space-sm">
                     <div
                        class="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-2">
                        <span class="material-symbols-outlined text-[24px]">handshake</span>
                     </div>
                     <h3 class="font-headline-sm text-headline-sm text-primary">Etika Perdagangan Berkelanjutan</h3>
                     <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
                        Skema fair-wage yang memastikan kesejahteraan maestro pengrajin perempuan di desa binaan
                        Yogyakarta,
                        Surakarta, dan pesisir Cirebon.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="segment-cta w-full bg-primary-container text-surface-bright py-space-2xl relative overflow-hidden">
         <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin relative z-10">
            <div
               class="bg-primary/60 backdrop-blur-md p-space-xl md:p-space-2xl rounded-xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-space-xl">
               <div class="flex flex-col gap-space-md max-w-xl text-center lg:text-left">
                  <div
                     class="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-lowest/10 self-center lg:self-start text-surface-bright font-label-sm text-label-sm uppercase tracking-widest">
                     <span class="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
                     Reservasi &amp; Konsultasi Kemitraan
                  </div>
                  <h2
                     class="font-headline-lg text-headline-lg md:text-display-xl text-surface-bright tracking-tight leading-tight">
                     Butuh Produk atau Layanan Batik Khusus?
                  </h2>
                  <p class="font-body-lg text-body-lg text-outline-variant leading-relaxed">
                     Diskusikan kebutuhan seragam korporat, busana adibusana pribadi, maupun cinderamata kenegaraan
                     bersama
                     tim kurator dan desainer Batik Nusantara Heritage.
                  </p>
                  <!-- Quick contact tags -->
                  <div class="flex flex-wrap items-center justify-center lg:justify-start gap-space-sm pt-2">
                     <span
                        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest/5 text-surface-container font-label-sm text-label-sm">
                        <span class="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">verified</span>
                        Respon Cepat WhatsApp (&lt; 15 menit)
                     </span>
                     <span
                        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest/5 text-surface-container font-label-sm text-label-sm">
                        <span class="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">event</span>
                        Kunjungan Private Showroom Yogyakarta
                     </span>
                  </div>
               </div>
               <div class="flex flex-col sm:flex-row lg:flex-col gap-space-md w-full lg:w-auto min-w-[280px]">
                  <a class="flex items-center justify-center gap-space-sm bg-surface-bright text-primary font-label-lg text-label-lg px-space-xl py-4 rounded-lg hover:bg-surface-container-highest transition-colors duration-200 text-center font-bold"
                     href="contact" rel="noopener noreferrer">
                     <span class="material-symbols-outlined text-[20px]">chat</span>
                     <span>Konsultasi Sekarang</span>
                  </a>
                  <button
                     class="flex items-center justify-center gap-space-sm bg-transparent border-0 text-surface-bright font-label-lg text-label-lg px-space-xl py-4 rounded-lg hover:bg-surface-container-lowest/10 transition-colors duration-200 text-center"
                     onclick="triggerPdfDownload()" type="button">
                     <span class="material-symbols-outlined text-[20px]">download</span>
                     <span>Unduh Panduan Layanan (PDF)</span>
                  </button>
               </div>
            </div>
         </div>
      </div>

      <div
         class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm transition-opacity"
         id="service-modal">
         <div
            class="bg-surface-container-lowest w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[921px] animate-in fade-in zoom-in-95 duration-200">
            <!-- Modal Header -->
            <div class="p-space-lg bg-surface-container flex items-center justify-between">
               <div>
                  <span class="font-label-sm text-label-sm uppercase tracking-widest text-outline"
                     id="modal-category">Kategori Layanan</span>
                  <h3 class="font-headline-sm text-headline-sm text-primary mt-1" id="modal-title">Detail Layanan</h3>
               </div>
               <button aria-label="Tutup Detail"
                  class="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center text-primary hover:bg-primary hover:text-surface-bright transition-colors"
                  onclick="closeDetailModal()" type="button">
                  <span class="material-symbols-outlined text-[20px]">close</span>
               </button>
            </div>
            <!-- Modal Body -->
            <div class="p-space-lg overflow-y-auto space-y-space-md">
               <div>
                  <h4 class="font-title-md text-title-md text-primary mb-1">Deskripsi Lengkap</h4>
                  <p class="font-body-md text-body-md text-secondary leading-relaxed" id="modal-description">
                     Deskripsi rincian layanan batik.
                  </p>
               </div>
               <div class="bg-surface-container-low p-space-md rounded-lg space-y-2">
                  <h4 class="font-title-md text-title-md text-primary">Spesifikasi Standar</h4>
                  <div class="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant" id="modal-specs">
                     <!-- Dynamic items populated by JS -->
                  </div>
               </div>
               <div>
                  <h4 class="font-title-md text-title-md text-primary mb-1">Waktu Pengerjaan &amp; Minimum Pemesanan
                  </h4>
                  <p class="font-body-sm text-body-sm text-secondary" id="modal-timeline">
                     Estimasi waktu dan minimum pemesanan.
                  </p>
               </div>
            </div>
            <!-- Modal Footer -->
            <div class="p-space-md bg-surface-container flex items-center justify-end gap-space-sm">
               <button
                  class="px-space-md py-2 text-primary font-label-md text-label-md hover:text-secondary transition-colors"
                  onclick="closeDetailModal()" type="button">
                  Tutup
               </button>
               <a class="inline-flex items-center gap-2 bg-primary text-surface-bright font-label-md text-label-md px-space-lg py-2.5 rounded-lg hover:bg-tertiary-container transition-colors"
                  href="#" id="modal-wa-link" target="_blank">
                  <span class="material-symbols-outlined text-[18px]">chat</span>
                  <span>Konsultasi Produk Ini</span>
               </a>
            </div>
         </div>
      </div>
   </div>
</template>