import Vue from 'vue'
import App from './App'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
}).$mount('#app')
