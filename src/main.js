// 入口文件
import Vue from 'vue'
//导入路由的包
import 	VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import { Header, Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)

import router from './router.js'

import app from './App.vue'


var vm = new Vue({
	el:'#app',
	render: c=> c(app),
	router  //挂载路由对象到vm实例上
})
