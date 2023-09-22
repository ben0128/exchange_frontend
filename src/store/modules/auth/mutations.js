export default {
  setUserData(state, payload) {
    state.email = payload.email;
    state.password = payload.password;
  },
  clearToken() {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  },
  clearUserData(state) {
    state.email = "";
    state.password = "";
  },
  setUserAccount(state, payload) {
    state.account = payload.account;
  },
};
