<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'

const processSteps = [
   {
      id: 1,
      name: 'Tracing the Design',
      captionTitle: '01. Tracing the Design',
      progressPct: 0,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmaM68BY2c3GTA018kDPlSLP5tbNqwf-H7C6Cv5XcYHyNOsh7AecYzgR_ZN8eoI3Phb0JmF6EuxyuNigwxgp9vWKDrKYQ90T2Ww5BOGcoZVYcthgGbHWQ7gcrRcTb3FFcJRbzz1OJTJ5CijdhX_0aRymflZxtpkId5V6sM8krSwiaQpmTdtwWLUN11exbUGpEe7RIdmqxR8c5UGGX0A81dJRJ8MsGUkdyGmXa1r26sOWY5QiHmGMY',
      description: 'The process begins by carefully transferring the chosen design onto the fabric. Each line is traced onto the surface as a guide for the canting process, ensuring that every detail of the motif is positioned accurately before the batik-making begins.',
      duration: '3–7 Hari Riset',
      technique: 'Pola Tangan Manual',
      techniqueIcon: 'draw',
      video: '/videos/process/menggambar.mp4',
      poster: '/main-1.jpg',
   },
   {
      id: 2,
      name: 'Applying the Wax',
      captionTitle: '02. Applying the Wax',
      progressPct: 50,
      image: 'https://example.com/proses-canting.jpg',
      description: 'Once the design is transferred, the artisan follows each traced line using a canting, a traditional Indonesian tool used to apply melted batik wax (malam) onto the fabric. The wax creates a barrier that prevents the dye from penetrating the covered areas, gradually defining the intricate details of the motif.',
      duration: '14–45 Hari Pengerjaan',
      technique: 'Lilin Lebah Alami',
      techniqueIcon: 'mode_heat',
      video: '/videos/process/mencanting.mp4',
      poster: '/main-2.jpg',
   },
   {
      id: 3,
      name: 'Adding Color',
      captionTitle: '03. Adding Color',
      progressPct: 100,
      image: 'https://example.com/proses-pewarnaan.jpg',
      description: 'With the wax lines in place, color is carefully applied to the fabric. Depending on the desired result, the artisan works with selected dyes and applies them to each section with precision, allowing the colors to gradually bring the design to life while preserving the character of the handmade process.',
      duration: '10–20 Kali Celup',
      technique: '100% Organik Eco-Safe',
      techniqueIcon: 'eco',
      video: '/videos/process/mewarnai.mp4',
      poster: '/main-3.jpg',
   },
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
      <div class="segment-main w-full bg-surface py-32 md:py-36">
         <div class="max-w-330 mx-auto px-margin-mobile md:px-margin">
            <!-- Editorial Header Content -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
               <div class="lg:col-span-12 flex flex-col gap-space-sm">
                  <h1
                     class="font-headline-lg text-headline-lg md:text-display-xl text-primary tracking-tight leading-tight">
                     Your Idea,
                     <em class="italic font-headline-lg md:text-display-xl text-secondary">
                        Our Craft
                     </em>
                  </h1>
                  <p class="font-body-lg text-body-lg text-secondary max-w-2xl mt-space-xs">
                     From the first sketch to the final touch, we transform your ideas into distinctive batik creations
                     through traditional craftsmanship and thoughtful design.
                  </p>
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
                     <h2
                        class="font-headline-md text-headline-md md:text-headline-lg text-primary tracking-tight mt-1 mb-space-sm">
                        THE PROCESS
                     </h2>
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
                                    Step {{ String(index + 1).padStart(2, '0') }}
                                 </span>

                                 <span v-if="index === currentStep"
                                    class="step-badge inline-flex items-center gap-1 text-[11px] font-medium text-tertiary-container bg-tertiary-container/10 px-2 py-0.5 rounded-full">
                                    Play
                                 </span>
                              </div>

                              <h3 class="font-title-lg text-title-lg text-primary mb-1.5">
                                 {{ step.name }}
                              </h3>

                              <p class="font-body-md text-body-md text-secondary leading-relaxed">
                                 {{ step.description }}
                              </p>

                              <div
                                 class="mt-space-sm pt-space-xs flex flex-wrap gap-2 text-outline font-label-sm text-label-sm hidden">
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
                              :src="selectedStep.video"  controls playsinline
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
               <h2 class="font-headline-lg text-headline-lg text-primary tracking-tight mt-2">
                  From Idea to Creation
               </h2>
            </div>
            <!-- Process 4-Step Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-lg relative">
               <!-- Step 1 -->
               <div
                  class="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col justify-between relative group hover:bg-surface-container-low transition-colors">
                  <div>
                     <div class="flex items-center justify-between mb-space-md">
                        <span
                           class="font-headline-lg text-headline-md text-tertiary-container font-light opacity-50">01</span>
                        <div
                           class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary">
                           <span class="material-symbols-outlined text-[20px]">forum</span>
                        </div>
                     </div>
                     <h4 class="font-title-lg text-title-lg text-primary mb-2">DISCUSS YOUR IDEA</h4>
                     <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
                        Share your ideas, references, existing designs, preferred colors, or simply tell us what you
                        have in mind.
                     </p>
                  </div>
                  <div
                     class="mt-space-md pt-space-sm text-outline font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1">
                     <span class="material-symbols-outlined text-[14px]">schedule</span> Typical timeline: 1–3 days
                  </div>
               </div>
               <!-- Step 2 -->
               <div
                  class="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col justify-between relative group hover:bg-surface-container-low transition-colors">
                  <div>
                     <div class="flex items-center justify-between mb-space-md">
                        <span
                           class="font-headline-lg text-headline-md text-tertiary-container font-light opacity-50">02</span>
                        <div
                           class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary">
                           <span class="material-symbols-outlined text-[20px]">draw</span>
                        </div>
                     </div>
                     <h4 class="font-title-lg text-title-lg text-primary mb-2">DEVELOP THE DESIGN</h4>
                     <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
                        Based on our discussion, we develop the motif, colors, and details of your custom batik for your
                        approval.
                     </p>
                  </div>
                  <div
                     class="mt-space-md pt-space-sm text-outline font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1">
                     <span class="material-symbols-outlined text-[14px]">schedule</span> Typical timeline: 1–2 days
                  </div>
               </div>
               <!-- Step 3 -->
               <div
                  class="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col justify-between relative group hover:bg-surface-container-low transition-colors">
                  <div>
                     <div class="flex items-center justify-between mb-space-md">
                        <span
                           class="font-headline-lg text-headline-md text-tertiary-container font-light opacity-50">03</span>
                        <div
                           class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary">
                           <span class="material-symbols-outlined text-[20px]">brush</span>
                        </div>
                     </div>
                     <h4 class="font-title-lg text-title-lg text-primary mb-2">CRAFTING YOUR BATIK</h4>
                     <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
                        After the design is approved, our artisans begin the batik-making process.
                     </p>
                  </div>
                  <div
                     class="mt-space-md pt-space-sm text-outline font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1">
                     <span class="material-symbols-outlined text-[14px]">schedule</span> Typical timeline: 3–4 weeks
                  </div>
               </div>
               <!-- Step 4 -->
               <div
                  class="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col justify-between relative group hover:bg-surface-container-low transition-colors">
                  <div>
                     <div class="flex items-center justify-between mb-space-md">
                        <span
                           class="font-headline-lg text-headline-md text-tertiary-container font-light opacity-50">04</span>
                        <div
                           class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary">
                           <span class="material-symbols-outlined text-[20px]">verified_user</span>
                        </div>
                     </div>
                     <h4 class="font-title-lg text-title-lg text-primary mb-2">FINAL CHECK AND PACKAGING</h4>
                     <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
                        Once your batik is complete, we carefully inspect and prepare your order for delivery.
                     </p>
                  </div>
                  <div
                     class="mt-space-md pt-space-sm text-outline font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1">
                     <span class="material-symbols-outlined text-[14px]">schedule</span> Typical timeline: 1–2 days
                  </div>
               </div>
               <!-- Step 5 -->
               <div
                  class="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col justify-between relative group hover:bg-surface-container-low transition-colors">
                  <div>
                     <div class="flex items-center justify-between mb-space-md">
                        <span
                           class="font-headline-lg text-headline-md text-tertiary-container font-light opacity-50">05</span>
                        <div
                           class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary">
                           <span class="material-symbols-outlined text-[20px]">package_2</span>
                        </div>
                     </div>
                     <h4 class="font-title-lg text-title-lg text-primary mb-2">ON ITS WAY TO YOU</h4>
                     <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
                        Your order is shipped to your destination.
                        Shipping time varies by destination.
                     </p>
                  </div>
               </div>
            </div>

            <!-- Process Header -->
            <div class="my-4">

               <div
                  class="w-full bg-secondary-container/50 p-space-lg rounded-lg shadow-sm flex items-start gap-space-md">
                  <div
                     class="w-10 h-10 rounded-full bg-surface-container-lowest shrink-0 flex items-center justify-center text-primary mt-0.5">
                     <span class="material-symbols-outlined text-[20px]">info</span>
                  </div>
                  <div class="flex flex-col gap-1">
                     <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        <strong>Please note :</strong> Timelines are estimates and may vary depending on the complexity
                        of the design, number of
                        revisions, production technique, quantity, and response time during the process.
                     </p>
                  </div>
               </div>
            </div>

         </div>
      </div>

      <div class="segment-value w-full bg-surface-container py-space-2xl">
         <div class="max-w-330 mx-auto px-margin-mobile md:px-margin">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
               <div class="lg:col-span-12 flex flex-col gap-space-md text-center">
                  <h2 class="font-headline-lg text-headline-lg text-primary tracking-tight">
                     Various Services
                  </h2>
               </div>
               <div class="lg:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-space-md">
                  <!-- Pillar 1 -->
                  <div class="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col gap-space-sm">
                     <div
                        class="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-2">
                        <span class="material-symbols-outlined text-[24px]">apparel</span>
                     </div>
                     <h3 class="font-headline-sm text-headline-sm text-primary">
                        Existing Design, New Color
                     </h3>
                     <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
                        CUSTOMIZE OUR DESIGNS
                        Choose from our existing batik motifs and personalize the color palette to match your
                        preferences, brand identity, or project needs.
                     </p>
                  </div>
                  <!-- Pillar 2 -->
                  <div class="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col gap-space-sm">
                     <div
                        class="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-2">
                        <span class="material-symbols-outlined text-[24px]">cognition</span>
                     </div>
                     <h3 class="font-headline-sm text-headline-sm text-primary">
                        Your Own Design
                     </h3>
                     <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
                        BRING YOUR DESIGN
                        Have a finished design ready? We can help bring your artwork to life as batik fabric, tailored
                        to your specifications and selected production technique.
                     </p>
                  </div>
                  <!-- Pillar 3 -->
                  <div class="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col gap-space-sm">
                     <div
                        class="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-2">
                        <span class="material-symbols-outlined text-[24px]">lightbulb</span>
                     </div>
                     <h3 class="font-headline-sm text-headline-sm text-primary">
                        Form Concept to Design
                     </h3>
                     <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
                        DEVELOP A CUSTOM DESIGN
                        Starting with just an idea? Share your inspiration, references, or concept with us. Our team
                        will develop the design for you, with room for revisions before production begins.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="segment-cta w-full bg-primary-container text-surface-bright py-space-2xl relative overflow-hidden">
         <div class="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
            <div class="max-w-3xl mx-auto text-center flex flex-col items-center">
               <span class="font-label-sm text-label-sm text-on-tertiary-container tracking-widest uppercase mb-3">
                  CUSTOM DESIGN CONSULTATION
               </span>
               <h2 class="font-headline-lg text-headline-lg text-surface-bright leading-tight mb-4">
                  Made Beyond the Catalogue
               </h2>
               <p class="font-body-lg text-body-lg text-outline-variant mb-8 leading-relaxed">
                  Our catalogue is only a starting point. If you have your own motif, illustration, or concept, share
                  it with us. Together, we can explore how your idea can be developed into a unique textile design.
               </p>
               <div class="flex flex-col sm:flex-row items-center gap-4">
                  <a class="w-full sm:w-auto px-8 py-3.5 bg-secondary-container text-primary font-label-lg text-label-lg rounded hover:bg-surface-bright transition-colors font-semibold"
                     href="contact">
                     Discuss Your Idea
                  </a>
                  <a class="inline-flex items-center justify-center bg-transparent border border-outline-variant text-surface-bright font-label-lg text-label-lg px-space-lg py-3 rounded-lg hover:bg-surface-bright/10 transition-colors duration-200"
                     href="https://canva.link/adgkxvnlq16msyx" target="_blank">
                     <span class="material-symbols-outlined text-[18px] mr-2">download</span>
                     <span>View E-Catalog</span>
                  </a>
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