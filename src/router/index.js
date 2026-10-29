import { createRouter, createWebHistory, RouterView } from 'vue-router'
import BlogPostView from '@/views/BlogPostView.vue'
import BlogView from '@/views/BlogView.vue'
import ContactView from '@/views/ContactView.vue'
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import BlogLayout from '@/views/BlogLayout.vue'

const routes = [
    {
        path: '/',
        name: 'about',
        component: HomeView,
        meta: {
            heading: "hi, i'm tilda!",
            subheading:
                'note: not my real name, although a lot of people tend to treat it as one',
        },
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectsView,
        meta: {
            heading: 'my projects',
            subheading: "for the most part, things i'm proud of",
        },
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView,
        meta: {
            heading: 'get in touch',
            subheading: "feel free to reach out - i'm always happy to chat!",
        },
    },
    {
        path: '/blog',
        name: 'blog',
        component: BlogLayout,
        meta: {
            heading: 'blog posts',
            subheading: 'customary various ramblings',
        },
        children: [
            {
                path: '',
                name: 'blog-list',
                component: BlogView
            },
            {
                path: ':slug',
                name: 'blog-post',
                component: BlogPostView
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

router.beforeEach((to) => {
    const postTildeTitle = to.path !== '/' ? to.path : ''
    document.title = `~${postTildeTitle}`
})

export default router
