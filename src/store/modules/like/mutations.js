export default {
  getAllLikes(state, payload) {
    state.likes = payload.targets.map(target => ({
      _id: target._id,
      targetName: target.targetName,
    })
  )},

}