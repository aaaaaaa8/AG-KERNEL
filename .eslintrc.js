/**
 * @see https://www.wisdomgeek.com/development/web-development/typescript/how-to-gatsbyjs-typescript-eslint/ TypeScript and ESLint for GatsbyJS
 */
module.exports = {
	parserOptions : {
		ecmaVersion  : 2018,
		sourceType   : 'module',
		ecmaFeatures : {
			jsx : true
		}
	},
	env           : {
		browser  : true,
		es6      : true,
		commonjs : true
	},
	rules         : {
		'react/prop-types'                  : 'off',
		'react/no-unescaped-entities'       : 'off',
		'@typescript-eslint/ban-ts-comment' : 'off',
		'@typescript-eslint/ban-types'      : 'off'
	},
	extends       : [ // 'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended' ],
	settings      : {
		react : {
			version : 'detect'
		}
	}
}