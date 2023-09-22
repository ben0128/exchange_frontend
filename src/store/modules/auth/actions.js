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
        throw new Error(res);
      }
      if (res.status === 200) {
        context.commit("setAuth", {
          isAuth: true,
          token: res.token,
        });
        return { success: true, message: "登入成功" };
      }
    } catch (error) {
      console.log(error);
      return { success: false, message: "登入失敗" };
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
        throw new Error(res.message);
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
      return { success: false, message: "註冊失敗" };
    }
  },
};
