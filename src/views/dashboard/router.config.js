import {BasicLayout, BlankLayout, PageView, RouteView, UserLayout} from "@/components/layouts";

export const asyncRouterMap = [

    {
        path: '/',
        name: 'index2',
        component: BasicLayout,
        meta: {title: '首页'},
        redirect: '/UserHome',
        children: [
            {
                path: '/UserHome',
                name: 'UserHome',
                redirect: '/Index',
                component: RouteView,
                meta: {title: '首页', icon: 'dashboard', permission: ['user']},
                children: [
                    {
                        path: '/Index',
                        name: 'Index',
                        component: () => import('@/views/dashboard/Analysis'),
                        meta: {title: '用户中心', permission: ['user']}
                    },
                    {
                        path: '/Info',
                        name: 'Info',
                        hidden: true,
                        component: () => import('@/views/dashboard/Info'),
                        meta: {title: '我的信息', permission: ['user']}
                    },
                    {
                        path: '/Contract',
                        name: 'Contract',
                        hidden: true,
                        component: () => import('@/views/dashboard/Contract'),
                        meta: {title: '交易品中心', permission: ['user']}
                    },
                    {
                        path: '/Contract_th',
                        name: 'Contract_th',
                        hidden: true,
                        component: () => import('@/views/dashboard/Contract_th'),
                        meta: {title: '提货管理', permission: ['user']}
                    },
                    {
                        path: '/Contract_zh',
                        name: 'Contract_zh',
                        hidden: true,
                        component: () => import('@/views/dashboard/Contract_zh'),
                        meta: {title: '元宝置换', permission: ['user']}
                    },
                    {
                        path: '/Applyagent',
                        name: 'Applyagent',
                        hidden: true,
                        component: () => import('@/views/dashboard/applyagent'),
                        meta: {title: '申请代理', permission: ['user']}
                    },
                    {
                        path: '/ShareQrcode',
                        name: 'ShareQrcode',
                        hidden: true,
                        component: () => import('@/views/dashboard/ShareQrcode'),
                        meta: {title: '二维码分享', permission: ['user']}
                    },
                    {
                        path: '/ShareList',
                        name: 'ShareList',
                        hidden: true,
                        component: () => import('@/views/dashboard/ShareList'),
                        meta: {title: '我的分享', permission: ['user']}
                    },
                    {
                        path: '/RewardList',
                        name: 'RewardList',
                        hidden: true,
                        component: () => import('@/views/dashboard/RewardList'),
                        meta: {title: '奖金明细', permission: ['user']}
                    },
                    {
                        path: '/RewardListTh',
                        name: 'RewardListTh',
                        hidden: true,
                        component: () => import('@/views/dashboard/RewardListTh'),
                        meta: {title: '提货奖金明细', permission: ['user']}
                    },
                    {
                        path: '/NoticeList',
                        name: 'NoticeList',
                        hidden: true,
                        component: () => import('@/views/dashboard/NoticeList'),
                        meta: {title: '系统公告', permission: ['user']}
                    },
                    {
                        path: '/IncomeCount',
                        name: 'IncomeCount',
                        hidden: true,
                        component: () => import('@/views/dashboard/IncomeCount'),
                        meta: {title: '提货收益计算器', permission: ['user']}
                    },
                ]
            },

        ]
    },
    {
        path: '*', redirect: '/404', hidden: true
    }
]
export const constantRouterMap = [
    {
        path: '/user',
        component: UserLayout,
        redirect: '/user/login',
        hidden: true,
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import('@/views/user/Login')
            },
            {
                path: 'register',
                name: 'register',
                component: () => import('@/views/user/Register')
            },
            {
                path: 'Forget',
                name: 'Forget',
                component: () => import( '@/views/user/Forget')
            },
        ]
    },

    {
        path: '/404',

        component: () => import( '@/views/exception/404')
    },

]
