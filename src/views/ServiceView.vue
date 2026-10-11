<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'

const processSteps = [
   {
      id: 1,
      name: 'Konsultasi & Pemolaan Naskah',
      captionTitle: '01. Eksplorasi Filosofi Ragam Hias & Sketsa Naskah',
      progressPct: 0,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmaM68BY2c3GTA018kDPlSLP5tbNqwf-H7C6Cv5XcYHyNOsh7AecYzgR_ZN8eoI3Phb0JmF6EuxyuNigwxgp9vWKDrKYQ90T2Ww5BOGcoZVYcthgGbHWQ7gcrRcTb3FFcJRbzz1OJTJ5CijdhX_0aRymflZxtpkId5V6sM8krSwiaQpmTdtwWLUN11exbUGpEe7RIdmqxR8c5UGGX0A81dJRJ8MsGUkdyGmXa1r26sOWY5QiHmGMY',
      description: 'Riset etimologis motif filosofis, penentuan susunan ornamen trah, serta sketsa pola manual di atas kain mori primissima atau sutra ATBM oleh kurator wastra.',
      duration: '3–7 Hari Riset',
      technique: 'Pola Tangan Manual',
      techniqueIcon: 'draw',
      video: '/videos/video-1.mp4',
      poster: '/main-1.jpg',
   },
   {
      id: 2,
      name: 'Pencoletan & Canting Malam Tulis',
      captionTitle: '02. Pencoletan & Canting Malam Tulis',
      progressPct: 33,
      image: 'https://example.com/proses-canting.jpg',
      description: 'Penorehan lilin malam panas dengan canting tembaga presisi oleh maestro pembatik berpengalaman puluhan tahun, mengunci detail motif garis rambut (isen-isen) tembus dua sisi kain.',
      duration: '14–45 Hari Pengerjaan',
      technique: 'Lilin Lebah Alami',
      techniqueIcon: 'mode_heat',
      video: '/videos/video-2.mp4',
      poster: '/main-2.jpg',
   },
   {
      id: 3,
      name: 'Pewarnaan Alami Soga & Celup Tradisional',
      captionTitle: '03. Pewarnaan Alami Soga & Celup Tradisional',
      progressPct: 66,
      image: 'https://example.com/proses-pewarnaan.jpg',
      description: 'Ekstraksi bahan botani murni (kulit kayu tingi, jolawe, kayu tegeran, dan indigofera murni) melalui perendaman berlapis hingga 15–20 kali untuk menghasilkan kedalaman rona hangat yang lestari.',
      duration: '10–20 Kali Celup',
      technique: '100% Organik Eco-Safe',
      techniqueIcon: 'eco',
      video: '/videos/video-3.mp4',
      poster: '/main-3.jpg',
   },
   {
      id: 4,
      name: 'Pelorotan Lilin & Kendali Mutu',
      captionTitle: '04. Pelorotan Lilin & Kendali Mutu',
      progressPct: 100,
      image: 'https://example.com/proses-finishing.jpg',
      description: 'Pelepasan malam dalam gentong air mendidih murni, penjemuran di angin teduh tanpa sinar matahari langsung, serta inspeksi 28 titik kurasi sebelum penerbitan sertifikat keaslian.',
      duration: '3–5 Hari Finishing',
      technique: '28 Titik Inspeksi Mutu',
      techniqueIcon: 'verified',
      video: '/videos/video-4.mp4',
      poster: '/main-3.jpg',
   }
];

const currentStep = ref(0);

const selectedStep = computed(
   () => processSteps[currentStep.value],
);

const timelineHeights = ['0%', '33%', '66%', '100%'];

function selectProcessStep(index) {
   if (index < 0 || index >= processSteps.length) return;
   currentStep.value = index;
}

function prevProcessStep() {
   selectProcessStep(currentStep.value - 1);
}

function nextProcessStep() {
   selectProcessStep(currentStep.value + 1);
}

const videoRef = ref(null)

function handleVideoEnded() {
   const nextIndex =
      (currentStep.value + 1) % processSteps.length

   selectProcessStep(nextIndex)
}

async function playCurrentVideo() {
  await nextTick()

  const video = videoRef.value

  if (!video) return

  video.pause()
  video.currentTime = 0
  video.load()

  try {
    await video.play()
  } catch (error) {
    console.warn('Autoplay gagal:', error)
  }
}

// Autoplay video pertama saat halaman dibuka/reload
onMounted(() => {
  playCurrentVideo()
})

