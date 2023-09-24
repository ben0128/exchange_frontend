import journalGetters from './getters.js'
import journalMutations from './mutations.js'
import journalActions from './actions.js'

const journalModule = {
  namespaced: true,
  state: {
    journals: [],
    journal: {},
  },
  getters: journalGetters,
  mutations: journalMutations,
  actions: journalActions
}

export default journalModule