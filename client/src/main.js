import { createApp } from "vue";
import App from "./App.vue";
import server from ".";

const app = createApp(App);
app.use(server);
app.mount("#app");