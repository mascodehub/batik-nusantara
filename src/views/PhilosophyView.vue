<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'


</script>

<template>
   <div class="flex flex-col w-full">
      <div class="relative w-full overflow-hidden bg-surface">
         <div class="absolute top-12 -right-24 w-96 h-96 pointer-events-none opacity-40">
            <svg class="w-full h-full text-secondary-container stroke-current fill-none" viewbox="0 0 200 200">
               <circle cx="100" cy="100" r="80" stroke-width="0.75"></circle>
               <circle cx="60" cy="100" r="40" stroke-dasharray="2 2" stroke-width="0.75"></circle>
               <circle cx="140" cy="100" r="40" stroke-dasharray="2 2" stroke-width="0.75"></circle>
               <circle cx="100" cy="60" r="40" stroke-dasharray="2 2" stroke-width="0.75"></circle>
               <circle cx="100" cy="140" r="40" stroke-dasharray="2 2" stroke-width="0.75"></circle>
            </svg>
         </div>

         <div class="segment-main max-w-[1320px] mx-auto px-margin-mobile md:px-margin pt-space-xl pb-space-lg">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-12 items-baseline">
               <div class="lg:col-span-8">
                  <span
                     class="inline-block font-label-md text-label-md text-tertiary-container tracking-widest uppercase mb-3">
                     Arsip Budaya &amp; Filosofi Wastra
                  </span>
                  <h1 class="font-headline-lg text-headline-lg text-primary leading-tight tracking-tight">
                     Filosofi Batik: Mengenal Makna di Balik Setiap Motif
                  </h1>
               </div>
               <div class="lg:col-span-4 flex flex-col justify-end">
                  <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                     Batik bukan sekadar torehan malam pada sehelai kain, melainkan kidung doa, kosmologi Jawa, dan laku
                     spiritual para empu pembatik. Setiap guratan garis dan kelopak memuat sandi moral yang
                     menghubungkan
                     manusia, alam semesta, dan Sang Khalik.
                  </p>
               </div>
            </div>
            <!-- Metadata Strip -->
            <div
               class="mt-space-xl pt-6 pb-6 bg-surface-container-low px-6 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6 text-on-surface">
               <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-secondary text-2xl">auto_stories</span>
                  <div>
                     <p class="font-label-sm text-label-sm text-outline uppercase tracking-wider">Kurasi Khusus</p>
                     <p class="font-title-md text-title-md text-primary">6 Motif Pusaka Nusantara</p>
                  </div>
               </div>
               <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-secondary text-2xl">history_edu</span>
                  <div>
                     <p class="font-label-sm text-label-sm text-outline uppercase tracking-wider">Sumber Arsip</p>
                     <p class="font-title-md text-title-md text-primary">Naskah Keraton &amp; Etnografi Wastra</p>
                  </div>
               </div>
               <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-secondary text-2xl">category</span>
                  <div>
                     <p class="font-label-sm text-label-sm text-outline uppercase tracking-wider">Klasifikasi Pola</p>
                     <p class="font-title-md text-title-md text-primary">Pakem Keraton &amp; Gaya Pesisiran</p>
                  </div>
               </div>
            </div>

         </div>

         <div class="segment-motif-spotlight max-w-[1320px] mx-auto px-margin-mobile md:px-margin my-space-xl">
            <div class="bg-surface-container-lowest rounded-lg p-6 lg:p-12 shadow-sm">
               <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <!-- Narrative Left Column -->
                  <div class="lg:col-span-6 flex flex-col justify-between h-full ">
                     <div>
                        <div class="flex items-center gap-3 mb-4">
                           <span
                              class="px-3 py-1 bg-surface-container-high rounded-full font-label-sm text-label-sm text-on-surface uppercase tracking-wider">Mahakarya
                              Unggulan</span>
                           <span class="text-outline font-label-sm text-label-sm">Awisan Dalem (Motif Larangan)</span>
                        </div>
                        <h2 class="font-headline-md text-headline-md text-primary mb-2">Parang Barong</h2>
                        <p class="font-label-md text-label-md text-secondary uppercase tracking-widest mb-6">
                           Keraton Surakarta &amp; Yogyakarta • Abad ke-16
                        </p>
                        <blockquote
                           class="pl-4 italic font-headline-sm text-headline-sm text-primary/90 leading-snug my-6">
                           “Garis diagonal Parang melambangkan ombak laut selatan yang tiada henti menerjang karang —
                           manifestasi keteguhan batin, kejernihan budi, dan semangat pantang menyerah seorang
                           pemimpin.”
                        </blockquote>
                        <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                           Diciptakan oleh Sultan Agung Hanyakrakusuma saat bermeditasi di tebing Pantai Selatan Jawa.
                           Bentuk
                           'S' yang saling menjalin tanpa terputus menyimbolkan kesinambungan hidup, pertalian darah
                           leluhur
                           yang tak pernah terputus, dan tanggung jawab memimpin masyarakat dengan welas asih.
                        </p>
                     </div>
                     <!-- Provenance & Anatomy Details -->
                     <div class="grid grid-cols-2 gap-4 bg-surface-container-low rounded-lg">
                        <div class="p-4">
                           <p class="font-label-sm text-label-sm text-outline uppercase tracking-wider">Pencipta</p>
                           <p class="font-title-md text-title-md text-primary">Sultan Agung Mataram</p>
                        </div>
                        <div class="p-4">
                           <p class="font-label-sm text-label-sm text-outline uppercase tracking-wider">Peruntukan</p>
                           <p class="font-title-md text-title-md text-primary">Raja &amp; Putra Mahkota</p>
                        </div>
                     </div>
                  </div>
                  <!-- Master Visual Right Column -->
                  <div class="lg:col-span-6 flex flex-col gap-4">
                     <div class="relative overflow-hidden rounded-lg aspect-[4/3] bg-surface-container">
                        <img class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                           data-alt="Editorial still life photograph of folded authentic handcrafted Indonesian batik cloth with classic dark soga and charcoal Parang Barong pattern resting on a warm teak studio desk beside traditional canting tools and natural clay dye bowls under soft window light"
                           src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYguEHg3g5WMtfiB4AWTPAzZ4pyPfNGV1xtBLEXU_jpGWnfSid1QXYfCIoMrl36ri9fXGSCCOjN_nCe15y_8TbToWF8zlb96Ilg8TFAZAZw6v1tTLkwHvWV_K3G5mOufDF0I0_kxu2v6nCfwG5qqRPTVKjW6fqafE5H7_vzlJ8d3u4965pWaFc-lo2zW-gdYmA7ClumDVz1OdOKuJKDONV7lnfw_ZygWqf1uBvviaRZtxrZTwgbMM" />
                        <div
                           class="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-sm p-4 rounded-md flex items-center justify-between">
                           <div>
                              <span
                                 class="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">Struktur
                                 Geometri</span>
                              <span class="font-title-md text-title-md text-primary">Lereng 45° dengan Isen Cecek
                                 Mlinjon</span>
                           </div>
                           <div
                              class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
                              <span class="material-symbols-outlined text-lg">nature</span>
                           </div>
                        </div>
                     </div>
                     <!-- Micro Explanations -->
                     <div class="grid grid-cols-3 gap-3 text-center">
                        <div class="p-3 bg-surface-container-low rounded-lg">
                           <span class="font-label-sm text-label-sm text-outline uppercase block">Garis Lereng</span>
                           <span class="font-body-sm text-body-sm text-primary font-medium">Arah Pendakian Rohani</span>
                        </div>
                        <div class="p-3 bg-surface-container-low rounded-lg">
                           <span class="font-label-sm text-label-sm text-outline uppercase block">Mlinjon</span>
                           <span class="font-body-sm text-body-sm text-primary font-medium">Keseimbangan Semesta</span>
                        </div>
                        <div class="p-3 bg-surface-container-low rounded-lg">
                           <span class="font-label-sm text-label-sm text-outline uppercase block">Canting Tulis</span>
                           <span class="font-body-sm text-body-sm text-primary font-medium">Konsentrasi
                              Pernapasan</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div class="segment-motif-title max-w-[1320px] mx-auto px-margin-mobile md:px-margin mt-space-2xl mb-space-md">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
               <div>
                  <span class="font-label-sm text-label-sm uppercase tracking-widest text-secondary block">Katalog
                     Ensiklopedia</span>
                  <h2 class="font-headline-md text-headline-md text-primary">Enam Ragam Motif Pusaka</h2>
               </div>
            </div>

         </div>

         <div class="segment-motif-chosen max-w-[1320px] mx-auto px-margin-mobile md:px-margin mb-space-2xl">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="motif-grid">
               <!-- Card 1: Parang -->
               <article
                  class="motif-card flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:bg-surface-container-low"
                  data-category="leadership">
                  <div class="relative aspect-[16/10] overflow-hidden bg-surface-container">
                     <img class="w-full h-full object-cover"
                        data-alt="Close up textile macro photograph of handmade classic Parang batik pattern on smooth woven silk displaying brown natural soga and deep indigo dye with precise diagonal continuous lines"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaDnRb4F6rLv1gcIw0qkazhjct4kEf3wgeMCl7zMH_AyYBTcZ1dts6f8r--mHrttkJAj694b31zXGBuohwB14ojKLtYWMrUX-jyreMj0WXQ3ms84S1Pq_SFyqjfqBJ7IaEmHArnbXkkAfAogn0J-GnZWOFjU26nK7x6UMEWeGv58XXvv7U64l2ubwYWcYC6VnFBhEp-DYvtflqOJLBwl-VJmDuSsaDqE1D1iiG0fMUjt8ONhASBbk" />
                     <span
                        class="absolute top-3 right-3 bg-surface/90 text-primary font-label-sm text-label-sm px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                        Keraton Mataram
                     </span>
                  </div>
                  <div class="p-6 flex flex-col flex-1 justify-between">
                     <div>
                        <div class="flex items-center justify-between mb-2">
                           <span
                              class="font-label-sm text-label-sm text-tertiary-container tracking-wider uppercase font-semibold">Motif
                              Pusaka I</span>
                           <span class="font-label-sm text-label-sm text-outline">Abad ke-16</span>
                        </div>
                        <h3 class="font-headline-sm text-headline-sm text-primary mb-3">Parang Rusak &amp; Barong</h3>
                        <p class="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-4">
                           Mengambil bentuk ombak laut yang tiada henti memecah karang. Melambangkan kesinambungan
                           perjuangan,
                           keteguhan hati pantang menyerah, dan kedalaman wibawa kepemimpinan.
                        </p>
                        <div class="space-y-2 mb-4 bg-surface-container p-3 rounded-md">
                           <div class="flex items-start gap-2">
                              <span class="material-symbols-outlined text-sm text-secondary mt-0.5">history</span>
                              <p class="font-body-sm text-body-sm text-on-surface"><span
                                    class="font-semibold">Sejarah:</span>
                                 Disusun Sultan Agung saat laku prihatin di pesisir selatan.</p>
                           </div>
                           <div class="flex items-start gap-2">
                              <span class="material-symbols-outlined text-sm text-secondary mt-0.5">verified</span>
                              <p class="font-body-sm text-body-sm text-on-surface"><span
                                    class="font-semibold">Konteks:</span>
                                 Busana agung kenegaraan &amp; penobatan.</p>
                           </div>
                        </div>
                     </div>
                     <div>
                        <div class="flex flex-wrap gap-1.5 mb-4">
                           <span
                              class="px-2.5 py-0.5 bg-surface-container-high rounded text-on-surface font-label-sm text-label-sm">Keteguhan</span>
                           <span
                              class="px-2.5 py-0.5 bg-surface-container-high rounded text-on-surface font-label-sm text-label-sm">Kepemimpinan</span>
                           <span
                              class="px-2.5 py-0.5 bg-surface-container-high rounded text-on-surface font-label-sm text-label-sm">Awisan
                              Dalem</span>
                        </div>
                        <button
                           class="w-full py-2.5 px-4 bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-label-md text-label-md rounded text-center transition-colors flex items-center justify-center gap-2"
                           onclick="openMotifModal('parang')">
                           <span>Pelajari Makna Lengkap</span>
                           <span class="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                     </div>
                  </div>
               </article>
               <!-- Card 2: Kawung -->
               <article
                  class="motif-card flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:bg-surface-container-low"
                  data-category="wisdom">
                  <div class="relative aspect-[16/10] overflow-hidden bg-surface-container">
                     <img class="w-full h-full object-cover"
                        data-alt="Overhead macro image of authentic Kawung batik textile showing four intersecting oval geometric fruit shapes with white and beige highlights over a deep umber brown natural dye background"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu0TWNx6g_BaA6bMdP2owMBuRVabBd2jSLydAIljxsy5Ib1Lk0TFWmoD26UebxIwpIRYubM_GWlsubxywMAlYm2p_X_q3tUbIzhvtSBJp7hteDWIQRfp2HrR5gPqu3jOKD7WNDMqXSGoFVP_poocZccl60zdin64mVpbTrqSqKn9hiPMzpaDJ84CkcvyoZcw8CJdk0TRI4HtllwHn_ns4pKoaAys-BycLjOioR7V4EqxUuYqIJtHY" />
                     <span
                        class="absolute top-3 right-3 bg-surface/90 text-primary font-label-sm text-label-sm px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                        Yogyakarta &amp; Solo
                     </span>
                  </div>
                  <div class="p-6 flex flex-col flex-1 justify-between">
                     <div>
                        <div class="flex items-center justify-between mb-2">
                           <span
                              class="font-label-sm text-label-sm text-tertiary-container tracking-wider uppercase font-semibold">Motif
                              Pusaka II</span>
                           <span class="font-label-sm text-label-sm text-outline">Abad ke-13</span>
                        </div>
                        <h3 class="font-headline-sm text-headline-sm text-primary mb-3">Kawung</h3>
                        <p class="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-4">
                           Terinspirasi dari penampang buah kolang-kaling (aren). Empat kelopak bersinggungan mewakili
                           ajaran
                           'Sedulur Papat Limo Pancer' serta pengendalian hawa nafsu dan kesucian hati.
                        </p>
                        <div class="space-y-2 mb-4 bg-surface-container p-3 rounded-md">
                           <div class="flex items-start gap-2">
                              <span class="material-symbols-outlined text-sm text-secondary mt-0.5">history</span>
                              <p class="font-body-sm text-body-sm text-on-surface"><span
                                    class="font-semibold">Sejarah:</span>
                                 Berakar dari masa Singasari-Majapahit, lestari di Keraton.</p>
                           </div>
                           <div class="flex items-start gap-2">
                              <span class="material-symbols-outlined text-sm text-secondary mt-0.5">verified</span>
                              <p class="font-body-sm text-body-sm text-on-surface"><span
                                    class="font-semibold">Konteks:</span>
                                 Cendekiawan, abdi dalem, etika integritas.</p>
                           </div>
                        </div>
                     </div>
                     <div>
                        <div class="flex flex-wrap gap-1.5 mb-4">
                           <span
                              class="px-2.5 py-0.5 bg-surface-container-high rounded text-on-surface font-label-sm text-label-sm">Kesucian
                              Hati</span>
                           <span
                              class="px-2.5 py-0.5 bg-surface-container-high rounded text-on-surface font-label-sm text-label-sm">Keadilan</span>
                           <span
                              class="px-2.5 py-0.5 bg-surface-container-high rounded text-on-surface font-label-sm text-label-sm">Pengendalian
                              Diri</span>
                        </div>
                        <button
                           class="w-full py-2.5 px-4 bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-label-md text-label-md rounded text-center transition-colors flex items-center justify-center gap-2"
                           onclick="openMotifModal('kawung')">
                           <span>Pelajari Makna Lengkap</span>
                           <span class="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                     </div>
                  </div>
               </article>
               <!-- Card 3: Mega Mendung -->
               <article
                  class="motif-card flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:bg-surface-container-low"
                  data-category="harmony">
                  <div class="relative aspect-[16/10] overflow-hidden bg-surface-container">
                     <img class="w-full h-full object-cover"
                        data-alt="Detailed horizontal flat lay of Cirebon Mega Mendung batik showing rich graduated layers of cloud motifs moving from deep navy indigo through sky blue and soft beige cream with smooth lines"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCix_sA3Yh6dSgrX4n3ley00XUKbLvFE3QCtbIr4jk-KJWbHnbgC_LKAdsqoPWDF2D8uQF8nijepIbBvW87YzGb6lXmEeGAQ04V4G0h0qFg6Lqiut6G6akeuD4LxlwqT7f05SdhdPDGuMQZJlp3_SJ-nkpdPjnPRNR3wfF9Cdxc8zFvSRMHFu8yYlcHVJgYS9Xd3qIZSW2-Ojcmti9Cf8S8m2tRQF6TXRDRywklVAb7ORz9TQ9vTa4" />
                     <span
                        class="absolute top-3 right-3 bg-surface/90 text-primary font-label-sm text-label-sm px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                        Pesisir Cirebon
                     </span>
                  </div>
                  <div class="p-6 flex flex-col flex-1 justify-between">
                     <div>
                        <div class="flex items-center justify-between mb-2">
                           <span
                              class="font-label-sm text-label-sm text-tertiary-container tracking-wider uppercase font-semibold">Motif
                              Pusaka III</span>
                           <span class="font-label-sm text-label-sm text-outline">Abad ke-15</span>
                        </div>
                        <h3 class="font-headline-sm text-headline-sm text-primary mb-3">Mega Mendung</h3>
                        <p class="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-4">
                           Gumpalan awan pembawa hujan penyejuk mayapada. Buah perpaduan keindahan estetika Tiongkok
                           dengan
                           nilai tasawuf, mengajarkan keluasan jiwa dan kesabaran meneduhkan amarah.
                        </p>
                        <div class="space-y-2 mb-4 bg-surface-container p-3 rounded-md">
                           <div class="flex items-start gap-2">
                              <span class="material-symbols-outlined text-sm text-secondary mt-0.5">history</span>
                              <p class="font-body-sm text-body-sm text-on-surface"><span
                                    class="font-semibold">Sejarah:</span>
                                 Akulturasi Sunan Gunung Jati dengan Putri Ong Tien.</p>
                           </div>
                           <div class="flex items-start gap-2">
                              <span class="material-symbols-outlined text-sm text-secondary mt-0.5">verified</span>
                              <p class="font-body-sm text-body-sm text-on-surface"><span
                                    class="font-semibold">Konteks:</span>
                                 Perayaan kultural, diplomasi, wastra prestise.</p>
                           </div>
                        </div>
                     </div>
                     <div>
                        <div class="flex flex-wrap gap-1.5 mb-4">
                           <span
                              class="px-2.5 py-0.5 bg-surface-container-high rounded text-on-surface font-label-sm text-label-sm">Kelapangan
                              Dada</span>
                           <span
                              class="px-2.5 py-0.5 bg-surface-container-high rounded text-on-surface font-label-sm text-label-sm">Akulturasi</span>
                           <span
                              class="px-2.5 py-0.5 bg-surface-container-high rounded text-on-surface font-label-sm text-label-sm">Peneduh
                              Jiwa</span>
                        </div>
                        <button
                           class="w-full py-2.5 px-4 bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-label-md text-label-md rounded text-center transition-colors flex items-center justify-center gap-2"
                           onclick="openMotifModal('megamendung')">
                           <span>Pelajari Makna Lengkap</span>
                           <span class="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                     </div>
                  </div>
               </article>
               <!-- Card 4: Truntum -->
               <article
                  class="motif-card flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:bg-surface-container-low"
                  data-category="love">
                  <div class="relative aspect-[16/10] overflow-hidden bg-surface-container">
                     <img class="w-full h-full object-cover"
                        data-alt="Intricate studio capture of Truntum batik motif fabric featuring delicate geometric star and floral clusters sprinkled uniformly across a dark charcoal background resembling a clear midnight constellation"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSC-nRkCnt2uUI5Ps0G2acW1lKZmWr4OpRWOi80YltSuyZPmwhgbJTCFp8vFOzQeTttC0AijxCE_d22KsOmqXhECzpLDntg3HDkvTHEBYdPrB50IlUC_V7oYmt-Hn3f2y42bfqid6HhgrnFwGwqPjUvmEVtmW5WpKolvOc9-Ec5wnBR2KmXbnxjchYhNGdHYSiPh6jr6P8hl5OxQv6S342zMBvZy3TqKenVZKl5GlYbCijhDLQGoY" />
                     <span
                        class="absolute top-3 right-3 bg-surface/90 text-primary font-label-sm text-label-sm px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                        Kasunanan Surakarta
                     </span>
                  </div>
                  <div class="p-6 flex flex-col flex-1 justify-between">
                     <div>
                        <div class="flex items-center justify-between mb-2">
                           <span
                              class="font-label-sm text-label-sm text-tertiary-container tracking-wider uppercase font-semibold">Motif
                              Pusaka IV</span>
                           <span class="font-label-sm text-label-sm text-outline">Abad ke-18</span>
                        </div>
                        <h3 class="font-headline-sm text-headline-sm text-primary mb-3">Truntum</h3>
                        <p class="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-4">
                           Dari kata 'tumaruntum' bermakna bersemi kembali. Bintang-bintang kecil yang diciptakan sang
                           permaisuri dalam sunyi malam, menjadi simbol cinta tulus tanpa syarat yang abadi.
                        </p>
                        <div class="space-y-2 mb-4 bg-surface-container p-3 rounded-md">
                           <div class="flex items-start gap-2">
                              <span class="material-symbols-outlined text-sm text-secondary mt-0.5">history</span>
                              <p class="font-body-sm text-body-sm text-on-surface"><span
                                    class="font-semibold">Sejarah:</span>
                                 Digubah Kanjeng Ratu Kencana (Pakubuwono III).</p>
                           </div>
                           <div class="flex items-start gap-2">
                              <span class="material-symbols-outlined text-sm text-secondary mt-0.5">verified</span>
                              <p class="font-body-sm text-body-sm text-on-surface"><span
                                    class="font-semibold">Konteks:</span>
                                 Dikenakan orang tua pengantin dalam temu manten.</p>
                           </div>
                        </div>
                     </div>
                     <div>
                        <div class="flex flex-wrap gap-1.5 mb-4">
                           <span
                              class="px-2.5 py-0.5 bg-surface-container-high rounded text-on-surface font-label-sm text-label-sm">Cinta
                              Sejati</span>
                           <span
                              class="px-2.5 py-0.5 bg-surface-container-high rounded text-on-surface font-label-sm text-label-sm">Restu
                              Orang Tua</span>
                           <span
                              class="px-2.5 py-0.5 bg-surface-container-high rounded text-on-surface font-label-sm text-label-sm">Pernikahan
                              Adat</span>
                        </div>
                        <button
                           class="w-full py-2.5 px-4 bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-label-md text-label-md rounded text-center transition-colors flex items-center justify-center gap-2"
                           onclick="openMotifModal('truntum')">
                           <span>Pelajari Makna Lengkap</span>
                           <span class="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                     </div>
                  </div>
               </article>
               <!-- Card 5: Sekar Jagad -->
               <article
                  class="motif-card flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:bg-surface-container-low"
                  data-category="harmony">
                  <div class="relative aspect-[16/10] overflow-hidden bg-surface-container">
                     <img class="w-full h-full object-cover"
                        data-alt="Editorial photograph of Sekar Jagad batik textile displaying an assemblage of varied patchwork-like floral and geometric island motifs dyed in warm terracotta soga and off-white wax resist lines"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRv8IDiB5zv1q2yZRihRJ_MPn-Jk13oSLG_Y9m7EFt4iuPIlyLnyxK3mVnWQBjwg6Vv7gXQ7JhkKNV_yakBoM2zkM5LKQqJ5HfM_wuwola_SrMasbHWGWbOiVJ-os3p-ibXZCFjo_FzUH99WUxzdGHcuedeVXEJHFIPVvwVQUBZ7NDRSnOsfbsAlHCPOxAr4zcGrKNTxRDGq367bvxMi-XvCi30KpJYY1IsW4yuag7mpX3PK8GHXE" />
                     <span
                        class="absolute top-3 right-3 bg-surface/90 text-primary font-label-sm text-label-sm px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                        Yogyakarta &amp; Solo
                     </span>
                  </div>
                  <div class="p-6 flex flex-col flex-1 justify-between">
                     <div>
                        <div class="flex items-center justify-between mb-2">
                           <span
                              class="font-label-sm text-label-sm text-tertiary-container tracking-wider uppercase font-semibold">Motif
                              Pusaka V</span>
                           <span class="font-label-sm text-label-sm text-outline">Abad ke-18</span>
                        </div>
                        <h3 class="font-headline-sm text-headline-sm text-primary mb-3">Sekar Jagad</h3>
                        <p class="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-4">
                           Bermakna 'Bunga Dunia' atau peta keberagaman semesta ('kar' peta, 'jagad' jagat raya).
                           Menampilkan
                           mosaik ragam ornamen Nusantara yang dipersatukan dalam keanggunan.
                        </p>
                        <div class="space-y-2 mb-4 bg-surface-container p-3 rounded-md">
                           <div class="flex items-start gap-2">
                              <span class="material-symbols-outlined text-sm text-secondary mt-0.5">history</span>
                              <p class="font-body-sm text-body-sm text-on-surface"><span
                                    class="font-semibold">Sejarah:</span>
                                 Manifestasi kebhinnekaan lanskap pulau Nusantara.</p>
                           </div>
                           <div class="flex items-start gap-2">
                              <span class="material-symbols-outlined text-sm text-secondary mt-0.5">verified</span>
                              <p class="font-body-sm text-body-sm text-on-surface"><span
                                    class="font-semibold">Konteks:</span>
                                 Perayaan syukur, jamuan kenegaraan multikultural.</p>
                           </div>
                        </div>
                     </div>
                     <div>
                        <div class="flex flex-wrap gap-1.5 mb-4">
                           <span
                              class="px-2.5 py-0.5 bg-surface-container-high rounded text-on-surface font-label-sm text-label-sm">Kebhinnekaan</span>
                           <span
                              class="px-2.5 py-0.5 bg-surface-container-high rounded text-on-surface font-label-sm text-label-sm">Peta
                              Semesta</span>
                           <span
                              class="px-2.5 py-0.5 bg-surface-container-high rounded text-on-surface font-label-sm text-label-sm">Syukur
                              Raya</span>
                        </div>
                        <button
                           class="w-full py-2.5 px-4 bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-label-md text-label-md rounded text-center transition-colors flex items-center justify-center gap-2"
                           onclick="openMotifModal('sekarjagad')">
                           <span>Pelajari Makna Lengkap</span>
                           <span class="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                     </div>
                  </div>
               </article>
               <!-- Card 6: Sido Mukti -->
               <article
                  class="motif-card flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:bg-surface-container-low"
                  data-category="love">
                  <div class="relative aspect-[16/10] overflow-hidden bg-surface-container">
                     <img class="w-full h-full object-cover"
                        data-alt="Macro view of traditional Sido Mukti batik fabric featuring delicate butterfly motifs wing ornaments and jewel-like symmetric house shapes hand-drawn in authentic soga brown and gold accents"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYH-t1jC3EpFbY9063HS0XrmyRgnyFmK6_6GWl_aev5IgbAKKdpihb9riXQpHlkwG-peJEV6zsn-LNFf9_N_Qat1BxXXx1JtH3HkVLWUj1QYJf4jS-WHwzjH40OHANbEm9nIIW1hVpfjxxRyfdI_gsGKx64MFkJyoKZuCp1zYLhiU4STwnhfIaoeynf6PaTjiEimQ0N9_Q7KKd2eDUqhwHyVxEi0YS4rdvnamVNiJfHWu_cSu6Mno" />
                     <span
                        class="absolute top-3 right-3 bg-surface/90 text-primary font-label-sm text-label-sm px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                        Surakarta
                     </span>
                  </div>
                  <div class="p-6 flex flex-col flex-1 justify-between">
                     <div>
                        <div class="flex items-center justify-between mb-2">
                           <span
                              class="font-label-sm text-label-sm text-tertiary-container tracking-wider uppercase font-semibold">Motif
                              Pusaka VI</span>
                           <span class="font-label-sm text-label-sm text-outline">Pakem Tradisi</span>
                        </div>
                        <h3 class="font-headline-sm text-headline-sm text-primary mb-3">Sido Mukti &amp; Sido Asih</h3>
                        <p class="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-4">
                           'Sido' bermakna senantiasa terwujud, 'Mukti' bermakna kemuliaan sejati. Dihiasi motif
                           kupu-kupu dan
                           singgasana, mendoakan kedua insan menggapai keluhuran lahir dan batin.
                        </p>
                        <div class="space-y-2 mb-4 bg-surface-container p-3 rounded-md">
                           <div class="flex items-start gap-2">
                              <span class="material-symbols-outlined text-sm text-secondary mt-0.5">history</span>
                              <p class="font-body-sm text-body-sm text-on-surface"><span
                                    class="font-semibold">Sejarah:</span>
                                 Ritus sakral daur hidup manusia (life cycle rites).</p>
                           </div>
                           <div class="flex items-start gap-2">
                              <span class="material-symbols-outlined text-sm text-secondary mt-0.5">verified</span>
                              <p class="font-body-sm text-body-sm text-on-surface"><span
                                    class="font-semibold">Konteks:</span>
                                 Busana wajib akad nikah dan resepsi panggih Jawa.</p>
                           </div>
                        </div>
                     </div>
                     <div>
                        <div class="flex flex-wrap gap-1.5 mb-4">
                           <span
                              class="px-2.5 py-0.5 bg-surface-container-high rounded text-on-surface font-label-sm text-label-sm">Kemuliaan
                              Hidup</span>
                           <span
                              class="px-2.5 py-0.5 bg-surface-container-high rounded text-on-surface font-label-sm text-label-sm">Akad
                              Nikah</span>
                           <span
                              class="px-2.5 py-0.5 bg-surface-container-high rounded text-on-surface font-label-sm text-label-sm">Doa
                              Abadi</span>
                        </div>
                        <button
                           class="w-full py-2.5 px-4 bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-label-md text-label-md rounded text-center transition-colors flex items-center justify-center gap-2"
                           onclick="openMotifModal('sidomukti')">
                           <span>Pelajari Makna Lengkap</span>
                           <span class="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                     </div>
                  </div>
               </article>
            </div>
         </div>

         <div class="segment-trilogy w-full bg-surface-container-low py-space-2xl">
            <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
               <div class="max-w-2xl mx-auto text-center mb-space-xl">
                  <span class="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-2">
                     Struktur Kosmologis Sehelai Kain
                  </span>
                  <h2 class="font-headline-lg text-headline-lg text-primary tracking-tight mb-4">
                     Tiga Tingkatan Makna Wastra (Trilogi Filosofis)
                  </h2>
                  <p class="font-body-md text-body-md text-on-surface-variant">
                     Setiap lembar kain batik klasik dirancang mengikuti tiga kesatuan kosmik yang mencerminkan harmoni
                     diri
                     dengan semesta dan Sang Pencipta.
                  </p>
               </div>
               <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <!-- Element 1 -->
                  <div class="bg-surface-container-lowest p-8 rounded-lg flex flex-col justify-between shadow-sm">
                     <div>
                        <div
                           class="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-6">
                           <span class="font-headline-sm text-headline-sm font-semibold">I</span>
                        </div>
                        <h3 class="font-headline-sm text-headline-sm text-primary mb-3">Ornamen Utama</h3>
                        <p
                           class="font-label-sm text-label-sm text-tertiary-container uppercase tracking-wider mb-4 font-semibold">
                           Ragam Hias Pokok</p>
                        <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                           Merupakan poros dari doa yang dihaturkan. Melambangkan niat dasar penggunanya—seperti garuda
                           (kejayaan), pohon hayat (kehidupan abadi), atau lidah api (kekuatan batin).
                        </p>
                     </div>
                     <div class="mt-6 pt-4 bg-surface-container-low p-3 rounded">
                        <span class="font-label-sm text-label-sm text-outline block mb-1">Peran Spiritual</span>
                        <span class="font-body-sm text-body-sm text-primary font-medium">Kalam doa &amp; identitas
                           pemakai</span>
                     </div>
                  </div>
                  <!-- Element 2 -->
                  <div class="bg-surface-container-lowest p-8 rounded-lg flex flex-col justify-between shadow-sm">
                     <div>
                        <div
                           class="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-6">
                           <span class="font-headline-sm text-headline-sm font-semibold">II</span>
                        </div>
                        <h3 class="font-headline-sm text-headline-sm text-primary mb-3">Isen-Isen</h3>
                        <p
                           class="font-label-sm text-label-sm text-tertiary-container uppercase tracking-wider mb-4 font-semibold">
                           Tekstur Pengisi Ruang</p>
                        <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                           Titik-titik (cecek) dan arsiran halus (sawut) yang membutuhkan ribuan sentuhan canting.
                           Menguji
                           kesabaran tanpa batas, ketekunan cipta, dan keheningan batin sang perajin.
                        </p>
                     </div>
                     <div class="mt-6 pt-4 bg-surface-container-low p-3 rounded">
                        <span class="font-label-sm text-label-sm text-outline block mb-1">Peran Spiritual</span>
                        <span class="font-body-sm text-body-sm text-primary font-medium">Laku tapa raga &amp; ketelitian
                           mikrokosmos</span>
                     </div>
                  </div>
                  <!-- Element 3 -->
                  <div class="bg-surface-container-lowest p-8 rounded-lg flex flex-col justify-between shadow-sm">
                     <div>
                        <div
                           class="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-6">
                           <span class="font-headline-sm text-headline-sm font-semibold">III</span>
                        </div>
                        <h3 class="font-headline-sm text-headline-sm text-primary mb-3">Pinggiran (Tumpal)</h3>
                        <p
                           class="font-label-sm text-label-sm text-tertiary-container uppercase tracking-wider mb-4 font-semibold">
                           Garis Batas Etika</p>
                        <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                           Bingkai pembatas pada tepian kain yang mengingatkan manusia akan batas-batas moral, adab
                           pergaulan,
                           dan rasa hormat terhadap tata karma kehidupan bermasyarakat.
                        </p>
                     </div>
                     <div class="mt-6 pt-4 bg-surface-container-low p-3 rounded">
                        <span class="font-label-sm text-label-sm text-outline block mb-1">Peran Spiritual</span>
                        <span class="font-body-sm text-body-sm text-primary font-medium">Penjaga tata susila &amp; etika
                           adiluhung</span>
                     </div>
                  </div>
               </div>
            </div>

         </div>

         <div class="segment-quote max-w-[1320px] mx-auto px-margin-mobile md:px-margin my-space-2xl">
            <div
               class="relative rounded-lg overflow-hidden bg-primary-container text-surface p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
               <div class="max-w-2xl">
                  <span
                     class="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container block mb-3">
                     Ajaran Luhur Pembatik Sepuh
                  </span>
                  <p class="font-headline-md text-headline-md text-surface-bright leading-relaxed">
                     “Nyanting iku kaya ndedonga. Nalika malam tumetes ing mori, napas kudu ajeg, rasa kudu resik, lan
                     ati
                     mung sumarah marang Gusti.”
                  </p>
                  <p class="mt-4 font-body-sm text-body-sm text-outline-variant">
                     (Membatik itu laksana memanjatkan doa. Ketika malam menetes di kain mori, napas harus teratur,
                     batin
                     jernih, dan hati berserah seutuhnya).
                  </p>
               </div>
               <div class="flex-shrink-0 text-center lg:text-right">
                  <div class="inline-block p-4 bg-primary rounded-lg text-surface-bright">
                     <span class="font-display-xl text-display-xl font-serif leading-none block">100+</span>
                     <span
                        class="font-label-sm text-label-sm uppercase tracking-wider text-outline-variant block mt-1">Hari
                        Pengerjaan Sehelai Tulis</span>
                  </div>
               </div>
            </div>
         </div>

         <div class="segment-cta w-full bg-primary-container text-surface-container-low py-space-2xl">
            <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
               <div class="max-w-3xl mx-auto text-center flex flex-col items-center">
                  <span class="font-label-sm text-label-sm text-on-tertiary-container tracking-widest uppercase mb-3">
                     Konsultasi Filosofi &amp; Custom Wastra
                  </span>
                  <h2 class="font-headline-lg text-headline-lg text-surface-bright leading-tight mb-4">
                     Ingin Menghidupkan Filosofi Tertentu ke dalam Wastra Anda?
                  </h2>
                  <p class="font-body-lg text-body-lg text-outline-variant mb-8 leading-relaxed">
                     Tim kurator budaya dan maestro batik Batik Nusantara siap mendampingi Anda memilih atau merancang motif
                     pakem
                     yang merefleksikan nilai personal, momen pernikahan suci, maupun lambang kehormatan keluarga.
                  </p>
                  <div class="flex flex-col sm:flex-row items-center gap-4">
                     <a class="w-full sm:w-auto px-8 py-3.5 bg-secondary-container text-primary font-label-lg text-label-lg rounded hover:bg-surface-bright transition-colors font-semibold"
                        href="contact">
                        Konsultasi Makna Motif
                     </a>
                     <a class="w-full sm:w-auto px-8 py-3.5 bg-transparent border-none text-surface-bright hover:text-white font-label-lg text-label-lg transition-colors flex items-center justify-center gap-2"
                        href="gallery">
                        <span>Jelajahi Galeri Karya</span>
                        <span class="material-symbols-outlined text-sm">east</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>

      </div>
   </div>
</template>