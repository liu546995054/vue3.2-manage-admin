<template>
  <div></div>
  <div>{{ name }}</div>
  <div>{{ author.name }}</div>
  <el-button @click="name = 'Tom'">+</el-button>
</template>

<script setup>
import { ref } from 'vue'

const object = { foo: ref(1) }
const author = {
  name: ref('John Doe')
}
const name = author.name
console.log(object)
</script>

<style scoped></style>
