// src/stores/app.js
import { defineStore }   from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  // ── State ─────────────────────────────────────────────────
//   const sidebarOpen     = ref(true)
//   const sidebarMini     = ref(false)
//   const darkMode        = ref(false)
//   const snackbar        = ref({ show: false, message: '', color: 'success', timeout: 3000 })
  const topbar       = ref('Dashboard')
//   const pageTitle       = ref('Dashboard')
//   const sidebarActive   = ref('dashboard')
//   const unreadNotifs    = ref(0)
//   const globalLoading   = ref(false)
  
  // ── Getters ───────────────────────────────────────────────
//   const theme = computed(() => darkMode.value ? 'simrsDark' : 'simrsLight')

//   // ── Actions ───────────────────────────────────────────────
//   function toggleSidebar()  { sidebarOpen.value = !sidebarOpen.value }
//   function toggleMini()     { sidebarMini.value = !sidebarMini.value }
//   function toggleDarkMode() { darkMode.value    = !darkMode.value }

//   function showSnackbar(message, color = 'success', timeout = 3000) {
//     snackbar.value = { show: true, message, color, timeout }
//   }

//   function showSuccess(msg) { showSnackbar(msg, 'success') }
//   function showError(msg)   { showSnackbar(msg, 'error', 5000) }
//   function showWarning(msg) { showSnackbar(msg, 'warning') }
//   function showInfo(msg)    { showSnackbar(msg, 'info') }

//   function setPageTitle(title) { pageTitle.value = title }
//   function setUnreadNotifs(n)  { unreadNotifs.value = n }
//   function setGlobalLoading(v) { globalLoading.value = v }
//   function setSidebarActive(title) { sidebarActive.value = title }
  function setTopbar(title) { topbar.value = title }

  return {
     topbar,
     setTopbar
  }
})
