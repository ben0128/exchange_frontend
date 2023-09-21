const axios = require("axios");

export default {
  async getTargetPrice(context, payload) {
    try {
      const res = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${payload.target}&interval=1min&apikey=THTHIU7W1Q42J0EF`
      );
      const timeSeriesData = res.data["Time Series (1min)"];
      const latestTimestamp = Object.keys(timeSeriesData)[0];
      const latestPrice = timeSeriesData[latestTimestamp]["1. open"];
      //將價格存入state
      context.commit("setTargetPrice", latestPrice);
      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  },
  async addMarketOrder(context, payload) {
    try {
      console.log(context.rootState.auth.token);
      const res = await axios.post(
        "https://exchange-backend-kt8e.onrender.com/api/orders/marketOrder",
        {
          targetName: payload.targetName,
          type: payload.activeOrderType,
          shares: payload.shares,
        },
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
        return { success: true };
      }
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  },
  async addLimitOrder(context, payload) {
    try {
      const res = await axios.post(
        "https://exchange-backend-kt8e.onrender.com/api/orders/limitOrder",
        {
          targetName: payload.targetName,
          type: payload.activeOrderType,
          shares: payload.shares,
          price: payload.price,
        },
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
        return { success: true };
      }
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  },
};
