<template>
  <div class="chart-container">
    <trading-widget id="chart_1" wIndex="1" :wTabs="idx"></trading-widget>
    <trading-widget id="chart_2" wIndex="2" :wTabs="debt"></trading-widget>
    <trading-widget id="chart_3" wIndex="3" :wTabs="crypto"></trading-widget>
    <trading-widget id="chart_4" wIndex="4" :wTabs="eco"></trading-widget>
  </div>
</template>

<script setup>
import TradingWidget from "../../components/charts/allMarketsChart.vue";
import idx from '../../../config/index&future.js'
import debt from '../../../config/debt&forex.js'
import crypto from '../../../config/crypto.js'
import eco from '../../../config/eco.js'

</script>

<style scoped>
.chart-container {
  /* 讓圖表大小能自動縮放 */
  display: flex;
  justify-content: space-between;
}
</style>
