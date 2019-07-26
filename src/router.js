import Vue from "vue";
import Router from "vue-router";
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/Home'),
            meta: {keepAlive: true,},
        },
        {
            path: '/ShopIndex',
            name: 'ShopIndex',
            component: () =>import('@/views/ShopIndex'),
            meta: {keepAlive: true,},

        },
        {  name: 'error',
            path: '/error',
            component: () =>import('@/views/error'),
        }
    ]
})
