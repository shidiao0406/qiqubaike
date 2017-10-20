import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
//使用路由
Vue.use(VueRouter);
//全局store
import store from "./store/index.js";
//全局router
import router from "./router.js";
//主文件
import App from "./components/App.vue";

//定义指令
Vue.directive("tap",function(el,props){
	$(el).bind("touchstart" , function(){
		router.push({"name" : props.value.name});
	});
});

//挂载根
new Vue({
	el : "#app",
	store,
	router,
	components : {
		App
	}
});
