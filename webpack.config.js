const path = require('path')

module.export = {
	entry: './index.js',
	output: {
		filename: './main.js'
	},
	module: {
	    rules: [
	      {
	        test: /\.json$/,
	        loader: 'json-loader',
	        type: "javascript/auto",
	          query: {
	             presets: ['es2015']
	          }
	      }
	    ]
  }

}