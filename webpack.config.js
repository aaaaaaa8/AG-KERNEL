module.exports = {
	module : {
		rules : [
			{
				/**
				 * Enable Webpack & Typescript image (import) support or else they'll keep shouting!
				 */
				test    : /\.(png|jpe?g|gif|jp2|webp|svg)$/,
				loader  : 'file-loader',
				options : {
					name : '[name].[ext]'
				}
			}
		]
	}
}