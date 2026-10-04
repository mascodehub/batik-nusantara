<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'


</script>

<template>
  <div class="flex flex-col w-full">

    <div class="segment-main relative w-full bg-surface overflow-hidden">
      <section class="relative w-full bg-surface overflow-hidden py-space-xl md:py-space-2xl">
        <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <!-- Text Column -->
            <div class="lg:col-span-6 flex flex-col justify-center">
              <div class="inline-flex items-center gap-2 mb-space-sm">
                <span class="w-6 h-px bg-on-tertiary-container"></span>
                <span class="font-label-md text-label-md uppercase tracking-[0.2em] text-on-tertiary-container">
                  Batik Nusantara
                </span>
              </div>
              <h1
                class="font-display-xl text-display-xl-mobile md:text-display-xl text-primary leading-tight mb-space-md">
                Warisan Batik, <br class="hidden sm:inline" />
                <span class="italic font-display-xl text-secondary">
                  Dibawa ke Masa Kini
                </span>
              </h1>
              <p class="font-body-lg text-body-md md:text-body-lg text-secondary max-w-xl mb-space-xl leading-relaxed">
                Menjual kain batik berkualitas serta menghadirkan berbagai produk dan layanan berbasis batik untuk
                kebutuhan personal, bisnis, dan berbagai kebutuhan lainnya.
              </p>
              <div class="flex flex-wrap items-center gap-space-md">
                <a class="inline-flex items-center justify-center bg-primary text-surface-bright font-label-lg text-label-lg px-7 py-3.5 rounded-sm hover:bg-tertiary-container transition-colors duration-200"
                  data-path="galeri" href="gallery">
                  Lihat Produk
                </a>
                <a class="inline-flex items-center justify-center bg-transparent text-primary font-label-lg text-label-lg px-7 py-3.5 rounded-sm bg-surface-container-low hover:bg-secondary-container transition-colors duration-200"
                  data-path="contact" href="contact">
                  Hubungi Kami
                </a>
              </div>
              <div
                class="mt-space-2xl pt-space-md flex items-center gap-space-xl bg-surface-container-low/60 p-space-md rounded-sm max-w-lg">
                <div class="flex flex-col">
                  <span class="font-headline-sm text-headline-sm text-primary font-serif">
                    100%
                  </span>
                  <span class="font-label-sm text-label-sm uppercase tracking-wider text-outline">Serat Alami</span>
                </div>
                <div class="w-px h-8 bg-surface-container-highest"></div>
                <div class="flex flex-col">
                  <span class="font-headline-sm text-headline-sm text-primary font-serif">Pewarna</span>
                  <span class="font-label-sm text-label-sm uppercase tracking-wider text-outline">Soga Alam &amp;
                    Nabati</span>
                </div>
                <div class="w-px h-8 bg-surface-container-highest"></div>
                <div class="flex flex-col">
                  <span class="font-headline-sm text-headline-sm text-primary font-serif">Autentik</span>
                  <span class="font-label-sm text-label-sm uppercase tracking-wider text-outline">Karya Tangan
                    Asli</span>
                </div>
              </div>
            </div>
            <!-- Visual Column (Asymmetric layered compositions) -->
            <div class="lg:col-span-6 relative flex flex-col sm:flex-row gap-space-md items-end">
              <div class="relative w-full sm:w-7/12 bg-surface-container-lowest p-2 shadow-sm rounded-sm">
                <div class="relative aspect-[4/5] overflow-hidden bg-surface-container">
                  <img alt="Kain batik tulis motif soga klasik di atas meja kayu artisan"
                    class="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgVh42R4pSUjOkiRNcQoE-kLKxrD35y7iwy-T2W9bDU5jYmvUtRyLYp493jZTrOWBPI1HCozAPHfovbPivvo037L7-TXQdiiQnXL5cCmYPxDmR9QmaNEprVBNlE1WGKUGi-5wQck5AWSlA7Yd7OJX5VGNFsOgwygwXquXzUzED075pyrea85nQq9VFDC09OIhqfzgn3sGAhOHzmGhUEOMPd-J6NpvV1RYTH1_Wwmc4AqLblzEnZNA" />
                </div>
                <div class="py-2.5 px-2 flex justify-between items-center text-secondary">
                  <span class="font-label-sm text-label-sm uppercase tracking-widest text-outline">Kain Tulis
                    Solo</span>
                  <span class="font-label-sm text-label-sm font-serif italic">Est. Tradisi</span>
                </div>
              </div>
              <div
                class="relative w-full sm:w-5/12 -mt-10 sm:mt-0 bg-surface-container-lowest p-2 shadow-sm rounded-sm self-stretch flex flex-col justify-between">
                <div class="relative aspect-[3/4] overflow-hidden bg-surface-container mb-2">
                  <img
                    alt="Model wanita mengenakan blazer batik kontemporer modern dalam ruangan berarsitektur minimalis"
                    class="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkdi3q5ftsSkvixAzMQ0Cu4_9ZnTgsFZ67G7V5em-VRgyQKv9BY2d3TrRvo2RpdcQSrCtwfro8hFGVksFvwtrE2UDkFbLasUOP8XtyB8MzbDT6aQgi8DCMsQ8ihQauFjWUHoKGKfH9OacGwVy_zYomPP7ZGw2lOg2M5PBgqxcuvU85xaF-6P66kVUCmdg5GQKlTyPLJtb16L9n96xiUEpx8RKvTbBJDMmcqzy1zA6ayooi8A_2Kik" />
                </div>
                <div class="p-2 bg-surface-container-low rounded-sm">
                  <span
                    class="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-tertiary-container block mb-1">Koleksi
                    Modern</span>
                  <p class="font-body-sm text-body-sm text-on-surface-variant leading-snug">Adaptasi estetika adiluhung
                    dalam siluet busana kontemporer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="segment-about w-full bg-surface-container-lowest py-space-2xl">
      <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <!-- Left Column: Story & Metrics -->
          <div class="lg:col-span-7 flex flex-col">
            <span
              class="font-label-md text-label-md uppercase tracking-[0.2em] text-on-tertiary-container mb-space-xs">Tentang
              Batik Nusantara</span>
            <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-space-md">
              Harmoni Ketelitian Tangan &amp; Keabadian Nilai Budaya
            </h2>
            <div class="space-y-space-md font-body-md text-body-md text-secondary leading-relaxed mb-space-xl">
              <p>
                Batik Nusantara adalah usaha yang bergerak dalam bidang fashion terutama dalam penyediaan bahan batik,
                tenun dan butik, baik dalam skala kecil maupun dalam partai besar. Batik Nusantara telah ada sejak tahun
                1986, semula hanya menerima pesanan seragam batik untuk kader di Posyandu di Klaten Jawa Tengah tahun
                1986, hingga berkembang sampai dengan sekarang.
              </p>
              <p>
                Kualitas Terbaik dan Inovasi Berkumpul dalam Setiap Pola Batik Kami, Mempersembahkan Koleksi Batik
                Elegan yang Sesuai dengan Gaya Hidup Anda.
              </p>
            </div>
            <!-- Counter Grid -->
            <div class="grid grid-cols-3 gap-space-md pt-space-lg bg-surface-container-low p-space-lg rounded-sm">
              <div class="flex flex-col">
                <span
                  class="font-display-xl text-headline-md md:text-display-xl text-primary leading-none font-serif">15<span
                    class="text-on-tertiary-container font-sans text-headline-sm">+</span></span>
                <span class="font-label-sm text-label-sm text-outline uppercase tracking-wider mt-2">Tahun
                  Pelestarian</span>
              </div>
              <div class="flex flex-col">
                <span
                  class="font-display-xl text-headline-md md:text-display-xl text-primary leading-none font-serif">240<span
                    class="text-on-tertiary-container font-sans text-headline-sm">+</span></span>
                <span class="font-label-sm text-label-sm text-outline uppercase tracking-wider mt-2">Pengrajin
                  Binaan</span>
              </div>
              <div class="flex flex-col">
                <span
                  class="font-display-xl text-headline-md md:text-display-xl text-primary leading-none font-serif">1.200<span
                    class="text-on-tertiary-container font-sans text-headline-sm">+</span></span>
                <span class="font-label-sm text-label-sm text-outline uppercase tracking-wider mt-2">Motif
                  Filosofis</span>
              </div>
            </div>
          </div>
          <!-- Right Column: Framing Visual -->
          <div class="lg:col-span-5 flex flex-col items-center">
            <div class="w-full bg-surface-container-low p-space-md rounded-sm">
              <div class="relative aspect-[3/4] overflow-hidden rounded-sm bg-surface-container">
                <img alt="Potret karya batik kontemporer dalam perpaduan busana formal modern"
                  class="w-full h-full object-cover" src="/main-3.jpeg" />
              </div>
              <div class="mt-space-md flex items-center justify-between">
                <div class="flex flex-col">
                  <span class="font-title-md text-title-md text-primary">Atelier Batik Nusantara</span>
                  <span class="font-body-sm text-body-sm text-outline">Pemberdayaan Wastra Berkelanjutan</span>
                </div>
                <span class="material-symbols-outlined text-secondary text-2xl">verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="segment-goal bg-surface-container-low py-space-2xl">
      <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <div class="text-center max-w-2xl mx-auto mb-space-xl">
          <span
            class="font-label-md text-label-md uppercase tracking-[0.2em] text-on-tertiary-container mb-space-xs block">Komitmen
            Kami</span>
          <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Visi &amp; Misi
            Keberlanjutan</h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          <!-- Visi Card -->
          <div class="lg:col-span-5 bg-surface-container-lowest p-space-xl rounded-sm flex flex-col justify-between">
            <div>
              <div
                class="w-12 h-12 rounded-sm bg-surface-container-high flex items-center justify-center text-primary mb-space-lg">
                <span class="material-symbols-outlined text-2xl">visibility</span>
              </div>
              <span class="font-label-sm text-label-sm uppercase tracking-[0.2em] text-outline block mb-space-xs">Visi
                Utama</span>
              <p class="font-headline-sm text-headline-sm text-primary leading-relaxed font-serif">
                "Optimisme Masa Depan Cerah Untuk Batik Nusantara Dalam Melestarikan Busana Ciri Khas Indonesia Hingga
                Dikenal di seluruh Dunia."
              </p>
            </div>
            <div class="mt-space-xl pt-space-md flex items-center gap-space-sm text-secondary">
              <span class="w-8 h-px bg-outline-variant"></span>
              <span class="font-label-sm text-label-sm tracking-wider uppercase">Fokus Jangka Panjang</span>
            </div>
          </div>
          <!-- Misi Cards Grid -->
          <div class="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <div class="bg-surface-container-lowest p-space-lg rounded-sm flex flex-col justify-start">
              <span
                class="font-display-xl text-headline-md text-on-tertiary-container font-serif mb- space-xs">01</span>
              <h3 class="font-title-md text-title-md text-primary mb-space-xs">Kemurnian Proses Tradisional</h3>
              <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
                Meningkatkan kualitas Batik Nusantara sesuai Standar Batik Indonesia.
              </p>
            </div>
            <div class="bg-surface-container-lowest p-space-lg rounded-sm flex flex-col justify-start">
              <span
                class="font-display-xl text-headline-md text-on-tertiary-container font-serif mb- space-xs">02</span>
              <h3 class="font-title-md text-title-md text-primary mb-space-xs">Ekosistem Pengrajin Berdaya</h3>
              <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
                Meningkatkan keterampilan SDM dalam membatik.
              </p>
            </div>
            <div class="bg-surface-container-lowest p-space-lg rounded-sm flex flex-col justify-start">
              <span
                class="font-display-xl text-headline-md text-on-tertiary-container font-serif mb- space-xs">03</span>
              <h3 class="font-title-md text-title-md text-primary mb-space-xs">Publikasi</h3>
              <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
                Meningkatkan promosi baik regional maupun nasional.
              </p>
            </div>
            <div class="bg-surface-container-lowest p-space-lg rounded-sm flex flex-col justify-start">
              <span
                class="font-display-xl text-headline-md text-on-tertiary-container font-serif mb- space-xs">04</span>
              <h3 class="font-title-md text-title-md text-primary mb-space-xs">Pelayanan Profesional</h3>
              <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
                Meningkatkan pelayanan serta kepercayaan konsumen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="segment-catalog w-full bg-surface py-space-2xl">
      <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div>
            <span
              class="font-label-md text-label-md uppercase tracking-[0.2em] text-on-tertiary-container block mb-space-xs">Katalog
              Utama</span>
            <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Koleksi Terpilih
            </h2>
            <p class="font-body-md text-body-md text-secondary mt-1">Kombinasi nilai seni adiluhung dan desain
              kontemporer.</p>
          </div>
          <a class="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-on-tertiary-container transition-colors"
            data-path="galeri" href="gallery">
            <span>Lihat Semua Koleksi</span>
            <span class="material-symbols-outlined text-lg">arrow_forward</span>
          </a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          <!-- Product 1 -->
          <div
            class="group bg-surface-container-lowest rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:bg-surface-container-low">
            <div class="relative aspect-[3/4] bg-surface-container overflow-hidden">
              <img alt="Kain Batik Tulis Parang Barong bahan sutra ATBM halus pewarnaan soga alam"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgVh42R4pSUjOkiRNcQoE-kLKxrD35y7iwy-T2W9bDU5jYmvUtRyLYp493jZTrOWBPI1HCozAPHfovbPivvo037L7-TXQdiiQnXL5cCmYPxDmR9QmaNEprVBNlE1WGKUGi-5wQck5AWSlA7Yd7OJX5VGNFsOgwygwXquXzUzED075pyrea85nQq9VFDC09OIhqfzgn3sGAhOHzmGhUEOMPd-J6NpvV1RYTH1_Wwmc4AqLblzEnZNA" />
              <span
                class="absolute top-3 left-3 bg-surface-bright/95 text-primary text-label-sm font-label-sm px-2.5 py-1 rounded-sm uppercase tracking-wider">
                Kain Tradisional
              </span>
            </div>
            <div class="p-space-md flex flex-col flex-grow justify-between">
              <div>
                <h3
                  class="font-title-md text-title-md text-primary mb-1 group-hover:text-tertiary-container transition-colors">
                  Batik Tulis Parang Barong
                </h3>
                <p class="font-body-sm text-body-sm text-secondary line-clamp-2 leading-relaxed">
                  Sutra ATBM halus dengan pewarnaan soga alam, pengerjaan tangan 3 bulan penuh ketelitian canting.
                </p>
              </div>
              <div class="mt-space-md pt-space-sm flex items-center justify-between">
                <span class="font-label-md text-label-md text-primary font-semibold">Edisi Terbatas</span>
                <a class="text-primary hover:text-on-tertiary-container inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold uppercase tracking-wider"
                  data-path="galeri" href="#">
                  Lihat Detail <span class="material-symbols-outlined text-sm">north_east</span>
                </a>
              </div>
            </div>
          </div>
          <!-- Product 2 -->
          <div
            class="group bg-surface-container-lowest rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:bg-surface-container-low">
            <div class="relative aspect-[3/4] bg-surface-container overflow-hidden">
              <img alt="Modern Batik Blazer Senopati dengan siluet tailoring kontemporer Sekar Jagad"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkdi3q5ftsSkvixAzMQ0Cu4_9ZnTgsFZ67G7V5em-VRgyQKv9BY2d3TrRvo2RpdcQSrCtwfro8hFGVksFvwtrE2UDkFbLasUOP8XtyB8MzbDT6aQgi8DCMsQ8ihQauFjWUHoKGKfH9OacGwVy_zYomPP7ZGw2lOg2M5PBgqxcuvU85xaF-6P66kVUCmdg5GQKlTyPLJtb16L9n96xiUEpx8RKvTbBJDMmcqzy1zA6ayooi8A_2Kik" />
              <span
                class="absolute top-3 left-3 bg-surface-bright/95 text-primary text-label-sm font-label-sm px-2.5 py-1 rounded-sm uppercase tracking-wider">
                Fashion Ready-to-Wear
              </span>
            </div>
            <div class="p-space-md flex flex-col flex-grow justify-between">
              <div>
                <h3
                  class="font-title-md text-title-md text-primary mb-1 group-hover:text-tertiary-container transition-colors">
                  Modern Blazer Senopati
                </h3>
                <p class="font-body-sm text-body-sm text-secondary line-clamp-2 leading-relaxed">
                  Siluet modern tailoring berpadu motif Sekar Jagad monokrom, nyaman untuk agenda bisnis &amp; formal.
                </p>
              </div>
              <div class="mt-space-md pt-space-sm flex items-center justify-between">
                <span class="font-label-md text-label-md text-primary font-semibold">Tersedia Ukuran S-XL</span>
                <a class="text-primary hover:text-on-tertiary-container inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold uppercase tracking-wider"
                  data-path="galeri" href="#">
                  Lihat Detail <span class="material-symbols-outlined text-sm">north_east</span>
                </a>
              </div>
            </div>
          </div>
          <!-- Product 3 -->
          <div
            class="group bg-surface-container-lowest rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:bg-surface-container-low">
            <div class="relative aspect-[3/4] bg-surface-container overflow-hidden">
              <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="Kain batik cap kontemporer motif Kawung geometris rapi dengan warna natural earth tone di atas alas kayu studio hangat"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDil4u6hAgiuQeK8RW5v3vpZBeg1mIuyemtdZy15LiiyByUfvlTHIK7qhudz9NnB5M857mqi_vGtCpw6rFXYNogRZDtwa5Dd8hA2WdwEsBNofPO3PWx5SDI7d9ol72CPLx8pHX6Y-SNeQI9ylGB_0oQUK-Xy7DTj-o4kVs8ROPERvvl0ecc_o77H1C6RFBmZM1QHwJk81xrw68-6lsj0ud9_sAJBNN-_qklGEaOfZwwMTbEIDetZnU" />
              <span
                class="absolute top-3 left-3 bg-surface-bright/95 text-primary text-label-sm font-label-sm px-2.5 py-1 rounded-sm uppercase tracking-wider">
                Tekstil &amp; Bahan
              </span>
            </div>
            <div class="p-space-md flex flex-col flex-grow justify-between">
              <div>
                <h3
                  class="font-title-md text-title-md text-primary mb-1 group-hover:text-tertiary-container transition-colors">
                  Batik Cap Kontemporer Kawung
                </h3>
                <p class="font-body-sm text-body-sm text-secondary line-clamp-2 leading-relaxed">
                  Katun primissima adem dan jatuh, ideal untuk kemeja formal, gaun santai, maupun aksen interior.
                </p>
              </div>
              <div class="mt-space-md pt-space-sm flex items-center justify-between">
                <span class="font-label-md text-label-md text-primary font-semibold">Per Meter / Potong</span>
                <a class="text-primary hover:text-on-tertiary-container inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold uppercase tracking-wider"
                  data-path="galeri" href="#">
                  Lihat Detail <span class="material-symbols-outlined text-sm">north_east</span>
                </a>
              </div>
            </div>
          </div>
          <!-- Product 4 -->
          <div
            class="group bg-surface-container-lowest rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:bg-surface-container-low">
            <div class="relative aspect-[3/4] bg-surface-container overflow-hidden">
              <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="Set hampers eksklusif berisi selendang sutra batik motif Truntum kemasan kotak kayu jati berukir pita keemasan elegan"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6SMdyf7jfvjf01N1uIy2mgPI39uNRBgYw0mUKXhs42kg8jN4fAx9FWj1LObIULnADsG_WEcOT1yu4V7Gn6IuciQOxGLNhmsSwwUS_MbeGT2lXc0tA604tFXc9tM2RTby7vaGafDzHOYc0Js3AoE2-sA1myIfjY_OMUuSnl_726YVNOnoJJ1WTjHOa2Lv4SwQuX7MDsmmH-trHpaHIBWnI6cYHXQHDFvnGk-p2V7shscfpGHco5Fg" />
              <span
                class="absolute top-3 left-3 bg-surface-bright/95 text-primary text-label-sm font-label-sm px-2.5 py-1 rounded-sm uppercase tracking-wider">
                Aksesori &amp; Gift
              </span>
            </div>
            <div class="p-space-md flex flex-col flex-grow justify-between">
              <div>
                <h3
                  class="font-title-md text-title-md text-primary mb-1 group-hover:text-tertiary-container transition-colors">
                  Hampers &amp; Silk Scarf Truntum
                </h3>
                <p class="font-body-sm text-body-sm text-secondary line-clamp-2 leading-relaxed">
                  Scarf sutra murni eksklusif dengan kotak kayu ukir premium, siap untuk bingkisan korporat
                  kehormatan.
                </p>
              </div>
              <div class="mt-space-md pt-space-sm flex items-center justify-between">
                <span class="font-label-md text-label-md text-primary font-semibold">Paket Kemitraan</span>
                <a class="text-primary hover:text-on-tertiary-container inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold uppercase tracking-wider"
                  data-path="galeri" href="#">
                  Lihat Detail <span class="material-symbols-outlined text-sm">north_east</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="segment-benefit w-full bg-surface-container-lowest py-space-2xl">
      <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <div class="text-center max-w-2xl mx-auto mb-space-xl">
          <span
            class="font-label-md text-label-md uppercase tracking-[0.2em] text-on-tertiary-container mb-space-xs block">Standar
            Keunggulan</span>
          <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Mengapa Memilih
            Batik Nusantara</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          <!-- Feature 1 -->
          <div class="bg-surface-container-low p-space-lg rounded-sm flex flex-col justify-start">
            <div
              class="w-12 h-12 rounded-sm bg-surface-container-highest flex items-center justify-center text-primary mb-space-md">
              <span class="material-symbols-outlined text-2xl">diamond</span>
            </div>
            <h3 class="font-title-md text-title-md text-primary mb-space-xs">Kualitas Produk Teruji</h3>
            <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
              Menggunakan material serat alami katun primissima dan sutra pilihan berdaya tahan puluhan tahun dengan
              perawatan tepat.
            </p>
          </div>
          <!-- Feature 2 -->
          <div class="bg-surface-container-low p-space-lg rounded-sm flex flex-col justify-start">
            <div
              class="w-12 h-12 rounded-sm bg-surface-container-highest flex items-center justify-center text-primary mb-space-md">
              <span class="material-symbols-outlined text-2xl">verified_user</span>
            </div>
            <h3 class="font-title-md text-title-md text-primary mb-space-xs">Batik Autentik Bergaransi</h3>
            <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
              100% batik tulis dan cap asli bersertifikasi keaslian, bukan kain tekstil motif tiruan cetak mesin
              (printing).
            </p>
          </div>
          <!-- Feature 3 -->
          <div class="bg-surface-container-low p-space-lg rounded-sm flex flex-col justify-start">
            <div
              class="w-12 h-12 rounded-sm bg-surface-container-highest flex items-center justify-center text-primary mb-space-md">
              <span class="material-symbols-outlined text-2xl">category</span>
            </div>
            <h3 class="font-title-md text-title-md text-primary mb-space-xs">Varian Produk Beragam</h3>
            <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
              Pilihan lengkap mulai dari lembaran kain kolektor, busana siap pakai, perlengkapan interior hingga
              souvenir korporat resmi.
            </p>
          </div>
          <!-- Feature 4 -->
          <div class="bg-surface-container-low p-space-lg rounded-sm flex flex-col justify-start">
            <div
              class="w-12 h-12 rounded-sm bg-surface-container-highest flex items-center justify-center text-primary mb-space-md">
              <span class="material-symbols-outlined text-2xl">handshake</span>
            </div>
            <h3 class="font-title-md text-title-md text-primary mb-space-xs">Layanan Profesional &amp; Terpercaya</h3>
            <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
              Konsultasi motif filosofis, penyesuaian ukuran (custom tailoring), dan komitmen kepastian jadwal
              pengiriman tepat waktu.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="segment-cta w-full bg-surface-container-lowest py-space-2xl">
      <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <div
          class="bg-secondary-container text-on-secondary-fixed rounded-sm p-space-xl md:p-space-2xl text-center relative overflow-hidden">
          <!-- Subtle Kawung Motif Watermark Pattern -->
          <div class="absolute -right-16 -bottom-16 w-64 h-64 opacity-10 pointer-events-none text-primary">
            <svg fill="currentColor" viewbox="0 0 100 100">
              <circle cx="50" cy="50" fill="none" r="45" stroke="currentColor" stroke-width="2"></circle>
              <circle cx="20" cy="50" fill="none" r="30" stroke="currentColor" stroke-width="2"></circle>
              <circle cx="80" cy="50" fill="none" r="30" stroke="currentColor" stroke-width="2"></circle>
              <circle cx="50" cy="20" fill="none" r="30" stroke="currentColor" stroke-width="2"></circle>
              <circle cx="50" cy="80" fill="none" r="30" stroke="currentColor" stroke-width="2"></circle>
            </svg>
          </div>
          <div class="max-w-3xl mx-auto relative">
            <span
              class="font-label-md text-label-md uppercase tracking-[0.25em] text-on-tertiary-container block mb-space-xs">Wujudkan
              Koleksi Impian</span>
            <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-space-md">
              Temukan Produk Batik yang Sesuai dengan Kebutuhan Anda
            </h2>
            <p
              class="font-body-lg text-body-md md:text-body-lg text-on-secondary-container max-w-xl mx-auto mb-space-xl leading-relaxed">
              Mulai dari busana personal, seragam instansi, hingga cinderamata berkelas penuh makna filosofis warisan
              luhur.
            </p>
            <div class="flex flex-wrap items-center justify-center gap-space-md">
              <a class="inline-flex items-center justify-center bg-primary text-surface-bright font-label-lg text-label-lg px-8 py-3.5 rounded-sm hover:bg-tertiary-container transition-colors duration-200"
                data-path="galeri" href="gallery">
                Lihat Koleksi
              </a>
              <a class="inline-flex items-center justify-center bg-surface-container-lowest text-primary font-label-lg text-label-lg px-8 py-3.5 rounded-sm hover:bg-surface-container-high transition-colors duration-200"
                data-path="contact" href="contact">
                Konsultasi Pesanan
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped></style>
