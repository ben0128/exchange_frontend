export default {
  getOrders(state, payload) {
    state.pendingOrders.push(...payload[0])
    state.completedOrders.push(...payload[1])
  }
}