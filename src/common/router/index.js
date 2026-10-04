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
        meta:      { topbar: 'Home'},
      },
      {
        path: 'gallery',
        name: 'gallery',
        component: () => import('@/views/GalleryView.vue'),
        meta:      { topbar: 'Gallery'},
      },
      {
        path: 'service',
        name: 'service',
        component: () => import('@/views/ServiceView.vue'),
        meta:      { topbar: 'Service'},
      },
      {
        path: 'price',
        name: 'price',
        component: () => import('@/views/PriceView.vue'),
        meta:      { topbar: 'Price'},
      },
      {
        path: 'philosophy',
        name: 'philosophy',
        component: () => import('@/views/PhilosophyView.vue'),
        meta:      { topbar: 'Philosophy'},
      },
      {
        path: 'customer',
        name: 'customer',
        component: () => import('@/views/CustomerView.vue'),
        meta:      { topbar: 'Customer'},
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/ContactView.vue'),
        meta:      { topbar: 'Contact'},
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
  
    // Set page title
    appStore.setTopbar(to.meta.topbar)
  
    // next('/')
  // } else {
    next()
  // }

})

router.afterEach(() => {
  NProgress.done()
})

export default router
