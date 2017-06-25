/************************************
文 件 名：admin.js
作    者：飘落的枫叶
创建日期：2017/6/24
功能描述：博客管理员路由
*************************************/

var express = require('express');
var router = express.Router();
router.get('/',function(req,res,next){
	res.render('index',{
		title:'飘落的枫叶博客'
	});
});

module.exports = router;