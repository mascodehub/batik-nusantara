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
      'https://lh3.googleusercontent.com/aida/AEtjO1Uh0EXDiHAt-hHwbKsD6V-vSUE5s5waBfQEYXWbgQM7Csp86tyEktDfw7cxdRBb6Gt2Tf8vrPdTlXcc-PzbskZDcCNUxCMr2I_vEkYkvGBI0pARTWVBb4MkC9xnrB_f5G0Y2lg4RHUl8rNpdTUUTCygK--6xfsgRbnmfWOkgKjZxxokcuAtDjo-cLUbAvjf-0vJjQiVLg9_Ln8jZADHI4zQB7QvziYjr8WF66BVz04eCiZV3K8HgBvfjA',
    images: [
      'https://lh3.googleusercontent.com/aida/AEtjO1Uh0EXDiHAt-hHwbKsD6V-vSUE5s5waBfQEYXWbgQM7Csp86tyEktDfw7cxdRBb6Gt2Tf8vrPdTlXcc-PzbskZDcCNUxCMr2I_vEkYkvGBI0pARTWVBb4MkC9xnrB_f5G0Y2lg4RHUl8rNpdTUUTCygK--6xfsgRbnmfWOkgKjZxxokcuAtDjo-cLUbAvjf-0vJjQiVLg9_Ln8jZADHI4zQB7QvziYjr8WF66BVz04eCiZV3K8HgBvfjA',
      'https://lh3.googleusercontent.com/aida/AEtjO1UwOB4OmaYaQFvVcOvlKs5LQMhUzyBlK0AoIyqZm9YGjBqkuVhjmUmppjzLOUUSOjBO6MQMLzc9lXKdDyaEXF-uPL2FV6DDraQiZY3BuP9H0Eavn0DtiFZXQlw5_i17eAT0X1-i6R9tg4ydz26pQPNuZZOUCb06VVKPxesY1IJt8qAwhYi6pV1fpAa8YT9o6wVrj5K2J9l8rkIZKsZ2r0TZIHbS687Gn8SncXWlK8StjOtGubGBio2Z',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDpGhWp5sFcYiBkRRnbIxKmpiff4nYBNEmpaQxuBqCcPOIp-P-ImxmB0i4eTsxdzjlKgncPSczQOCTWrhl54F4gw2n_byIsjsr7L8EbGoSR_tSPA74AVVDBtYGXPriVvQ_9ecFCjMYcO2sG7uh5tdhFks3DBQy25BPk4aU2BnBmEVEn51bVE4-MT4UsxngRQKByFdozKSPVxgPOyyQ_TNFHpqn3c4lAW827HbDQ2Cu60n6Kg5oGzuI',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD8A63OiFL0_p3kcYgmHW9B_OiFmEcUWuwnZimgp7zUYG9_DAPa9q9MAzWy95xih_LES4Bh589JHto0CY7NgTECC15a4w4vuFDUs_NQ1NAIQOh1VoP1tfCvXwwjmKnPRlCcE_x8gFNvxwPRoWnbdA9F2K1PIv7RdP3s3OOModlRLRy3PPvbgIcx1WQ6k8YdXmzzG0dmLv1Qms2vXvv-b_4okw52bqUHVq4n2-ASfIPpFx1S0twEMx4'
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
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDpGhWp5sFcYiBkRRnbIxKmpiff4nYBNEmpaQxuBqCcPOIp-P-ImxmB0i4eTsxdzjlKgncPSczQOCTWrhl54F4gw2n_byIsjsr7L8EbGoSR_tSPA74AVVDBtYGXPriVvQ_9ecFCjMYcO2sG7uh5tdhFks3DBQy25BPk4aU2BnBmEVEn51bVE4-MT4UsxngRQKByFdozKSPVxgPOyyQ_TNFHpqn3c4lAW827HbDQ2Cu60n6Kg5oGzuI',
      'https://lh3.googleusercontent.com/aida/AEtjO1Uh0EXDiHAt-hHwbKsD6V-vSUE5s5waBfQEYXWbgQM7Csp86tyEktDfw7cxdRBb6Gt2Tf8vrPdTlXcc-PzbskZDcCNUxCMr2I_vEkYkvGBI0pARTWVBb4MkC9xnrB_f5G0Y2lg4RHUl8rNpdTUUTCygK--6xfsgRbnmfWOkgKjZxxokcuAtDjo-cLUbAvjf-0vJjQiVLg9_Ln8jZADHI4zQB7QvziYjr8WF66BVz04eCiZV3K8HgBvfjA',
      'https://lh3.googleusercontent.com/aida/AEtjO1UwOB4OmaYaQFvVcOvlKs5LQMhUzyBlK0AoIyqZm9YGjBqkuVhjmUmppjzLOUUSOjBO6MQMLzc9lXKdDyaEXF-uPL2FV6DDraQiZY3BuP9H0Eavn0DtiFZXQlw5_i17eAT0X1-i6R9tg4ydz26pQPNuZZOUCb06VVKPxesY1IJt8qAwhYi6pV1fpAa8YT9o6wVrj5K2J9l8rkIZKsZ2r0TZIHbS687Gn8SncXWlK8StjOtGubGBio2Z',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD8A63OiFL0_p3kcYgmHW9B_OiFmEcUWuwnZimgp7zUYG9_DAPa9q9MAzWy95xih_LES4Bh589JHto0CY7NgTECC15a4w4vuFDUs_NQ1NAIQOh1VoP1tfCvXwwjmKnPRlCcE_x8gFNvxwPRoWnbdA9F2K1PIv7RdP3s3OOModlRLRy3PPvbgIcx1WQ6k8YdXmzzG0dmLv1Qms2vXvv-b_4okw52bqUHVq4n2-ASfIPpFx1S0twEMx4'
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
                <a class="inline-flex items-center justify-center bg-primary text-surface-bright hover:text-gray-300 font-label-lg text-label-lg px-7 py-3.5 rounded-sm hover:bg-tertiary-container transition-colors duration-200"
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
