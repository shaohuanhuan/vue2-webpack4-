const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin') // css分离提取 老的ExtractTextPlugin

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/main.js'),

    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.js',
            '@': path.resolve(__dirname, '../src')
        }
    },
    externals: {
    },
    module: {
        rules: [
            { test: /\.vue$/,
                loader: 'vue-loader'
                // options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?cacheDirectory',
                include: [path.resolve(__dirname, '../src')],
                options: { // 如果有这个设置则不用再添加.babelrc文件进行配置
                    "babelrc": false,// 不采用.babelrc的配置
                    "plugins": [
                        "dynamic-import-webpack" // 支持动态import
                    ]
                }
            },
            {
                test: /\.scss$/,
                use: [miniCssExtractPlugin.loader,
                    // "style-loader", // 将 JS 字符串生成为 style 节点
                    "css-loader", // 将 CSS 转化成 CommonJS 模块
                    "sass-loader" // 将 Sass 编译成 CSS
                  ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 1000,
                    name: 'img/[name].[hash:7].[ext]' // assetsPath()
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]' // assetsPath()
                }
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new miniCssExtractPlugin({
          filename: "css/[name][chunkhash].css",
          chunkFilename: "css/[id][chunkhash].css"
        })
    ]
}
