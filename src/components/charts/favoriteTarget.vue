<template>
  <div class="tradingview-widget-container">
    <div v-bind:id="wIndexId" class="widget-index"></div>
    <button class="icon-back" @click="deleteLike(wIndexId)">
      <i class="fa-regular fa-delete-left fa-2xl" style="#000000"></i>
    </button>
  </div>
</template>

<script setup>
import { onMounted, defineProps, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps(["windex", "targetName"]);

const wIndexId = computed(() => {
  return props.windex;
});

function loadTradingViewWidget(idStr) {
  if (idStr == "") return;
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
  script.async = true;
  // 定義 TradingView Widget 的設定
  script.innerHTML = `{
        "symbol": "${props.targetName}",
        "width": "100%",
        "colorTheme": "dark",
        "hideLogo": true,
        "isTransparent": false,
        "locale": "en"
      }`;

  // 将脚本插入到 DOM 中
  const itemId = "#" + idStr.toString();
  console.log(itemId);
  document.querySelector(itemId).appendChild(script);
}

async function deleteLike(idStr) {
  await store.dispatch("like/deleteLike", idStr);
}

onMounted(() => {
  loadTradingViewWidget(wIndexId.value);
});
</script>

<style scoped>
.widget-index {
  /* 保持比例 */
  width: 20rem;
}
.tradingview-widget-container {
  margin: 1rem auto;
  position: relative;
}

.icon-back {
  position: absolute;
  top: 0.2rem;
  right: 0.3rem;
  z-index: 10;
  /* 跟圖表背景一樣 */
  background: #1f1f1f;
  /* 大一點; */
  width: 2rem;
  height: 2rem;
}
</style>
