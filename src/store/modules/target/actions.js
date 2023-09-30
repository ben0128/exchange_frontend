const axios = require("axios");

export default {
  async getTargetPrice(context, payload) {
    try {
      const res = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${payload.target}&interval=1min&apikey=${process.env.VUE_APP_ALPHA_VANTAGE_API_KEY}`
      );
      const timeSeriesData = res.data["Time Series (1min)"];
      const latestTimestamp = Object.keys(timeSeriesData)[0];
      const latestPrice = timeSeriesData[latestTimestamp]["1. open"];
      //將價格存入state
      // console.log(latestPrice)
      context.commit("setTargetPrice", { latestPrice });
      return { success: true };
    } catch (error) {
      return { success: false };
    }
  },
};
