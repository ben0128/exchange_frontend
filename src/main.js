import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from './store/index.js'
import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseInput from "./components/UI/BaseInput.vue";
import store from "./store/index.js";
import BaseSpinner from "./components/UI/BaseSpinner.vue";

const BaseDialog = defineAsyncComponent(() =>
  import("./components//UI/BaseDialog.vue")
);

const app = createApp(App);

app.component("base-dialog", BaseDialog);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-input", BaseInput);
app.component("base-spinner", BaseSpinner);
app.use(router)
app.use(store)

app.mount("#app");
