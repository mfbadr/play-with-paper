var path = require('path');
module.exports = {
	entry: {
		'bundle': "./src/js/index.js",
		'player': "./src/js/player.js",
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
};
