export default {
  setAuth(state, payload) {
    state.isAuth = payload.isAuth;
    state.token = payload.token;
  },
  setUserData(state, payload) {
    state.email = payload.email;
    state.password = payload.password;
  }
}