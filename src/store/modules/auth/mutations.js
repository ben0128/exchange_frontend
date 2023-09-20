export default {
  setUserData(state, payload) {
    state.email = payload.email;
    state.password = payload.password;
  }
}