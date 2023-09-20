import { createStore } from "vuex";
import authModule from "./modules/auth/index.js";
import targetModule from "./modules/target/index.js";

const store = createStore({
  modules: {
    auth: authModule,
    target: targetModule,
  },
});

export default store;
