const axios = require("axios");
import { useRouter } from "vue-router";

export default {
  login(context, payload) {
    context.commit("setAuth", { isAuth: true, token: payload.token });
  },
  async signup(context, payload) {
    try {
      const res = await axios.post("https://exchange-backend-kt8e.onrender.com/api/signup", {
        email: payload.email,
        password: payload.password,
        checkPassword: payload.checkPassword,
      });
      if (res.status === 400) {
        throw new Error(res.message);
      }
      if (res.status === 200) {
        console.log(res);
        context.commit("setUserData", { email: payload.email, password: payload.password})
      }
      const router = useRouter();
      router.push({ path: "/auth"})
    } catch (error) {
      console.log(error);
    }
  },
};
