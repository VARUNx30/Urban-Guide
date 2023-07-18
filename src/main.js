import { createApp } from "vue";
import App from "./App.vue";

import "@/assets/styles/main.css";

import "@/api";

import router from "@/router";
import store from "@/store";
import currency from "@/filters/currency";

import btnBase from "@/components/global/btn.vue";
import LazyLoadImage from "@/components/global/LazyLoadImage.vue";

const app = createApp(App);

app.use(router);
app.use(store);

app.config.globalProperties.$filters = {
  currency,
};

app.component("btnBase", btnBase);
app.component("LazyLoadImage", LazyLoadImage);

app.mount("#app");