// Autoplay setiap kali tahapan berubah
watch(currentStep, () => {
  playCurrentVideo()
})

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
         <section class="w-full bg-surface-container-low py-space-2xl" id="proses-adiluhung">
            <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
               <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
                  <!-- Kolom 1: Timeline Interaktif & Penjelasan Tahapan -->
                  <div class="lg:col-span-6 flex flex-col">
                     <span class="font-label-sm text-label-sm uppercase tracking-widest text-outline">
                        DEDIKASI KRIYA &amp; KETELITIAN TRADISI
                     </span>
                     <h2
                        class="font-headline-md text-headline-md md:text-headline-lg text-primary tracking-tight mt-1 mb-space-sm">
                        Empat Tahapan Menenun Cerita &amp; Makna
                     </h2>
                     <p class="font-body-md text-body-md text-secondary leading-relaxed mb-space-xl">
                        Dari kemurnian guratan canting tembaga hingga fermentasi pewarna alami soga Jawa, setiap helai
                        wastra
                        Larasati melewati dedikasi luhur ratusan jam kerja para maestro pembatik.
                     </p>
                     <!-- Timeline Kontainer Vertikal -->
                     <div class="relative pl-6 md:pl-8 space-y-space-lg">
                        <!-- Background line -->
                        <div class="absolute left-[19px] md:left-[23px] top-4 bottom-8 w-[2px] bg-outline-variant/40">
                        </div>

                        <!-- Active progress line -->
                        <div
                           class="absolute left-[19px] md:left-[23px] top-4 w-[2px] bg-tertiary-container transition-all duration-500"
                           :style="{ height: timelineHeights[currentStep] }"></div>

                        <!-- Timeline items -->
                        <div v-for="(step, index) in processSteps" :key="step.id"
                           class="timeline-step relative group cursor-pointer transition-all duration-300"
                           :class="index === currentStep ? 'opacity-100' : 'opacity-80 hover:opacity-100'"
                           @click="selectProcessStep(index)">
                           <!-- Node -->
                           <div
                              class="step-node absolute -left-6 md:-left-8 top-1.5 w-10 h-10 rounded-full flex items-center justify-center font-label-md text-label-md font-bold transition-all duration-300"
                              :class="{
                                 'bg-primary-container text-on-primary ring-4 ring-tertiary-container/20 shadow-md':
                                    index === currentStep,
                                 'bg-secondary text-surface-bright ring-2 ring-tertiary-container/30':
                                    index < currentStep,
                                 'bg-surface-container text-secondary ring-2 ring-outline-variant/60':
                                    index > currentStep
                              }">
                              {{ String(index + 1).padStart(2, '0') }}
                           </div>

                           <!-- Card -->
                           <div
                              class="step-card ml-8 md:ml-10 p-space-md md:p-space-lg rounded-lg transition-all duration-300"
                              :class="{
                                 'border border-primary/10 bg-surface-container-lowest shadow-sm':
                                    index === currentStep,
                                 'border border-transparent bg-surface-container-lowest/70 hover:bg-surface-container-lowest':
                                    index !== currentStep
                              }">
                              <div class="flex items-center justify-between mb-1 gap-2">
                                 <span class="font-label-sm text-label-sm uppercase tracking-widest"
                                    :class="index === currentStep ? 'text-tertiary-container font-semibold' : 'text-outline'">
                                    Tahap {{ String(index + 1).padStart(2, '0') }}
                                 </span>

                                 <span v-if="index === currentStep"
                                    class="step-badge inline-flex items-center gap-1 text-[11px] font-medium text-tertiary-container bg-tertiary-container/10 px-2 py-0.5 rounded-full">
                                    Aktif Ditampilkan
                                 </span>
                              </div>

                              <h3 class="font-title-lg text-title-lg text-primary mb-1.5">
                                 {{ step.name }}
                              </h3>

                              <p class="font-body-md text-body-md text-secondary leading-relaxed">
                                 {{ step.description }}
                              </p>

                              <div
                                 class="mt-space-sm pt-space-xs flex flex-wrap gap-2 text-outline font-label-sm text-label-sm">
                                 <span class="inline-flex items-center gap-1">
                                    <span class="material-symbols-outlined text-[15px] text-tertiary-container">
                                       schedule
                                    </span>
                                    {{ step.duration }}
                                 </span>

                                 <span>•</span>

                                 <span class="inline-flex items-center gap-1">
                                    <span class="material-symbols-outlined text-[15px] text-tertiary-container">
                                       {{ step.techniqueIcon }}
                                    </span>
                                    {{ step.technique }}
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- Kolom 2: Wadah Player Video Interaktif -->
                  <div class="lg:col-span-6 lg:sticky lg:top-28">
                     <div
                        class="bg-surface-container-lowest rounded-xl p-3 md:p-4 shadow-xl border border-outline-variant/40">
                        <!-- Video Player Container -->
                        <div
                           class="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-lg overflow-hidden bg-primary-container shadow-inner group">
                           <!-- Main image -->
                           <!-- <img :key="selectedStep.id" :src="selectedStep.image"
                              :alt="`Visual proses ${selectedStep.name}`"
                              class="w-full h-full object-cover transition-opacity duration-700 filter brightness-90 group-hover:scale-105" /> -->

                           <!-- <video ref="videoRef"
                              class="w-full h-full object-cover transition-opacity duration-700 filter brightness-90"
                              src="/video/video-1.mp4" poster="/main-1.jpg" controls preload="metadata"
                              @play="handlePlay" @pause="handlePause">
                              Browser kamu tidak mendukung pemutaran video.
                           </video> -->

                           <video ref="videoRef"
                              class="w-full h-full object-cover transition-opacity duration-700 filter brightness-90"
                              :src="selectedStep.video" :poster="selectedStep.poster" controls playsinline
                              preload="metadata" @ended="handleVideoEnded" autoplay muted>
                              Browser tidak mendukung pemutaran video.
                           </video>
                           <!-- Gradient -->
                           <div
                              class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent pointer-events-none">
                           </div>

                           <!-- Caption -->
                           <div class="absolute bottom-3 left-4 right-4 pointer-events-none">
                              <p class="text-surface-bright font-title-md text-title-md drop-shadow-md truncate">
                                 {{ selectedStep.captionTitle }}
                              </p>
                           </div>
                        </div>
                        <!-- Player Scrub Bar & Navigation Controls -->
                        <div class="mt-3.5 px-1 flex flex-col gap-3">
                           <!-- Progress bar -->
                           <div
                              class="relative w-full h-2 bg-surface-container rounded-full overflow-hidden cursor-pointer"
                              @click="selectProcessStep(Math.min(processSteps.length - 1, Math.floor($event.offsetX / $event.currentTarget.clientWidth * processSteps.length)))">
                              <div class="bg-tertiary-container h-full transition-all duration-300"
                                 :style="{ width: selectedStep.progressPct + '%' }"></div>
                           </div>

                           <!-- Controls -->
                           <div class="flex items-center justify-between pt-1 gap-3">
                              <div class="flex items-center gap-2">
                                 <button type="button" :disabled="currentStep === 0" title="Tahap Sebelumnya"
                                    class="w-8 h-8 rounded-full border border-outline-variant/60 flex items-center justify-center text-primary hover:border-gray-400 hover:bg-surface-container transition-colors disabled:opacity-40"
                                    @click="prevProcessStep">
                                    <span class="material-symbols-outlined text-[18px]">skip_previous</span>
                                 </button>

                                 <button type="button" :disabled="currentStep === processSteps.length - 1"
                                    title="Tahap Selanjutnya"
                                    class="w-8 h-8 rounded-full border border-outline-variant/60 flex items-center justify-center text-primary hover:border-gray-400 hover:bg-surface-container transition-colors disabled:opacity-40"
                                    @click="nextProcessStep">
                                    <span class="material-symbols-outlined text-[18px]">skip_next</span>
                                 </button>

                                 <span class="font-label-sm text-label-sm text-secondary ml-1">
                                    Tahap {{ currentStep + 1 }} dari {{ processSteps.length }}
                                 </span>
                              </div>

                              <!-- Quick dots -->
                              <div class="flex items-center gap-1.5">
                                 <button v-for="(step, index) in processSteps" :key="`dot-${step.id}`" type="button"
                                    :aria-label="`Beralih ke Tahap ${index + 1}`"
                                    :aria-current="index === currentStep ? 'step' : undefined"
                                    class="w-6 h-6 rounded-full text-xs font-semibold flex items-center justify-center transition-all"
                                    :class="index === currentStep
                                       ? 'bg-primary-container text-surface-bright shadow-sm scale-110'
                                       : 'bg-surface-container text-secondary hover:bg-surface-container-high'
                                       " @click="selectProcessStep(index)">
                                    {{ index + 1 }}
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
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