<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'
// const btn = document.getElementById('mobile-menu-btn');
// const drawer = document.getElementById('mobile-drawer');
// if (btn && drawer) {
//    btn.addEventListener('click', () => {
//       drawer.classList.toggle('hidden');

//    });
// }

const showModalDetail = ref(false)
const selectedItem = ref(null)

const galleryItems = ref([
   {
      category: 'kain',
      categoryLabel: 'Kain Batik',
      description:
         'Sutra ATBM murni dengan pewarnaan alami kayu soga dan tingi. Pengerjaan canting halus selama 4 bulan oleh maestro batik Giriloyo dengan presisi geometris sakral khas keraton Mataram. Menampilkan kemegahan Parang Barong yang dahulu dikhususkan bagi para bangsawan berwibawa tinggi.',
      image:
         'https://lh3.googleusercontent.com/aida/AEtjO1Uh0EXDiHAt-hHwbKsD6V-vSUE5s5waBfQEYXWbgQM7Csp86tyEktDfw7cxdRBb6Gt2Tf8vrPdTlXcc-PzbskZDcCNUxCMr2I_vEkYkvGBI0pARTWVBb4MkC9xnrB_f5G0Y2lg4RHUl8rNpdTUUTCygK--6xfsgRbnmfWOkgKjZxxokcuAtDjo-cLUbAvjf-0vJjQiVLg9_Ln8jZADHI4zQB7QvziYjr8WF66BVz04eCiZV3K8HgBvfjA',
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
      categoryLabel: "Fashion",
      description: "Struktur blazer modern dengan paduan motif Sekar Jagad monokromatik. Menghadirkan wibawa formal dengan kenyamanan linen premium. Didesain untuk para pemimpin kontemporer yang menghargai paduan warisan budaya Nusantara dan ketajaman siluet internasional modern.",
      image: "https://lh3.googleusercontent.com/aida/AEtjO1UwOB4OmaYaQFvVcOvlKs5LQMhUzyBlK0AoIyqZm9YGjBqkuVhjmUmppjzLOUUSOjBO6MQMLzc9lXKdDyaEXF-uPL2FV6DDraQiZY3BuP9H0Eavn0DtiFZXQlw5_i17eAT0X1-i6R9tg4ydz26pQPNuZZOUCb06VVKPxesY1IJt8qAwhYi6pV1fpAa8YT9o6wVrj5K2J9l8rkIZKsZ2r0TZIHbS687Gn8SncXWlK8StjOtGubGBio2Z",
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
      categoryLabel: "Fashion",
      description: "Gaun malam potongan asimetris berpadu filosofi motif Sido Asih yang melambangkan kasih sayang abadi dan keanggunan wanita Nusantara. Jatuhan kain yang dramatis mengalir seperti ombak pesisir Samudra Hindia dengan tatahan payet tembaga antik artisan kotagede.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpGhWp5sFcYiBkRRnbIxKmpiff4nYBNEmpaQxuBqCcPOIp-P-ImxmB0i4eTsxdzjlKgncPSczQOCTWrhl54F4gw2n_byIsjsr7L8EbGoSR_tSPA74AVVDBtYGXPriVvQ_9ecFCjMYcO2sG7uh5tdhFks3DBQy25BPk4aU2BnBmEVEn51bVE4-MT4UsxngRQKByFdozKSPVxgPOyyQ_TNFHpqn3c4lAW827HbDQ2Cu60n6Kg5oGzuI",
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
      categoryLabel: "Produk Rumah Tangga",
      description: "Dekorasi ruang tamu berupa bantal sofa sutra dan taplak meja kanvas katun motif Truntum geometris yang hangat dan bersahaja. Menghadirkan suasana keheningan ruang keluarga berestetika Wabi-Sabi Jawa dengan ketahanan cuci tinggi untuk pemakaian harian mewah.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8A63OiFL0_p3kcYgmHW9B_OiFmEcUWuwnZimgp7zUYG9_DAPa9q9MAzWy95xih_LES4Bh589JHto0CY7NgTECC15a4w4vuFDUs_NQ1NAIQOh1VoP1tfCvXwwjmKnPRlCcE_x8gFNvxwPRoWnbdA9F2K1PIv7RdP3s3OOModlRLRy3PPvbgIcx1WQ6k8YdXmzzG0dmLv1Qms2vXvv-b_4okw52bqUHVq4n2-ASfIPpFx1S0twEMx4",
      material: "Kanvas Katun Organik & Sutra Habutai",
      origin: "Cirebon & Surakarta Workshop",
      tag: "Living & Decor",
      technique: "Batik Cap Tembaga Kombinasi Tulis Rengrengan",
      title: "Set Aksesori Interior & Table Runner Truntum",
      subtitle: "Tata Ruang Nusantara",
      exclusive: "Set Terpadu 5 Pcs"
   },
   {
      category: "aksesori",
      categoryLabel: "Aksesori",
      description: "Aksen selendang lembut bertabur ragam hias Nitik legendaris, disempurnakan rumbai tenun tangan berornamen tembaga. Motif Nitik membutuhkan ketelitian garis titik geometri yang luar biasa, dikerjakan oleh para tetua pembatik yang menjaga keaslian teknik kuno abad ke-18.",
      image: "https://lh3.googleusercontent.com/aida/AEtjO1Uh0EXDiHAt-hHwbKsD6V-vSUE5s5waBfQEYXWbgQM7Csp86tyEktDfw7cxdRBb6Gt2Tf8vrPdTlXcc-PzbskZDcCNUxCMr2I_vEkYkvGBI0pARTWVBb4MkC9xnrB_f5G0Y2lg4RHUl8rNpdTUUTCygK--6xfsgRbnmfWOkgKjZxxokcuAtDjo-cLUbAvjf-0vJjQiVLg9_Ln8jZADHI4zQB7QvziYjr8WF66BVz04eCiZV3K8HgBvfjA",
      material: "100% Sutra Crepe de Chine Alami",
      origin: "Bantul, D.I. Yogyakarta",
      tag: "Koleksi Aksesori",
      technique: "Batik Tulis Canting Cawang Khusus Ragam Nitik",
      title: "Selendang Sutra Crepe Sekar Nitik",
      subtitle: "Wastra Pelengkap",
      exclusive: "Dimensi 200 x 60 cm"
   },
   {
      category: "custom",
      categoryLabel: "Produk Custom",
      description: "Layanan tailor kustom eksklusif perorangan dan instansi kenegaraan dengan pengukuran siluet presisi dan pemilihan motif personal. Setiap lembar kain dipola langsung sesuai postur tubuh agar motif Parang Kusumo tersambung sempurna tanpa jeda pada saku, kerah, dan plaket kancing.",
      image: "https://lh3.googleusercontent.com/aida/AEtjO1UwOB4OmaYaQFvVcOvlKs5LQMhUzyBlK0AoIyqZm9YGjBqkuVhjmUmppjzLOUUSOjBO6MQMLzc9lXKdDyaEXF-uPL2FV6DDraQiZY3BuP9H0Eavn0DtiFZXQlw5_i17eAT0X1-i6R9tg4ydz26pQPNuZZOUCb06VVKPxesY1IJt8qAwhYi6pV1fpAa8YT9o6wVrj5K2J9l8rkIZKsZ2r0TZIHbS687Gn8SncXWlK8StjOtGubGBio2Z",
      material: "Tenun Sutra Baron Grade AAA",
      origin: "Atelier Eksklusif Batik Nusantara",
      tag: "Pesanan Khusus",
      technique: "Batik Pola Tubuh (Bespoke Pattern Matching)",
      title: "Kemeja Tenun Sutra Pola Kustom Parang Kusumo",
      subtitle: "Layanan Tailoring VIP",
      exclusive: "Bespoke Commission"
   }
])

