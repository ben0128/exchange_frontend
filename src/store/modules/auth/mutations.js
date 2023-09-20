export default {
  setUserData(state, payload) {
    state.email = payload.email;
    state.password = payload.password;
    state.account = payload.account;
  },
  clearUserData(state) {
    state.email = '';
    state.password = '';
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  },
}