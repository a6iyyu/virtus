import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/homepage.vue";
import About from "../views/about-us.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Homepage,
  },
  {
    path: "/about-us",
    name: "About Us",
    component: About,
  },
];

const server = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default server;