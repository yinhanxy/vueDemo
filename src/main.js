import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
//引人ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


//引入页面
import Login from './components/login'
import Register from './components/register'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)
let router = new VueRouter({
	routes: [
		{
			path: '/',
			component: Login
		},
		{
			path: '/register',
			component: Register
		}
	]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
