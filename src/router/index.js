import Vue from 'vue'
import Router from 'vue-router'
// 引入 ./routes.js 的默认值
import routes from './routes'
import store from '../store'
Vue.use(Router)

const auth = store.state.auth


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