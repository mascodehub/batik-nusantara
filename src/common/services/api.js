import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request Interceptor: Attach the JWT token to every request if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('waras_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response Interceptor: Handle response errors (like expired tokens)
api.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    // Check if the response is 401 (Unauthorized)
    if (error.response && error.response.status === 401) {
      // Clear authentication state if unauthorized
      // localStorage.removeItem('waras_token')
      // localStorage.removeItem('waras_user')
      
      // // Redirect to login page if we are not already there
      // if (window.location.pathname !== '/auth') {
      //   window.location.href = '/auth'
      // }
    }
    return Promise.reject(error)
  }
)

export default api
