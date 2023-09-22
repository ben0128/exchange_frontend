<template>
  <div class="jounal-box">
    <base-dialog
      v-model:show="show"
      :mode="'journal'"
      :title="journalTitle"
      :content="journalContent"
      @update:show="closeDialog"
    ></base-dialog>
    <div class="card">
      <div class="card-header">
        <!-- 標題置中 -->
        <h3 class="card-title">Trade Journals</h3>
        <div class="card-tools">
          <button
            type="button"
            class="btn btn-tool"
            data-card-widget="collapse"
            title="Collapse"
          >
            <i class="fas fa-minus"></i>
          </button>
        </div>
      </div>
      <div class="card-body table-responsive p-0" style="height: 300px">
        <table class="table table-head-fixed text-nowrap">
          <thead>
            <tr>
              <th>No.</th>
              <th>createdAt</th>
              <th>updatedAt</th>
              <th>Title</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="journal in journals" :key="journal.id">
              <td>{{ journal.no }}</td>
              <td>{{ journal.createdAt }}</td>
              <td>{{ journal.updatedAt }}</td>
              <td>{{ journal.title }}</td>
              <td>{{ journal.content }}</td>
              <td>
                <button class="btn btn-primary" @click="getJournal(journal.id)">
                  <span>Read</span>
                </button>
              </td>
              <td>
                <button class="btn btn-danger">
                  <span>Delete</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const show = ref(false);
const journalTitle = ref("");
const journalContent = ref("");
const journals = ref([]);

function closeDialog(bool) {
  show.value = bool;
  store.commit("journal/getOneJournal", {
    title: "",
    content: "",
    _id: "",
    updatedAt: "",
  });
}

async function getAllJournals() {
  await store.dispatch("journal/getAllJournals");
  journals.value = store.getters["journal/getAllJournals"];
}

async function getJournal(id) {
  console.log(id)
  await store.dispatch("journal/getJournal", id);
  journalTitle.value = store.getters["journal/getJournal"].title;
  journalContent.value = store.getters["journal/getJournal"].content;
  show.value = true;
}

onMounted(() => {
  getAllJournals();
});
</script>

<style scoped>
/* 设置整个表格的背景颜色 */
.trade-log-table {
  width: 100%; /* 确保表格占据整个容器的宽度 */
  border-collapse: collapse; /* 合并单元格边框 */
  background-color: #f2f2f2; /* 设置整个表格的背景颜色 */
}

/* 设置表头背景颜色 */
.trade-log-table thead {
  background-color: #333; /* 设置表头的背景颜色 */
  color: rgb(0, 0, 0); /* 设置表头文字颜色为白色 */
}

/* 设置表格中每行交替的背景颜色 */
.trade-log-table tbody tr:nth-child(odd) {
  background-color: #000000; /* 设置奇数行背景颜色为白色 */
}

.trade-log-table tbody tr:nth-child(even) {
  background-color: #f9f9f9; /* 设置偶数行背景颜色为浅灰色 */
}

/* 设置表格单元格边框样式 */
.trade-log-table td,
.trade-log-table th {
  border: 1px solid #090909; /* 设置单元格边框样式 */
  padding: 8px; /* 设置内边距 */
  text-align: center; /* 居中对齐文本 */
}

.table td,
.table th,
h3 {
  color: black;
}
</style>
