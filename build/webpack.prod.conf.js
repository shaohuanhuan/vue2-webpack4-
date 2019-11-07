const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin // 以树图的方式展示打包后的文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 清空dist文件夹
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') // css压缩
// const miniCssExtractPlugin = require('mini-css-extract-plugin') // css分离提取, 老的ExtractTextPlugin

let webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    devtool: false,
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[id].[chunkhash].js'
    },
    externals: { // 大文件单独打包
      'vue': 'Vue'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
                BASE_API: '"https://api-prod"',
                APP_ORIGIN: '"https://www.bb.com"'
            }
        }),
        
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            inject: true,
            //favicon: resolveApp('favicon.ico'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            //  path: staticPath,
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
        new CleanWebpackPlugin(),
        // new BundleAnalyzerPlugin()
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(__dirname, '../static'),
        //         to: config.build.assetsSubDirectory,
        //         ignore: ['.*']
        //     }
        // ]),
    ],
    optimization: {
        splitChunks: { // 代码分割
          chunks: 'initial',
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: 1
            }
          }
        },
        runtimeChunk: {
          name: entrypoint => `manifest.${entrypoint.name}`
        },
        minimizer: [
          // new UglifyJsPlugin({
          //   cache: true,
          //   parallel: true,
          //   sourcMap: true
          // }),
          new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
            canPrint: true
          })
        ]
    }
})
// if (config.build.bundleAnalyzerReport) {
//     let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
//     webpackConfig.plugins.push(new BundleAnalyzerPlugin())
// }
module.exports = webpackConfig
