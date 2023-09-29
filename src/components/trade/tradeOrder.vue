<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">{{ orderTitle }}</h3>
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
            <th>Target</th>
            <th>Type</th>
            <th>Shares</th>
            <th>Price(USD)</th>
            <th>TotalValue(USD)</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(order, index) in props.orderArr"
            :key="order.id"
            :id="order.id"
            :createdAt="order.createdAt"
            :targetName="order.targetName"
            :type="order.type"
            :shares="order.shares"
            :price="order.price"
            :class="{ 'even-row': index % 2 === 0, 'odd-row': index % 2 !== 0 }"
          >
            <td>{{ order.id.slice(-5) }}</td>
            <td>{{ order.createdAt }}</td>
            <td>{{ order.targetName }}</td>
            <td>
              <span
                class="badge"
                :class="order.type === 'buy' ? 'bg-blue' : 'bg-red'"
                >{{ order.type }}</span
              >
            </td>
            <td>{{ order.shares }}</td>
            <td>{{ order.price }}</td>
            <!-- 取到小數點後兩位 -->
            <td>{{ (order.shares * order.price).toFixed(2) }}</td>
            <td>
              <button class="btn btn-primary" v-if="orderTitle === 'Unfilled Orders'">
                <span>Edit</span>
              </button>
            </td>
            <td>
              <button class="btn btn-danger" v-if="orderTitle === 'Unfilled Orders'">
                <span>Delete</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  orderArr: Array,
  orderTitle: String,
});
</script>

<style scoped>
.table td,
.table th,
h3 {
  color: black;
}
/* 凸顯標題 */
.card-title {
  font-weight: bold;
  /* 垂直置中 */
  line-height: 1.5;
}

.even-row {
  background-color: #f2f2f2; /* 白色 */
}

.odd-row {
  background-color: #e0e0e0; /* 灰色 */
}
</style>
