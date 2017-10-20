import Vue from "vue";
import Vuex from "vuex";
import createLogger from "./logger/logger.js";
import indexActions from "./actions/indexActions.js";
import indexMutations from "./mutations/indexMutations.js";
import indexState from "./states/indexState.js";
 

Vue.use(Vuex);

let store = new Vuex.Store({
	//store中的四大属性state、mutations、getters、actions、plugins
	"state" : {
		"index" : indexState
	},
	"mutations" : {
	 	//这里要罗列函数，这些函数名都是大写字母的。类比于React中的action.type
	 	...indexMutations
	},
	"actions" : {
		...indexActions
	},
	"plugins": [createLogger()],
	"getters" : {
		 
	}
});

export default store;