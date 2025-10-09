import { createRouter, createWebHistory } from "vue-router"
import ContactView from "../views/ContactView.vue"
import HomeView from "../views/HomeView.vue"

const routes = [
    {
        path: "/",
        name: "about",
        component: HomeView,
    },
    {
        path: "/contact",
        name: "contact",
        component: ContactView,
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
