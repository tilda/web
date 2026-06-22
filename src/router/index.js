import { createRouter, createWebHistory } from "vue-router"
import ContactView from "@/views/ContactView.vue"
import HomeView from "@/views/HomeView.vue"
import BlogView from "@/views/BlogView.vue"

const routes = [
    {
        path: "/",
        name: "about",
        component: HomeView,
        meta: {
            heading: "hi, i'm tilda!",
            subheading: "note: not my real name, although a lot of people tend to treat it as one."
        },
    },
    {
        path: "/contact",
        name: "contact",
        component: ContactView,
        meta: {
            heading: "get in touch",
            subheading: "feel free to reach out - i'm always happy to chat!",
            wip: true
        }
    },
    {
        path: "/blog",
        name: "blog",
        component: BlogView,
        meta: {
            heading: "blog posts",
            subheading: "customary various ramblings",
            wip: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
