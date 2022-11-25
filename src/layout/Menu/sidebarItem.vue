<template>
  <div v-for="item in menus" :key="item.id">
    <template>
      <el-menu-item :key="item.id" v-if="item.children.length === 0">
        <template #title>
          <el-icon>
            <component :is="icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
      <el-sub-menu v-else v-for="child in item.children" :key="child.id">
        <sidebar-item
          :is-nest="true"
          class="nest-menu"
          v-if="child.children && child.children.length > 0"
          :routes="[child]"
          :key="child.meta.url"
        ></sidebar-item>
        <el-menu-item :index="'/' + child.meta.url" :key="child.id">
          <template #title>
            <el-icon>
              <component :is="icon"></component>
            </el-icon>
            <span>{{ child.meta.title }}</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'sidebarItem',
  props: {
    menus: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const iconList = ref(['user', 'role'])
    const icon = ref('menu')

    return {
      iconList,
      icon,
      props
    }
  },
  created() {
    // console.log(props.menus)
  }
}
</script>

<style scoped></style>
