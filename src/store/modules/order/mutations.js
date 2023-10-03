export default {
  getOrders(state, payload) {
    state.pendingOrders.push(...payload[0])
    state.completedOrders.push(...payload[1])
  },
  setOrderList(state, payload) {
    const orderList = []
    payload.forEach((order) => {
      if (order.type === "buy") {
        const index = orderList.findIndex(
          (stock) => stock.targetName === order.targetName
        );
        if (index === -1) {
          orderList.push({
            targetName: order.targetName,
            totalShares: order.shares,
          });
        } else {
          orderList[index].totalShares += order.shares;
        }
      } else {
        const index = orderList.findIndex(
          (stock) => stock.targetName === order.targetName
        );
        if (index === -1) {
          orderList.push({
            targetName: order.targetName,
            totalShares: -order.shares,
          });
        } else {
          orderList[index].totalShares -= order.shares;
        }
      }
    });
    state.orderList.push(...orderList);
  },
  setCompletedOrdersValue(state, payload) {
    state.completedOrdersValue = payload
  }
}