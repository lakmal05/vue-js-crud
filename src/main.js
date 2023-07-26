
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import App from "./App.vue";
import { createApp} from "vue";
import router from "./routers";
import { createPinia } from "pinia";

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
