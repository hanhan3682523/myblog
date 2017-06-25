/************************************
文 件 名：webpack.config.js
作    者：飘落的枫叶
创建日期：2017/6/24
功能描述：该文件用于存储webpack打包配置
*************************************/

var path = require("path");

module.exports={
    // 项目入口
	entry:  "./src/app.js",
    // 打包文件输出路径
	output: {
		path: path.join(__dirname,"./public/js"),
		filename: "bundle.js",
	},
	module: {
        loaders: [{
        	test: /\.js$/, 
        	loader: "babel-loader",
        	query: {
        		presets: ['react','es2015']
        	}
        },{
        	test: /\.jsx$/,
        	loader: 'babel-loader', 
        	query: {
        		presets: ['react', 'es2015']
        	}
        },{
        	test: /\.css$/, 
        	loader: "style!css"
        },{
        	test: /\.(jpg|png|otf)$/, 
        	loader: "url?limit=8192"
        },{
        	test: /\.scss$/,
        	loader: "style!css!sass"
        }]
    }
};