function openModal(item) {
   selectedItem.value = item
   showModalDetail.value = true

   // Lock scroll halaman
   document.body.style.overflow = 'hidden'
}

function closeModal() {
   showModalDetail.value = false

   // Unlock scroll halaman
   document.body.style.overflow = ''

   // Bersihkan data setelah modal ditutup
   setTimeout(() => {
      selectedItem.value = null
   }, 300)
}


</script>

<template>
   <div class="flex flex-col w-full">

      <div
         class="segment-main w-full max-w-[1320px] mx-auto px-margin-mobile md:px-margin pt-space-xl md:pt-space-2xl pb-space-lg">
         <div class="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div class="flex items-center gap-space-sm mb-space-xs">
               <span class="h-px w-8 bg-on-tertiary-container"></span>
               <span class="font-label-sm text-label-sm tracking-widest text-on-tertiary-container uppercase">KATALOG
                  KARYA
                  &amp; KURASI</span>
               <span class="h-px w-8 bg-on-tertiary-container"></span>
            </div>
            <h1
               class="font-display-xl text-display-xl-mobile md:text-display-xl text-primary tracking-tight mt-space-xs mb-space-md">
               Galeri Wastra &amp; Mahakarya Batik
            </h1>
            <p class="font-body-lg text-body-lg text-secondary leading-relaxed">
               Eksplorasi ragam kain batik tulis pesisir dan pedalaman, siluet busana kontemporer, ornamen interior,
               hingga
               karya kreasi kustom bernilai seni adiluhung.
            </p>
            <div class="flex items-center gap-space-md mt-space-lg opacity-40">
               <span class="h-px w-16 bg-outline-variant"></span>
               <span class="material-symbols-outlined text-[16px] text-primary">spa</span>
               <span class="h-px w-16 bg-outline-variant"></span>
            </div>
         </div>
      </div>

      <div class="segment-filter w-full max-w-[1320px] mx-auto px-margin-mobile md:px-margin mb-space-xl">
         <div
            class="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar py-space-xs gap-2 sm:gap-space-sm"
            id="gallery-filter-group">
            <button
               class="filter-btn active-filter px-space-md py-2 rounded-full font-label-md text-label-md transition-all duration-200 whitespace-nowrap bg-primary-container text-surface-bright shadow-sm"
               data-filter="all" type="button">
               Semua Koleksi
            </button>
            <button
               class="filter-btn px-space-md py-2 rounded-full font-label-md text-label-md transition-all duration-200 whitespace-nowrap bg-surface-container-low text-secondary hover:text-primary hover:bg-surface-container"
               data-filter="kain" type="button">
               Kain Batik
            </button>
            <button
               class="filter-btn px-space-md py-2 rounded-full font-label-md text-label-md transition-all duration-200 whitespace-nowrap bg-surface-container-low text-secondary hover:text-primary hover:bg-surface-container"
               data-filter="fashion" type="button">
               Fashion
            </button>
            <button
               class="filter-btn px-space-md py-2 rounded-full font-label-md text-label-md transition-all duration-200 whitespace-nowrap bg-surface-container-low text-secondary hover:text-primary hover:bg-surface-container"
               data-filter="aksesori" type="button">
               Aksesori
            </button>
            <button
               class="filter-btn px-space-md py-2 rounded-full font-label-md text-label-md transition-all duration-200 whitespace-nowrap bg-surface-container-low text-secondary hover:text-primary hover:bg-surface-container"
               data-filter="interior" type="button">
               Produk Rumah Tangga
            </button>
            <button
               class="filter-btn px-space-md py-2 rounded-full font-label-md text-label-md transition-all duration-200 whitespace-nowrap bg-surface-container-low text-secondary hover:text-primary hover:bg-surface-container"
               data-filter="custom" type="button">
               Produk Custom
            </button>
            <button
               class="filter-btn px-space-md py-2 rounded-full font-label-md text-label-md transition-all duration-200 whitespace-nowrap bg-surface-container-low text-secondary hover:text-primary hover:bg-surface-container"
               data-filter="lainnya" type="button">
               Lainnya
            </button>
         </div>
      </div>

      <div class="segment-gallery-grid w-full max-w-[1320px] mx-auto px-margin-mobile md:px-margin mb-space-2xl">
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg" id="gallery-grid">
            <article v-for="item in galleryItems" :key="item.title"
               class="gallery-card group flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
               <!-- Image -->
               <div class="relative w-full aspect-[4/3] bg-surface-container overflow-hidden cursor-pointer"
                  @click="openModal(item)">
                  <img :src="item.image" :alt="item.title"
                     class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />

                  <!-- Badges -->
                  <div class="absolute top-3 left-3 flex gap-2">
                     <span
                        class="bg-surface-bright/90 backdrop-blur-sm text-primary font-label-sm text-label-sm uppercase px-2.5 py-1 rounded-full">
                        {{ item.categoryLabel }}
                     </span>

                     <span
                        class="bg-primary text-surface-bright font-label-sm text-label-sm uppercase px-2.5 py-1 rounded-full">
                        {{ item.tag }}
                     </span>
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
                        <span>Lihat Detail</span>

                        <span class="material-symbols-outlined text-[18px]">
                           visibility
                        </span>
                     </button>
                  </div>
               </div>
            </article>
         </div>
         <!-- Empty state container if no items match -->
         <div class="hidden flex-col items-center justify-center py-space-2xl text-center" id="no-results-msg">
            <span class="material-symbols-outlined text-4xl text-outline mb-2">content_paste_search</span>
            <h4 class="font-headline-sm text-headline-sm text-primary mb-1">Belum Ada Karya di Kategori Ini</h4>
            <p class="font-body-md text-body-md text-secondary max-w-md">Silakan jelajahi kategori lainnya atau hubungi
               kurator kami untuk penelusuran arsip wastra khusus.</p>
         </div>
      </div>

      <div class="segment-motif-overview w-full bg-surface-container-low py-space-2xl mb-space-2xl">
         <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
               <div class="lg:col-span-5 flex flex-col">
                  <span
                     class="font-label-sm text-label-sm text-on-tertiary-container tracking-widest uppercase mb-space-xs">FILOSOFI
                     &amp; PROVENANSI</span>
                  <h2
                     class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight mb-space-md">
                     Ketelitian Canting &amp; Jiwa Wastra Nusantara
                  </h2>
                  <p class="font-body-md text-body-md text-secondary leading-relaxed mb-space-md">
                     Setiap goresan canting lilin malam bukan sekadar pola dekoratif, melainkan doa, falsafah kosmologi,
                     dan
                     perenungan mendalam sang empu pembatik. Di Batik Nusantara Heritage, kami mendokumentasikan
                     genealogis
                     setiap
                     lembar kain agar nilai kulturalnya tetap lestari lintas generasi.
                  </p>
                  <div class="grid grid-cols-3 gap-space-sm pt-space-sm">
                     <div class="bg-surface-container-lowest p-space-sm rounded-lg text-center shadow-sm">
                        <span class="font-headline-md text-headline-md text-primary block leading-none mb-1">100%</span>
                        <span class="font-label-sm text-label-sm text-secondary uppercase">Tulis Asli</span>
                     </div>
                     <div class="bg-surface-container-lowest p-space-sm rounded-lg text-center shadow-sm">
                        <span class="font-headline-md text-headline-md text-primary block leading-none mb-1">4-6</span>
                        <span class="font-label-sm text-label-sm text-secondary uppercase">Bulan Pengerjaan</span>
                     </div>
                     <div class="bg-surface-container-lowest p-space-sm rounded-lg text-center shadow-sm">
                        <span class="font-headline-md text-headline-md text-primary block leading-none mb-1">Soga</span>
                        <span class="font-label-sm text-label-sm text-secondary uppercase">Pewarna Alam</span>
                     </div>
                  </div>
               </div>
               <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div class="relative rounded-lg overflow-hidden aspect-[4/5] bg-surface-container shadow-sm">
                     <img alt="Filosofi Batik Tulis Nusantara" class="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpGhWp5sFcYiBkRRnbIxKmpiff4nYBNEmpaQxuBqCcPOIp-P-ImxmB0i4eTsxdzjlKgncPSczQOCTWrhl54F4gw2n_byIsjsr7L8EbGoSR_tSPA74AVVDBtYGXPriVvQ_9ecFCjMYcO2sG7uh5tdhFks3DBQy25BPk4aU2BnBmEVEn51bVE4-MT4UsxngRQKByFdozKSPVxgPOyyQ_TNFHpqn3c4lAW827HbDQ2Cu60n6Kg5oGzuI" />
                     <div
                        class="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-space-md">
                        <span class="font-label-sm text-label-sm text-tertiary-fixed tracking-widest uppercase">Motif
                           Sido
                           Asih</span>
                        <p class="font-body-sm text-body-sm text-surface-bright mt-1">Harapan cinta dan welas asih
                           timbal
                           balik antar sesama insan.</p>
                     </div>
                  </div>
                  <div
                     class="relative rounded-lg overflow-hidden aspect-[4/5] bg-surface-container shadow-sm mt-0 sm:translate-y-6">
                     <img alt="Detail Keindahan Living Batik" class="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8A63OiFL0_p3kcYgmHW9B_OiFmEcUWuwnZimgp7zUYG9_DAPa9q9MAzWy95xih_LES4Bh589JHto0CY7NgTECC15a4w4vuFDUs_NQ1NAIQOh1VoP1tfCvXwwjmKnPRlCcE_x8gFNvxwPRoWnbdA9F2K1PIv7RdP3s3OOModlRLRy3PPvbgIcx1WQ6k8YdXmzzG0dmLv1Qms2vXvv-b_4okw52bqUHVq4n2-ASfIPpFx1S0twEMx4" />
                     <div
                        class="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-space-md">
                        <span class="font-label-sm text-label-sm text-tertiary-fixed tracking-widest uppercase">Motif
                           Truntum</span>
                        <p class="font-body-sm text-body-sm text-surface-bright mt-1">Bintang malam simbol penuntun asa
                           yang
                           terus bertumbuh.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="segment-cta w-full max-w-[1320px] mx-auto px-margin-mobile md:px-margin mb-space-2xl">
         <div
            class="bg-primary-container text-surface-bright rounded-xl p-space-xl md:p-space-2xl relative overflow-hidden shadow-xl">
            <div class="relative z-10 max-w-2xl flex flex-col items-start">
               <span class="font-label-sm text-label-sm text-tertiary-fixed tracking-widest uppercase mb-space-xs">
                  LAYANAN KURATOR &amp; COMMISSION
               </span>
               <h2
                  class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-surface-bright tracking-tight mb-space-md">
                  Menginginkan Karya atau Motif Tertentu?
               </h2>
               <p class="font-body-lg text-body-lg text-outline-variant leading-relaxed mb-space-xl">
                  Kami melayani kurasi khusus koleksi wastra antik, pesanan busana custom, hingga cinderamata eksklusif
                  berlisensi filosofis untuk institusi negara maupun kolektor pribadi.
               </p>
               <div class="flex flex-wrap items-center gap-space-md">
                  <a class="inline-flex items-center justify-center bg-surface-bright text-primary font-label-lg text-label-lg px-space-xl py-3 rounded-lg hover:bg-secondary-container transition-colors duration-200 shadow-sm"
                     href="contact">
                     <span>Konsultasi Kurator</span>
                     <span class="material-symbols-outlined text-[18px] ml-2">north_east</span>
                  </a>
                  <a class="inline-flex items-center justify-center bg-transparent border border-outline-variant text-surface-bright font-label-lg text-label-lg px-space-lg py-3 rounded-lg hover:bg-surface-bright/10 transition-colors duration-200"
                     href="#">
                     <span class="material-symbols-outlined text-[18px] mr-2">download</span>
                     <span>Unduh E-Katalog (PDF)</span>
                  </a>
               </div>
            </div>
            <!-- Subtle background batik motif geometry decorative SVG -->
            <div
               class="absolute right-0 bottom-0 top-0 w-1/2 opacity-5 pointer-events-none flex items-center justify-end pr- space-xl">
               <svg class="w-[480px] h-[480px] text-surface-bright" fill="currentColor" viewbox="0 0 100 100">
                  <circle cx="50" cy="50" fill="none" r="40" stroke="currentColor" stroke-width="1.5"></circle>
                  <circle cx="50" cy="50" fill="none" r="25" stroke="currentColor" stroke-width="1"></circle>
                  <ellipse cx="50" cy="50" fill="none" rx="30" ry="10" stroke="currentColor" stroke-width="1"></ellipse>
                  <ellipse cx="50" cy="50" fill="none" rx="10" ry="30" stroke="currentColor" stroke-width="1"></ellipse>
                  <circle cx="20" cy="50" fill="none" r="10" stroke="currentColor" stroke-width="0.8"></circle>
                  <circle cx="80" cy="50" fill="none" r="10" stroke="currentColor" stroke-width="0.8"></circle>
                  <circle cx="50" cy="20" fill="none" r="10" stroke="currentColor" stroke-width="0.8"></circle>
                  <circle cx="50" cy="80" fill="none" r="10" stroke="currentColor" stroke-width="0.8"></circle>
               </svg>
            </div>
         </div>
      </div>

      <!-- modal interactive -->

      <Transition enter-active-class="transition-opacity duration-300" enter-from-class="opacity-0"
         enter-to-class="opacity-100" leave-active-class="transition-opacity duration-300"
         leave-from-class="opacity-100" leave-to-class="opacity-0">
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
                     <div class="md:col-span-6 bg-surface-container relative min-h-[300px] md:min-h-[460px]">
                        <img :src="selectedItem.image" :alt="selectedItem.title" class="w-full h-full object-cover" />

                        <div class="absolute bottom-4 left-4">
                           <span
                              class="bg-primary text-surface-bright font-label-sm text-label-sm uppercase px-3 py-1 rounded-full shadow-sm">
                              {{ selectedItem.tag }}
                           </span>
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

                                 <span
                                    class="font-label-md text-label-md text-on-tertiary-container text-right font-medium">
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