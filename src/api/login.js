import request from '@/api/request'
export const login = (data) => {
  return request({
    url: '/api/login',
    method: 'post',
    data
  })
}

export const user = (data) => {
  return request({
    baseURL:'/koa',
    url: '/apis/users',
    method: 'get',
    params: data
  })
}
