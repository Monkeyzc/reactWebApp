
var path = require('path')
// 自动生成html插件
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/app/index.html'),
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
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
			{test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
		    {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
		    {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'svg-url-loader'},
	        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'}
		]
	},
	devSever: {
		inline: true
	},
	plugins: [
		HTMLWebpackPluginConfig
	]
}