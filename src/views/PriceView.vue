<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'


</script>

<template>
   <div class="flex flex-col w-full">

      <div class="segment-main w-full bg-surface-container-low/70 py-space-xl px-margin-mobile md:px-margin">
         <div class="max-w-[1320px] mx-auto flex flex-col gap-space-lg">
            <!-- Editorial Title & Manifest Narrative -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
               <div class="lg:col-span-8 flex flex-col gap-space-sm">
                  <span
                     class="font-label-md text-label-md uppercase tracking-[0.2em] text-on-tertiary-container font-semibold">Panduan
                     Investasi &amp; Harga Karya</span>
                  <h1
                     class="font-headline-lg text-headline-lg md:text-display-xl font-normal text-primary tracking-tight leading-tight">
                     Katalog &amp; Transparansi Nilai Wastra
                  </h1>
                  <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mt- space-xs">
                     Setiap helai kain dan busana Batik Nusantara mencerminkan dedikasi waktu, kemurnian bahan alami,
                     serta
                     keterampilan tangan maestro pembatik Nusantara. Berikut panduan estimasi nilai karya untuk koleksi
                     reguler, adibusana, maupun pesanan kustom.
                  </p>
               </div>
               <!-- Trust Badges Block (Asymmetric Placement) -->
               <div class="lg:col-span-4 flex flex-col gap-space-sm bg-surface p-space-md rounded-lg shadow-sm">
                  <div class="flex items-center gap-space-sm">
                     <span class="material-symbols-outlined text-primary text-[20px]">spa</span>
                     <span class="font-label-md text-label-md text-primary font-semibold">100% Pewarna Alami &amp; Serat
                        Murni</span>
                  </div>
                  <div class="flex items-center gap-space-sm">
                     <span class="material-symbols-outlined text-primary text-[20px]">fact_check</span>
                     <span class="font-label-md text-label-md text-primary font-semibold">Transparansi Rincian Biaya
                        Pengrajin</span>
                  </div>
                  <div class="flex items-center gap-space-sm">
                     <span class="material-symbols-outlined text-primary text-[20px]">verified</span>
                     <span class="font-label-md text-label-md text-primary font-semibold">Garansi Autentisitas &amp;
                        Sertifikat Motif</span>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="segment-category-opt w-full bg-surface-container-lowest sticky top-20 z-30 shadow-sm">
         <div
            class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin py-space-sm flex items-center justify-between overflow-x-auto no-scrollbar gap-space-md">
            <div class="flex items-center gap-space-xs shrink-0" id="filter-tabs">
               <button
                  class="category-btn px-space-md py- space-xs rounded-full font-label-md text-label-md uppercase tracking-wider bg-surface-container-low text-secondary hover:text-primary transition-all"
                  data-target="kain" type="button">
                  Kain Batik Lembaran
               </button>
               <button
                  class="category-btn px-space-md py- space-xs rounded-full font-label-md text-label-md uppercase tracking-wider bg-surface-container-low text-secondary hover:text-primary transition-all"
                  data-target="busana" type="button">
                  Produk Busana &amp; Aksesori
               </button>
               <button
                  class="category-btn px-space-md py- space-xs rounded-full font-label-md text-label-md uppercase tracking-wider bg-surface-container-low text-secondary hover:text-primary transition-all"
                  data-target="custom" type="button">
                  Jasa Custom &amp; Bespoke
               </button>
            </div>
            <div
               class="hidden md:flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest shrink-0">
               <span class="w-2 h-2 rounded-full bg-primary inline-block"></span>
               <span>Harga Resmi Atelier 2026</span>
            </div>
         </div>
      </div>

      <div class="catalog-section w-full py-space-2xl px-margin-mobile md:px-margin bg-surface" id="section-kain">
         <div class="max-w-[1320px] mx-auto flex flex-col gap-space-xl">
            <!-- Section Header -->
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
               <div class="flex flex-col gap-space-xs">
                  <span
                     class="font-label-sm text-label-sm uppercase tracking-[0.25em] text-on-tertiary-container font-semibold">Kategori
                     01</span>
                  <h2 class="font-headline-lg text-headline-lg font-normal text-primary">Koleksi Lembaran Kain</h2>
                  <p class="font-body-md text-body-md text-secondary max-w-xl">
                     Mahakarya wastra lembaran yang siap dijahit atau dikoleksi sebagai aset warisan, dikerjakan oleh
                     juru
                     gambar dan canting berpengalaman di Surakarta, Yogyakarta, serta pesisir utara Jawa.
                  </p>
               </div>
               <div class="text-right">
                  <span class="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Rentang Nilai
                     Koleksi</span>
                  <p class="font-headline-sm text-headline-sm text-primary">Rp 425.000 — Rp 4.750.000</p>
               </div>
            </div>
            <!-- Editorial Structured Table / Desktop Mosaic -->
            <div class="w-full bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden flex flex-col">
               <!-- Table Head Desktop -->
               <div
                  class="hidden lg:grid grid-cols-12 gap-space-md px-space-lg py-space-md bg-surface-container-low font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                  <div class="col-span-4">Nama Motif &amp; Spesifikasi Wastra</div>
                  <div class="col-span-2">Teknik Pengerjaan</div>
                  <div class="col-span-2">Dimensi &amp; Material Serat</div>
                  <div class="col-span-2 text-right">Status Ketersediaan</div>
                  <div class="col-span-2 text-right">Estimasi Nilai</div>
               </div>
               <!-- Table Row 1: Parang Barong -->
               <div
                  class="grid grid-cols-1 lg:grid-cols-12 gap-space-md p-space-lg items-center hover:bg-surface-container-low/50 transition-colors">
                  <div class="lg:col-span-4 flex items-center gap-space-md">
                     <div
                        class="w-20 h-24 rounded bg-surface-container-high shrink-0 overflow-hidden relative shadow-sm">
                        <img class="w-full h-full object-cover"
                           data-alt="Close up archival macro detail of silk batik cloth with intricate traditional Parang Barong motif in deep soga brown, cream, and midnight black vegetal dye tones, crisp wax resist canting linework, natural organic texture."
                           src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWgw4uMQNEsfg8r5AfB5dGXYbWJXIlu_nDP9uU11JYcrukjSl8-8LYvdRLR6MBoCIQeXDMDDRSueyhQdoQLJLqXAK5EVMby7H0RNxyUzBG_5J20cL4KklVZsXQVDeGlLTHlnN2myQdXRMDb8qP_qYqAlzEaPYCxnceUHgNWVPm4FT2DX46pJhkYrvy2kbtUHoldEZnXEAEy_O0ny8t58lm5M990rqMuOJyPfeM3UTCuQ7poTHywlQ" />
                     </div>
                     <div class="flex flex-col gap-space-xs">
                        <span
                           class="font-label-sm text-label-sm tracking-wider text-on-tertiary-container uppercase font-semibold">Koleksi
                           Aditama</span>
                        <h3 class="font-title-lg text-title-lg text-primary">Kain Tulis Halus Sutra ATBM Parang Barong
                        </h3>
                        <p class="font-body-sm text-body-sm text-secondary line-clamp-1">Pewarna alami kayu Tingi &amp;
                           Soga
                           Jawa, canting tembus bolak-balik sempurna.</p>
                     </div>
                  </div>
                  <div class="lg:col-span-2 flex flex-col">
                     <span class="lg:hidden font-label-sm text-label-sm text-secondary uppercase">Teknik:</span>
                     <span class="font-body-md text-body-md text-primary font-medium">Batik Tulis Halus</span>
                     <span class="font-label-sm text-label-sm text-secondary">Canting Tembus 2 Sisi</span>
                  </div>
                  <div class="lg:col-span-2 flex flex-col">
                     <span class="lg:hidden font-label-sm text-label-sm text-secondary uppercase">Dimensi &amp;
                        Bahan:</span>
                     <span class="font-body-md text-body-md text-primary">2.60 m × 1.15 m</span>
                     <span class="font-body-sm text-body-sm text-secondary">Sutra ATBM Super 56</span>
                  </div>
                  <div class="lg:col-span-2 flex lg:flex-col lg:items-end justify-between items-center">
                     <span class="lg:hidden font-label-sm text-label-sm text-secondary uppercase">Status:</span>
                     <span
                        class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                        <span class="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                        Siap Kirim
                     </span>
                     <span class="font-label-sm text-label-sm text-secondary mt-1">Koleksi Maestro (1 pc)</span>
                  </div>
                  <div class="lg:col-span-2 flex lg:flex-col lg:items-end justify-between items-center gap-space-xs">
                     <div class="text-right">
                        <span class="font-title-lg text-title-lg text-primary font-semibold">Rp 4.750.000</span>
                        <span class="block font-label-sm text-label-sm text-secondary">Termasuk Sertifikat</span>
                     </div>
                     <a class="inline-flex items-center justify-center px-space-md py-space-xs bg-primary text-on-primary rounded font-label-md text-label-md uppercase tracking-wider hover:bg-tertiary-container transition-colors"
                        data-path="contact" href="#">
                        Pesan Sekarang
                     </a>
                  </div>
               </div>
               <div class="h-px w-full bg-surface-container"></div>
               <!-- Table Row 2: Babaran Madura / Lasem -->
               <div
                  class="grid grid-cols-1 lg:grid-cols-12 gap-space-md p-space-lg items-center hover:bg-surface-container-low/50 transition-colors">
                  <div class="lg:col-span-4 flex items-center gap-space-md">
                     <div
                        class="w-20 h-24 rounded bg-surface-container-high shrink-0 overflow-hidden relative shadow-sm">
                        <img class="w-full h-full object-cover"
                           data-alt="Artisanal rolled batik coastal cloth displaying indigofera blue and warm madder root terracotta flora patterns from Lasem Madura heritage workshop on unbleached cotton."
                           src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMIfciD5kuVohFqvxdqbkoTYa2DqQIwmFbfsGbKbLNR_ZjIeDnFr-_vatTHaDSPj8agKzMcLsYuGR1f4eNETvY03l6lW1fKKQGqHEF941v1tgOpbV8ak3MkQISvVkQATb7j5OOGsTWr0H77X2hFC6eMciZ_Uy0HTzKHdqDbKPoHrDem_At2nUGiCu_h22PGLBqi3331ZaGGhuXDtq2PZTDOcx-FKrJ23fjUC9lEkWFtZDEKOs2V40" />
                     </div>
                     <div class="flex flex-col gap-space-xs">
                        <span
                           class="font-label-sm text-label-sm tracking-wider text-secondary uppercase font-semibold">Pesisir
                           Heritage</span>
                        <h3 class="font-title-lg text-title-lg text-primary">Kain Tulis Pesisiran Babaran Madura / Lasem
                        </h3>
                        <p class="font-body-sm text-body-sm text-secondary line-clamp-1">Kombinasi celupan ekstrak
                           Indigofera
                           &amp; kulit manggis khas pesisir utara.</p>
                     </div>
                  </div>
                  <div class="lg:col-span-2 flex flex-col">
                     <span class="lg:hidden font-label-sm text-label-sm text-secondary uppercase">Teknik:</span>
                     <span class="font-body-md text-body-md text-primary font-medium">Tulis Tangan Coletan</span>
                     <span class="font-label-sm text-label-sm text-secondary">Multi-celup 4 Babaran</span>
                  </div>
                  <div class="lg:col-span-2 flex flex-col">
                     <span class="lg:hidden font-label-sm text-label-sm text-secondary uppercase">Dimensi &amp;
                        Bahan:</span>
                     <span class="font-body-md text-body-md text-primary">2.50 m × 1.15 m</span>
                     <span class="font-body-sm text-body-sm text-secondary">Katun Primissima Cap Sen</span>
                  </div>
                  <div class="lg:col-span-2 flex lg:flex-col lg:items-end justify-between items-center">
                     <span class="lg:hidden font-label-sm text-label-sm text-secondary uppercase">Status:</span>
                     <span
                        class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                        <span class="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                        Tersedia Terbatas
                     </span>
                     <span class="font-label-sm text-label-sm text-secondary mt-1">Sisa 3 Lembar</span>
                  </div>
                  <div class="lg:col-span-2 flex lg:flex-col lg:items-end justify-between items-center gap-space-xs">
                     <div class="text-right">
                        <span class="font-title-lg text-title-lg text-primary font-semibold">Rp 2.850.000</span>
                        <span class="block font-label-sm text-label-sm text-secondary">Per Helai Kain</span>
                     </div>
                     <a class="inline-flex items-center justify-center px-space-md py-space-xs bg-primary text-on-primary rounded font-label-md text-label-md uppercase tracking-wider hover:bg-tertiary-container transition-colors"
                        data-path="contact" href="#">
                        Pesan Sekarang
                     </a>
                  </div>
               </div>
               <div class="h-px w-full bg-surface-container"></div>
               <!-- Table Row 3: Cap Kombinasi Kawung -->
               <div
                  class="grid grid-cols-1 lg:grid-cols-12 gap-space-md p-space-lg items-center hover:bg-surface-container-low/50 transition-colors">
                  <div class="lg:col-span-4 flex items-center gap-space-md">
                     <div
                        class="w-20 h-24 rounded bg-surface-container-high shrink-0 overflow-hidden relative shadow-sm">
                        <img class="w-full h-full object-cover"
                           data-alt="Neatly stacked warm brown and cream Kawung motif cloth on workshop wooden counter, natural soga dye finish, fine cracked wax texture."
                           src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvRGXB81cIu71KRMH4rp-OuZGpBIAJV2lDHpkB7qJDk420gvGknbHforo1xqMIM5rJdO2U2znHWGmwpf5d3cmk5CmE12SjonfGm9h_JR5zETeGFcwTVNDK-1utC6xT1Zeo4hUoxarNsBOYTqw4P5TEe_IJzp8WZVGC6cQn07nUzxod25e4ifS01fG3LX5Ico1z_A6ZCR7NYWVdvbd0kDnJjQw7iO1hLtbpEMG0skEGujSAAgdqZUA" />
                     </div>
                     <div class="flex flex-col gap-space-xs">
                        <span
                           class="font-label-sm text-label-sm tracking-wider text-secondary uppercase font-semibold">Klasik
                           Keraton</span>
                        <h3 class="font-title-lg text-title-lg text-primary">Kain Cap Kombinasi Tulis Klasik Kawung</h3>
                        <p class="font-body-sm text-body-sm text-secondary line-clamp-1">Cap tembaga presisi tinggi
                           diperkaya
                           isen-isen canting tulis manual.</p>
                     </div>
                  </div>
                  <div class="lg:col-span-2 flex flex-col">
                     <span class="lg:hidden font-label-sm text-label-sm text-secondary uppercase">Teknik:</span>
                     <span class="font-body-md text-body-md text-primary font-medium">Cap Tembaga + Tulis</span>
                     <span class="font-label-sm text-label-sm text-secondary">Pewarna Alami Mahoni</span>
                  </div>
                  <div class="lg:col-span-2 flex flex-col">
                     <span class="lg:hidden font-label-sm text-label-sm text-secondary uppercase">Dimensi &amp;
                        Bahan:</span>
                     <span class="font-body-md text-body-md text-primary">2.25 m × 1.10 m</span>
                     <span class="font-body-sm text-body-sm text-secondary">Katun Primissima Primis</span>
                  </div>
                  <div class="lg:col-span-2 flex lg:flex-col lg:items-end justify-between items-center">
                     <span class="lg:hidden font-label-sm text-label-sm text-secondary uppercase">Status:</span>
                     <span
                        class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                        <span class="w-1.5 h-1.5 rounded-full bg-secondary inline-block"></span>
                        Stok Reguler
                     </span>
                     <span class="font-label-sm text-label-sm text-secondary mt-1">Siap Kirim (12 pcs)</span>
                  </div>
                  <div class="lg:col-span-2 flex lg:flex-col lg:items-end justify-between items-center gap-space-xs">
                     <div class="text-right">
                        <span class="font-title-lg text-title-lg text-primary font-semibold">Rp 950.000</span>
                        <span class="block font-label-sm text-label-sm text-secondary">Harga Standar</span>
                     </div>
                     <a class="inline-flex items-center justify-center px-space-md py-space-xs bg-primary text-on-primary rounded font-label-md text-label-md uppercase tracking-wider hover:bg-tertiary-container transition-colors"
                        data-path="contact" href="#">
                        Pesan Sekarang
                     </a>
                  </div>
               </div>
               <div class="h-px w-full bg-surface-container"></div>
               <!-- Table Row 4: Cap Geometris Kontemporer -->
               <div
                  class="grid grid-cols-1 lg:grid-cols-12 gap-space-md p-space-lg items-center hover:bg-surface-container-low/50 transition-colors">
                  <div class="lg:col-span-4 flex items-center gap-space-md">
                     <div
                        class="w-20 h-24 rounded bg-surface-container-high shrink-0 overflow-hidden relative shadow-sm">
                        <img class="w-full h-full object-cover"
                           data-alt="Modern architectural geometric batik pattern folded neatly, subtle tone on tone earth hues, sharp stamped clean angles on textured dobby cotton."
                           src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqVg4H_KHxCP4DjDXhLDuQWx6e0JevOlgZ06fHubHdk9cgsFtiRbmvcl0s6rVG474O0E23eOAFf6k8QBd74fpgy3BdLK42nAK4IJv6tKZiriNkGD7PTTrugKv-GI7GTlQuDl2fd5k2hsFrRAk2IsdMG9Uf8fhvYZ3FLaYRIfh-So3QCn_t6H323KlPNXpZsEsfwki4-6S-lXF8l3AM-UFqR1je8sXRw544tgtF-jZ8melpYnuo1pU" />
                     </div>
                     <div class="flex flex-col gap-space-xs">
                        <span
                           class="font-label-sm text-label-sm tracking-wider text-secondary uppercase font-semibold">Kontemporer
                           &amp; Seragam</span>
                        <h3 class="font-title-lg text-title-lg text-primary">Kain Cap Halus Motif Geometris Kontemporer
                        </h3>
                        <p class="font-body-sm text-body-sm text-secondary line-clamp-1">Dibuat khusus untuk kebutuhan
                           pakaian
                           kerja modern, tahan cuci mesin lembut.</p>
                     </div>
                  </div>
                  <div class="lg:col-span-2 flex flex-col">
                     <span class="lg:hidden font-label-sm text-label-sm text-secondary uppercase">Teknik:</span>
                     <span class="font-body-md text-body-md text-primary font-medium">Batik Cap Murni</span>
                     <span class="font-label-sm text-label-sm text-secondary">Standar Oeko-Tex Bebas Logam</span>
                  </div>
                  <div class="lg:col-span-2 flex flex-col">
                     <span class="lg:hidden font-label-sm text-label-sm text-secondary uppercase">Dimensi &amp;
                        Bahan:</span>
                     <span class="font-body-md text-body-md text-primary">2.20 m × 1.15 m</span>
                     <span class="font-body-sm text-body-sm text-secondary">Katun Dobby Bertekstur</span>
                  </div>
                  <div class="lg:col-span-2 flex lg:flex-col lg:items-end justify-between items-center">
                     <span class="lg:hidden font-label-sm text-label-sm text-secondary uppercase">Status:</span>
                     <span
                        class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-semibold">
                        <span class="w-1.5 h-1.5 rounded-full bg-secondary inline-block"></span>
                        Produksi Kontinu
                     </span>
                     <span class="font-label-sm text-label-sm text-secondary mt-1">Menerima Seragam</span>
                  </div>
                  <div class="lg:col-span-2 flex lg:flex-col lg:items-end justify-between items-center gap-space-xs">
                     <div class="text-right">
                        <span class="font-title-lg text-title-lg text-primary font-semibold">Rp 425.000</span>
                        <span class="block font-label-sm text-label-sm text-secondary">Diskon Partai 20+</span>
                     </div>
                     <a class="inline-flex items-center justify-center px-space-md py-space-xs bg-primary text-on-primary rounded font-label-md text-label-md uppercase tracking-wider hover:bg-tertiary-container transition-colors"
                        data-path="contact" href="#">
                        Pesan Sekarang
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="catalog-section w-full py-space-2xl px-margin-mobile md:px-margin bg-surface-container-low"
         id="section-busana">
         <div class="max-w-[1320px] mx-auto flex flex-col gap-space-xl">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
               <div class="flex flex-col gap-space-xs">
                  <span
                     class="font-label-sm text-label-sm uppercase tracking-[0.25em] text-on-tertiary-container font-semibold">Kategori
                     02</span>
                  <h2 class="font-headline-lg text-headline-lg font-normal text-primary">Busana Siap Pakai &amp;
                     Perlengkapan</h2>
                  <p class="font-body-md text-body-md text-secondary max-w-xl">
                     Integrasi pola motif wastra adiluhung dalam siluet modern, dijahit presisi dengan teknik
                     <em>pattern
                        matching</em> tanpa memutus makna filosofis kain.
                  </p>
               </div>
               <a class="inline-flex items-center gap-space-xs text-primary font-title-md text-title-md hover:text-secondary transition-colors"
                  data-path="galeri" href="#">
                  <span>Lihat Lookbook Galeri Busana</span>
                  <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
               </a>
            </div>
            <!-- 4-Card Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
               <!-- Card 1: Modern Tailored Blazer Sekar Jagad -->
               <div
                  class="flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                  <div class="w-full aspect-[3/4] bg-surface-container relative overflow-hidden">
                     <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-alt="An Indonesian woman standing in a bright minimalist concrete brutalist courtyard wearing a sharp modern tailored blazer made with muted monochromatic Sekar Jagad batik motif, high-end editorial styling, cinematic lighting."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEJO_Xr7Y6Xt9sQfCCIzHDOw7ps_nrlFm1TAZTkwym5wNeSLcxg7VaW47L0igXtuTkhUimZ7Gr_ppRApDjt99-AymNlj_JC8PIdHfwDkpqvEkFRwBDXq7EKqEgdssnHDwj52Mn53o3UOWafSxiDUzedhAhSIzZGi5-bGLBt0zlWwb8kfO8uAFg9_vAz_X-iUs_RGVm_LZBcYJtR5zqwaqk8S_KCpYsuBZk-Sg_XTOMAq7zmbLlmO4" />
                     <div
                        class="absolute top-3 left-3 bg-surface-bright/95 backdrop-blur-sm px-2.5 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">
                        Koleksi Utama
                     </div>
                  </div>
                  <div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
                     <div class="flex flex-col gap-space-xs">
                        <span class="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Busana Wanita
                           Formal</span>
                        <h3 class="font-title-lg text-title-lg text-primary font-semibold">Modern Tailored Blazer Sekar
                           Jagad
                        </h3>
                        <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                           Blazer semi-formal unlined dengan paduan motif Sekar Jagad monokromatik modern, kancing
                           tanduk
                           kerbau alami, potongan bahu presisi.
                        </p>
                        <div class="mt-2 flex flex-col gap-1 font-label-sm text-label-sm text-secondary">
                           <span><strong>Bahan:</strong> Katun Primissima + Furing Sutra Habutai</span>
                           <span><strong>Ukuran:</strong> S, M, L, XL &amp; Custom Size</span>
                        </div>
                     </div>
                     <div class="flex items-center justify-between pt-space-sm bg-surface-container-lowest">
                        <div class="flex flex-col">
                           <span class="font-label-sm text-label-sm text-secondary">Harga Resmi</span>
                           <span class="font-title-lg text-title-lg text-primary font-semibold">Rp 1.650.000</span>
                        </div>
                        <a class="p-2.5 rounded bg-primary text-on-primary hover:bg-tertiary-container transition-colors"
                           data-path="contact" href="#" title="Pesan Blazer Ini">
                           <span class="material-symbols-outlined text-[20px]">shopping_bag</span>
                        </a>
                     </div>
                  </div>
               </div>
               <!-- Card 2: Gaun Malam Adibusana Sido Asih Samodra -->
               <div
                  class="flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                  <div class="w-full aspect-[3/4] bg-surface-container relative overflow-hidden">
                     <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-alt="High-fashion evening gown drape made from fluid authentic Sido Asih batik silk with deep indigo and terracotta hues, artisanal studio lighting, minimalist luxury Indonesian haute couture."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvh-pNg4iXPSrGZUChvQubAzafgo6eNfXqA31f8uz6kfvxSSJEZ0TBHtVXlByu-lHYUNoxXYpxHYhfDkhKPfmBpzuDG0B5uQnCc3PGoZzvuINyfjtnNYeJKI_SeWNQUb8fw_ySADxMb4Oeq30zvNEa77V4c_Ez-_h-5iZCCF3Rovs46xmLGXurGWFYetVbjtWvmZxgyawI5s-NKmA-TVFtDyjuWob9mZ6XKuk9ETe8-1uMLaE9NZU" />
                     <div
                        class="absolute top-3 left-3 bg-primary text-on-primary px-2.5 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                        Adibusana Couture
                     </div>
                  </div>
                  <div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
                     <div class="flex flex-col gap-space-xs">
                        <span class="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Adibusana Gaun
                           Malam</span>
                        <h3 class="font-title-lg text-title-lg text-primary font-semibold">Gaun Malam Sido Asih Samodra
                        </h3>
                        <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                           Gaun malam potongan asimetris draping mewah, motif Sido Asih pewarna alam, siluet adibusana
                           berpadu
                           keanggunan nusantara kontemporer.
                        </p>
                        <div class="mt-2 flex flex-col gap-1 font-label-sm text-label-sm text-secondary">
                           <span><strong>Bahan:</strong> Sutra Crepe ATBM Halus 100%</span>
                           <span><strong>Ukuran:</strong> Tailor-made (Sesuai Tubuh)</span>
                        </div>
                     </div>
                     <div class="flex items-center justify-between pt-space-sm bg-surface-container-lowest">
                        <div class="flex flex-col">
                           <span class="font-label-sm text-label-sm text-secondary">Mulai Dari</span>
                           <span class="font-title-lg text-title-lg text-primary font-semibold">Rp 5.200.000</span>
                        </div>
                        <a class="p-2.5 rounded bg-primary text-on-primary hover:bg-tertiary-container transition-colors"
                           data-path="contact" href="#" title="Konsultasi Gaun">
                           <span class="material-symbols-outlined text-[20px]">tune</span>
                        </a>
                     </div>
                  </div>
               </div>
               <!-- Card 3: Kemeja Pria Lengan Panjang Pola Sambung -->
               <div
                  class="flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                  <div class="w-full aspect-[3/4] bg-surface-container relative overflow-hidden">
                     <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-alt="A clean front-view look of a men formal long-sleeve batik shirt with precision pattern matching across center placket and pocket, deep charcoal and golden soga tones, hanging on wooden minimalist hanger."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9tYXut889tuw-IFwXmOUvv9pYVwRIXE_aVL8DkbLhGvmidj4kNJ7Q1rOfBtdwtxIuAhHv9dY0lNwJx1t0eqsM-HW11RxuPw-JiOAawBAy292jqZHrboJCB22ZY9P4z3K6uM_5ELT6nvkRKwkIUZie85HMXwQn6dqlHJdnXIo7iCSaC91PJPq278Ug5_lq4SWqeb-TQb0VKxHJ57az4_An8dCtV4cbtUdZADfSd1v0zSvKbA1Gq2Q" />
                     <div
                        class="absolute top-3 left-3 bg-surface-bright/95 backdrop-blur-sm px-2.5 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">
                        Kemeja Presisi
                     </div>
                  </div>
                  <div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
                     <div class="flex flex-col gap-space-xs">
                        <span class="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Busana Pria
                           Klasik</span>
                        <h3 class="font-title-lg text-title-lg text-primary font-semibold">Kemeja Pola Pas Sambung Pria
                        </h3>
                        <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                           Kemeja formal pria dengan teknik potong pola pas sambung presisi tanpa patah antar sambungan
                           saku
                           dan kancing tersembunyi.
                        </p>
                        <div class="mt-2 flex flex-col gap-1 font-label-sm text-label-sm text-secondary">
                           <span><strong>Bahan:</strong> Katun Primissima Breathable</span>
                           <span><strong>Ukuran:</strong> S sampai XXL (Slim/Reguler)</span>
                        </div>
                     </div>
                     <div class="flex items-center justify-between pt-space-sm bg-surface-container-lowest">
                        <div class="flex flex-col">
                           <span class="font-label-sm text-label-sm text-secondary">Harga Resmi</span>
                           <span class="font-title-lg text-title-lg text-primary font-semibold">Rp 875.000</span>
                        </div>
                        <a class="p-2.5 rounded bg-primary text-on-primary hover:bg-tertiary-container transition-colors"
                           data-path="contact" href="#" title="Pesan Kemeja Ini">
                           <span class="material-symbols-outlined text-[20px]">shopping_bag</span>
                        </a>
                     </div>
                  </div>
               </div>
               <!-- Card 4: Set Aksesori Interior Table Runner Truntum -->
               <div
                  class="flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                  <div class="w-full aspect-[3/4] bg-surface-container relative overflow-hidden">
                     <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-alt="A warm wooden dining table dressed with an authentic batik table runner featuring classical Truntum star motifs, styled with ceramic tea sets and linen cushion accents in soft ambient morning light."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQSDuXvYgvW6Pn2BuWyNF7VoQOb0lXrcHV8c2htVl-9QAwFRQew-mYTNnvHWgYUP-G2oR0OgrihqVP4zTNT4DJykffk0J1xLP2vS2HZ7eQy5pLbA9u3PHLyN41CyQ7mg_KUUduRelbBE4kZMAsnNgnB3XsyDaSMMIuUvqJ5B1vf41ZmmEoqK7Fwb9ajGr_p_TxB9rLVuH65Frw3HxmrJHV1Yc55_gK-ML3ew5VCHZ8YT6hsuK9h-k" />
                     <div
                        class="absolute top-3 left-3 bg-surface-bright/95 backdrop-blur-sm px-2.5 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">
                        Interior &amp; Living
                     </div>
                  </div>
                  <div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
                     <div class="flex flex-col gap-space-xs">
                        <span class="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Perlengkapan
                           Ruang</span>
                        <h3 class="font-title-lg text-title-lg text-primary font-semibold">Set Aksesori Interior Truntum
                        </h3>
                        <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                           Set 1 table runner panjang (200x40 cm) beserta 4 sarung bantal sofa (45x45 cm) berbahan tenun
                           katun
                           bertekstur dengan furing linen.
                        </p>
                        <div class="mt-2 flex flex-col gap-1 font-label-sm text-label-sm text-secondary">
                           <span><strong>Bahan:</strong> Tenun Katun Halus &amp; Linen</span>
                           <span><strong>Kelengkapan:</strong> 5 Pcs Lengkap (Runner + 4 Sarung)</span>
                        </div>
                     </div>
                     <div class="flex items-center justify-between pt-space-sm bg-surface-container-lowest">
                        <div class="flex flex-col">
                           <span class="font-label-sm text-label-sm text-secondary">Harga 1 Set</span>
                           <span class="font-title-lg text-title-lg text-primary font-semibold">Rp 1.250.000</span>
                        </div>
                        <a class="p-2.5 rounded bg-primary text-on-primary hover:bg-tertiary-container transition-colors"
                           data-path="contact" href="#" title="Pesan Paket Interior">
                           <span class="material-symbols-outlined text-[20px]">shopping_bag</span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="catalog-section w-full py-space-2xl px-margin-mobile md:px-margin bg-surface" id="section-custom">
         <div class="max-w-[1320px] mx-auto flex flex-col gap-space-xl">
            <div class="flex flex-col gap-space-xs">
               <span
                  class="font-label-sm text-label-sm uppercase tracking-[0.25em] text-on-tertiary-container font-semibold">Kategori
                  03</span>
               <h2 class="font-headline-lg text-headline-lg font-normal text-primary">Layanan Kustomisasi &amp;
                  Konsultasi
               </h2>
               <p class="font-body-md text-body-md text-secondary max-w-2xl">
                  Dari pembuatan adibusana personal, seragam korporasi berskala nasional, hingga penciptaan motif
                  eksklusif
                  bersertifikat HAKI.
               </p>
            </div>
            <!-- Bespoke Services Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
               <!-- Service 1: Bespoke Tailoring Adibusana & Gaun -->
               <div
                  class="p-space-xl bg-surface-container-lowest rounded-lg shadow-sm flex flex-col justify-between gap-space-lg">
                  <div class="flex flex-col gap-space-md">
                     <div class="flex items-start justify-between">
                        <div
                           class="w-12 h-12 rounded bg-surface-container flex items-center justify-center text-primary">
                           <span class="material-symbols-outlined text-[24px]">straighten</span>
                        </div>
                        <span
                           class="font-label-sm text-label-sm uppercase tracking-wider px-2.5 py-1 rounded bg-secondary-container text-on-secondary-fixed font-semibold">Layanan
                           Personal</span>
                     </div>
                     <div class="flex flex-col gap-space-xs">
                        <h3 class="font-headline-sm text-headline-sm text-primary font-normal">Bespoke Tailoring
                           Adibusana
                           &amp; Gaun</h3>
                        <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                           Pembuatan busana tailor-made personal dari lembaran kain pilihan. Termasuk 28 titik
                           pengukuran
                           anatomi tubuh, 2x sesi fitting eksklusif di private atelier kami atau di kediaman Anda, serta
                           penyesuaian jatuhnya siluet personal.
                        </p>
                     </div>
                     <div class="grid grid-cols-2 gap-space-md pt-space-xs font-label-sm text-label-sm">
                        <div class="flex flex-col">
                           <span class="text-secondary uppercase">Waktu Pengerjaan</span>
                           <span class="text-primary font-semibold mt-0.5">14 – 21 Hari Kerja</span>
                        </div>
                        <div class="flex flex-col">
                           <span class="text-secondary uppercase">Sesi Fitting</span>
                           <span class="text-primary font-semibold mt-0.5">2x Termasuk Perbaikan</span>
                        </div>
                     </div>
                  </div>
                  <div class="flex items-center justify-between pt-space-md bg-surface-container-lowest">
                     <div class="flex flex-col">
                        <span class="font-label-sm text-label-sm text-secondary">Estimasi Biaya Jasa Pola &amp;
                           Jahit</span>
                        <span class="font-title-lg text-title-lg text-primary font-semibold">Mulai Rp 1.800.000</span>
                     </div>
                     <a class="px-space-md py-space-xs bg-primary text-on-primary rounded font-label-md text-label-md uppercase tracking-wider hover:bg-tertiary-container transition-colors"
                        data-path="contact" href="#">
                        Jadwalkan Fitting
                     </a>
                  </div>
               </div>
               <!-- Service 2: Riset & Penciptaan Motif Eksklusif (HAKI) -->
               <div
                  class="p-space-xl bg-surface-container-lowest rounded-lg shadow-sm flex flex-col justify-between gap-space-lg">
                  <div class="flex flex-col gap-space-md">
                     <div class="flex items-start justify-between">
                        <div
                           class="w-12 h-12 rounded bg-surface-container flex items-center justify-center text-primary">
                           <span class="material-symbols-outlined text-[24px]">draw</span>
                        </div>
                        <span
                           class="font-label-sm text-label-sm uppercase tracking-wider px-2.5 py-1 rounded bg-secondary-container text-on-secondary-fixed font-semibold">Koleksi
                           Terproteksi</span>
                     </div>
                     <div class="flex flex-col gap-space-xs">
                        <h3 class="font-headline-sm text-headline-sm text-primary font-normal">Riset &amp; Penciptaan
                           Motif
                           Eksklusif (HAKI)</h3>
                        <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                           Desain motif batik baru berfilosofi khusus untuk korporasi, trah keluarga, atau acara
                           kenegaraan.
                           Dilengkapi berkas narasi filosofi, sertifikasi hak cipta HAKI yang terdaftar resmi atas nama
                           pemesan, dan arsip master canting.
                        </p>
                     </div>
                     <div class="grid grid-cols-2 gap-space-md pt-space-xs font-label-sm text-label-sm">
                        <div class="flex flex-col">
                           <span class="text-secondary uppercase">Waktu Pengerjaan</span>
                           <span class="text-primary font-semibold mt-0.5">20 – 30 Hari Kerja</span>
                        </div>
                        <div class="flex flex-col">
                           <span class="text-secondary uppercase">Legalitas Hak Cipta</span>
                           <span class="text-primary font-semibold mt-0.5">Sertifikat HAKI Resmi</span>
                        </div>
                     </div>
                  </div>
                  <div class="flex items-center justify-between pt-space-md bg-surface-container-lowest">
                     <div class="flex flex-col">
                        <span class="font-label-sm text-label-sm text-secondary">Biaya Riset &amp; Desain Master</span>
                        <span class="font-title-lg text-title-lg text-primary font-semibold">Mulai Rp 8.500.000</span>
                     </div>
                     <a class="px-space-md py-space-xs bg-primary text-on-primary rounded font-label-md text-label-md uppercase tracking-wider hover:bg-tertiary-container transition-colors"
                        data-path="contact" href="#">
                        Mulai Diskusi Motif
                     </a>
                  </div>
               </div>
               <!-- Service 3: Pengadaan Seragam Batik Korporat & BUMN -->
               <div
                  class="p-space-xl bg-surface-container-lowest rounded-lg shadow-sm flex flex-col justify-between gap-space-lg">
                  <div class="flex flex-col gap-space-md">
                     <div class="flex items-start justify-between">
                        <div
                           class="w-12 h-12 rounded bg-surface-container flex items-center justify-center text-primary">
                           <span class="material-symbols-outlined text-[24px]">corporate_fare</span>
                        </div>
                        <span
                           class="font-label-sm text-label-sm uppercase tracking-wider px-2.5 py-1 rounded bg-secondary-container text-on-secondary-fixed font-semibold">Partai
                           Korporasi</span>
                     </div>
                     <div class="flex flex-col gap-space-xs">
                        <h3 class="font-headline-sm text-headline-sm text-primary font-normal">Pengadaan Seragam Batik
                           Korporat &amp; BUMN</h3>
                        <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                           Produksi seragam batik skala partai besar (minimal order 50 potong) dengan konsistensi celup
                           warna
                           lab delta E &lt; 0.8, logo watermark halus tersembunyi pada pola kain, serta sampel fisik
                           prototipe
                           gratis sebelum produksi massal.
                        </p>
                     </div>
                     <div class="grid grid-cols-2 gap-space-md pt-space-xs font-label-sm text-label-sm">
                        <div class="flex flex-col">
                           <span class="text-secondary uppercase">Waktu Pengerjaan</span>
                           <span class="text-primary font-semibold mt-0.5">25 – 45 Hari Kerja</span>
                        </div>
                        <div class="flex flex-col">
                           <span class="text-secondary uppercase">Minimum Order (MOQ)</span>
                           <span class="text-primary font-semibold mt-0.5">Mulai 50 Potong</span>
                        </div>
                     </div>
                  </div>
                  <div class="flex items-center justify-between pt-space-md bg-surface-container-lowest">
                     <div class="flex flex-col">
                        <span class="font-label-sm text-label-sm text-secondary">Estimasi Bahan + Jahit Lengkap</span>
                        <span class="font-title-lg text-title-lg text-primary font-semibold">Mulai Rp 285.000 <span
                              class="font-normal text-secondary text-label-sm">/ ptg</span></span>
                     </div>
                     <a class="px-space-md py-space-xs bg-primary text-on-primary rounded font-label-md text-label-md uppercase tracking-wider hover:bg-tertiary-container transition-colors"
                        data-path="contact" href="#">
                        Minta Proposal
                     </a>
                  </div>
               </div>
               <!-- Service 4: Kotak Cinderamata Kayu Jati VIP -->
               <div
                  class="p-space-xl bg-surface-container-lowest rounded-lg shadow-sm flex flex-col justify-between gap-space-lg">
                  <div class="flex flex-col gap-space-md">
                     <div class="flex items-start justify-between">
                        <div
                           class="w-12 h-12 rounded bg-surface-container flex items-center justify-center text-primary">
                           <span class="material-symbols-outlined text-[24px]">inventory_2</span>
                        </div>
                        <span
                           class="font-label-sm text-label-sm uppercase tracking-wider px-2.5 py-1 rounded bg-secondary-container text-on-secondary-fixed font-semibold">Diplomatik
                           &amp; VVIP</span>
                     </div>
                     <div class="flex flex-col gap-space-xs">
                        <h3 class="font-headline-sm text-headline-sm text-primary font-normal">Kotak Cinderamata Kayu
                           Jati VIP
                        </h3>
                        <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                           Pembuatan kemasan bingkisan kenegaraan berbahan kayu jati solid Jepara berukir plat kuningan
                           grafir
                           logo khusus, bantalan beludru sutra, cocok untuk suvenir diplomatik kenegaraan dan tamu
                           kehormatan
                           istana.
                        </p>
                     </div>
                     <div class="grid grid-cols-2 gap-space-md pt-space-xs font-label-sm text-label-sm">
                        <div class="flex flex-col">
                           <span class="text-secondary uppercase">Waktu Pengerjaan</span>
                           <span class="text-primary font-semibold mt-0.5">7 – 14 Hari Kerja</span>
                        </div>
                        <div class="flex flex-col">
                           <span class="text-secondary uppercase">Kustomisasi Plat</span>
                           <span class="text-primary font-semibold mt-0.5">Kuningan Grafir Laser</span>
                        </div>
                     </div>
                  </div>
                  <div class="flex items-center justify-between pt-space-md bg-surface-container-lowest">
                     <div class="flex flex-col">
                        <span class="font-label-sm text-label-sm text-secondary">Kemasan Eksklusif Saja</span>
                        <span class="font-title-lg text-title-lg text-primary font-semibold">Mulai Rp 450.000 <span
                              class="font-normal text-secondary text-label-sm">/ box</span></span>
                     </div>
                     <a class="px-space-md py-space-xs bg-primary text-on-primary rounded font-label-md text-label-md uppercase tracking-wider hover:bg-tertiary-container transition-colors"
                        data-path="contact" href="#">
                        Pesan Kotak VIP
                     </a>
                  </div>
               </div>
            </div>
            <!-- Critical Transparency Notice Alert Container -->
            <div class="w-full bg-secondary-container/50 p-space-lg rounded-lg shadow-sm flex items-start gap-space-md">
               <div
                  class="w-10 h-10 rounded-full bg-surface-container-lowest shrink-0 flex items-center justify-center text-primary mt-0.5">
                  <span class="material-symbols-outlined text-[20px]">info</span>
               </div>
               <div class="flex flex-col gap-1">
                  <span class="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">Catatan
                     Transparansi Nilai Karya</span>
                  <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                     <strong>Catatan Penting:</strong> Harga dapat berubah sesuai jenis bahan, kerumitan canting motif,
                     dimensi ukuran, jumlah pesanan, dan tingkat kustomisasi. Untuk pemesanan dalam jumlah besar (partai
                     korporat) atau adibusana kustom, kami menyediakan skema penawaran resmi (<em>quotation</em>) yang
                     terperinci.
                  </p>
               </div>
            </div>
         </div>
      </div>

      <div class="segment-order w-full py-space-2xl px-margin-mobile md:px-margin bg-surface-container-low">
         <div class="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
            <!-- Left Column Heading & Context -->
            <div class="lg:col-span-4 flex flex-col gap-space-md">
               <span
                  class="font-label-sm text-label-sm uppercase tracking-[0.25em] text-on-tertiary-container font-semibold">Tanya
                  Jawab</span>
               <h2 class="font-headline-lg text-headline-lg font-normal text-primary">Pertanyaan Seputar Harga &amp;
                  Pemesanan</h2>
               <p class="font-body-md text-body-md text-secondary leading-relaxed">
                  Kami menjunjung tinggi kejujuran proses dan transparansi pengrajin. Berikut klarifikasi hal yang
                  paling
                  sering ditanyakan oleh para penikmat wastra kami.
               </p>
               <div class="p-space-md bg-surface rounded-lg mt- space-sm shadow-sm flex flex-col gap-space-xs">
                  <span class="font-title-md text-title-md text-primary">Butuh penawaran resmi tertulis?</span>
                  <p class="font-body-sm text-body-sm text-secondary">
                     Tim konsultan kami siap membuatkan dokumen quotation PDF bertanda tangan resmi untuk instansi
                     maupun
                     perorangan dalam waktu 1x24 jam.
                  </p>
                  <a class="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold underline mt-2"
                     data-path="contact" href="#">
                     Minta Quotation Sekarang →
                  </a>
               </div>
            </div>
            <!-- Right Column Accordion Items -->
            <div class="lg:col-span-8 flex flex-col gap-space-sm" id="faq-container">
               <!-- FAQ 1 -->
               <div class="faq-item bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm">
                  <button
                     class="faq-toggle bg-white hover:border-white w-full p-space-lg flex items-center justify-between text-left hover:bg-surface-container-low/40 transition-colors"
                     type="button">
                     <span class="font-title-lg text-title-lg text-primary pr-4">Bagaimana sistem pembayaran untuk
                        pesanan
                        kustom &amp; bespoke?</span>
                     <span
                        class="material-symbols-outlined text-primary text-[22px] transform transition-transform duration-200">expand_more</span>
                  </button>
                  <div class="faq-content px-space-lg pb-space-lg pt-0 hidden">
                     <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        Untuk pesanan kustom atau penjahitan adibusana, sistem pembayaran dibagi menjadi dua tahap: Uang
                        Muka
                        (DP) sebesar 50% saat kesepakatan desain dan pengukuran selesai, serta pelunasan 50% setelah
                        lolos
                        tahap kontrol mutu (Quality Control) sebelum paket dikirimkan ke alamat Anda.
                     </p>
                  </div>
               </div>
               <!-- FAQ 2 -->
               <div class="faq-item bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm">
                  <button
                     class="faq-toggle bg-white hover:border-white w-full p-space-lg flex items-center justify-between text-left hover:bg-surface-container-low/40 transition-colors"
                     type="button">
                     <span class="font-title-lg text-title-lg text-primary pr-4">Apakah tersedia potongan harga untuk
                        pembelian partai besar?</span>
                     <span
                        class="material-symbols-outlined text-primary text-[22px] transform transition-transform duration-200">expand_more</span>
                  </button>
                  <div class="faq-content px-space-lg pb-space-lg pt-0 hidden">
                     <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        Ya, kami menyediakan jenjang diskon berjenjang untuk pemesanan seragam korporasi, suvenir
                        kementerian,
                        dan instansi: tier 50–99 potong (diskon 10%), tier 100–299 potong (diskon 18%), dan tier 300+
                        potong
                        (diskon spesial hingga 25% berikut gratis master penciptaan motif).
                     </p>
                  </div>
               </div>
               <!-- FAQ 3 -->
               <div class="faq-item bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm">
                  <button
                     class="faq-toggle bg-white hover:border-white w-full p-space-lg flex items-center justify-between text-left hover:bg-surface-container-low/40 transition-colors"
                     type="button">
                     <span class="font-title-lg text-title-lg text-primary pr-4">Apakah setiap kain batik dilengkapi
                        sertifikat keaslian resmi?</span>
                     <span
                        class="material-symbols-outlined text-primary text-[22px] transform transition-transform duration-200">expand_more</span>
                  </button>
                  <div class="faq-content px-space-lg pb-space-lg pt-0 hidden">
                     <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        Setiap helai kain Batik Tulis Asli Batik Nusantara Heritage disertai Sertifikat Kurator Wastra
                        bernomor
                        registrasi arsip. Sertifikat ini memuat identitas pembatik, asal daerah babaran, tanggal selesai
                        pewarnaan, bahan pewarna yang digunakan, serta penjabaran makna filosofis motif.
                     </p>
                  </div>
               </div>
               <!-- FAQ 4 -->
               <div class="faq-item bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm">
                  <button
                     class="faq-toggle bg-white hover:border-white w-full p-space-lg flex items-center justify-between text-left hover:bg-surface-container-low/40 transition-colors"
                     type="button">
                     <span class="font-title-lg text-title-lg text-primary pr-4">Berapa lama estimasi pengiriman untuk
                        koleksi yang siap kirim?</span>
                     <span
                        class="material-symbols-outlined text-primary text-[22px] transform transition-transform duration-200">expand_more</span>
                  </button>
                  <div class="faq-content px-space-lg pb-space-lg pt-0 hidden">
                     <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        Untuk koleksi kain dan busana berstatus "Siap Kirim", pesanan akan diverifikasi dan dikemas
                        dalam
                        hardbox beraroma kayu cendana dalam 24 jam. Pengiriman berkisar 1–3 hari kerja untuk wilayah
                        Jabodetabek dan kota-kota besar di Indonesia dengan layanan ekspedisi berasuransi penuh.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div
         class="w-full bg-primary-container text-on-primary py-space-2xl px-margin-mobile md:px-margin relative overflow-hidden">
         <div class="absolute -right-20 -bottom-20 opacity-5 pointer-events-none text-surface-bright">
            <svg fill="currentColor" height="400" viewbox="0 0 100 100" width="400">
               <circle cx="50" cy="50" fill="none" r="45" stroke="currentColor" stroke-width="2"></circle>
               <path d="M50 5 Q75 50 50 95 Q25 50 50 5" fill="none" stroke="currentColor" stroke-width="2"></path>
               <path d="M5 50 Q50 75 95 50 Q50 25 5 50" fill="none" stroke="currentColor" stroke-width="2"></path>
            </svg>
         </div>
         <div
            class="max-w-[1320px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-space-xl relative z-10">
            <div class="flex flex-col gap-space-sm max-w-2xl text-center lg:text-left">
               <span
                  class="font-label-md text-label-md uppercase tracking-[0.25em] text-on-tertiary-container font-semibold">Konsultasi
                  Pribadi &amp; Pemesanan</span>
               <h2 class="font-headline-lg text-headline-lg font-normal text-surface-bright">
                  Pesan Sekarang &amp; Konsultasikan Kebutuhan Wastra Anda
               </h2>
               <p class="font-body-lg text-body-lg text-outline-variant leading-relaxed">
                  Diskusikan anggaran dan spesifikasi batik yang Anda inginkan bersama tim kurator dan konsultan
                  Larasati.
                  Kami siap menyusunkan penawaran terbaik sesuai kebutuhan Anda.
               </p>
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
</template>