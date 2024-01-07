import { createApp } from "vue";
import App from "./App.vue"
import server from "../routers/router.js";

const app = createApp(App);
app.use(server);
app.mount("#app");