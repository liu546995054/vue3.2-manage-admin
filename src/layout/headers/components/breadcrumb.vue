<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
      <span v-if="index === breadcrumbList.length - 1" class="no-redirect">{{
        item.name
      }}</span>
      <router-link v-else :to="item.redirect || item.path"
        >{{ item.name }}
      </router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()

const breadcrumbList = ref([])
const initBreadcrumb = () => {
  breadcrumbList.value = route.matched
  console.log(breadcrumbList.value)
}
watch(
  route,
  () => {
    initBreadcrumb()
  },
  { deep: true, immediate: true }
)
</script>

<style scoped></style>
