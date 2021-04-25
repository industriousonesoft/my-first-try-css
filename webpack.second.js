const path = require('path')
const { merge } = require('webpack-merge')

module.exports = merge({}, {
    entry: {

    },
    output: {
        
    },
    mode: "development",
    devServer: {
        contentBase: path.resolve(__dirname, './src/second-demo'),
        hot: true
    }
})