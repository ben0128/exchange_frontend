const axios = require("axios");


export default {
  async login(context, payload) {
    try {
      const res = await axios.post(
        "https://exchange-backend-kt8e.onrender.com/api/signin",
        {
          email: payload.email,
          password: payload.password,
        }
      );
      if (res.status === 400) {
        throw new Error(res.data.message);
      }
      if (res.status === 200) {
        if (payload.rememberMe) {
          localStorage.setItem("token", res.data.token);
        } else {
          sessionStorage.setItem("token", res.data.token);
        }
        context.commit("clearUserData")
        return { success: true, message: "登入成功" };
      }
    } catch (error) {
      console.log(error);
      return { success: false, message: "登入發生錯誤" };
    }
  },
  async signup(context, payload) {
    try {
      const res = await axios.post(
        "https://exchange-backend-kt8e.onrender.com/api/signup",
        {
          email: payload.email,
          password: payload.password,
          checkPassword: payload.checkPassword,
        }
      );
      if (res.status === 400) {
        throw new Error(res.data.message);
      }
      if (res.status === 200) {
        context.commit("setUserData", {
          email: payload.email,
          password: payload.password,
        });
        return { success: true, message: "註冊成功" };
      }
    } catch (error) {
      console.log(error);
      return { success: false, message: error.message };
    }
  },
  async getUser(context) {
    try {
      const res = await axios.get(
        "https://exchange-backend-kt8e.onrender.com/api/user",
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
        context.commit("setUserAccount", {
          account: res.data.account,
        });
        return { success: true, message: "獲取用戶資料成功" };
      }
    } catch (error) {
      console.log(error);
      return { success: false, message: "獲取用戶資料失敗" };
    }
  },
};
