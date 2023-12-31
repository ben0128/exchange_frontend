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
  async changeLike(_, payload) {
    try {
      const res = await axios.post(
        "https://exchange-backend-kt8e.onrender.com/api/targets",
        {
          targetName: payload.target,
          isLiked: payload.isLiked,
        },
        {
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("token") || sessionStorage.getItem("token")
            }`,
          },
        }
      )
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
  },
  async deleteLike(_, payload) {
    try {
      const url = `https://exchange-backend-kt8e.onrender.com/api/targets/${payload}`;
      const res = await axios.delete(
        url,
        {
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("token") || sessionStorage.getItem("token")
            }`,
          },
        }
      );  
      console.log(res);
      if (res.status === 401) {
        return { success: false };
      }
      if (res.status === 200) {
        return { success: true };
      }
    } catch (error) {
      return { success: false };
    }
  },
  async getIsLiked(context, payload) {
    try {
      const res = await axios.get(
        "https://exchange-backend-kt8e.onrender.com/api/targets/isLiked",
        {
          params: { target: payload },
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("token") || sessionStorage.getItem("token")
            }`,
          },
        }
      );
      if (res.status === 200) {
        context.commit("setIsLiked", res.data);
        return { success: res.data };
      } else {
        return { success: false };
      }
    } catch (error) {
      return { success: false };
    }
  }
};
