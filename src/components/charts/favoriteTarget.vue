<template>
  <div class="tradingview-widget-container">
    <div v-bind:id="wIndexId" class="widget-index"></div>
  </div>
</template>

<script setup>
import { onMounted, defineProps, computed } from "vue";

const props = defineProps(["windex", "targetName"]);

const wIndexId = computed(() => {
  return `widget-index-${props.windex}`;
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
        "isTransparent": false,
        "locale": "en"
      }`;

  // 将脚本插入到 DOM 中
  document.querySelector(`#${idStr}`).appendChild(script);
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
  margin: 1rem auto
}

</style>