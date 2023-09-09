<template>
  <div class="tradingview-widget-container">
    <div :id="widgetId"></div>
  </div>
</template>

<script setup>
import { onMounted, defineProps } from "vue";
// import targetConfig from "../../../config/target.js";
const props = defineProps(["target"]);
const widgetId = "technical-analysis-chart-demo";
onMounted(() => {
  loadTradingViewScript();
});
function loadTradingViewScript() {
  if (document.getElementById(widgetId) && "TradingView" in window) {
    new window.TradingView.widget({
      container_id: widgetId,
      width: "100%",
      height: "100%",
      autosize: true,
      symbol: `${props.target}`,
      interval: "D",
      timezone: "exchange",
      theme: "dark",
      style: "1",
      withdateranges: true,
      hide_side_toolbar: false,
      allow_symbol_change: true,
      save_image: false,
      studies: [
        "ROC@tv-basicstudies",
        "StochasticRSI@tv-basicstudies",
        "MASimple@tv-basicstudies",
      ],
      show_popup_button: true,
      popup_width: "1000",
      popup_height: "650",
      locale: "zh_TW",
    });
  }
}
</script>
