import { login as loginApi } from "@/api/login";
import router from "@/router";

export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem("token"),
    sideType: true,
    menus: []
  }),
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    changeType(state) {
      state.sideType = !state.sideType;
    },
    setMenus(state, menus) {
      state.menus = menus;
    }
  },
  actions: {
    login({ commit }, userinfo) {
      return new Promise((resolve, reject) => {
        loginApi(userinfo)
          .then((res) => {
            console.log(res);
            commit("setToken", res.token);
            router.replace("/");
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      }).catch((err) => {
        console.log(err);
      });
    },
    async getMenuAndPermission({ commit }) {
      // const r = await menuList({ pid:13, roleId:1 });
      // if (r.data) {
      //   commit("setMenus", r.data);
      // }
      // return r && r.data ? r.data : [];

      const data = [{
        "id": "2136",
        "label": "基础信息",
        "pid": "13",
        "children": [
          {
            "id": "2094",
            "label": "商品管理",
            "pid": "2136",
            "children": [],
            "meta": {
              "icon": null,
              "title": "商品管理",
              "url": "stockManage"
            }
          },
          {
            "id": "2095",
            "label": "供应商管理",
            "pid": "2136",
            "children": [],
            "meta": {
              "icon": null,
              "title": "供应商管理",
              "url": "supplierManage"
            }
          },
          {
            "id": "2097",
            "label": "客户管理",
            "pid": "2136",
            "children": [],
            "meta": {
              "icon": null,
              "title": "客户管理",
              "url": "customerManage"
            }
          },
          {
            "id": "2137",
            "label": "打印设置",
            "pid": "2136",
            "children": [],
            "meta": {
              "icon": null,
              "title": "打印设置",
              "url": "setPrint"
            }
          },
          {
            "id": "2099",
            "label": "农资服务商列表",
            "pid": "2136",
            "children": [],
            "meta": {
              "icon": null,
              "title": "农资服务商列表",
              "url": "agriculturalproduction"
            }
          }
        ],
        "meta": {
          "icon": "基础信息",
          "title": "基础信息",
          "url": "baseInfo"
        }
      }];
      commit("setMenus", data);
      return data;
    },
    logOut({ commit }) {
      localStorage.setItem("token", "");
      commit("setToken", "");
      router.replace("/login");
    }
  }
};
