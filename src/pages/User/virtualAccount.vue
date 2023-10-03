<template>
  <div class="container">
    <div class="card card-danger">
      <div class="card-header">
        <h3 class="card-title">Total assets: {{ totalValue }}</h3>
      </div>
      <div class="assets-percent">
        <canvas ref="myChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";
import { useStore } from "vuex";

const store = useStore();

const myChart = ref(null);
const cash = ref(0);
const unfilledValue = ref(0);
const completedOrdersValue = ref(0);
const totalValue = ref(0);

onMounted(async () => {
  //獲取用戶餘額
  await store.dispatch("getUser");
  cash.value = store.getters.getAccount;

  //獲取用戶訂單，並將已完成和未完成的訂單分開
  await store.dispatch("order/getAllOrders");
  const unFilledOrders = store.getters["order/getPendingOrders"];

  await store.dispatch("order/countCompletedOrderValue");
  //未完成訂單總淨值
  unFilledOrders.forEach((order) => {
    if (order.type === "buy") {
      unfilledValue.value += order.shares * order.price;
    }
  });
  //計算已完成訂單的總值(手頭股票淨值)
  completedOrdersValue.value = store.getters["order/getCompletedOrdersValue"]
  
  totalValue.value = cash.value + unfilledValue.value + completedOrdersValue.value;
  const ctx = myChart.value.getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Available Balance", "Unfilled Buy Orders", "Stock"],
      datasets: [
        {
          data: [cash.value.toFixed(1), unfilledValue.value.toFixed(1), completedOrdersValue.value.toFixed(1)],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 20,
        },
      ],
    },
    //希望在圓餅圖上顯示文字
    options: {
      animation: {
        animateScale: false,
      },
      plugins: {
        legend: {
          labels: {
            boxWidth: 40,
          }
        },
      },
    },
  });
});
</script>

<style scoped>
.card {
  width: 30rem;
  height: 30rem;
  border-radius: 5%;
}

.assets-percent {
  width: 100%;
  height: 100%;
}

canvas {
  margin: 0 auto;
}
</style>
