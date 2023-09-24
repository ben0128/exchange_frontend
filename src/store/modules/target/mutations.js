export default {
  setTargetPrice(state, payload) {
    state.targetPrice = payload.latestPrice;
  },
  clearTargetPrice(state) {
    state.targetPrice = 0;
  },
}