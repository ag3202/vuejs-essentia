import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/auth/register',
        name: 'Register',
        component: () => import('@/views/auth/Register')
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('@/views/Test')
    }
]

const router = new Router({
    mode: 'history',
    routes
})

export default router