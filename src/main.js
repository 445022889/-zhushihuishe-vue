import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App.vue'
import router from './router'
import store from './store'
import mandMobile from 'mand-mobile'
import 'normalize.css'
import 'mand-mobile/lib/mand-mobile.css'
import './assets/responsive'
import { VueAxios } from './utils/request'


if ('addEventListener' in document && 'ontouchstart' in window) {
    FastClick.prototype.focus = function (targetElement) {
        targetElement.focus()
    }
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body)
    }, false)
}
Vue.config.productionTip = false
Vue.use(mandMobile)
Vue.use(VueAxios)
new Vue({
    router,
    store,
    render: function (h) { return h(App) }
}).$mount('#app')
