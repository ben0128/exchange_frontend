<template>
  <div class="tradingview-widget-container">
    <div class="tradingview-widget-container__widget" :id="props.windex"></div>
  </div>
</template>

<script setup>
import { onMounted, defineProps } from "vue";

const props = defineProps(["windex", "target"]);

onMounted(() => {
  loadTradingViewWidget();
});
function loadTradingViewWidget() {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
  script.async = true;

  // 定义 TradingView 小部件配置
  const widgetConfig = {
    symbol: "NASDAQ:TSLA",
    width: "100%",
    colorTheme: "dark",
    isTransparent: false,
    locale: "en",
  };

  script.innerHTML = `{
        "symbol": "${widgetConfig.symbol}",
        "width": "${widgetConfig.width}",
        "colorTheme": "${widgetConfig.colorTheme}",
        "isTransparent": ${widgetConfig.isTransparent},
        "locale": "${widgetConfig.locale}"
      }`;

  // 将脚本插入到 DOM 中
  const container = document.querySelector(
    "#windex .tradingview-widget-container__widget"
  );
  container.appendChild(script);
}
</script>
