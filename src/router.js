import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Site from '@/views/Site.vue'
import Login from '@/views/Login.vue'
import Services from '@/components/services/Services.vue'
import Sales from '@/components/sales/Sales.vue'
import Leads from '@/components/sales/Leads.vue'
import Contracts from '@/components/sales/Contracts.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'
const routes = [
    {
        path: '/inicio',
        name: 'site',
        component: Site,
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [
            {
                path: 'Vendas',
                name: 'Vendas',
                component: Sales,
                children: [
                    {
                        path: 'leads',
                        name: 'Leads',
                        component: Leads
                    },
                    {
                        path: 'contratos',
                        name: 'Contratos',
                        component: Contracts
                    },
                ]
            },
            {
                path: 'servicos',
                component: Services
            },
            {
                path: 'Dashboard',
                name: 'Dashboard',
                component: Dashboard,
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