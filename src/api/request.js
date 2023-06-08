import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: '/java2api',
  timeout: 5000
})
service.interceptors.request.use(
  (config) => {
    // config.headers.Authorization = localStorage.getItem('token')
    config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IjExIiwiZW1haWwiOiI1NUBxcS5jb20iLCJwaG9uZSI6IiIsImJpcnRoIjoiMjAyMy0wNC0wNFQwMjoxNDoxMS4wMDBaIiwic2V4IjoxLCJjcmVhdGVkQXQiOiIyMDIzLTA0LTA0VDAyOjE0OjIwLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA0LTA0VDAyOjE0OjIwLjAwMFoiLCJpYXQiOjE2ODYyMDMyMzUsImV4cCI6MTY4NjIxNzYzNX0.7FcmLJ8_W-L-PIUA9FbZKGfxIugaq9CyTi7jGl1fNxY'
    return config
  },
  (error) => {
    return Promise.reject(new Error(error))
  }
)
service.interceptors.response.use(
  (response) => {
    const data = response.data
    if (data.code === 200 || data.code === 201) {
      return data
    } else {
      ElMessage.error(data.msg)
      return Promise.reject(new Error(data.msg))
    }
  },
  (error) => {
    error.response && ElMessage.error(error.response.data)
    return Promise.reject(new Error(error.response.data)).catch((err) => {
      console.log(err)
    })
  }
)
export default service
