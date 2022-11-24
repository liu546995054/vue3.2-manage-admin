<template>
  <el-container class="app-wrapper">
    <el-aside :width="sideBarWidth" class="sidebar-container">
      <Menu />
    </el-aside>
    <el-container
      class="container"
      :class="{ hidderContainer: !$store.getters.sideType }"
    >
      <el-header> <Header /></el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import variables from '@/styles/variables.module.scss'
import Menu from './Menu'
import Header from '@/layout/headers'

const store = useStore()
// const sideBarWidth = ref(variables.sideBarWidth)
const sideBarWidth = computed(() => {
  return store.getters.sideType
    ? variables.sideBarWidth
    : variables.hideSideBarWidth
})
</script>

<style lang="scss" scoped>
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.container {
  width: calc(100% - #{$sideBarWidth});
  //width: $sideBarWidth;
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  //left: $sideBarWidth;
  z-index: 9;
  transition: all 0.28s;
  &.hidderContainer {
    width: calc(100% - #{$hideSideBarWidth});
  }
}
::v-deep .el-header {
  padding: 0;
}
</style>
