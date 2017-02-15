var path = require('path');
var webpack = require('webpack');
module.exports = {
	entry: {
		bundle:"./src/js/index.js",
		vendor: ['paper']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				test: /\.css/,
				loaders: ['style-loader', 'css-loader'],
				include: __dirname + '/src'
			}
	]
  },
  plugins: [
	  new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename:"vendor.bundle.js" } )
  ]
};
