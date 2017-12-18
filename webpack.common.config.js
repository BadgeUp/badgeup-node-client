
const path = require('path');
const DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = function(target) {
    return {
        target,
        entry: {
            main: [
                'babel-polyfill',
                './src/index.js'
            ]
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: `${target === 'node' ? 'index' : 'browser'}.js`
        },
        plugins: [
            new DefinePlugin({
                'process.browser': target === 'web'
            })
        ],
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }]
        }
    };
};
