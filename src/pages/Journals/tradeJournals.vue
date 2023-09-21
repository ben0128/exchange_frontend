<template>
  <div class="card">
    <div class="card-header">
      <!-- 標題置中 -->
      <h3 class="card-title">Trade Journal</h3>
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
            <th>ID</th>
            <th>Date</th>
            <th>Title</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>183</td>
            <td>11-7-2014</td>
            <td>Big short day</td>
            <td>Take profit rightnow</td>
            <td><button type="button" class="btn btn-primary">Read</button></td>
            <td>
              <button type="button" class="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>219</td>
            <td>11-7-2014</td>
            <td>Looooong today</td>
            <td>Fed Chair Powell tonight</td>
            <td><button type="button" class="btn btn-primary">Read</button></td>
            <td>
              <button type="button" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
// import { useRouter } from "vue-router";

const store = useStore();

function getAllJournals() {
  store.dispatch("journals/getAllJournals");
}
onMounted(() => {
  getAllJournals()
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
