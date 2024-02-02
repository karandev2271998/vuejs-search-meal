import { createApp } from "vue";
import router from "./router/index";
import store from "./store/index";
import "./style.css";
import App from "./App.vue";
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css'

createApp(App)
.use(router)
.use(store)
.use(LoadingPlugin)
.mount("#app");
