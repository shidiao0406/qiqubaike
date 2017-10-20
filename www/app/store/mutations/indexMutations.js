import * as actiontypes from "../actiontypes.js";
export default {
	[actiontypes.FETCHINITINDEXBANNER](state,payload){
		state.index.indexbanner = payload.data;
	}
};