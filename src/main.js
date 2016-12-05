import Vue from 'vue'
import App from './App'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import Home from './components/Home.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [{
  path: '/',
  component: Home
}]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
}).$mount('#app')
