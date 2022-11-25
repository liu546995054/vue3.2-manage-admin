import { login as loginApi } from '@/api/login'
import router from '@/router'
import { menuList } from '@/api/menu'
export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token'),
    sideType: true,
    menus: []
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    changeType(state) {
      state.sideType = !state.sideType
    },
    setMenus(state, menus) {
      state.menus = menus
    }
  },
  actions: {
    login({ commit }, userinfo) {
      return new Promise((resolve, reject) => {
        loginApi(userinfo)
          .then((res) => {
            console.log(res)
            commit('setToken', res.token)
            router.replace('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      }).catch((err) => {
        console.log(err)
      })
    },
    async getMenuAndPermission({ commit }) {
      const r = await menuList({ pid: 10, roleId: 1 })
      if (r.data) {
        commit('setMenus', r.data)
      }
      return r && r.data ? r.data : []
    },
    logOut({ commit }) {
      localStorage.setItem('token', '')
      commit('setToken', '')
      router.replace('/login')
    }
  }
}
