import { createRouter, createWebHistory } from "vue-router";

// import store from "./store/index.js";
import NotFound from "./pages/NotFound.vue";
import allMarkets from "./pages/Markets/allMarkets.vue";
// const allMarkets = () => import("./pages/Markets/allMarkets.vue");
const userAccount = () => import("./pages/User/userAccount.vue");
const cryptoMarket = () => import("./pages/Markets/cryptoMarket.vue");
const usaMarket = () => import("./pages/Markets/usaMarket.vue");
const taiwanMarket = () => import("./pages/Markets/taiwanMarket.vue");
const UserAuth = () => import("./pages/Auth/UserAuth.vue");
const tradingJournal = () => import("./pages/User/tradingJournal.vue");
const favoriteAssets = () => import("./pages/User/favoriteAssets.vue");
const userSetting = () => import("./pages/User/userSetting.vue");
const targetDetail = () => import("./pages/Targets/targetDetail.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/markets/allMarkets" },
    {
      path: "/markets",
      children: [
        {
          path: "allMarkets",
          component: allMarkets,
          meta: { name: "All Markets Index" },
        },
        {
          path: "cryptoMarket",
          component: cryptoMarket,
          meta: { name: "Crypto Market" },
        },
        {
          path: "usaMarket",
          component: usaMarket,
          meta: { name: "US Market" },
        },
        {
          path: "taiwanMarket",
          component: taiwanMarket,
          meta: { name: "Taiwan Market" },
        },
      ],
    },
    {
      path: "/user",
      children: [
        {
          path: "realAccount",
          component: userAccount,
          meta: { name: "RealAccount" },
        },
        {
          path: "virtualAccount",
          component: userAccount,
          meta: { name: "VirtualAccount" },
        },
        {
          path: "tradingJournal",
          component: tradingJournal,
          meta: { name: "TradingJournal" },
        },
        {
          path: "favoriteAssets",
          component: favoriteAssets,
          meta: { name: "FavoriteAssets" },
        },
        {
          path: "userSetting",
          component: userSetting,
          meta: { name: "UserSetting" },
        },
      ],
    },
    {
      path: "/targets",
      component: targetDetail,
      props: true,
      meta: { name: "TargetDetail" },
    },
    { path: "/auth", component: UserAuth, meta: { hideHeaderAndFooter: true } },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

// router.beforeEach(function (to, _, next) {
//   if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
//     next("/auth");
//   } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
//     next("/coaches");
//   } else {
//     next();
//   }
// });

export default router;
