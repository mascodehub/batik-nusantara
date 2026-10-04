import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { definePreset } from "@primeuix/themes";

import router from "./common/router";
import "@fortawesome/fontawesome-free/css/all.css";
import { ConfirmationService, ToastService } from "primevue";

const app = createApp(App);
const pinia = createPinia();

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false || "none",
    },
  },
});

app.use(pinia);
app.use(router);
app.use(ConfirmationService);

app.mount("#app");
