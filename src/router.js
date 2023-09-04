import { createRouter, createWebHistory } from "vue-router";

// import store from "./store/index.js";

const UserAuth = () => import("./pages/Auth/UserAuth.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: UserAuth }],
});

export default router;