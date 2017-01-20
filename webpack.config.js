
// 自动生成html插件
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
	entry: './app/index.js',
	output: {
		path: './public',
		filename: 'bundle.js'
	},
	module: {
		// loader 加载器
		loaders: [
			{test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'},
			{test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
		]
	},
	devSever: {
		inline: true
	},
	plugins: [
		HTMLWebpackPluginConfig
	]
}