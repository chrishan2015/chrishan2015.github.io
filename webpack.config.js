var path = require("path");

module.exports = {
	devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
	entry: {
		index: "./index.js"//,
		//pIndex: "./js/practice/pIndex.js"
	},
	output: {
		path: __dirname,//输出文件的保存路径
		filename: "[name].bundle.js"//输出文件的名称
	},
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel-loader'},//, query:{presets:['es2015']}
			{test: /\.css$/, loader: "style-loader!css-loader"},
			{test: /\.(jpg|png)$/, loader: "url-loader?limit=50000"},
			{test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"}
		]
	},
	plugins: [

    ],
    devServer: {
    	colors: true,//终端中输出结果为彩色
    	historyApiFallback: true,//不跳转
    	inline: true
    },
	watch:true
}