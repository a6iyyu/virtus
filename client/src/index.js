import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/homepage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Homepage,
  },
];

const server = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default server;