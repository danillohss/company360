import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Site from '@/views/Site.vue'
import Login from '@/views/Login.vue'

const routes = [
    {
        path: '/',
        name: 'site',
        component: Site
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;