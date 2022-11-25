import request from '@/api/request'

export const menuList = (params) => {
  return request({
    url: '/sys/permission/getSysMenus',
    method: 'get',
    params: params
  })
}
