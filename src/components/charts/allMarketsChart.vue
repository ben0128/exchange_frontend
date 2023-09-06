<template>
  <div class="tradingview-widget-container">
    <div class="tradingview-widget-container__widget"></div>
    <div class="tradingview-widget-container__widget crypto-widget"></div>
  </div>
</template>

<script>
// import { onMounted } from "vue";
import { onMounted } from "vue";

export default {
  name: "allMarketsChart",
  setup() {
    onMounted(() => {
      loadTradingViewScript();
    });

    const loadTradingViewScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        colorTheme: "dark",
        dateRange: "1D",
        showChart: true,
        locale: "en",
        largeChartUrl: "",
        isTransparent: false,
        showSymbolLogo: true,
        width: "50%",
        height: "600px",
        showFloatingTooltip: true,
        plotLineColorGrowing: "rgba(41, 98, 255, 1)",
        plotLineColorFalling: "rgba(41, 98, 255, 1)",
        gridLineColor: "rgba(240, 243, 250, 0)",
        scaleFontColor: "rgba(106, 109, 120, 1)",
        belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
        belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
        belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
        belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
        symbolActiveColor: "rgba(41, 98, 255, 0.12)",
        tabs: [
          {
            title: "指數",
            symbols: [
              {
                s: "FOREXCOM:SPXUSD",
                d: "S&P 500",
              },
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
      document
        .querySelector(".tradingview-widget-container__widget")
        .appendChild(script);
    };

    return {};
  },
};
</script>

<style>
.tradingview-widget-container {
  border: 2px solid red;
}
</style>
