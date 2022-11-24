import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import SvgIcon from '@/icons'
import '@/router/permission'

const app = createApp(App)
SvgIcon(app)
// for (const iconName in ElementPlusIconsVue) {
//   app.component(iconName, ElementPlusIconsVue[iconName])
// }
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus).use(store).use(router).mount('#app')
