<template>
  <div>
    <div class="search-container">
      <form class="form-inline ml-3">
        <div class="input-group input-group-sm">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search"
            @keyup.enter="searchStock(searchQuery)"
          />
          <div class="input-group-append">
            <button type="submit" @click.prevent="searchStock(searchQuery)">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </form>
      <span class="desc"
        >Enter 'AAPL,' 'TSLA,' or 'BTCUSD' to search for the target.</span
      >
    </div>
    <div class="chart-trade" v-if="target">
      <div class="chart">
        <!-- TradingView 图表小部件容器 -->
        <trading-target :target="target" wIndex="1"></trading-target>
      </div>
      <trade-panel :trimmedQuery="trimmedQuery" :target="target"></trade-panel>
    </div>
    <div class="col-12 record">
      <trade-order
        :orderArr="pendingOrders"
        orderTitle="Unfilled Orders"
      ></trade-order>
      <trade-order
        :orderArr="completedOrders"
        orderTitle="Trade History"
      ></trade-order>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import tradingTarget from "../../components/charts/tradingTarget.vue";
import tradeOrder from "../../components/trade/tradeOrder.vue";
import tradePanel from "../../components/trade/tradePanel.vue";

const store = useStore();

const searchQuery = ref("");
const target = ref("");
const trimmedQuery = ref("");

const pendingOrders = ref([]);
const completedOrders = ref([]);

async function searchStock(keyword) {
  target.value = "";
  trimmedQuery.value = keyword.trim().toUpperCase();
  if (trimmedQuery.value) {
    target.value = trimmedQuery.value;
  } else {
    target.value = "";
    searchQuery.value = "";
  }
}

async function setAllOrders() {
  await store.dispatch("order/getAllOrders");
  pendingOrders.value = [...store.getters["order/getPendingOrders"]];
  completedOrders.value = [...store.getters["order/getCompletedOrders"]];
}

onMounted(async () => {
  await setAllOrders();
});
</script>

<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.chart {
  /* 讓圖表大小能自動縮放 */
  width: 75%;
  height: 600px;
}

.desc {
  font-size: 0.8rem;
  color: #6c757d;
}

.chart-trade {
  display: flex;
  justify-content: space-evenly;
}

.record {
  margin-top: 1rem;
}
</style>
