const axios = require("axios");
import formatDate from "../../../../utills/formatDate";

export default {
  async addOrder(_, payload) {
    try {
      const endpoint = payload.orderType === "market"
        ? "/api/orders/marketOrder"
        : "/api/orders/limitOrder";

      const res = await axios.post(
        `https://exchange-backend-kt8e.onrender.com${endpoint}`,
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
  async deleteOrder(_, payload) {
    try {
      console.log(payload)
      const url = `https://exchange-backend-kt8e.onrender.com/api/orders/${payload}`;
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
      if (res.status === 400) {
        return { success: false };
      }
      if (res.status === 200) {
        return { success: true };
      }
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  },
  async countCompletedOrderValue(context) {
    const completedOrders = context.getters.getCompletedOrders;
    const orderList = [];
    completedOrders.forEach((order) => {
      if (order.type === "buy") {
        const index = orderList.findIndex(
          (stock) => stock.targetName === order.targetName
        );
        if (index === -1) {
          orderList.push({
            targetName: order.targetName,
            totalShares: order.shares,
          });
        } else {
          orderList[index].totalShares += order.shares;
        }
      } else {
        const index = orderList.findIndex(
          (stock) => stock.targetName === order.targetName
        );
        if (index === -1) {
          orderList.push({
            targetName: order.targetName,
            totalShares: -order.shares,
          });
        } else {
          orderList[index].totalShares -= order.shares;
        }
      }
    });
    let totalValue = 0;
    for (const stock of orderList) {
      const targetPrice = await context.dispatch("target/getTargetPrice", {
        target: stock.targetName,
        mode: "completedOrder",
      }, { root: true });
      totalValue += targetPrice.latestPrice * stock.totalShares;
    }
    context.commit("setCompletedOrdersValue", totalValue);
    return { success: true };
  }
};
