const axios = require("axios");

export default {
  login(context, payload) {
    context.commit("setAuth", { isAuth: true, token: payload.token });
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
};
