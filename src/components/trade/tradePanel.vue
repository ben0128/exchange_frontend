<template>
  <div class="trade">
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
                  'btn-primary': activeOrderType === 'buy',
                  'btn-danger': activeOrderType === 'sell',
                  'btn-light': activeOrderType !== type,
                }"
                @click="changeActiveOrderButton(type)"
              >
                {{ type }}
              </button>
            </div>
            <div class="form-group btn-group">
              <button
                v-for="type in buttonTradeTypes"
                :key="type"
                type="button"
                class="btn"
                :class="{
                  'btn-primary': activeTradeButton === type,
                  'btn-light': activeTradeButton !== type,
                }"
                @click="changeActiveTradeButton(type)"
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
            <label for="marketPrice" v-if="activeTradeButton === 'market'"
              >Trade MarketPrice</label
            >
            <label for="limitPrice" v-else>Trade LimitPrice</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">USDT</span>
              </div>
              <input
                type="text"
                class="form-control"
                id="marketPrice"
                v-model="price"
                disabled
                v-if="activeTradeButton === 'market'"
              />
              <input
                type="text"
                class="form-control"
                id="limitPrice"
                v-model="price"
                v-else
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
                v-model.lazy="shares"
              />
              <input
                type="text"
                class="form-control"
                id="totalValue"
                min="0"
                v-model.lazy="totalValue"
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
          <button type="submit" class="btn btn-primary col-12" v-if="activeOrderType === 'buy'">BUY</button>
          <button type="submit" class="btn btn-danger col-12" v-else>SELL</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, defineProps } from "vue";
import { useStore } from "vuex";
const store = useStore();

const orderTypes = ["buy", "sell"];
const buttonTradeTypes = ["limit", "market"];
const activeTradeButton = ref("limit");
const activeOrderType = ref("buy");

const sliderValue = ref(0);
const account = ref(0);
const price = ref(0);

const props = defineProps({
  trimmedQuery: String,
  target: String,
});

function changeActiveOrderButton(button) {
  activeOrderType.value = button;
}

async function changeActiveTradeButton(button) {
  activeTradeButton.value = button;
  price.value = 0;
  if (button === "market") {
    const res = await store.dispatch("target/getTargetPrice", {
      target: props.trimmedQuery,
    });
    if (res.success) {
      const targetPrice = store.getters["target/getTargetPrice"];
      price.value = parseFloat(targetPrice).toFixed(2);
    } else {
      price.value = 180;
    }
  }
}

async function submitForm() {
  let res = null;
  if (activeTradeButton.value === "market") {
    // console.log(shares)
    res = await store.dispatch("order/addMarketOrder", {
      targetName: props.target,
      type: activeOrderType.value,
      shares: shares.value,
    });
  } else {
    res = await store.dispatch("order/addLimitOrder", {
      targetName: props.target,
      type: activeOrderType.value,
      shares: shares.value,
      price: price.value,
    });
  }
  console.log(res)
  if (res.success) {
    shares.value = 0;
    totalValue.value = 0;
    sliderValue.value = 0;
    price.value = 0;
    alert("交易成功");
  } else {
    alert("不得賣超過現有股數，或是價格無法取得");
  }
}

const totalValue = computed({
  get() {
    return (sliderValue.value * account.value * 0.01).toFixed(2);
  },
  set(newValue) {
    sliderValue.value = (newValue / (account.value * 0.01)).toFixed(2);
    shares.value = newValue / price.value;
  },
});

const shares = computed({
  get() {
    return Math.floor(
      Math.floor(sliderValue.value * 0.01 * account.value) / price.value
    );
  },
  set(newValue) {
    sliderValue.value = (
      ((newValue * price.value) / account.value) *
      100
    ).toFixed(2);
  },
});

onMounted(async () => {
  await store.dispatch("getUser");
  account.value = store.getters.getAccount.toFixed(2);
});
</script>

<style scoped>
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
</style>
