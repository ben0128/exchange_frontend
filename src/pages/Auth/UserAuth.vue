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
        <form action="../../index.html" method="post">
          <div class="input-group mb-3">
            <input type="email" class="form-control" placeholder="Email" />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
            />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3" v-if="!checkMode">
            <input
              type="password"
              class="form-control"
              placeholder="Retype password"
            />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <div class="icheck-primary">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="terms"
                  value="agree"
                />
                <label for="agreeTerms" v-if="checkMode"> Remember Me </label>
                <label for="agreeTerms" v-else>
                  I agree to the
                  <a href="#" @click.prevent="changeShow(true)">terms</a>
                </label>
              </div>
            </div>

            <div class="col-4">
              <button
                type="submit"
                class="btn btn-primary btn-block"
                @click.prevent="submitForm"
              >
                {{ buttonText }}
              </button>
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
          <a href="#">I forgot my password</a>
          <br />
          <a href="#" @click="changeMode">Register a new membership</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import background from "../../assets/loginbackground.jpg";

export default {
  setup() {
    const bgImagePath = ref(background);
    const show = ref(false);
    const text = ref("本網站僅供參考，不構成投資建議!!");
    const mode = ref("Login");

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

    function submitForm() {}
    onMounted(() => {
      document.body.style.backgroundImage = `url(${bgImagePath.value})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center center";
    });

    function changeMode() {
      mode.value = mode.value === "Login" ? "Register" : "Login";
    }

    const checkMode = computed(() => {
      return mode.value === "Login";
    });

    onBeforeUnmount(() => {
      document.body.style.backgroundImage = "";
    });
    return {
      bgImagePath,
      show,
      changeShow,
      text,
      mode,
      buttonText,
      submitForm,
      description,
      changeMode,
      checkMode,
    };
  },
};
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