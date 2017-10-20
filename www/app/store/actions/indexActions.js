import * as actiontypes from "../actiontypes.js";
export default {
	//请求默认的banner数据
	[actiontypes.FETCHINITINDEXBANNER]({commit}){
		$.get("/api/indexbanner",function(data){
			var dataobj = typeof data === "object" ? data : JSON.parse(data);
			commit(actiontypes.FETCHINITINDEXBANNER  , {"data" : dataobj.data});
		});
	}
}