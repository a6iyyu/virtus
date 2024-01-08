import { createApp } from "vue";
import Homepage from "../views/homepage.vue";
import server from "../routers/router.js";
import "../static/css/component.css";
import "../static/css/homepage.css";

const app = createApp(Homepage);
app.use(server);
app.mount("#app");