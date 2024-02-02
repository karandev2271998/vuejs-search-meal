import { createApp } from "vue";
import router from "./router/index";
import store from "./store/index";
import "./style.css";
import App from "./App.vue";
import { LoadingPlugin } from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import * as filters from "./filters";

const app = createApp(App);
app.use(router).use(store).use(LoadingPlugin).mount("#app");
app.config.globalProperties.$filters = filters;
