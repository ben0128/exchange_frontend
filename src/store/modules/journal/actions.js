const axios = require("axios");

export default {
  async getAllJournals(context) {
    try {
      const res = await axios.get(
        "https://exchange-backend-kt8e.onrender.com/api/journals",
        {
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("token") || sessionStorage.getItem("token")
            }`,
          },
        }
      );
      if (res.status === 400) {
        throw new Error(res.data.message);
      }
      if (res.status === 200) {
        context.commit("getJournals", res.data.journals);
        console.log(context.state.journals);
        return { success: true };
      }
    } catch (error) {
      return { success: false };
    }
  },
};
