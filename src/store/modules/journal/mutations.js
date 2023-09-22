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
  }
}

function formatDate(dateString) {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
}