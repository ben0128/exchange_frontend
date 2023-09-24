import formatDate from "../../../../utills/formatDate"

export default {
  getJournals(state, payload) {
    state.journals = payload.map((item, index) => ({
      id: item._id,
      no: index + 1,
      title: item.title,
      content: item.content,
      createdAt: formatDate(item.createdAt),
      updatedAt: formatDate(item.updatedAt)
    }));
  },
  getOneJournal(state, payload) {
    state.journal = {
      id: payload.id,
      title: payload.title,
      content: payload.content,
      updatedAt: formatDate(payload.updatedAt)
    };
  },
}