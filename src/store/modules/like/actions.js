const axios = require("axios");

export default {
  async getAllLikes(context) {
    try {
      const res = await axios.get(
        "https://exchange-backend-kt8e.onrender.com/api/targets",
        {
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("token") || sessionStorage.getItem("token")
            }`,
          },
        }
      );
      if (res.status === 400) {
        return { success: false };
      }
      if (res.status === 200) {
        context.commit("getAllLikes", res.data.targets);
        return { success: true };
      }
    } catch (error) {
      return { success: false };
    }
  },
  async deleteLike(_, payload) {
    try {
      const res = await axios.delete(
        "https://exchange-backend-kt8e.onrender.com/api/targets",
        {
          id: payload._id,
        },
        {
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("token") || sessionStorage.getItem("token")
            }`,
          },
        }
      );
      console.log(res);
      if (res.status === 400) {
        return { success: false };
      }
      if (res.status === 200) {
        return { success: true };
      }
    } catch (error) {
      return { success: false };
    }
  }
};
