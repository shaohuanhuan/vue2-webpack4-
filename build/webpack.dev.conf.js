const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolveApp(relativePath) {
    return path.resolve(relativePath);
}
const staticPath = '/public/'
const assetsSubDirectory = 'public'
const assetsPublicPath = '/'

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ["style-loader", // 将 JS 字符串生成为 style 节点
                    "css-loader", // 将 CSS 转化成 CommonJS 模块
                    "postcss-loader",
                    "sass-loader" // 将 Sass 编译成 CSS
                  ]
            }
        ]
        // rules: [
        //     {
        //         test: /\.(js|vue)$/,
        //         loader: 'eslint-loader',
        //         enforce: "pre",
        //         include: [ path.resolve(__dirname, 'src')],
        //         options: {
        //             formatter: require('eslint-friendly-formatter')
        //         }
        //     }]
    },
    devtool: '#source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'), // 直接写'../public/index.html'这还不行
            // filename: path.resolve(__dirname, '../public/index.html'),
           // favicon: resolveApp('favicon.ico'),
            inject: true
            // path: staticPath
        })
    ],
    devServer: {
        // historyApiFallback: { // 通过http://localhost:8014/index.html能访问主页
        //   index: `/dist/index.html`
        // },
        host: '0.0.0.0',
        port: '8014',
        hot: false,
        disableHostCheck: true
    }
})
