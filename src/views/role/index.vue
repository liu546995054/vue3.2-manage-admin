<template>
  <el-upload
    class="upload-demo"
    drag
    :action="api"
    :data="{remark:'4455'}"
    name="file"
    :headers="{Authorization:token}"
    multiple
    :on-success="handleSuccess"
  >
    <el-icon class="el-icon--upload">
      <upload-filled

      />
    </el-icon>
    <div class="el-upload__text">
      Drop file here or <em>click to upload</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </el-upload>
</template>
<script setup>
import { ref } from "vue";
const api = ref(`/koa/apis/upload`)
const token = ref(`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IjExIiwiZW1haWwiOiI1NUBxcS5jb20iLCJwaG9uZSI6IiIsImJpcnRoIjoiMjAyMy0wNC0wNFQwMjoxNDoxMS4wMDBaIiwic2V4IjoxLCJjcmVhdGVkQXQiOiIyMDIzLTA0LTA0VDAyOjE0OjIwLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA0LTA0VDAyOjE0OjIwLjAwMFoiLCJpYXQiOjE2ODYyMDMyMzUsImV4cCI6MTY4NjIxNzYzNX0.7FcmLJ8_W-L-PIUA9FbZKGfxIugaq9CyTi7jGl1fNxY`)
const handleSuccess = (response) => {
  console.log(response);
};
</script>

<style scoped></style>
