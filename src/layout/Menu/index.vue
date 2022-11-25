<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    text-color="#fff"
    router
    unique-opened
    :collapse="!$store.getters.sideType"
  >
    <SidebarItem :menus="menusList" />
  </el-menu>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import SidebarItem from '@/layout/Menu/sidebarItem'
import { useStore } from 'vuex'
export default defineComponent({
  components: { SidebarItem },
  setup() {
    const store = useStore()
    const router = useRouter()
    const defaultActive = router.currentRoute.value.path
    const menusList = computed(() => store.getters['menus'])

    return {
      defaultActive,
      menusList
    }
  }
})
</script>

<style scoped></style>
