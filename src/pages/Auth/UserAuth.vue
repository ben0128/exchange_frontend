<template>
  <div class="register-box">
    <base-dialog
      :show="show"
      :title="text"
      @update:show="changeShow"
    ></base-dialog>
    <div class="card">
      <div class="card-body register-card-body">
        <div class="logo-image"></div>
        <p class="login-box-msg" v-html="description"></p>
        <form
          action="../../index.html"
          method="post"
          @submit.prevent="submitForm"
        >
          <base-input
            icon="envelope"
            inputType="email"
            placeText="Email"
            v-model="email"
          ></base-input>
          <base-input
            icon="lock"
            inputType="password"
            placeText="Password"
            v-model="password"
          ></base-input>
          <base-input
            icon="lock"
            inputType="password"
            placeText="Password"
            v-if="!checkMode"
            v-model="checkPassword"
          ></base-input>
          <div class="row">
            <div class="col-8">
              <div class="icheck-primary" @click.prevent="changeRememberMe">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="terms"
                  value="agree"
                  v-model="rememberMe"
                />
                <label for="agreeTerms" v-if="checkMode"> Remember Me </label>
                <label for="agreeTerms" v-else>
                  I agree to the
                  <a href="#" @click.prevent="changeShow(true)">terms</a>
                </label>
              </div>
            </div>
            <div class="col-4">
              <div v-if="!isLoading">
                <button type="submit" class="btn btn-primary btn-block">
                  <span>{{ buttonText }}</span>
                </button>
              </div>
              <div v-else>
                <button class="btn btn-primary" type="button" disabled>
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </form>
        <div class="social-auth-links text-center">
          <p>- OR -</p>
          <a href="#" class="btn btn-block btn-primary">
            <i class="fab fa-facebook mr-2"></i>
            Facebook
          </a>
          <a href="#" class="btn btn-block btn-danger">
            <i class="fab fa-google mr-2"></i>
            Google
          </a>
        </div>
        <div v-if="!checkMode">
          <a href="#" @click="changeMode">I already have a membership</a>
        </div>
        <div v-else>
          <!-- <a href="#">I forgot my password</a> -->
          <!-- <br /> -->
          <a href="#" @click="changeMode">Register a new membership</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useStore } from "vuex";
import background from "../../assets/loginbackground.jpg";
import router from "../../router";

const bgImagePath = ref(background);
const show = ref(false);
const text = ref("本網站僅供參考，不構成投資建議!!");
const mode = ref("Login");
const email = ref("");
const password = ref("");
const checkPassword = ref("");
const store = useStore();
const rememberMe = ref(false);
const isLoading = ref(false);

function changeShow(bool) {
  show.value = bool;
}

const buttonText = computed(() => {
  return mode.value === "Login" ? "Login" : "Register";
});

const description = computed(() => {
  return mode.value === "Login"
    ? "<strong>Login</strong> to continue"
    : "<strong>Register</strong> a new membership";
});

function changeRememberMe() {
  rememberMe.value = !rememberMe.value;
}

async function submitForm() {
  if (email.value === "" || password.value === "") {
    return alert("請輸入帳號或密碼");
  }
  if (password.value.length < 6) {
    return alert("密碼長度不足6碼");
  }
  if (mode.value === "Login") {
    isLoading.value = true;
    const res = await store.dispatch("login", {
      email: email.value,
      password: password.value,
      rememberMe: rememberMe.value,
    });

    if (res.success) {
      isLoading.value = false;
      router.push("/");
    } else {
      isLoading.value = false;
      alert("帳號或密碼錯誤");
    }
  } else if (mode.value === "Register") {
    if (password.value !== checkPassword.value) {
      return alert("密碼不一致");
    }
    // checkbox要打勾
    if (rememberMe.value === false && mode.value === "Register") {
      return alert("請勾選同意條款");
    }
    isLoading.value = true;
    const res = await store.dispatch("signup", {
      email: email.value,
      password: password.value,
      checkPassword: checkPassword.value,
    });
    if (res.success) {
      isLoading.value = false;
      alert("註冊成功");
      changeMode();
    } else {
      isLoading.value = false;
      alert("此信箱已註冊！");
    }
  }
}

function changeMode() {
  if (mode.value === "Login") {
    email.value = "";
    password.value = "";
    checkPassword.value = "";
  }
  mode.value = mode.value === "Login" ? "Register" : "Login";
}

const checkMode = computed(() => {
  return mode.value === "Login";
});

onMounted(() => {
  document.body.style.backgroundImage = `url(${bgImagePath.value})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
});

onBeforeUnmount(() => {
  document.body.style.backgroundImage = "";
});
</script>

<style scoped>
.register-box {
  width: 360px;
  margin: 0 auto;
}

.card-body {
  border-radius: 30px;
}

.logo-text {
  font-size: 35px;
  font-weight: 700;
  color: #cf1212;
  margin-bottom: 20px;
}
.login-box-msg {
  margin: 0 auto;
}

.logo-image {
  background-image: url("../../assets/logoremove.png");
  background-repeat: no-repeat;
  background-size: contain; /* 根據需求調整。例如，如果您希望圖像填充整個區域，可以使用 cover */
  width: 200px; /* 根據您的圖像尺寸調整 */
  height: 150px; /* 根據您的圖像尺寸調整 */
  display: block; /* 確保其他元素不會與圖像重疊 */
  margin: 0 auto;
}

#agreeTerms {
  scale: 1.5;
  margin-right: 10px;
}

.col-8 {
  margin-top: 5px;
}
</style>
