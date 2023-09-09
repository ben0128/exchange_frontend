<template>
  <div>
    <div class="search">
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
    <div class="chart" v-if="target">
      <!-- TradingView 图表小部件容器 -->
      <trading-target :target="target" wIndex="1"></trading-target>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import tradingTarget from "../../components/charts/tradingTarget.vue";

const searchQuery = ref("");
const target = ref("");

const searchStock = (keyword) => {
  target.value = "";
  console.log(target.value, keyword);
  const trimmedQuery = keyword.trim().toUpperCase();
  if (trimmedQuery) {
    target.value = trimmedQuery;
  } else {
    target.value = "";
    searchQuery.value = "";
  }
};

watch(searchQuery, (newTarget) => {
  // 在 target 变化时，判断是否为空，然后清空 searchQuery
  if (!newTarget) {
    target.value = "";
  }
});
</script>

<style scoped>
.chart {
  /* 讓圖表大小能自動縮放 */
  width: 80%;
  height: 600px;
}

.desc {
  font-size: 0.8rem;
  color: #6c757d;
  margin-left: 10px;
}

.search {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
