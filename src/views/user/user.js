import { user } from "@/api/login";
import { ref, onMounted } from "vue";

export const getUsers = (params) => {
  let list = ref([]);
  let count = ref(0)

  onMounted(async () => {
    const res = await user(params);
    list.value = res.data.list;
    count.value = res.data.count
  });

  return { list ,count };

};
