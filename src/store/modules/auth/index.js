import authGetters from "./getters";
import authMutations from "./mutations";
import authActions from "./actions";

const authModule = {
  state: {
    email: '',
    password: '',
    account: null,
  },
  getters: authGetters,
  mutations: authMutations,
  actions: authActions,
};

export default authModule;
