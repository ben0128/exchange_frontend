<template>
  <nav class="main-header navbar navbar-expand navbar-dark navbar-dark">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a
          class="nav-link"
          data-widget="pushmenu"
          href="#"
          role="button"
          @click="toggleSidebar"
          ><i class="fas fa-bars"></i
        ></a>
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown2"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Markets
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
          <router-link class="dropdown-item" v-for="market in marketLists"
            :key="market.name"
            :to="market.link"
          >{{ market.name }}</router-link>
        </div>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="/targets" class="nav-link">Find Target</a>
      </li>
    </ul>
    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Messages Dropdown Menu -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-comments"></i>
          <span class="badge badge-danger navbar-badge">3</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <div class="message-list" v-for="item in items" :key="item.id">
            <a href="#" class="dropdown-item">
              <!-- Message Start -->
              <div class="media">
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    {{ item.title }}
                    <span class="float-right text-sm text-danger"
                      ><i class="fas fa-star"></i
                    ></span>
                  </h3>
                  <p class="text-sm">{{ item.content }}</p>
                  <p class="text-sm text-muted">
                    <i class="far fa-clock mr-1"></i> {{ item.time }}
                  </p>
                </div>
              </div>
              <!-- Message End -->
            </a>
            <div class="dropdown-divider"></div>
          </div>
          <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
        </div>
      </li>
      <!-- Notifications Dropdown Menu -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-bell"></i>
          <span class="badge badge-warning navbar-badge">13</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span class="dropdown-header">13 Notifications</span>
          <div class="alert-list" v-for="alert in alerts" :key="alert.id">
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <p v-html="alert.icon"></p> {{ alert.title }}
              <span class="float-right text-muted text-sm">{{
                alert.time
              }}</span>
            </a>
          </div>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer"
            >See All Notifications</a
          >
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { defineEmits } from "vue";

const emits = defineEmits(["showSidebar"]);

const items = [
  {
    id: 1,
    title: "AAPL",
    content: "iPhone 15 Pro過熱全因台積電3奈米？",
    time: "4 hours ago",
  },
  {
    id: 2,
    title: "TSLA",
    content: "特斯拉釋出有關Optimus機器人的更新，展示其辨識思考與平衡能力",
    time: "10 hours ago",
  },
  {
    id: 3,
    title: "NVDA",
    content: "傳NVIDIA H100 GPU 緊缺問題有望2025 年緩解",
    time: "4 hours ago",
  },
];

const alerts = [
  {
    id: 1,
    icon: '<i class="fas fa-envelope mr-2"></i>',
    title: "5 new messages",
    time: "5 mins",
  },
  {
    id: 2,
    icon: '<i class="fas fa-newspaper mr-2"></i>',
    title: "6 news",
    time: "Today",
  },
  {
    id: 3,
    icon: '<i class="fas fa-money-bill-trend-up mr-2"></i>',
    title: "2 new price alerts",
    time: "Yesterday",
  }
]

const marketLists = [
  {
    link: "/markets/allMarkets",
    name: "All Markets",
  },
  {
    link: "/markets/taiwanMarket",
    name: "Taiwan Market",
  },
  {
    link: "/markets/usaMarket",
    name: "US Markets",
  },
  {
    link: "/markets/cryptoMarket",
    name: "Crypto Markets",
  },
]

function toggleSidebar() {
  emits("showSidebar");
}
</script>
<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #333; /* 设置页脚的背景颜色 */
  color: #fff; /* 设置文字颜色 */
}
</style>
