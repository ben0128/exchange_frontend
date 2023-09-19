export default {
  setAuth(state, payload) {
    state.isAuth = payload.isAuth;
    state.token = payload.token;
    console.log(state.isAuth, state.token); 
  },
  setUserData(state, payload) {
    state.email = payload.email;
    state.password = payload.password;
  }
}