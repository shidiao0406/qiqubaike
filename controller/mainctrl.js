var fs = require("fs");
var url = require("url");

exports.showIndex = function(req,res){
	//用读取文件代替查询数据库
	fs.readFile("./data/indexdata.json",function(err,data){
		fs.readFile("./data/cssreset.css",function(err,data2){
			res.render("index",{
				indexdata : data,
				cssreset : data2
			});
		});
	});
}


//接口，首页的banner
exports.indexbanner = function(req,res){
	fs.readFile("./data/indexbanner.json",function(err,data){
		res.send(data.toString());
	});
}


//接口瀑布流

exports.waterfall = function(req,res){
	var pos = url.parse(req.url,true).query.pos;
	fs.readFile("./data/waterfall.json",function(err,data){
		var arr = JSON.parse(data.toString()).data;
		arr.forEach((item,index)=>{
	 
			if(item["_pos"] == pos){
				 res.json({"results" : arr.slice(index + 1 , index + 6)})
			}
		})
	});
}