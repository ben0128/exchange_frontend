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
    <div class="chart-trade">
      <div class="chart" v-if="target">
        <!-- TradingView 图表小部件容器 -->
        <trading-target :target="target" wIndex="1"></trading-target>
      </div>
      <div class="trade" v-if="target">
        <div class="row justify-content-center">
          <div class="content">
            <form @submit.prevent="submitForm">
              <div>
                <div class="form-group btn-group">
                  <button
                    v-for="type in orderTypes"
                    :key="type"
                    type="button"
                    class="btn"
                    :class="{
                      'btn-primary': activeOrderType === 'Buy',
                      'btn-danger': activeOrderType === 'Sell',
                      'btn-light': activeOrderType !== type,
                    }"
                    @click="changeActiveOrderButton(type)"
                  >
                    {{ type }}
                  </button>
                </div>
                <div class="form-group btn-group">
                  <button
                    v-for="type in buttonTypes"
                    :key="type"
                    type="button"
                    class="btn"
                    :class="{
                      'btn-primary': activeButton === type,
                      'btn-light': activeButton !== type,
                    }"
                    @click="changeActiveButton(type)"
                  >
                    {{ type }}
                  </button>
                </div>
              </div>

              <div class="form-group">
                <label for="balance">Available Balance</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">USDT</span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="balance"
                    v-model="account"
                    disabled
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="price">Trade Price</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">USDT</span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="price"
                    v-model="price"
                    disabled
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">SHARES</span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="shares"
                    min="0"
                    v-model="shares"
                  />
                  <input
                    type="text"
                    class="form-control"
                    id="price"
                    min="0"
                    v-model="totalValue"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text">USD</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <input
                  type="range"
                  class="custom-range"
                  id="slider"
                  min="0"
                  max="100"
                  step="1"
                  v-model="sliderValue"
                />
                <p id="sliderValue">{{ sliderValue }}% Available Balance</p>
                <p id="sliderUSDValue">{{ totalValue }}USD</p>
              </div>
              <button type="submit" class="btn btn-primary col-12">Buy</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 record">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Untraded Orders</h3>
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
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>220</td>
                <td>11-7-2014</td>
                <td>TSLA</td>
                <td><span class="badge bg-blue">Buy</span></td>
                <td><span class="tag tag-success">91</span></td>
                <td>1222 USD</td>
              </tr>
              <tr>
                <td>242</td>
                <td>11-7-2014</td>
                <td>AAPL</td>
                <td><span class="badge bg-danger">Sell</span></td>
                <td><span class="tag tag-warning">50</span></td>
                <td>4530 USD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Trade History</h3>
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
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>183</td>
                <td>11-7-2014</td>
                <td>TSLA</td>
                <td><span class="badge bg-blue">Buy</span></td>
                <td><span class="tag tag-success">9</span></td>
                <td>123 USD</td>
              </tr>
              <tr>
                <td>219</td>
                <td>11-7-2014</td>
                <td>AAPL</td>
                <td><span class="badge bg-danger">Sell</span></td>
                <td><span class="tag tag-warning">5</span></td>
                <td>453 USD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import tradingTarget from "../../components/charts/tradingTarget.vue";

const searchQuery = ref("");
const target = ref("");
const activeButton = ref("Limit");
const orderTypes = ["Buy", "Sell"];
const activeOrderType = ref("Buy");
const buttonTypes = ["Limit", "Market"];
const sliderValue = ref(0);
const store = useStore();
const account = ref(0);
const price = ref(0);
let shares = ref(0);
const totalValue = ref(0);

async function searchStock(keyword) {
  target.value = "";
  price.value = "";
  const trimmedQuery = keyword.trim().toUpperCase();
  if (trimmedQuery) {
    target.value = trimmedQuery;
  } else {
    target.value = "";
    searchQuery.value = "";
  }

  const res = await store.dispatch("target/getTargetPrice", {
    target: trimmedQuery,
  });
  price.value = Number(res.price) || 180;
}

function changeActiveOrderButton(button) {
  activeOrderType.value = button;
}

function changeActiveButton(button) {
  activeButton.value = button;
}

function submitForm() {
  console.log("submit");
}

onMounted(async () => {
  await store.dispatch("getUser");
  account.value = store.getters.getAccount;
});

// const sharesInput = computed({
//   get: () => shares.value,
//   set: (value) => {
//     shares.value = value;
//     updateTotalValue();
//   },
// });

// const totalValueInput = computed({
//   get: () => totalValue.value,
//   set: (value) => {
//     totalValue.value = value;
//     updateShares();
//   },
// });

// 当输入 shares 时，更新 totalValue 和 sliderValue
// function updateTotalValue() {
//   totalValue.value = (shares.value * price.value).toFixed(2);
//   sliderValue.value = ((shares.value / account.value) * 100).toFixed(2);
// }

// // 当输入 totalValue 时，更新 shares 和 sliderValue
// function updateShares() {
//   shares.value = (totalValue.value / price.value).toFixed(1);
//   sliderValue.value = ((shares.value / account.value) * 100).toFixed(2);
// }

watch(sliderValue, (newSliderValue) => {
  totalValue.value = (newSliderValue * account.value * 0.01).toFixed(2)
  shares.value = (totalValue.value / price.value).toFixed(1);
})

watch(searchQuery, (newTarget) => {
  // 在 target 变化时，判断是否为空，然后清空 searchQuery
  if (!newTarget) {
    target.value = "";
  }
});
</script>

<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* 居中对齐 */
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

.trade {
  width: 30%;
  margin: auto auto;
}

.btn-group {
  display: flex;
  justify-content: space-evenly;
}
.btn {
  margin: 0 0.5rem;
  border-radius: 10px;
}
.content {
  width: 75%;
  max-width: 500px;
}

/* 样式化输入范围滑块 */
.custom-range {
  width: 100%;
  height: 1.4rem; /* 调整滑块高度 */
  appearance: none; /* 隐藏默认样式 */
  background-color: #fffefe; /* 背景颜色 */
  border: none;
  border-radius: 0.5rem; /* 圆角边框 */
  outline: none;
}

/* 定义滑块轨道样式 */
.custom-range::-webkit-slider-runnable-track {
  height: 0.5rem; /* 轨道高度 */
  background-color: #fff; /* 滑块轨道颜色 */
  border-radius: 0.5rem; /* 圆角边框 */
}

/* 定义滑块样式 */
.custom-range::-webkit-slider-thumb {
  width: 1.6rem; /* 滑块宽度 */
  height: 1.6rem; /* 滑块高度 */
  background-color: #007bff; /* 滑块颜色 */
  border: 2px solid #fff; /* 滑块边框 */
  border-radius: 50%; /* 圆形滑块 */
  appearance: none; /* 隐藏默认样式 */
  cursor: pointer;
  margin-top: -0.6rem; /* 调整滑块垂直居中 */
}

/* 定义滑块悬停样式 */
.custom-range::-webkit-slider-thumb:hover {
  background-color: #0056b3; /* 滑块悬停颜色 */
}

/* 样式化滑块当前值显示 */
#sliderValue,
#sliderUSDValue {
  /* display: inline-block; */
  margin-left: 0.5rem; /* 调整当前值位置 */
  font-size: 1rem; /* 字体大小 */
  color: #007bff; /* 文字颜色 */
  font-weight: bold;
}

.record {
  margin-top: 1rem;
}

.table td,
.table th,
h3 {
  color: black;
}
</style>
