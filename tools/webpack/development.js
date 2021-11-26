/**
 * External dependencies
 */
const { join } = require( 'path' );

/**
 * WordPress dependencies
 */
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );

const sharedConfig = {
	mode: 'development',
	target: 'browserslist',
	output: {
		filename: '[name]/index.min.js',
		path: join( __dirname, '..', '..', 'build' ),
	},
};

module.exports = [
	{
		...sharedConfig,
		name: 'react-refresh-entry',
		entry: {
			'react-refresh-entry':
				'@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js',
		},
		plugins: [ new DependencyExtractionWebpackPlugin() ],
	},
	{
		...sharedConfig,
		name: 'react-refresh-runtime',
		entry: {
			'react-refresh-runtime': {
				import: 'react-refresh/runtime.js',
				library: {
					name: 'ReactRefreshRuntime',
					type: 'window',
				},
			},
		},
		plugins: [
			new DependencyExtractionWebpackPlugin( {
				useDefaults: false,
			} ),
		],
	},
];
