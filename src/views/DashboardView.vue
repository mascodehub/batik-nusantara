<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'

const showModalDetail = ref(false);
const selectedItem = ref(null);
const selectedImage = ref(null);

const openModal = (item) => {
  selectedItem.value = item;

  // Prioritaskan image sebagai gambar utama
  selectedImage.value = item.image;

  showModalDetail.value = true;
};

const closeModal = () => {
  showModalDetail.value = false;
  selectedItem.value = null;
  selectedImage.value = null;
};

const changeImage = (image) => {
  selectedImage.value = image;
};

const galleryItems = ref([
  {
    category: 'kain',
    categoryLabel: 'Kain Batik',
    description:
      'Sutra ATBM murni dengan pewarnaan alami kayu soga dan tingi. Pengerjaan canting halus selama 4 bulan oleh maestro batik Giriloyo dengan presisi geometris sakral khas keraton Mataram. Menampilkan kemegahan Parang Barong yang dahulu dikhususkan bagi para bangsawan berwibawa tinggi.',
    image:
      '/images/collections/1111.jpeg',
    images: [
      '/images/collections/1111.jpeg',
    ],
    material: 'Sutra ATBM Murni (Alat Tenun Bukan Mesin)',
    origin: 'Giriloyo, Imogiri, Yogyakarta',
    tag: 'Koleksi Maestro',
    technique: 'Batik Tulis Canting Tembaga Halus (4 Bulan Proses)',
    title: 'Kain Tulis Klasik Parang Barong Soga Alam',
    subtitle: 'Pewarnaan Soga Alami',
    exclusive: 'Karya Eksklusif 1/1',
  },
  {
    category: "fashion",
    categoryLabel: 'Kain Batik',
    description: "Struktur blazer modern dengan paduan motif Sekar Jagad monokromatik. Menghadirkan wibawa formal dengan kenyamanan linen premium. Didesain untuk para pemimpin kontemporer yang menghargai paduan warisan budaya Nusantara dan ketajaman siluet internasional modern.",
    image: "/images/collections/1222.jpeg",
    images: [
      '/images/collections/1222.jpeg',
    ],
    material: "Linen Blend & Katun Primissima Batik Tulis",
    origin: "Surakarta & Jakarta Atelier",
    tag: "Ready-to-Wear",
    technique: "Semi-Bespoke Tailoring dengan Hand-stitched Lapel",
    title: "Modern Tailored Blazer Sekar Jagad",
    subtitle: "Siluet Kontemporer",
    exclusive: "Edisi Terbatas"
  },
  {
    category: "fashion",
    categoryLabel: 'Kain Batik',
    description: "Gaun malam potongan asimetris berpadu filosofi motif Sido Asih yang melambangkan kasih sayang abadi dan keanggunan wanita Nusantara. Jatuhan kain yang dramatis mengalir seperti ombak pesisir Samudra Hindia dengan tatahan payet tembaga antik artisan kotagede.",
    image: "/images/collections/1333.jpeg",
    images: [
      '/images/collections/1333.jpeg',
    ],
    material: "Sutra Organza & Kain Mori Sutra Superfine",
    origin: "Yogyakarta Creative Hub",
    tag: "Adibusana",
    technique: "Draping Eksklusif & Batik Tulis Dua Muka",
    title: "Gaun Pesta Sido Asih Samodra",
    subtitle: "Evening Couture",
    exclusive: "Karya Adibusana"
  },
  {
    category: "interior",
    categoryLabel: 'Kain Batik',
    description: "Dekorasi ruang tamu berupa bantal sofa sutra dan taplak meja kanvas katun motif Truntum geometris yang hangat dan bersahaja. Menghadirkan suasana keheningan ruang keluarga berestetika Wabi-Sabi Jawa dengan ketahanan cuci tinggi untuk pemakaian harian mewah.",
    image: "/images/collections/1444.jpeg",
    images: [
      '/images/collections/1444.jpeg',
    ],
    material: "Kanvas Katun Organik & Sutra Habutai",
    origin: "Cirebon & Surakarta Workshop",
    tag: "Living & Decor",
    technique: "Batik Cap Tembaga Kombinasi Tulis Rengrengan",
    title: "Set Aksesori Interior & Table Runner Truntum",
    subtitle: "Tata Ruang Nusantara",
    exclusive: "Set Terpadu 5 Pcs"
  },
])


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
                When Heritage, <br class="hidden sm:inline" />
                <span class="italic font-display-xl text-secondary">
                  Meets New Expressions
                </span>
              </h1>
              <p class="font-body-lg text-body-md md:text-body-lg text-secondary max-w-xl mb-space-xl leading-relaxed">
                Rooted in Indonesian batik tradition, we create fabrics and contemporary pieces that carry the character
                of craftsmanship, culture, and individual expression.
              </p>
              <div class="flex flex-wrap items-center gap-space-md">
                <a class="inline-flex items-center justify-center bg-primary text-surface-bright hover:text-gray-300 font-label-lg text-label-lg px-7 py-3.5 rounded-sm hover:bg-tertiary-container transition-colors duration-200"
                  data-path="galeri" href="gallery">
                  EXPLORE COLLECTIONS
                </a>
                <a class="inline-flex items-center justify-center bg-transparent text-primary font-label-lg text-label-lg px-7 py-3.5 rounded-sm bg-surface-container-low hover:bg-secondary-container transition-colors duration-200"
                  data-path="contact" href="contact">
                  CUSTOM DESIGN
                </a>
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
            <span class="font-label-md text-label-md uppercase tracking-[0.2em] text-on-tertiary-container mb-space-xs">
              A CONTINUING TRADITION
            </span>
            <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-space-md">
              Tradition, with Room to Create
            </h2>
            <div class="space-y-space-md font-body-md text-body-md text-secondary leading-relaxed mb-space-xl">
              <p>
                Since 1986, Batik Nusantara has continued to explore the possibilities of batik while staying rooted in
                traditional craftsmanship. We embrace contemporary trends and evolving tastes while preserving the
                essence of the craft. Beyond our collections, we also create custom designs that bring individual ideas,
                concepts, and cultural inspirations to life. 
              </p>
              <p>
                Through this balance, we believe batik can remain
                meaningful while continuing to evolve.
              </p>
            </div>
            
          </div>
          <!-- Right Column: Framing Visual -->
          <div class="lg:col-span-5 flex flex-col items-center">
            <div class="w-full bg-surface-container-low p-space-md rounded-sm">
              <div class="relative aspect-[4/3] overflow-hidden rounded-sm bg-surface-container">
                <img alt="Potret karya batik kontemporer dalam perpaduan busana formal modern"
                  class="w-full h-full object-cover" src="/main-3.jpeg" />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="segment-goal bg-surface-container-low py-space-2xl">
      <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <div class="text-center max-w-2xl mx-auto mb-space-xl">
          <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            EXPLORE BATIK NUSANTARA
          </h2>
          <span
            class="font-label-md text-label-md uppercase tracking-[0.2em] text-on-tertiary-container mb-space-xs block">
            MADE IN MANY FORMS
          </span>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          <!-- Misi Cards Grid -->
          <div class="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div class="bg-surface-container-lowest p-space-lg rounded-sm flex flex-col justify-start">
              <span
                class="font-display-xl text-headline-md text-on-tertiary-container font-serif mb- space-xs">01</span>
              <h3 class="font-title-md text-title-md text-primary mb-space-xs">BATIK FABRICS</h3>
              <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
                Explore batik fabrics crafted through different techniques, from hand-stamped to fully handmade.
              </p>
              <a class="inline-flex items-center justify-center bg-primary text-surface-bright hover:text-gray-300 font-label-lg text-label-lg px-8 py-3.5 rounded-sm hover:bg-tertiary-container transition-colors duration-200 mt-10"
                data-path="galeri" href="gallery">
                EXPLORE COLLECTIONS
              </a>
            </div>
            <div class="bg-surface-container-lowest p-space-lg rounded-sm flex flex-col justify-start">
              <span
                class="font-display-xl text-headline-md text-on-tertiary-container font-serif mb- space-xs">02</span>
              <h3 class="font-title-md text-title-md text-primary mb-space-xs">CUSTOM DESIGN</h3>
              <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
                Bring your own motif, concept, or cultural inspiration and turn it into a textile design.
              </p>
              <a class="inline-flex items-center justify-center bg-primary text-surface-bright hover:text-gray-300 font-label-lg text-label-lg px-8 py-3.5 rounded-sm hover:bg-tertiary-container transition-colors duration-200 mt-10"
                data-path="galeri" href="service">
                EXPLORE SERVICE
              </a>
            </div>
            <div class="bg-surface-container-lowest p-space-lg rounded-sm flex flex-col justify-start">
              <span
                class="font-display-xl text-headline-md text-on-tertiary-container font-serif mb- space-xs">03</span>
              <h3 class="font-title-md text-title-md text-primary mb-space-xs">CONTEMPORARY APPAREL</h3>
              <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
                Discover batik translated into modern silhouettes for everyday and special occasions.
              </p>
              <a class="inline-flex items-center justify-center bg-primary text-surface-bright hover:text-gray-300 font-label-lg text-label-lg px-8 py-3.5 rounded-sm hover:bg-tertiary-container transition-colors duration-200 mt-10"
                data-path="galeri" href="gallery">
                EXPLORE COLLECTIONS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="segment-catalog w-full bg-surface py-space-2xl">
      <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div>
            <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
              DISCOVER OUR COLLECTION
            </h2>
            <p class="font-body-md text-body-md text-secondary mt-1">
              Explore a diverse range of batik fabrics, each featuring distinctive motifs, colors, and craftsmanship.
            </p>
          </div>
          <a class="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-on-tertiary-container transition-colors"
            data-path="galeri" href="gallery">
            <span>More collections</span>
            <span class="material-symbols-outlined text-lg">arrow_forward</span>
          </a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          <article v-for="item in galleryItems" :key="item.title"
            class="gallery-card group flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            <!-- Image -->
            <div class="relative w-full aspect-[3/4] bg-surface-container overflow-hidden cursor-pointer"
              @click="openModal(item)">
              <img :src="item.image" :alt="item.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />

              <!-- Badges -->
              <div class="absolute top-3 left-3 flex gap-2">
                <span
                  class="bg-surface-bright/90 backdrop-blur-sm text-primary font-label-sm text-label-sm uppercase px-2.5 py-1 rounded-full">
                  {{ item.categoryLabel }}
                </span>

                <!-- <span
                  class="bg-primary text-surface-bright font-label-sm text-label-sm uppercase px-2.5 py-1 rounded-full">
                  {{ item.tag }}
                </span> -->
              </div>
            </div>

            <!-- Content -->
            <div class="p-space-md flex flex-col flex-1 justify-between bg-surface-container-lowest">
              <div>
                <span
                  class="font-label-sm text-label-sm text-on-tertiary-container uppercase tracking-wider block mb-1">
                  {{ item.subtitle }}
                </span>

                <h3
                  class="font-headline-sm text-headline-sm text-primary tracking-tight mb-2 group-hover:text-secondary transition-colors">
                  {{ item.title }}
                </h3>

                <p class="font-body-sm text-body-sm text-secondary leading-relaxed line-clamp-2 mb-space-md">
                  {{ item.description }}
                </p>
              </div>

              <!-- Footer -->
              <div class="pt-space-sm flex items-center justify-between">
                <span class="font-label-md text-label-md text-outline">
                  {{ item.exclusive }}
                </span>

                <button type="button"
                  class="open-modal-btn bg-white hover:border-white inline-flex items-center gap-1.5 text-primary hover:text-on-tertiary-container font-label-md text-label-md transition-colors py-1"
                  @click.stop="openModal(item)">
                  <span>View Detail</span>

                  <span class="material-symbols-outlined text-[18px]">
                    visibility
                  </span>
                </button>
              </div>
            </div>
          </article>
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
            <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-space-md">
              Have Something in Mind?
            </h2>
            <p
              class="font-body-lg text-body-md md:text-body-lg text-on-secondary-container max-w-xl mx-auto mb-space-xl leading-relaxed">
              Whether you're looking for a particular piece, exploring our collections, or developing an idea of your own, we'd love to hear from you.
            </p>
            <div class="flex flex-wrap items-center justify-center gap-space-md">
              <a class="inline-flex items-center justify-center bg-primary text-surface-bright font-label-lg text-label-lg px-8 py-3.5 rounded-sm hover:bg-tertiary-container transition-colors duration-200"
                data-path="galeri" href="gallery">
                EXPLORE COLLECTIONS
              </a>
              <a class="inline-flex items-center justify-center bg-surface-container-lowest text-primary font-label-lg text-label-lg px-8 py-3.5 rounded-sm hover:bg-surface-container-high transition-colors duration-200"
                data-path="contact" href="contact">
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- modal interactive -->

    <Transition enter-active-class="transition-opacity duration-300" enter-from-class="opacity-0"
      enter-to-class="opacity-100" leave-active-class="transition-opacity duration-300" leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div v-if="showModalDetail && selectedItem"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-primary/75 backdrop-blur-sm" @click="closeModal"></div>

        <!-- Modal Box -->
        <Transition appear enter-active-class="transition-all duration-300" enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100" leave-active-class="transition-all duration-300"
          leave-from-class="scale-100 opacity-100" leave-to-class="scale-95 opacity-0">
          <div
            class="relative w-full max-w-4xl bg-surface-container-lowest rounded-xl shadow-2xl overflow-hidden z-10 my-auto"
            @click.stop>
            <!-- Close Button -->
            <button type="button" aria-label="Tutup Detail"
              class="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-surface-bright/90 backdrop-blur-md flex items-center justify-center text-primary hover:bg-surface-bright hover:text-error transition-colors shadow-md"
              @click="closeModal">
              <span class="material-symbols-outlined text-[20px]">
                close
              </span>
            </button>

            <div class="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
              <!-- Modal Image -->
              <div class="md:col-span-6 bg-surface-container relative p-4 flex flex-col">
                <!-- Main Image -->
                <div class="relative flex-1 aspect-[3/4] overflow-hidden rounded-lg">
                  <img :src="selectedImage" :alt="selectedItem.alt" class="w-full h-full object-cover" />

                  <!-- Tag -->
                  <div class="absolute bottom-4 left-4">
                    <span
                      class="bg-primary text-surface-bright font-label-sm text-label-sm uppercase px-3 py-1 rounded-full shadow-sm">
                      {{ selectedItem.tag }}
                    </span>
                  </div>
                </div>

                <!-- Gallery -->
                <div v-if="selectedItem.images?.length > 1" class="flex gap-2 mt-3 overflow-x-auto flex-nowrap pb-1">
                  <button v-for="(image, index) in selectedItem.images" :key="`${selectedItem.id}-${index}`"
                    type="button"
                    class="flex-none w-18 h-24 p-1 rounded overflow-hidden focus:outline-none cursor-pointer transition-colors"
                    :class="selectedImage === image
                      ? 'border-2 border-primary'
                      : 'border border-outline-variant/50 hover:border-primary'
                      " @click="changeImage(image)">
                    <img :src="image" :alt="`${selectedItem.title} - Detail ${index + 1}`"
                      class="w-full h-full aspect-[3/4] object-cover" />
                  </button>
                </div>
              </div>

              <!-- Modal Text & Metadata -->
              <div
                class="md:col-span-6 p-space-lg md:p-space-xl flex flex-col justify-between bg-surface-container-lowest">
                <div>
                  <!-- Category -->
                  <div class="flex items-center gap-2 mb-2">
                    <span
                      class="font-label-sm text-label-sm text-on-tertiary-container uppercase tracking-wider font-semibold">
                      {{ selectedItem.categoryLabel }}
                    </span>

                    <span class="text-outline-variant">•</span>

                    <span class="font-label-sm text-label-sm text-outline">
                      Karya Autentik
                    </span>
                  </div>

                  <!-- Title -->
                  <h3 class="font-headline-md text-headline-md text-primary tracking-tight mb-space-md">
                    {{ selectedItem.title }}
                  </h3>

                  <!-- Description -->
                  <p class="font-body-md text-body-md text-secondary leading-relaxed mb-space-lg">
                    {{ selectedItem.description }}
                  </p>

                  <!-- Metadata -->
                  <div class="space-y-space-sm bg-surface-container-low p-space-md rounded-lg mb-space-lg">
                    <!-- Origin -->
                    <div class="flex items-start justify-between text-body-sm">
                      <span class="text-outline">
                        Asal Daerah:
                      </span>

                      <span class="font-label-md text-label-md text-primary text-right font-medium">
                        {{ selectedItem.origin }}
                      </span>
                    </div>

                    <!-- Material -->
                    <div class="flex items-start justify-between text-body-sm">
                      <span class="text-outline">
                        Material:
                      </span>

                      <span class="font-label-md text-label-md text-primary text-right font-medium">
                        {{ selectedItem.material }}
                      </span>
                    </div>

                    <!-- Technique -->
                    <div class="flex items-start justify-between text-body-sm">
                      <span class="text-outline">
                        Teknik:
                      </span>

                      <span class="font-label-md text-label-md text-primary text-right font-medium">
                        {{ selectedItem.technique }}
                      </span>
                    </div>

                    <!-- Certificate -->
                    <div class="flex items-start justify-between text-body-sm">
                      <span class="text-outline">
                        Sertifikat:
                      </span>

                      <span class="font-label-md text-label-md text-on-tertiary-container text-right font-medium">
                        Sertifikat Orisinalitas Batik Nusantara
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Actions -->
                <div class="pt-space-sm flex flex-col sm:flex-row items-center gap-space-sm">
                  <a href="gallery"
                    class="w-full sm:flex-1 inline-flex items-center justify-center bg-primary-container text-surface-bright font-label-lg text-label-lg py-3 rounded-lg hover:bg-tertiary-container hover:text-secondary transition-colors">
                    <span class="material-symbols-outlined text-[18px] mr-2">
                      chat
                    </span>

                    <span>Konsultasi Karya Ini</span>
                  </a>

                  <button type="button"
                    class="w-full sm:w-auto px-space-md py-3 text-white hover:text-secondary font-label-lg text-label-lg transition-colors"
                    @click="closeModal">
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>

  </div>
</template>

<style scoped></style>
