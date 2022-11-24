import request from '@/api/request'

export const menuList = () => {
  return request({
    url: '/menus'
  })
}
