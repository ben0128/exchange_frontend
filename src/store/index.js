import { createStore } from "vuex";
import authModule from "./modules/auth/index.js";
import targetModule from "./modules/target/index.js";
import journalModule from "./modules/journal/index.js";
import orderModule from "./modules/order/index.js";
import likeModule from "./modules/like/index,js";

const store = createStore({
  modules: {
    auth: authModule,
    target: targetModule,
    journal: journalModule,
    order: orderModule,
    like: likeModule,
  },
});

export default store;
