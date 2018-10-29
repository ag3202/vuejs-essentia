import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
Vue.use(Router)

const auth = store.state.auth
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
    },
    // 首页路由配置
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home')
    },
    // 其他未配置的路由都跳转到首页
    {
        path: '*',
        // 重定向
        redirect: '/'
    }
]

const router = new Router({
    mode: 'history',
    routes
})

router.beforeEach((to,from,next)=>{
   if (auth && to.path.indexOf('/auth/') !== -1){
       next('/')
   } else{
       next()
   }
});

export default router