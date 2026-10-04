<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'


</script>

<template>
   <div class="flex flex-col w-full">

      <div class="segment-main w-full bg-surface pt-space-xl pb-space-2xl">
         <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
            <!-- Editorial Title Block -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end mb-space-2xl">
               <div class="lg:col-span-8 flex flex-col gap-space-sm">
                  <span
                     class="font-label-sm uppercase tracking-[0.2em] text-on-tertiary-container font-semibold">Dedikasi,
                     Kepercayaan &amp; Jejak Wastra</span>
                  <h1 class="font-headline-lg text-headline-lg text-primary leading-tight">Apa Kata Pelanggan Kami</h1>
                  <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-light mt-space-xs">
                     Dari adibusana pernikahan sakral, cinderamata kenegaraan, hingga seragam identitas korporat
                     terkemuka—setiap helai wastra Batik Nusantara ditenun dengan doa, presisi, dan rasa hormat terhadap
                     kepercayaan
                     Anda.
                  </p>
               </div>
               <div class="lg:col-span-4 flex justify-start lg:justify-end pb-space-xs">
                  <div
                     class="inline-flex items-center gap-space-xs px-space-md py-space-sm bg-surface-container-low rounded-sm">
                     <span class="material-symbols-outlined text-[18px] text-on-tertiary-container">verified_user</span>
                     <span class="font-label-md uppercase tracking-wider text-secondary">Terverifikasi Dewan Kerajinan
                        Budaya</span>
                  </div>
               </div>
            </div>
            <!-- Trust Summary Metrics Bar -->
            <div
               class="grid grid-cols-2 md:grid-cols-4 gap-space-md bg-surface-container-lowest p-space-lg rounded-sm shadow-sm">
               <div class="flex flex-col gap-space-xs pr-space-md">
                  <span class="font-label-sm uppercase tracking-wider text-outline">Kepuasan Klien</span>
                  <div class="flex items-baseline gap-space-xs">
                     <span class="font-headline-md text-headline-md text-primary font-serif">99.4%</span>
                     <span class="font-label-sm text-on-tertiary-container">Indeks Bintang 5</span>
                  </div>
                  <span class="font-body-sm text-body-sm text-on-surface-variant">Dari 1.200+ klien bespoke</span>
               </div>
               <div class="flex flex-col gap-space-xs pr-space-md">
                  <span class="font-label-sm uppercase tracking-wider text-outline">Karya Terwujud</span>
                  <div class="flex items-baseline gap-space-xs">
                     <span class="font-headline-md text-headline-md text-primary font-serif">450+</span>
                     <span class="font-label-sm text-secondary">Busana</span>
                  </div>
                  <span class="font-body-sm text-body-sm text-on-surface-variant">Adibusana pernikahan &amp;
                     malam</span>
               </div>
               <div class="flex flex-col gap-space-xs pr-space-md">
                  <span class="font-label-sm uppercase tracking-wider text-outline">Kemitraan Resmi</span>
                  <div class="flex items-baseline gap-space-xs">
                     <span class="font-headline-md text-headline-md text-primary font-serif">85+</span>
                     <span class="font-label-sm text-secondary">Instansi</span>
                  </div>
                  <span class="font-body-sm text-body-sm text-on-surface-variant">Lembaga, BUMN &amp; swasta
                     nasional</span>
               </div>
               <div class="flex flex-col gap-space-xs">
                  <span class="font-label-sm uppercase tracking-wider text-outline">Autentisitas Kain</span>
                  <div class="flex items-baseline gap-space-xs">
                     <span class="font-headline-md text-headline-md text-primary font-serif">100%</span>
                     <span class="font-label-sm text-on-tertiary-container">Sertifikasi</span>
                  </div>
                  <span class="font-body-sm text-body-sm text-on-surface-variant">Batik Tulis &amp; pewarna alami</span>
               </div>
            </div>
         </div>
      </div>

      <div class="segment-highlight w-full bg-surface-container-low py-space-2xl">
         <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
            <div class="flex items-center justify-between mb-space-lg">
               <div class="flex items-center gap-space-xs">
                  <span class="w-2.5 h-2.5 bg-on-tertiary-container rounded-full inline-block"></span>
                  <span class="font-label-md uppercase tracking-[0.16em] text-secondary font-semibold">Sorotan Khusus •
                     Diplomasi Budaya</span>
               </div>
               <span class="font-label-sm uppercase tracking-wider text-outline hidden sm:inline-block">Arsip Protokol
                  Kenegaraan</span>
            </div>
            <div
               class="bg-surface-container-lowest rounded-sm overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
               <!-- Visual & Project Meta (Col 1-5) -->
               <div class="lg:col-span-5 relative flex flex-col justify-between p-space-xl bg-surface-container">
                  <div class="relative w-full aspect-[4/3] rounded-sm overflow-hidden mb-space-lg">
                     <img class="w-full h-full object-cover"
                        data-alt="Distinguished Indonesian female diplomat in high-ranking state formal attire wearing an exquisite mahogany natural-dyed silk batik shawl with Parang Barong motif, standing inside a warm wooden-panelled diplomatic hall with soft natural morning light and gentle cultural atmosphere."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4u4qi5_kXBDf9slz0AXSwrCVAejD5lYVnHN9ZwyuRaIVkdilbzYDnDBYbhj4wOGX69kYFtoS1jlO8DyxU9_04bhIJSs7NtvSYlWAl0Q8CT6ZEZmSEQCjku9000G8tz9MODT5LZT_TRFleJa8HmenlvDONSDPdHXhMbCA-0VOUNsnP36xFamJVUj3W5kvuvgOBGRrPqOrLUT5L-vFBjDOyHVr3WqrZCPhpynKFbk-1j-XlaVuox3g" />
                     <div
                        class="absolute bottom-3 left-3 bg-primary/80 backdrop-blur-sm text-on-primary px-space-sm py-1 rounded-sm text-label-sm font-label-sm tracking-wider uppercase">
                        Dokumentasi Protokol Bilateral
                     </div>
                  </div>
                  <div class="flex flex-col gap-space-sm">
                     <div class="flex items-center gap-space-xs text-on-tertiary-container">
                        <span class="material-symbols-outlined text-[18px]">verified</span>
                        <span class="font-label-sm uppercase tracking-widest font-semibold">Klien Terverifikasi
                           Instansi</span>
                     </div>
                     <h4 class="font-title-lg text-title-lg text-primary">Dra. Siti Nurhaliza Wardani, M.Si.</h4>
                     <p class="font-body-sm text-body-sm text-on-surface-variant">Deputi Bidang Hubungan Luar Negeri
                        &amp;
                        Protokol Kenegaraan RI</p>
                     <div class="mt-space-sm pt-space-sm bg-surface-container-lowest/60 p-space-sm rounded-sm">
                        <div class="text-label-sm uppercase tracking-wider text-outline mb-0.5 font-label-sm">Karya
                           Pesanan:
                        </div>
                        <div class="font-label-md text-label-md text-primary font-medium">Paket Cinderamata Kenegaraan
                           &amp;
                           Selendang Sutra Tulis (60 Set)</div>
                     </div>
                  </div>
               </div>
               <!-- Quote Content (Col 6-12) -->
               <div class="lg:col-span-7 p-space-xl lg:p-space-2xl flex flex-col justify-between">
                  <div>
                     <div class="flex items-center justify-between mb-space-lg">
                        <div class="flex items-center text-[#c6724d] gap-1">
                           <span class="material-symbols-outlined text-[20px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[20px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[20px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[20px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[20px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="ml-2 font-label-md text-label-md font-semibold text-primary">5.0 / 5.0</span>
                        </div>
                        <span class="font-label-sm uppercase tracking-widest text-outline">Kuartal IV • 2025</span>
                     </div>
                     <blockquote
                        class="font-headline-md text-headline-md text-primary leading-relaxed font-serif italic mb-space-lg">
                        “Wastra batik tulis Batik Nusantara bukan sekadar souvenir, melainkan duta diplomasi budaya Indonesia.
                        Ketelitian motif Parang Barong dan kehalusan sutra ATBM dengan pewarna alami mahoni memukau para
                        delegasi kehormatan internasional pada perhelatan bilateral. Kemasan kotak kayu jati berukir dan
                        sertifikat filosofisnya mencerminkan standar etika luhur bangsa kita.”
                     </blockquote>
                     <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        Seluruh proses pengerjaan 60 helai wastra sutra berukuran 250 x 55 cm dikerjakan oleh paguyuban
                        pembatik maestro di Imogiri, diselesaikan tepat kurun waktu 90 hari kalender dengan uji
                        konsistensi
                        pewarnaan lab tanpa cacat.
                     </p>
                  </div>
                  <div
                     class="flex flex-wrap items-center justify-between gap-space-md pt-space-lg mt-space-lg bg-surface-container-low/40 p-space-md rounded-sm">
                     <div class="flex items-center gap-space-md">
                        <div
                           class="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-serif text-title-md">
                           SN
                        </div>
                        <div class="flex flex-col">
                           <span class="font-label-md text-label-md text-primary font-semibold">Protokol
                              Kenegaraan</span>
                           <span class="font-body-sm text-body-sm text-outline">Jakarta Pusat • Kunjungan Delegasi
                              G20</span>
                        </div>
                     </div>
                     <div
                        class="inline-flex items-center gap-space-xs text-on-tertiary-container font-label-md text-label-md font-medium">
                        <span class="material-symbols-outlined text-[18px]">verified</span>
                        <span>Dokumen Serah Terima Resmi #DL-8841</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="segment-testimonial-card w-full bg-surface py-space-2xl">
         <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
            <!-- Section Header & Filter Navigation -->
            <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg mb-space-xl">
               <div class="flex flex-col gap-space-xs">
                  <span
                     class="font-label-sm uppercase tracking-[0.16em] text-on-tertiary-container font-semibold">Kurasi
                     Ulasan Pelanggan</span>
                  <h2 class="font-headline-lg text-headline-lg text-primary font-serif">Kisah Nyata Dari Pemilik Wastra
                  </h2>
               </div>
            </div>
            <!-- 6 Testimonial Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg" id="testimonial-grid">
               <!-- Card 1: Adibusana Pernikahan -->
               <div
                  class="testimonial-card flex flex-col justify-between p-space-xl bg-surface-container-lowest rounded-sm shadow-sm transition-all hover:bg-surface-container-low"
                  data-category="adibusana">
                  <div>
                     <div class="flex items-center justify-between mb-space-md">
                        <span
                           class="px-2.5 py-1 bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm tracking-wider uppercase rounded-sm">
                           Bespoke Adibusana Pernikahan
                        </span>
                        <div class="flex items-center text-[#c6724d] gap-0.5">
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                        </div>
                     </div>
                     <p class="font-body-md text-body-md text-primary leading-relaxed mb-space-lg">
                        “Memesan gaun malam dan beskap dengan motif Sido Mukti &amp; Truntum di Batik Nusantara adalah
                        keputusan
                        terbaik kami. Tim kurator membimbing kami memahami filosofi di balik setiap goresan canting.
                        Fitting
                        presisi 28 titik membuat kain jatuh dengan begitu agung dan nyaman sepanjang malam resepsi.”
                     </p>
                  </div>
                  <div
                     class="flex items-center gap-space-md pt-space-md bg-surface-container/30 -mx-space-xl -mb-space-xl px-space-xl py-space-md">
                     <div
                        class="w-11 h-11 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-serif text-title-md shrink-0">
                        AS
                     </div>
                     <div class="flex flex-col min-w-0">
                        <span class="font-title-md text-title-md text-primary truncate">dr. Adrian Santoso &amp; drg.
                           Clara</span>
                        <span class="font-body-sm text-body-sm text-outline truncate">Resepsi Adat Jawa • Dharmawangsa,
                           Jakarta</span>
                     </div>
                  </div>
               </div>
               <!-- Card 2: Korporat -->
               <div
                  class="testimonial-card flex flex-col justify-between p-space-xl bg-surface-container-lowest rounded-sm shadow-sm transition-all hover:bg-surface-container-low"
                  data-category="korporat">
                  <div>
                     <div class="flex items-center justify-between mb-space-md">
                        <span
                           class="px-2.5 py-1 bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase rounded-sm">
                           Pengadaan Seragam Korporat
                        </span>
                        <div class="flex items-center text-[#c6724d] gap-0.5">
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                        </div>
                     </div>
                     <p class="font-body-md text-body-md text-primary leading-relaxed mb-space-lg">
                        “Pengadaan 1.200 meter kain seragam batik cap kombinasi tulis untuk peringatan 25 tahun
                        perusahaan
                        selesai tepat waktu dengan konsistensi warna celup lab Delta E &lt; 0.8 yang luar biasa.
                        Karyawan kami
                        sangat bangga mengenakan seragam yang memiliki nilai seni dan bahan katun primissima yang adem.”
                     </p>
                  </div>
                  <div
                     class="flex items-center gap-space-md pt-space-md bg-surface-container/30 -mx-space-xl -mb-space-xl px-space-xl py-space-md">
                     <div
                        class="w-11 h-11 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-serif text-title-md shrink-0">
                        RH
                     </div>
                     <div class="flex flex-col min-w-0">
                        <span class="font-title-md text-title-md text-primary truncate">Raditya Hartono, S.T.</span>
                        <span class="font-body-sm text-body-sm text-outline truncate">Head of Corp Comm • PT Samudera
                           Energi
                           Tbk</span>
                     </div>
                  </div>
               </div>
               <!-- Card 3: Kolektor Wastra -->
               <div
                  class="testimonial-card flex flex-col justify-between p-space-xl bg-surface-container-lowest rounded-sm shadow-sm transition-all hover:bg-surface-container-low"
                  data-category="kolektor">
                  <div>
                     <div class="flex items-center justify-between mb-space-md">
                        <span
                           class="px-2.5 py-1 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm tracking-wider uppercase rounded-sm">
                           Koleksi Tulis Maestro Parang
                        </span>
                        <div class="flex items-center text-[#c6724d] gap-0.5">
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                        </div>
                     </div>
                     <p class="font-body-md text-body-md text-primary leading-relaxed mb-space-lg">
                        “Autentisitas batik tulis Batik Nusantara sangat murni. Isen cecek mlinjon dan cecek sawut-nya begitu
                        rapi
                        dan tembus sempurna di kedua sisi mori. Menggunakan 100% ekstrak tingi dan jolawe tanpa pewarna
                        sintetis. Jarang sekali menemukan jenama modern yang tetap teguh menjaga pakem luhur seperti
                        ini.”
                     </p>
                  </div>
                  <div
                     class="flex items-center gap-space-md pt-space-md bg-surface-container/30 -mx-space-xl -mb-space-xl px-space-xl py-space-md">
                     <div
                        class="w-11 h-11 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-serif text-title-md shrink-0">
                        BW
                     </div>
                     <div class="flex flex-col min-w-0">
                        <span class="font-title-md text-title-md text-primary truncate">Prof. Bambang Wibowo,
                           Ph.D.</span>
                        <span class="font-body-sm text-body-sm text-outline truncate">Dosen Etnografi &amp; Kolektor
                           Wastra
                           Klasik</span>
                     </div>
                  </div>
               </div>
               <!-- Card 4: Cinderamata Kehormatan -->
               <div
                  class="testimonial-card flex flex-col justify-between p-space-xl bg-surface-container-lowest rounded-sm shadow-sm transition-all hover:bg-surface-container-low"
                  data-category="cinderamata">
                  <div>
                     <div class="flex items-center justify-between mb-space-md">
                        <span
                           class="px-2.5 py-1 bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm tracking-wider uppercase rounded-sm">
                           Cinderamata Kehormatan VIP
                        </span>
                        <div class="flex items-center text-[#c6724d] gap-0.5">
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                        </div>
                     </div>
                     <p class="font-body-md text-body-md text-primary leading-relaxed mb-space-lg">
                        “Kotak cinderamata kayu jati VIP dengan selendang sutra Sekar Jagad menjadi bingkisan resmi yang
                        sangat prestisius bagi tamu kehormatan yayasan kami dari Jepang dan Perancis. Narasi filosofis
                        dwibahasa di dalamnya memberikan kesan mendalam.”
                     </p>
                  </div>
                  <div
                     class="flex items-center gap-space-md pt-space-md bg-surface-container/30 -mx-space-xl -mb-space-xl px-space-xl py-space-md">
                     <div
                        class="w-11 h-11 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-serif text-title-md shrink-0">
                        ML
                     </div>
                     <div class="flex flex-col min-w-0">
                        <span class="font-title-md text-title-md text-primary truncate">Maya Laksminingtyas</span>
                        <span class="font-body-sm text-body-sm text-outline truncate">Managing Director • Nusantara
                           Cultural
                           Foundation</span>
                     </div>
                  </div>
               </div>
               <!-- Card 5: Adibusana Eksekutif -->
               <div
                  class="testimonial-card flex flex-col justify-between p-space-xl bg-surface-container-lowest rounded-sm shadow-sm transition-all hover:bg-surface-container-low"
                  data-category="adibusana">
                  <div>
                     <div class="flex items-center justify-between mb-space-md">
                        <span
                           class="px-2.5 py-1 bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase rounded-sm">
                           Ready-to-Wear &amp; Blazer
                        </span>
                        <div class="flex items-center text-[#c6724d] gap-0.5">
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                        </div>
                     </div>
                     <p class="font-body-md text-body-md text-primary leading-relaxed mb-space-lg">
                        “Blazer modern Sekar Jagad buatan Batik Nusantara memberikan siluet tegas profesional namun tetap
                        anggun
                        berjiwa budaya Nusantara. Jahitan pola sambungnya sangat teliti, tidak ada motif yang terputus
                        di saku
                        maupun garis kancing.”
                     </p>
                  </div>
                  <div
                     class="flex items-center gap-space-md pt-space-md bg-surface-container/30 -mx-space-xl -mb-space-xl px-space-xl py-space-md">
                     <div
                        class="w-11 h-11 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-serif text-title-md shrink-0">
                        FS
                     </div>
                     <div class="flex flex-col min-w-0">
                        <span class="font-title-md text-title-md text-primary truncate">Farida Sudarmono</span>
                        <span class="font-body-sm text-body-sm text-outline truncate">Chief Financial Officer • Bank
                           Swasta
                           Nasional</span>
                     </div>
                  </div>
               </div>
               <!-- Card 6: Komunitas & Institusi -->
               <div
                  class="testimonial-card flex flex-col justify-between p-space-xl bg-surface-container-lowest rounded-sm shadow-sm transition-all hover:bg-surface-container-low"
                  data-category="kolektor">
                  <div>
                     <div class="flex items-center justify-between mb-space-md">
                        <span
                           class="px-2.5 py-1 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm tracking-wider uppercase rounded-sm">
                           Dukungan Ekosistem Pengrajin
                        </span>
                        <div class="flex items-center text-[#c6724d] gap-0.5">
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                           <span class="material-symbols-outlined text-[16px]"
                              style="font-variation-settings: 'FILL' 1;">star</span>
                        </div>
                     </div>
                     <p class="font-body-md text-body-md text-primary leading-relaxed mb-space-lg">
                        “Komitmen Batik Nusantara terhadap sistem upah adil (fair wage) bagi para ibu pembatik di desa binaan
                        adalah
                        wujud nyata pelestarian yang bermartabat. Membeli di Batik Nusantara berarti menghidupkan ekosistem
                        pengrajin
                        tradisi.”
                     </p>
                  </div>
                  <div
                     class="flex items-center gap-space-md pt-space-md bg-surface-container/30 -mx-space-xl -mb-space-xl px-space-xl py-space-md">
                     <div
                        class="w-11 h-11 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-serif text-title-md shrink-0">
                        IK
                     </div>
                     <div class="flex flex-col min-w-0">
                        <span class="font-title-md text-title-md text-primary truncate">Ir. Kusumo Adiningrat</span>
                        <span class="font-body-sm text-body-sm text-outline truncate">Ketua Paguyuban Pelestari Warisan
                           Budaya
                           Nusantara</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="segment-partner w-full bg-surface-container-low py-space-2xl">
         <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
            <!-- Section Header -->
            <div class="max-w-2xl mx-auto text-center mb-space-2xl">
               <span
                  class="font-label-sm uppercase tracking-[0.2em] text-on-tertiary-container font-semibold">Kolaborasi
                  &amp; Kemitraan Resmi</span>
               <h2 class="font-headline-lg text-headline-lg text-primary font-serif mt-space-xs mb-space-sm">Telah
                  Menemani
                  Berbagai Instansi Kenegaraan &amp; Perusahaan Terkemuka</h2>
               <p class="font-body-md text-body-md text-on-surface-variant font-light">
                  Kepercayaan lebih dari 85 entitas bisnis, institusi perbankan, kementerian, dan yayasan kebudayaan
                  dalam
                  pengadaan wastra resmi, seragam beridentitas, dan cenderamata kehormatan berstandar tinggi.
               </p>
            </div>
            <!-- Partner Badges Grid -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-space-md">
               <!-- Partner 1 -->
               <div
                  class="p-space-lg bg-surface-container-lowest rounded-sm shadow-sm flex flex-col justify-between h-40">
                  <div class="flex items-center justify-between">
                     <span class="material-symbols-outlined text-outline text-[24px]">account_balance</span>
                     <span class="font-label-sm text-outline uppercase tracking-wider">Kenegaraan</span>
                  </div>
                  <div>
                     <h4 class="font-title-md text-title-md text-primary leading-tight">Kementerian Luar Negeri RI</h4>
                     <p class="font-body-sm text-body-sm text-on-tertiary-container font-medium mt-1">Diplomatic Gifting
                     </p>
                  </div>
               </div>
               <!-- Partner 2 -->
               <div
                  class="p-space-lg bg-surface-container-lowest rounded-sm shadow-sm flex flex-col justify-between h-40">
                  <div class="flex items-center justify-between">
                     <span class="material-symbols-outlined text-outline text-[24px]">assured_workload</span>
                     <span class="font-label-sm text-outline uppercase tracking-wider">Perbankan</span>
                  </div>
                  <div>
                     <h4 class="font-title-md text-title-md text-primary leading-tight">Bank Indonesia Institute</h4>
                     <p class="font-body-sm text-body-sm text-on-tertiary-container font-medium mt-1">Wastra Kehormatan
                     </p>
                  </div>
               </div>
               <!-- Partner 3 -->
               <div
                  class="p-space-lg bg-surface-container-lowest rounded-sm shadow-sm flex flex-col justify-between h-40">
                  <div class="flex items-center justify-between">
                     <span class="material-symbols-outlined text-outline text-[24px]">corporate_fare</span>
                     <span class="font-label-sm text-outline uppercase tracking-wider">BUMN</span>
                  </div>
                  <div>
                     <h4 class="font-title-md text-title-md text-primary leading-tight">PT Bank Mandiri (Persero) Tbk
                     </h4>
                     <p class="font-body-sm text-body-sm text-on-tertiary-container font-medium mt-1">Corporate Uniforms
                     </p>
                  </div>
               </div>
               <!-- Partner 4 -->
               <div
                  class="p-space-lg bg-surface-container-lowest rounded-sm shadow-sm flex flex-col justify-between h-40">
                  <div class="flex items-center justify-between">
                     <span class="material-symbols-outlined text-outline text-[24px]">bolt</span>
                     <span class="font-label-sm text-outline uppercase tracking-wider">Energi</span>
                  </div>
                  <div>
                     <h4 class="font-title-md text-title-md text-primary leading-tight">PT Samudera Energi Nusantara
                     </h4>
                     <p class="font-body-sm text-body-sm text-on-tertiary-container font-medium mt-1">Seragam Nasional
                     </p>
                  </div>
               </div>
               <!-- Partner 5 -->
               <div
                  class="p-space-lg bg-surface-container-lowest rounded-sm shadow-sm flex flex-col justify-between h-40">
                  <div class="flex items-center justify-between">
                     <span class="material-symbols-outlined text-outline text-[24px]">auto_stories</span>
                     <span class="font-label-sm text-outline uppercase tracking-wider">Yayasan</span>
                  </div>
                  <div>
                     <h4 class="font-title-md text-title-md text-primary leading-tight">Yayasan Batik Warisan Luhur</h4>
                     <p class="font-body-sm text-body-sm text-on-tertiary-container font-medium mt-1">Kemitraan Kurasi
                     </p>
                  </div>
               </div>
               <!-- Partner 6 -->
               <div
                  class="p-space-lg bg-surface-container-lowest rounded-sm shadow-sm flex flex-col justify-between h-40">
                  <div class="flex items-center justify-between">
                     <span class="material-symbols-outlined text-outline text-[24px]">flight_takeoff</span>
                     <span class="font-label-sm text-outline uppercase tracking-wider">Pariwisata</span>
                  </div>
                  <div>
                     <h4 class="font-title-md text-title-md text-primary leading-tight">PT Garuda Wisata Persada</h4>
                     <p class="font-body-sm text-body-sm text-on-tertiary-container font-medium mt-1">Executive Attire
                     </p>
                  </div>
               </div>
               <!-- Partner 7 -->
               <div
                  class="p-space-lg bg-surface-container-lowest rounded-sm shadow-sm flex flex-col justify-between h-40">
                  <div class="flex items-center justify-between">
                     <span class="material-symbols-outlined text-outline text-[24px]">hotel</span>
                     <span class="font-label-sm text-outline uppercase tracking-wider">Hospitality</span>
                  </div>
                  <div>
                     <h4 class="font-title-md text-title-md text-primary leading-tight">Alila &amp; Aman Resorts</h4>
                     <p class="font-body-sm text-body-sm text-on-tertiary-container font-medium mt-1">Interior &amp;
                        Guest
                        Gifting</p>
                  </div>
               </div>
               <!-- Partner 8 -->
               <div
                  class="p-space-lg bg-surface-container-lowest rounded-sm shadow-sm flex flex-col justify-between h-40">
                  <div class="flex items-center justify-between">
                     <span class="material-symbols-outlined text-outline text-[24px]">temple_buddhist</span>
                     <span class="font-label-sm text-outline uppercase tracking-wider">Kraton Forum</span>
                  </div>
                  <div>
                     <h4 class="font-title-md text-title-md text-primary leading-tight">Keraton Nusantara Heritage</h4>
                     <p class="font-body-sm text-body-sm text-on-tertiary-container font-medium mt-1">Arsip &amp;
                        Dokumentasi
                        Pakem</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="segment-cta w-full bg-surface py-space-2xl">
         <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
            <div
               class="p-space-xl lg:p-space-2xl bg-surface-container-lowest rounded-sm shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
               <!-- Text Column -->
               <div class="lg:col-span-7 flex flex-col gap-space-sm">
                  <span class="font-label-sm uppercase tracking-[0.2em] text-on-tertiary-container font-semibold">Ruang
                     Berbagi &amp; Kolaborasi</span>
                  <h3 class="font-headline-md text-headline-md text-primary font-serif">Punya Cerita atau Memerlukan
                     Penawaran Kemitraan Khusus?</h3>
                  <p class="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed max-w-xl">
                     Kami mengundang para pemilik wastra Batik Nusantara untuk membagikan pengalamannya, serta membuka pintu
                     diskusi
                     bagi instansi yang merencanakan adibusana maupun cinderamata berfilosofi luhur.
                  </p>
                  <div class="flex items-center gap-space-lg pt-space-xs text-secondary font-label-md">
                     <span class="flex items-center gap-1">
                        <span class="material-symbols-outlined text-[16px] text-on-tertiary-container">schedule</span>
                        Respon Tim Kurator: &lt; 24 Jam
                     </span>
                     <span class="flex items-center gap-1">
                        <span class="material-symbols-outlined text-[16px] text-on-tertiary-container">palette</span>
                        Katalog Sampel Fisik Tersedia
                     </span>
                  </div>
               </div>
               <!-- Action Column -->
               <div class="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-space-sm justify-center">
                  <a class="inline-flex items-center justify-center px-space-lg py-space-md bg-primary text-on-primary font-label-lg text-label-lg rounded-sm hover:bg-tertiary-container transition-colors duration-200"
                     href="contact">
                     <span class="material-symbols-outlined mr-2 text-[18px]">handshake</span>
                     Konsultasi Kemitraan Korporat
                  </a>
                  <!-- <button
                     class="inline-flex items-center justify-center px-space-lg py-space-md bg-surface-container-low text-primary font-label-lg text-label-lg rounded-sm hover:bg-surface-container-high transition-colors duration-200"
                     id="open-testimonial-modal" type="button">
                     <span class="material-symbols-outlined mr-2 text-[18px]">rate_review</span>
                     Tulis Testimonial Pelanggan
                  </button> -->
               </div>
            </div>
         </div>
      </div>

   </div>

</template>