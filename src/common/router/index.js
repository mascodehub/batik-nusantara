import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '../layout/AppLayout.vue'
// import AuthLayout from '../la  yout/AuthLayout.vue'
import NProgress from '../../plugins/nprogress.js'

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/views/DashboardView.vue'),
        meta:      { topbar: 'Home', title: 'Batik Nusantara | Official Batik Store in Surabaya', description: 'Discover Batik Nusantara, a batik store in Surabaya since 1986. Explore Indonesian batik fabrics, contemporary collections, custom designs, and Surabaya-inspired motifs.' },
      },
      {
        path: 'gallery',
        name: 'gallery',
        component: () => import('@/views/GalleryView.vue'),
        meta:      { topbar: 'Gallery', title: 'Batik Nusantara | Batik Fabric and Clothing Collection', description: 'Explore Indonesian batik fabrics, clothing, accessories, and one-of-a-kind pieces from Batik Nusantara in Surabaya.' },
      },
      {
        path: 'service',
        name: 'service',
        component: () => import('@/views/ServiceView.vue'),
        meta:      { topbar: 'Service', title: 'Batik Nusantara | Custom Batik Design and Services', description: 'Commission custom batik motifs, fabrics, or clothing. Learn about the design and traditional craft process at Batik Nusantara.' },
      },
      {
        path: 'price',
        name: 'price',
        component: () => import('@/views/PriceView.vue'),
        meta:      { topbar: 'Price', title: 'Batik Nusantara | Batik Collection and Price Guide', description: 'Browse Batik Nusantara collections and pricing guidance for batik fabrics and products. Contact our team for a tailored quote.' },
      },
      {
        path: 'philosophy',
        name: 'philosophy',
        component: () => import('@/views/PhilosophyView.vue'),
        meta:      { topbar: 'Philosophy', title: 'Batik Nusantara | Surabaya Batik Motif Stories', description: 'Discover the stories behind batik motifs inspired by Surabaya’s history, nature, and community.' },
      },
      {
        path: 'customer',
        name: 'customer',
        component: () => import('@/views/CustomerView.vue'),
        meta:      { topbar: 'Customer', title: 'Batik Nusantara | Customer Stories', description: 'Read customer and partner stories about Batik Nusantara’s batik pieces and custom services.' },
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/ContactView.vue'),
        meta:      { topbar: 'Contact', title: 'Batik Nusantara | Contact and Surabaya Store Location', description: 'Contact Batik Nusantara on WhatsApp or visit our store in Jambangan, Surabaya, East Java.' },
      },
    ]
  },
  // {
  //   path: '/auth',
  //   component: AuthLayout,
  //   children: [
  //     {
  //       path: '',
  //       name: 'login',
  //       component: () => import('@/modules/auth/views/LoginView.vue')
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// import { useAuthStore } from '@/modules/auth/stores/authStore'

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  // const authStore = useAuthStore()
  // const isAuth = authStore.isAuthenticated
  
  // if (to.path !== '/auth' && !isAuth) {
  //   next('/auth')
  // } else if (to.path === '/auth' && isAuth) {
  //   // Import store di sini untuk hindari circular dependency
    const { useAppStore }   = await import('../../stores/app.js')
    const appStore   = useAppStore()
  
    // Keep the navigation label and search metadata in sync with the route.
    appStore.setTopbar(to.meta.topbar)
  
    // next('/')
  // } else {
    next()
  // }

})

router.afterEach((to) => {
  const brand = 'Batik Nusantara'
  const title = to.meta.title || `${brand} | Official Batik Store in Surabaya`
  const description = to.meta.description || 'Discover Indonesian batik fabrics, contemporary collections, and custom designs from Batik Nusantara in Surabaya.'
  const canonicalUrl = `https://www.batikindonesia.id${to.path}`
  document.title = title
  document.documentElement.lang = 'en'

  const setMeta = (selector, attribute, key, value) => {
    let element = document.head.querySelector(selector)
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(attribute, key)
      document.head.appendChild(element)
    }
    element.setAttribute('content', value)
  }

  setMeta('meta[name="description"]', 'name', 'description', description)
  setMeta('meta[property="og:title"]', 'property', 'og:title', title)
  setMeta('meta[property="og:description"]', 'property', 'og:description', description)
  setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)

  let canonical = document.head.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  canonical.href = canonicalUrl
  NProgress.done()
})

export default router
