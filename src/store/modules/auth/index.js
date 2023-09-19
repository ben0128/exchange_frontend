import authGetters from "./getters";
import authMutations from "./mutations";
import authActions from "./actions";

const authModule = {
  state: {
    isAuth: false,
    token: null,
    email: '',
    password: '',
  },
  getters: authGetters,
  mutations: authMutations,
  actions: authActions,
};

export default authModule;
