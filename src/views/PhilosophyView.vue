<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'

const motifs = [
   {
      id: 'abhiboyo',
      title: 'ABHIBOYO',
      artist: 'Heri Supriyatno',
      category: 'leadership',
      image:
         'https://lh3.googleusercontent.com/aida-public/AB6AXuCaDnRb4F6rLv1gcIw0qkazhjct4kEf3wgeMCl7zMH_AyYBTcZ1dts6f8r--mHrttkJAj694b31zXGBuohwB14ojKLtYWMrUX-jyreMj0WXQ3ms84S1Pq_SFyqjfqBJ7IaEmHArnbXkkAfAogn0J-GnZWOFjU26nK7x6UMEWeGv58XXvv7U64l2ubwYWcYC6VnFBhEp-DYvtflqOJLBwl-VJmDuSsaDqE1D1iiG0fMUjt8ONhASBbk',
      alt: 'Close-up motif batik Abhiboyo dengan pola diagonal dan warna cokelat',
      description: `
      Inspired by Abhimanyu, a figure symbolizing courage, responsibility, and heroism, the Abhiboyo motif combines these values with the crocodile (boyo), an iconic symbol of Surabaya.
      The motif reflects the resilience and unwavering spirit of the people of Surabaya in facing challenges and standing strong to protect their home.
      The intertwined elements, leaves, and flowers represent perseverance, unity, peace, and compassion values that continue to shape the spirit of community and everyday life.`
   },
   {
      id: 'abhiboyo',
      title: 'GEMBILI WONOKROMO',
      artist: 'Wahyu Subianto',
      category: 'leadership',
      image:
         'https://lh3.googleusercontent.com/aida-public/AB6AXuCaDnRb4F6rLv1gcIw0qkazhjct4kEf3wgeMCl7zMH_AyYBTcZ1dts6f8r--mHrttkJAj694b31zXGBuohwB14ojKLtYWMrUX-jyreMj0WXQ3ms84S1Pq_SFyqjfqBJ7IaEmHArnbXkkAfAogn0J-GnZWOFjU26nK7x6UMEWeGv58XXvv7U64l2ubwYWcYC6VnFBhEp-DYvtflqOJLBwl-VJmDuSsaDqE1D1iiG0fMUjt8ONhASBbk',
      alt: 'Close-up motif batik Abhiboyo dengan pola diagonal dan warna cokelat',
      description: `
      Inspired by the vibrant kampung life of Wonokromo, Surabaya, the Gembili Wonokromo motif captures the rhythm of everyday life within the city where people, places, and stories come together.
      The motif brings to life memories of old Surabaya, from bustling traditional markets and travelling vendors to railway tracks and the warm interactions shared between neighbours as night falls.
      It is a celebration of everyday moments, community, and the nostalgic spirit of Surabaya where simple scenes become lasting memories.`
   },
   {
      id: 'abhiboyo',
      title: 'ABHIBOYO',
      artist: 'Heri Supriyatno',
      category: 'leadership',
      image:
         'https://lh3.googleusercontent.com/aida-public/AB6AXuCaDnRb4F6rLv1gcIw0qkazhjct4kEf3wgeMCl7zMH_AyYBTcZ1dts6f8r--mHrttkJAj694b31zXGBuohwB14ojKLtYWMrUX-jyreMj0WXQ3ms84S1Pq_SFyqjfqBJ7IaEmHArnbXkkAfAogn0J-GnZWOFjU26nK7x6UMEWeGv58XXvv7U64l2ubwYWcYC6VnFBhEp-DYvtflqOJLBwl-VJmDuSsaDqE1D1iiG0fMUjt8ONhASBbk',
      alt: 'Close-up motif batik Abhiboyo dengan pola diagonal dan warna cokelat',
      description: `
      Inspired by Abhimanyu, a figure symbolizing courage, responsibility, and heroism, the Abhiboyo motif combines these values with the crocodile (boyo), an iconic symbol of Surabaya.
      The motif reflects the resilience and unwavering spirit of the people of Surabaya in facing challenges and standing strong to protect their home.
      The intertwined elements, leaves, and flowers represent perseverance, unity, peace, and compassion values that continue to shape the spirit of community and everyday life.`
   },
   {
      id: 'abhiboyo',
      title: 'REMO SURABAYAN',
      artist: 'Umi Badriah',
      category: 'leadership',
      image:
         'https://lh3.googleusercontent.com/aida-public/AB6AXuCaDnRb4F6rLv1gcIw0qkazhjct4kEf3wgeMCl7zMH_AyYBTcZ1dts6f8r--mHrttkJAj694b31zXGBuohwB14ojKLtYWMrUX-jyreMj0WXQ3ms84S1Pq_SFyqjfqBJ7IaEmHArnbXkkAfAogn0J-GnZWOFjU26nK7x6UMEWeGv58XXvv7U64l2ubwYWcYC6VnFBhEp-DYvtflqOJLBwl-VJmDuSsaDqE1D1iiG0fMUjt8ONhASBbk',
      alt: 'Close-up motif batik Abhiboyo dengan pola diagonal dan warna cokelat',
      description: `
      Inspired by Tari Remo, one of Surabaya’s iconic traditional dances, the Remo Surabayan motif brings together stylized elements of the dancer’s attire with the distinctive four-leaf clover, a beloved symbol of Surabaya.
      The motif embodies the spirit of perseverance, strength, agility, and mindfulness reflecting the values that guide people through life.
      Created as a contemporary interpretation of Surabaya’s batik heritage, the design celebrates local culture through a fresh and distinctive expression, while preserving the values and identity at its heart.`
   },
   {
      id: 'abhiboyo',
      title: 'SPARKLING TASTE OF SURABAYA',
      artist: 'Arina Halimatus Anjani',
      category: 'leadership',
      image:
         'https://lh3.googleusercontent.com/aida-public/AB6AXuCaDnRb4F6rLv1gcIw0qkazhjct4kEf3wgeMCl7zMH_AyYBTcZ1dts6f8r--mHrttkJAj694b31zXGBuohwB14ojKLtYWMrUX-jyreMj0WXQ3ms84S1Pq_SFyqjfqBJ7IaEmHArnbXkkAfAogn0J-GnZWOFjU26nK7x6UMEWeGv58XXvv7U64l2ubwYWcYC6VnFBhEp-DYvtflqOJLBwl-VJmDuSsaDqE1D1iiG0fMUjt8ONhASBbk',
      alt: 'Close-up motif batik Abhiboyo dengan pola diagonal dan warna cokelat',
      description: `
      Inspired by Sparkling Dance and Surabaya’s iconic culinary heritage, Rujak Cingur (a traditional dish from Surabaya), the Sparkling Taste of Surabaya motif celebrates the energy, beauty, and cultural diversity of the people of Surabaya.
      The graceful and dynamic elements of the dance are expressed through flowing forms, while ingredients found in Rujak Cingur such as water spinach, bean sprouts, and other local ingredients represent simplicity, unity, and the unwavering spirit of the Surabaya community.
      Bringing together movement and culinary heritage, the motif offers a vibrant expression of Surabaya’s identity, where culture, community, and everyday life come together.`
   },
   {
      id: 'abhiboyo',
      title: 'KEMBANG BUNGUR',
      artist: 'Risha Iffatur Rahmah',
      category: 'leadership',
      image:
         'https://lh3.googleusercontent.com/aida-public/AB6AXuCaDnRb4F6rLv1gcIw0qkazhjct4kEf3wgeMCl7zMH_AyYBTcZ1dts6f8r--mHrttkJAj694b31zXGBuohwB14ojKLtYWMrUX-jyreMj0WXQ3ms84S1Pq_SFyqjfqBJ7IaEmHArnbXkkAfAogn0J-GnZWOFjU26nK7x6UMEWeGv58XXvv7U64l2ubwYWcYC6VnFBhEp-DYvtflqOJLBwl-VJmDuSsaDqE1D1iiG0fMUjt8ONhASBbk',
      alt: 'Close-up motif batik Abhiboyo dengan pola diagonal dan warna cokelat',
      description: `
      Inspired by the bungur flower, a distinctive floral symbol of Surabaya, the Kembang Bungur motif reflects the beauty, solidarity, tolerance, and open-minded spirit of the city’s people.
      The delicate beauty of its petals represents togetherness and gratitude, celebrating the shared values that bring communities closer through everyday life.
      Complementary ornaments within the motif embody simplicity, harmony, spirituality, and resilience capturing the strength of Surabaya’s people in navigating life’s many challenges while remaining rooted in their cultural values.`
   },
   {
      id: 'abhiboyo',
      title: 'KINTIR-KINTIRAN',
      artist: 'Nuraini Farida',
      category: 'leadership',
      image:
         'https://lh3.googleusercontent.com/aida-public/AB6AXuCaDnRb4F6rLv1gcIw0qkazhjct4kEf3wgeMCl7zMH_AyYBTcZ1dts6f8r--mHrttkJAj694b31zXGBuohwB14ojKLtYWMrUX-jyreMj0WXQ3ms84S1Pq_SFyqjfqBJ7IaEmHArnbXkkAfAogn0J-GnZWOFjU26nK7x6UMEWeGv58XXvv7U64l2ubwYWcYC6VnFBhEp-DYvtflqOJLBwl-VJmDuSsaDqE1D1iiG0fMUjt8ONhASBbk',
      alt: 'Close-up motif batik Abhiboyo dengan pola diagonal dan warna cokelat',
      description: `
      Inspired by Surabaya’s rivers, the Kintir-Kintiran motif celebrates the city’s connection to water and the natural richness it represents, envisioning clean, unpolluted waterways as a reflection of environmental harmony.
      Beyond its connection to nature, the motif symbolizes the adaptable and resilient spirit of the people of Surabaya. Like flowing water that moves with the current, they embrace the changing tides of time, adapting to different circumstances while remaining determined to pursue their dreams and aspirations.
      The motif reflects a spirit of flexibility, perseverance, and forward movement a reminder that, like water, strength lies in the ability to adapt without losing sight of one’s purpose`
   },
   {
      id: 'abhiboyo',
      title: 'BANYU SEMARAK',
      artist: 'Suryawati Liman Halim',
      category: 'leadership',
      image:
         'https://lh3.googleusercontent.com/aida-public/AB6AXuCaDnRb4F6rLv1gcIw0qkazhjct4kEf3wgeMCl7zMH_AyYBTcZ1dts6f8r--mHrttkJAj694b31zXGBuohwB14ojKLtYWMrUX-jyreMj0WXQ3ms84S1Pq_SFyqjfqBJ7IaEmHArnbXkkAfAogn0J-GnZWOFjU26nK7x6UMEWeGv58XXvv7U64l2ubwYWcYC6VnFBhEp-DYvtflqOJLBwl-VJmDuSsaDqE1D1iiG0fMUjt8ONhASBbk',
      alt: 'Close-up motif batik Abhiboyo dengan pola diagonal dan warna cokelat',
      description: `
      Banyu Semarak portrays Surabaya as a city of water that has grown into a vibrant metropolitan hub, rich in history, culture, and diversity.
      Featuring iconic landmarks and cultural elements from Siola Building and Kenjeran Beach to Sparkling Dance, Chinatown, bamboo spears, and the bungur flower the motif reflects Surabaya’s journey from its historical roots to its modern identity.
      A celebration of resilience, progress, and cultural harmony, Banyu Semarak captures the dynamic spirit of Surabaya while preserving the cultural values that shape its identity.`
   },
   {
      id: 'abhiboyo',
      title: 'GREGET REL PASAR TURI',
      artist: 'Eka Sumarlin',
      category: 'leadership',
      image:
         'https://lh3.googleusercontent.com/aida-public/AB6AXuCaDnRb4F6rLv1gcIw0qkazhjct4kEf3wgeMCl7zMH_AyYBTcZ1dts6f8r--mHrttkJAj694b31zXGBuohwB14ojKLtYWMrUX-jyreMj0WXQ3ms84S1Pq_SFyqjfqBJ7IaEmHArnbXkkAfAogn0J-GnZWOFjU26nK7x6UMEWeGv58XXvv7U64l2ubwYWcYC6VnFBhEp-DYvtflqOJLBwl-VJmDuSsaDqE1D1iiG0fMUjt8ONhASBbk',
      alt: 'Close-up motif batik Abhiboyo dengan pola diagonal dan warna cokelat',
      description: `
      Inspired by Pasar Turi, one of Surabaya’s historic markets, this motif captures the vibrant atmosphere of urban life and the energy of its people.
      The turi flower, reflecting the market’s name, is paired with railway tracks that symbolize the city’s dynamic rhythm and the harmonious coexistence of diverse communities.
      True to the meaning of greget spirit and determination the motif celebrates the hardworking, resilient, and energetic character of Surabaya’s people, reflecting a cultural identity that continues to thrive amid the evolving cityscape.`
   },
   {
      id: 'abhiboyo',
      title: 'PESONA MANGROVE WONOREJO',
      artist: `Muchammad Syafi'i`,
      category: 'leadership',
      image:
         'https://lh3.googleusercontent.com/aida-public/AB6AXuCaDnRb4F6rLv1gcIw0qkazhjct4kEf3wgeMCl7zMH_AyYBTcZ1dts6f8r--mHrttkJAj694b31zXGBuohwB14ojKLtYWMrUX-jyreMj0WXQ3ms84S1Pq_SFyqjfqBJ7IaEmHArnbXkkAfAogn0J-GnZWOFjU26nK7x6UMEWeGv58XXvv7U64l2ubwYWcYC6VnFBhEp-DYvtflqOJLBwl-VJmDuSsaDqE1D1iiG0fMUjt8ONhASBbk',
      alt: 'Close-up motif batik Abhiboyo dengan pola diagonal dan warna cokelat',
      description: `
      Inspired by Wonorejo Mangrove Forest, this motif celebrates Surabaya’s natural beauty through symbols of strength, endurance, and harmony.
      The sturdy mangrove roots represent the perseverance of Surabaya’s people in facing life’s challenges, while the heron symbolizes freedom, harmony with nature, and hope for a brighter future.
      Reflecting the close relationship between people and the environment, the motif serves as a reminder to preserve nature as an essential part of Surabaya’s identity. Its organic, flowing forms evoke a sense of calm and strength, reflecting the grounded character of Surabaya’s people and their ability to adapt to change.`
   },
   {
      id: 'abhiboyo',
      title: 'SUROBOYOAN',
      artist: `Risha Iffatur Rahmah`,
      category: 'leadership',
      image:
         'https://lh3.googleusercontent.com/aida-public/AB6AXuCaDnRb4F6rLv1gcIw0qkazhjct4kEf3wgeMCl7zMH_AyYBTcZ1dts6f8r--mHrttkJAj694b31zXGBuohwB14ojKLtYWMrUX-jyreMj0WXQ3ms84S1Pq_SFyqjfqBJ7IaEmHArnbXkkAfAogn0J-GnZWOFjU26nK7x6UMEWeGv58XXvv7U64l2ubwYWcYC6VnFBhEp-DYvtflqOJLBwl-VJmDuSsaDqE1D1iiG0fMUjt8ONhASBbk',
      alt: 'Close-up motif batik Abhiboyo dengan pola diagonal dan warna cokelat',
      description: `
      The Suroboyoan batik motif celebrates Surabaya’s identity through symbols of heroism, togetherness, and cultural diversity. The 10 November motif, inspired by the iconic Heroes Monument, represents the courage, unity, and fighting spirit of the city’s people.
      Coffee beans reflect the tradition of cangkrukan (gathering to share stories) and connect across communities while the aseman motif symbolizes harmony and mutual support. The dalanan motif captures Surabaya’s evolving urban life, blending modernity, innovation, and cherished memories.
      Together, these elements portray the warm, determined, and forward looking spirit of Surabaya, where cultural heritage and modern life continue to thrive side by side.`
   },
   {
      id: 'abhiboyo',
      title: 'SKENA SURABAYA',
      artist: `Risha Iffatur Rahmah`,
      category: 'leadership',
      image:
         'https://lh3.googleusercontent.com/aida-public/AB6AXuCaDnRb4F6rLv1gcIw0qkazhjct4kEf3wgeMCl7zMH_AyYBTcZ1dts6f8r--mHrttkJAj694b31zXGBuohwB14ojKLtYWMrUX-jyreMj0WXQ3ms84S1Pq_SFyqjfqBJ7IaEmHArnbXkkAfAogn0J-GnZWOFjU26nK7x6UMEWeGv58XXvv7U64l2ubwYWcYC6VnFBhEp-DYvtflqOJLBwl-VJmDuSsaDqE1D1iiG0fMUjt8ONhASBbk',
      alt: 'Close-up motif batik Abhiboyo dengan pola diagonal dan warna cokelat',
      description: `
      The Skena Surabaya motif captures the spirit of exploring the city in a relaxed, free-spirited, and meaningful way.
      Inspired by urban skena culture and travelers’ journey stamps, the motif reflects the joy of meeting new people, sharing stories, and discovering Surabaya’s hidden corners through simple yet memorable experiences.
      Each element represents adventure, cherished memories, and pride in Surabaya’s modern identity and welcoming spirit.`
   },
   {
      id: 'abhiboyo',
      title: 'TJAP TOENDJOENGAN',
      artist: `Davit Eko Kris Cahyono`,
      category: 'leadership',
      image:
         'https://lh3.googleusercontent.com/aida-public/AB6AXuCaDnRb4F6rLv1gcIw0qkazhjct4kEf3wgeMCl7zMH_AyYBTcZ1dts6f8r--mHrttkJAj694b31zXGBuohwB14ojKLtYWMrUX-jyreMj0WXQ3ms84S1Pq_SFyqjfqBJ7IaEmHArnbXkkAfAogn0J-GnZWOFjU26nK7x6UMEWeGv58XXvv7U64l2ubwYWcYC6VnFBhEp-DYvtflqOJLBwl-VJmDuSsaDqE1D1iiG0fMUjt8ONhASBbk',
      alt: 'Close-up motif batik Abhiboyo dengan pola diagonal dan warna cokelat',
      description: `
      Inspired by the festive atmosphere of Tjap Toendjoengan’s night market, this motif celebrates the spirit of togetherness and the cultural diversity of Surabaya. It reflects a community where people from different backgrounds live side by side in harmony.
      Iconic local delicacies, including Lontong Balap, Rujak Cingur, and almond crisps, highlight Surabaya’s rich culinary heritage, while Siola Building and Hotel Oranje evoke the city’s history and patriotic spirit.
      Bringing together culinary traditions, historical landmarks, and local culture, the motif embodies unity, diversity, and pride in Surabaya’s heritage a living legacy that continues to evolve with the city.`
   }
];

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
                     SURABAYA'S BATIK HERITAGE
                  </span>
                  <h1 class="font-headline-lg text-headline-lg text-primary leading-tight tracking-tight">
                     The Story Behind Surabaya Batik
                  </h1>
               </div>
               <div class="lg:col-span-4 flex flex-col justify-end">
                  <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                     Surabaya batik reflects the city’s identity through motifs inspired by its people, culture, local
                     cuisine, natural surroundings, and heritage. Its journey continues to evolve, giving each motif a
                     story and meaning of its own.
                  </p>
               </div>
            </div>
         </div>

         <div class="segment-motif-spotlight max-w-[1320px] mx-auto px-margin-mobile md:px-margin my-space-xl">
            <div class="bg-surface-container-lowest rounded-lg p-6 lg:p-12 shadow-sm">
               <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <!-- Narrative Left Column -->
                  <div class="lg:col-span-6 flex flex-col justify-between h-full ">
                     <div>
                        <h2 class="font-headline-md text-headline-md text-primary text-3xl mb-2">
                           A Growing Collection of Surabaya’s Stories
                        </h2>
                        <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-2">
                           The journey took a defining step in 2022, when the Surabaya City Government held its first
                           Batik Design Competition. Six winning motifs were selected and later patented as distinctive
                           symbols of the city, reflecting different aspects of Surabaya’s identity.
                        </p>

                        <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                           Two years later, the second edition introduced six new motifs, bringing the collection to
                           twelve Surabaya batik motifs. Together, they draw inspiration from the city’s people,
                           culture, local cuisine, nature, landmarks, and heritage—each carrying its own story and
                           meaning.

                        </p>
                     </div>
                  </div>
                  <!-- Master Visual Right Column -->
                  <div class="lg:col-span-6 flex flex-col gap-4">
                     <div class="relative overflow-hidden rounded-lg aspect-[5/3] bg-surface-container">
                        <img class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                           data-alt="Editorial still life photograph of folded authentic handcrafted Indonesian batik cloth with classic dark soga and charcoal Parang Barong pattern resting on a warm teak studio desk beside traditional canting tools and natural clay dye bowls under soft window light"
                           src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYguEHg3g5WMtfiB4AWTPAzZ4pyPfNGV1xtBLEXU_jpGWnfSid1QXYfCIoMrl36ri9fXGSCCOjN_nCe15y_8TbToWF8zlb96Ilg8TFAZAZw6v1tTLkwHvWV_K3G5mOufDF0I0_kxu2v6nCfwG5qqRPTVKjW6fqafE5H7_vzlJ8d3u4965pWaFc-lo2zW-gdYmA7ClumDVz1OdOKuJKDONV7lnfw_ZygWqf1uBvviaRZtxrZTwgbMM" />
                        <div
                           class="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-sm p-4 rounded-md flex items-center justify-between">
                           <div>
                              <span class="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">
                                 Struktur Geometri
                              </span>
                              <span class="font-title-md text-title-md text-primary">
                                 Lereng 45° dengan Isen Cecek Mlinjon
                              </span>
                           </div>
                           <div
                              class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
                              <span class="material-symbols-outlined text-lg">nature</span>
                           </div>
                        </div>
                     </div>
                     <!-- Micro Explanations -->
                     <!-- <div class="grid grid-cols-3 gap-3 text-center">
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
                     </div> -->
                  </div>
               </div>
            </div>
         </div>

         <div class="segment-motif-title max-w-[1320px] mx-auto px-margin-mobile md:px-margin mt-space-2xl mb-space-md">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
               <div>
                  <span class="font-label-sm text-label-sm uppercase tracking-widest text-secondary block">
                     SURABAYA BATIK COLLECTION
                  </span>
                  <h2 class="font-headline-md text-headline-md text-primary">
                     The Meaning Behind the Motifs
                  </h2>
               </div>
            </div>

         </div>

         <div class="segment-motif-chosen max-w-[1320px] mx-auto px-margin-mobile md:px-margin mb-space-2xl">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="motif-grid">
               <article v-for="motif in motifs" :key="motif.id"
                  class="motif-card flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:bg-surface-container-low"
                  :data-category="motif.category">
                  <!-- Image -->
                  <div class="relative aspect-[16/10] overflow-hidden bg-surface-container">
                     <img :src="motif.image" :alt="motif.alt" class="w-full h-full object-cover" loading="lazy" />
                  </div>

                  <!-- Content -->
                  <div class="p-6 flex flex-col flex-1 justify-between">
                     <div>
                        <div class="flex items-center justify-between mb-2">
                           <span
                              class="font-label-sm text-label-sm text-tertiary-container tracking-wider uppercase font-semibold">
                              Creator: {{ motif.artist }}
                           </span>
                        </div>

                        <h3 class="font-headline-sm text-headline-sm text-primary">
                           {{ motif.title }}
                        </h3>

                        <p class="font-body-md text-body-md text-on-surface-variant mb-4 whitespace-pre-line">
                           {{ motif.description }}
                        </p>
                     </div>
                  </div>
               </article>

            </div>
         </div>

         <div class="segment-cta w-full bg-primary-container text-surface-container-low py-space-2xl">
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
                     <a class="w-full sm:w-auto px-8 py-3.5 bg-transparent border-none text-surface-bright hover:text-white font-label-lg text-label-lg transition-colors flex items-center justify-center gap-2"
                        href="gallery">
                        <span>
                           Explore Our Collections
                        </span>
                     </a>
                  </div>
               </div>
            </div>
         </div>

      </div>
   </div>
</template>