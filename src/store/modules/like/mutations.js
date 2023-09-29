export default {
  getAllLikes(state, payload) {
    state.likes = payload.map(target => ({
      _id: target._id,
      targetName: target.targetName,
    })
  )},
  setIsLiked(state, payload) {
    state.isLiked = payload;
  }
}