import authGetters from "./getters";
import authMutations from "./mutations";
import authActions from "./actions";

const authModule = {
  state: {
    email: '',
    password: '',
  },
  getters: authGetters,
  mutations: authMutations,
  actions: authActions,
};

export default authModule;
