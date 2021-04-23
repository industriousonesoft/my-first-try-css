const HtmlWP = require('html-webpack-plugin')
const CopyWP = require('copy-webpack-plugin')
const path = require('path')
const { merge } = require('webpack-merge')

module.exports = merge({}, {
    entry: {

    },
    output: {
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWP({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new CopyWP({
            patterns: [
                path.resolve(__dirname, './src/style.css')
            ]
        })
    ]
})