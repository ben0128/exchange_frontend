import { createRouter, createWebHistory } from "vue-router";

// import store from "./store/index.js";
import NotFound from "./pages/NotFound.vue";
import allMarkets from "./pages/Markets/allMarkets.vue";
// const allMarkets = () => import("./pages/Markets/allMarkets.vue");
const cryptoMarket = () => import("./pages/Markets/cryptoMarket.vue");
const usaMarket = () => import("./pages/Markets/usaMarket.vue");
const taiwanMarket = () => import("./pages/Markets/taiwanMarket.vue");
const UserAuth = () => import("./pages/Auth/UserAuth.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/markets/allMarkets" },
    {
      path: "/",
      children: [
        {
          path: "markets/allMarkets",
          component: allMarkets,
          meta: { name: "All Markets Index" },
        },
        {
          path: "markets/cryptoMarket",
          component: cryptoMarket,
          meta: { name: "Crypto Market" },
        },
        {
          path: "markets/usaMarket",
          component: usaMarket,
          meta: { name: "US Market" },
        },
        {
          path: "markets/taiwanMarket",
          component: taiwanMarket,
          meta: { name: "Taiwan Market" },
        },
      ],
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
