import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: () => import("@/src/App.vue"),
  },
];

const server = createRouter({
  history: createWebHistory(),
  routes,
});

export default server;