import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import store from './store/'
import Home from './components/Home.vue'
import Zhuanlan from './components/Zhuanlan.vue'
import Collections from './components/Collections.vue'
import Explore from './components/Explore.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/zhuanlan/:id',
  component: Zhuanlan
  // name: '专栏',
  // children: [
  // {
  //   path: '/zhuanlan/all'
  // }, {
  //   path: '/zhuanlan/frontend'
  // }, {
  //   path: '/zhuanlan/backend'
  // }, {
  //   path: '/zhuanlan/android'
  // }, {
  //   path: '/zhuanlan/ios'
  // }, {
  //   path: '/zhuanlan/design'
  // }, {
  //   path: '/zhuanlan/product'
  // }, {
  //   path: '/zhuanlan/freebie'
  // }, {
  //   path: '/zhuanlan/article'
  // }]
}, {
  path: '/collections/:id',
  component: Collections
  // name: '收藏集',
  // children: [{
  //   path: '/collections/recommended'
  // }, {
  //   path: '/collections/all'
  // }]
}, {
  path: '/explore/:id',
  component: Explore
}]

const router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  router,
  components: { App }
}).$mount('#app')
