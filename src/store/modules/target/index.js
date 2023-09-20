import targetActions from './actions'; 
import targetGetters from './getters';
import targetMutations from './mutations';

const targetModule = {
  namespaced: true,
  state: {
    target: null,
    targets: [],
    targetPrice: null,
  },
  getters: targetGetters,
  mutations: targetMutations,
  actions: targetActions,
};

export default targetModule;