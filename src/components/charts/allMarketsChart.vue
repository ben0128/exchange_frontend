<template>
  <div class="tradingview-widget-container">
    <div class="widget-index"></div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import chartConfig from "../../../config/chart.js";

export default {
  setup() {
    // 使用ref來保存TradingView的設置
    const tradingViewSettings = ref({
      ...chartConfig,
      tabs: [
        {
          title: "指數",
          symbols: [
            // {
            //   s: "FOREXCOM:SPXUSD",
            //   d: "S&P 500",
            // },
            {
              s: "FOREXCOM:NSXUSD",
              d: "US 100",
            },
            {
              s: "FOREXCOM:DJI",
              d: "Dow 30",
            },
            {
              s: "INDEX:NKY",
              d: "Nikkei 225",
            },
            {
              s: "INDEX:DEU40",
              d: "DAX Index",
            },
            {
              s: "FOREXCOM:UKXGBP",
              d: "UK 100",
            },
          ],
          originalTitle: "Indices",
        },
        {
          title: "期貨",
          symbols: [
            {
              s: "CME_MINI:ES1!",
              d: "S&P 500",
            },
            {
              s: "CME:6E1!",
              d: "Euro",
            },
            {
              s: "COMEX:GC1!",
              d: "Gold",
            },
            {
              s: "NYMEX:CL1!",
              d: "Oil",
            },
            {
              s: "NYMEX:NG1!",
              d: "Gas",
            },
            {
              s: "CBOT:ZC1!",
              d: "Corn",
            },
          ],
          originalTitle: "Futures",
        },
        {
          title: "債券",
          symbols: [
            {
              s: "CME:GE1!",
              d: "Eurodollar",
            },
            {
              s: "CBOT:ZB1!",
              d: "T-Bond",
            },
            {
              s: "CBOT:UB1!",
              d: "Ultra T-Bond",
            },
            {
              s: "EUREX:FGBL1!",
              d: "Euro Bund",
            },
            {
              s: "EUREX:FBTP1!",
              d: "Euro BTP",
            },
            {
              s: "EUREX:FGBM1!",
              d: "Euro BOBL",
            },
          ],
          originalTitle: "Bonds",
        },
        {
          title: "外匯",
          symbols: [
            {
              s: "FX:EURUSD",
              d: "EUR to USD",
            },
            {
              s: "FX:GBPUSD",
              d: "GBP to USD",
            },
            {
              s: "FX:USDJPY",
              d: "USD to JPY",
            },
            {
              s: "FX:USDCHF",
              d: "USD to CHF",
            },
            {
              s: "FX:AUDUSD",
              d: "AUD to USD",
            },
            {
              s: "FX:USDCAD",
              d: "USD to CAD",
            },
          ],
          originalTitle: "Forex",
        },
      ],
    });

    onMounted(() => {
      // 加載TradingView Widget的腳本並初始化
      loadTradingViewScript(tradingViewSettings.value);
    });

    function loadTradingViewScript(settings) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
      script.async = true;

      script.innerHTML = JSON.stringify(settings);

      // 將腳本添加到頁面中
      document.querySelector(".widget-index").appendChild(script);
    }

    return {
      // 將ref暴露給模板
      tradingViewSettings,
    };
  },
};
</script>

<style scoped>
</style>
