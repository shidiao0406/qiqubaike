var express = require('express');
var app = express();
var mainctrl = require("./controller/mainctrl.js");
 
//开启静态资源路由
app.set("view engine" , "ejs");

app.get("/",mainctrl.showIndex);
app.get("/api/indexbanner",mainctrl.indexbanner);
app.get("/api/waterfall",mainctrl.waterfall);
app.use(express.static('www'));
 
var server = app.listen(3000, function () {
	console.log("运行在了3000端口");
});