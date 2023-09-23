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
      const journal = await context.state.journals.find(
        (journal) => journal.id === payload.id
      );
      // console.log(journal)
      if (journal) {
        context.commit("getOneJournal", journal);
        return { success: true };
      } else {
        return { success: false };
      }
    } catch (error) {
      return { success: false };
    }
  },
  async addJournal(_, payload) {
    try {
      const res = await axios.post(
        "https://exchange-backend-kt8e.onrender.com/api/journals",
        {
          title: payload.title,
          content: payload.content,
        },
        {
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("token") || sessionStorage.getItem("token")
            }`,
          },
        },
      );
      // console.log(res);
      if (res.status === 400) {
        throw new Error(res.data.message);
      }
      if (res.status === 200) {
        return { success: true };
      }
    } catch (error) {
      return { success: false };
    }
  },
};
