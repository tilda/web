import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "about",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import("../views/ContactView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
