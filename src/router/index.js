import Vue from 'vue'
import VueRouter from 'vue-router'

// 1、安装插件
Vue.use(VueRouter)

const routes = [
    { 
        path: '',
        redirect: '/home'
    },
    {
        path:'/home',
        component: () => import('@/views/home/home.vue')
    },
    {
        path:'/category',
        component: () => import('@/views/category/category')
    },
    {
        path:'/cart',
        component: () => import('@/views/cart/cart.vue')
    },
    {
        path:'/profile',
        component: () => import('@/views/profile/profile')
    }
]
// 2、创建路由对象
const router = new VueRouter({
    routes,
    mode:'history'
})
export default  router