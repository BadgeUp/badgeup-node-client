
const path = require('path');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = function(target) {
    return {
        target,
        entry: './src/index.js',
        externals: [nodeExternals()],
        output: {
            path: path.join(__dirname, 'dist'),
            filename: `${target === 'node' ? 'index' : 'browser'}.js`,
            libraryTarget: 'umd'
        },
        plugins: [
            new DefinePlugin({
                'process.browser': target === 'web'
            }),
            new UglifyPlugin()
        ]
    };
};
