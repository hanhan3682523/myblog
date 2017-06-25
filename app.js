/************************************
文 件 名：app.js
作    者：飘落的枫叶
创建日期：2017/6/24
功能描述：server的主程序
*************************************/

//加载配置文件
var config = require('./config');
//express框架
var express = require('express');
//路径模块
var path = require('path');
//用于加载网页的logo，显示在网页title之前
var favicon = require('serve-favicon');
//express的日志模块
var logger =require('morgan');
//express的cookie模块，用于获取cookie内容
var cookieParser = require('cookie-parser');
//session模块
var session = require('express-session');
//express的HTTP请求体解析模块
var bodyParser = require('body-parser');
//加载用户路由
var user =require('./routes/user');
//加载管理员路由
var admin =require('./routes/admin');
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

//express实例
var app = express();

//重新设置路径为view，可通过get获取
app.set('views', path.join(__dirname, 'view/user'));

//设置模板引擎
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

//设置路由 url前面显示的logo
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(session({
	resave:true,
	saveUninitialized:true,
	secret:'飘落的枫叶个人博客'
}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:false
}));

//app.use(cookieParser());
//静态文件路由
app.use(express.static(path.join(__dirname,'public')));

//用户访问路由
app.use('/',user);
//管理员访问路由
app.use('/admin',admin);
//404时候路由
app.use(function(req,res,next){
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
   res.render('error', {
     config: config,
     message: err.message,
     error: {}
   });
});

module.exports = app;
console.log('开启成功');