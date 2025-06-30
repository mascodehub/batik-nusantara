import "./bootstrap";
import "../css/app.css";
import { createApp } from "vue";
import router from "./router/index";
import pinia from "./store";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    fas 
} from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const app = createApp(App);

app.use(router); // Gunakan Vue Router
app.use(pinia); // Gunakan Pinia
app.component("font-awesome-icon", FontAwesomeIcon); // Registrasikan komponen FontAwesome

app.mount("#app");
