import { createRouter, createWebHistory } from "vue-router";

// import store from "./store/index.js";
import NotFound from "./pages/NotFound.vue";
const allMarkets = () => import("./pages/Markets/allMarkets.vue");
const userAccount = () => import("./pages/User/userAccount.vue");
const cryptoMarket = () => import("./pages/Markets/cryptoMarket.vue");
const usaMarket = () => import("./pages/Markets/usaMarket.vue");
const taiwanMarket = () => import("./pages/Markets/taiwanMarket.vue");
const UserAuth = () => import("./pages/Auth/UserAuth.vue");
const tradingJournal = () => import("./pages/Journals/tradeJournals.vue");
const favoriteAssets = () => import("./pages/User/favoriteAssets.vue");
const userSetting = () => import("./pages/User/userSetting.vue");
const targetDetail = () => import("./pages/Targets/targetDetail.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/markets/allMarkets" },
    {
      path: "/markets",
      meta: { requiresAuth: true },
      children: [
        {
          path: "allMarkets",
          component: allMarkets,
        },
        {
          path: "cryptoMarket",
          component: cryptoMarket,
        },
        {
          path: "usaMarket",
          component: usaMarket,
        },
        {
          path: "taiwanMarket",
          component: taiwanMarket,
        },
      ],
    },
    {
      path: "/user",
      meta: { requiresAuth: true },
      children: [
        {
          path: "realAccount",
          component: userAccount,
        },
        {
          path: "virtualAccount",
          component: userAccount,
        },
        {
          path: "tradingJournal",
          component: tradingJournal,
        },
        {
          path: "favoriteAssets",
          component: favoriteAssets,
        },
        {
          path: "userSetting",
          component: userSetting,
        },
      ],
    },
    {
      path: "/targets",
      meta: { requiresAuth: true },
      component: targetDetail,
    },
    {
      path: "/auth",
      component: UserAuth,
      meta: { hideHeaderAndFooter: true },
    },
    {
      path: "/logout",
      component: UserAuth,
      meta: { hideHeaderAndFooter: true },
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

// router.beforeEach(function (to, _, next) {
//   if (to.meta.requiresAuth && (!localStorage.getItem("token") && !sessionStorage.getItem("token"))) {
//     next("/auth");
//   } else {
//     next();
//   }
// });

export default router;
