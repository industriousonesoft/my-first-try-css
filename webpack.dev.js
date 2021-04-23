const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const path = require('path')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-cheap-source-map',
    watch: true,
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        hot: true
    }
})