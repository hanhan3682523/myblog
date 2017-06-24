//加载配置文件
var config = require('./config');
//express框架
var express = require('express');
//路径模块
var path = require('path');
//express的日志模块
var logger =require('morgan');
//express的cookie模块，用于获取cookie内容
var cookieParser = require('cookie-parser');
//express的HTTP请求体解析模块
var bodyParser = require('body-parser');
//加载路由
var index =require('./routes/index');
//加载mongoDB模块
var mongoose = require('mongoose');
//连接数据库
mongoose.connect(config.db,function(err){
	if (err) {
		console.log('连接数据库失败，'+err.message);
		process.exit(1);
	}else{
		console.log('连接数据库成功。');
	}
});

