import { createStore } from "vuex";
import authModule from "./modules/auth/index.js";
import targetModule from "./modules/target/index.js";
import journalModule from "./modules/journal/index.js";

const store = createStore({
  modules: {
    auth: authModule,
    target: targetModule,
    journal: journalModule,
  },
});

export default store;
