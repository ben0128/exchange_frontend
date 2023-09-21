export default {
  getJournals(state, payload) {
    state.journals = [...payload]
  }
}