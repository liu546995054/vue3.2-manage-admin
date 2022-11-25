import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
service.interceptors.request.use(
  (config) => {
    config.headers.Authorization = localStorage.getItem('token')
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
