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
            <th>Price</th>
            <th>TotalValue</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="order in props.orderArr"
            :key="order.id"
            :id="order.id"
            :createdAt="order.createdAt"
            :targetName="order.targetName"
            :type="order.type"
            :shares="order.shares"
            :price="order.price"
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
            <td>{{ order.price }} USD</td>
            <td>{{ order.price * order.shares }}</td>
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


</style>
