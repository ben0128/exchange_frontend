export default {
  setTargetPrice(state, payload) {
    state.targetPrice = payload.targetPrice;
  },
  clearTargetPrice(state) {
    state.targetPrice = 0;
  },
}