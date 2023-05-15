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
        meta: { autorization: false }
    },
    {
        path: '/home',
        name: 'home',
        meta: { autorization: true },
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
                        component: Leads,
                        //Função beforeEnter executa um trecho de código antes de entrar na rota, verifica se o usuario está autenticado por exemplo
                        beforeEnter() {
                            console.log('Guarda de rota global beforeEnter na rota leads')
                        }
                    },
                    {
                        path: 'leads/:id/:outroParametro', //ROTA DINAMICA, PASSANDO UM ID(VARIÁVEL DINAMICA) COMO PARAMETRO
                        name: 'lead',
                        component: Lead,
                        props: true,
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
                        props: {
                            default: true,
                            options: false,
                            indicator: true,
                        },
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
        //Redirecionamento // Caso o dashboard seja acessado pelo usuario, automaticamente ele será redirecionado para o inicio
        path: '/',
        redirect: '/inicio'
    },
    {
        path: '/:catchAll(.*)*',
        component: RouteNotFound,
        name: 'RouteNotFound'
    }
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return { el: to.hash }
        }
        return { left: 0, top: 0 }
    },
    routes,
})

// router.beforeEach((to) => {
//     console.log('Guarda global beforeEach: antes de navegar')
//     //o parametro 'to' retorna a rota ao qual o usuario está indo e a 'from' de onde ele veio
//     console.log(to)
// })

// router.afterEach((to) => {
//     console.log('Guarda global afterEach: após navegar ')
//     //o parametro 'to' retorna a rota ao qual o usuario está indo e a 'from' de onde ele veio
//     console.log(to)
// })

router.beforeResolve(() => {
    console.log()
})

export default router;