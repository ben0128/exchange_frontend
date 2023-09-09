<template>
  <div class="tradingview-widget-container">
    <div v-bind:id="wIndexId" class="widget-index"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps, computed } from "vue";
import chartConfig from "../../../config/chart.js";
const props = defineProps(["wIndex", "wTabs"]);
// 導入wTabs


const tradingViewSettings = ref({
  ...chartConfig,
  tabs: props.wTabs,
});
const wIndexId = computed(() => {
  return `widget-index-${props.wIndex}`;
});
onMounted(() => {
  // 加載TradingView Widget的腳本並初始化
  loadTradingViewScript(wIndexId.value, tradingViewSettings.value);
});

function loadTradingViewScript(idStr, settings) {
  if (idStr == "") return;
  const script = document.createElement("script");
  script.src =
    "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
  script.async = true;

  script.innerHTML = JSON.stringify(settings);

  // 將腳本添加到頁面中
  document.querySelector(`#${idStr}`).appendChild(script);
}
</script>

