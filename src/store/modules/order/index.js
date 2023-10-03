import orderGetters from './getters'
import orderMutations from './mutations'
import orderActions from './actions'

const orderModule = {
  namespaced: true,
  state: {
    pendingOrders: [],
    completedOrders: [],
    completedOrdersValue: 0,
  },
  getters: orderGetters,
  mutations: orderMutations,
  actions: orderActions
}

export default orderModule