<template>
  <div class="tradingview-widget-container">
    <div v-bind:id="wIndexId" class="widget-index">
      <button class="icon-back" @click="deleteLike(wIndexId)">X</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, defineProps, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps(["wIndex", "targetName"]);

const wIndexId = computed(() => {
  return `widget-index-${props.wIndex}`;
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
  document.querySelector(`#${idStr}`).appendChild(script);
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
  right: 0.2rem;
  z-index: 10;
  /* 顏色跟圖表一樣 */
  background-color: #1d1d1d;
  color: #ffffff; /* 文本颜色 */
  border: none; /* 去掉边框 */
  border-radius: 5px; /* 圆角 */
  cursor: pointer; /* 鼠标样式 */
  font-size: 20px; /* 字体大小 */
  /* 大一點; */
  width: 2rem;
  height: 2rem; 
  transition: transform 0.2s; /* 添加过渡效果 */
}

.icon-back:hover {
  background-color: #cc0000; /* 鼠标悬停时的背景颜色 */
  transform: translateY(-2px); /* 向上移动2像素 */
}
@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-2px); /* 向左移动2像素 */
  }
  50% {
    transform: translateX(2px); /* 向右移动2像素 */
  }
  75% {
    transform: translateX(-2px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
