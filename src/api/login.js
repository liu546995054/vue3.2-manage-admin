import request from '@/api/request'
export const login = (data) => {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}
