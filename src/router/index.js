import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/layout/index'

const routes = [
  {
    path: '/',
    name: 'users',
    component: layout,
    redirect: '/users/list',
    children: [
      {
        path: '/users/list',
        name: 'list',
        component: () => import('@/views/user/index.vue')
      },
      {
        path: '/users/roles',
        name: 'roles',
        component: () => import('@/views/role/index.vue')
      },
      // {
      //   path: 'rights',
      //   name: 'rights',
      //   component: () => import('@/views/auth/index.vue')
      // }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
