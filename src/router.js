import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Site from '@/views/Site.vue'
import Login from '@/views/Login.vue'
import Services from '@/components/services/Services.vue'
import Sales from '@/components/sales/Sales.vue'
import Leads from '@/components/sales/Leads.vue'
import Contracts from '@/components/sales/Contracts.vue'

const routes = [
    {
        path: '/',
        name: 'site',
        component: Site
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [
            {
                path: 'Vendas',
                component: Sales,
                children: [
                    {
                        path: 'leads',
                        component: Leads
                    },
                    {
                        path: 'contratos',
                        component: Contracts
                    },
                ]
            },
            {
                path: 'servicos',
                component: Services
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {

    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;