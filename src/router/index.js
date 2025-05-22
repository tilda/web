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
      import(/* webpackChunkName: "about" */ "../views/ContactView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
