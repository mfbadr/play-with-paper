var path = require('path');
module.exports = {
	entry: "./src/js/index.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: "json-loader"
			},
			{
				test: /\.node$/,
				loader: "node-loader"
			},
			{
				test: /\.css/,
				loaders: ['style-loader', 'css-loader'],
				include: __dirname + '/src'
			}
	]
  },
};
