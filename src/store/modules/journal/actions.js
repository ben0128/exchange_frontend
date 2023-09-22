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
        return { success: true };
      }
    } catch (error) {
      return { success: false };
    }
  },
  async getJournal(context, payload) {
    try {
      // 從state journals中找出符合payload id的journal,並放入state journal
      const journal = context.state.journals.find(
        (journal) => journal._id === payload.id
      );
      console.log(journal)
      context.commit("getOneJournal", journal);
    } catch (error) {
      return { success: false };
    }
  }
};
