import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Rodape from '@/components/dashboard/Rodape.vue'
import Site from '@/views/Site.vue'
import Login from '@/views/Login.vue'
import Services from '@/components/services/Services.vue'
import Service from '@/components/services/Service.vue'
import Options from '@/components/services/Options.vue'
import Indicator from '@/components/services/Indicator.vue'
import Sales from '@/components/sales/Sales.vue'
import Leads from '@/components/sales/Leads.vue'
import Lead from '@/components/sales/Lead.vue'
import DefaultSale from '@/components/sales/DefaultSale.vue'
import Contracts from '@/components/sales/Contracts.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import RouteNotFound from '@/views/RouteNotFound.vue';
const routes = [
    {
        path: '/inicio',
        component: Site,
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [
            {
                path: 'vendas',
                name: 'vendas',
                component: Sales,
                children: [
                    {
                        path: 'leads',
                        name: 'leads',
                        component: Leads
                    },
                    {
                        path: 'leads/:id', //ROTA DINAMICA, PASSANDO UM ID(VARIÁVEL DINAMICA) COMO PARAMETRO
                        name: 'lead',
                        component: Lead
                    },
                    {
                        path: 'contratos',
                        name: 'contratos',
                        component: Contracts
                    },
                    {
                        path: '',
                        name: 'vendasPadrao',
                        component: DefaultSale,
                    },
                ]
            },
            {
                path: 'servicos',
                name: 'servicos',
                component: Services,
                children: [
                    {
                        path: ':id',
                        name: 'servico',
                        components: {
                            default: Service,
                            options: Options,
                            indicator: Indicator,
                        },
                    },
                ]
            },
            {
                path: 'Dashboard',
                name: 'Dashboard',
                components: {
                    default: Dashboard,
                    rodape: Rodape,
                }
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        //Redirecionamento// Caso o dashboard seja acessado pelo usuario, automaticamente ele será redirecionado para o inicio
        // path: 'dashboard',
        // redirect: '/inicio'
    },
    { 
        path: '/:catchAll(.*)*', 
        component: RouteNotFound, 
        name: 'RouteNotFound' 
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;