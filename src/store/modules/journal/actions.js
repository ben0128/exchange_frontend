const axios = require("axios");

export default {
  async getAllJournals(context) {
    try {
      const res = await axios.get("https://exchange-backend-kt8e.onrender.com/api/journals");
      context.commit("getJournals", res.data);
      return { success: true };
    } catch (error) {
      return { success: false };
    }
  }
}