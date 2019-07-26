import Vue from 'vue'
import router from './router'
import store from './store'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import notification from 'ant-design-vue/es/notification'
import { ACCESS_TOKEN } from '@/store/mutation-types'

NProgress.configure({ showSpinner: false })

const whiteList = ['login', 'register', 'registerResult','Forget']

router.beforeEach((to, from, next) => {
  NProgress.start()

  if (Vue.ls.get(ACCESS_TOKEN)) {
    /* has token */
    if (to.path === '/user/login') {
      next({ path: '/dashboard/workplace' })
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {
        store
          .dispatch('GetInfo')
          .then(res => {
            const roles = res.result && res.result.role
            store.dispatch('GenerateRoutes', { roles }).then(() => {
              router.addRoutes(store.getters.addRouters)
              const redirect = decodeURIComponent(from.query.redirect || to.path)
              if (to.path === redirect) {
                next({ ...to, replace: true })
              } else {
                next({ path: redirect })
              }
            })
          })
          .catch(() => {
            notification.error({
              message: '错误',
              description: '请求用户信息失败，请重试'
            })
            store.dispatch('Logout').then(() => {
              next({ path: '/user/login', query: { redirect: to.fullPath } })
            })
          })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.includes(to.name)) {
      next()
    } else {
      next({ path: '/user/login', query: { redirect: to.fullPath } })
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
