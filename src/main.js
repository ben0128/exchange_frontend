import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from './store/index.js'
import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseInput from "./components/UI/BaseInput.vue";
import store from "./store/index.js";
import BaseSpinner from "./components/UI/BaseSpinner.vue";
import vue3GoogleLogin from "vue3-google-login";

const BaseDialog = defineAsyncComponent(() =>
  import("./components//UI/BaseDialog.vue")
);

const BaseArticle = defineAsyncComponent(() =>
  import("./components/UI/BaseArticle.vue")
);

const app = createApp(App);
const CLIENT_ID = "895456664545-lc7b50ao3aub7mreacrot9n6ctafd2os.apps.googleusercontent.com"
app.component("base-dialog", BaseDialog);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-input", BaseInput);
app.component("base-spinner", BaseSpinner);
app.component("base-article", BaseArticle);
app.use(vue3GoogleLogin, {
  clientId: CLIENT_ID,
  scope: "profile email",
});
app.use(router);
app.use(store);

app.mount("#app");
