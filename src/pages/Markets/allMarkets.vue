<template>
  <div>
    <trading-widget id="chart_1"></trading-widget>
    <trading-widget id="chart_2"></trading-widget>
    <trading-widget id="chart_3"></trading-widget>
  </div>
</template>

<script>
import TradingWidget from "../../components/charts/allMarketsChart.vue";

export default {
  components: {
    TradingWidget,
  },
};
</script>

<style scoped>
trading-widget {
}
</style>
