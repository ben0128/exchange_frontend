const axios = require("axios");
import formatDate from "../../../../utills/formatDate";

export default {
  async addMarketOrder(_, payload) {
    try {
      console.log(payload)
      const res = await axios.post(
        "https://exchange-backend-kt8e.onrender.com/api/orders/marketOrder",
        {
          targetName: payload.targetName,
          type: payload.type,
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
      console.log(res);
      if (res.status === 400) {
        return { success: false };
      }
      if (res.status === 201) {
        return { success: true };
      }
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  },
  async addLimitOrder(_, payload) {
    try {
      // console.log(payload)
      const res = await axios.post(
        "https://exchange-backend-kt8e.onrender.com/api/orders/limitOrder",
        {
          targetName: payload.targetName,
          type: payload.type,
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
      console.log(res)
      if (res.status === 400) {
        throw new Error(res.data.message);
      }
      if (res.status === 201) {
        return { success: true };
      }
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  },
  async getAllOrders(context) {
    try {
      const res = await axios.get(
        "https://exchange-backend-kt8e.onrender.com/api/orders",
        {
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("token") || sessionStorage.getItem("token")
            }`,
          },
        }
      );
      const orders = res.data.order;
      const pendingOrderArr = [];
      const completedOrderArr = [];
      orders.forEach((order) => {
        const newOrder = {
          price: order.price,
          shares: order.shares,
          type: order.type,
          targetName: order.targetName,
          createdAt: formatDate(order.createdAt),
          id: order._id,
        }
        if (order.state === "pending") {
          pendingOrderArr.push(newOrder);
        } else if (order.state === "completed") {
          completedOrderArr.push(newOrder);
        }
      });
      context.commit("getOrders", [pendingOrderArr, completedOrderArr]);
      return { success: true };
    } catch (error) {
      return { success: false };
    }
  },
};
