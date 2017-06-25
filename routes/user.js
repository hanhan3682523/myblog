/************************************
文 件 名：user.js
作    者：飘落的枫叶
创建日期：2017/6/24
功能描述：博客用户路由
*************************************/

var express = require('express');
var router = express.Router();
//首页路由
var homePage = require('../controller/user/index');
router.get('/',homePage);
module.exports = router;