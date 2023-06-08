<template>
  <div>
    <el-table :data="state.list">
      <el-table-column prop="id" label="编号" width="180" />
      <el-table-column prop="name" label="名称" width="180" />
      <el-table-column prop="email" label="邮箱" />
    </el-table>
    <el-pagination
      v-model:current-page="state.pageIndex"
      v-model:page-size="state.pageSize"
      :page-sizes="[10, 20, 30]"
      layout="total,sizes, prev, pager, next"
      :total="state.count"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>

</template>

<script setup>
import { onMounted, reactive } from "vue";
import { user } from "@/api/login";

const state = reactive({
  list: [],
  count: 0,
  loading: false,
  keywords: "",
  pageIndex: 1,
  pageSize: 10
});
onMounted(() => {
  initTable();
});
const initTable = async () => {
  const res = await user({ keywords: state.keywords, pageIndex: state.pageIndex, pageSize: state.pageSize });
  state.list = res.data.list;
  state.count = res.data.count;
};


const handleSizeChange = (val) => {
  console.log(`${val} items per page`);
  state.pageSize = val
  initTable()
};
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`);
  state.pageIndex = val
  initTable()
};

</script>

<style scoped></style>
